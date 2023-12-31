import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Intrant Digital",
  description:
    "Empowering your brand's online impact with custom design and development solutions tailored to you. Quality Website Design & Development, Get Started Now.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" rel="canonical">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
