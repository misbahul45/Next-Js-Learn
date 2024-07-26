import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const ubuntu = Ubuntu({ weight:['300','400','500','700'] ,subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Auth Js",
  description: "Created By Misbahul",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} bg-slate-200 `}>
        <Header />
        {children}
      </body>
    </html>
  );
}
