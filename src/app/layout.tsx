import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VIPSHUTTLE24 | Premium Chauffeur & Limousinenservice Düsseldorf",
  description:
    "Erstklassiger Chauffeur-Service in Düsseldorf und NRW. Professioneller Flughafentransfer, Hochzeitsfahrten, VIP-Service & Corporate Roadshows. Rund um die Uhr verfügbar – 24/7.",
  keywords:
    "VIP Shuttle Düsseldorf, Chauffeur Service Düsseldorf, Limousinenservice NRW, Flughafentransfer Düsseldorf, Mercedes Chauffeur, Premium Transfer NRW, Hochzeitsfahrt Düsseldorf, Corporate Roadshow NRW, VIP Service Düsseldorf, vipshuttle24",
  authors: [{ name: "VipShuttle24", url: "https://vipshuttle-24.de" }],
  creator: "VipShuttle24",
  publisher: "VipShuttle24",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://vipshuttle-24.de",
    siteName: "VIPSHUTTLE24",
    title: "VIPSHUTTLE24 | Premium Chauffeur & Limousinenservice Düsseldorf",
    description:
      "Erstklassiger Chauffeur-Service in Düsseldorf und NRW. Flughafentransfer, Hochzeitsfahrten, VIP-Service rund um die Uhr.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "VIPSHUTTLE24 – Premium Chauffeur Service Düsseldorf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VIPSHUTTLE24 | Premium Chauffeur Service Düsseldorf",
    description:
      "Erstklassiger Chauffeur-Service in Düsseldorf und NRW. 24/7 verfügbar.",
    images: ["/og-image.webp"],
  },
  alternates: {
    canonical: "https://vipshuttle-24.de",
  },
  category: "transportation",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://vipshuttle-24.de",
  name: "VIPSHUTTLE24",
  description:
    "Premium Chauffeur und Limousinenservice in Düsseldorf und NRW. Flughafentransfer, Hochzeitsfahrten, VIP-Service und Corporate Roadshows.",
  url: "https://vipshuttle-24.de",
  telephone: "+491772472408",
  email: "info@vipshuttle24.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Schlesische Str. 104",
    addressLocality: "Düsseldorf",
    postalCode: "40231",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.2217,
    longitude: 6.7762,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [
    "https://www.facebook.com/people/VipShuttle24de/100070007923784/",
    "https://www.instagram.com/vipshuttle24.de/",
  ],
  priceRange: "€€€",
  image: "/og-image.webp",
  areaServed: [
    {
      "@type": "State",
      name: "Nordrhein-Westfalen",
    },
    {
      "@type": "City",
      name: "Düsseldorf",
    },
    {
      "@type": "City",
      name: "Köln",
    },
    {
      "@type": "City",
      name: "Bonn",
    },
  ],
  hasMap:
    "https://maps.google.com/?q=Schlesische+Str.+104+40231+Düsseldorf",
  currenciesAccepted: "EUR",
  paymentAccepted: "Credit Card, Bank Transfer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="geo.region" content="DE-NW" />
        <meta name="geo.placename" content="Düsseldorf" />
        <meta name="geo.position" content="51.2217;6.7762" />
        <meta name="ICBM" content="51.2217, 6.7762" />
      </head>
      <body>{children}</body>
    </html>
  );
}