import type { Metadata } from "next";
import { Syne, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
  title: "Sabih Iriho | Software Developer & Creative Digital Professional",
  description:
    "Hi, I'm Sabih Iriho — a passionate software developer and creative digital professional based in Kigali, Rwanda. Full-Stack Developer, Graphic Designer, Video Editor & Sales Manager.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className="antialiased">
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
