import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Comprobamos si ya aceptó las cookies
    const cookiesAccepted = localStorage.getItem("cookies-accepted");
    if (!cookiesAccepted) {
      // Pequeño delay para que no salga de golpe al cargar
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookies-accepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:bottom-8 z-50 max-w-lg bg-dark text-white p-6 rounded-xl shadow-2xl border border-light/10 animate-in slide-in-from-bottom-10 fade-in duration-500">
      <div className="flex flex-col gap-4">
        <div>
          <h4 className="font-bold text-accent mb-2">Uso de Cookies</h4>
          <p className="text-sm text-light/80 leading-relaxed">
            Utilizamos cookies técnicas para garantizar el correcto
            funcionamiento del sitio. Al continuar navegando, aceptas su uso
            conforme a nuestra{" "}
            <Link to="/legal/cookies" className="underline hover:text-accent">
              Política de Cookies
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={acceptCookies}
            className="bg-accent hover:bg-accent/90 text-dark font-bold py-2 px-6 rounded-lg transition-colors text-sm w-full md:w-auto"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
