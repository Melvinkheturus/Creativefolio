import type { Metadata } from "next";
import { Inter, Poppins, Allura } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allura",
});

export const metadata: Metadata = {
  title: "Manikandan's Portfolio",
  description: "Modern portfolio site with Bento Grid layout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} ${allura.variable} font-inter antialiased bg-black`}>
        {children}
      </body>
    </html>
  );
}
