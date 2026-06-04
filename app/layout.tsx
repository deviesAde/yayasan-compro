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
  description:
    "Miracle Leukemia provides housing shelter, medical aid, nutritional kits, and emotional support for children battling leukemia and chronic illness.",
  keywords: [
    "Leukemia support",
    "children cancer shelter",
    "Miracle Leukemia",
    "Befriend the Brave",
    "charity donation",
    "volunteer kids cancer",
    "pediatric cancer Indonesia",
  ],
  openGraph: {
    title: "Miracle Leukemia | Befriend the Brave",
    description:
      "Support children fighting leukemia with housing, nutrition, and love.",
    url: "https://miracleleukemia.org",
    siteName: "Miracle Leukemia",
    type: "website",
    locale: "en_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miracle Leukemia | Befriend the Brave",
    description:
      "Support children fighting leukemia with housing, nutrition, and love.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Miracle Leukemia",
  alternateName: "Yayasan Miracle Leukemia",
  description:
    "Supporting children battling leukemia with housing shelters, nutritional aid, and emotional support.",
  url: "https://miracleleukemia.org",
  logo: "https://miracleleukemia.org/logo.png",
  sameAs: [
    "https://instagram.com/miracleleukemia",
    "https://wa.me/628123456789",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+62-812-3456-789",
    contactType: "customer service",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jalan Cempaka Putih Raya No. 42A",
    addressLocality: "Jakarta Pusat",
    addressRegion: "DKI Jakarta",
    postalCode: "10510",
    addressCountry: "ID",
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
      suppressHydrationWarning
    >
      <head>
        {/* Inline theme script to prevent FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('ml-theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-rose selection:text-foreground">
        {children}
      </body>
    </html>
  );
}
