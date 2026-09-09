import { motion } from "framer-motion";
import { Code, Palette, Film } from "lucide-react";

const transition = { duration: 0.8, ease: [0.23, 1, 0.32, 1] as const };

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Full-stack web applications with React, WordPress, PHP & modern frameworks. Performance-first, responsive design.",
    color: "primary" as const,
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design with Figma prototyping, wireframing, and design systems. Creating intuitive digital experiences.",
    color: "accent" as const,
  },
  {
    icon: Film,
    title: "Video Editing",
    description: "Professional video editing for marketing, social media, and brand storytelling. Motion graphics and visual effects.",
    color: "primary" as const,
  },
];

const Services = () => (
  <section id="services" className="py-24 relative">
    <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
      <motion.div
        initial={{ scale: 0.9, filter: "blur(10px)", opacity: 0 }}
        whileInView={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={transition}
      >
        <p className="mono-text text-accent text-sm mb-3 tracking-wider uppercase">// Services</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-12">
          <span className="text-gradient">What I Do</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {services.map((s, i) => {
          const Icon = s.icon;
          const isAccent = s.color === "accent";
          return (
            <motion.div
              key={s.title}
              className="glass-panel rounded-xl p-8 group cursor-pointer relative overflow-hidden"
              initial={{ scale: 0.9, filter: "blur(10px)", opacity: 0 }}
              whileInView={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...transition, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isAccent ? 'bg-accent/[0.03]' : 'bg-primary/[0.03]'}`} />
              <div className="relative z-10">
                <div className={`p-3 rounded-xl w-fit mb-5 border transition-all duration-300 ${
                  isAccent
                    ? 'bg-accent/10 border-accent/20 group-hover:bg-accent/20 group-hover:shadow-[0_0_20px_hsl(190_90%_42%/0.2)]'
                    : 'bg-primary/10 border-primary/20 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(263_85%_66%/0.2)]'
                }`}>
                  <Icon className={`w-6 h-6 ${isAccent ? 'text-accent' : 'text-primary'}`} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-foreground/50 text-sm leading-relaxed md:opacity-0 md:max-h-0 md:group-hover:opacity-100 md:group-hover:max-h-40 overflow-hidden transition-all duration-300">
                  {s.description}
                </p>
                <p className="hidden md:block text-foreground/50 text-sm leading-relaxed md:group-hover:hidden">
                  Hover to learn more
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
