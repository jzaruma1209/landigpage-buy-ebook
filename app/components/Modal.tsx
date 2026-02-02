"use client";

import { useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const [showWhatsAppMenu, setShowWhatsAppMenu] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setShowWhatsAppMenu(false);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const phoneNumber = "593985958116";
  
  const whatsappOptions = [
    {
      label: "¿Cómo puedo adquirirlo en $4.99?",
      message: "Hola, quiero adquirir el manual 'Enamora a la Mujer Que Deseas' por $4.99 💰"
    },
    {
      label: "Estoy en la friendzone y quiero salir",
      message: "Hola, estoy en la friendzone y quiero salir. Me interesa el manual 'Enamora a la Mujer Que Deseas' 💔"
    },
    {
      label: "La cagué/me rechazaron y quiero arreglarlo",
      message: "Hola, la cagué o me rechazaron y quiero arreglarlo. Me interesa el manual 'Enamora a la Mujer Que Deseas' 😔"
    },
    {
      label: "No sé cómo hablarle / no me conoce",
      message: "Hola, no sé cómo hablarle o no me conoce. Me interesa el manual 'Enamora a la Mujer Que Deseas' 🤔"
    }
  ];

  const getWhatsAppLink = (message: string) => {
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

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
          {/* Vista Principal: Edición Premium | Vista WhatsApp: Oferta Facebook */}
          {!showWhatsAppMenu ? (
            <a
              href="https://pay.hotmart.com/L104156313N?bid=1770046651657"
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
          ) : (
            <div className="block w-full bg-gradient-to-r from-red-600 to-red-800 text-white py-4 px-6 rounded-xl text-center font-semibold shadow-lg relative overflow-hidden">
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
                <div className="text-right">
                  <span className="text-sm line-through text-red-300 block mt-1">
                    $7.99
                  </span>
                  <span className="block text-2xl font-bold -mt-1">$4.99</span>
                </div>
              </div>
            </div>
          )}

          {/* Opción $4.99 - Destacada con submenú WhatsApp */}
          {!showWhatsAppMenu ? (
            <button
              onClick={() => setShowWhatsAppMenu(true)}
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
                <div className="text-right">
                  <span className="text-sm line-through text-red-300 block mt-1">
                    $7.99
                  </span>
                  <span className="block text-2xl font-bold -mt-1">$4.99</span>
                </div>
              </div>
            </button>
          ) : (
            <div className="bg-gradient-to-r from-green-500 to-green-700 rounded-xl p-4 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-bold flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  ¿Cuál es tu situación?
                </span>
                <button 
                  onClick={() => setShowWhatsAppMenu(false)}
                  className="text-white/70 hover:text-white text-sm"
                >
                  ← Volver
                </button>
              </div>
              <div className="space-y-3">
                {whatsappOptions.map((option, index) => (
                  <a
                    key={index}
                    href={getWhatsAppLink(option.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full bg-white text-gray-800 py-4 px-5 rounded-xl text-sm font-semibold shadow-md border-2 border-gray-100 hover:bg-green-100/70 hover:border-green-300 active:scale-[0.98] active:bg-green-50 transition-all"
                  >
                    <span>{option.label}</span>
                    <span className="text-green-600 text-lg animate-[bounceX_1s_ease-in-out_infinite]">→</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          🔒 Pago seguro • Descarga instantánea • Garantía de satisfacción
        </p>
      </div>
    </div>
  );
}
