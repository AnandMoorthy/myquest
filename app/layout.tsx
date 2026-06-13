import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { withBasePath } from "@/lib/basePath";
import { BackgroundMap } from "@/components/map/BackgroundMap";
import { ModalProvider } from "@/components/providers/ModalProvider";
import { ComingSoonModal } from "@/components/ui/ComingSoonModal";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  title: "MyQuest | Discover real-world live experiences around you",
  description:
    "Join nearby micro activities or host your own quests in minutes. MyQuest is the map for real-world live connection. Discover, host, and meet people around you.",
  icons: {
    icon: [
      {
        url: withBasePath("/icon-32.png"),
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: withBasePath("/icon-16.png"),
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut: withBasePath("/icon-32.png"),
    apple: withBasePath("/apple-icon.png"),
  },
  openGraph: {
    title: "MyQuest | Discover real-world live experiences around you",
    description:
      "Join nearby micro activities or host your own quests. Discover, host, and meet people around you.",
    images: [
      { url: withBasePath("/og.png"), width: 1200, height: 630, alt: "MyQuest" },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyQuest",
    description: "Discover real-world live experiences around you.",
    images: [withBasePath("/og.png")],
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
      className="dark h-full scroll-smooth"
      suppressHydrationWarning
    >
      <body
        className={`${plusJakarta.variable} min-h-full font-sans antialiased`}
        suppressHydrationWarning
      >
        <BackgroundMap />
        <ModalProvider>
          <div className="relative z-10">{children}</div>
          <ComingSoonModal />
        </ModalProvider>
      </body>
    </html>
  );
}
