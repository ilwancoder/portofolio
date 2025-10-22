import { motion } from 'framer-motion';
import { Code, Sun, Moon } from 'lucide-react';
import { useThemeStore } from '../stores/useThemeStore';
import { cn } from '../lib/utils';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

interface HeaderProps {
  activeSection: string;
}

const Header = ({ activeSection }: HeaderProps) => {
  const { theme, toggleTheme } = useThemeStore();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-center"
    >
      <div className="mt-6 flex items-center justify-between gap-8 rounded-full border bg-card/50 p-2 px-4 text-sm font-medium text-muted-foreground shadow-lg backdrop-blur-md">
        <div
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2 text-foreground cursor-pointer"
        >
          <Code className="h-5 w-5 text-primary" />
          <span className="font-bold">Muhammad Ilwan</span>
        </div>
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                'relative cursor-pointer rounded-full px-3 py-1.5 transition-colors hover:text-foreground',
                activeSection === item.id ? 'text-foreground' : ''
              )}
            >
              {activeSection === item.id && (
                <motion.span
                  layoutId="header-active-link"
                  className="absolute inset-0 rounded-full bg-primary/10"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-secondary"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
