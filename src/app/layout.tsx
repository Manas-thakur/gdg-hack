import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Code & Chaos - GDG DCE Hackathon",
  description: "48 hours of innovation, collaboration, and creation. Join 500+ developers building the future at Code & Chaos hackathon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
