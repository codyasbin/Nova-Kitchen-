import type React from "react";
import "./globals.css";
import type {Metadata} from "next";
import {Inter, Playfair_Display} from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {ThemeProvider} from "@/components/providers/ThemeProvider";
import {Toaster} from "@/components/ui/toaster";
import ScrollToTop from "@/components/scrolltotop";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "Nova Kitchen and Interiors | Premium Kitchen Solutions",
  description: "Discover premium modular kitchens, appliances, and interior solutions at Nova Kitchen and Interiors.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className="font-sans">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <ScrollToTop />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
