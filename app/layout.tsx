import type { Metadata } from "next";
import Script from "next/script";
import AppShell from "@/components/AppShell";
import "@/index.css";

export const metadata: Metadata = {
  title: "Mahadev Tours & Travels - Your Trusted Travel Partner",
  description:
    "Mahadev Tours & Travels offers premium car rental and tour services in Indore, Madhya Pradesh. Book SUVs, Sedans, Innova, and Tempo Travellers.",
  authors: [{ name: "Mahadev Tours & Travels" }],
  icons: { icon: "/Favicon.png" },
  openGraph: {
    title: "Mahadev Tours & Travels - Your Trusted Travel Partner",
    description: "Premium car rental and tour services in Indore, Madhya Pradesh.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RMPTZ2X7CF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RMPTZ2X7CF');
          `}
        </Script>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
