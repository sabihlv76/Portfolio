import type { Metadata } from "next";
import { Syne, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import {
  SITE_NAME,
  SITE_URL,
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_LOCATION,
  SOCIAL_LINKS,
  CONTACT_EMAIL,
} from "@/lib/site";

const syne = Syne({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-script",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Sabih Iriho",
    "Iriho Sabih",
    "Software Developer Rwanda",
    "Full-Stack Developer Kigali",
    "Web Developer Rwanda",
    "React Developer",
    "Node.js Developer",
    "Software Engineer Kigali",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  jobTitle: "Software Developer & Full-Stack Engineer",
  url: SITE_URL,
  image: `${SITE_URL}/me.png`,
  email: `mailto:${CONTACT_EMAIL}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE_LOCATION.city,
    addressCountry: SITE_LOCATION.countryCode,
  },
  sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin],
  knowsAbout: [
    "Full-Stack Web Development",
    "React",
    "Node.js",
    "Graphic Design",
    "Video Editing",
    "Sales & Marketing",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <ThemeProvider
          defaultTheme="system"
          storageKey="sabih-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
