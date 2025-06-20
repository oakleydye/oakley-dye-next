"use client";

import { Container, Typography } from "@mui/material";
import * as React from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import ContactForm from "@/app/_components/contact_form";

const ContactSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <Container maxWidth="lg" sx={{ mt: 20, position: "relative" }}>
      <Typography
        variant={isMobile ? "h3" : "h1"}
        gutterBottom
        sx={{ textAlign: "center" }}
      >
        Contact Us
      </Typography>
      <ContactForm />
    </Container>
  );
};

export default ContactSection;
