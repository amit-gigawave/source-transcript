"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { easings, durations } from "./animations";

interface ContentCardProps {
  title?: string;
  badge?: string;
  children: ReactNode;
  variant?: "default" | "highlighted" | "bordered";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const ContentCard = ({
  title,
  badge,
  children,
  variant = "default",
  size = "md",
  className = "",
}: ContentCardProps) => {
  const getSizeClass = () => {
    switch (size) {
      case "sm":
        return "p-6";
      case "lg":
        return "p-12";
      default:
        return "p-10";
    }
  };

  const getVariantClass = () => {
    switch (variant) {
      case "highlighted":
        return "shadow-xl border-l-4 border-l-primary bg-gradient-to-br from-primary/8 via-background to-secondary/8 backdrop-blur-sm";
      case "bordered":
        return "shadow-xl border-2 border-secondary/20 bg-card/80 backdrop-blur-sm hover:border-secondary/40 transition-all duration-300";
      default:
        return "shadow-xl bg-card/70 backdrop-blur-sm hover:bg-card/90 transition-all duration-300";
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: durations.slow,
        ease: easings.easeOut,
      },
    },
    hover: {
      y: -4,
      transition: {
        duration: durations.normal,
        ease: easings.easeOut,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: durations.normal,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
    >
      <Card className={`${getVariantClass()} ${className} overflow-hidden`}>
        {/* Subtle animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/6 via-transparent to-secondary/6 opacity-0 hover:opacity-100 transition-opacity duration-500"
          initial={false}
        />

        {(title || badge) && (
          <CardHeader
            className={badge ? "pb-4 relative z-10" : "pb-6 relative z-10"}
          >
            {badge && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3,
                  duration: durations.normal,
                  ease: easings.easeOut,
                }}
              >
                <Badge
                  variant="secondary"
                  className="mb-3 w-fit bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 transition-colors duration-300"
                >
                  {badge}
                </Badge>
              </motion.div>
            )}
            {title && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.4,
                  duration: durations.normal,
                  ease: easings.easeOut,
                }}
              >
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary via-foreground to-secondary bg-clip-text text-transparent">
                  {title}
                </CardTitle>
              </motion.div>
            )}
          </CardHeader>
        )}

        <CardContent className={`${getSizeClass()} relative z-10 py-0`}>
          <motion.div
            className="text-lg text-muted-foreground leading-relaxed"
            variants={contentVariants}
          >
            {children}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContentCard;
