import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Wrench, Globe } from "lucide-react";

const skills = [
  {
    category: "Web Development",
    icon: Globe,
    color: "from-indigo-500/20 to-indigo-500/5",
    border: "border-indigo-500/20",
    iconColor: "text-indigo-400",
    items: ["PHP", "Laravel", "HTML", "CSS", "JavaScript", "ReactJS", "SQL", "WordPress"],
  },
  {
    category: "Programming Languages",
    icon: Code2,
    color: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/20",
    iconColor: "text-violet-400",
    items: ["Python", "C/C++", "Java", "TypeScript"],
  },
  {
    category: "Cloud & Data Tools",
    icon: Server,
    color: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/20",
    iconColor: "text-cyan-400",
    items: ["Docker", "Microsoft Azure", "Databricks SQL", "MLflow Integration", "GitHub"],
  },
  {
    category: "CRM & Platforms",
    icon: Wrench,
    color: "from-rose-500/20 to-rose-500/5",
    border: "border-rose-500/20",
    iconColor: "text-rose-400",
    items: ["HubSpot", "Odoo", "Monday.com", "Go High Level", "Trello", "Jira", "ERPNext"],
  },
  {
    category: "Power Platform",
    icon: Wrench,
    color: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-500/20",
    iconColor: "text-amber-400",
    items: ["Power Apps", "Power Automate", "Power BI", "SharePoint Integration"],
  },
  {
    category: "AI & Professional",
    icon: Code2,
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
    iconColor: "text-emerald-400",
    items: ["ChatGPT", "Claude AI", "GitHub Copilot", "Database Design", "System Documentation", "Cross-Functional Collaboration"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-24 bg-[#030303]">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-indigo-400/80 tracking-[0.2em] uppercase font-medium mb-4 block">
            Technical Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-white/40 max-w-lg mx-auto">
            A broad toolkit spanning frontend, backend, cloud infrastructure, and business platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative p-6 rounded-2xl bg-gradient-to-b ${group.color} border ${group.border} backdrop-blur-sm hover:border-opacity-50 transition-all duration-300 group`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2 rounded-xl bg-white/5 ${group.iconColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-white/80 font-semibold text-sm tracking-wide">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/60 text-xs tracking-wide hover:bg-white/[0.08] hover:text-white/80 transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
