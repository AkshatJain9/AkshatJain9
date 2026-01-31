import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { ContactDialog } from "@/components/ContactDialog";
import { Button } from "@/components/ui/button";

const DotPattern = () => (
  <div className="absolute top-10 right-10 grid grid-cols-6 gap-4 opacity-20 -z-10 animate-fade-in pointer-events-none">
    {Array.from({ length: 36 }).map((_, i) => (
      <div
        key={i}
        className="w-1.5 h-1.5 rounded-full bg-primary"
        style={{
          opacity: 1 - (Math.floor(i / 6) * 0.2 + (i % 6) * 0.1),
        }}
      />
    ))}
  </div>
);

const SocialLink = ({
  href,
  icon: Icon,
  label,
  onClick,
}: {
  href?: string;
  icon: any;
  label: string;
  onClick?: () => void;
}) => {
  const Component = href ? "a" : "button";
  const props = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { onClick };

  return (
    // @ts-ignore
    <Component
      {...props}
      className="group flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none"
    >
      <div className="p-3 rounded-full bg-secondary/50 border border-white/5 group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:shadow-[0_0_15px_-3px_rgba(234,88,12,0.5)] transition-all">
        <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
        {label}
      </span>
    </Component>
  );
};

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen w-full bg-background relative overflow-hidden flex items-center justify-center p-6 md:p-12">
      {/* Decorative Elements */}
      <DotPattern />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-20 right-40 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

      <main className="max-w-4xl w-full z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block text-lg md:text-xl font-medium text-primary mb-2"
            >
              Hi! My name is
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground mb-6 tracking-tight leading-none"
            >
              Akshat Jain
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl border-l-2 border-primary/20 pl-6"
            >
              I am an avid technologist & machine learning enthusiast. Currently I
              am focused on building high performance trading systems at{" "}
              <a
                href="https://sig.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 transition-colors underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
              >
                Susquehanna International Group
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.p>

            {/* Actions / Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 mt-12"
            >
              <SocialLink
                href="https://akshatjain9.github.io/Resume/Resume_JAIN.pdf"
                icon={FileText}
                label="Resume"
              />
              <SocialLink
                href="https://github.com/AkshatJain9/"
                icon={Github}
                label="GitHub"
              />
              <SocialLink
                href="https://www.linkedin.com/in/akshat-jain-155b74203/"
                icon={Linkedin}
                label="LinkedIn"
              />
              
              <ContactDialog
                trigger={
                  <button className="group flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none">
                    <div className="p-3 rounded-full bg-secondary/50 border border-white/5 group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:shadow-[0_0_15px_-3px_rgba(234,88,12,0.5)] transition-all">
                      <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      Contact
                    </span>
                  </button>
                }
              />
            </motion.div>
          </motion.div>

          {/* Optional: Profile Image or Graphic could go here for desktop layout */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.4, duration: 0.8 }}
             className="hidden lg:block w-64 h-64 rounded-full border-2 border-primary/20 bg-gradient-to-tr from-secondary/50 to-background flex items-center justify-center relative shadow-2xl shadow-primary/5"
          >
             <div className="absolute inset-2 rounded-full border border-white/5" />
             <span className="text-6xl font-display font-bold text-primary/20">AJ</span>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
