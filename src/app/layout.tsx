import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "IDEA | Powered by BOLD",
  description: "A platform for founders, mentors, investors and ideas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}