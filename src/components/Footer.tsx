import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-10 bg-[#030303] border-t border-white/[0.06]">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-4">
          <a
            href="mailto:cd.empinado@gmail.com"
            className="text-white/30 hover:text-indigo-400 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/evad-e"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white/70 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/christian-dave-empinado"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        <p className="text-white/20 text-xs">© 2026 Christian Dave Empinado</p>
      </div>
    </footer>
  );
}
