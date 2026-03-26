import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devlix.digital"),
  title: "Devlix | Coming Soon",
  description: "Devlix is a digital agency based in Rabat, Morocco.",
  openGraph: {
    title: "Devlix | Coming Soon",
    description: "Devlix is a digital agency based in Rabat, Morocco.",
    type: "website",
    images: [
      {
        url: "/og-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Devlix logo",
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
      className={`${outfit.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <link rel="shortcut icon" href="./logo.png" type="image/x-icon" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
