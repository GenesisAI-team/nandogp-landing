import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";

// Páginas
import HomePage from "./pages/HomePage";
import LegalPage from "./pages/LegalPage";
import CookieBanner from "./components/CookieBanner";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-light selection:bg-accent selection:text-white flex flex-col">
        {/* Elementos Globales (se ven en todas las páginas) */}
        <TopBar />

        <main className="flex-grow">
          <Routes>
            {/* Ruta Principal (Landing) */}
            <Route path="/" element={<HomePage />} />

            {/* Rutas Legales (URLs estáticas para Meta) */}
            <Route
              path="/legal/aviso-legal"
              element={<LegalPage type="aviso-legal" />}
            />
            <Route
              path="/legal/privacidad"
              element={<LegalPage type="privacidad" />}
            />
            <Route
              path="/legal/terminos"
              element={<LegalPage type="terminos" />}
            />
            <Route
              path="/legal/cookies"
              element={<LegalPage type="cookies" />}
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
