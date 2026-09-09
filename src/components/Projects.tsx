import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const transition = { duration: 0.8, ease: [0.23, 1, 0.32, 1] as const };

const projects = [
  {
    title: "WP Quick Launch",
    description: "WordPress plugin built to automate site setup, cleanup defaults, configure SEO permalinks, and install themes.",
    tech: ["PHP", "WordPress API", "AJAX", "JavaScript"],
    link: "https://github.com/RMadhuranga/WP-Quick-Launch",
    color: "accent" as const,
  },
  {
    title: "Dilsh Fashion",
    description: "E-commerce platform built on WordPress with modern product catalog and checkout.",
    tech: ["WordPress", "WooCommerce", "CSS"],
    link: "https://dilsh.lk/",
    color: "primary" as const,
  },
  {
    title: "Eco Touch",
    description: "Car wash service platform with booking system and responsive design.",
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
    link: "https://ecotouch.lk/",
    color: "accent" as const,
  },
  {
    title: "EUE Consultancy",
    description: "Professional consultancy firm website with service pages and contact integration.",
    tech: ["React.js", "Tailwind CSS", "TypeScript"],
    link: "https://www.eueconsultancy.com/",
    color: "primary" as const,
  },
  {
    title: "Dad Travels",
    description: "Travel agency website with tour packages and destination showcases.",
    tech: ["WordPress", "Custom Theme", "SEO"],
    link: "https://www.dadtravels.lk/",
    color: "accent" as const,
  },
  {
    title: "Kangara Holdings",
    description: "Corporate SEO optimized website with clean branding and content strategy.",
    tech: ["WordPress", "SEO", "Analytics"],
    link: "https://kangaraholdings.com/",
    color: "primary" as const,
  },
  {
    title: "Eco-Center",
    description: "React platform with real-time inventory management and GPS tracking integration.",
    tech: ["React.js", "Node.js", "GPS API", "Real-time"],
    link: null,
    color: "accent" as const,
  },
  {
    title: "Online Food Ordering",
    description: "Full stack food ordering system with CRUD operations and order management.",
    tech: ["PHP", "MySQL", "JavaScript", "CSS"],
    link: null,
    color: "primary" as const,
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-150, 150], [5, -5]);
  const rotateY = useTransform(x, [-150, 150], [-5, 5]);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleLeave = () => { x.set(0); y.set(0); };

  const isAccent = project.color === "accent";

  return (
    <motion.div
      ref={ref}
      className="glass-panel rounded-xl p-6 group cursor-pointer relative overflow-hidden"
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      initial={{ scale: 0.9, filter: "blur(10px)", opacity: 0 }}
      whileInView={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ ...transition, delay: (index % 2) * 0.15 }}
    >
      {/* Glow on hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isAccent ? 'bg-accent/[0.03]' : 'bg-primary/[0.03]'}`} />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-colors duration-300">
            {project.title}
          </h3>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border transition-all duration-300 ${
                isAccent
                  ? 'border-accent/20 hover:border-accent/50 hover:shadow-[0_0_15px_hsl(190_90%_42%/0.3)] text-accent'
                  : 'border-primary/20 hover:border-primary/50 hover:shadow-[0_0_15px_hsl(263_85%_66%/0.3)] text-primary'
              } bg-transparent hover:bg-foreground/5`}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
            </a>
          )}
        </div>

        <p className="text-foreground/50 text-sm mb-5 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`mono-text text-[10px] px-2.5 py-1 rounded-md border ${
                isAccent ? 'border-accent/10 text-accent/70' : 'border-primary/10 text-primary/70'
              } bg-foreground/[0.02]`}
            >
              {t}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 mt-5 mono-text text-xs transition-all duration-300 ${
              isAccent ? 'text-accent/60 hover:text-accent' : 'text-primary/60 hover:text-primary'
            }`}
          >
            Live View
            <span className={`inline-block w-1.5 h-1.5 rounded-full ${isAccent ? 'bg-accent animate-pulse-glow' : 'bg-primary'}`} />
          </a>
        )}

        {!project.link && (
          <span className="inline-flex items-center gap-2 mt-5 mono-text text-xs text-muted-foreground">
            Group Project
          </span>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => (
  <section id="projects" className="py-24 relative">
    <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
      <motion.div
        initial={{ scale: 0.9, filter: "blur(10px)", opacity: 0 }}
        whileInView={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={transition}
      >
        <p className="mono-text text-accent text-sm mb-3 tracking-wider uppercase">// Projects</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-12">
          <span className="text-gradient">Selected Work</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;