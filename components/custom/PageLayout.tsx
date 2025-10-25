"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  backgroundVariant?: "default" | "gradient" | "muted";
  minHeight?: "screen" | "auto" | "full";
}

const PageLayout = ({
  children,
  className = "",
  backgroundVariant = "default",
  minHeight = "screen",
}: PageLayoutProps) => {
  const getBackgroundClass = () => {
    switch (backgroundVariant) {
      case "gradient":
        return "bg-gradient-to-br from-background via-primary/3 to-secondary/5 relative overflow-hidden";
      case "muted":
        return "bg-gradient-to-br from-muted/20 to-background relative overflow-hidden";
      default:
        return "bg-background";
    }
  };

  const getMinHeightClass = () => {
    switch (minHeight) {
      case "screen":
        return "min-h-screen";
      case "full":
        return "min-h-full";
      default:
        return "";
    }
  };

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className={`${getMinHeightClass()} ${getBackgroundClass()} ${className} relative`}
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      {/* Animated background elements for enhanced variants */}
      {(backgroundVariant === "gradient" || backgroundVariant === "muted") && (
        <>
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute top-1/2 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-1/3 w-64 h-64 bg-primary/3 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </>
      )}

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default PageLayout;
