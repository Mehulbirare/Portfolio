import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mehul Birare | React Native & Full-Stack Engineer",
  description: "Portfolio of Mehul Birare, a React Native developer crafting production-ready mobile apps and cinematic web experiences.",
  openGraph: {
    title: "Mehul Birare | React Native & Full-Stack Engineer",
    description: "Crafting next-gen mobile apps and cinematic web experiences.",
    url: "https://mehulbirare.com",
    siteName: "Mehul Birare Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehul Birare | React Native & Full-Stack Engineer",
    description: "Crafting next-gen mobile apps and cinematic web experiences.",
    creator: "@mehulbirare",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased selection:bg-primary selection:text-background`}
      >
        {children}
      </body>
    </html>
  );
}
