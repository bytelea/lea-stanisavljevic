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

          <div className="about-photo-col">
            <figure className="about-polaroid">
              <span className="about-tape" aria-hidden="true" />
              <img src={headshotUrl} alt="Portrait of Lea Stan" loading="lazy" />
              <figcaption className="handwritten">building ideas into real products ♡</figcaption>
            </figure>
          </div>

          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">About</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold">
              Building with
              <br />
              <span className="text-muted-foreground">data & curiosity</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm a third-year BSc Data Science &amp; Artificial Intelligence student at
              Technological University Dublin, interested in the intersection of AI,
              software engineering, data and human-centred technology.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I've worked in growth and product operations at Trace and completed a
              marketing and web internship at Infobip. Outside university, I build
              practical applications, take part in hackathons and contribute to the
              technology community as a Notion Campus Leader and Hackathon Hub Ambassador.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm especially drawn to projects that combine technical problem-solving with
              thoughtful design.
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
