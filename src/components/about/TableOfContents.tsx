"use client";

import React from "react";
import { Column, Flex, Text } from "@once-ui-system/core";
import styles from "./about.module.scss";
import { useLang } from "@/components/LangContext";
import { translations } from "@/components/about/AboutContent";

interface TableOfContentsProps {
  about: any;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ about }) => {
  const { lang } = useLang();
  const t = translations[lang as keyof typeof translations];

  const structure = [
    {
      title: t.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: t.work.title,
      display: about.work.display,
      items: t.work.experiences.map((experience: any) => experience.company),
    },
    ...(about.certifications?.display
      ? [
          {
            title: t.certifications.title,
            display: about.certifications.display,
            items: t.certifications.groups.map((group: any) => group.title),
          },
        ]
      : []),
    {
      title: t.studies.title,
      display: about.studies.display,
      items: t.studies.institutions.map((institution: any) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill: any) => skill.title),
    },
  ];
  const scrollTo = (id: string, offset: number) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (!about.tableOfContent.display) return null;

  return (
    <Column
      left="0"
      style={{
        top: "50%",
        transform: "translateY(-50%)",
        whiteSpace: "nowrap",
      }}
      position="fixed"
      paddingLeft="24"
      gap="32"
      m={{ hide: true }}
    >
      {structure
        .filter((section) => section.display)
        .map((section, sectionIndex) => (
          <Column key={sectionIndex} gap="12">
            <Flex
              cursor="interactive"
              className={styles.hover}
              gap="8"
              vertical="center"
              onClick={() => scrollTo(section.title, 80)}
            >
              <Flex height="1" minWidth="16" background="neutral-strong"></Flex>
              <Text>{section.title}</Text>
            </Flex>
            {about.tableOfContent.subItems && (
              <>
                {section.items.map((item: string, itemIndex: number) => (
                  <Flex
                    l={{ hide: true }}
                    key={itemIndex}
                    style={{ cursor: "pointer" }}
                    className={styles.hover}
                    gap="12"
                    paddingLeft="24"
                    vertical="center"
                    onClick={() => scrollTo(item, 80)}
                  >
                    <Flex height="1" minWidth="8" background="neutral-strong"></Flex>
                    <Text>{item}</Text>
                  </Flex>
                ))}
              </>
            )}
          </Column>
        ))}
    </Column>
  );
};

export default TableOfContents;
