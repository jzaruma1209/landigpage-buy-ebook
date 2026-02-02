"use client";

import { useState } from "react";
import Modal from "./Modal";

export default function BenefitsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
              <span className="text-3xl">🔥</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Las 7 Fases del<br />
              <span className="text-red-600">Enamoramiento</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              El método biológico para atraer sin rogar, sin improvisar y sin ser rechazado
            </p>
          </div>

          {/* Problema */}
          <div className="mb-16">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-10">
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                La mayoría intenta conquistar a ciegas: mensajes al azar, demasiada atención, confesiones fuera de tiempo…
              </p>
              <p className="text-gray-800 text-xl font-medium mb-8 border-l-4 border-red-500 pl-4 italic">
                "¿Por qué me rechazó si hice todo bien?"
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold">1</span>
                  </div>
                  <p className="text-gray-700 text-lg">El enamoramiento <strong className="text-gray-900">NO es magia.</strong></p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold">2</span>
                  </div>
                  <p className="text-gray-700 text-lg">Es un <strong className="text-gray-900">proceso biológico</strong> con fases claras.</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold">3</span>
                  </div>
                  <p className="text-gray-700 text-lg">Saltarte una sola fase <strong className="text-red-600">activa el rechazo.</strong></p>
                </div>
              </div>
            </div>
          </div>

          {/* La verdad */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">La verdad que nadie te explica</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Las relaciones humanas funcionan por fases universales, programadas por la biología y la psicología.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-100 rounded-2xl">
                <p className="text-sm text-gray-500 mb-1">No es</p>
                <p className="font-semibold text-gray-800">Opinión</p>
              </div>
              <div className="text-center p-4 bg-gray-100 rounded-2xl">
                <p className="text-sm text-gray-500 mb-1">No es</p>
                <p className="font-semibold text-gray-800">Motivación</p>
              </div>
              <div className="text-center p-4 bg-red-600 rounded-2xl">
                <p className="text-sm text-red-200 mb-1">Es</p>
                <p className="font-semibold text-white">Ciencia</p>
              </div>
            </div>
          </div>

          {/* Cada fase tiene */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🔥</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Cada fase tiene</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center hover:border-red-500 hover:shadow-lg transition-all">
                <div className="text-3xl mb-3">⏱️</div>
                <p className="font-semibold text-gray-900">Su propio ritmo</p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center hover:border-red-500 hover:shadow-lg transition-all">
                <div className="text-3xl mb-3">📍</div>
                <p className="font-semibold text-gray-900">Señales exactas</p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center hover:border-red-500 hover:shadow-lg transition-all">
                <div className="text-3xl mb-3">🎯</div>
                <p className="font-semibold text-gray-900">Técnicas específicas</p>
              </div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-center">
              <p className="text-red-700 font-medium">⚠️ Forzar una fase siempre tiene un precio</p>
            </div>
          </div>

          {/* Qué aprenderás */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-10 text-white">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🚨</span>
                <h3 className="text-2xl font-bold">¿Qué aprenderás en este libro?</h3>
              </div>
              <p className="text-gray-300 text-lg mb-6">
                Este <span className="text-red-400 font-semibold">NO</span> es un libro de frases bonitas. Es un sistema paso a paso para:
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">Avanzar fase por fase</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">Reducir el rechazo antes de que ocurra</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">Aumentar el interés de forma natural</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">Evitar errores que te hacen ver necesitado</span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-2xl p-6 text-center">
                <p className="text-xl font-bold">
                  💥 La técnica correcta en la fase correcta = <br className="hidden md:block" />
                  La atracción se activa sola
                </p>
              </div>
            </div>
          </div>

          {/* Por qué funciona */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Por qué este método sí funciona</h3>
            </div>
            <p className="text-gray-700 text-lg mb-6">
              Porque las fases son <strong>sagradas</strong>. No dependen de:
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 px-4 py-2 rounded-full">
                <span className="text-red-500">✕</span> Tu dinero
              </span>
              <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 px-4 py-2 rounded-full">
                <span className="text-red-500">✕</span> Tu edad
              </span>
              <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 px-4 py-2 rounded-full">
                <span className="text-red-500">✕</span> Ser el más atractivo
              </span>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <p className="text-gray-800 text-lg leading-relaxed">
                👉 Estas fases se repiten en <strong>todas las relaciones humanas.</strong><br />
                Este libro te da el <span className="text-blue-600 font-semibold">mapa real</span> que la mayoría nunca tuvo.
              </p>
            </div>
          </div>

          {/* Lo que cambia */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Lo que cambia cuando entiendes las fases</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-green-50 border border-green-100 rounded-xl p-4">
                <span className="text-green-600 text-xl">✓</span>
                <span className="text-gray-700">Dejas de rogar atención</span>
              </div>
              <div className="flex items-center gap-3 bg-green-50 border border-green-100 rounded-xl p-4">
                <span className="text-green-600 text-xl">✓</span>
                <span className="text-gray-700">Dejas de improvisar mensajes</span>
              </div>
              <div className="flex items-center gap-3 bg-green-50 border border-green-100 rounded-xl p-4">
                <span className="text-green-600 text-xl">✓</span>
                <span className="text-gray-700">Evitas la friendzone</span>
              </div>
              <div className="flex items-center gap-3 bg-green-50 border border-green-100 rounded-xl p-4">
                <span className="text-green-600 text-xl">✓</span>
                <span className="text-gray-700">Sabes qué hacer y qué NO hacer</span>
              </div>
              <div className="flex items-center gap-3 bg-green-50 border border-green-100 rounded-xl p-4 md:col-span-2">
                <span className="text-green-600 text-xl">✓</span>
                <span className="text-gray-700">Generas interés sin perseguir</span>
              </div>
            </div>
            <p className="text-gray-500 text-center mt-6 italic">
              No porque seas "mejor persona", sino porque juegas con las reglas reales del deseo.
            </p>
          </div>

          {/* Para quién es */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🔥</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Este libro es para ti si:</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                <span className="text-2xl">😔</span>
                <p className="text-gray-700 text-lg">Siempre te dicen "eres muy bueno" pero <strong>no te eligen</strong></p>
              </div>
              <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                <span className="text-2xl">❓</span>
                <p className="text-gray-700 text-lg">Te rechazan <strong>sin saber qué hiciste mal</strong></p>
              </div>
              <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                <span className="text-2xl">❄️</span>
                <p className="text-gray-700 text-lg">Sientes que el interés <strong>se enfría sin explicación</strong></p>
              </div>
              <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                <span className="text-2xl">🎯</span>
                <p className="text-gray-700 text-lg">Quieres <strong>resultados</strong>, no teoría romántica</p>
              </div>
            </div>
          </div>

          {/* Advertencia */}
          <div className="mb-16">
            <div className="bg-amber-50 border-2 border-amber-200 rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">⚠️</span>
                <h3 className="text-2xl font-bold text-gray-900">Advertencia honesta</h3>
              </div>
              <p className="text-gray-700 text-lg mb-4">
                Este libro <strong>no es cómodo.</strong> Te hará ver errores que hoy te cuestan oportunidades.
              </p>
              <p className="text-gray-900 text-xl font-semibold">
                Pero una vez que entiendes las 7 fases…<br />
                <span className="text-red-600">No vuelves a actuar a ciegas nunca más.</span>
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-700 hover:via-red-700 hover:to-red-800 text-white text-lg md:text-xl font-bold py-5 px-8 md:px-12 rounded-2xl shadow-xl shadow-red-500/30 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-2xl">🔥</span>
              <span>DESCUBRIR LAS 7 FASES DEL ENAMORAMIENTO</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <p className="text-gray-500 text-sm mt-4">Acceso inmediato • Método comprobado</p>
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
