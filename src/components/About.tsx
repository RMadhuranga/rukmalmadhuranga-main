import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const transition = { duration: 0.8, ease: [0.23, 1, 0.32, 1] as const };

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative overflow-hidden py-24" ref={ref}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 left-1/4 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-16 right-16 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ scale: 0.9, filter: "blur(10px)", opacity: 0 }}
          animate={inView ? { scale: 1, filter: "blur(0px)", opacity: 1 } : {}}
          transition={{ ...transition, delay: 0.1 }}
        >
          <p className="mono-text mb-3 text-sm tracking-wider text-accent uppercase">// About</p>
          <h2 className="mb-4 text-3xl font-bold tracking-tighter md:text-5xl">
            <span className="text-gradient">Who I Am</span>
            <br />
            <span className="text-foreground">and What I Build</span>
          </h2>
          <p className="w-full text-muted-foreground leading-relaxed">
            Software Engineering student at the University of Moratuwa with a passion for Full-Stack Development. I specialize in turning complex logic into seamless, high-performance web applications using React, PHP, and WordPress.
          </p>
        </motion.div>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-5">
          <motion.div
            className="glass-panel rounded-2xl p-7 md:p-9 lg:col-span-3"
            initial={{ scale: 0.9, filter: "blur(10px)", opacity: 0 }}
            animate={inView ? { scale: 1, filter: "blur(0px)", opacity: 1 } : {}}
            transition={{ ...transition, delay: 0.25 }}
          >
            <p className="mb-5 text-lg leading-relaxed text-foreground/85">
              I specialize in building high-performance, scalable web applications with a focus on clean architecture and modern frontend systems.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              As a Software Engineering student, I combine a strong technical foundation in WordPress, React.js, and PHP with a deep understanding of UI/UX principles to deliver seamless digital experiences. From designing intuitive interfaces in Figma to implementing complex logic and motion polish, I enjoy turning ideas into robust, beautiful products that users love to interact with.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Sri Lanka 🇱🇰", "Full-Stack", "UI/UX Mindset", "Creative Developer"].map((tag) => (
                <span
                  key={tag}
                  className="mono-text rounded-full border border-foreground/10 bg-background/40 px-3 py-1.5 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="space-y-4 lg:col-span-2"
            initial={{ scale: 0.9, filter: "blur(10px)", opacity: 0 }}
            animate={inView ? { scale: 1, filter: "blur(0px)", opacity: 1 } : {}}
            transition={{ ...transition, delay: 0.35 }}
          >
            <div className="rounded-2xl border border-foreground/10 bg-secondary/30 p-5">
              <p className="mono-text text-xs tracking-wider text-primary uppercase">Design</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                
Crafting immersive digital experiences by merging high-fidelity UI/UX design with performance-driven React and WordPress development. I am focused on pixel-perfect precision, motion aesthetics, and building interfaces that are as beautiful as they are functional.
              </p>
            </div>

            <div className="rounded-2xl border border-foreground/10 bg-secondary/30 p-5">
              <p className="mono-text text-xs tracking-wider text-accent uppercase">Video Editing & Marketing</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                I create high-impact visual stories using CapCut, specifically tailored for Digital Marketing. My focus is on delivering seamless transitions and strategic content that enhances brand identity and engages modern audiences across all digital platforms.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
