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
  return (
    <Column fillWidth gap="m">
      {images && images.length > 0 && (
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
          <div style={{ height: '360px', width: '100%', position: 'relative' }}>
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
      )}
      <Column
        fillWidth
        padding="32"
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
                  {tags.map((tag) => {
                    const colorMap: Record<string, { bg: string; border: string }> = {
                      'Copilot Cowork':    { bg: '#7B5EA7', border: '#6A4F91' },
                      'Copilot Studio':    { bg: '#0E8A7E', border: '#0A7068' },
                      'Dynamics 365':      { bg: '#002050', border: '#001840' },
                      'Outlook':           { bg: '#0078D4', border: '#006ABF' },
                      'Excel':             { bg: '#217346', border: '#1A5C38' },
                      'AI Builder':        { bg: '#CA5010', border: '#B0460D' },
                      'Power Automate':    { bg: '#0066FF', border: '#0055D4' },
                      'SharePoint':        { bg: '#038387', border: '#026E72' },
                      'HTML/CSS/JS':       { bg: '#E44D26', border: '#CC3F1C' },
                      'Prompt Engineering': { bg: '#9B4F96', border: '#854283' },
                      'Next.js':           { bg: '#333333', border: '#262626' },
                      'OpenAI API':        { bg: '#10A37F', border: '#0D8A6B' },
                      'React':             { bg: '#0D99FF', border: '#0A82DB' },
                      'Vercel Edge':       { bg: '#1A1A1A', border: '#111111' },
                    };
                    const colors = colorMap[tag] || { bg: '#555555', border: '#444444' };
                    return (
                      <div key={tag} style={{
                        padding: '4px 12px',
                        borderRadius: '100px',
                        backgroundColor: colors.bg,
                        border: `1.5px solid ${colors.border}`,
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        lineHeight: '1.4',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                      }}>
                        {tag}
                      </div>
                    );
                  })}
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
                    <Text variant="body-default-s">Read case study</Text>
                  </SmartLink>
                )}
                {link && (
                  <SmartLink
                    suffixIcon="arrowUpRightFromSquare"
                    style={{ margin: "0", width: "fit-content" }}
                    href={link}
                  >
                    <Text variant="body-default-s">Live demo</Text>
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
