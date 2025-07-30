"use server";

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { IContactFormSubmission } from "@/types/contact_form_submission";

const resend = new Resend(process.env.RESEND_API_KEY!);

function createEmailHTML(data: IContactFormSubmission): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f8f9fa;
        }
        .container {
          background-color: #ffffff;
          border-radius: 8px;
          padding: 30px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .header {
          border-bottom: 3px solid #007bff;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .header h1 {
          color: #007bff;
          margin: 0;
          font-size: 24px;
        }
        .field {
          margin-bottom: 20px;
        }
        .field-label {
          font-weight: 600;
          color: #495057;
          margin-bottom: 5px;
          display: block;
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 0.5px;
        }
        .field-value {
          background-color: #f8f9fa;
          padding: 12px;
          border-radius: 4px;
          border-left: 4px solid #007bff;
          margin: 0;
        }
        .message-field .field-value {
          white-space: pre-wrap;
          min-height: 60px;
        }
        .contact-info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .footer {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e9ecef;
          color: #6c757d;
          font-size: 14px;
          text-align: center;
        }
        @media (max-width: 600px) {
          .contact-info {
            grid-template-columns: 1fr;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📧 New Contact Form Submission</h1>
        </div>
        
        <div class="contact-info">
          <div class="field">
            <span class="field-label">First Name</span>
            <div class="field-value">${data.firstName}</div>
          </div>
          
          <div class="field">
            <span class="field-label">Last Name</span>
            <div class="field-value">${data.lastName}</div>
          </div>
          
          <div class="field">
            <span class="field-label">Email Address</span>
            <div class="field-value">
              <a href="mailto:${data.email}" style="color: #007bff; text-decoration: none;">
                ${data.email}
              </a>
            </div>
          </div>
          
          <div class="field">
            <span class="field-label">Phone Number</span>
            <div class="field-value">
              ${data.phone ? `<a href="tel:${data.phone}" style="color: #007bff; text-decoration: none;">${data.phone}</a>` : 'Not provided'}
            </div>
          </div>
        </div>
        
        <div class="field message-field">
          <span class="field-label">Message</span>
          <div class="field-value">${data.message}</div>
        </div>
        
        <div class="footer">
          <p>This email was sent from your website's contact form.</p>
          <p>Received on ${new Date().toLocaleString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit', 
            timeZoneName: 'short' 
          })}</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    // Check if required environment variables are set
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

    const { subject, message } = await request.json();
    
    if (!subject || !message) {
      return NextResponse.json(
        { error: "Subject and message are required" },
        { status: 400 }
      );
    }
    
    // Parse the JSON message back to the original form data
    let formData: IContactFormSubmission;
    try {
      formData = JSON.parse(message);
    } catch (parseError) {
      console.error("Error parsing form data:", parseError);
      return NextResponse.json(
        { error: "Invalid form data format" },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      return NextResponse.json(
        { error: "Missing required form fields" },
        { status: 400 }
      );
    }

    const emailHtml = createEmailHTML(formData);
    
    console.log("Sending email with Resend...");
    const { data, error } = await resend.emails.send({
      from: process.env.SENDER_EMAIL!,
      to: process.env.CONTACT_EMAIL!,
      subject: `${subject}`,
      html: emailHtml,
      // Also include a plain text version
      text: `
New Contact Form Submission

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

Message:
${formData.message}

Received on: ${new Date().toLocaleString()}
      `.trim(),
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
