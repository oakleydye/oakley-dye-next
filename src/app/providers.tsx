"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Toaster } from "sonner";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const key = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!key) {
    return (
      <>
        Error loading recaptcha provider
      </>
    )
  }
  return (
    <>
      <GoogleReCaptchaProvider
        reCaptchaKey={key}
        scriptProps={{
          async: true,
          defer: true,
          appendTo: 'head'
        }}
      >
        {children}
        <Toaster position="top-right" />
      </GoogleReCaptchaProvider>
    </>
  );
};

export default Providers;
