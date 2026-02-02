"use client";

import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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

        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            ¡Obtén tu Manual Ahora!
          </h3>
          <p className="text-gray-600">
            Elige tu opción preferida y comienza tu transformación hoy
          </p>
        </div>

        <div className="space-y-4">
          {/* Opción $7.99 - Premium */}
          <a
            href="https://tu-link-de-pago-7.99.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-gray-700 to-gray-900 text-white py-4 px-6 rounded-xl text-center font-semibold hover:from-gray-800 hover:to-black transition-all transform hover:scale-105 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <span className="block text-lg">Edición Premium</span>
                <span className="text-sm text-gray-300">
                  Acceso completo al manual
                </span>
              </div>
              <div className="text-2xl font-bold">$7.99</div>
            </div>
          </a>

          {/* Opción $4.99 - Destacada */}
          <a
            href="https://tu-link-de-pago-4.99.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-red-600 to-red-800 text-white py-4 px-6 rounded-xl text-center font-semibold hover:from-red-700 hover:to-red-900 transition-all transform hover:scale-105 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
              ¡OFERTA!
            </div>
            <div className="flex items-center justify-between">
              <div className="text-left">
                <span className="block text-lg">Oferta Especial Facebook</span>
                <span className="text-sm text-red-200">
                  ¡Solo por tiempo limitado!
                </span>
              </div>
              <div>
                <span className="text-sm line-through text-red-300">
                  $7.99
                </span>
                <span className="block text-2xl font-bold">$4.99</span>
              </div>
            </div>
          </a>
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          🔒 Pago seguro • Descarga instantánea • Garantía de satisfacción
        </p>
      </div>
    </div>
  );
}
