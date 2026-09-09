import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpeg";
import cvFile from "@/assets/cv/Rukmal Madhuranga.pdf";

const roles = ["Full-Stack Developer", "UI/UX Designer", "Video Editor"];

const Typewriter = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const current = roles[roleIndex];
    
    if (!deleting && charIndex < current.length) {
      timeoutRef.current = setTimeout(() => setCharIndex(c => c + 1), 70);
    } else if (!deleting && charIndex === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 1700);
    } else if (deleting && charIndex > 0) {
      timeoutRef.current = setTimeout(() => setCharIndex(c => c - 1), 35);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex(i => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [charIndex, deleting, roleIndex]);

  return (
    <span className="mono-text text-accent">
      {roles[roleIndex].substring(0, charIndex)}
      <span className="cursor-blink text-primary">_</span>
    </span>
  );
};

const transition = { duration: 0.8, ease: [0.23, 1, 0.32, 1] as const };

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Built", value: "20+" },
  { label: "Open For", value: "Freelance" },
];

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/45 via-background/55 to-background/90" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute top-1/3 -right-16 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-24 pb-12 sm:pt-28 sm:pb-14 md:pt-36 md:pb-20">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="text-left">
            <motion.div
              className="inline-flex flex-wrap items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-xs text-primary mono-text tracking-wider uppercase"
              initial={{ scale: 0.9, filter: "blur(10px)", opacity: 0 }}
              animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
              transition={{ ...transition, delay: 0.15 }}
            >
              <Sparkles className="h-3.5 w-3.5 shrink-0" />
              Software Engineering @ Moratuwa
            </motion.div>

            <motion.h1
              className="mt-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              initial={{ scale: 0.9, filter: "blur(10px)", opacity: 0 }}
              animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
              transition={{ ...transition, delay: 0.3 }}
            >
              <span className="text-gradient">RUKMAL</span>
              <br />
              <span className="text-foreground">MADHURANGA</span>
            </motion.h1>

            <motion.div
              className="mt-4 text-base sm:text-lg md:text-xl h-7 sm:h-8"
              initial={{ scale: 0.9, filter: "blur(10px)", opacity: 0 }}
              animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
              transition={{ ...transition, delay: 0.45 }}
            >
              <Typewriter />
            </motion.div>

            <motion.p
              className="mt-6 max-w-xl text-muted-foreground leading-relaxed"
              initial={{ scale: 0.9, filter: "blur(10px)", opacity: 0 }}
              animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
              transition={{ ...transition, delay: 0.55 }}
            >
              I craft modern, performance-focused digital experiences that blend clean engineering with polished visuals.
            </motion.p>

            <motion.div
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
              initial={{ scale: 0.9, filter: "blur(10px)", opacity: 0 }}
              animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
              transition={{ ...transition, delay: 0.7 }}
            >
              <a
                href={cvFile}
                download="Rukmal-Madhuranga-CV.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/40 bg-primary/15 px-6 py-3 font-medium text-foreground transition-all duration-300 hover:border-primary/70 hover:bg-primary/25 hover:shadow-[0_0_25px_hsl(263_85%_66%/0.35)] text-sm sm:text-base"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
              <a
                href="https://www.linkedin.com/in/rukmal-madhuranga/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-foreground/20 bg-foreground/5 text-foreground transition-all duration-300 hover:border-foreground/40 hover:bg-foreground/10"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/RMadhuranga"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-foreground/20 bg-foreground/5 text-foreground transition-all duration-300 hover:border-foreground/40 hover:bg-foreground/10"
                aria-label="GitHub profile"
              >
                <Github className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          <motion.div
            className="relative w-full lg:ml-auto lg:max-w-[480px]"
            initial={{ scale: 0.9, filter: "blur(10px)", opacity: 0 }}
            animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
            transition={{ ...transition, delay: 0.8 }}
          >
            <div className="glass-panel rounded-2xl p-4 sm:p-5 md:p-6">
              <div className="mb-5 flex items-center justify-between text-xs mono-text text-muted-foreground">
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-primary">status: online</span>
                
              </div>

              <div className="rounded-xl border border-foreground/10 bg-secondary/30 p-3 sm:p-4 mono-text text-xs sm:text-sm leading-relaxed text-foreground/90">
                <p className="text-primary">const developer = &#123;</p>
                <p className="pl-4">name: &quot;Rukmal&quot;,</p>
                <p className="pl-4">focus: &quot;Web Experiences&quot;,</p>
                <p className="pl-4">stack: ["React", &quot;TypeScript&quot;, &quot;Node&quot;]</p>
                <p className="text-primary">&#125;;</p>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-foreground/10 bg-background/40 px-3 py-4 text-center"
                  >
                    <p className="text-lg font-semibold text-foreground">{item.value}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground mono-text">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
