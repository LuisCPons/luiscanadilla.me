const fs = require('fs');
const path = require('path');

const generatePaddockPlanBlueprint = () => {
  return `<svg width="1200" height="500" viewBox="0 0 1200 500" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#0a0a0a" />
    
    <!-- Grid -->
    <defs>
      <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#222222" stroke-width="0.5"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />

    <!-- Dashboard Wireframe -->
    <g transform="translate(100, 50)" stroke="#666666" stroke-width="1.5" fill="none">
      <!-- Main Window -->
      <rect x="0" y="0" width="1000" height="400" rx="8" />
      
      <!-- Sidebar -->
      <line x1="250" y1="0" x2="250" y2="400" />
      <rect x="20" y="20" width="210" height="30" rx="4" stroke-dasharray="4 4" />
      <rect x="20" y="70" width="150" height="15" rx="2" />
      <rect x="20" y="100" width="180" height="15" rx="2" />
      <rect x="20" y="130" width="140" height="15" rx="2" />
      <rect x="20" y="160" width="160" height="15" rx="2" />
      
      <!-- Header Area -->
      <line x1="250" y1="80" x2="1000" y2="80" />
      <rect x="280" y="25" width="300" height="30" rx="4" />
      <circle cx="950" cy="40" r="15" />
      
      <!-- Abstract F1 Circuit Line Art -->
      <g transform="translate(450, 150)">
        <path d="M 0 50 C 50 10, 150 10, 200 60 C 250 110, 300 80, 350 40 C 400 0, 450 50, 400 100 C 350 150, 300 200, 200 200 C 100 200, -50 100, 0 50 Z" stroke="#e11d48" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        <!-- Data Nodes -->
        <circle cx="0" cy="50" r="6" fill="#0a0a0a" stroke="#e11d48" stroke-width="2"/>
        <circle cx="200" cy="60" r="4" fill="#0a0a0a" stroke="#e11d48" stroke-width="2"/>
        <circle cx="350" cy="40" r="5" fill="#0a0a0a" stroke="#e11d48" stroke-width="2"/>
        <circle cx="200" cy="200" r="6" fill="#0a0a0a" stroke="#e11d48" stroke-width="2"/>
        
        <!-- Telemetry UI elements floating -->
        <rect x="50" y="-20" width="80" height="25" rx="4" stroke="#e11d48" stroke-width="1.5" stroke-dasharray="2 2" />
        <line x1="90" y1="5" x2="90" y2="30" stroke="#e11d48" stroke-width="1" stroke-dasharray="2 2" />
        
        <rect x="280" y="150" width="100" height="25" rx="4" stroke="#e11d48" stroke-width="1.5" stroke-dasharray="2 2" />
        <line x1="330" y1="130" x2="330" y2="150" stroke="#e11d48" stroke-width="1" stroke-dasharray="2 2" />
      </g>
      
      <!-- Bottom UI Pane -->
      <rect x="280" y="320" width="690" height="60" rx="4" />
      <rect x="300" y="340" width="100" height="20" rx="2" stroke-dasharray="3 3"/>
      <rect x="420" y="340" width="100" height="20" rx="2" stroke-dasharray="3 3"/>
      <rect x="540" y="340" width="100" height="20" rx="2" stroke-dasharray="3 3"/>
    </g>
  </svg>`;
};

const generateOnboardingBlueprint = () => {
  return `<svg width="1200" height="500" viewBox="0 0 1200 500" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#0a0a0a" />
    
    <!-- Grid -->
    <defs>
      <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#222222" stroke-width="0.5"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />

    <!-- Dashboard Wireframe -->
    <g transform="translate(150, 50)" stroke="#666666" stroke-width="1.5" fill="none">
      <!-- Main Window -->
      <rect x="0" y="0" width="900" height="400" rx="12" />
      
      <!-- Top Nav -->
      <line x1="0" y1="60" x2="900" y2="60" />
      <rect x="30" y="20" width="120" height="20" rx="4" />
      <circle cx="850" cy="30" r="15" />
      <rect x="750" y="22" width="70" height="15" rx="7.5" />
      
      <!-- Welcome Hero Area -->
      <rect x="40" y="100" width="500" height="80" rx="8" />
      <rect x="60" y="120" width="300" height="20" rx="4" stroke="#3b82f6" stroke-width="2" />
      <rect x="60" y="150" width="400" height="10" rx="2" stroke-dasharray="4 4" />
      
      <!-- Progress Ring (Gamification) -->
      <g transform="translate(720, 140)">
        <circle cx="0" cy="0" r="50" stroke="#333333" stroke-width="8" />
        <circle cx="0" cy="0" r="50" stroke="#3b82f6" stroke-width="8" stroke-dasharray="314" stroke-dashoffset="100" stroke-linecap="round" />
        <text x="0" y="10" fill="#3b82f6" font-family="sans-serif" font-size="24" font-weight="bold" text-anchor="middle" stroke="none">68%</text>
      </g>
      
      <!-- Gamified Checklists / Tasks -->
      <!-- Card 1 -->
      <rect x="40" y="220" width="250" height="140" rx="8" />
      <circle cx="70" cy="250" r="12" stroke="#3b82f6" stroke-width="2" />
      <path d="M 65 250 L 69 254 L 75 246" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <rect x="95" y="245" width="120" height="10" rx="2" />
      <rect x="70" y="280" width="180" height="6" rx="2" stroke-dasharray="2 2" />
      <rect x="70" y="300" width="150" height="6" rx="2" stroke-dasharray="2 2" />
      <rect x="70" y="330" width="80" height="15" rx="4" stroke="#3b82f6" />
      
      <!-- Card 2 -->
      <rect x="320" y="220" width="250" height="140" rx="8" />
      <circle cx="350" cy="250" r="12" />
      <rect x="375" y="245" width="120" height="10" rx="2" />
      <rect x="350" y="280" width="180" height="6" rx="2" stroke-dasharray="2 2" />
      <rect x="350" y="300" width="150" height="6" rx="2" stroke-dasharray="2 2" />
      <rect x="350" y="330" width="80" height="15" rx="4" />
      
      <!-- Card 3 -->
      <rect x="600" y="220" width="250" height="140" rx="8" />
      <circle cx="630" cy="250" r="12" />
      <rect x="655" y="245" width="120" height="10" rx="2" />
      <rect x="630" y="280" width="180" height="6" rx="2" stroke-dasharray="2 2" />
      <rect x="630" y="300" width="150" height="6" rx="2" stroke-dasharray="2 2" />
      <rect x="630" y="330" width="80" height="15" rx="4" />
    </g>
  </svg>`;
};

fs.writeFileSync(path.join('public', 'images', 'projects', 'project-01', 'paddockplan-banner.svg'), generatePaddockPlanBlueprint());
fs.writeFileSync(path.join('public', 'images', 'projects', 'project-01', 'onboarding-banner.svg'), generateOnboardingBlueprint());
