import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="min-h-full flex flex-col">
        <header>
          <Navbar/>
        </header>
        {children}
      </body>
    </html>
  );
}
