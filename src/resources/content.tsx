import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Luis",
  lastName: "Cañadilla",
  name: "Luis Cañadilla",
  role: "AI & Power Platform Specialist",
  avatar: "/images/avatar.jpg",
  email: "example@gmail.com", // Adjust later if needed
  location: "Europe/Madrid", 
  languages: ["English", "Spanish"], 
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
    link: "https://www.linkedin.com/in/luiscanadilla/",
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
  description: `Portfolio website showcasing my work as an ${person.role}`,
  headline: <>Scaling processes with Microsoft AI & Automation</>,
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
    href: "/work/paddockplan",
  },
  subline: (
    <>
      Operations and Power Platform professional driving responsible adoption of <Text as="span" size="xl" weight="strong">Microsoft Copilot</Text> and generative AI. Designing, automating, and scaling workflows.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
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
        I am an Operations and Microsoft Power Platform professional with hands-on experience designing, automating, and scaling business processes using Power BI, Power Automate, and Microsoft Dynamics 365. 
        <br /><br />
        As the Internal AI Champion at IE University, I drive the responsible adoption of Microsoft Copilot and generative AI for productivity, content generation, and data quality. I am currently transitioning toward a Power Platform and Copilot Studio consulting role, actively pursuing my Microsoft certification track.
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
    title: "Studies",
    institutions: [
      {
        name: "Founderz",
        description: <>Master in AI & Innovation. Specialized in modern AI ecosystems, Copilot, and intelligent automation.</>,
      },
      {
        name: "IE University",
        description: <>Operations & Service Management.</>,
      },
    ],
  },
  technical: {
    display: true, 
    title: "Technical skills",
    skills: [
      {
        title: "Microsoft Power Platform",
        description: (
          <>Building automated cloud flows, business intelligence dashboards, and intelligent agents.</>
        ),
        tags: [
          { name: "Power Automate", icon: "dev" },
          { name: "Power BI", icon: "dev" },
          { name: "Dynamics 365", icon: "dev" },
        ],
        images: [],
      },
      {
        title: "Generative AI & Prompt Engineering",
        description: (
          <>Driving responsible adoption of LLMs for enterprise productivity.</>
        ),
        tags: [
          { name: "Microsoft Copilot", icon: "dev" },
          { name: "Copilot Studio", icon: "dev" },
          { name: "ChatGPT", icon: "dev" },
        ],
        images: [],
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
