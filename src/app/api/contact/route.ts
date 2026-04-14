import { NextResponse } from "next/server";

// In production, wire this to Resend, SendGrid, or a Linear/Zendesk webhook.
// For the prototype we just log the submission and return success so the
// UI flow works end-to-end.

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, reason, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  console.log("[Contact] New submission", {
    name,
    email,
    reason: reason ?? "General",
    message: message.slice(0, 200),
    receivedAt: new Date().toISOString(),
  });

  // TODO: Resend / SendGrid / Linear webhook
  // await resend.emails.send({ from: ..., to: "hello@future.co", subject: ..., text: message })

  return NextResponse.json({
    success: true,
    message: "Message received. We'll respond within one business day.",
  });
}
