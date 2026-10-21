import propertyImage from '@/assets/propertyscan-workspace.png.asset.json';
import propertyScreen from '@/assets/propertyscan-dashboard.png.asset.json';
import crescendImage from '@/assets/crescend-phones.png.asset.json';
import bloomsImage from '@/assets/eternal-blooms-tablet.png.asset.json';
import bloomsScreen from '@/assets/eternal-blooms-dashboard.png.asset.json';
import headshot from '@/assets/lea-headshot.jpg.asset.json';
import notionHackathon from '@/assets/notion-hackathon.png.asset.json';
import notionWorkshop from '@/assets/notion-workshop.png.asset.json';
import aiwomenHackathon from '@/assets/aiwomen-hackathon.png.asset.json';
import pressureCookerTeam from '@/assets/pressure-cooker-team.png.asset.json';
import pressureCookerCrowd from '@/assets/pressure-cooker-crowd.png.asset.json';
import dublinAiWeek from '@/assets/dublin-ai-week.png.asset.json';

// Absolute asset origin keeps uploaded media available on GitHub Pages too.
export const assetUrl = (asset: { url: string }) => `https://id-preview--f1d34c87-7893-4453-8c52-da3e4693d0a0.lovable.app${asset.url}`;

export const headshotUrl = assetUrl(headshot);

export type FeaturedProject = {
  slug: string; name: string; category: string; summary: string; description: string;
  image: string; screenshot?: string; screenshotCaption?: string;
  tags: string[]; role?: string; context?: string; status?: string;
  achievement?: string; traction?: string; live?: string;
  approach: string; features: string[]; decisions?: string[]; future?: string;
};

