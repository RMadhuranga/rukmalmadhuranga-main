import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Wrench } from "lucide-react";

const transition = { duration: 0.8, ease: [0.23, 1, 0.32, 1] as const };

const skillCategories = [
  {
    title: "Development",
    icon: Code2,
    skills: ["React", "WordPress", "PHP", "JavaScript", "Tailwind CSS", "MySQL"],
  },
  {
    title: "Design",
    icon: Palette,
    skills: ["Figma", "Canva", "UI/UX", "Prototyping", "Wireframing", "Responsive Design"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "AWS (Basic)", "VS Code", "Postman", "Video Editing"],
  },
];

const SkillCard = ({ category, index }: { category: typeof skillCategories[0]; index: number }) => {
  const Icon = category.icon;

  return (
    <motion.div
      className="group rounded-2xl border border-foreground/10 bg-secondary/30 p-6 transition-all duration-300 hover:border-primary/35 hover:bg-secondary/45"
      initial={{ scale: 0.9, filter: "blur(10px)", opacity: 0 }}
      whileInView={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ ...transition, delay: index * 0.15 }}
    >
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="rounded-lg border border-primary/25 bg-primary/10 p-2 transition-colors duration-300 group-hover:bg-primary/20">
            <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
          </div>
          <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
        </div>

        <span className="mono-text rounded-full border border-foreground/10 bg-background/45 px-2.5 py-1 text-[10px] tracking-wider text-muted-foreground uppercase">
          {category.skills.length} skills
        </span>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="mono-text rounded-md border border-foreground/10 bg-background/35 px-3 py-1.5 text-xs text-muted-foreground transition-all duration-300 group-hover:border-foreground/20 group-hover:text-foreground/85"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-background/60">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary/70 to-accent/70"
          initial={{ width: 0 }}
          whileInView={{ width: `${72 + index * 8}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 + index * 0.1 }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
  <section id="skills" className="relative overflow-hidden py-24" ref={ref}>
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-10 top-8 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-10 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />
    </div>

    <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
      <motion.div
        initial={{ scale: 0.9, filter: "blur(10px)", opacity: 0 }}
        animate={inView ? { scale: 1, filter: "blur(0px)", opacity: 1 } : {}}
        transition={transition}
      >
        <p className="mono-text mb-3 text-sm tracking-wider text-accent uppercase">// Skills</p>
        <h2 className="mb-4 text-3xl font-bold tracking-tighter md:text-5xl">
          <span className="text-gradient">Tech Stack</span>
        </h2>
        <p className="w-full text-muted-foreground leading-relaxed">
          My toolkit blends modern frontend engineering, practical backend knowledge, and visual design skills to craft polished, user-focused digital products.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <SkillCard key={cat.title} category={cat} index={i} />
        ))}
      </div>

      
    </div>
  </section>
  );
};

export default Skills;
