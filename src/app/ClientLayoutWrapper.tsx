'use client';

import "./globals.css";
import PersonSchema from "@/components/PersonSchema";
import Cursor from "@/components/ui/Cursor";
import { usePathname } from "next/navigation";

export default function ClientLayoutWrapper({ 
  children, 
  fontClasses 
}: { 
  children: React.ReactNode;
  fontClasses: string;
}) {
  const pathname = usePathname();
  const isStudio = pathname.startsWith('/studio');

  return (
    <body className={fontClasses}>
      <PersonSchema />
      <Cursor isStudio={isStudio} />
      {children}
    </body>
  );
}