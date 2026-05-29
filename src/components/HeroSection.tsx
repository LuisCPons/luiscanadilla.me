"use client";

import {
  Heading,
  Text,
  RevealFx,
  Column,
} from "@once-ui-system/core";
import { useLang } from "./LangContext";

const content = {
  en: {
    headline: <>Power Platform & Microsoft Copilot specialist</>,
    subline: (
      <>
        I design and ship Copilot Studio agents and Power Platform automations in production. Currently leading Copilot adoption at IE University across an 800+ case-per-year operations pipeline.
        <br /><br />
        <strong>Open to Microsoft Copilot / Power Platform consultant roles — Madrid, EU remote, or hybrid.</strong>
        <br /><br />
        <a href="https://linkedin.com/in/luiscp1992" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.4rem', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.3)', color: '#38bdf8', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', transition: 'all 0.2s ease' }}>Let's connect on LinkedIn →</a>
      </>
    ),
  },
  es: {
    headline: <>Especialista en Power Platform y Microsoft Copilot</>,
    subline: (
      <>
        Diseño y despliego agentes de Copilot Studio y automatizaciones de Power Platform en producción. Actualmente liderando la adopción de Copilot en IE University en un pipeline operativo de más de 800 casos al año.
        <br /><br />
        <strong>Abierto a roles de consultor Microsoft Copilot / Power Platform — Madrid, EU remoto o híbrido.</strong>
        <br /><br />
        <a href="https://linkedin.com/in/luiscp1992" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.4rem', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.3)', color: '#38bdf8', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', transition: 'all 0.2s ease' }}>Conectemos en LinkedIn →</a>
      </>
    ),
  },
};

export function HeroSection() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <Column maxWidth="m" horizontal="center" align="center">
      <RevealFx translateY="4" fillWidth horizontal="center" paddingTop="32" paddingBottom="16">
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
