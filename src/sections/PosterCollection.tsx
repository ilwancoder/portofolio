import React, { useState, useEffect } from 'react';
import { ArrowLeft, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Poster {
  id: string;
  title: string;
  imageUrl: string;
  description?: string;
  tags?: string[];
}

// --- QUOTES TENTANG KREATIVITAS ---
const creativityQuotes: string[] = [
  "Creativity is intelligence having fun. - Albert Einstein",
  "The 'c' in 'code' stands for creativity. - Unknown",
  "Don't think outside the box, think what the box can do. - Unknown",
  "The artist sees what others only catch a glimpse of. - Leonardo da Vinci",
  "Every artist was first an amateur. - Ralph Waldo Emerson",
  "Creativity is just connecting things. - Steve Jobs",
];

// --- DATA POSTER ANDA ---
const posters: Poster[] = [
  { id: 'p-1', title: 'Festival Cahaya', imageUrl: '/images/posters/poster1.jpg', description: 'Poster promosi untuk festival seni dan musik yang berfokus pada instalasi cahaya.', tags: ['Event', 'Music'] },
  { id: 'p-2', title: 'Infografis Iklim', imageUrl: '/images/posters/infografis_iklim.png', description: 'Infografis visual dampak perubahan iklim global.', tags: ['Infographic', 'Environment'] },
  { id: 'p-3', title: 'Senja Kopi Branding', imageUrl: '/images/posters/senja_kopi_branding.webp', description: 'Branding lengkap produk kopi lokal Senja Kopi.', tags: ['Branding', 'Product'] },
  { id: 'p-4', title: 'Hackathon Mahasiswa', imageUrl: '/images/posters/hackathon_event.jpg', description: 'Poster acara hackathon mahasiswa.', tags: ['Event', 'Tech'] },
];

// --- ANIMASI VARIANTS ---
const floatingCardVariants = {
  initial: { opacity: 0, scale: 0.8, rotate: 0 },
  animate: (i: number) => ({
    opacity: 0.15,
    scale: 1,
    rotate: Math.random() * 12 - 6,
    x: Math.random() * 400 - 200,
    y: Math.random() * 200 - 100,
    transition: { delay: i * 0.12, duration: 1.2, ease: [0.65, 0.05, 0.36, 1] },
  }),
};

const posterCardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 18 } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.15, ease: "easeIn" } },
};

// --- KOMPONEN UTAMA ---
const PosterCollection: React.FC = () => {
  const [selectedPoster, setSelectedPoster] = useState<Poster | null>(null);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % creativityQuotes.length);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  const openLightbox = (poster: Poster) => {
    setSelectedPoster(poster);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedPoster(null);
    document.body.style.overflow = '';
  };

  const scrollToContent = () => {
    const content = document.getElementById('poster-grid-content');
    content?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b0c] via-[#0f1113] to-[#0b0b0c] text-white relative overflow-x-hidden">

      {/* --- HIGHLIGHT POSTER KIRI ATAS --- */}
      <motion.div
        className="fixed top-8 left-8 z-30 rounded-2xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="relative w-40 h-56 md:w-52 md:h-72 overflow-hidden">
          <img
            src={posters[0].imageUrl}
            alt={posters[0].title}
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-2 left-2 right-2">
            <h3 className="text-sm font-semibold">{posters[0].title}</h3>
            <p className="text-xs text-gray-300">{posters[0].tags?.join(', ')}</p>
          </div>
        </div>
      </motion.div>

      {/* --- BACK BUTTON --- */}
      <button
        onClick={() => (window.location.href = '/')}
        className="fixed top-6 right-6 z-40 inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg text-sm transition"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 py-20">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 drop-shadow-xl"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          Welcome To My <span className="text-white/95">Poster</span> Collection
        </motion.h1>

        <AnimatePresence mode="wait">
          <motion.div
            key={quoteIndex}
            className="mt-8 max-w-3xl w-full px-5 py-4 rounded-xl border border-purple-400/30 bg-white/5 backdrop-blur-md shadow-md"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.25, 1] }}
          >
            <p className="text-lg italic text-gray-200">“{creativityQuotes[quoteIndex]}”</p>
          </motion.div>
        </AnimatePresence>

        <motion.button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-xs uppercase tracking-wider text-gray-300">Swipe Up</span>
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}>
            <ChevronDown className="w-7 h-7 text-purple-300" />
          </motion.div>
        </motion.button>
      </section>

      {/* --- POSTER GRID --- */}
      <section id="poster-grid-content" className="relative z-20 -mt-8 bg-[#0f1113] pt-12 pb-24 rounded-t-3xl">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
            Berikut adalah koleksi desain poster dan karya branding yang saya buat. Klik poster untuk melihat detail.
          </p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {posters.map((poster) => (
              <motion.article
                key={poster.id}
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-gray-700/60 shadow-lg"
                onClick={() => openLightbox(poster)}
                variants={posterCardVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 140, damping: 16 }}
              >
                <div className="aspect-[3/4] w-full overflow-hidden bg-gray-900">
                  <img
                    src={poster.imageUrl}
                    alt={poster.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-lg font-semibold">{poster.title}</h3>
                  {poster.description && <p className="text-sm text-gray-300 mt-2 line-clamp-2">{poster.description}</p>}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- LIGHTBOX --- */}
      <AnimatePresence>
        {selectedPoster && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.18 } }, exit: { opacity: 0, transition: { duration: 0.12 } } }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl w-full rounded-2xl bg-[#0b0b0c] shadow-2xl overflow-hidden"
              variants={modalVariants}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/6 hover:bg-white/10 transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="bg-gradient-to-b from-black/80 to-black/60 flex items-center justify-center p-6">
                <img src={selectedPoster.imageUrl} alt={selectedPoster.title} className="max-w-full max-h-[70vh] object-contain" />
              </div>

              <div className="p-6 bg-[#0b0b0c] border-t border-gray-800">
                <h3 className="text-2xl font-bold">{selectedPoster.title}</h3>
                {selectedPoster.description && <p className="mt-3 text-gray-300">{selectedPoster.description}</p>}
                {selectedPoster.tags && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedPoster.tags.map((t) => (
                      <span key={t} className="text-sm px-3 py-1 rounded-md bg-white/6">{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PosterCollection;
