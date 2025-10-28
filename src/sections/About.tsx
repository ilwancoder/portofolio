import { motion } from "framer-motion";
import { Code, Cpu, Palette, LineChart } from "lucide-react";

// Asumsikan Anda mengimpor gambar seperti ini jika menggunakan bundler seperti Vite/Next.js
import myPhoto from '../lib/foto.png';

const skills = [
  {
    icon: <Code className="h-6 w-6 text-primary" />,
    name: "Frontend Developer",
    description:
      "Berpengalaman dengan React, Vue.js, dan Laravel. Fokus pada pembuatan landing page yang interaktif dan clean.",
  },
  {
    icon: <Cpu className="h-6 w-6 text-primary" />,
    name: "Backend Basics",
    description:
      "Pernah mengerjakan proyek dengan Node.js dan Go Language. Memahami alur dasar API & integrasi data.",
  },
  {
    icon: <Palette className="h-6 w-6 text-primary" />,
    name: "Graphic Design",
    description:
      "Aktif membuat desain untuk media sosial seperti poster dan konten IG menggunakan Figma dan Canva.",
  },
  {
    icon: <LineChart className="h-6 w-6 text-primary" />,
    name: "UI/UX Research",
    description:
      "Pemula di bidang UI/UX. Pernah melakukan riset dan analisa data pengguna untuk menciptakan pengalaman desain yang lebih memuaskan.",
  },
];

const About = () => {
  return (
    <section id="about" className="container mx-auto py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16" // Tambahkan margin bottom
      >
        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          About Me
        </h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0 w-full lg:w-1/3 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-primary/20">
            {/* Menggunakan path relatif ke folder public atau import jika menggunakan bundler */}
            <img
              src={myPhoto}
              alt="Profil Saya"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:w-2/3 text-center lg:text-left"
        >
          <p className="max-w-prose text-lg text-muted-foreground leading-relaxed">
            "Saya adalah seorang Pengembang Frontend (Frontend Developer) yang berpengalaman dalam membangun antarmuka web. Saya memiliki pemahaman dasar dalam pengembangan Backend dan juga aktif dalam desain grafis digital. Selain itu, saya tertarik pada Desain UI/UX, meliputi riset pengguna dan analisis data untuk menciptakan tampilan yang efisien dan berorientasi pada pengalaman pengguna."
          </p>
        </motion.div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:bg-secondary/50 transition-colors"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              {skill.icon}
            </div>
            <h3 className="mt-4 text-xl font-semibold text-foreground">
              {skill.name}
            </h3>
            <p className="mt-2 text-muted-foreground">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;