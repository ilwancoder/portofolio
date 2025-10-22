import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import WarpDrive from "../components/three/WarpDrive";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <WarpDrive />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-extrabold tracking-tight text-foreground md:text-7xl lg:text-7xl">Muhammad Ilwan
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Frontend Developer berfokus pada pembuatan antarmuka web modern
            menggunakan React, Vue.js, dan Laravel. Memiliki pemahaman dasar di
            backend dengan Node.js dan Go, serta pengalaman dalam desain UI/UX
            menggunakan Figma dan Canva.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <button
            onClick={() => scrollTo("contact")}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105 active:scale-95"
          >
            Get In Touch
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button className="group inline-flex items-center justify-center gap-2 rounded-full border bg-secondary px-6 py-3 font-semibold text-secondary-foreground transition-transform hover:scale-105 active:scale-95">
            Download CV
            <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
