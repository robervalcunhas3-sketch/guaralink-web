import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GuaraLink | Internet Fibra Óptica em Guaraqueçaba",
  description:
    "GuaraLink oferece internet fibra óptica em Guaraqueçaba, Superagui, Medeiros e Massarapuã. Planos rápidos, suporte local e atendimento pelo WhatsApp.",
  keywords: [
    "internet em Guaraqueçaba",
    "fibra óptica Guaraqueçaba",
    "internet Superagui",
    "internet Medeiros",
    "internet Massarapuã",
    "GuaraLink",
    "provedor de internet Guaraqueçaba",
  ],
  openGraph: {
    title: "GuaraLink | Internet Fibra Óptica",
    description:
      "Internet rápida e estável para Guaraqueçaba, Superagui, Medeiros e Massarapuã.",
    url: "https://guaralink-web.vercel.app",
    siteName: "GuaraLink",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}