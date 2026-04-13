import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

// In production: store in DB, send via Resend
// For prototype: we generate a token and return it directly

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const token = uuid();
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000).toISOString(); // 15 min

  // In production: save to DB & send email via Resend
  // For prototype: return token directly so client can auto-login
  console.log(`[Auth] Magic link for ${email}: /api/auth/verify?token=${token}`);

  return NextResponse.json({
    success: true,
    // Only returned in prototype — would be emailed in production
    token,
    expiresAt,
    message: `Magic link sent to ${email}`,
  });
}
