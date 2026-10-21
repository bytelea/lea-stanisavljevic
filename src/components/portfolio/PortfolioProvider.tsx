import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Moon, Sun, TerminalSquare, ArrowUpRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { themes, type PortfolioTheme } from '@/lib/terminal';
import Terminal from './Terminal';
import { featuredProjects } from '@/data/portfolio';

type PortfolioContextType = { theme: PortfolioTheme; setTheme: (theme: PortfolioTheme) => void; openTerminal: () => void; openCommands: () => void };
const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);
export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) throw new Error('Portfolio context is missing');
  return context;
}
export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const [theme, setTheme] = useState<PortfolioTheme>(() => {
    try { const saved = localStorage.getItem('portfolio-theme'); return themes.find(t => t === saved) ?? 'light'; } catch { return 'light'; }
  });
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [commandsOpen, setCommandsOpen] = useState(false);
  const [search, setSearch] = useState('');
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try { localStorage.setItem('portfolio-theme', theme); } catch { /* preference is optional */ }
  }, [theme]);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (!(event.metaKey || event.ctrlKey)) return;
      if (event.key.toLowerCase() === 'k') { event.preventDefault(); setCommandsOpen(v => !v); }
      if (event.key.toLowerCase() === 'j') { event.preventDefault(); setTerminalOpen(v => !v); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  const actions = [
    ...['Home', 'Projects', 'About', 'Contact'].map(label => ({ label, run: () => navigate(`/#${label.toLowerCase()}`) })),
    ...featuredProjects.map(project => ({ label: project.name, run: () => navigate(`/?project=${project.slug}`) })),
    { label: 'More work & research', run: () => navigate('/?view=archive') },
    { label: 'Open terminal', run: () => setTerminalOpen(true) },
    ...themes.map(t => ({ label: `${t[0].toUpperCase()}${t.slice(1)} theme`, run: () => setTheme(t) })),
  ].filter(a => a.label.toLowerCase().includes(search.toLowerCase()));
  return <PortfolioContext.Provider value={{ theme, setTheme, openTerminal: () => setTerminalOpen(true), openCommands: () => setCommandsOpen(true) }}>
    {children}
    <Dialog open={terminalOpen} onOpenChange={setTerminalOpen}>
      <DialogContent className="terminal-dialog p-0 overflow-hidden">
        <DialogTitle className="sr-only">Lea's terminal</DialogTitle><DialogDescription className="sr-only">Explore projects, skills and themes.</DialogDescription>
        <Terminal expanded />
      </DialogContent>
    </Dialog>
    <Dialog open={commandsOpen} onOpenChange={setCommandsOpen}>
      <DialogContent className="command-dialog">
        <DialogTitle className="sr-only">Explore portfolio</DialogTitle><DialogDescription className="sr-only">Search pages and actions.</DialogDescription>
        <label className="command-search"><Search size={18} /><input aria-label="Search commands" placeholder="Where would you like to go?" value={search} onChange={e => setSearch(e.target.value)} /></label>
        <div className="command-list">{actions.length ? actions.map(action => <Button variant="ghost" className="command-action" key={action.label} onClick={() => { action.run(); setCommandsOpen(false); setSearch(''); }}><span>{action.label}</span><ArrowUpRight size={15} /></Button>) : <p className="text-muted-foreground py-4">No matching commands.</p>}</div>
      </DialogContent>
    </Dialog>
  </PortfolioContext.Provider>;
}
export function ThemeSwitcher() {
  const { theme, setTheme } = usePortfolio();
  return <div className="theme-switcher" aria-label="Colour theme">{themes.map((t, i) => {
    const Icon = [Sun, Moon][i];
    return <Button key={t} variant="ghost" size="icon" title={`${t} theme`} aria-label={`${t} theme`} aria-pressed={theme === t} onClick={() => setTheme(t)} className={theme === t ? 'theme-active' : ''}><Icon size={15} /></Button>;
  })}</div>;
}
export function TerminalButton({ compact = false }: { compact?: boolean }) {
  const { openTerminal } = usePortfolio();
  return <Button onClick={openTerminal} className="terminal-button" size={compact ? 'sm' : 'default'}><TerminalSquare /><span>Open terminal</span></Button>;
}
