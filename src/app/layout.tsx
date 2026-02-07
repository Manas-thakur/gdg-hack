import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Code & Chaos - GDG DCE Hackathon",
  description: "24 hours of innovation, collaboration, and creation. Join 500+ developers building the future at Code & Chaos hackathon.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-roboto">
        {children}
      </body>
    </html>
  );
}
