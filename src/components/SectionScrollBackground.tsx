import { motion, useScroll, useTransform } from "framer-motion";

const SectionScrollBackground = () => {
  const { scrollY } = useScroll();

  // Hidden during the hero section, then fades in for all following sections.
  const layerOpacity = useTransform(scrollY, [0, 500, 900], [0, 0, 1]);

  // Subtle parallax movement while scrolling.
  const violetY = useTransform(scrollY, [0, 2500], [0, -220]);
  const cyanY = useTransform(scrollY, [0, 2500], [0, 180]);
  const dotsY = useTransform(scrollY, [0, 2500], [0, -140]);
  const dotsX = useTransform(scrollY, [0, 2500], [0, 90]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ opacity: layerOpacity }}
    >
      <motion.div
        className="absolute -top-36 left-[12%] h-[28rem] w-[28rem] rounded-full bg-primary/12 blur-3xl"
        style={{ y: violetY }}
      />

      <motion.div
        className="absolute top-[35%] right-[8%] h-[24rem] w-[24rem] rounded-full bg-accent/10 blur-3xl"
        style={{ y: cyanY }}
      />

      <motion.div
        className="absolute inset-0 opacity-40"
        style={{ x: dotsX, y: dotsY }}
      >
        <motion.div
          className="h-full w-full bg-[radial-gradient(circle,hsl(var(--primary)/0.30)_1px,transparent_1.7px)] bg-[size:26px_26px]"
          animate={{ opacity: [0.18, 0.32, 0.18] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 opacity-25 mix-blend-screen"
        style={{ x: dotsX }}
        animate={{ backgroundPositionY: ["0px", "140px", "0px"] }}
        transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
      >
        <div className="h-full w-full bg-[radial-gradient(circle,hsl(var(--accent)/0.28)_1px,transparent_1.8px)] bg-[size:40px_40px]" />
      </motion.div>
    </motion.div>
  );
};

export default SectionScrollBackground;