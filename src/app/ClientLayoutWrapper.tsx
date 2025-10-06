'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PersonSchema from "@/components/PersonSchema";
import Cursor from "@/components/ui/Cursor";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname.startsWith('/studio');

  return (
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <PersonSchema />
      {!isStudio && <Cursor />}
      {children}
    </body>
  );
}