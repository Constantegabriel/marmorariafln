// app/services/[service]/page.tsx

"use client"; // Adicione isso no topo do arquivo

import { useParams } from "next/navigation";

export default function ServiceDetail() {
  const { service } = useParams(); // Pega o valor da URL (slug)

  // Simulação de dados dos serviços (substitua com dados reais ou API)
  const services = {
    "cozinhas-planejadas": {
      title: "Cozinhas Planejadas",
      description:
        "Soluções personalizadas em mármores e granitos para bancadas e ilhas de cozinha, combinando funcionalidade e design.",
    },
    "banheiros-de-luxo": {
      title: "Banheiros de Luxo",
      description:
        "Crie ambientes relaxantes com bancadas, lavatórios e revestimentos elegantes para banheiros sofisticados.",
    },
    "salas-de-estar": {
      title: "Salas de Estar",
      description:
        "Mesas de centro, lareiras e detalhes em mármore para dar um toque de exclusividade à sua sala.",
    },
    "espacos-comerciais": {
      title: "Espaços Comerciais",
      description:
        "Mármores e granitos de alto padrão para recepções, escritórios e ambientes corporativos que impressionam.",
    },
  };

  const serviceDetails = services[service as keyof typeof services];

  if (!serviceDetails) {
    return <p>Serviço não encontrado.</p>; // Caso o serviço não exista
  }

  return (
    <section className="bg-gray-100 py-16 px-8 md:px-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          {serviceDetails.title}
        </h1>
        <p className="text-gray-600 mt-4 text-lg">{serviceDetails.description}</p>
      </div>
      {/* Mais informações podem ser adicionadas aqui */}
    </section>
  );
}
