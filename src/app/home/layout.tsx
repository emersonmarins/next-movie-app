import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "App Marins Movies",
  description: "next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
