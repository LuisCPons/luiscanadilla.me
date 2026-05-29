import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Luis",
  lastName: "Cañadilla",
  name: "Luis Cañadilla",
  role: "Power Platform & Microsoft Copilot Specialist",
  avatar: "/images/avatar.jpg",
  email: "luiscanadillapons@gmail.com",
  location: "Europe/Madrid", 
  languages: ["Spanish — Native", "Catalan — Bilingual", "English — C2", "Italian — B1"], 
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about AI and operations</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/LuisCPons",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/luiscp1992",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/og-image.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Power Platform & Microsoft Copilot specialist · IE University</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured Work</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Case Study
        </Text>
      </Row>
    ),
    href: "/work/withdrawal-reconciliation",
  },
  subline: (
    <>
      I design and ship Copilot Studio agents and Power Platform automations in production. Currently leading Copilot adoption at IE University across an 800+ case-per-year operations pipeline.
      <br /><br />
      <strong>Open to Microsoft Copilot / Power Platform consultant roles — Madrid, EU remote, or hybrid.</strong>
      <br /><br />
      <a href="https://linkedin.com/in/luiscp1992" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.4rem', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.3)', color: '#38bdf8', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', transition: 'all 0.2s ease' }}>Let's connect on LinkedIn →</a>
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} based in Madrid, Spain`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Operations & Data Specialist at IE University, where I lead internal AI adoption as the department's AI Champion. I've shipped a Copilot Studio agent to production, built Power Automate flows for SLA monitoring and KPI digests, and enabled ~40 advisors on Microsoft Copilot and ChatGPT patterns. Completed a Master in AI & Innovation (Founderz, 2026) and currently finishing IE Executive Education's Generative AI programme (full scholarship).
        <br /><br />
        <strong>Engagement Model:</strong> I work in tight feedback loops — discover real user pain in week 1, ship a working prototype by week 2, measure adoption by week 4. I avoid building tools nobody asked for.
      </>
    ),
  },
  work: {
    display: true, 
    title: "Work Experience",
    experiences: [
      {
        company: "IE University",
        timeframe: "2023 - Present",
        role: "Operations & Data Specialist — Student Services",
        achievements: [
          <>
            <strong>Process Optimization:</strong> Owned a Microsoft Dynamics 365 case pipeline of 800+ annual requests. Built Power Automate cloud flows for SLA-threshold alerts, KPI digests, and recurring tasks, reducing manual follow-up and achieving a ~20% reduction in SLA breach rate.
          </>,
          <>
            <strong>Data & Reporting:</strong> Developed Power BI dashboards (DAX, Power Query) viewed weekly by the leadership team to track operational KPIs, response times, and service quality. Standardized internal documentation and executed data quality checks.
          </>,
          <>
            <strong>AI Adoption:</strong> Acted as Internal AI Champion. Defined and rolled out Microsoft Copilot and ChatGPT adoption patterns (templates, summaries, data QA) and delivered hands-on enablement sessions to ~40 advisors.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "IE University Executive Education",
        description: <>Generative AI: Unlocking Enterprise Value.<br/>In progress 2026 — Full Scholarship Awarded.</>,
      },
      {
        name: "Founderz",
        description: <>Master in AI & Innovation (online, 2026).</>,
      },
      {
        name: "Universidad Complutense de Madrid & Universidad de Alcalá",
        description: <>M.A., North American Studies (2021–2022).</>,
      },
      {
        name: "Universidad Complutense de Madrid",
        description: <>B.A., English Studies (2017–2021).</>,
      },
      {
        name: "Universidad Politécnica de Madrid & Universidad de Castilla-La Mancha",
        description: <>Computer Engineering — coursework in algorithms, data structures, OOP; transitioned to humanities.</>,
      },
    ],
  },
  certifications: {
    display: true,
    title: "Certifications",
    groups: [
      {
        title: "COMPLETED",
        items: [
          <>Generative AI Fundamentals — Universidad de los Andes</>,
          <>IE Staff Self-Leadership Program (Feb–Mar 2026)</>,
        ],
      },
      {
        title: "CURRENTLY PURSUING (2026)",
        items: [
          <>Microsoft Applied Skills — AB-900 (Configure administration for Microsoft 365 Copilot and Copilot agents)</>,
          <>Microsoft Certified — AB-620: AI Agent Builder Associate</>,
          <>Microsoft Certified — AB-410: Intelligent Applications Builder Associate</>,
          <>Generative AI: Unlocking Enterprise Value<br/>IE University Executive Education — Full Scholarship Awarded</>,
        ],
      },
    ],
  },
  technical: {
    display: false, 
    title: "Technical Skills",
    skills: [],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Thoughts on AI and Automation...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Case studies and implementations by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
