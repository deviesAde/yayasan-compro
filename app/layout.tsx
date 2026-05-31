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
  title: "Miracle Leukemia | Befriend the Brave",
  description: "Miracle Leukemia provides housing shelter, medical aid, nutritional kits, and emotional support for children battling leukemia and chronic illness.",
  keywords: ["Leukemia support", "children cancer shelter", "Miracle Leukemia", "Befriend the Brave", "charity donation", "volunteer kids cancer"],
  openGraph: {
    title: "Miracle Leukemia | Befriend the Brave",
    description: "Support children fighting leukemia with housing, nutrition, and love.",
    url: "https://miracleleukemia.org",
    siteName: "Miracle Leukemia",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-rose selection:text-espresso">
        {children}
      </body>
    </html>
  );
}
