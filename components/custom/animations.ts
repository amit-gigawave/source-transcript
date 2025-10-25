// Animation utilities and easing functions for Framer Motion
export const easings = {
  easeOut: [0.25, 0.1, 0.25, 1] as const,
  easeIn: [0.42, 0, 1, 1] as const,
  easeInOut: [0.42, 0, 0.58, 1] as const,
  bounce: [0.68, -0.55, 0.265, 1.55] as const,
} as const;

export const durations = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.6,
  slower: 0.8,
} as const;

// Common animation variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.easeOut,
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: durations.slow,
      ease: easings.easeOut,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.normal,
      ease: easings.easeOut,
    },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.slow,
      ease: easings.easeOut,
    },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};
