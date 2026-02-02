export default function BenefitsSection() {
  const benefits = [
    {
      icon: "🎯",
      title: "Salir de la Friendzone",
      description:
        "Deja de ser el 'buen amigo' y aprende a generar atracción real. Protocolo paso a paso para dejar de ser predecible.",
    },
    {
      icon: "💔",
      title: "Recuperar a tu Ex",
      description:
        "Usa la psicología de la escasez para que ella sienta el vacío de tu ausencia y quiera volver a tu vida.",
    },
    {
      icon: "🗣️",
      title: "Segunda Oportunidad",
      description:
        "El 90% de los rechazos no son definitivos. Aprende a reiniciar tu imagen y re-aparecer como un hombre nuevo.",
    },
    {
      icon: "🔥",
      title: "Romper el Hielo",
      description:
        "Guiones exactos para ese primer 'Hola'. Entra en su radar de forma natural sin parecer desesperado.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
            ¿Qué Aprenderás?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Soluciones Para Tu Situación
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            No importa cuál sea tu caso, este manual tiene las estrategias
            exactas para ayudarte a conquistar a esa mujer especial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-6 hover:bg-gradient-to-br hover:from-red-600 hover:to-red-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 group-hover:text-red-100 transition-colors">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
