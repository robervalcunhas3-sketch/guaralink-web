import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GuaraLink | Internet Fibra Óptica em Guaraqueçaba",
  description:
    "Internet fibra óptica em Guaraqueçaba, Superagui, Medeiros e Massarapuã.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}