import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-dark text-light/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-light/10 pb-8">
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold text-light mb-4 tracking-tight">NANDO-GP</h3>
            <p className="text-sm leading-relaxed mb-4">
              Soluciones logísticas integrales para particulares y empresas. Comprometidos con la puntualidad y la seguridad de tu carga.
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-accent mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Cómo funciona</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Preguntas</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-accent mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Aviso Legal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Cookies</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-accent mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span>📍</span> Navarra y alrededores
              </li>
              <li className="flex items-start gap-2">
                <span>📧</span> contacto@nando-gp.com
              </li>
              <li className="flex items-start gap-2">
                <span>📞</span> +34 600 000 000
              </li>
            </ul>
          </div>

        </div>

        <div className="text-center text-xs text-light/40">
          <p>&copy; {new Date().getFullYear()} NANDO-GP Transportes. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;