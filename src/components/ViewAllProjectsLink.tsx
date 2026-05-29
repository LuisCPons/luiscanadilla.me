"use client";

import { Flex, SmartLink, Text } from "@once-ui-system/core";
import { useLang } from "./LangContext";

const labels = {
  en: "View all projects",
  es: "Ver todos los proyectos",
};

export function ViewAllProjectsLink() {
  const { lang } = useLang();

  return (
    <Flex fillWidth horizontal="center" paddingY="8">
      <SmartLink
        suffixIcon="arrowRight"
        style={{ margin: "0", width: "fit-content" }}
        href="/work"
      >
        <Text variant="body-default-s">{labels[lang]}</Text>
      </SmartLink>
    </Flex>
  );
}
