import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: "TAVO — Savour The Difference | Fine Dining Restaurant Nairobi",
  description: "TAVO - Savour The Difference. A fine dining experience in Rosslyn Square, Nairobi. Book your table today for an elegant culinary journey.",
  keywords: ["Tavo Nairobi", "Rosslyn restaurants", "luxury dining in Nairobi", "fine dining Redhill Road", "Tavo Rosslyn Square", "premium restaurant Nairobi", "elegant dining Kenya", "fine dining Rosslyn Square"],
  authors: [{ name: "TAVO Restaurant" }],
  openGraph: {
    title: "TAVO — Savour The Difference | Fine Dining Restaurant Nairobi",
    description: "Experience Nairobi's most refined dining at TAVO, Rosslyn Square. Where every dish tells a story and every visit feels like home.",
    url: "https://tavo.co.ke",
    siteName: "TAVO Restaurant",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TAVO Restaurant - Fine Dining in Rosslyn Square, Nairobi",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TAVO — Savour The Difference | Fine Dining Restaurant Nairobi",
    description: "Experience Nairobi's most refined dining at TAVO, Rosslyn Square. Where every dish tells a story.",
    images: ["/og-image.jpg"],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "TAVO Restaurant",
              image: "/og-image.jpg",
              "@id": "https://tavo.co.ke",
              url: "https://tavo.co.ke",
              telephone: "+254-729-575757",
              priceRange: "$$$",
              servesCuisine: "Fine Dining",
              slogan: "Savour The Difference",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rosslyn Square Luxury Mall, Redhill Road",
                addressLocality: "Nairobi",
                addressCountry: "KE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -1.2278,
                longitude: 36.8125,
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
                opens: "10:00",
                closes: "23:00",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${playfairDisplay.variable} ${inter.variable} antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
