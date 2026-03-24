import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Download } from "lucide-react";
import hcdCover from "@/assets/hcd-cover.jpg";
import analyticsCover from "@/assets/analytics-cover.jpg";

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

        {/* Academic Research Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-20 mb-8"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Academic Research</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Reports & Presentations
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Improving UX in Glucose Monitoring Devices",
              description: "Human-Centred Design research project redesigning the ProCare Smart Health System. Includes user research surveys, persona development, empathy mapping, and a full UX redesign concept.",
              highlights: [
                "📋 Primary & secondary user research",
                "👤 Expanded personas & empathy maps",
                "🔄 As-Is vs To-Be scenario analysis",
              ],
              tags: ["Human-Centred Design", "UX Research", "Healthcare"],
              cover: hcdCover,
              pdf: "/files/HCD_Presentation.pdf",
              btnLabel: "View Presentation",
            },
            {
              title: "Analytics for Decision Making",
              description: "Classification modelling report predicting hydration habits using behavioural and lifestyle metrics. Built logistic regression and decision tree models with full evaluation using Orange and Python.",
              highlights: [
                "Logistic regression & decision trees",
                "Model evaluation & confusion matrices",
                "Data preprocessing & feature analysis",
              ],
              tags: ["Machine Learning", "Python", "Data Analytics"],
              cover: analyticsCover,
              pdf: "/files/Analytics_Report.pdf",
              btnLabel: "View Report",
            },
          ].map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.2 + i * 0.2 }}
            >
              <div className="group border border-border rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-transparent hover:border-primary/30 transition-all duration-300">
                <div className="aspect-video overflow-hidden border-b border-border">
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-col gap-1.5 mb-4">
                    {project.highlights.map((h) => (
                      <span key={h} className="text-xs text-muted-foreground">{h}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 bg-secondary rounded-full text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium border border-border rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-all"
                  >
                    <Download size={14} />
                    {project.btnLabel}
                  </a>
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
