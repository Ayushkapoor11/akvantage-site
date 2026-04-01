import type { Metadata } from "next";
import { Fraunces, Outfit, Bebas_Neue } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces-var",
  subsets: ["latin"],
  weight: ["800"],
  style: ["italic"],
});

const outfit = Outfit({
  variable: "--font-outfit-var",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas-var",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "AKVantage — Local Business Consultant · Mesa, AZ",
  description:
    "Web design and development for local businesses. We build websites that actually get customers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${outfit.variable} ${bebas.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-ink text-cream antialiased">
        {children}
      </body>
    </html>
  );
}
