import { featuredProjects, skills } from '@/data/portfolio';
export const themes = ['light', 'dark', 'pastel'] as const;
export type PortfolioTheme = typeof themes[number];
export type TerminalResult = { text: string; destination?: string; theme?: PortfolioTheme; clear?: boolean };
export function runCommand(input: string): TerminalResult {
  const [command = '', ...args] = input.trim().toLowerCase().split(/\s+/);
  switch (command) {
    case 'help': return { text: 'about          A little about me\nprojects       Explore my projects\nopen <name>    propertyscan, crescend, eternal-blooms\nskills         My technical toolkit\ncontact        Say hello\ntheme <name>   light, dark, pastel\nclear          A fresh start' };
    case 'about': return { text: "I'm Lea Stan, a Data Science & AI student at TU Dublin. I work across product analytics and app operations at Trace, and love turning ideas into useful products." };
    case 'skills': return { text: skills.join(' · ') };
    case 'projects': return { text: featuredProjects.map(p => `${p.slug.padEnd(18)} ${p.summary}`).join('\n') };
    case 'open': {
      const project = featuredProjects.find(p => p.slug === args.join('-'));
      return project ? { text: `Opening ${project.name}…`, destination: `/?project=${project.slug}` } : { text: 'Choose propertyscan, crescend or eternal-blooms.' };
    }
    case 'contact': return { text: 'Email: leastan5757@gmail.com\nGitHub: github.com/bytelea\nLinkedIn: linkedin.com/in/lea-stanisavljevic', destination: '/#contact' };
    case 'theme': {
      const theme = themes.find(t => t === args[0]);
      return theme ? { text: `Theme set to ${theme}.`, theme } : { text: 'Choose light, dark or pastel.' };
    }
    case 'clear': return { text: '', clear: true };
    case '': return { text: '' };
    default: return { text: `Unknown command: ${command}. Type help to see what is available.` };
  }
}
