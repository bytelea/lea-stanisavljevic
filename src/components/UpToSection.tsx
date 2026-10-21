import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, X } from 'lucide-react';
import { highlights, type Highlight, type HighlightCategory } from '@/data/portfolio';
import { openExternalLink } from '@/lib/external-link';

const filters: Array<'All' | HighlightCategory> = ['All', 'Hackathons', 'Community', 'Building', 'Learning'];

export default function UpToSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const reduceMotion = useReducedMotion();
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const [open, setOpen] = useState<Highlight | null>(null);

  // Photo entries lead the archive; text-only entries follow, each group keeping its own order.
  const hasPhoto = (h: Highlight) => Boolean(h.images && h.images.length > 0);
  const visible = (filter === 'All' ? highlights : highlights.filter((h) => h.category === filter))
    .slice()
    .sort((a, b) => Number(hasPhoto(b)) - Number(hasPhoto(a)));

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const rise = (delay: number) =>
    reduceMotion
      ? {}
      : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.45, delay } };

  return (
    <section id="upto" className="upto-section page-width" ref={ref}>
      <motion.div {...rise(0)} animate={isInView ? { opacity: 1, y: 0 } : {}}>
        <div className="section-topline">
          <span className="eyebrow">THE PERSONAL ARCHIVE</span>
          <span className="handwritten project-note">life lately <span aria-hidden="true">✳</span></span>
        </div>
        <div className="section-heading">
          <div>
            <h2>Beyond the Screen<span className="text-primary">.</span></h2>
            <p>A little collection of what I've been building, learning and getting involved in lately.</p>
          </div>
        </div>

        <div className="archive-filters" role="group" aria-label="Filter archive entries">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              className={`archive-filter${filter === f ? ' is-active' : ''}`}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>

        <div className="archive-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((highlight, i) => (
              <motion.button
                key={highlight.title}
                type="button"
                layout={!reduceMotion}
                {...rise(0.05 * i)}
                exit={reduceMotion ? {} : { opacity: 0, y: 12 }}
                className={`archive-card${hasPhoto(highlight) ? ' archive-card-photo' : ' archive-card-text'}`}
                onClick={() => setOpen(highlight)}
                aria-haspopup="dialog">
                {highlight.images && highlight.images.length > 0 && (
                  <span className="archive-photo">
                    <img
                      src={highlight.images[0]}
                      alt={highlight.imageAlt ?? ''}
                      loading="lazy"
                      style={{
                        objectPosition: highlight.imagePosition ?? 'center',
                        transformOrigin: highlight.imagePosition ?? 'center',
                        transform: highlight.imageZoom ? `scale(${highlight.imageZoom})` : undefined,
                      }} />
                  </span>
                )}
                <span className="archive-top">
                  <span className="archive-label">{highlight.category}</span>
                  {highlight.date && <span className="archive-date">{highlight.date}</span>}
                </span>
                <span className="archive-title">{highlight.title}</span>
                <span className="archive-note">{highlight.note}</span>
                <span className="archive-more">Read the story <ArrowUpRight size={13} aria-hidden="true" /></span>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="archive-overlay"
            role="dialog"
            aria-modal="true"
            aria-label={open.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}>
            <motion.div
              className="archive-dialog"
              initial={reduceMotion ? {} : { opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? {} : { opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}>
              <button type="button" className="archive-close" onClick={() => setOpen(null)} aria-label="Close story">
                <X size={18} />
              </button>
              <div className="archive-top">
                <span className="archive-label">{open.category}</span>
                {open.date && <span className="archive-date">{open.date}</span>}
              </div>
              <h3>{open.title}</h3>
              {open.images && open.images.length > 0 && (
                <span className={`archive-photos${open.images.length > 1 ? ' archive-photos-multi' : ''}`}>
                  {open.images.map((src, i) => (
                    <span key={src} className="archive-photo">
                      <img
                        src={src}
                        alt={i === 0 ? open.imageAlt ?? '' : ''}
                        loading="lazy"
                        style={i === 0 ? {
                          objectPosition: open.imagePosition ?? 'center',
                          transformOrigin: open.imagePosition ?? 'center',
                          transform: open.imageZoom ? `scale(${open.imageZoom})` : undefined,
                        } : undefined} />
                    </span>
                  ))}
                </span>
              )}
              <p>{open.detail ?? open.note}</p>
              {open.projectSlug && (
                <Link to={`/?project=${open.projectSlug}`} className="archive-case-link" onClick={() => setOpen(null)}>
                  See the project case study <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              )}
              {open.post && (
                <a href={open.post} target="_blank" rel="noreferrer noopener" onClick={openExternalLink} className="archive-case-link">
                  Read the LinkedIn post <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
