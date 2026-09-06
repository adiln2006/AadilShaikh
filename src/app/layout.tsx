import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aadil Shaikh | UI/UX Designer & Frontend Product Engineer",
  description:
    "Portfolio of Aadil Shaikh — UI/UX Designer and Frontend-Focused Product Designer based in Navi Mumbai. Specialized in Figma design systems, React, Next.js, and AI-powered interfaces.",
  keywords: [
    "Aadil Shaikh",
    "UI/UX Designer",
    "Frontend Developer",
    "Product Designer",
    "Next.js",
    "React",
    "Figma",
    "Navi Mumbai",
    "Design Systems",
  ],
  authors: [{ name: "Aadil Shaikh" }],
  openGraph: {
    title: "Aadil Shaikh | UI/UX Designer & Frontend Product Engineer",
    description:
      "Bridging the chasm between Figma systems and high-performance frontend code.",
    type: "website",
    locale: "en_US",
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="bg-[#08090d] text-[#f3f4f6] min-h-screen antialiased selection:bg-purple-500/30 selection:text-white">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
