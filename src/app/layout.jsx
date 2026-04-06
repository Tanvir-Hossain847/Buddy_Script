import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import AuthProvider from "@/context/authProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Buddy Script",
  description: "Social Feed",
};

export default function RootLayout({ children }) {
  return (
    <html className={cn("font-sans", inter.variable)}>
      <body className="min-h-full bg-[#F0F2F5] dark:bg-[#232E42]">
        <AuthProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
