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

    const { contactId, email, segmentId } = await request.json();

    if (!segmentId) {
      return NextResponse.json(
        { error: "segmentId is required" },
        { status: 400 }
      );
    }

    if (!contactId && !email) {
      return NextResponse.json(
        { error: "contactId or email is required" },
        { status: 400 }
      );
    }

    const payload = contactId
      ? { contactId, segmentId }
      : { email, segmentId };

    const { data, error } = await resend.contacts.segments.add(payload);

    if (error) {
      console.error("Resend segments error:", error);
      return NextResponse.json(
        { error: "Failed to add contact to segment" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Unexpected error in segments API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
