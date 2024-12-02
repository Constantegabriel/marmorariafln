"use client";

import "./globals.css"; // Importa os estilos globais
import Navbar from "./components/navbar"; // Importa o componente Navbar
import Footer from "./components/footer"; // Importa o componente Footer

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100">
        {/* SessionProvider deve englobar tudo para gerenciar sessões */}

            {/* Navbar estará presente em todas as páginas */}
            <Navbar />

            {/* Conteúdo principal da página */}
            <main className="min-h-screen">{children}</main>

            {/* Footer estará presente em todas as páginas */}
            <Footer />

      </body>
    </html>
  );
}