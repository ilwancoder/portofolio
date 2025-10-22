import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl: string;
}

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const ProjectCard = ({ title, description, imageUrl, tags, liveUrl }: ProjectCardProps) => {
  return (
    <motion.div
      className="group relative flex flex-col overflow-hidden rounded-lg border bg-card"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="mt-2 flex-1 text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 flex h-10 w-10 translate-x-2 translate-y-2 items-center justify-center rounded-full bg-card opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
      >
        <ArrowUpRight className="h-5 w-5 text-foreground" />
      </a>
    </motion.div>
  );
};

export default ProjectCard;
