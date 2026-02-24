import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const { email, firstName, lastName, unsubscribed } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "email is required" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.contacts.create({
      email,
      firstName,
      lastName,
      unsubscribed: unsubscribed ?? false
    });

    if (error) {
      console.error("Resend contacts error:", error);
      return NextResponse.json(
        { error: "Failed to create contact" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (error) {
    console.error("Unexpected error in contacts API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
