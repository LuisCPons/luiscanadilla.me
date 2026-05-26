import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Luis",
  lastName: "Cañadilla",
  name: "Luis Cañadilla",
  role: "Power Platform & Microsoft Copilot Specialist",
  avatar: "/images/avatar.jpg",
  email: "luiscanadillapons@gmail.com", // Adjust later if needed
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
  image: "/images/og/home.jpg",
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
    href: "/work/ie-onboarding",
  },
  subline: (
    <>
      I design and ship Copilot Studio agents and Power Platform automations in production. Currently leading Copilot adoption at IE University across an 800+ case-per-year operations pipeline.
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
        I started working at IE University in 2023 as an Immigration and Relocation Specialist for foreign students, but have since shifted toward more AI-oriented roles within my department. Today, as an Operations & Data Specialist, I own a Dynamics 365 case pipeline of 800+ requests per year and lead the team's internal AI adoption as IE's AI Champion. In this capacity, I've shipped a Copilot Studio agent to production and built Power Automate flows that handle SLA monitoring, KPI digests, and recurring coordination work.
        <br /><br />
        Alongside the day job, I've been deliberately specialising in Microsoft AI — completing a Master in AI & Innovation at Founderz, earning a full scholarship to IE Executive Education's Generative AI: Unlocking Enterprise Value programme, and tracking Microsoft's Copilot and Power Platform certifications (AB-900, PL-900, PL-200).
        <br /><br />
        My focus going forward is Microsoft Copilot and Power Platform consulting — helping organisations adopt these tools the way IE did: responsibly, with real users, and with measurable outcomes.
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
            <strong>Process Optimization:</strong> Owned a Microsoft Dynamics 365 case pipeline of 800+ annual requests. Built Power Automate cloud flows for SLA-threshold alerts, KPI digests, and recurring tasks, reducing manual follow-up and strengthening process control.
          </>,
          <>
            <strong>Data & Reporting:</strong> Developed Power BI dashboards (DAX, Power Query) to track operational KPIs, response times, and service quality, providing leadership with real-time visibility. Standardized internal documentation and executed data quality checks.
          </>,
          <>
            <strong>AI Adoption:</strong> Acted as Internal AI Champion. Defined and rolled out Microsoft Copilot and ChatGPT adoption patterns (templates, summaries, data QA) and delivered hands-on enablement sessions to the team.
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
        name: "Founderz",
        description: <>Master in AI & Innovation (online, 2026).</>,
      },
      {
        name: "IE University Executive Education",
        description: <>Generative AI: Unlocking Enterprise Value.<br/>In progress 2026 — Full Scholarship Awarded.</>,
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
        description: <>Computer Engineering (~70% completed).</>,
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
          <>Intro to Data Analytics for Business — University of Colorado Boulder</>,
          <>Data Visualization in Excel — Macquarie University</>,
          <>Programming for Everybody (Python) — University of Michigan</>,
          <>Python Data Structures — University of Michigan</>,
          <>IE Staff Self-Leadership Program (Feb–Mar 2026)</>,
        ],
      },
      {
        title: "IN PROGRESS (2026)",
        items: [
          <>Microsoft Applied Skills — AB-900 (Configure administration for Microsoft 365 Copilot and Copilot agents)</>,
          <>Generative AI: Unlocking Enterprise Value<br/>IE University Executive Education — Full Scholarship Awarded</>,
        ],
      },
      {
        title: "PLANNED (2026)",
        items: [
          <>Microsoft Power Platform Fundamentals (PL-900)</>,
          <>Microsoft Power Platform Functional Consultant Associate (PL-200)</>,
        ],
      },
    ],
  },
  technical: {
    display: true, 
    title: "Technical Skills",
    skills: [
      {
        title: "Microsoft Copilot & AI",
        description: (
          <>Copilot for Microsoft 365, Copilot Studio, AI Builder, prompt engineering, Responsible AI principles, AI governance</>
        ),
      },
      {
        title: "Microsoft Power Platform",
        description: (
          <>Power Automate (cloud flows, approvals, scheduled flows), Power BI (DAX, Power Query / M), Power Apps, Dataverse</>
        ),
      },
      {
        title: "Microsoft Dynamics 365",
        description: (
          <>Case pipeline configuration, stage and ownership management, reporting, user enablement</>
        ),
      },
      {
        title: "Data & Analytics",
        description: (
          <>Excel (modeling, pivots, advanced formulas), KPI dashboarding, data validation, reporting automation</>
        ),
      },
      {
        title: "Programming & Tooling",
        description: (
          <>Python, SQL, Microsoft 365 (Teams, SharePoint, Outlook)</>
        ),
      },
      {
        title: "Methodologies",
        description: (
          <>Requirements gathering, stakeholder management, business process improvement, change management</>
        ),
      },
    ],
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
