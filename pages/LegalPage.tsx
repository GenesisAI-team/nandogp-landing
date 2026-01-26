import React, { useEffect } from "react";
import { LEGAL_CONTENT, LegalDocType } from "../data/legalData";

interface LegalPageProps {
  type: LegalDocType;
}

const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  if (!type || !LEGAL_CONTENT[type]) return <div>Documento no encontrado</div>;

  const { title, content } = LEGAL_CONTENT[type];

  const currentDate = new Date().toLocaleDateString("es-ES", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      {/* 1. Header estilo Documento Oficial (Negro) */}
      <div className="bg-dark text-white pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            {title}
          </h1>
          <div className="inline-flex items-center gap-2 text-white/60 text-sm uppercase tracking-widest border border-white/20 px-4 py-1.5 rounded-full">
            <span>Última actualización:</span>
            <span className="text-accent font-semibold">{currentDate}</span>
          </div>
        </div>
      </div>

      {/* 2. Cuerpo del Documento */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-10 pb-20 relative z-10">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl border border-gray-100">
          <article
            className="
              prose max-w-none text-gray-700 leading-relaxed
              
              /* Títulos */
              [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-dark [&_h3]:mt-10 [&_h3]:mb-4 
              [&_h3]:border-l-4 [&_h3]:border-accent [&_h3]:pl-4
              
              /* Párrafos y Listas */
              [&_p]:mb-4 [&_p]:text-[15px] md:[&_p]:text-base
              [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-6 [&_ul]:space-y-2
              [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-6
              [&_li]:text-gray-600
              
              /* CORRECCIÓN DE LA CAJA DE DATOS (info-box) */
              [&_.info-box]:bg-[#F8F5F2] 
              [&_.info-box]:p-6 
              [&_.info-box]:rounded-lg 
              [&_.info-box]:border 
              [&_.info-box]:border-gray-200
              [&_.info-box]:border-l-4 
              [&_.info-box]:border-l-primary 
              [&_.info-box]:mb-8
              [&_.info-box_p]:mb-1 /* Menos margen entre lineas dentro de la caja */
              [&_.info-box_strong]:text-dark
            "
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
