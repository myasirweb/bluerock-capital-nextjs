import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import StockTicker from "@/components/stock-ticker"
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "BlueRock Financial Services - Professional Investment Solutions",
  description:
    "BlueRock Financial Services offers comprehensive investment solutions, portfolio management, and trading services. Authorized financial services company serving clients since 1997.",
  generator: "v0.app",
  keywords: "investment, portfolio management, trading, financial services, Romania, BlueRock",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} bg-slate-900 text-white antialiased`}
      >
        <Suspense fallback={null}>
          {/* Stocker */}
          <StockTicker />
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main>{children}</main>

          {/* Footer */}
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
