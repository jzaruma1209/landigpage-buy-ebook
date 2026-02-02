"use client";

import { useState } from "react";
import Modal from "./Modal";

export default function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            ¿Listo Para Cambiar Tu Vida Amorosa?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Deja de ser el &ldquo;buen tipo&rdquo; que siempre termina solo.
            Obtén las herramientas para conquistar a cualquier mujer.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
              <div className="text-center">
                <span className="text-gray-300 line-through text-2xl">
                  $7.99
                </span>
                <span className="block text-5xl font-bold text-white">
                  $4.99
                </span>
                <span className="text-red-200 text-sm">
                  Precio especial de Facebook
                </span>
              </div>
              <div className="hidden md:block w-px h-20 bg-white/30" />
              <div className="text-left text-white">
                <div className="flex items-center gap-2 mb-2">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Acceso inmediato al manual completo</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Todas las fases y protocolos</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Guiones y scripts exactos</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full md:w-auto bg-white text-red-600 px-12 py-4 rounded-full font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              ¡Obtener Mi Copia Ahora! 🚀
            </button>
          </div>

          <p className="text-red-200 text-sm">
            ⚠️ Esta oferta es por tiempo limitado. El precio puede subir en
            cualquier momento.
          </p>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
