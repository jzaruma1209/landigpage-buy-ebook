export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-white mb-4">
            💘 Manual de Seducción
          </div>
          <p className="mb-6 max-w-md mx-auto text-sm">
            Transforma tu vida amorosa con estrategias de Ingeniería Social y
            Psicología Conductual científicamente probadas.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="hover:text-white transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contacto
            </a>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-sm">
              © 2026 Todos los derechos reservados. En colaboración con{" "}
              <span className="text-white font-semibold">ProGamer</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
