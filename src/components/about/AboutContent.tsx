"use client";

import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Row,
} from "@once-ui-system/core";
import { about, person, social } from "@/resources";
import { useLang } from "@/components/LangContext";
import styles from "./about.module.scss";
import React from "react";

const translations = {
  en: {
    intro: {
      title: "Introduction",
      description: (
        <>
          Operations & Data Specialist at IE University, where I lead internal AI adoption as the department's AI Champion. I've shipped a Copilot Studio agent to production, built Power Automate flows for SLA monitoring and KPI digests, and enabled ~40 advisors on Microsoft Copilot and ChatGPT patterns. Completed a Master in AI & Innovation (Founderz, 2026) and currently finishing IE Executive Education's Generative AI programme (full scholarship).
          <br /><br />
          <strong>Engagement Model:</strong> I work in tight feedback loops — discover real user pain in week 1, ship a working prototype by week 2, measure adoption by week 4. I avoid building tools nobody asked for.
        </>
      ),
    },
    work: {
      title: "Work Experience",
      experiences: [
        {
          company: "IE University",
          timeframe: "2023 - Present",
          role: "Operations & Data Specialist — Student Services",
          achievements: [
            <>
              <strong>Process Optimization:</strong> Owned a Microsoft Dynamics 365 case pipeline of 800+ annual requests. Built Power Automate cloud flows for SLA-threshold alerts, KPI digests, and recurring tasks, reducing manual follow-up and achieving a ~20% reduction in SLA breach rate.
            </>,
            <>
              <strong>Data & Reporting:</strong> Developed Power BI dashboards (DAX, Power Query) viewed weekly by the leadership team to track operational KPIs, response times, and service quality. Standardized internal documentation and executed data quality checks.
            </>,
            <>
              <strong>AI Adoption:</strong> Acted as Internal AI Champion. Defined and rolled out Microsoft Copilot and ChatGPT adoption patterns (templates, summaries, data QA) and delivered hands-on enablement sessions to ~40 advisors.
            </>,
          ],
        },
      ],
    },
    studies: {
      title: "Education",
    },
    certifications: {
      title: "Certifications",
      groups: [
        {
          title: "COMPLETED",
          items: [
            <>Generative AI Fundamentals — Universidad de los Andes</>,
            <>IE Staff Self-Leadership Program (Feb–Mar 2026)</>,
          ],
        },
        {
          title: "CURRENTLY PURSUING (2026)",
          items: [
            <>Microsoft Applied Skills — AB-900 (Configure administration for Microsoft 365 Copilot and Copilot agents)</>,
            <>Microsoft Certified — AB-620: AI Agent Builder Associate</>,
            <>Microsoft Certified — AB-410: Intelligent Applications Builder Associate</>,
            <>Generative AI: Unlocking Enterprise Value<br/>IE University Executive Education — Full Scholarship Awarded</>,
          ],
        },
      ],
    },
  },
  es: {
    intro: {
      title: "Introducción",
      description: (
        <>
          Especialista en Operaciones y Datos en IE University, donde lidero la adopción interna de IA como AI Champion del departamento. He desplegado un agente de Copilot Studio en producción, construido flujos de Power Automate para alertas de SLA y digests de KPIs, y capacitado a ~40 asesores en patrones de Microsoft Copilot y ChatGPT. Máster en IA e Innovación completado (Founderz, 2026) y actualmente finalizando el programa de IA Generativa de IE Executive Education (beca completa).
          <br /><br />
          <strong>Modelo de trabajo:</strong> Trabajo en ciclos de feedback cortos — descubro el problema real del usuario en la semana 1, entrego un prototipo funcional en la semana 2, mido la adopción en la semana 4. Evito construir herramientas que nadie pidió.
        </>
      ),
    },
    work: {
      title: "Experiencia Profesional",
      experiences: [
        {
          company: "IE University",
          timeframe: "2023 - Presente",
          role: "Especialista en Operaciones y Datos — Servicios al Estudiante",
          achievements: [
            <>
              <strong>Optimización de procesos:</strong> Gestión de un pipeline de casos en Microsoft Dynamics 365 de más de 800 solicitudes anuales. Diseño de flujos de Power Automate para alertas de umbral de SLA, digests de KPIs y tareas recurrentes, reduciendo el seguimiento manual y logrando una reducción de ~20% en la tasa de incumplimiento de SLA.
            </>,
            <>
              <strong>Datos y Reporting:</strong> Desarrollo de dashboards de Power BI (DAX, Power Query) consultados semanalmente por el equipo directivo para el seguimiento de KPIs operativos, tiempos de respuesta y calidad del servicio. Estandarización de documentación interna y ejecución de controles de calidad de datos.
            </>,
            <>
              <strong>Adopción de IA:</strong> Rol de AI Champion interno. Definición y despliegue de patrones de adopción de Microsoft Copilot y ChatGPT (plantillas, resúmenes, QA de datos) y sesiones de capacitación práctica a ~40 asesores.
            </>,
          ],
        },
      ],
    },
    studies: {
      title: "Educación",
    },
    certifications: {
      title: "Certificaciones",
      groups: [
        {
          title: "COMPLETADAS",
          items: [
            <>Fundamentos de IA Generativa — Universidad de los Andes</>,
            <>IE Staff Self-Leadership Program (feb–mar 2026)</>,
          ],
        },
        {
          title: "EN CURSO (2026)",
          items: [
            <>Microsoft Applied Skills — AB-900 (Configuración de administración para Microsoft 365 Copilot y agentes Copilot)</>,
            <>Microsoft Certified — AB-620: AI Agent Builder Associate</>,
            <>Microsoft Certified — AB-410: Intelligent Applications Builder Associate</>,
            <>Generative AI: Unlocking Enterprise Value<br/>IE University Executive Education — Beca Completa</>,
          ],
        },
      ],
    },
  },
};

