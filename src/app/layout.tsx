import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PersonSchema from "@/components/PersonSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manikandan S | Web Developer, UI/UX Designer & Creative Technologist",
  description:
    "Portfolio of Manikandan S — a Web Developer, UI/UX Designer, and Creative Technologist. Crafting modern, interactive, and accessible digital experiences using Next.js, Tailwind CSS, and Framer Motion.",
  keywords: [
    "Manikandan S",
    "Web Developer",
    "UI/UX Designer",
    "Creative Technologist",
    "Frontend Developer",
    "Next.js Portfolio",
    "Tailwind CSS Developer",
    "Framer Motion Designer",
    "India Web Developer",
  ],
  openGraph: {
    title: "Manikandan S | Web Developer & Designer",
    description:
      "Showcasing projects, skills, and creative work in modern web development and design.",
    url: "https://yourdomain.com",
    siteName: "Manikandan S Portfolio",
    images: [
      {
        url: "https://yourdomain.com/preview.png",
        width: 1200,
        height: 630,
        alt: "Manikandan S Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manikandan S | Web Developer & Designer",
    description:
      "Portfolio of Manikandan S — crafting modern, interactive, and accessible digital experiences.",
    images: ["https://yourdomain.com/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#040406" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PersonSchema />
        {children}
      </body>
    </html>
  );
}
