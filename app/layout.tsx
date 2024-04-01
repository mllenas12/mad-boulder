import "./globals.css";
import * as React from "react";
import Navbar from "@/app/ui/Navbar";
import { montserrat, raleway } from "@/app/ui/fonts";
import { Footer } from "@/app/ui/Footer";
import { Auth } from "firebase-admin/auth";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
