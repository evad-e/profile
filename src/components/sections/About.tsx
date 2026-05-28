import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, MapPin, Calendar } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-500/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-indigo-400/80 tracking-[0.2em] uppercase font-medium mb-4 block">
            Who I Am
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            About Me
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="text-white/60 text-base leading-relaxed">
                Full Stack Software Engineer experienced in building and maintaining web applications, WordPress websites, and business systems using{" "}
                <span className="text-indigo-400">Laravel, PHP, ReactJS, Python,</span> and{" "}
                <span className="text-indigo-400">SQL</span>.
              </p>
              <p className="text-white/60 text-base leading-relaxed">
                Skilled in API integrations, Docker, Microsoft Azure, and both modern and legacy systems. Strong background in client collaboration, end-to-end project ownership, and using AI tools like{" "}
                <span className="text-violet-400">ChatGPT</span> and{" "}
                <span className="text-violet-400">Claude AI</span> to improve development workflows and productivity.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { value: "80+", label: "Sites Launched" },
                  { value: "30+", label: "ERP Features" },
                  { value: "3+", label: "Years Experience" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                    <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-violet-300">
                      {stat.value}
                    </div>
                    <div className="text-white/40 text-xs mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education & Publication */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="space-y-5"
          >
            {/* Education */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-indigo-500/0 border border-indigo-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-white font-semibold">Education</h3>
              </div>
              <div className="space-y-1">
                <p className="text-white/80 font-medium">Bachelor of Science, Computer Science</p>
                <div className="flex items-center gap-1.5 text-white/50 text-sm">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>University of San Carlos</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/40 text-xs">
                  <MapPin className="w-3 h-3" />
                  <span>Cebu, Philippines</span>
                  <span className="mx-1">•</span>
                  <Calendar className="w-3 h-3" />
                  <span>Aug 2019 – May 2023</span>
                </div>
              </div>
            </div>

            {/* Publication */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-rose-500/10 to-rose-500/0 border border-rose-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-rose-500/10 text-rose-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-white font-semibold">Publication</h3>
              </div>
              <p className="text-white/70 text-sm font-medium mb-2">
                Cebuano-English Code-Switching Speech Detection through Support Vector Machine
              </p>
              <p className="text-white/40 text-xs leading-relaxed">
                6th International Conference on Intelligent Computing &amp; Optimization 2023
                <br />
                Hua Hin, Thailand — December 2023
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
