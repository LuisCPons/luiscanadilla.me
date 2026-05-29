import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
  Flex,
  SmartLink,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import { HeroSection } from "@/components/HeroSection";
import { ImpactStrip } from "@/components/ImpactStrip";
import { ViewAllProjectsLink } from "@/components/ViewAllProjectsLink";

import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Luis Cañadilla — Power Platform & Microsoft Copilot Specialist",
    description:
      "AI solutions implemented — architecture diagrams, business impact metrics, and technical deep dives.",
    openGraph: {
      title: "Luis Cañadilla — Power Platform & Microsoft Copilot Specialist",
      description:
        "AI solutions implemented — architecture diagrams, business impact metrics, and technical deep dives.",
      url: "https://luiscanadilla.me",
      type: "website",
      images: [
        {
          url: "https://luiscanadilla.me/og-image.png",
          width: 1736,
          height: 906,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: ["https://luiscanadilla.me/og-image.png"],
    },
  };
}

export default function Home() {
  return (
    <Column maxWidth="l" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m">
        <HeroSection />
      </Column>

      {/* Impact Numbers Strip */}
      <ImpactStrip />

      {/* Top 2 Project Cards */}
      <Projects range={[1, 2]} />

      {/* View all projects link */}
      <ViewAllProjectsLink />

      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest from the blog
              </Heading>
            </Row>
            <Row flex={3} paddingX="20">
              <Posts range={[1, 2]} columns="2" />
            </Row>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}
    </Column>
  );
}
