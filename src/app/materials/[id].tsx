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
      title: "Mármore Branco",
      price: 150.0,
      description: "Mármore branco de alta qualidade, perfeito para projetos sofisticados.",
      imageUrl: "/img/marble-white.jpg",  // Caminho correto para a pasta public/img
    },
    {
      id: 2,
      title: "Mármore Preto",
      price: 200.0,
      description: "Mármore preto polido com acabamento brilhante, ideal para ambientes modernos.",
      imageUrl: "/img/marble-black.jpg",
    },
    {
      id: 3,
      title: "Mármore Travertino",
      price: 180.0,
      description: "Mármore com textura única e tom bege, ótimo para pisos e revestimentos.",
      imageUrl: "/img/marble-travertine.jpg",
    },
    // Adicione mais materiais aqui, se necessário
  ];

  useEffect(() => {
    if (!id) {
      setError("ID não fornecido.");
      return;
    }

    const foundMaterial = materials.find((material) => material.id === parseInt(id));
    
    if (foundMaterial) {
      setMaterial(foundMaterial);
    } else {
      setError("Material não encontrado.");
    }
  }, [id, materials]);

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
