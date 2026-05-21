import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GuaraLink - Internet Fibra Óptica em Guaraqueçaba",
  description:
    "Internet fibra óptica em Guaraqueçaba, Superagui, Medeiros e Massarapuã. Planos rápidos, estáveis e suporte local.",
  keywords:
    "internet guaraqueçaba, fibra óptica guaraqueçaba, internet superagui, guaralink, internet medeiros, internet massarapua",
  icons: {
    icon: "/logo-guaralink.jpeg",
  },
  openGraph: {
    title: "GuaraLink Internet Fibra Óptica",
    description:
      "Internet rápida e estável em Guaraqueçaba e região.",
    images: ["/logo-guaralink.jpeg"],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KQVCVLRDLR"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-KQVCVLRDLR');
          `}
        </Script>
      </head>

      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}