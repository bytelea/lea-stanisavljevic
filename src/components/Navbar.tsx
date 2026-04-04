import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
{ label: "Home", href: "#home" },
{ label: "About", href: "#about" },
{ label: "Projects", href: "#projects" },
{ label: "Contact", href: "#contact" }];


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-display text-lg font-bold tracking-tight">Lea Stan

        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
          <li key={item.href}>
              <a
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              
                {item.label}
              </a>
            </li>
          )}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground">
          
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden bg-background border-b border-border">
          
            <ul className="px-6 py-4 space-y-3">
              {navItems.map((item) =>
            <li key={item.href}>
                  <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                
                    {item.label}
                  </a>
                </li>
            )}
            </ul>
          </motion.div>
        }
      </AnimatePresence>
    </motion.nav>);

};

export default Navbar;