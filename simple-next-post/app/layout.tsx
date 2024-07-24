import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simple-next-project",
  description: "created by misbahul muttaqin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-zinc-700`}>
          <main className="flex flex-col min-h-screen w-full max-w-[80%] bg-zinc-100 mx-auto">
            <Navbar />
            {children}
            <Footer />
          </main>
      </body>
    </html>
  );
}
