import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { HydrationGuard } from "@/components/maklin/hydration-guard";

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

/**
 * Pre-hydration script.
 *
 * Runs synchronously as soon as the <body> is parsed — BEFORE React
 * hydrates. Its job is to strip non-standard attributes injected by browser
 * extensions (e.g. Bitdefender's `fdprocessedid`) from interactive elements
 * so the DOM React reads during hydration matches its virtual DOM.
 *
 * It also installs a MutationObserver to keep stripping attributes that the
 * extension may re-inject right up to (and after) the hydration moment.
 */
const extensionAttrStripper = `(function(){function s(){var e=document.querySelectorAll('[fdprocessedid],[data-bitdefender],[data-efd],[data-lt-installed],[data-new-gr-c-s-check-loaded],[data-gr-ext-installed]');for(var i=0;i<e.length;i++){var el=e[i];el.removeAttribute('fdprocessedid');el.removeAttribute('data-bitdefender');el.removeAttribute('data-efd');el.removeAttribute('data-lt-installed');el.removeAttribute('data-new-gr-c-s-check-loaded');el.removeAttribute('data-gr-ext-installed');}}s();if(typeof MutationObserver!=='undefined'){var o=new MutationObserver(function(){s();});if(document.documentElement){o.observe(document.documentElement,{subtree:true,attributes:true,attributeFilter:['fdprocessedid','data-bitdefender','data-efd','data-lt-installed','data-new-gr-c-s-check-loaded','data-gr-ext-installed']});}}})();`;

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
        {/* Strip browser-extension-injected attrs before React hydrates */}
        <script dangerouslySetInnerHTML={{ __html: extensionAttrStripper }} />
        <HydrationGuard />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
