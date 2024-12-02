"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "/img/logo-marmo.png";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para abrir/fechar o menu hambúrguer

  return (
    <nav className="bg-gray-900 bg-opacity-60 backdrop-blur-md fixed top-0 z-[900] w-full text-white px-6 py-6">
      <div className="flex justify-between items-center mx-[3%]">
        {/* Logo */}
        <div className="w-[100px]">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Logo Marmoraria Florianópolis"
              width={200}
              height={50}
              className="absolute object-contain"
            />
          </Link>
        </div>

        {/* Botão do Menu Hambúrguer */}
        <div className="flex items-center gap-4">
          {/* Botão do Menu Hambúrguer */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-[38px] focus:outline-none"
          >
            ☰
          </button>
        </div>
        {/* Links (Desktop) */}
        <div className="hidden items-center md:flex text-[16px] gap-8 font-medium">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/materials" className="hover:text-gray-300">
            Materiais
          </Link>
          <Link href="/services" className="hover:text-gray-300">
            Serviços
          </Link>
          <Link href="/enterprise" className="hover:text-gray-300">
            Empresa
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contato
          </Link>
        </div>
      </div>

      {/* Links (Mobile) */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 text-[16px] font-medium text-left px-[5%] py-4 rounded-md">
          <Link
            href="/"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/materials"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Materiais
          </Link>
          <Link
            href="/services"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Serviços
          </Link>
          <Link
            href="/enterprise"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Empresa
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Contato
          </Link>
        </div>
      )}
    </nav>
  );
}
