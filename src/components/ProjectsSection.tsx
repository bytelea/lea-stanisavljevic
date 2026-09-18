import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Download } from "lucide-react";
import hcdCover from "@/assets/hcd-cover.jpg";
import analyticsCover from "@/assets/analytics-cover.jpg";
import infobipCover from "@/assets/infobip-cover.jpg";
import algorithmsCover from "@/assets/algorithms-cover.jpg";
import statisticsCover from "@/assets/statistics-cover.jpg";

const projects = [
  {
    title: "Property Scan",
    description:
      "AI-powered property due diligence assistant that cross-checks multiple property documents to uncover contradictions, missing evidence and potential risks for buyers. Built during the AI.WOMEN Hackathon 2026, where our team won 2nd place for Best Use of Google Cloud.",
    tags: ["Python", "FastAPI", "Google Cloud", "Vertex AI / Gemini", "Anymize AI"],
    github: "https://github.com/bytelea/property-due-diligence-assistant",
    color: "from-primary/20 to-transparent",
  },
  {
    title: "Florist Studio",
    description:
      "Full-stack Progressive Web App for independent florists to manage customers, orders, inventory, expenses, invoices and sales data, with authentication, cloud storage and cross-device synchronisation.",
    tags: ["JavaScript", "SQL", "Supabase"],
    github: "https://github.com/bytelea/floriststudio",
    color: "from-primary/15 to-transparent",
  },
  {
    title: "Movie Search Engine | Hash Map & Trie Analysis",
    description:
      "Python search engine built using Hash Map and Trie data structures implemented from scratch, supporting exact search, prefix search and autocomplete across 87,585 MovieLens records.",
    tags: ["Python", "Data Structures", "Algorithms"],
    github: "https://github.com/bytelea/Hash_Map_Trie_Analysis_in_Python",
    color: "from-primary/10 to-transparent",
  },
  {
    title: "Sorting Algorithms Analysis",
    description:
      "Implemented and benchmarked Bubble, Insertion, Selection, Quick and Merge Sort from scratch in Python, comparing performance across datasets ranging from 250 to 64,000 records.",
    tags: ["Python", "Algorithms", "Performance Analysis"],
    github: "https://github.com/bytelea/Sorting-Algorithms-Analysis-in-Python",
    color: "from-primary/20 to-transparent",
  },
  {
    title: "Weather Data Statistics",
    description:
      "Statistical analysis and visualisation of weather data in R, exploring rainfall and temperature patterns through statistical summaries and visualisations.",
    tags: ["R", "Statistics", "Data Visualisation"],
    github: "https://github.com/bytelea/weather-data-statistics",
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
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative block bg-gradient-to-br ${project.color} border border-border rounded-2xl p-8 sm:p-10 hover:border-primary/30 transition-all duration-300`}
              >
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
                  <Github size={24} className="flex-shrink-0 text-primary group-hover:text-foreground transition-colors" />
                </div>
              </a>
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
                "Primary & secondary user research",
                "Expanded personas & empathy maps",
                "As-Is vs To-Be scenario analysis",
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
            {
              title: "Competitor Research | Infobip",
              description: "Comprehensive competitor analysis for Infobip (ANAM Technologies), evaluating Twilio, Plivo, and Whispir across usability heuristics, communication channels, and web design strategies.",
              highlights: [
                "Usability heuristics evaluation",
                "Competitor comparison & analysis",
                "Communication channel innovation",
              ],
              tags: ["Market Research", "UX Analysis", "Internship"],
              cover: infobipCover,
              pdf: "/files/Infobip_Competitor_Research.pdf",
              btnLabel: "View Report",
            },
            {
              title: "Algorithms & Data Structures",
              description: "Implementing and comparing five sorting algorithms (bubble, insertion, selection, quick, merge sort), analysing execution time against theoretical time complexities using real datasets.",
              highlights: [
                "Five sorting algorithm implementations",
                "Empirical vs theoretical complexity comparison",
                "CSV dataset benchmarking & analysis",
              ],
              tags: ["Python", "Algorithms", "Data Structures"],
              cover: algorithmsCover,
              pdf: "/files/Algorithms_Data_Structures_Report.pdf",
              btnLabel: "View Report",
            },
            {
              title: "Weather Data Statistics",
              description: "Statistical analysis of historical weather data from the Athenry station using R. Covers rainfall probability, seasonal patterns, temperature trends, and time series forecasting.",
              highlights: [
                "Rainfall probability & seasonal analysis",
                "Temperature trend comparison with moving averages",
                "Built and visualised in RStudio",
              ],
              tags: ["R", "Statistics", "Data Visualization"],
              cover: statisticsCover,
              pdf: "/files/Statistics_Weather_Report.pdf",
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
                <div className="aspect-[2/1] overflow-hidden border-b border-border">
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
                    <ExternalLink size={14} />
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
