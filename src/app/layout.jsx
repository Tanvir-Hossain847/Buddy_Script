import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Buddy Script",
  description: "Social Feed",
};

export default function RootLayout({ children }) {
  return (
    <html className={cn("font-sans", inter.variable)}>
      <body className="min-h-full bg-[#F0F2F5]">
        {children}
      </body>
    </html>
  );
}
