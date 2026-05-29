"use client";

import { useState } from "react";
import {
  Heading,
  Text,
  RevealFx,
  Column,
  Badge,
  Row,
  Line,
} from "@once-ui-system/core";

const content = {
  en: {
    headline: <>Power Platform & Microsoft Copilot specialist · IE University</>,
    subline: (
      <>
        I design and ship Copilot Studio agents and Power Platform automations in production. Currently leading Copilot adoption at IE University across an 800+ case-per-year operations pipeline.
        <br /><br />
        <strong>Open to Microsoft Copilot / Power Platform consultant roles — Madrid, EU remote, or hybrid.</strong>
        <br /><br />
        <a href="https://linkedin.com/in/luiscp1992" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.4rem', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.3)', color: '#38bdf8', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', transition: 'all 0.2s ease' }}>Let's connect on LinkedIn →</a>
      </>
    ),
    featured: "Featured Work",
    caseStudy: "Case Study",
  },
  es: {
    headline: <>Especialista en Power Platform y Microsoft Copilot · IE University</>,
    subline: (
      <>
        Diseño y despliego agentes de Copilot Studio y automatizaciones de Power Platform en producción. Actualmente liderando la adopción de Copilot en IE University en un pipeline operativo de más de 800 casos al año.
        <br /><br />
        <strong>Abierto a roles de consultor Microsoft Copilot / Power Platform — Madrid, EU remoto o híbrido.</strong>
        <br /><br />
        <a href="https://linkedin.com/in/luiscp1992" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.4rem', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.3)', color: '#38bdf8', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', transition: 'all 0.2s ease' }}>Conectemos en LinkedIn →</a>
      </>
    ),
    featured: "Proyecto Destacado",
    caseStudy: "Caso de Estudio",
  },
};

interface HeroSectionProps {
  featuredHref: string;
}

export function HeroSection({ featuredHref }: HeroSectionProps) {
  const [lang, setLang] = useState<"en" | "es">("en");
  const t = content[lang];

  return (
    <Column maxWidth="m" horizontal="center" align="center">
      <RevealFx fillWidth horizontal="center" paddingTop="16" paddingBottom="8">
        <Row gap="8" vertical="center">
          <button
            onClick={() => setLang("en")}
            style={{
              padding: "0.25rem 0.6rem",
              borderRadius: "6px",
              border: "none",
              background: lang === "en" ? "rgba(56, 189, 248, 0.2)" : "transparent",
              color: lang === "en" ? "#38bdf8" : "rgba(255,255,255,0.4)",
              fontWeight: 600,
              fontSize: "0.8rem",
              cursor: "pointer",
              transition: "all 0.2s ease",
              letterSpacing: "0.05em",
            }}
          >
            EN
          </button>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.8rem" }}>|</span>
          <button
            onClick={() => setLang("es")}
            style={{
              padding: "0.25rem 0.6rem",
              borderRadius: "6px",
              border: "none",
              background: lang === "es" ? "rgba(56, 189, 248, 0.2)" : "transparent",
              color: lang === "es" ? "#38bdf8" : "rgba(255,255,255,0.4)",
              fontWeight: 600,
              fontSize: "0.8rem",
              cursor: "pointer",
              transition: "all 0.2s ease",
              letterSpacing: "0.05em",
            }}
          >
            ES
          </button>
        </Row>
      </RevealFx>

      <RevealFx fillWidth horizontal="center" paddingBottom="32">
        <Badge
          background="brand-alpha-weak"
          paddingX="12"
          paddingY="4"
          onBackground="neutral-strong"
          textVariant="label-default-s"
          arrow={false}
          href={featuredHref}
        >
          <Row paddingY="2">
            <Row gap="12" vertical="center">
              <strong className="ml-4">{t.featured}</strong>{" "}
              <Line background="brand-alpha-strong" vert height="20" />
              <Text marginRight="4" onBackground="brand-medium">
                {t.caseStudy}
              </Text>
            </Row>
          </Row>
        </Badge>
      </RevealFx>

      <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
        <Heading wrap="balance" variant="display-strong-l">
          {t.headline}
        </Heading>
      </RevealFx>
      <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
        <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
          {t.subline}
        </Text>
      </RevealFx>
    </Column>
  );
}
