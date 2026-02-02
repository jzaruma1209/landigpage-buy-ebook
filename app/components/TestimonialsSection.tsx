export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos M.",
      text: "Llevaba 3 años en la friendzone con mi mejor amiga. Apliqué la Fase 4 y en 2 meses estábamos saliendo. Increíble.",
      rating: 5,
    },
    {
      name: "Andrés R.",
      text: "Mi ex me había bloqueado de todo. Usé el protocolo de ausencia táctica y ahora es ella quien me busca.",
      rating: 5,
    },
    {
      name: "Miguel L.",
      text: "Siempre me rechazaban porque parecía muy intenso. Este manual me enseñó a controlar eso. Ya tengo novia.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
            Testimonios Reales
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Ellos Ya Lo Lograron
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Historias reales de hombres que transformaron su vida amorosa usando
            las técnicas del manual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-red-500/50 transition-all"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center font-bold">
                  {testimonial.name[0]}
                </div>
                <span className="font-semibold">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
