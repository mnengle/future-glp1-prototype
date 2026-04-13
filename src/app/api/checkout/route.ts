import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "sk_test_placeholder");

const PRICES: Record<string, Record<string, number>> = {
  semaglutide: { injection: 17900, oral: 24900 },
  tirzepatide: { injection: 27900, oral: 27900 },
};

export async function POST(request: Request) {
  const { medicationType, medicationForm, email } = await request.json();

  const amountCents = PRICES[medicationType]?.[medicationForm] ?? 17900;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountCents,
      currency: "usd",
      receipt_email: email,
      metadata: {
        medication_type: medicationType,
        medication_form: medicationForm,
        product: "future-glp1",
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      amount: amountCents,
    });
  } catch {
    // Prototype fallback — works without Stripe keys
    return NextResponse.json({
      clientSecret: "demo_secret_" + Date.now(),
      amount: amountCents,
      demo: true,
    });
  }
}
