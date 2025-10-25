"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  children: ReactNode;
  className?: string;
  backgroundVariant?: "default" | "muted" | "gradient";
  padding?: "sm" | "md" | "lg" | "xl";
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "7xl" | "full";
  animate?: boolean;
}

const Section = ({
  children,
  className = "",
  backgroundVariant = "default",
  padding = "lg",
  maxWidth = "7xl",
  animate = true,
}: SectionProps) => {
  const getBackgroundClass = () => {
    switch (backgroundVariant) {
      case "muted":
        return "bg-gradient-to-br from-muted/20 to-muted/5 relative overflow-hidden";
      case "gradient":
        return "bg-gradient-to-br from-background via-primary/5 to-secondary/5 relative overflow-hidden";
      default:
        return "bg-background";
    }
  };

  const getPaddingClass = () => {
    switch (padding) {
      case "sm":
        return "py-8 sm:py-12 px-4 sm:px-6 lg:px-8";
      case "md":
        return "py-12 sm:py-16 px-4 sm:px-6 lg:px-8";
      case "lg":
        return "py-16 sm:py-20 px-4 sm:px-6 lg:px-8";
      case "xl":
        return "py-20 sm:py-24 px-4 sm:px-6 lg:px-8";
      default:
        return "py-16 sm:py-20 px-4 sm:px-6 lg:px-8";
    }
  };

  const getMaxWidthClass = () => {
    switch (maxWidth) {
      case "sm":
        return "max-w-sm";
      case "md":
        return "max-w-md";
      case "lg":
        return "max-w-lg";
      case "xl":
        return "max-w-xl";
      case "2xl":
        return "max-w-2xl";
      case "4xl":
        return "max-w-4xl";
      case "7xl":
        return "max-w-7xl";
      case "full":
        return "max-w-full";
      default:
        return "max-w-7xl";
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  const SectionContent = () => (
    <div className={`${getMaxWidthClass()} mx-auto relative z-10`}>
      {animate ? (
        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </div>
  );

  return (
    <motion.section
      className={`${getBackgroundClass()} ${getPaddingClass()} ${className}`}
      variants={animate ? sectionVariants : undefined}
      initial={animate ? "hidden" : undefined}
      whileInView={animate ? "visible" : undefined}
      viewport={animate ? { once: true } : undefined}
    >
      {/* Subtle animated background elements for gradient variants */}
      {(backgroundVariant === "muted" || backgroundVariant === "gradient") && (
        <>
          <motion.div
            className="absolute top-0 right-1/4 w-32 h-32 bg-primary/8 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute bottom-0 left-1/3 w-40 h-40 bg-secondary/8 rounded-full blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/6 rounded-full blur-xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
            }}
          />
        </>
      )}

      <SectionContent />
    </motion.section>
  );
};

export default Section;
