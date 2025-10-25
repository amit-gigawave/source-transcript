"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { easings, durations, staggerContainer, fadeInUp } from "./animations";

interface HeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
  description: string;
  primaryAction?: {
    text: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    text: string;
    onClick?: () => void;
  };
  backgroundVariant?: "default" | "gradient" | "muted";
  children?: ReactNode;
}

const Hero = ({
  badge,
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  backgroundVariant = "default",
  children,
}: HeroProps) => {
  const getBackgroundClass = () => {
    switch (backgroundVariant) {
      case "gradient":
        return "bg-gradient-to-br from-background via-primary/5 to-secondary/10 relative overflow-hidden";
      case "muted":
        return "bg-muted/30";
      default:
        return "bg-background";
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: durations.normal,
        ease: easings.easeOut,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: durations.fast,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section
      className={`relative py-24 px-4 sm:px-6 lg:px-8 ${getBackgroundClass()}`}
    >
      {/* Animated background elements */}
      {backgroundVariant === "gradient" && (
        <>
          <motion.div
            className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </>
      )}

      <motion.div
        className="max-w-7xl mx-auto text-center relative z-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {badge && (
          <motion.div variants={fadeInUp}>
            <Badge
              variant="secondary"
              className="mb-6 text-sm font-medium px-4 py-2 bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 transition-colors duration-300"
            >
              {badge}
            </Badge>
          </motion.div>
        )}

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-tight"
          variants={fadeInUp}
        >
          <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            {title}
          </span>
          {subtitle && (
            <motion.span
              className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold"
              variants={fadeInUp}
            >
              {subtitle}
            </motion.span>
          )}
        </motion.h1>

        {description && (
          <motion.p
            className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed font-light"
            variants={fadeInUp}
          >
            {description}
          </motion.p>
        )}

        {(primaryAction || secondaryAction) && (
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
            variants={fadeInUp}
          >
            {primaryAction && (
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  size="lg"
                  className="text-lg px-10 py-4 h-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                  onClick={primaryAction.onClick}
                >
                  {primaryAction.text}
                </Button>
              </motion.div>
            )}
            {secondaryAction && (
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-10 py-4 h-auto border-2 border-secondary/30 hover:border-secondary hover:bg-secondary/5 transition-all duration-300"
                  onClick={secondaryAction.onClick}
                >
                  {secondaryAction.text}
                </Button>
              </motion.div>
            )}
          </motion.div>
        )}

        {children && <motion.div variants={fadeInUp}>{children}</motion.div>}
      </motion.div>
    </section>
  );
};

export default Hero;
