'use client'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const testimonials = [
  {
    name: "Dr. Carlos Silva",
    avatar: "/avatar1.jpg",
    text: "Bruno Tasso foi fundamental na resolução do meu caso. Sua expertise em direito médico é incomparável."
  },
  {
    name: "Dra. Ana Rodrigues",
    avatar: "/avatar2.jpg",
    text: "Graças ao Dr. Bruno, pude focar no meu trabalho sem preocupações legais. Recomendo seus serviços a todos os colegas."
  },
  {
    name: "Dr. Marcelo Santos",
    avatar: "/avatar3.jpg",
    text: "A consultoria do Dr. Bruno Tasso me ajudou a evitar problemas legais antes mesmo que eles surgissem. Excelente trabalho preventivo!"
  }
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">O que Nossos Clientes Dizem</h2>
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="bg-white shadow-lg mx-2">
                  <CardContent className="flex flex-col items-center p-4 md:p-6">
                    <Avatar className="mb-4 size-28">
                      <AvatarFallback />
                      <AvatarImage src={testimonial.avatar}
                      alt={testimonial.name} />
                      </Avatar>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">{testimonial.name}</h3>
                    <p className="text-sm md:text-base text-gray-600 text-center italic">&ldquo;{testimonial.text}&rdquo;</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

