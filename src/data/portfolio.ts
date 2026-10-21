import propertyImage from '@/assets/propertyscan-workspace.png.asset.json';
import propertyScreen from '@/assets/propertyscan-dashboard.png.asset.json';
import crescendImage from '@/assets/crescend-phones.png.asset.json';
import bloomsImage from '@/assets/eternal-blooms-tablet.png.asset.json';
import bloomsScreen from '@/assets/eternal-blooms-dashboard.png.asset.json';

// Absolute asset origin keeps uploaded media available on GitHub Pages too.
export const assetUrl = (asset: { url: string }) => `https://id-preview--f1d34c87-7893-4453-8c52-da3e4693d0a0.lovable.app${asset.url}`;

// Repositories are private by choice: these are product case studies, not public code.
export const featuredProjects = [
  {
    slug: 'propertyscan', name: 'PropertyScan', category: 'AI & MACHINE LEARNING · FULL-STACK DEVELOPMENT',
    summary: 'Turning a stack of property documents into a clearer picture.',
    description: 'An AI-powered property due diligence tool that helps homebuyers make sense of complex property documents. It combines intelligent document extraction with evidence-based rule checking to identify financial risks, inconsistencies and missing information.',
    image: assetUrl(propertyImage), screenshot: assetUrl(propertyScreen),
    tags: ['Python', 'FastAPI', 'Pydantic', 'React', 'TypeScript', 'Anymize AI', 'Google Cloud Run'],
    role: 'Backend Development & AI, as part of a collaborative team',
    context: 'Developed at the AI.WOMEN Hackathon 2026.',
    status: 'Hackathon MVP',
    approach: 'Document extraction pulls structured facts from complex property documents. Evidence validation then checks those facts against their sources, and deterministic cross-document rules flag financial risks, inconsistencies and missing information, so buyers see what is confirmed and what still needs answers.',
  },
  {
    slug: 'crescend', name: 'Crescend', category: 'MUSIC TECHNOLOGY · SOCIAL DISCOVERY',
    summary: 'A shared song. A crossed path. A new connection.',
    description: 'A music-driven social discovery app designed to connect people through shared listening habits. Crescend explores music compatibility, Spotify-connected profiles and privacy-conscious proximity matching through its signature Crossing Paths experience.',
    image: assetUrl(crescendImage), screenshot: undefined,
    tags: ['Social product design', 'Spotify integration', 'Supabase', 'Authentication'],
    role: undefined,
    context: 'The project combines social product design with authentication, user connections and backend integration. Some screens are conceptual product designs rather than shipped features.',
    status: 'In development',
    approach: 'Music compatibility, shared listening moments and Crossing Paths are the core product concepts. Supabase powers the authenticated connections testing, and Spotify account connection is part of the product experience.',
  },
  {
    slug: 'eternal-blooms', name: 'Florist Studio', category: 'WEB DEVELOPMENT · PWA · BUSINESS TECHNOLOGY',
    summary: 'A little more calm behind the beautiful blooms.',
    description: 'A business management Progressive Web App designed for independent florists. Florist Studio brings orders, pricing, inventory, customers, events, invoicing and business analytics into one elegant workspace, shown here through the Eternal Blooms interface.',
    image: assetUrl(bloomsImage), screenshot: assetUrl(bloomsScreen),
    tags: ['HTML5', 'CSS3', 'JavaScript', 'PWA', 'Service Workers', 'Supabase', 'Local Storage'],
    role: undefined,
    context: 'Built around real floristry workflows, combining practical business operations with thoughtful interface design and cloud-connected functionality.',
    status: undefined,
    approach: 'The workspace covers the florist dashboard, a pricing studio, inventory, event planning, invoicing and loyalty features, so everyday business operations live in one place.',
  },
];
export const skills = ['Python', 'SQL', 'JavaScript', 'R', 'C++', 'Pandas', 'NumPy', 'Data Analytics', 'Data Visualisation', 'Machine Learning', 'Neural Networks', 'FastAPI', 'REST APIs', 'Google Cloud', 'Vertex AI / Gemini', 'Supabase', 'Git', 'GitHub', 'Tableau', 'Excel', 'Figma', 'Canva'];
