import type { Metadata } from "next";

import "./globals.css";

import { PlanProvider } from "../context/PlanContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Toast from "../components/Toast";

export const metadata: Metadata = {
  title: "FITLOG",
  description: "Workout Library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <PlanProvider>
          <Navbar />

          {children}

          <Footer />

          <Toast />
        </PlanProvider>
      </body>
    </html>
  );
}