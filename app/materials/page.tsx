// /app/materials/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

interface Material {
  id: number;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
}

export default function MaterialsPage() {
  const [materials] = useState<Material[]>([

    {
        id: 1,
        title: "Mármore Preto São Gabriel",
        price: 0,
        description: "Mármore de cor preta profunda com veios brancos, bastante sofisticado. Ideal para projetos modernos.",
        imageUrl: "/img/id1.jpeg",  // Caminho correto para a pasta public/img
      },
      {
        id: 2,
        title: "Mármore Branco Carrara",
        price: 0,
        description: "Mármore clássico, de fundo branco com veios cinza, muito utilizado em projetos de alto padrão, como bancadas e pisos.",
        imageUrl: "/img/id2.jpg",  // Caminho correto para a pasta public/img
      },      
      {
        id: 3,
        title: "Granito Preto Absoluto",
        price: 0,
        description: "Granito de cor preta sólida, sem veios, com acabamento polido, muito durável e resistente.",
        imageUrl: "/img/id3.jpg",  // Caminho correto para a pasta public/img
      },
      {
        id: 4,
        title: "Granito Branco Ice",
        price: 0,
        description: " Granito branco com pequenos detalhes em cinza e preto. Bastante utilizado em bancadas de cozinha.",
        imageUrl: "/img/id4.webp",  // Caminho correto para a pasta public/img
      },
      {
        id: 5,
        title: "Mármore Travertino",
        price: 0,
        description: "Mármore bege claro com veios dourados, altamente valorizado por sua aparência luxuosa e sofisticada.",
        imageUrl: "/img/id5.jpeg",  // Caminho correto para a pasta public/img
      },
      {
        id: 6,
        title: "Granito Verde Ubatuba",
        price: 0,
        description: "Granito verde escuro com pontos de tonalidade preta. Muito usado em bancadas e áreas externas.",
        imageUrl: "/img/id6.jpg",  // Caminho correto para a pasta public/img
      },     
      {
        id: 7,
        title: "Mármore Imperial",
        price: 0,
        description: "Mármore bege claro com veios dourados, altamente valorizado por sua aparência luxuosa e sofisticada.",
        imageUrl: "/img/id7.jpeg",  // Caminho correto para a pasta public/img
      },     
      {
        id: 8,
        title: "Mármore Blanco Cristallo",
        price: 0,
        description: "Mármore branco translúcido com veios delicados. Seu acabamento brilhante é perfeito para ambientes modernos e clean.",
        imageUrl: "/img/id8.jpeg",  // Caminho correto para a pasta public/img
      },     
      {
        id: 9,
        title: "Mármore Calacatta",
        price: 0,
        description: "Mármore branco com veios espessos em cinza e dourado, usado em projetos de luxo e alto padrão.",
        imageUrl: "/img/id9.jpeg",  // Caminho correto para a pasta public/img
      },     
      {
        id: 10,
        title: "Granito Verde Santa Cecília",
        price: 0,
        description: " Granito verde com veios pretos e cinza, muito utilizado em pisos e bancadas.",
        imageUrl: "/img/id10.jpeg",  // Caminho correto para a pasta public/img
      },     
      {
        id: 11,
        title: "Quartzito Branco",
        price: 0,
        description: "Pedra natural resistente e de coloração branca com tonalidades em cinza e creme. Ideal para bancadas e pisos..",
        imageUrl: "/img/id11.jpeg",  // Caminho correto para a pasta public/img
      },     
      {
        id: 12,
        title: "Mármore Azul Bahia",
        price: 0,
        description: "Mármore raro e exótico com veios azulados e tons esverdeados, que cria uma sensação única e vibrante.",
        imageUrl: "/img/id12.jpeg",  // Caminho correto para a pasta public/img
      },                        
    // Adicione mais materiais aqui
  ]);

  return (
    <div className="container mx-auto p-6 mt-[100px]">
      <h1 className="text-2xl font-bold mb-4">Materiais Disponíveis</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {materials.map((material) => (
          <div key={material.id} className="border p-4 rounded-lg shadow hover:shadow-md transition">
            <div className="w-full h-40 relative mb-4">
              <img
                src={material.imageUrl}
                alt={material.title}
                className="w-full h-full object-cover rounded"
              />
            </div>
            <h2 className="text-lg font-semibold">{material.title}</h2>
            <p className="text-gray-600">Preço por M²: R$ {material.price.toFixed(2)}</p>
            <p className="text-gray-500 text-sm">{material.description}</p>

          </div>
        ))}
      </div>
    </div>
  );
}
