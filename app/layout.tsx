import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/custom/Navbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const font = Nunito({
  variable: "--nunito",
  subsets: ["latin"],
  // weight: ["200", "300", "400" ,''],
});

export const metadata: Metadata = {
  title: "Source Transcript - Clinical Data Management Solutions",
  description:
    "Transforming clinical data management through cutting-edge technology and innovation. Providing powerful, scalable, and compliant solutions for clinical trials.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.variable} antialiased`}
        style={{ fontFamily: "var(--nunito), sans-serif" }}
      >
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
