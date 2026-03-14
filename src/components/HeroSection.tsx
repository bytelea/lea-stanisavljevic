import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
          
          Data Science & AI
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
          
          Lea
          <br />
          <span className="text-gradient text-white">Stanisavljević</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-muted-foreground text-lg max-w-lg mx-auto mb-12">
          
          Exploring the intersection of data, design, and intelligent systems.
          Currently studying at TU Dublin.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-4">
          
          <a
            href="#projects"
            className="px-6 py-3 text-primary-foreground font-medium text-sm rounded-lg hover:opacity-90 transition-opacity bg-secondary-foreground">
            
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-border text-foreground font-medium text-sm rounded-lg hover:bg-secondary transition-colors">
            
            Get in Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2">
        
        <a href="#about">
          <ArrowDown size={18} className="text-muted-foreground animate-bounce" />
        </a>
      </motion.div>
    </section>);

};

export default HeroSection;