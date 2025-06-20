"use server";

import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: NextRequest) {
  const { subject, message } = await request.json();

  const msg = {
    to: process.env.CONTACT_EMAIL!,
    from: process.env.SENDER_EMAIL!,
    subject,
    text: message,
  };

  try {
    await sgMail.send(msg);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
