import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { featuredProjects } from '@/data/portfolio';
import { Button } from '@/components/ui/button';
export default function ProjectOverview({ slug }: { slug: string }) {
  const project = featuredProjects.find(p => p.slug === slug);
  useEffect(() => { window.scrollTo(0, 0); }, [slug]);
  if (!project) return <main className="page-width case-study"><h1>Project not found.</h1><Button asChild><Link to="/#projects">Back to projects</Link></Button></main>;
  return <main className="case-study page-width"><Button asChild variant="link" className="back-link"><Link to="/#projects"><ArrowLeft /> Back to projects</Link></Button><p className="eyebrow">{project.category}</p><h1>{project.name}<span className="text-primary">.</span></h1>{project.status && <p className="case-status">{project.status}</p>}<p className="case-intro">{project.description}</p><img className="case-artwork" src={project.image} alt={`${project.name} application mockup`} /><div className="case-details"><div><p className="eyebrow">PROJECT OVERVIEW</p><h2>{project.summary}</h2>{project.role && <p className="case-role">My role: {project.role}</p>}{project.context && <p>{project.context}</p>}<div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><div><h3>The approach</h3><p>{project.approach}</p></div></div>{project.screenshot && <figure className="case-screen"><img src={project.screenshot} alt={`${project.name} original dashboard interface`} loading="lazy" /><figcaption>The original interface.</figcaption></figure>}<div className="case-next"><p className="eyebrow">KEEP EXPLORING</p>{featuredProjects.filter(p => p.slug !== slug).map(p => <Link key={p.slug} to={`/?project=${p.slug}`}>{p.name}<ArrowUpRight size={22} /></Link>)}</div></main>;
}
