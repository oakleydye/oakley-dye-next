import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    if (!process.env.CONTACT_EMAIL || !process.env.SENDER_EMAIL) {
      console.error("CONTACT_EMAIL or SENDER_EMAIL is not set");
      return NextResponse.json(
        { error: "Email configuration incomplete" },
        { status: 500 }
      );
    }

    const { to, subject, html, text } = await request.json();

    if (!subject || !html) {
      return NextResponse.json(
        { error: "Subject and html are required" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: process.env.SENDER_EMAIL!,
      to: to || process.env.CONTACT_EMAIL!,
      subject,
      html,
      ...(text ? { text } : {}),
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data?.id);
    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (error) {
    console.error("Unexpected error in contact API:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
