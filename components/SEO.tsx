// src/components/SEO.tsx
import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
}

export const SEO = ({ title, description}:SEOProps) => {
  useEffect(() => {
    // Añadir sufijo " | NANDO‑GP" si el título no lo contiene
    document.title = title.includes("NANDO‑GP") ? title : `${title} | NANDO‑GP`;

    // Actualizar la descripción
    if (description) {
      let metaDesc = document.querySelector("meta[name='description']");
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.setAttribute("name", "description");
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
};
