import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Koroba - Content Alignment Analysis",
  description: "Analyze your content alignment with visual feedback across voice, accessibility, structure, psychology, platform optimization, and business clarity.",
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
