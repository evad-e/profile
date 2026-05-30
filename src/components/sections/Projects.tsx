import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Globe, Server, Cpu } from "lucide-react";

const projects = [
  {
    title: "80+ WordPress Website Launches",
    description:
      "Contributed to the launch and ongoing maintenance of 80+ client WordPress websites, delivering custom theme and plugin development, performance optimizations, troubleshooting, and post-launch support.",
    tags: ["WordPress", "PHP", "HTML/CSS", "Performance", "SEO"],
    icon: Globe,
    color: "from-indigo-500/15 to-indigo-500/0",
    border: "border-indigo-500/25",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10",
    highlight: "80+ Launches",
  },
  {
    title: "Laravel Client-Facing Business Systems",
    description:
      "Developed client-facing systems for product management, lead management, and inventory tracking with API connectivity using Laravel. Implemented refined front-end designs with HTML and CSS.",
    tags: ["Laravel", "PHP", "API Integration", "MySQL", "HTML/CSS"],
    icon: Server,
    color: "from-violet-500/15 to-violet-500/0",
    border: "border-violet-500/25",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10",
    highlight: "Full Stack",
  },
  {
    title: "ERP Feature Development – ERPNext",
    description:
      "Designed and implemented 30+ ERP software features using Python, JavaScript, and SQL at Bizkit Technologies. Built dashboards for product tracking and inventory reconciliation improving operational accuracy.",
    tags: ["Python", "JavaScript", "SQL", "ERPNext", "Odoo"],
    icon: Cpu,
    color: "from-rose-500/15 to-rose-500/0",
    border: "border-rose-500/25",
    iconColor: "text-rose-400",
    iconBg: "bg-rose-500/10",
    highlight: "30+ Features",
  },
  {
    title: "PowerBI & Azure MLflow Automation",
    description:
      "At Lexmark R&D, automated data processing flows inside a PowerBI dashboard using Power Automate — reducing processing time by 60%. Integrated Azure MLflow with Power Apps to boost sales team productivity.",
    tags: ["Power Automate", "Power BI", "Azure", "MLflow", "Power Apps"],
    icon: Server,
    color: "from-cyan-500/15 to-cyan-500/0",
    border: "border-cyan-500/25",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    highlight: "60% Faster",
  },
  {
    title: "Local Dev Environment with Docker",
    description:
      "Built an internal Docker-based local development environment with automation scripts to simplify setup workflows and improve developer productivity across the Dealer Lux engineering team.",
    tags: ["Docker", "DevOps", "Bash/Shell", "Automation"],
    icon: Server,
    color: "from-amber-500/15 to-amber-500/0",
    border: "border-amber-500/25",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10",
    highlight: "DevOps",
  },
  {
    title: "Cebuano-English Code-Switching Speech Detection",
    description:
      "Published research on detecting Cebuano-English code-switching speech using Support Vector Machine (SVM) algorithms, presented at the 6th International Conference on Intelligent Computing & Optimization 2023 in Hua Hin, Thailand.",
    tags: ["Python", "SVM", "Machine Learning", "NLP", "Research"],
    icon: Cpu,
    color: "from-emerald-500/15 to-emerald-500/0",
    border: "border-emerald-500/25",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    highlight: "Published",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-24 bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-indigo-400/80 tracking-[0.2em] uppercase font-medium mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            Featured Projects
          </h2>
          <p className="mt-4 text-white/40 max-w-lg mx-auto">
            Real-world systems and applications built across multiple companies and platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group relative p-6 rounded-2xl bg-gradient-to-br ${project.color} border ${project.border} hover:border-opacity-60 transition-all duration-300 flex flex-col`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2.5 rounded-xl ${project.iconBg} ${project.iconColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-xs font-semibold ${project.iconColor} px-2 py-1 rounded-full bg-white/[0.05] border border-white/[0.08]`}>
                    {project.highlight}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-white/90 font-semibold text-base mb-3 leading-snug">
                  {project.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.07] text-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover link icons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <Github className="w-4 h-4 text-white/30" />
                  <ExternalLink className="w-4 h-4 text-white/30" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/evad-e"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/[0.12] text-white/50 text-sm hover:border-white/25 hover:text-white/80 transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
