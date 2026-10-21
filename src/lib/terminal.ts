import { featuredProjects, skills } from '@/data/portfolio';
export const themes = ['light', 'dark'] as const;
export type PortfolioTheme = typeof themes[number];
export type TerminalResult = { text: string; destination?: string; theme?: PortfolioTheme; clear?: boolean };
export function runCommand(input: string): TerminalResult {
  const [command = '', ...args] = input.trim().toLowerCase().split(/\s+/);
  switch (command) {
    case 'help': return { text: 'about          A little about me\nnow            What I am up to\nexperience     Where I have worked\nprojects       Explore my projects\nopen <name>    propertyscan, crescend, eternal-blooms\nskills         My technical toolkit\nsap            What is next for me\nhighlights     Recent milestones\ncontact        Say hello\ntheme <name>   light, dark\nclear          A fresh start' };
    case 'about': return { text: "I'm Lea Stan, a third-year Data Science & AI student at TU Dublin. I previously worked in growth and product operations at Trace and as a marketing and web intern at Infobip, and I love turning ideas into useful products." };
    case 'now': return { text: 'Studying Data Science & AI at TU Dublin, building projects like Florist Studio and Crescend, and helping the student tech community as a Notion Campus Leader and Hackathon Hub Ambassador.' };
    case 'experience': return { text: 'Trace — Growth & Product Operations (Jul 2026 – Oct 2026, past)\nInfobip (Anam Technologies) — Marketing & Web Intern (Jul 2022 – Jun 2023)\nNext: SAP iXp Technical Support Engineer Intern, starting February 2027.', destination: '/#experience' };
    case 'skills': return { text: skills.join(' · ') };
    case 'project':
    case 'projects': return { text: featuredProjects.map(p => `${p.slug.padEnd(18)} ${p.summary}`).join('\n') };
    case 'open': {
      const project = featuredProjects.find(p => p.slug === args.join('-'));
      return project ? { text: `Opening ${project.name}…`, destination: `/?project=${project.slug}` } : { text: 'Choose propertyscan, crescend or eternal-blooms.' };
    }
    case 'sap':
    case 'next': return { text: 'Incoming: SAP iXp Technical Support Engineer Intern, starting February 2027. Confirmed and on the horizon, not a current role.', destination: '/#experience' };
    case 'highlights': return { text: 'Opening What I’ve Been Up To…', destination: '/#upto' };
    case 'contact': return { text: 'Email: leastan5757@gmail.com\nGitHub: github.com/bytelea\nLinkedIn: linkedin.com/in/lea-stanisavljevic', destination: '/#contact' };
    case 'light':
    case 'dark':
    case 'theme': {
      const theme = themes.find(t => t === (command === 'theme' ? args[0] : command));
      return theme ? { text: `Theme set to ${theme}.`, theme } : { text: 'Type light or dark, or use theme dark.' };
    }
    case 'clear': return { text: '', clear: true };
    case '': return { text: '' };
    default: return { text: `Unknown command: ${command}. Type help to see what is available.` };
  }
}
