import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
"Python", "SQL", "JavaScript", "R", "C++",
"Pandas", "NumPy", "Data Analytics", "Data Visualisation",
"Machine Learning", "Neural Networks", "FastAPI", "REST APIs",
"Google Cloud", "Vertex AI / Gemini", "Supabase", "Git", "GitHub",
"Tableau", "Excel", "Figma", "Canva"];


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
            <p className="text-muted-foreground leading-relaxed">
              I'm Lea, a Data Science &amp; AI student at TU Dublin who loves
              learning, building things and finding the 'why' behind the numbers.
              I'm especially interested in data analytics, AI and turning ideas
              into useful products.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm currently part of the team at Trace, where I work across product
              analytics and app operations, analysing user behaviour and product
              performance to help inform product decisions. Outside of that, I
              spend a lot of time building projects, experimenting with new
              technologies and getting involved in the tech community.
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