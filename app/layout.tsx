import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
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
  title: "MyQuest | Discover spontaneous experiences around you",
  description:
    "Join nearby micro activities or host your own quests. MyQuest helps you discover and host real world experiences nearby.",
  openGraph: {
    title: "MyQuest",
    description: "Discover spontaneous experiences around you.",
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
