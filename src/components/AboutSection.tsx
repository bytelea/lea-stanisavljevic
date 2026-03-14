import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
"Python", "Machine Learning", "Data Analysis", "SQL",
"HTML/CSS", "JavaScript", "Web Analytics", "Digital Marketing",
"Java", "Data Visualization", "Problem Solving", "AI"];


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
          </div>

          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">I'm Lea — a Data Science and AI student at TU Dublin with a strong foundation in web development, digital marketing, and design. I'm passionate about turning raw data into meaningful insights and building intelligent systems.



            </p>
            <p className="text-muted-foreground leading-relaxed">
              Having interned at ANAM Technologies (Infobip), I bring real-world
              experience in problem-solving and collaboration. I excel at bridging
              the gap between technical analysis and creative communication.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16">
          
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Skills & Tools</p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) =>
            <span
              key={skill}
              className="px-4 py-2 text-sm border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors duration-200">
              
                {skill}
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </section>);

};

export default AboutSection;