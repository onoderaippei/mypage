import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Ippei Onodera | Portfolio",
  description: "Development portfolio built with Next.js",
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
            <Container className="py-16">{children}</Container>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
