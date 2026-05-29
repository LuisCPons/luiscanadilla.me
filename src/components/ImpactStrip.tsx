"use client";

import { useLang } from "./LangContext";

const metrics = {
  en: [
    { number: "834", label: "visa documents automated in a single intake" },
    { number: "~90%", label: "reduction in manual case review time" },
    { number: "6", label: "team members using AI agents daily" },
    { number: "~60%", label: "faster document generation per student" },
  ],
  es: [
    { number: "834", label: "documentos de visado automatizados en un solo intake" },
    { number: "~90%", label: "reducción en tiempo de revisión manual de casos" },
    { number: "6", label: "miembros del equipo usando agentes IA a diario" },
    { number: "~60%", label: "más rápido en generación de documentos por estudiante" },
  ],
};

export function ImpactStrip() {
  const { lang } = useLang();
  const m = metrics[lang];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '2rem',
      width: '100%',
      maxWidth: '900px',
      margin: '0 auto',
      padding: '0 1rem',
    }}>
      {m.map((item) => (
        <div key={item.label} style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '2rem',
            fontWeight: 800,
            color: '#38bdf8',
            lineHeight: 1.2,
          }}>
            {item.number}
          </div>
          <div style={{
            fontSize: '0.8rem',
            color: 'rgba(128, 128, 128, 0.85)',
            marginTop: '0.35rem',
            lineHeight: 1.4,
          }}>
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
