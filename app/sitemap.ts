import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://calcuasada.com";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/guias`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/guias/carne-asada-perfecta-monterrey`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/guias/cuanto-carbon-necesito-carne-asada`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/guias/lista-compras-carne-asada-completa`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/guias/como-hacer-brisket-ahumado`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/calculadora/10`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/calculadora/15`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/calculadora/20`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/calculadora/25`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/calculadora/30`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/calculadora/40`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/calculadora/50`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/termometro`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/acerca`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/contacto`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/privacidad`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
