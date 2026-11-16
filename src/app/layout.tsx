import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Analytics } from "@/components/Analytics";
import { createMetadata } from "@/lib/metadata";
import { starterPrice } from "@/content/pricing";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Lora({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  ...createMetadata({
    title: "Web Design in Erie, CO",
    description: `Web design for small businesses in Erie, Lafayette, Broomfield, Boulder, and Longmont. Work directly with Zackary Brown. Websites from ${starterPrice}.`,
  }),
  verification: {
    google: "Zb_41rCg82i_lR6TI2RjkhfCigT2sqK2jhvwGRyYVKY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrumentSerif.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Analytics />
        <JsonLd />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
