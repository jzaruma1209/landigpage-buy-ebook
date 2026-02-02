"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Modal from "./Modal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Countdown timer - 5 hours from when user enters page, resets when reaches 0
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const totalSeconds =
          prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;
        if (totalSeconds <= 0) {
          // Reiniciar a 5 horas cuando llegue a 0
          return { hours: 5, minutes: 0, seconds: 0 };
        }
        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60,
        };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, "0");

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Patrón de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Círculos decorativos */}
      <div className="absolute top-40 md:top-20 left-10 w-72 h-72 bg-red-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 pt-3 pb-6 md:pt-12 md:pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-12 min-h-[80vh]">
          {/* Contenido izquierdo */}
          <div className="flex-1 text-center lg:text-left">
            {/* Barra de oferta única con countdown integrado */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex flex-wrap items-center justify-center gap-3 bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white px-5 py-2 md:py-3 rounded-full text-sm font-bold mb-3 md:mb-6 shadow-xl shadow-red-500/30 hover:shadow-red-500/50 transition-all transform hover:scale-105 border border-red-400/30 cursor-pointer"
            >
              <span className="flex items-center gap-2">
                🔥 <span>Oferta por tiempo limitado</span>
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full font-mono text-base">
                {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
              </span>
              <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full font-extrabold">
                Solo $4.99
              </span>
            </button>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6">
              Enamora a la Mujer
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                Que Deseas
              </span>
              Hasta Hacerla Tuya
            </h1>

            <p className="text-base md:text-xl text-gray-300 mb-4 md:mb-8 max-w-xl">
              Manual de{" "}
              <strong className="text-white">Ingeniería Social</strong> y{" "}
              <strong className="text-white">Psicología Conductual</strong> para
              conquistar a cualquier mujer usando estrategias científicamente
              probadas.
            </p>

            {/* Puntos clave */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-300">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Resultados Garantizados</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Paso a Paso</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Descarga Inmediata</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
              >
                ¡Quiero el Manual Ahora!
              </button>
              <a
                href="#preview"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
              >
                Ver Contenido
              </a>
            </div>

            {/* Precio */}
            <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
              <span className="text-gray-500 line-through text-2xl">
                $25.00
              </span>
              <span className="text-4xl font-bold text-white">$7.99</span>
              <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                -68% OFF
              </span>
            </div>
          </div>

          {/* Libro 3D */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 blur-3xl opacity-30 rounded-full scale-75" />

              {/* Libro */}
              <div className="relative transform hover:rotate-3 transition-transform duration-500">
                <div className="relative w-[25rem] md:w-[34rem] h-[25rem] md:h-[36rem] rounded-xl shadow-2xl overflow-hidden bg-white/5 backdrop-blur-sm ring-1 ring-white/10">
                  <Image
                    src="/libroportada.png"
                    alt="Portada del manual Enamora a la Mujer que Deseas"
                    fill
                    sizes="(max-width: 768px) 16rem, 20rem"
                    className="object-contain drop-shadow-2xl"
                    priority
                  />

                  {/* Banner diagonal de oferta */}
                  <div className="absolute top-3 -right-12 w-45 bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white text-center py-2 rotate-45 shadow-lg font-bold text-sm origin-center">
                    <div className="flex flex-col items-center">
                      <span className="text-xs">🔥 OFERTA</span>
                      <span className="font-mono text-base">
                        {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
