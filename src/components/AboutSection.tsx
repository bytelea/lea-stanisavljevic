import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillGroups, headshotUrl } from "@/data/portfolio";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16">

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">About</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Building with
              <br />
              <span className="text-muted-foreground">data & curiosity</span>
            </h2>
            <figure className="about-polaroid">
              <span className="about-tape" aria-hidden="true" />
              <img src={headshotUrl} alt="Portrait of Lea Stan" loading="lazy" />
              <figcaption className="handwritten">building ideas into real products ♡</figcaption>
            </figure>
          </div>

          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm a third-year BSc Data Science &amp; Artificial Intelligence student at
              Technological University Dublin, interested in the intersection of AI,
              software engineering, data and human-centred technology.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My experience spans software development, digital analytics and product
              operations. Previously, I worked in growth and product operations at Trace,
              exploring website performance, product engagement and digital growth. Before
              that, I completed a marketing and web internship at Infobip (Anam
              Technologies), working on web development, analytics and digital initiatives.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Outside university, I enjoy building practical applications, participating in
              hackathons and contributing to the technology community. My projects include
              PropertyScan, an AI-powered property due diligence tool; Crescend, a
              music-based social discovery project; and Florist Studio, a business
              management application for independent florists.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm also a Notion Campus Leader and Hackathon Hub Ambassador, helping
              students discover opportunities to collaborate, learn and build.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm especially interested in projects that combine technical problem-solving
              with thoughtful design, and I enjoy continually learning new tools and
              exploring new ideas.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16">

          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Skills & Tools</p>
          <div className="skill-groups">
            {skillGroups.map((group) =>
            <div key={group.label} className="skill-group">
                <p className="skill-group-label">{group.label}</p>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) =>
                <span
                  key={skill}
                  className="px-4 py-2 text-sm border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors duration-200">

                      {skill}
                    </span>
                )}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>);

};

export default AboutSection;
