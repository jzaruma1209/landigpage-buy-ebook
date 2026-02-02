"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";

const previewPages = [
  {
    id: 1,
    title: "Fase 0: Reinicio de Identidad",
    description:
      "Aprende a borrar la imagen negativa y renacer como un hombre nuevo",
    image: "/pagina1.webp",
  },
  {
    id: 2,
    title: "Fase 1: Exposición y Radar",
    description:
      "Cómo entrar en su radar de forma natural sin parecer desesperado",
    image: "/pagina2.webp",
  },
  {
    id: 3,
    title: "Fase 4: Protocolo de Transición",
    description: "De amigo a algo más: genera tensión sexual real",
    image: "/pagina3.webp",
  },
  {
    id: 4,
    title: "Psicología de la Escasez",
    description: "Haz que ella sienta el vacío de tu ausencia",
    image: "/pagina4.webp",
  },
];

interface SelectedPage {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function PreviewSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState<SelectedPage | null>(null);

  const openPagePreview = (page: SelectedPage) => {
    setSelectedPage(page);
  };

  const closePagePreview = () => {
    setSelectedPage(null);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
            Vista Previa
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Contenido del Manual
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Echa un vistazo a algunas de las páginas más impactantes del manual.
            Esto es solo una pequeña muestra de lo que aprenderás.
          </p>
        </div>

        {/* Grid de previsualizaciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {previewPages.map((page) => (
            <div
              key={page.id}
              onClick={() => openPagePreview(page)}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative h-64 bg-gradient-to-br from-red-100 to-red-50 overflow-hidden">
                {/* Imagen de la página */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="relative w-36 h-48 shadow-xl rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={page.image}
                      alt={page.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                {/* Overlay de hover con icono */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-3 shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-1">{page.title}</h3>
                <p className="text-sm text-gray-600">{page.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Ver Más */}
        <div className="text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>Ver Más y Obtener el Manual</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Popup de imagen expandida */}
      {selectedPage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay oscuro */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closePagePreview}
          />

          {/* Contenido del popup */}
          <div className="relative z-10 bg-white rounded-2xl shadow-2xl max-w-lg w-full animate-fadeIn overflow-hidden">
            {/* Botón cerrar */}
            <button
              onClick={closePagePreview}
              className="absolute top-4 right-4 z-20 bg-white/90 rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Imagen grande */}
            <div className="relative w-full h-96 bg-gradient-to-br from-red-100 to-red-50">
              <Image
                src={selectedPage.image}
                alt={selectedPage.title}
                fill
                className="object-contain p-4"
              />
            </div>

            {/* Info y botón */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {selectedPage.title}
              </h3>
              <p className="text-gray-600 mb-6">{selectedPage.description}</p>

              {/* Botón Leer Más */}
              <button
                onClick={() => {
                  closePagePreview();
                  setIsModalOpen(true);
                }}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-6 rounded-full font-bold text-lg hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <span>Leer Más</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
