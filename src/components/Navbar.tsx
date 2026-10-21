import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Command } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeSwitcher, TerminalButton, usePortfolio } from '@/components/portfolio/PortfolioProvider';
const navItems = ['Home', 'Projects', 'About', 'Contact'];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { openCommands } = usePortfolio();
  return <header className="portfolio-header"><nav className="page-width nav-inner" aria-label="Main navigation"><Link to="/" className="brand handwritten">Lea Stan<span className="brand-star">✧</span></Link><div className="desktop-nav">{navItems.map(item => <Button key={item} asChild variant="link"><Link to={`/#${item.toLowerCase()}`}>{item}</Link></Button>)}</div><div className="nav-tools"><ThemeSwitcher /><Button variant="ghost" size="icon" onClick={openCommands} aria-label="Open command menu" title="Explore · Ctrl/⌘ K"><Command size={16} /></Button><div className="nav-terminal"><TerminalButton compact /></div><Button className="mobile-menu-toggle" variant="ghost" size="icon" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div></nav>{open && <div className="mobile-nav">{navItems.map(item => <Button key={item} asChild variant="ghost"><Link to={`/#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}</Link></Button>)}<TerminalButton compact /></div>}</header>;
}
