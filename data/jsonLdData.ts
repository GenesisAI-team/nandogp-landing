// GEO Data
const ORG_ID = "https://www.transportesnandogp.com/#organization";
const HOME_PAGE = "https://www.transportesnandogp.com/";

export const ORG_NANDO = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: "NANDO-GP Transportes y Mudanzas",
  alternateName: "NANDO-GP",
  url: HOME_PAGE,
  logo: "https://www.transportesnandogp.com/og-nando-image.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "C/ Mayor 15, 1.5",
    addressLocality: "Burlada",
    postalCode: "31600",
    addressRegion: "Navarra",
    addressCountry: "ES",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+34 605 474 930",
      email: "transportesymudanzasnandogp@gmail.com",
      availableLanguage: ["es"],
      areaServed: "ES",
    },
  ],
};

const provider = { "@id": ORG_ID };
const mainEntityOfPage = { "@type": "WebPage", "@id": HOME_PAGE };

export const SERVICE_MUDANZAS_LOCALES = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Mudanzas locales",
  provider,
  areaServed: { "@type": "AdministrativeArea", name: "Navarra" },
  description: "Gestión integral de traslados dentro de la ciudad y provincia.",
  mainEntityOfPage,
};

export const SERVICE_MUDANZAS_NACIONALES = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Mudanzas nacionales",
  provider,
  areaServed: { "@type": "Country", name: "España" },
  description: "Logística coordinada para larga distancia en toda la península.",
  mainEntityOfPage,
};

export const SERVICE_MUDANZAS_OFICINA = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Mudanzas de oficina",
  provider,
  areaServed: { "@type": "Country", name: "España" },
  description: "Traslados corporativos minimizando el tiempo de inactividad.",
  mainEntityOfPage,
};

export const SERVICE_PORTES_EXPRESS = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Portes express",
  provider,
  areaServed: { "@type": "Country", name: "España" },
  description: "Transporte rápido para cargas pequeñas o entregas urgentes.",
  mainEntityOfPage,
};

export const SERVICE_VACIADO_LOCALES = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Vaciado de locales",
  provider,
  areaServed: { "@type": "AdministrativeArea", name: "Navarra" },
  description: "Desalojo y retirada de objetos para dejar el espacio listo.",
  mainEntityOfPage,
};

export const SERVICE_MONTAJE_MUEBLES = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Montaje de muebles",
  provider,
  areaServed: { "@type": "AdministrativeArea", name: "Navarra" },
  description: "Ensamblaje profesional, seguro y eficiente de mobiliario.",
  mainEntityOfPage,
};

export const FAQ_NANDO = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntityOfPage,
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto tarda una mudanza?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del volumen y la distancia. Una mudanza local estándar suele completarse en un día (aprox. 6-8 horas).",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo calculáis el precio de una mudanza?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del volumen, la distancia, la accesibilidad (ascensor/parking) y extras como embalaje o montaje.",
      },
    },
    {
      "@type": "Question",
      name: "¿Incluye embalaje y materiales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Podemos ofrecer solo transporte o servicio completo con embalaje y materiales, según lo que necesites.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué zonas cubrís?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Navarra y mudanzas nacionales a cualquier punto de España bajo presupuesto.",
      },
    },
    {
      "@type": "Question",
      name: "¿Con cuánta antelación debo reservar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Recomendamos reservar con 10-15 días, sobre todo a final de mes y en viernes.",
      },
    },
  ],
};