import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="bg-dark text-light/80 py-12 border-t border-light/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-light/10 pb-8">
          {/* Identidad */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-light mb-4 tracking-tight">
              NANDO-GP
            </h3>
            <p className="text-sm leading-relaxed mb-4 text-light/70">
              Soluciones logísticas integrales. Transportes y mudanzas
              nacionales con la máxima seguridad y confianza.
            </p>
          </div>

          {/* Navegación */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-accent mb-4">Menú</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#home" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="hover:text-white transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="/#how-it-works"
                  className="hover:text-white transition-colors"
                >
                  Cómo funciona
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-white transition-colors">
                  Preguntas
                </a>
              </li>
            </ul>
          </div>

          {/* Legal (Vital para Meta) */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-accent mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/legal/aviso-legal"
                  className="hover:text-white transition-colors"
                >
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link
                  to="/legal/privacidad"
                  className="hover:text-white transition-colors"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  to="/legal/terminos"
                  className="hover:text-white transition-colors"
                >
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link
                  to="/legal/cookies"
                  className="hover:text-white transition-colors"
                >
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto (Debe coincidir con documentos) */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-accent mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-accent flex-shrink-0 mt-0.5"
                />
                <span>
                  C/ Mayor 15, 1.5
                  <br />
                  31600 Burlada (Navarra)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a
                  href="mailto:eonandogp@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  eonandogp@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a
                  href="tel:+34605474930"
                  className="hover:text-white transition-colors"
                >
                  +34 605 474 930
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-light/40 gap-4">
          <p>
            &copy; {new Date().getFullYear()} NANDO-GP (Efrén Orlando Guaman
            Peñarreta).
          </p>
          <p>Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
