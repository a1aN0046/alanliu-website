import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alan Liu | Portfolio",
  description:
    "Alan Liu's personal portfolio website for engineering, robotics, software, and technology projects."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