// Repositories are private by choice: these are product case studies, not public code.
export const featuredProjects: FeaturedProject[] = [
  {
    slug: 'propertyscan', name: 'PropertyScan', category: 'ARTIFICIAL INTELLIGENCE · BACKEND ENGINEERING · CLOUD',
    summary: 'Turning a stack of property documents into a clearer picture.',
    description: 'An AI-powered property due diligence tool that helps homebuyers navigate complex property documents. PropertyScan combines intelligent document extraction, evidence validation and deterministic rule checking to identify inconsistencies, potential financial risks and missing information. Developed at AI.WOMEN Hackathon 2026, where I contributed the backend and AI pipeline.',
    image: assetUrl(propertyImage), screenshot: assetUrl(propertyScreen), screenshotCaption: 'The original interface.',
    tags: ['Python', 'FastAPI', 'Pydantic', 'React', 'TypeScript', 'Anymize AI', 'Google Cloud Run'],
    role: 'Backend Development & AI, as part of a collaborative team',
    context: 'Developed at the AI.WOMEN Hackathon 2026 with a team of five. The live hackathon MVP is a request-processing pipeline: documents are analysed on upload, with no separate persistent document database.',
    status: 'Hackathon MVP',
    achievement: '2nd place · Best Use of Google Cloud, AI.WOMEN Hackathon 2026',
    live: 'https://propertyscan.lovable.app/',
    approach: 'AI extracts the facts; a deterministic rule engine cross-examines them across documents. Uploaded PDFs pass through Anymize OCR and anonymisation, AI-assisted structured fact extraction, evidence and provenance validation, and canonical fact normalisation, before deterministic cross-document rules flag financial risks, inconsistencies and missing evidence. Buyers see what is confirmed, what conflicts and what still needs answers, with every finding traceable back to its source passage.',
    features: [
      'Multi-document PDF analysis treated as one property package',
      'AI-assisted structured extraction with OCR and anonymisation',
      'Evidence provenance: every finding traces back to its source document and passage',
      'Canonical fact normalisation keeps distinctions like living area vs tax area explicit',
      'Deterministic cross-document rule engine, separate from the AI extraction',
      'Financial risk and missing-evidence findings with buyer-facing next steps',
      'Privacy-conscious processing: documents anonymised before AI extraction, secrets in Google Cloud Secret Manager',
      'Resilient pipeline: one difficult file never discards the rest of the assessment',
    ],
    decisions: [
      'AI never makes the final due-diligence call: extraction is AI-assisted, evaluation is deterministic, so the system stays testable and explainable.',
      'Unknown stays unknown. Missing evidence is reported as missing rather than silently inferred, and conflicting values stay visible side by side.',
      '195/195 automated backend tests passed on the latest verified release candidate.',
    ],
    future: 'The MVP covers the core pipeline end to end. Vertex AI and Gemini integration was explored during development, and richer integrations remain future possibilities rather than shipped features.',
  },
  {
    slug: 'crescend', name: 'Crescend', category: 'MUSIC TECHNOLOGY · PRODUCT DEVELOPMENT · SOCIAL DISCOVERY',
    summary: 'A shared song. A crossed path. A new connection.',
    description: 'Crescend is a music-driven social discovery app that brings people together through shared listening habits. From Spotify-connected experiences and music compatibility to privacy-conscious proximity matching, Crescend explores how music can create meaningful social connections.',
    image: assetUrl(crescendImage), screenshot: undefined,
    tags: ['Social product design', 'Spotify integration', 'Supabase', 'Authentication'],
    role: 'UX/UI design, interactive prototyping and collaborative product development',
    context: 'Developed as part of the Pressure Cooker 2026 experience in Dublin. Some screens are conceptual product designs rather than shipped features.',
    status: 'In development',
    traction: '108 waitlist sign-ups on the landing page',
    approach: 'Music compatibility, shared listening moments and Crossing Paths, a privacy-conscious proximity-based connection experience, are the core product concepts. Supabase powers the authenticated connection testing evidenced in our screenshots, and Spotify account connection is part of the product experience.',
    features: [
      'Spotify-connected onboarding',
      'Music-based social discovery and compatibility',
      'Crossing Paths: proximity-based connection with privacy-oriented location settings',
      'Shared listening moments',
      'User profiles and connections',
      'Authenticated backend connection testing with Supabase',
    ],
    future: 'Crescend is actively in development. The landing page is live and gathering waitlist sign-ups while the product experience grows beyond the prototype.',
  },
  {
    slug: 'eternal-blooms', name: 'Florist Studio', category: 'FULL-STACK DEVELOPMENT · PWA · BUSINESS TECHNOLOGY',
    summary: 'A little more calm behind the beautiful blooms.',
    description: 'Florist Studio is an installable business management application designed for independent florists. It brings everyday operations, from pricing bouquets and managing orders to tracking inventory, customers, events and finances, into one thoughtfully designed workspace. The project is connected to Eternal Blooms and inspired by real floristry business workflows.',
    image: assetUrl(bloomsImage), screenshot: assetUrl(bloomsScreen), screenshotCaption: 'The original dashboard interface.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'PWA', 'Service Workers', 'Supabase', 'Local Storage'],
    role: undefined,
    context: 'Built around real floristry workflows, combining practical business operations with thoughtful interface design and cloud-connected functionality.',
    status: undefined,
    approach: 'The workspace covers the florist dashboard, a pricing studio, inventory, event planning, invoicing and loyalty features, so everyday business operations live in one place. A SQL-backed Supabase database provides authentication, cloud storage, backups and cross-device synchronisation, while service workers make the app installable on any device.',
    features: [
      'Personalised business dashboard with sales overview and weekly insights',
      'Wedding and event planning, from enquiry to completion',
      'Pricing studio: stem costing, labour, margins, delivery and packaging',
      'Customers and order management with history and notes',
      'Bloom Club loyalty experience, Apple and Google Wallet ready',
      'Inventory and supplier management with low-stock alerts',
      'Calendar, bookings, expenses, invoices and analytics',
      'Cloud sync, privacy centre and install-anywhere PWA support',
    ],
  },
];

export const skillGroups = [
  { label: 'Programming', skills: ['Python', 'JavaScript', 'SQL', 'R', 'C++'] },
  { label: 'Data & Analytics', skills: ['Pandas', 'NumPy', 'Data Manipulation', 'Data Visualisation', 'Tableau', 'Excel'] },
  { label: 'Software Engineering', skills: ['Object-Oriented Programming', 'Algorithms', 'Data Structures', 'Database Development', 'REST APIs', 'FastAPI'] },
  { label: 'Cloud & Databases', skills: ['Google Cloud', 'Supabase', 'Vertex AI / Gemini'] },
  { label: 'Tools', skills: ['Git', 'GitHub', 'VS Code', 'Google Analytics', 'Google Search Console', 'Figma'] },
];