export function AboutContent() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <Row fillWidth s={{ direction: "column"}} horizontal="center">
      {about.avatar.display && (
        <Column
          className={styles.avatar}
          top="64"
          fitHeight
          position="sticky"
          s={{ position: "relative", style: { top: "auto" } }}
          xs={{ style: { top: "auto" } }}
          minWidth="160"
          paddingX="l"
          paddingBottom="xl"
          gap="m"
          flex={3}
          horizontal="center"
        >
          <Avatar src={person.avatar} size="xl" />
          <Row gap="8" vertical="center">
            <Icon onBackground="accent-weak" name="globe" />
            Madrid, Spain
          </Row>
          {person.languages && person.languages.length > 0 && (
            <Row wrap gap="8">
              {person.languages.map((language, index) => (
                <Tag key={index} size="l">
                  {language}
                </Tag>
              ))}
            </Row>
          )}
        </Column>
      )}
      <Column className={styles.blockAlign} flex={9} maxWidth={40}>
        <Column
          id={t.intro.title}
          fillWidth
          minHeight="160"
          vertical="center"
          marginBottom="32"
        >
          {about.calendar.display && (
            <Row
              fitWidth
              border="brand-alpha-medium"
              background="brand-alpha-weak"
              radius="full"
              padding="4"
              gap="8"
              marginBottom="m"
              vertical="center"
              className={styles.blockAlign}
              style={{
                backdropFilter: "blur(var(--static-space-1))",
              }}
            >
              <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
              <Row paddingX="8">{lang === "en" ? "Schedule a call" : "Agendar una llamada"}</Row>
              <IconButton
                href={about.calendar.link}
                data-border="rounded"
                variant="secondary"
                icon="chevronRight"
              />
            </Row>
          )}
          <Heading className={styles.textAlign} variant="display-strong-xl">
            {person.name}
          </Heading>
          <Text
            className={styles.textAlign}
            variant="display-default-xs"
            onBackground="neutral-weak"
          >
            {person.role}
          </Text>
          {social.length > 0 && (
            <Row
              className={styles.blockAlign}
              paddingTop="20"
              paddingBottom="8"
              gap="8"
              wrap
              horizontal="center"
              fitWidth
              data-border="rounded"
            >
              {social
                    .filter((item) => item.essential)
                    .map(
                (item) =>
                  item.link && (
                    <React.Fragment key={item.name}>
                      <Row s={{ hide: true }}>
                        <Button
                          key={item.name}
                          href={item.link}
                          prefixIcon={item.icon}
                          label={item.name}
                          size="s"
                          weight="default"
                          variant="secondary"
                        />
                      </Row>
                      <Row hide s={{ hide: false }}>
                        <IconButton
                          size="l"
                          key={`${item.name}-icon`}
                          href={item.link}
                          icon={item.icon}
                          variant="secondary"
                        />
                      </Row>
                    </React.Fragment>
                  ),
              )}
            </Row>
          )}
        </Column>

        {about.intro.display && (
          <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
            {t.intro.description}
          </Column>
        )}

        {about.work.display && (
          <>
            <Heading as="h2" id={t.work.title} variant="display-strong-s" marginBottom="m">
              {t.work.title}
            </Heading>
            <Column fillWidth gap="l" marginBottom="40">
              {t.work.experiences.map((experience, index) => (
                <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                  <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                    <Text id={experience.company} variant="heading-strong-l">
                      {experience.company}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {experience.timeframe}
                    </Text>
                  </Row>
                  <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                    {experience.role}
                  </Text>
                  <Column as="ul" gap="16">
                    {experience.achievements.map(
                      (achievement: React.ReactNode, idx: number) => (
                        <Text
                          as="li"
                          variant="body-default-m"
                          key={`${experience.company}-${idx}`}
                        >
                          {achievement}
                        </Text>
                      ),
                    )}
                  </Column>
                </Column>
              ))}
            </Column>
          </>
        )}

        {about.certifications?.display && (
          <>
            <Heading as="h2" id={t.certifications.title} variant="display-strong-s" marginBottom="m">
              {t.certifications.title}
            </Heading>
            <Column fillWidth gap="l" marginBottom="40">
              {t.certifications.groups.map((group, index) => (
                <Column key={`${group.title}-${index}`} fillWidth gap="4">
                  <Text id={group.title} variant="heading-strong-l" marginBottom="8">
                    {group.title}
                  </Text>
                  <Column as="ul" gap="12" paddingLeft="24">
                    {group.items.map((item, itemIndex) => (
                      <Text as="li" variant="body-default-m" onBackground="neutral-weak" key={`${group.title}-${itemIndex}`}>
                        {item}
                      </Text>
                    ))}
                  </Column>
                </Column>
              ))}
            </Column>
          </>
        )}

        {about.studies.display && (
          <>
            <Heading as="h2" id={t.studies.title} variant="display-strong-s" marginBottom="m">
              {t.studies.title}
            </Heading>
            <Column fillWidth gap="l" marginBottom="40">
              {about.studies.institutions.map((institution, index) => (
                <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                  <Text id={institution.name} variant="heading-strong-l">
                    {institution.name}
                  </Text>
                  <Text variant="heading-default-xs" onBackground="neutral-weak">
                    {institution.description}
                  </Text>
                </Column>
              ))}
            </Column>
          </>
        )}

        {about.technical.display && (
          <>
            <Heading
              as="h2"
              id={about.technical.title}
              variant="display-strong-s"
              marginBottom="40"
            >
              {about.technical.title}
            </Heading>
            <Column fillWidth gap="l">
              {about.technical.skills.map((skill, index) => (
                <Column key={`${skill}-${index}`} fillWidth gap="4">
                  <Text id={skill.title} variant="heading-strong-l">
                    {skill.title}
                  </Text>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {skill.description}
                  </Text>
                  {skill.tags && skill.tags.length > 0 && (
                    <Row wrap gap="8" paddingTop="8">
                      {skill.tags.map((tag, tagIndex) => (
                        <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                          {tag.name}
                        </Tag>
                      ))}
                    </Row>
                  )}
                  {skill.images && skill.images.length > 0 && (
                    <Row fillWidth paddingTop="m" gap="12" wrap>
                      {skill.images.map((image, idx) => (
                        <Row
                          key={idx}
                          border="neutral-medium"
                          radius="m"
                          minWidth={image.width}
                          height={image.height}
                        >
                          <Media
                            enlarge
                            radius="m"
                            sizes={image.width.toString()}
                            alt={image.alt}
                            src={image.src}
                          />
                        </Row>
                      ))}
                    </Row>
                  )}
                </Column>
              ))}
            </Column>
          </>
        )}
      </Column>
    </Row>
  );
}
