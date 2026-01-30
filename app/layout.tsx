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

// UPDATED METADATA SECTION
export const metadata: Metadata = {
  title: "Nabin Oli | Backend Architect",
  description: "Backend Architect specializing in Java, Spring Boot, and C++. Action without planning is the cause of every failure.",
  keywords: ["Nabin Oli", "Backend Architect", "Java Developer Nepal", "Software Engineer"],

  // ADD THIS SECTION FOR GOOGLE VERIFICATION
  verification: {
    google: "HTTKLY0e2Rv_gtxR-kDJNw2BuAwJkuf5-C37piR8wtY",
  },

  openGraph: {
    title: "Nabin Oli | Backend Architect",
    description: "Systems and APIs designed for scalability.",
    url: "https://nabinoli.vercel.app",
    siteName: "Nabin Oli Portfolio",
    images: [
      {
        url: "/Finley.jpg",
        width: 1200,
        height: 630,
        alt: "Nabin Oli Portfolio Preview",
      },
    ],
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
