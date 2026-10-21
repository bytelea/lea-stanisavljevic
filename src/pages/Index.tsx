import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import UpToSection from '@/components/UpToSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FeaturedProjects from '@/components/portfolio/FeaturedProjects';
import ProjectOverview from '@/components/portfolio/ProjectOverview';
import { PortfolioProvider } from '@/components/portfolio/PortfolioProvider';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
export default function Index() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const project = params.get('project');
  const archive = params.get('view') === 'archive';
  useEffect(() => {
    if (location.hash) requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }));
    else window.scrollTo(0, 0);
  }, [location]);
  return <PortfolioProvider><div className="portfolio-site"><Navbar />{project ? <ProjectOverview slug={project} /> : archive ? <main className="archive-page"><div className="page-width"><Button asChild variant="link"><Link to="/#projects"><ArrowLeft />Back to featured projects</Link></Button></div><ProjectsSection /></main> : <main><HeroSection /><FeaturedProjects /><AboutSection /><ExperienceSection /><UpToSection /><ContactSection /></main>}<Footer /></div></PortfolioProvider>;
}
