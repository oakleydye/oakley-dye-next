"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import * as React from "react";
import CustomButton from "./custom_button";
import { toast } from "sonner";
import { IContactFormSubmission } from "@/types/contact_form_submission";

const ContactForm: React.FC = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: IContactFormSubmission = {
      firstName,
      lastName,
      email,
      phone,
      message,
    };

    (async () => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subject: `Contact Form Submission from ${firstName} ${lastName}`,
            message: JSON.stringify(data, null, 2),
          }),
        });

        if (response.ok) {
          const result = await response.json();
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
