// src/components/ProjectCard.tsx
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';

// Hapus import Link jika tidak menggunakan react-router-dom
// import { Link } from 'react-router-dom'; 

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[]; 
  liveUrl?: string;       
  internalPath?: string;  
}

const cardVariants = {
  offscreen: {
    y: 40,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.35,
      duration: 0.7,
      delay: 0.1,
    },
  },
};

const ProjectCard: React.FC<ProjectCardProps> = ({ 
    title, 
    description, 
    imageUrl, 
    tags, 
    liveUrl, 
    internalPath 
}) => {
  const href = internalPath || liveUrl || '#';
  const isExternal = !!liveUrl && !internalPath; 

  return (
    <motion.div
      className="
        group relative flex flex-col overflow-hidden rounded-xl border border-border/70 
        bg-card shadow-lg transition-all duration-300 ease-in-out 
        hover:shadow-2xl hover:border-primary/50 hover:scale-[1.01]
      "
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
    >
      {/* Bungkus gambar dan judul dengan <a> tag biasa */}
      <a 
        href={href} 
        target={isExternal ? '_blank' : undefined} 
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={imageUrl}
            alt={`Screenshot of ${title}`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] group-hover:brightness-90"
          />
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="text-2xl font-bold tracking-tight text-foreground/90 group-hover:text-primary transition-colors">{title}</h3>
          <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
          {/* Tags tetap di luar link utama */}
          <div className="mt-4 flex flex-wrap gap-2 pt-2 border-t border-border/50">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="
                  rounded-md bg-secondary text-secondary-foreground 
                  px-3 py-0.5 text-xs font-medium 
                  opacity-80
                "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>

      {/* --- Link Icon (Modern Animated Button) --- */}
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        aria-label={`View ${isExternal ? 'live project' : 'details'}: ${title}`}
        className="
          absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/90 text-primary-foreground 
          transition-all duration-300 ease-out 
          scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 
          group-hover:rotate-12
        "
      >
        <ArrowUpRight className="h-5 w-5" />
      </a>
    </motion.div>
  );
};

export default ProjectCard;