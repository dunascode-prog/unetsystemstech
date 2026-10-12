import type { Metadata } from "next";
import { Inter, Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter-ui",
  subsets: ["latin"],
});

// Favicons and the social image come from the files in this folder (favicon.ico, icon.svg,
// apple-icon.png, opengraph-image.png), copied from public/unet-brand.
export const metadata: Metadata = {
  metadataBase: new URL("https://www.unetsystemtech.com"),
  title: "Unet Systems — Enterprise technology solutions",
  description:
    "We design, build, integrate, secure and manage scalable systems that power growth, resilience and innovation.",
  openGraph: {
    title: "Unet Systems",
    description: "Enterprise technology for modern business transformation.",
    siteName: "Unet Systems",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

// Light is the default; applies a saved dark preference before first paint so it doesn't flash.
const themeScript = `try{if(localStorage.getItem("theme")==="dark")document.documentElement.classList.add("dark")}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${onest.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
