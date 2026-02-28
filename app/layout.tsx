import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ippei Onodera | Portfolio",
  description: "Development portfolio built with Next.js",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <body className="bg-white font-sans text-black antialiased">
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Container>{children}</Container>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
