import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maklin - Konsultan Bisnis Cuci Motor & Salon Motor",
  description:
    "Bangun bisnis cuci motor yang siap menghasilkan bersama Maklin. Studi kelayakan, setup outlet, SOP, SDM, hingga pendampingan operasional.",
  keywords: [
    "bisnis cuci motor",
    "konsultan bisnis cuci motor",
    "investasi cuci motor",
    "salon motor",
    "franchise cuci motor",
    "MAKLIN",
    "paket investasi cuci motor",
    "studi kelayakan bisnis",
  ],
  authors: [{ name: "MAKLIN" }],
  metadataBase: new URL("https://maklin.id"),
  alternates: {
    canonical: "https://maklin.id",
  },
  openGraph: {
    title: "Maklin - Konsultan Bisnis Cuci Motor & Salon Motor",
    description:
      "Bangun bisnis cuci motor yang siap menghasilkan bersama Maklin. Studi kelayakan, setup outlet, SOP, SDM, hingga pendampingan operasional.",
    url: "https://maklin.id",
    siteName: "MAKLIN",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maklin - Konsultan Bisnis Cuci Motor & Salon Motor",
    description:
      "Bangun bisnis cuci motor yang siap menghasilkan bersama Maklin.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
