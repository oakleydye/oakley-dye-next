import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Menu from "./_components/menu";
import Footer from "./_components/footer";
import GoogleAnalytics from "@/components/google-analytics";
import { generateSEOMetadata, businessStructuredData } from "@/lib/seo";
import '@fontsource-variable/jetbrains-mono';
import '@fontsource-variable/roboto-flex';
import '@fontsource/pt-sans-narrow';
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: 'hsl(5 89% 45%)',
};

export const metadata: Metadata = generateSEOMetadata({
  title: "Custom Software Development & Web Design Services",
  description: "Transform your business with custom software development, modern web design, and strategic consulting services. Expert solutions for digital transformation and growth.",
  keywords: [
    "custom software development",
    "web design services",
    "business consulting",
    "digital transformation",
    "responsive web development",
    "software consulting",
    "technology solutions",
    "small business software",
    "remote development services"
  ],
  canonicalUrl: "https://oakleydye.com",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessStructuredData),
          }}
        />

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-845D64HBHE" strategy="afterInteractive" />
        <Script id="google-analytics-config" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-845D64HBHE');
          `
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <GoogleAnalytics />
        <Providers>
          <Menu />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
