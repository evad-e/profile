import { motion } from "framer-motion";
import { Circle, Github, Linkedin, Mail, Phone, ChevronDown, UserCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

// Profile image served from /public/profile.jpg — add your photo there
const PROFILE_IMG = import.meta.env.BASE_URL + "profile.jpg";
const available = true;
function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape delay={0.3} width={600} height={140} rotate={12} gradient="from-indigo-500/[0.15]" className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]" />
        <ElegantShape delay={0.5} width={500} height={120} rotate={-15} gradient="from-rose-500/[0.15]" className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]" />
        <ElegantShape delay={0.4} width={300} height={80} rotate={-8} gradient="from-violet-500/[0.15]" className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]" />
        <ElegantShape delay={0.6} width={200} height={60} rotate={20} gradient="from-amber-500/[0.15]" className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]" />
        <ElegantShape delay={0.7} width={150} height={40} rotate={-25} gradient="from-cyan-500/[0.15]" className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/40 via-violet-500/20 to-rose-500/40 blur-xl" />
              <div className="absolute inset-0 rounded-full border-2 border-indigo-500/30" />
              <img
                src={PROFILE_IMG}
                alt="Christian Dave Empinado"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; (e.currentTarget.nextElementSibling as HTMLElement)!.style.display = "flex"; }}
                className="relative w-full h-full rounded-full object-cover border-2 border-white/10 shadow-2xl"
              />
              {/* Fallback avatar shown if profile.jpg is not yet placed in /public/ */}
              <div style={{ display: "none" }} className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-900/60 to-violet-900/60 border-2 border-white/10 items-center justify-center">
                <UserCircle2 className="w-3/4 h-3/4 text-white/20" />
              </div>
              {/* Online indicator */}
              <div className={`${available ? '' : 'hidden'} absolute bottom-4 right-4 w-5 h-5 bg-emerald-400 rounded-full border-2 border-[#030303] shadow-lg`}>
                <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <div className="max-w-2xl text-center lg:text-left">
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className={`${available ? 'inline-flex' : 'hidden'} items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6`}
            >
              <Circle className="h-2 w-2 fill-emerald-500/80 text-emerald-500/80" />
              <span className="text-sm text-white/60 tracking-wide">Available for opportunities</span>
            </motion.div>

            <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                  Christian Dave
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                  Empinado
                </span>
              </h1>
            </motion.div>

            <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
              <p className="text-lg sm:text-xl md:text-2xl text-white/50 mb-6 font-light tracking-wide">
                Full Stack Software Engineer
              </p>
            </motion.div>

            <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible">
              <p className="text-base text-white/35 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Building robust web applications and business systems with WordPress, Laravel, ReactJS, Python, and modern cloud technologies.
              </p>
            </motion.div>

            <motion.div custom={4} variants={fadeUpVariants} initial="hidden" animate="visible" className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium text-sm tracking-wide hover:from-indigo-500 hover:to-violet-500 transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-full border border-white/[0.15] text-white/70 font-medium text-sm tracking-wide hover:border-white/30 hover:text-white transition-all duration-300"
              >
                View Projects
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div custom={5} variants={fadeUpVariants} initial="hidden" animate="visible" className="flex items-center justify-center lg:justify-start gap-4">
              <a
                href="mailto:cd.empinado@gmail.com"
                className="flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors text-sm"
                title="Email"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">cd.empinado@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/cd-empinado/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-indigo-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/evad-e"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white/80 transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="tel:+639560397590"
                className="text-white/40 hover:text-white/80 transition-colors"
                title="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Top/bottom fades */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="text-white/20 hover:text-white/50 transition-colors"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.a>
      </motion.div>
    </section>
  );
}
