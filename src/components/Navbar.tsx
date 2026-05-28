import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#030303]/80 backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="p-1.5 rounded-lg bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-500/20 group-hover:border-indigo-500/40 transition-colors">
            <Code2 className="w-4 h-4 text-indigo-400" />
          </div>
          <span className="text-white/80 font-semibold text-sm tracking-wide group-hover:text-white transition-colors">
            CDE
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-1.5 text-sm text-white/50 hover:text-white/90 rounded-lg hover:bg-white/[0.05] transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="mailto:cd.empinado@gmail.com"
          className="hidden md:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-600/70 to-violet-600/70 text-white text-xs font-medium hover:from-indigo-500 hover:to-violet-500 transition-all duration-300 border border-indigo-500/30"
        >
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white/60 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#030303]/95 backdrop-blur-xl border-t border-white/[0.06]"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm text-white/60 hover:text-white rounded-xl hover:bg-white/[0.05] transition-all"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="mailto:cd.empinado@gmail.com"
                className="mt-2 px-4 py-3 text-center rounded-xl bg-gradient-to-r from-indigo-600/70 to-violet-600/70 text-white text-sm font-medium"
              >
                Hire Me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