export const skills = skillGroups.flatMap(group => group.skills);

export const experience = [
  {
    organisation: 'Trace', role: 'Growth & Product Operations', period: 'July 2026 – October 2026', location: 'Dublin, Ireland', kind: 'past' as const,
    points: [
      'Analysed website search performance using Google Search Console, identifying SEO, indexing and organic growth opportunities.',
      'Supported user acquisition, digital marketing and community engagement initiatives to increase product awareness.',
      'Reviewed app engagement and user journeys to inform discussions on onboarding, retention and product improvements.',
      'Assisted with Android app release preparation, technical troubleshooting and GitHub-based development workflows.',
    ],
  },
  {
    organisation: 'Infobip (Anam Technologies)', role: 'Marketing & Web Intern', period: 'July 2022 – June 2023', location: 'Dublin, Ireland', kind: 'past' as const,
    points: [
      'Managed and optimised company website content using WordPress and supported website migration projects.',
      'Designed and built web pages for marketing campaigns and digital initiatives.',
      'Collaborated with design, product and engineering teams across international markets.',
      'Used SEO, keyword research and web analytics to identify performance trends and support digital strategy.',
    ],
  },
];

export const upcoming = {
  organisation: 'SAP', role: 'iXp Technical Support Engineer Intern', period: 'Starting February 2027', label: 'Incoming',
  note: 'A confirmed next step: joining SAP as an iXp Technical Support Engineer Intern in February 2027.',
};

export const education = [
  { title: 'BSc Data Science & Artificial Intelligence', place: 'Technological University Dublin', period: '2025 – 2028 (expected)' },
  { title: 'Level 6 Software Engineering', place: 'Rathmines College FET', period: '2023 – 2025' },
  { title: 'BSc Computing in Interactive Digital Art & Design', place: 'SETU (South East Technological University)', period: '2021 – 2023' },
];

export const leadership = [
  {
    title: 'Notion Campus Leader', period: 'July 2026 – Present',
    note: 'Leading student technology initiatives at TU Dublin.',
    points: [
      'Organise and run student technology events and initiatives on campus.',
      'Ran a Notion hackathon at TU Dublin, from planning through to the day itself.',
      'Hosted the "Get Your Semester Together with Notion" workshop for students.',
      'Helped organise a Dublin AI Week hackathon for approximately 100 participants.',
    ],
  },
  {
    title: 'Hackathon Hub Ambassador', period: 'August 2026 – Present',
    note: 'Promoting hackathons and technology events to students across Ireland.',
    points: [
      'Connect university communities with opportunities to build and collaborate.',
      'Help students find their first hackathon and get started with a team.',
      'Share hackathons, workshops and innovation programmes with students who have not been to one before.',
    ],
  },
];

export type HighlightCategory = 'Hackathons' | 'Community' | 'Building' | 'Learning' | 'Next Chapter';

export type Highlight = {
  category: HighlightCategory; date?: string; title: string; note: string;
  detail?: string; images?: string[]; imageAlt?: string; projectSlug?: string;
  imagePosition?: string; imageZoom?: number;
};

