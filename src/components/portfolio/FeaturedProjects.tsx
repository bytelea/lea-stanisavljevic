import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { featuredProjects } from '@/data/portfolio';
import { Button } from '@/components/ui/button';

export default function FeaturedProjects() {
  return <section id="projects" className="featured-section page-width">
    <div className="section-topline"><span className="eyebrow">01 / SELECTED WORK</span><span className="handwritten project-note">Ideas, made real. <span aria-hidden="true">↙</span></span></div>
    <div className="section-heading"><div><h2>Featured projects<span className="text-primary">.</span></h2><p>A few things I’ve built at the intersection of data, design and everyday life.</p></div><Button asChild variant="link" className="archive-link"><Link to="/?view=archive">More work & research <ArrowUpRight /></Link></Button></div>
    <div className="featured-grid">{featuredProjects.map((project, i) => <Link to={`/?project=${project.slug}`} key={project.slug} className="featured-card group">
      <div className="featured-image"><img src={project.image} alt={`${project.name} application ${i === 1 ? 'on two phones' : i === 0 ? 'on a MacBook' : 'on a tablet'}`} loading="lazy" />{i === 0 && <span className="featured-badge">Featured</span>}<span className="image-arrow"><ArrowUpRight size={20} /></span></div>
      <div className="featured-body"><p className="project-category">{project.category}</p><h3>{project.name}</h3><p className="project-summary">{project.summary}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><span className="project-cta">Explore project <ArrowRight size={14} /></span></div>
    </Link>)}</div>
  </section>;
}
