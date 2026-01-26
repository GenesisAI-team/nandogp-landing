import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom"; // Importamos hooks de navegación
import { NAV_LINKS } from "../constants";

const TopBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hooks para saber dónde estamos y poder navegar
  const location = useLocation();
  const navigate = useNavigate();

  // Detectamos si estamos en una página legal
  const isLegalPage = location.pathname.includes("/legal");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    // Lógica inteligente de navegación
    if (location.pathname === "/") {
      // Si estamos en HOME, hacemos scroll normal
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si estamos en LEGAL, vamos a Home y luego hacemos scroll
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "auto" });
        }
      }, 100);
    }
  };

  // El header tendrá fondo SÓLIDO si: hay scroll, menú abierto O estamos en página legal
  const shouldShowBackground = isScrolled || mobileMenuOpen || isLegalPage;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldShowBackground
          ? "bg-light/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 z-50">
            <a
              href="/" // Cambiado a / para recargar si hace falta
              className="flex items-center gap-2"
              onClick={(e) => handleNavClick(e, "#home")}
            >
              <span className="font-bold text-xl tracking-tight text-dark">
                NANDO-GP
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex landscape:max-lg:hidden space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-dark hover:text-primary font-medium text-sm transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden landscape:max-lg:block z-50">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-dark hover:text-primary focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden landscape:max-lg:flex fixed inset-0 z-40 bg-light flex flex-col items-center justify-center h-screen w-screen overflow-y-auto">
          <div className="flex flex-col space-y-8 text-center p-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-dark hover:text-primary font-bold text-2xl tracking-wide transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default TopBar;
