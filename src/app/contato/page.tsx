import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header   />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">Entre em Contato</h1>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

