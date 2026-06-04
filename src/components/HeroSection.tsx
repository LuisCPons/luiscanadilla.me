"use client";

import {
  Heading,
  Text,
  RevealFx,
  Column,
  Row,
  Avatar,
} from "@once-ui-system/core";
import { useLang } from "./LangContext";

const content = {
  en: {
    headline: <>Power Platform & Microsoft Copilot specialist</>,
    subline: (
      <>
        I design and ship Copilot Studio agents and Power Platform automations in production. Currently leading Copilot adoption at IE University.
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
        Diseño y despliego agentes de Copilot Studio y automatizaciones de Power Platform en producción. Actualmente liderando la adopción de Copilot en IE University.
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
    <Row fillWidth gap="xl" vertical="center" s={{ direction: "column-reverse", gap: "l" }}>
      <Column flex={7} gap="m" fillWidth>
        <RevealFx translateY="4" fillWidth paddingBottom="16">
          <Heading wrap="balance" variant="display-strong-l">
            {t.headline}
          </Heading>
        </RevealFx>
        <RevealFx translateY="8" delay={0.2} fillWidth paddingBottom="32">
          <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
            {t.subline}
          </Text>
        </RevealFx>
      </Column>
      <Column flex={5} horizontal="end" vertical="center" s={{ horizontal: "center" }}>
        <RevealFx translateY="4" delay={0.1} fillWidth>
          <div style={{
            width: '100%',
            maxWidth: '360px',
            aspectRatio: '3/4',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
            margin: '0 auto',
          }}>
            <img
              src="/images/avatar.jpg"
              alt="Luis Cañadilla"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </RevealFx>
      </Column>
    </Row>
  );
}
