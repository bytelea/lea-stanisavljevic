import { ArrowDown, ArrowRight, Sparkles, Code2, Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { featuredProjects } from '@/data/portfolio';
import Terminal from '@/components/portfolio/Terminal';
import { TerminalButton } from '@/components/portfolio/PortfolioProvider';

export default function HeroSection() {
  return <section id="home" className="portfolio-hero page-width">
    <div className="hero-copy"><p className="eyebrow"><span className="tiny-star">✳</span> DATA SCIENCE · AI · HUMAN-CENTRED DESIGN</p><h1>Making technology<br className="desktop-break" /> feel a little<br /> more <em>human.</em></h1><p className="hero-description">I’m Lea Stan, a third-year Data Science & Artificial Intelligence student at TU Dublin who enjoys turning ideas into useful, thoughtful technology. From AI-powered applications to creative digital experiences, I love combining software engineering, data and product design to solve real problems.</p><div className="hero-actions"><Button asChild><Link to="/#projects">Explore my work <ArrowRight size={16} /></Link></Button><TerminalButton /></div><div className="hero-footnote"><span className="status-dot" /> Currently studying Data Science & AI at TU Dublin</div><div className="hero-footnote"><Users size={12} /> Notion Campus Leader & Hackathon Hub Ambassador</div></div>
    <div className="hero-composition"><Link to="/?project=propertyscan" className="polaroid"><img src={featuredProjects[0].image} alt="PropertyScan in a sunlit workspace" /><span className="handwritten">A little clarity, built with care.</span></Link><span className="paper-tape" aria-hidden="true" /><div className="handwritten hero-annotation">Building ideas for<br /> a brighter future <Heart size={16} /><span className="annotation-arrow" aria-hidden="true">↙</span></div><div className="interest-note"><span><Sparkles size={12} /> AI & curiosity</span><span><Heart size={12} /> Thoughtful design</span><span><Code2 size={12} /> Useful little things</span></div><div className="hero-terminal"><Terminal /></div><span className="composition-star" aria-hidden="true">✧</span></div>
    <a href="#projects" className="scroll-note"><ArrowDown size={14} /><span>A little further down</span></a>
  </section>;
}
