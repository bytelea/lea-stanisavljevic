import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const links = [
  {
    label: "Email",
    href: "mailto:lea@example.com",
    icon: Mail,
    value: "lea@example.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lea-stanisavljevic/",
    icon: Linkedin,
    value: "linkedin.com/in/lea-stanisavljevic",
  },
  {
    label: "GitHub",
    href: "https://github.com/lea-stanisavljevic",
    icon: Github,
    value: "github.com/lea-stanisavljevic",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Contact</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Let's connect
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Open to opportunities, collaborations, and conversations about data science and AI.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto space-y-4"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 border border-border rounded-xl hover:border-primary/30 hover:bg-secondary/50 transition-all duration-200 group"
            >
              <div className="flex items-center gap-4">
                <link.icon size={20} className="text-primary" />
                <div>
                  <p className="text-sm font-medium">{link.label}</p>
                  <p className="text-xs text-muted-foreground">{link.value}</p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
