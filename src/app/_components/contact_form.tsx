"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import * as React from "react";
import CustomButton from "./custom_button";
import { toast } from "sonner";
import { isSpam } from "@/lib/spam_filters";

function createEmailHTML(
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  message: string
): string {
  const timestamp = new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; }
    .container { background-color: #ffffff; border-radius: 8px; padding: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
    .header { border-bottom: 3px solid #007bff; padding-bottom: 20px; margin-bottom: 30px; }
    .header h1 { color: #007bff; margin: 0; font-size: 24px; }
    .field { margin-bottom: 20px; }
    .field-label { font-weight: 600; color: #495057; margin-bottom: 5px; display: block; text-transform: uppercase; font-size: 12px; letter-spacing: 0.5px; }
    .field-value { background-color: #f8f9fa; padding: 12px; border-radius: 4px; border-left: 4px solid #007bff; margin: 0; }
    .message-field .field-value { white-space: pre-wrap; min-height: 60px; }
    .contact-info { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef; color: #6c757d; font-size: 14px; text-align: center; }
    @media (max-width: 600px) { .contact-info { grid-template-columns: 1fr; } }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Form Submission</h1>
    </div>
    <div class="contact-info">
      <div class="field">
        <span class="field-label">First Name</span>
        <div class="field-value">${firstName}</div>
      </div>
      <div class="field">
        <span class="field-label">Last Name</span>
        <div class="field-value">${lastName}</div>
      </div>
      <div class="field">
        <span class="field-label">Email Address</span>
        <div class="field-value"><a href="mailto:${email}" style="color:#007bff;text-decoration:none;">${email}</a></div>
      </div>
      <div class="field">
        <span class="field-label">Phone Number</span>
        <div class="field-value">${phone ? `<a href="tel:${phone}" style="color:#007bff;text-decoration:none;">${phone}</a>` : "Not provided"}</div>
      </div>
    </div>
    <div class="field message-field">
      <span class="field-label">Message</span>
      <div class="field-value">${message}</div>
    </div>
    <div class="footer">
      <p>Submitted via oakleydye.com contact form</p>
      <p>Received on ${timestamp}</p>
    </div>
  </div>
</body>
</html>`;
}

const ContactForm: React.FC = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [honeypot, setHoneypot] = React.useState("");
  const [formLoadTime] = React.useState(() => Date.now());

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (firstName.length > 100 || lastName.length > 100 || email.length > 200 || phone.length > 20 || message.length > 5000) {
      toast.error("Form fields are too long. Please keep all fields under the character limits.");
      return;
    }

    if (isSpam(firstName + " " + lastName, email, message)) {
      toast.success("Email Sent Successfully!");
      return;
    }

    const html = createEmailHTML(firstName, lastName, email, phone, message);
    const text = `New Contact Form Submission\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\nMessage:\n${message}\n\nReceived on: ${new Date().toLocaleString()}`;

    (async () => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subject: `Contact Form Submission from ${firstName} ${lastName}`,
            html,
            text,
            _hp: honeypot,
            _t: formLoadTime,
          }),
        });

        if (response.ok) {
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
          toast.success("Email Sent Successfully!");
        } else {
          const errorData = await response.json();
          console.error("Failed to send email:", errorData);
          toast.error(
            "Failed to send email. Please call or email us directly and we'll get back to you as soon as possible."
          );
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error(
          "Failed to send email. Please call or email us directly and we'll get back to you as soon as possible."
        );
      }
    })();
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className="m-4 p-4">
        {/* Honeypot field — hidden from real users, bots fill it in */}
        <div style={{ position: "absolute", left: "-9999px", top: "-9999px", opacity: 0 }} aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>
        <div className="flex flex-row gap-2 mb-4">
          <div className="flex-1">
            <Label htmlFor="firstName" className="mb-2 block">
              First Name
            </Label>
            <Input
              id="firstName"
              placeholder="First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <Label htmlFor="lastName" className="mb-2 block">
              Last Name
            </Label>
            <Input
              id="lastName"
              placeholder="Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-row gap-2 mb-4">
          <div className="flex-1">
            <Label htmlFor="email" className="mb-2 block">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <Label htmlFor="phone" className="mb-2 block">
              Phone #
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Phone #"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-4">
          <Label htmlFor="message" className="mb-2 block">
            Message
          </Label>
          <Textarea
            id="message"
            placeholder="Message"
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <CustomButton type="submit">Submit</CustomButton>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ContactForm;
