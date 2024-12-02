// /app/materials/[id].tsx
"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

interface Material {
  id: number;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
}

export default function MaterialDetails() {
  const { id } = useParams(); // Obtém o ID da URL
  const [material, setMaterial] = useState<Material | null>(null);
  const [error, setError] = useState<string>("");

  // Lista de materiais hardcoded
  const materials: Material[] = [
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
    // Adicione mais materiais aqui, se necessário
  ];

  useEffect(() => {
    if (!id || typeof id !== "string") {
      setError("ID não fornecido ou inválido.");
      return;
    }

    // A conversão para inteiro do ID vindo da URL
    const numericId = parseInt(id);

    // Verifica se o id convertido é um número válido
    if (isNaN(numericId)) {
      setError("ID inválido.");
      return;
    }

    // Encontrar o material correspondente ao ID
    const foundMaterial = materials.find((material) => material.id === numericId);

    if (foundMaterial) {
      setMaterial(foundMaterial);
    } else {
      setError("Material não encontrado.");
    }
  }, [id]); // A dependência do useEffect é apenas 'id'

  if (error) {
    return <p className="text-center text-red-500 mt-10">{error}</p>;
  }

  if (!material) {
    return <p className="text-center text-gray-500 mt-10">Material não encontrado.</p>;
  }

  return (
    <div className="container mx-auto p-6 mt-[100px]">
      <img
        src={material.imageUrl}
        alt={material.title}
        className="w-full h-64 object-cover mb-6 rounded shadow-md"
      />
      <h1 className="text-3xl font-bold">{material.title}</h1>
      <p className="text-gray-700 mt-2">Preço: R$ {material.price.toFixed(2)}</p>
      {material.description && (
        <p className="text-gray-600 mt-4">{material.description}</p>
      )}
    </div>
  );
}
