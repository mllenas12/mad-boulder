import "./globals.css";
import * as React from "react";
import Navbar from "@/app/ui/Navbar";
import { raleway } from "@/app/ui/fonts";
import { Footer } from "@/app/ui/Footer";
import { AuthProvider } from "@/lib/context/AuthProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} bg-white antialiased flex flex-col min-h-screen`}
      >
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
