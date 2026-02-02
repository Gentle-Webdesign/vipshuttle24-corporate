import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VIPSHUTTLE24 | Premium Chauffeur Service Düsseldorf",
  description: "Erstklassiger Chauffeur-Service für anspruchsvolle Kunden. Flughafentransfer, Hochzeitsfahrten und Corporate Roadshows in Düsseldorf und NRW.",
  keywords: "VIP Shuttle, Chauffeur Düsseldorf, Premium Transfer, Limousine Service, Airport Transfer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
