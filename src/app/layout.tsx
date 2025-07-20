import type { Metadata } from "next";
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

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessStructuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
