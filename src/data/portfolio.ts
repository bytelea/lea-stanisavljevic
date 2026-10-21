import propertyImage from '@/assets/propertyscan-workspace.png.asset.json';
import propertyScreen from '@/assets/propertyscan-dashboard.png.asset.json';
import crescendImage from '@/assets/crescend-phones.png.asset.json';
import bloomsImage from '@/assets/eternal-blooms-tablet.png.asset.json';
import bloomsScreen from '@/assets/eternal-blooms-dashboard.png.asset.json';

// Absolute asset origin keeps uploaded media available on GitHub Pages too.
export const assetUrl = (asset: { url: string }) => `https://lea-ai-folio.lovable.app${asset.url}`;
export const featuredProjects = [
  {
    slug: 'propertyscan', name: 'PropertyScan', category: 'AI · PROPERTY DUE DILIGENCE',
    summary: 'Turning a stack of property documents into a clearer picture.',
    description: 'An AI-supported property due diligence assistant that connects information across documents, surfaces contradictions and missing evidence, and gives residential buyers concrete questions to ask before signing.',
    image: assetUrl(propertyImage), screenshot: assetUrl(propertyScreen),
    tags: ['Python', 'FastAPI', 'Google Cloud'],
    role: 'Backend + AI',
    context: 'Built with a team during the AI.WOMEN Hackathon 2026.',
    approach: 'AI extracts structured facts from anonymised documents. Evidence validation, canonical normalisation and a deterministic rule engine then cross-check those facts. Missing information stays unknown rather than being guessed.',
    github: 'https://github.com/bytelea/property-due-diligence-assistant',
    live: 'https://propertyscan.lovable.app/',
  },
  {
    slug: 'crescend', name: 'Crescend', category: 'MUSIC · SOCIAL DISCOVERY',
    summary: 'A shared song. A crossed path. A new connection.',
    description: 'A music-based social discovery app that helps people connect through shared listening and musical taste. Music is the starting point for discovering people, rather than a conventional streaming experience.',
    image: assetUrl(crescendImage), screenshot: undefined,
    tags: ['Social discovery', 'Music', 'Product design'],
    role: undefined, context: undefined,
    approach: 'The supplied interface explores connecting a Spotify account, discovering shared listening moments and crossing paths with people through music.',
    github: undefined, live: undefined,
  },
  {
    slug: 'eternal-blooms', name: 'Eternal Blooms', category: 'BUSINESS TOOLS · FLORIST STUDIO',
    summary: 'A little more calm behind the beautiful blooms.',
    description: 'A florist business management application for independent florists to manage customers, orders, inventory, expenses, invoices and sales data, with authentication, cloud storage and cross-device synchronisation.',
    image: assetUrl(bloomsImage), screenshot: assetUrl(bloomsScreen),
    tags: ['JavaScript', 'SQL', 'Supabase'],
    role: undefined, context: 'Florist Studio, shown through the Eternal Blooms interface.',
    approach: 'The dashboard brings sales, profit, outstanding invoices, orders and calendar bookings into one place. The aim is to make everyday florist operations easier to manage.',
    github: 'https://github.com/bytelea/floriststudio', live: undefined,
  },
];
export const skills = ['Python', 'SQL', 'JavaScript', 'R', 'C++', 'Pandas', 'NumPy', 'Data Analytics', 'Data Visualisation', 'Machine Learning', 'Neural Networks', 'FastAPI', 'REST APIs', 'Google Cloud', 'Vertex AI / Gemini', 'Supabase', 'Git', 'GitHub', 'Tableau', 'Excel', 'Figma', 'Canva'];
