import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://playarenahub.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PlayArenaHub - Play Free Online Games",
    template: "%s | PlayArenaHub",
  },
  description:
    "PlayArenaHub lets you instantly play free online browser games across action, puzzle, racing, and more.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "PlayArenaHub",
    title: "PlayArenaHub - Play Free Online Games",
    description:
      "PlayArenaHub lets you instantly play free online browser games across action, puzzle, racing, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PlayArenaHub - Play Free Online Games",
    description:
      "PlayArenaHub lets you instantly play free online browser games across action, puzzle, racing, and more.",
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
         <GoogleAnalytics gaId="G-PGN7RFS2CD" />
      </body>
    </html>
  );
}
