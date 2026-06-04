"use client";

import { Column, Row, Heading, Text, Icon } from "@once-ui-system/core";
import Link from "next/link";

interface ProjectCardProps {
  href: string;
  images: string[];
  title: string;
  description: string;
  tags?: string[];
  metric?: string;
  priority?: boolean;
  content?: string;
  avatars?: { src: string }[];
  link?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  description,
  tags = [],
  metric,
}) => {
  return (
    <>
      <style>{`
        .premium-project-card {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          aspect-ratio: 1.6;
          border-radius: 20px;
          overflow: hidden;
          background-color: var(--surface);
          border: 1px solid var(--neutral-medium);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }
        
        .premium-project-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .premium-project-card:hover .project-card-image {
          transform: scale(1.08);
        }

        .project-card-image-container {
          height: 55%;
          width: 100%;
          overflow: hidden;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .project-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          transform: scale(1.03);
          transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
          display: block;
        }

        .project-card-content {
          height: 45%;
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        /* Mobile specific overrides */
        @media (max-width: 768px) {
          .premium-project-card {
            aspect-ratio: auto;
            min-height: 480px;
          }
          .project-card-image-container {
            height: 220px;
            flex-shrink: 0;
          }
          .project-card-content {
            height: auto;
            flex-grow: 1;
            padding: 24px;
          }
        }
      `}</style>
      
      <Link href={href} style={{ textDecoration: 'none', width: '100%' }}>
        <div className="premium-project-card">
          {/* TOP 55%: MEDIA */}
          {images && images.length > 0 && (
            <div className="project-card-image-container">
              <img
                src={images[0]}
                alt={title}
                className="project-card-image"
              />
            </div>
          )}

          {/* BOTTOM 45%: CONTENT */}
          <div className="project-card-content" style={{ height: images && images.length > 0 ? undefined : '100%' }}>
            <Column gap="xs">
              {/* 1. Metric (Highest Priority) */}
              {metric && (
                <Text style={{ fontSize: '32px', fontWeight: 700, color: '#38bdf8', lineHeight: '1.2' }}>
                  {metric}
                </Text>
              )}
              
              {/* 2. Title */}
              <Heading as="h3" style={{ fontSize: '24px', fontWeight: 600, color: '#ffffff', lineHeight: '1.3', marginTop: metric ? '4px' : '0' }}>
                {title}
              </Heading>
              
              {/* 3. Description */}
              {description && (
                <Text style={{ fontSize: '16px', color: '#a3a3a3', marginTop: '8px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {description}
                </Text>
              )}
            </Column>

            {/* 4. Tags & Icon Footer */}
            <Row fillWidth vertical="center" horizontal="between" paddingTop="16">
              <Row gap="8" wrap>
                {tags.slice(0, 4).map((tag) => (
                  <div key={tag} style={{
                    padding: '4px 12px',
                    borderRadius: '100px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    fontSize: '13px',
                    color: '#d4d4d4',
                  }}>
                    {tag}
                  </div>
                ))}
              </Row>
              
              <Icon name="arrowRight" size="m" style={{ color: '#a3a3a3' }} />
            </Row>
          </div>
        </div>
      </Link>
    </>
  );
};
