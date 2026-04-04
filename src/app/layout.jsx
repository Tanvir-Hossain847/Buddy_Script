import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({ children }) {
  return (
    <html className={cn("font-sans", inter.variable)}>
      <body className="min-h-full flex flex-col">
        <header>
          <Navbar/>
        </header>
        {children}
      </body>
    </html>
  );
}
