const fs = require('fs');
const path = require('path');

const generateSVG = (title, techStack) => {
  const badges = techStack.map((tech, i) => {
    const x = 120 + i * 200; // rough spacing
    return `
      <g transform="translate(${x}, 320)">
        <rect x="0" y="0" width="160" height="40" rx="20" fill="#111" stroke="#333" stroke-width="1" />
        <text x="80" y="25" fill="#aaa" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="500" text-anchor="middle">${tech}</text>
      </g>
    `;
  }).join('');

  // Center badges dynamically
  const totalBadgeWidth = techStack.length * 180 - 20; // 160 width + 20 gap
  const startX = (1200 - totalBadgeWidth) / 2;

  const centeredBadges = techStack.map((tech, i) => {
    const x = startX + i * 180;
    return `
      <g transform="translate(${x}, 320)">
        <rect x="0" y="0" width="160" height="40" rx="20" fill="#ffffff" fill-opacity="0.05" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1" />
        <text x="80" y="26" fill="#a1a1aa" font-family="Inter, system-ui, sans-serif" font-size="16" font-weight="500" text-anchor="middle" letter-spacing="0.5">${tech}</text>
      </g>
    `;
  }).join('');

  return `<svg width="1200" height="500" viewBox="0 0 1200 500" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glow" cx="50%" cy="0%" r="70%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.1" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0" />
      </radialGradient>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" stroke-opacity="0.04" stroke-width="1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="#09090b" />
    <rect width="100%" height="100%" fill="url(#grid)" />
    <rect width="100%" height="100%" fill="url(#glow)" />
    
    <text x="600" y="260" fill="#ffffff" font-family="Inter, system-ui, sans-serif" font-size="64" font-weight="700" letter-spacing="-1" text-anchor="middle">${title}</text>
    
    ${centeredBadges}
  </svg>`;
};

const paddockPlanSVG = generateSVG('PaddockPlan', ['Next.js 16', 'React 19', 'Framer Motion']);
const onboardingSVG = generateSVG('Gamified Onboarding', ['Copilot', 'Dynamics 365', 'HTML/JS']);

fs.writeFileSync(path.join('public', 'images', 'projects', 'project-01', 'paddockplan-banner.svg'), paddockPlanSVG);
fs.writeFileSync(path.join('public', 'images', 'projects', 'project-01', 'onboarding-banner.svg'), onboardingSVG);
