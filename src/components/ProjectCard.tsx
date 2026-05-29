"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import { useLang } from "./LangContext";

const labels = {
  en: { readCase: "Read case study", liveDemo: "Live demo" },
  es: { readCase: "Leer caso de estudio", liveDemo: "Demo en vivo" },
};

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  tags?: string[];
  metric?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
  tags = [],
  metric,
}) => {
  const { lang } = useLang();
  const t = labels[lang];
  return (
    <Column fillWidth gap="m">
      {images && images.length > 0 && (
        <>
          <style>{`
            .project-screenshot {
              height: 360px;
              width: 100%;
              position: relative;
            }
            @media (max-width: 640px) {
              .project-screenshot {
                height: 220px;
              }
            }
            @media (min-width: 641px) and (max-width: 1024px) {
              .project-screenshot {
                height: 280px;
              }
            }
          `}</style>
          <div style={{
            borderRadius: '12px',
            overflow: 'hidden',
            width: '100%',
            backgroundColor: '#0a0a0a',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
          }}>
            {/* macOS Browser Header */}
            <div style={{
              height: '32px',
              backgroundColor: '#1c1c1e',
              display: 'flex',
              alignItems: 'center',
              padding: '0 16px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              gap: '8px',
            }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
            </div>
            
            {/* Browser Content (Screenshot) */}
            <div className="project-screenshot">
              <img
                src={images[0]}
                alt={title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </>
      )}
      <Column
        fillWidth
        paddingX="24"
        paddingY="24"
        gap="l"
        background="surface"
        border="neutral-medium"
        radius="l"
        style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
      >
        <Flex s={{ direction: "column" }} fillWidth gap="l">
          {title && (
            <Column flex={5} gap="16">
              <Heading as="h2" wrap="balance" variant="heading-strong-l">
                {title}
              </Heading>
              {tags && tags.length > 0 && (
                <Flex gap="8" wrap>
                  {tags.map((tag) => (
                    <div key={tag} style={{
                      padding: '3px 10px',
                      borderRadius: '100px',
                      backgroundColor: 'rgba(128, 128, 128, 0.1)',
                      border: '1px solid rgba(128, 128, 128, 0.2)',
                      fontSize: '0.7rem',
                      fontWeight: 400,
                      color: 'rgba(128, 128, 128, 0.9)',
                      lineHeight: '1.5',
                    }}>
                      {tag}
                    </div>
                  ))}
                </Flex>
              )}
            </Column>
          )}
          {(description?.trim() || content?.trim() || metric) && (
            <Column flex={7} gap="16">
              {metric && (
                <Text variant="body-strong-m" onBackground="brand-strong">
                  {metric}
                </Text>
              )}
              {description?.trim() && (
                <Text wrap="balance" variant="body-default-m" onBackground="neutral-weak">
                  {description}
                </Text>
              )}
              <Flex gap="24" wrap>
                {content?.trim() && (
                  <SmartLink
                    suffixIcon="arrowRight"
                    style={{ margin: "0", width: "fit-content" }}
                    href={href}
                  >
                    <Text variant="body-default-s">{t.readCase}</Text>
                  </SmartLink>
                )}
                {link && (
                  <SmartLink
                    suffixIcon="arrowUpRightFromSquare"
                    style={{ margin: "0", width: "fit-content" }}
                    href={link}
                  >
                    <Text variant="body-default-s">{t.liveDemo}</Text>
                  </SmartLink>
                )}
              </Flex>
            </Column>
          )}
        </Flex>
      </Column>
    </Column>
  );
};
