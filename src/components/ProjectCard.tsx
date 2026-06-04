"use client";

import { Column, Row, Text, Icon } from "@once-ui-system/core";
import Link from "next/link";

interface ProjectCardProps {
  href: string;
  images: string[];
  title?: string;
  category?: string;
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
  category,
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
          aspect-ratio: 1.75; /* Makes the card shorter (max height ~450px) */
          max-height: 460px;
          border-radius: 20px;
          overflow: hidden;
          background-color: var(--surface);
          border: 1px solid var(--neutral-medium);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          transition: all 0.2s ease-out;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }
        
        .premium-project-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
          border-color: rgba(255, 255, 255, 0.15);
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
          display: block;
        }

        .project-card-content {
          height: 45%;
          padding: 24px 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        /* Mobile specific overrides */
        @media (max-width: 768px) {
          .premium-project-card {
            aspect-ratio: auto;
            max-height: none;
            min-height: 420px;
          }
          .project-card-image-container {
            height: 200px;
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
                alt={category || "Project Thumbnail"}
                className="project-card-image"
              />
            </div>
          )}

          {/* BOTTOM 45%: CONTENT */}
          <div className="project-card-content" style={{ height: images && images.length > 0 ? undefined : '100%' }}>
            <Column>
              {/* 1. Category */}
              {category && (
                <Text style={{ fontSize: '12px', fontWeight: 600, color: '#a3a3a3', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
                  {category}
                </Text>
              )}

              {/* 2. Metric (Highest Priority) */}
              {metric && (
                <Text style={{ fontSize: '28px', fontWeight: 700, color: '#ffffff', lineHeight: '1.1', marginBottom: '16px' }}>
                  {metric}
                </Text>
              )}
              
              {/* 3. Description */}
              {description && (
                <Text style={{ fontSize: '15px', color: '#a3a3a3', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', maxWidth: '90%' }}>
                  {description}
                </Text>
              )}
            </Column>

            {/* 4. Tags & Icon Footer */}
            <Row fillWidth vertical="center" horizontal="between" paddingTop="20">
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
