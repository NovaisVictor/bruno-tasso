import { Shield, Scale, FileText } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: "Defesa em Processos",
      description: "Proteção completa em processos de erro médico, garantindo sua defesa com expertise e dedicação."
    },
    {
      icon: Scale,
      title: "Consultoria Jurídica",
      description: "Orientação preventiva para evitar problemas legais e proteger sua prática médica."
    },
    {
      icon: FileText,
      title: "Assessoria em Contratos",
      description: "Elaboração e análise de contratos específicos para a área médica, protegendo seus interesses."
    }
  ]

  return (
    <section id="servicos" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">Serviços Oferecidos</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <service.icon className="w-12 h-12 text-blue-800 mb-4" />
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

