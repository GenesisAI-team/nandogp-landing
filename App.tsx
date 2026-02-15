import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";

// Páginas
import HomePage from "./pages/HomePage";
import LegalPage from "./pages/LegalPage";
import CookieBanner from "./components/CookieBanner";
import { SEO } from "./components/SEO";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-light selection:bg-accent selection:text-white flex flex-col">
        {/* Elementos Globales (se ven en todas las páginas) */}
        <TopBar />

        <main className="flex-grow">
          <Routes>
            {/* Ruta Principal (Landing) */}
            <Route path="/" element={
                <>
                  <SEO
                    title="NANDO-GP Transportes | Mudanzas y portes en toda España"
                    description="Empresa de mudanzas y transportes con sede en Navarra. Realizamos mudanzas locales, nacionales, de oficina, portes express y montaje de muebles en toda España."
                  />
                  <HomePage />
                </>
              } 
            />

            {/* Rutas Legales (URLs estáticas para Meta) */}
            <Route
              path="/legal/aviso-legal"
              element={
                <>
                  <SEO
                    title="Aviso Legal | NANDO-GP"
                    description="Información legal sobre NANDO-GP: responsable del sitio, NIF, domicilio en Burlada (Navarra) y condiciones de uso."
                  />
                  <LegalPage type="aviso-legal" />
                </>
              }
            />
            <Route
              path="/legal/privacidad"
              element={
                <>
                  <SEO
                    title="Política de Privacidad | NANDO-GP"
                    description="Cómo tratamos tus datos personales cuando contratas nuestros servicios de mudanzas y portes: datos recogidos, finalidad, legitimación y derechos del usuario."
                  />
                  <LegalPage type="privacidad" />
                </>
              }
            />
            <Route
              path="/legal/terminos"
              element={
                <>
                  <SEO
                    title="Términos y Condiciones | NANDO-GP"
                    description="Condiciones generales de nuestros servicios de mudanzas y portes: identificación del proveedor, servicios ofrecidos, responsabilidad y tarifas."
                  />
                  <LegalPage type="terminos" />
                </>
              }
            />
            <Route
              path="/legal/cookies"
              element={
                <>
                <SEO
                  title="Política de Cookies | NANDO-GP"
                  description="Información sobre el uso de cookies en NANDO-GP: qué son, qué cookies se utilizan (solo técnicas necesarias) y cómo desactivarlas."
                />
                  <LegalPage type="cookies" />
                </>
                }
            />

            {/* Ruta 404 (Opcional, redirige a home por ahora) */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <Footer />
        <CookieBanner />
        <WhatsAppWidget />
      </div>
    </Router>
  );
};

export default App;
