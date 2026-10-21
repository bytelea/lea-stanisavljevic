import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Trophy, Users, Megaphone, Music, Flower2, BookOpen, Sparkles } from 'lucide-react';
import { highlights } from '@/data/portfolio';

const icons = [Trophy, Users, Megaphone, Music, Flower2, BookOpen, Sparkles];

export default function UpToSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="upto" className="upto-section page-width" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}>

        <div className="section-topline"><span className="eyebrow">03 / LATELY</span><span className="handwritten project-note">A few recent chapters. <span aria-hidden="true">↙</span></span></div>
        <div className="section-heading"><div><h2>What I've been up to<span className="text-primary">.</span></h2><p>A little look at what I've been building, learning and getting involved in lately.</p></div></div>

        <div className="upto-grid">
          {highlights.map((highlight, i) => {
            const Icon = icons[i % icons.length];
            const card = (
              <article className={`upto-card upto-card-${i % 7}`}>
                <div className="upto-top">
                  <span className="upto-label"><Icon size={12} />{highlight.label}</span>
                  {highlight.date && <span className="upto-date">{highlight.date}</span>}
                </div>
                <h3>{highlight.title}</h3>
                <p>{highlight.note}</p>
                {highlight.projectSlug && <span className="upto-link">See the project <ArrowUpRight size={13} /></span>}
              </article>
            );
            return highlight.projectSlug
              ? <Link key={highlight.title} to={`/?project=${highlight.projectSlug}`} className="upto-card-link">{card}</Link>
              : <div key={highlight.title}>{card}</div>;
          })}
        </div>
      </motion.div>
    </section>);

}
