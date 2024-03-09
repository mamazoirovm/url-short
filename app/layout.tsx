import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "URL SHORTENING API",
  description: "BY MAMAZOIROV",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
