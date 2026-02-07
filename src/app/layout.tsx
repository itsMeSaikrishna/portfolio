import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sai Krishna | Aspiring Product Engineer",
  description: "Building practical AI solutions that remove real-world friction. Full Stack Developer & AI/ML enthusiast from Kerala, India.",
  keywords: ["developer", "portfolio", "full stack", "AI", "ML", "product engineer", "react", "next.js", "python", "langchain"],
  authors: [{ name: "Sai Krishnan R" }],
  openGraph: {
    title: "Sai Krishna | Aspiring Product Engineer",
    description: "Building practical AI solutions that remove real-world friction. Full Stack Developer & AI/ML enthusiast from Kerala, India.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistMono.variable} font-mono antialiased bg-bg-primary text-text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
