import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-gray-400">
              Consultoria jurídica especializada para profissionais da área da saúde.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <p className="text-gray-400">
              Entre em contato para agendar uma consulta
            </p>
            {/* Add contact information as needed */}
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#sobre" className="text-gray-400 hover:text-white">Sobre</Link>
              <Link href="#servicos" className="text-gray-400 hover:text-white">Serviços</Link>
              <Link href="#depoimentos" className="text-gray-400 hover:text-white">Depoimentos</Link>
            </nav>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bruno Tasso - Consultoria Jurídica em Saúde. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

