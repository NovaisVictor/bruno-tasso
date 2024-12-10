'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="block">
            <Image
              src="/bruno-tasso-logo.jpeg"
              alt="Bruno Tasso - Consultoria Jurídica em Saúde"
              width={180}
              height={90}
              className="h-auto w-auto"
              priority
            />
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/#sobre" className="text-gray-700 hover:text-blue-800">Sobre</Link>
            <Link href="/#servicos" className="text-gray-700 hover:text-blue-800">Serviços</Link>
            <Link href="/#depoimentos" className="text-gray-700 hover:text-blue-800">Depoimentos</Link>
            <Link href="/contato" className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700">
              Contato
            </Link>
          </nav>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center py-4 bg-white">
            <Link href="/#sobre" className="text-gray-700 hover:text-blue-800 py-2" onClick={toggleMenu}>Sobre</Link>
            <Link href="/#servicos" className="text-gray-700 hover:text-blue-800 py-2" onClick={toggleMenu}>Serviços</Link>
            <Link href="/#depoimentos" className="text-gray-700 hover:text-blue-800 py-2" onClick={toggleMenu}>Depoimentos</Link>
            <Link href="/contato" className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 mt-2" onClick={toggleMenu}>
              Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

