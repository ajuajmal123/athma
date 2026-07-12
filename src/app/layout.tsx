import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ATHMA SPICES | The Soul of Every Curry",
  description: "Authentic, pure, Kerala-rooted spices ground fresh. Discover the heritage, culinary traditions, and stories behind our gourmet curry powders and spice blends.",
  keywords: ["Kerala Spices", "Gourmet Spices", "Curry Powder", "Malabar Fish Curry", "Authentic Spices", "Athma Spices", "Pure Spices"],
  openGraph: {
    title: "ATHMA SPICES | The Soul of Every Curry",
    description: "Authentic, pure, Kerala-rooted spices ground fresh. Discover the heritage, culinary traditions, and stories behind our gourmet curry powders and spice blends.",
    url: "https://athmaspices.com",
    siteName: "Athma Spices",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-brand-cream text-brand-clay antialiased selection:bg-brand-red selection:text-brand-cream">
        {children}
      </body>
    </html>
  );
}
