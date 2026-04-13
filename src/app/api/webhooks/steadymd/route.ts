import { NextResponse } from "next/server";

// SteadyMD sends SNS notifications for consult status changes
// In production: verify SNS signature, update order status in DB

export async function POST(request: Request) {
  const body = await request.json();

  // Handle SNS subscription confirmation
  if (body.Type === "SubscriptionConfirmation") {
    const confirmUrl = body.SubscribeURL;
    if (confirmUrl) {
      await fetch(confirmUrl);
      console.log("[SteadyMD Webhook] SNS subscription confirmed");
    }
    return NextResponse.json({ confirmed: true });
  }

  // Handle notification
  if (body.Type === "Notification") {
    const message = JSON.parse(body.Message);
    const { consultGuid, newStatus, oldStatus, episodeGuid } = message;

    console.log(
      `[SteadyMD Webhook] Consult ${consultGuid}: ${oldStatus} → ${newStatus}`
    );

    // In production: update order status in database
    // Map SteadyMD statuses to our order statuses:
    // completed → prescribed
    // rejected → denied
    // in_progress → reviewing

    switch (newStatus) {
      case "assigned":
      case "in_progress":
        console.log(`[Order] Episode ${episodeGuid}: reviewing`);
        break;
      case "completed":
        console.log(`[Order] Episode ${episodeGuid}: prescribed`);
        break;
      case "rejected":
      case "referred_out":
        console.log(`[Order] Episode ${episodeGuid}: denied`);
        break;
    }
  }

  return NextResponse.json({ received: true });
}
