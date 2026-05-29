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

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

const impactMetrics = [
  { number: "834", label: "visa document sets automated in one intake" },
  { number: "~90%", label: "reduction in weekly reconciliation time" },
  { number: "6", label: "team members using production agents daily" },
  { number: "~60%", label: "faster document generation per visa set" },
];

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
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '2rem',
        width: '100%',
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 1rem',
      }}>
        {impactMetrics.map((m) => (
          <div key={m.label} style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '2rem',
              fontWeight: 800,
              color: '#38bdf8',
              lineHeight: 1.2,
            }}>
              {m.number}
            </div>
            <div style={{
              fontSize: '0.8rem',
              color: 'rgba(128, 128, 128, 0.85)',
              marginTop: '0.35rem',
              lineHeight: 1.4,
            }}>
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/* Top 2 Project Cards */}
      <Projects range={[1, 2]} />

      {/* View all projects link */}
      <Flex fillWidth horizontal="center" paddingY="8">
        <SmartLink
          suffixIcon="arrowRight"
          style={{ margin: "0", width: "fit-content" }}
          href="/work"
        >
          <Text variant="body-default-s">View all projects</Text>
        </SmartLink>
      </Flex>

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
