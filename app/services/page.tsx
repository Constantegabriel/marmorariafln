// app/services/page.tsx
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: "Cozinhas Planejadas",
      description:
        "Soluções personalizadas em mármores e granitos para bancadas e ilhas de cozinha, combinando funcionalidade e design.",
      slug: "cozinha", // Este slug será usado na URL
    },
    {
      title: "Banheiros de Luxo",
      description:
        "Crie ambientes relaxantes com bancadas, lavatórios e revestimentos elegantes para banheiros sofisticados.",
      slug: "banheiro", // Este slug será usado na URL
    },
    {
      title: "Salas de Estar",
      description:
        "Mesas de centro, lareiras e detalhes em mármore para dar um toque de exclusividade à sua sala.",
      slug: "salas", // Este slug será usado na URL
    },
    {
      title: "Espaços Comerciais",
      description:
        "Mármores e granitos de alto padrão para recepções, escritórios e ambientes corporativos que impressionam.",
      slug: "espacos-com", // Este slug será usado na URL
    },
    {
      title: "Escadas",
      description:
        "Escadas de luxo em mármore para adicionar sofisticação e exclusividade ao seu ambiente, com design único e acabamento impecável.",
      slug: "escadas", // Este slug será usado na URL
    },
    {
      title: "Áreas externas",
      description:
        "Áreas externas em mármore: materiais resistentes e elegantes para transformar seu espaço gourmet, varanda ou piscina com sofisticação e durabilidade.",
      slug: "externas", // Este slug será usado na URL
    },

  ];

  return (
    <section className="bg-gray-100 mt-[69px] min-h-screen py-16 px-8 md:px-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Nossos Serviços
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Explore nossos serviços e veja como transformamos ambientes com materiais de alta qualidade.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <div className="relative h-64 w-full bg-gray-200">
              <img
                src={`/img/${service.slug}.jpg`}  // Imagem com base no slug
                alt={service.title}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              {/* Link dinâmico para cada serviço */}
              <Link
                href="/contact"
                className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
