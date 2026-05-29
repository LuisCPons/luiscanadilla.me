"use client";

import { Column, Heading } from "@once-ui-system/core";
import { useLang } from "@/components/LangContext";

const titles = {
  en: "Projects – Luis Cañadilla",
  es: "Proyectos – Luis Cañadilla",
};

export function WorkPageTitle() {
  const { lang } = useLang();
  return (
    <Heading marginBottom="l" variant="heading-strong-xl" align="center">
      {titles[lang]}
    </Heading>
  );
}
