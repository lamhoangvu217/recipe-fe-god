import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster"
import "./globals.css";

export const metadata: Metadata = {
  title: "Recipe Finder - Interview Question",
  description: "Built by Vu Hoang Lam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-100 p-8">
          <div className="max-w-6xl mx-auto">{children}</div>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
