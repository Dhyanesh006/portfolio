import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dhyanesh V | Portfolio",
  description:
    "Computer Science & Engineering Student. Full Stack Developer, Cybersecurity Enthusiast, and Cloud & Networking Learner.",
  keywords: [
    "Dhyanesh V",
    "Portfolio",
    "Full Stack Developer",
    "Cybersecurity",
    "Spring Boot",
    "React",
    "Java",
  ],
  authors: [{ name: "Dhyanesh V" }],
  openGraph: {
    title: "Dhyanesh V | Portfolio",
    description:
      "Computer Science & Engineering Student. Full Stack Developer, Cybersecurity Enthusiast.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#050816] text-[#F8FAFC]">
        {children}
      </body>
    </html>
  );
}
