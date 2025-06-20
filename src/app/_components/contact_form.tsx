"use client";

import { TextField } from "@mui/material";
import * as React from "react";
import CustomButton from "./custom_button";
import { enqueueSnackbar } from "notistack";
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
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: `Contact Form Submission from ${firstName} ${lastName}`,
          message: JSON.stringify(data, null, 2),
        }),
      })
        .then((response) => {
          if (response) {
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhone("");
            setMessage("");
            enqueueSnackbar("Email Sent Successfully!", {
              variant: "success",
            });
          } else {
            enqueueSnackbar(
              "Failed to send email. Please call or email us directly and we'll get back to you as soon as possible.",
              {
                variant: "error",
              }
            );
          }
        })
        .catch(() => {
          enqueueSnackbar(
            "Failed to send email. Please call or email us directly and we'll get back to you as soon as possible.",
            {
              variant: "error",
            }
          );
        });
    })();
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} style={{ margin: "1rem", padding: "1rem" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <TextField
            label="First Name"
            variant="filled"
            fullWidth
            required
            sx={{ mr: "0.5rem", mb: "1rem" }}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            label="Last Name"
            variant="filled"
            fullWidth
            required
            sx={{ ml: "0.5rem", mb: "1rem" }}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <TextField
            label="Email"
            variant="filled"
            fullWidth
            required
            sx={{ mb: "1rem", mr: "0.5rem" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Phone #"
            variant="filled"
            fullWidth
            sx={{ mb: "1rem", ml: "0.5rem" }}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <TextField
          label="Message"
          variant="filled"
          required
          multiline
          rows={4}
          fullWidth
          sx={{ mb: "1rem" }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <CustomButton type="submit" variant="contained" color="primary">
            Submit
          </CustomButton>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ContactForm;
