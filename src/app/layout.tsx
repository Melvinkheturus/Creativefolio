import "./globals.css";
import { Inter, Poppins, Allura } from "next/font/google";
import ClientWrapper from "./components/ClientWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allura",
  display: "swap",
});

export const metadata = {
  title: "Manikandan S | Creative Technologist & UI/UX Designer",
  description: "Creative Technologist and UI/UX Designer specializing in digital experiences, modern design systems, and AI-powered solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} ${allura.variable} font-inter antialiased`}>
        {children}
        <ClientWrapper />
      </body>
    </html>
  );
}
