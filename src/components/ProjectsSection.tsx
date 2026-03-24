import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Weather Data Statistics",
    description:
      "Statistical analysis and visualization of weather datasets using R, exploring patterns and trends through data-driven approaches.",
    tags: ["R", "Statistics", "Data Analysis"],
    github: "https://github.com/bytelea/weather-data-statistics",
    color: "from-primary/20 to-transparent",
  },
  {
    title: "Data Cleaning & Processing",
    description:
      "Python-based data cleaning and processing pipeline developed as part of the DCP25 coursework, focusing on real-world data preparation techniques.",
    tags: ["Python", "Data Cleaning", "Pandas"],
    github: "https://github.com/bytelea/dcp25-assignment",
    color: "from-primary/15 to-transparent",
  },
  {
    title: "Software Architecture",
    description:
      "Exploring software design patterns and architectural principles through practical Java implementations.",
    tags: ["Java", "Design Patterns", "OOP"],
    github: "https://github.com/bytelea/software-architecture",
    color: "from-primary/10 to-transparent",
  },
  {
    title: "GUI Application",
    description:
      "Desktop GUI application built using Microsoft Visual Basic, demonstrating interface design and event-driven programming.",
    tags: ["Visual Basic .NET", "GUI", "Desktop"],
    github: "https://github.com/bytelea/gui",
    color: "from-primary/20 to-transparent",
  },
  {
    title: "Sorting Algorithms Analysis",
    description:
      "Performance analysis and comparison of sorting algorithms in Python, measuring execution time and efficiency across different data sizes.",
    tags: ["Python", "Algorithms", "Performance Analysis"],
    github: "https://github.com/bytelea/Sorting-Algorithms-Analysis-in-Python",
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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0"
                  >
                    <Github size={18} className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12"
        >
          <div className="border border-border rounded-2xl p-8 sm:p-10 bg-gradient-to-br from-primary/15 to-transparent">
            <h3 className="font-display text-xl sm:text-2xl font-semibold mb-3">
              ProCare Redesign Prototype
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mb-6">
              A UI/UX redesign prototype for ProCare, crafted in Figma with a focus on modern healthcare interface design.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Figma", "UI/UX", "Prototyping"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 bg-secondary rounded-full text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="w-full aspect-video rounded-xl overflow-hidden border border-border">
              <iframe
                className="w-full h-full"
                src="https://embed.figma.com/design/To9refeNYbyaLhnTiooWJH/ProCare-Redesign-Prototype?node-id=0-1&embed-host=share"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
