import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-80px)]  py-12">
          <div className="w-full md:w-1/2 space-y-6 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Defenda Sua Carreira com Segurança
            </h1>
            <p className="text-xl">
              Você, médico especialista, dedica sua vida a cuidar dos outros. 
              Agora, é hora de cuidar de sua carreira.
            </p>
            <button className="bg-white text-blue-800 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300">
              Agende uma Consulta
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md aspect-[3/4]">
              <Image
                src="/bruno-tasso-portrait.jpg"
                alt="Dr. Bruno Tasso"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

