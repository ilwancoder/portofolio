// src/pages/Hero.tsx atau lokasi yang sesuai
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import WarpDrive from "../components/three/WarpDrive";
import TypewriterText from "../components/TypewriterText"; // <-- Import komponen baru

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Daftar identitas yang akan dirotasi
  const rotatingIdentities = [
    "Front-End Developer",
    "Junior Back-End Developer",
    "Graphic Designer",
    "Junior Social Media Specialist",
    "UI/UX Researcher",
  ];

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <WarpDrive />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8"> {/* Added padding for small screens */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl" // Added max-width to contain content
        >
          <h1 className="text-5xl font-extrabold tracking-tight text-foreground md:text-7xl lg:text-7xl">
            Muhammad Ilwan
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
            I'm a {" "}
            <TypewriterText // <-- Komponen Typewriter di sini
              phrases={rotatingIdentities}
              typingSpeed={80} // Kecepatan mengetik per karakter
              deletingSpeed={40} // Kecepatan menghapus per karakter
              pauseTime={1500} // Jeda sebelum menghapus/mengetik phrase baru
              className="text-primary font-semibold" // Styling untuk teks yang berubah
            />
            {/* Teks pendukung lain bisa ditambahkan di sini jika perlu */}
          </p>
          <p className="mt-2 max-w-2xl mx-auto text-base text-muted-foreground">
            "Ahli dalam membangun antarmuka web modern menggunakan React dan Vue.js. Mampu mengintegrasikan desain UI/UX (Figma/Canva), didukung pemahaman dasar di sisi backend (Node.js, Go)."
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

          <button className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-secondary px-6 py-3 font-semibold text-secondary-foreground transition-transform hover:scale-105 active:scale-95">
            Download CV
            <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;