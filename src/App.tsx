import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import PosterCollection from './sections/PosterCollection'; // <--- Import PosterCollection
import { useThemeStore } from './stores/useThemeStore';
import { motion } from 'framer-motion';

const sections = ['home', 'about', 'projects', 'contact'];

function App() {
  const theme = useThemeStore((state) => state.theme);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState(window.location.pathname); // <--- Lacak path saat ini

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  // Handle URL changes, e.g., when clicking an internal link
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    // Menambahkan event listener untuk perubahan hash atau history API
    // Perlu diuji lebih lanjut bagaimana Vite dev server merefresh halaman
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange); 

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer hanya relevan untuk halaman utama
  useEffect(() => {
    if (currentPath !== '/') return; // Hanya jalankan observer di halaman utama

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [currentPath]); // <--- Rerun effect ketika path berubah

  // Tentukan konten yang akan dirender berdasarkan path
  const renderContent = () => {
    if (currentPath === '/portfolio/posters') {
      return <PosterCollection />;
    } else if (currentPath === '/') {
      return (
        <>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </>
      );
    }
    // Jika path tidak cocok, bisa tampilkan halaman 404 atau redirect ke home
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
        <h1 className="text-6xl font-extrabold mb-4">404</h1>
        <p className="text-xl text-muted-foreground">Page Not Found</p>
        <button 
          onClick={() => window.location.href = '/'} 
          className="mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:scale-105 transition-transform"
        >
          Go to Home
        </button>
      </div>
    );
  };

  return (
    <>
      {!isLoading && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
          style={{ transformOrigin: '0%' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
      {/* Header hanya dirender di halaman utama, atau Anda bisa modifikasi agar selalu ada */}
      {currentPath === '/' && <Header activeSection={activeSection} />} 
      <main>
        {renderContent()} {/* Render konten berdasarkan path */}
      </main>
    </>
  );
}

export default App;