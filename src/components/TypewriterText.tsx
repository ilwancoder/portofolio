// src/components/TypewriterText.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  phrases: string[]; // Array of phrases to type out
  typingSpeed?: number; // Speed of typing in ms per character
  deletingSpeed?: number; // Speed of deleting in ms per character
  pauseTime?: number; // Time to pause before deleting/next phrase in ms
  className?: string; // Tailwind CSS classes for styling
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  phrases,
  typingSpeed = 80, // Default typing speed
  deletingSpeed = 40, // Default deleting speed
  pauseTime = 1500, // Default pause time
  className,
}) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullPhrase = phrases[currentPhraseIndex];
      if (isDeleting) {
        // Deleting characters
        setCurrentText((prev) => fullPhrase.substring(0, prev.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        // Typing characters
        setCurrentText((prev) => fullPhrase.substring(0, prev.length + 1));
        if (currentText === fullPhrase) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer); // Cleanup timer on unmount or re-render
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, pauseTime]);

  // Framer Motion variant for the blinking cursor
  const cursorVariants = {
    blinking: {
      opacity: [0, 1, 1, 0], // Off, On, On, Off
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatDelay: 0,
        ease: 'linear',
        times: [0, 0.5, 0.7, 1] // Keyframes for opacity
      },
    },
  };

  return (
    <span className={`inline-flex items-center ${className}`}>
      {currentText}
      <motion.span
        className="ml-1 inline-block h-full w-0.5 bg-primary" // Tailwind classes for the cursor
        variants={cursorVariants}
        animate="blinking"
      />
    </span>
  );
};

export default TypewriterText;