export const highlights: Highlight[] = [
  {
    category: 'Hackathons', date: '2026', title: 'AI.WOMEN Hackathon 2026',
    note: 'Built the backend and AI pipeline for PropertyScan as part of a team, receiving second place for Best Use of Google Cloud.',
    detail: 'A team of five built PropertyScan, an AI-powered property due diligence tool, in a single hackathon. I focused on backend development and the AI pipeline: document extraction, evidence validation and the deterministic cross-document rule engine. The project took second place for Best Use of Google Cloud.',
    images: [assetUrl(aiwomenHackathon)], imageAlt: 'The PropertyScan team on stage at the AI.WOMEN Hackathon 2026, receiving second place for Best Use of Google Cloud',
    imagePosition: 'center bottom', imageZoom: 1.34,
    projectSlug: 'propertyscan',
  },
  {
    category: 'Community', date: '2026', title: 'Notion Hackathon',
    note: 'Ran a Notion hackathon at TU Dublin as a Notion Campus Leader, handing out swag and getting students building.',
    detail: 'As a Notion Campus Leader I organised and ran a Notion hackathon at TU Dublin, bringing students together to build, collaborate and pick up some Notion swag along the way.',
    images: [assetUrl(notionHackathon)],
    imageAlt: 'Handing out Notion tote bags at the Notion hackathon at TU Dublin',
  },
  {
    category: 'Community', date: '2026', title: 'Get Your Semester Together with Notion',
    note: 'Hosted a workshop helping students organise their semester with Notion.',
    detail: 'As a Notion Campus Leader I hosted the "Get Your Semester Together with Notion" workshop at TU Dublin, helping students set up their studies, projects and plans in Notion.',
    images: [assetUrl(notionWorkshop)],
    imageAlt: 'Presenting the Get Your Semester Together with Notion workshop at TU Dublin',
    imagePosition: 'center top',
  },
  {
    category: 'Community', date: '2026', title: 'Dublin AI Week',
    note: 'Helped run a Dublin AI Week hackathon that brought together approximately 100 participants.',
    detail: 'As a Notion Campus Leader I was involved in organising a Dublin AI Week hackathon that brought together approximately 100 participants to build with AI.',
    images: [assetUrl(pressureCookerCrowd), assetUrl(dublinAiWeek)],
    imageAlt: 'A packed Dublin AI Week session with attendees wearing Dublin AI Week t-shirts',
  },
  {
    category: 'Community', date: '2026 – Present', title: 'Hackathon Hub Ambassador',
    note: 'Promoting hackathons, student innovation and opportunities for university students to collaborate and build.',
    detail: 'As a Hackathon Hub Ambassador I help students discover hackathons and opportunities to collaborate, connecting university communities across Ireland with chances to build.',
  },
  {
    category: 'Building', date: '2026', title: 'Crescend · Pressure Cooker 2026',
    note: 'Collaborated on a music-driven social discovery concept, contributing to design, prototyping and product development. The landing page attracted 108 waitlist sign-ups.',
    detail: 'Developed as part of the Pressure Cooker 2026 experience in Dublin. I contributed to UX/UI design, interactive prototyping and collaborative product development. The landing page has attracted 108 waitlist sign-ups so far.',
    images: [assetUrl(pressureCookerTeam)],
    imageAlt: 'Working with the team during the Pressure Cooker 2026 experience in Dublin',
    projectSlug: 'crescend',
  },
  {
    category: 'Building', title: 'Florist Studio',
    note: 'Building a digital management application that translates real independent-florist business needs into software.',
    detail: 'Florist Studio brings pricing, orders, inventory, events, invoicing and loyalty into one installable workspace for independent florists, inspired by real floristry business workflows.',
    projectSlug: 'eternal-blooms',
  },
  {
    category: 'Learning', date: '2026', title: 'Pure Accelerate, London',
    note: 'Attended the Pure Accelerate conference in London, exploring data storage, cloud infrastructure and enterprise technology.',
    detail: 'Attended the Pure Accelerate conference in London, learning about data storage, cloud infrastructure and how enterprise technology is evolving.',
  },
  {
    category: 'Learning', title: 'Learning & exploring',
    note: 'Developing skills in AI, software engineering, cloud technology and data analytics through university projects, independent development, DataCamp and IBM SkillsBuild training.',
    detail: 'Alongside my degree, I keep learning through university projects, independent development and structured training on DataCamp and IBM SkillsBuild, across AI, software engineering, cloud technology and data analytics.',
  },
  {
    category: 'Next Chapter', date: 'February 2027', title: "What's next: SAP",
    note: 'Preparing to join SAP as an incoming iXp Technical Support Engineer Intern in February 2027.',
    detail: 'A confirmed next step: in February 2027 I join SAP as an iXp Technical Support Engineer Intern.',
  },
];
