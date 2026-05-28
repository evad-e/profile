import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Dealer Lux",
    role: "Full Stack Software Engineer",
    period: "Nov 2023 – Present",
    type: "Full-time",
    color: "from-indigo-500/20 to-indigo-500/0",
    border: "border-indigo-500/30",
    dot: "bg-indigo-500",
    bullets: [
      "Collaborated with clients and internal teams to successfully complete 80+ WordPress website launches, including post-launch support, technical maintenance, troubleshooting, and performance optimization.",
      "Developed client-facing systems for product management, lead management, inventory tracking and API connectivity through Laravel and applying HTML and CSS for refined front-end designs.",
      "Developed internal tools such as a local development environment using Docker and implemented automation scripts to simplify setup and improve developer productivity.",
    ],
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "Jan 2025 – Present",
    type: "Freelance",
    color: "from-violet-500/20 to-violet-500/0",
    border: "border-violet-500/30",
    dot: "bg-violet-500",
    bullets: [
      "Built and maintained business websites using WordPress, Squarespace, and GoDaddy platforms, delivering customized solutions aligned with client goals and branding.",
      "Managed projects end-to-end, including client communication, planning, implementation, deployment, revisions, and post-launch support.",
      "Provided proactive recommendations to improve website usability, SEO readiness, conversions, and long-term maintainability.",
      "Built long-term client trust through consistent communication, responsiveness, and a solutions-oriented approach.",
    ],
  },
  {
    company: "Bizkit Technologies Inc.",
    role: "Full Stack Software Engineer",
    period: "May 2023 – Dec 2023",
    type: "Full-time",
    color: "from-rose-500/20 to-rose-500/0",
    border: "border-rose-500/30",
    dot: "bg-rose-500",
    bullets: [
      "Designed and implemented 30+ ERP software features using Python, JavaScript, and SQL, improving performance, scalability, and user experience.",
      "Built and optimized dashboards for product tracking and inventory reconciliation using Python and SQL, improving operational accuracy and analytics.",
      "Built GitHub automation pipelines and testing environments to streamline deployments and support QA.",
    ],
  },
  {
    company: "Lexmark Research and Development Co.",
    role: "Data-to-Value Intern",
    period: "Oct 2022 – March 2023",
    type: "Internship",
    color: "from-cyan-500/20 to-cyan-500/0",
    border: "border-cyan-500/30",
    dot: "bg-cyan-500",
    bullets: [
      "Automated data processing flows within a PowerBI dashboard using Power Automate, reducing processing time by 60% and improving data refresh efficiency.",
      "Integrated Azure MLflow with Power Apps, boosting sales team productivity through automation and better data accessibility.",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-24 bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-indigo-400/80 tracking-[0.2em] uppercase font-medium mb-4 block">
            Work History
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            Professional Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-white/[0.06]" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Dot */}
                <div className={`absolute left-4 md:left-6 top-6 w-3 h-3 rounded-full ${exp.dot} ring-4 ring-[#030303]`} />

                <div className={`p-6 rounded-2xl bg-gradient-to-br ${exp.color} border ${exp.border} transition-all duration-300 hover:border-opacity-60`}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase className="w-4 h-4 text-white/40" />
                        <h3 className="text-white font-semibold text-lg">{exp.company}</h3>
                      </div>
                      <p className="text-white/60 text-sm font-medium">{exp.role}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                      <div className="flex items-center gap-1 text-white/40 text-xs">
                        <Calendar className="w-3 h-3" />
                        <span>{exp.period}</span>
                      </div>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/40">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-2 text-white/50 text-sm leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0 mt-2" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
