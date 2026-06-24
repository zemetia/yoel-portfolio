'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type FadeInDirection = 'up' | 'down' | 'left' | 'right' | 'none';

interface FadeInProps {
  children: ReactNode;
  direction?: FadeInDirection;
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
  once?: boolean;
}

const directionVariants = (
  direction: FadeInDirection,
  distance: number,
): Variants => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
    y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
});

export function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className,
  distance = 40,
  once = true,
}: FadeInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      variants={directionVariants(direction, distance)}
      transition={{ delay, duration }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
