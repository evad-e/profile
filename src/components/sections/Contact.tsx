import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Linkedin, Github, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const mailto = `mailto:cd.empinado@gmail.com?subject=${encodeURIComponent(data.get("subject") as string)}&body=${encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`)}`;
    window.location.href = mailto;
    setSent(true);
  };

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "cd.empinado@gmail.com",
      href: "mailto:cd.empinado@gmail.com",
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+63 956 039 7590",
      href: "tel:+639560397590",
      color: "text-violet-400",
      bg: "bg-violet-500/10",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Christian Dave Empinado",
      href: "https://www.linkedin.com/in/cd-empinado/",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "evad-e",
      href: "https://github.com/evad-e",
      color: "text-white/60",
      bg: "bg-white/5",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Cebu, Philippines",
      href: null,
      color: "text-rose-400",
      bg: "bg-rose-500/10",
    },
  ];

  return (
    <section id="contact" className="relative py-24 bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.03] via-transparent to-transparent pointer-events-none" />
      {/* Bottom grid fade */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.05]" />

      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-indigo-400/80 tracking-[0.2em] uppercase font-medium mb-4 block">
            Let's Connect
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            Get In Touch
          </h2>
          <p className="mt-4 text-white/40 max-w-md mx-auto">
            Open to new opportunities, freelance projects, or just a friendly chat about tech.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-white/80 font-semibold text-lg mb-6">Contact Details</h3>
            {contacts.map((contact) => {
              const Icon = contact.icon;
              const inner = (
                <div className={`flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] transition-all duration-200 ${contact.href ? "hover:border-white/15 hover:bg-white/[0.05] cursor-pointer" : "cursor-default"}`}>
                  <div className={`p-2.5 rounded-xl ${contact.bg} ${contact.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-white/35 text-xs mb-0.5">{contact.label}</p>
                    <p className="text-white/75 text-sm font-medium">{contact.value}</p>
                  </div>
                </div>
              );
              return contact.href ? (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {inner}
                </a>
              ) : (
                <div key={contact.label}>{inner}</div>
              );
            })}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <h3 className="text-white/80 font-semibold text-lg mb-6">Send a Message</h3>

            {sent ? (
              <div className="flex flex-col items-center justify-center h-64 gap-4 p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/0 border border-emerald-500/20">
                <CheckCircle className="w-12 h-12 text-emerald-400" />
                <p className="text-white/70 text-center">Your email client should have opened. Looking forward to your message!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/40 text-xs mb-1.5 tracking-wide">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/80 placeholder-white/20 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-white/40 text-xs mb-1.5 tracking-wide">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/80 placeholder-white/20 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white/40 text-xs mb-1.5 tracking-wide">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/80 placeholder-white/20 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-white/40 text-xs mb-1.5 tracking-wide">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/80 placeholder-white/20 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium text-sm hover:from-indigo-500 hover:to-violet-500 transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
