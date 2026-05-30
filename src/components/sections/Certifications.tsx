import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "HubSpot CRM Certification",
    issuer: "HubSpot Academy",
    category: "CRM",
    color: "from-orange-500/20 to-orange-500/0",
    border: "border-orange-500/20",
    iconColor: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    name: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    category: "Cloud",
    color: "from-blue-500/20 to-blue-500/0",
    border: "border-blue-500/20",
    iconColor: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    name: "Power Platform Fundamentals",
    issuer: "Microsoft",
    category: "Power Platform",
    color: "from-violet-500/20 to-violet-500/0",
    border: "border-violet-500/20",
    iconColor: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    name: "Docker Essentials",
    issuer: "Docker",
    category: "DevOps",
    color: "from-cyan-500/20 to-cyan-500/0",
    border: "border-cyan-500/20",
    iconColor: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    name: "GitHub Actions CI/CD",
    issuer: "GitHub",
    category: "DevOps",
    color: "from-emerald-500/20 to-emerald-500/0",
    border: "border-emerald-500/20",
    iconColor: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    name: "International Conference Publication",
    issuer: "ICO 2023 – Hua Hin, Thailand",
    category: "Research",
    color: "from-rose-500/20 to-rose-500/0",
    border: "border-rose-500/20",
    iconColor: "text-rose-400",
    bg: "bg-rose-500/10",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="relative py-24 bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-indigo-400/80 tracking-[0.2em] uppercase font-medium mb-4 block">
            Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            Achievements &amp; Certifications
          </h2>
          <p className="mt-4 text-white/40 max-w-lg mx-auto">
            Validated expertise across cloud, DevOps, CRM platforms, and academic research.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`p-6 rounded-2xl bg-gradient-to-br ${cert.color} border ${cert.border} group hover:border-opacity-60 transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-2.5 rounded-xl ${cert.bg} ${cert.iconColor}`}>
                  <Award className="w-5 h-5" />
                </div>
                <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-white/40 transition-colors" />
              </div>

              <span className={`text-xs font-medium ${cert.iconColor} tracking-wide uppercase mb-2 block`}>
                {cert.category}
              </span>
              <h3 className="text-white/85 font-semibold text-sm leading-snug mb-1">
                {cert.name}
              </h3>
              <p className="text-white/35 text-xs">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
