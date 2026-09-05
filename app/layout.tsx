import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LUXÈRRA — Live in Luxury | Premium Furniture & Interiors",
  description:
    "Timeless designs. Unmatched comfort. Crafted for a life of elegance. Explore handcrafted luxury furniture collections for living rooms, bedrooms, dining, and outdoor spaces.",
  keywords: [
    "luxury furniture",
    "interior design",
    "high-end sofas",
    "luxerra",
    "velvet furniture",
    "modern home decor",
  ],
  authors: [{ name: "Luxerra Interiors" }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/icon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "LUXÈRRA — Live in Luxury",
    description:
      "Redefine luxury. Live better. Explore handcrafted luxury furniture collections.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/hero-lifestyle.jpg",
        width: 1200,
        height: 800,
        alt: "Luxerra Luxury Living Room",
      },
    ],
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
      className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#070e0a] text-[#f5f0e8] font-sans antialiased selection:bg-[#c9a24b] selection:text-[#070e0a]">
        {children}
      </body>
    </html>
  );
}
