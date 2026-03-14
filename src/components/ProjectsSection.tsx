import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Sentiment Analysis Engine",
    description:
      "NLP-powered tool that analyzes customer feedback sentiment using Python and machine learning models to extract actionable business insights.",
    tags: ["Python", "NLP", "scikit-learn"],
    color: "from-primary/20 to-transparent",
  },
  {
    title: "Predictive Analytics Dashboard",
    description:
      "Interactive dashboard built to visualize and forecast trends using historical datasets with statistical modeling and data visualization libraries.",
    tags: ["Python", "Data Viz", "Pandas"],
    color: "from-primary/10 to-transparent",
  },
  {
    title: "Web Analytics Platform",
    description:
      "Full-stack web analytics solution with tracking, real-time reporting, and user behavior insights built during internship at ANAM Technologies.",
    tags: ["JavaScript", "HTML/CSS", "Analytics"],
    color: "from-primary/15 to-transparent",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Work</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Selected Projects
          </h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
            >
              <div className={`group relative bg-gradient-to-br ${project.color} border border-border rounded-2xl p-8 sm:p-10 hover:border-primary/30 transition-all duration-300`}>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-display text-xl sm:text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-secondary rounded-full text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 text-muted-foreground">
                    <Github size={18} className="hover:text-foreground cursor-pointer transition-colors" />
                    <ExternalLink size={18} className="hover:text-foreground cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
