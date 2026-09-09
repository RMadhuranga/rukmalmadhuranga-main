import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const transition = { duration: 0.8, ease: [0.23, 1, 0.32, 1] as const };

const milestones = [
  {
    period: "2023 – Present",
    role: "Information Technology",
    company: "Institute of Technology University of Moratuwa (ITUM)",
    details: [
      "Specializing in Software Engineering",
      "Studying full-stack development, databases, digital marketing, software development and cloud computing",
      "Engaging in collaborative group projects and research",
    ],
  },
  {
    period: "May 2025 – Dec 2025",
    role: "Web Development Intern",
    company: "Daxium Systems & Solutions",
    details: [
      "Developing modern web applications with WordPress, React.js & Tailwind CSS",
      "Creating graphic content and visual design assets",
      "Video editing for marketing and brand campaigns",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <motion.div
          initial={{ scale: 0.9, filter: "blur(10px)", opacity: 0 }}
          animate={inView ? { scale: 1, filter: "blur(0px)", opacity: 1 } : {}}
          transition={transition}
        >
          <p className="mono-text text-accent text-sm mb-3 tracking-wider uppercase">// Experience</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-12">
            <span className="text-gradient">Journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-4 md:left-8 top-0 w-px bg-gradient-to-b from-primary via-accent to-transparent"
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] as const, delay: 0.3 }}
          />

          {milestones.map((m, i) => (
            <motion.div
              key={i}
              className="relative pl-12 md:pl-20 pb-12"
              initial={{ scale: 0.9, filter: "blur(10px)", opacity: 0 }}
              animate={inView ? { scale: 1, filter: "blur(0px)", opacity: 1 } : {}}
              transition={{ ...transition, delay: 0.5 + i * 0.2 }}
            >
              <div className="absolute left-2.5 md:left-[1.625rem] top-1 w-3 h-3 rounded-full bg-primary shadow-[0_0_20px_hsl(263_85%_66%/0.5)] border-2 border-background" />

              <div className="glass-panel rounded-xl p-5 sm:p-6 md:p-8">
                <span className="mono-text text-xs text-accent mb-2 block">{m.period}</span>
                <h3 className="text-xl font-bold text-foreground mb-1">{m.role}</h3>
                <p className="text-primary font-medium mb-4">{m.company}</p>
                <ul className="space-y-2">
                  {m.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-2 text-foreground/60 text-sm">
                      <span className="text-accent mt-1.5 shrink-0">›</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
