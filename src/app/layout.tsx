import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderNavbar from "@/components/Navbar";
import Layout from "@/components/Layout";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anything",
  description: "뭐라도 하자",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderNavbar />
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
