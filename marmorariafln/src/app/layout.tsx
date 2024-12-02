"use client";

import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { SessionProvider } from "next-auth/react"; // Se estiver usando o NextAuth para autenticação

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100">
        <SessionProvider> {/* Envolve o conteúdo se for necessário para autenticação */}
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
