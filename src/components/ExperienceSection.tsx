import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Sparkles } from 'lucide-react';
import { experience, upcoming, education, leadership } from '@/data/portfolio';

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="experience-section page-width" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}>

        <div className="section-topline"><span className="eyebrow">02 / EXPERIENCE</span><span className="handwritten project-note">The journey so far. <span aria-hidden="true">↙</span></span></div>
        <div className="section-heading"><div><h2>Experience & education<span className="text-primary">.</span></h2><p>Where I've worked, what I'm studying and how I stay involved in the community.</p></div></div>

        <div className="up-next-card">
          <div className="up-next-label"><Sparkles size={13} /> Up next</div>
          <div className="up-next-body">
            <div>
              <h3>{upcoming.organisation}</h3>
              <p className="up-next-role">{upcoming.role}</p>
            </div>
            <div className="up-next-meta">
              <span className="incoming-pill">{upcoming.label}</span>
              <span className="up-next-period">{upcoming.period}</span>
            </div>
          </div>
          <p className="up-next-note">{upcoming.note}</p>
        </div>

        <div className="experience-grid">
          <div className="experience-column">
            <p className="eyebrow experience-kicker">PREVIOUS EXPERIENCE</p>
            {experience.map((job) =>
            <article key={job.organisation} className="experience-item">
                <div className="experience-head">
                  <h3>{job.organisation}</h3>
                  <span className="experience-period">{job.period}</span>
                </div>
                <p className="experience-role">{job.role} · {job.location}</p>
                <ul>
                  {job.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </article>
            )}
          </div>

          <div className="experience-column">
            <p className="eyebrow experience-kicker">EDUCATION</p>
            {education.map((entry) =>
            <article key={entry.title} className="experience-item compact">
                <div className="experience-head">
                  <h3><GraduationCap size={17} className="experience-icon" />{entry.title}</h3>
                  <span className="experience-period">{entry.period}</span>
                </div>
                <p className="experience-role">{entry.place}</p>
              </article>
            )}

            <p className="eyebrow experience-kicker leadership-kicker">LEADERSHIP & COMMUNITY</p>
            {leadership.map((entry) =>
            <article key={entry.title} className="experience-item compact">
                <div className="experience-head">
                  <h3>{entry.title}</h3>
                  <span className="experience-period">{entry.period}</span>
                </div>
                <p className="experience-role">{entry.note}</p>
              </article>
            )}
          </div>
        </div>
      </motion.div>
    </section>);

}
