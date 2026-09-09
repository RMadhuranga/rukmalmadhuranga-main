import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Send } from "lucide-react";

const transition = { duration: 0.8, ease: [0.23, 1, 0.32, 1] as const };

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "94783438707";
    const text = `Hi Rukmal, I found your portfolio.%0A%0AName: ${encodeURIComponent(form.name)}%0AEmail: ${encodeURIComponent(form.email)}%0AMessage: ${encodeURIComponent(form.message)}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <motion.div
          initial={{ scale: 0.9, filter: "blur(10px)", opacity: 0 }}
          whileInView={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
        >
          <p className="mono-text text-accent text-sm mb-3 tracking-wider uppercase">// Contact</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-12">
            <span className="text-gradient">Get in Touch</span>
          </h2>
        </motion.div>

        <motion.div
          className="glass-panel rounded-xl p-5 sm:p-8 md:p-12"
          initial={{ scale: 0.9, filter: "blur(10px)", opacity: 0 }}
          whileInView={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ ...transition, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Let's build something great</h3>
              <p className="text-foreground/50 text-sm leading-relaxed mb-6">
                I'm always open to new opportunities and collaborations. 
                Whether you need a website, design work, or video editing let's talk.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                <MapPin className="w-4 h-4 text-accent" strokeWidth={1.5} />
                Hanguranketha, Sri Lanka
              </div>
              <div className="flex gap-3 mt-6">
                <a
                  href="https://www.linkedin.com/in/rukmal-madhuranga/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg glass-panel hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_hsl(263_85%_66%/0.2)]"
                >
                  <svg className="w-5 h-5 text-foreground/60" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a
                  href="https://github.com/RMadhuranga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg glass-panel hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_hsl(263_85%_66%/0.2)]"
                >
                  <svg className="w-5 h-5 text-foreground/60" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-foreground/[0.06] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 focus:shadow-[0_0_15px_hsl(263_85%_66%/0.1)] transition-all duration-300 text-sm"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-foreground/[0.06] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 focus:shadow-[0_0_15px_hsl(263_85%_66%/0.1)] transition-all duration-300 text-sm"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-foreground/[0.06] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 focus:shadow-[0_0_15px_hsl(263_85%_66%/0.1)] transition-all duration-300 text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg border border-primary/30 bg-primary/10 text-foreground backdrop-blur-md transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_25px_hsl(263_85%_66%/0.3)] hover:bg-primary/20 font-medium text-sm flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
