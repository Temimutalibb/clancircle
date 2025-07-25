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
  title: "Clan Circle - Boost Content with $CLAN",
  description:
    "Clan Circle helps users grow engagement through social sharing, check-ins, and rewards using $CLAN.",
  verification: {
    google: "2ZhzUpke-tmbnb6zxKRJ6J-3MYgC4SqQ1pu9zkAs5ig",
  },
  keywords: [
    "Clan Circle",
    "$CLNC",
    "check-in",
    "social boost",
    "engagement tool",
  ],
  metadataBase: new URL("https://clancircle.mutalibb.xyz"),
  openGraph: {
    title: "Clan Circle",
    description:
      "Clan Circle is a content engagement platform where users earn $CLNC coins by sharing and clicking social links. Boost your visibility, join circles, and stay notified with push alerts and check-ins.",
    url: "https://clancircle.mutalibb.xyz",
    siteName: "Clan Circle",
    images: [
      {
        url: "/new506.png",
        width: 1200,
        height: 630,
        alt: "Clan Circle OG Image",
      },
    ],

    type: "website",
  },

  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
