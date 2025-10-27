"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { easings, durations } from "@/components/custom/animations";
import {
  Lock,
  Folder,
  ClipboardList,
  Globe,
  Settings,
  Users,
  FileText,
  Zap,
  Database,
  CheckCircle,
  ClipboardCheck,
  BookOpen,
  Archive,
  Shield,
  GitBranch,
  Search,
  Download,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

// Icon mapping from Bootstrap icons to Lucide icons
const iconMap: Record<string, any> = {
  "bi bi-lock": Lock,
  "bi bi-folder": Folder,
  "bi bi-clipboard-data": ClipboardList,
  "bi bi-globe": Globe,
  "bi bi-gear": Settings,
  "bi bi-people": Users,
  "bi bi-file-earmark-text": FileText,
  "bi bi-lightning-charge": Zap,
  "bi bi-database": Database,
  "bi bi-check2-circle": CheckCircle,
  "bi bi-clipboard2-check": ClipboardCheck,
  "bi bi-book": BookOpen,
  "bi bi-archive": Archive,
  "bi bi-shield": Shield,
  "bi bi-git-branch": GitBranch,
  "bi bi-search": Search,
  "bi bi-download": Download,
};

// Enhanced modern bento feature card with sophisticated design
export const BentoFeatureCard = ({
  icon,
  title,
  description,
  index,
  gridClass,
  isLarge = false,
}: {
  icon: string;
  title: string;
  description?: string;
  index: number;
  gridClass: string;
  isLarge?: boolean;
}) => {
  const IconComponent = iconMap[icon] || FileText;

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.92 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: durations.slow,
        ease: easings.easeOut,
        delay: index * 0.08,
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: durations.normal,
        ease: easings.easeOut,
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.15,
      rotate: 3,
      transition: {
        duration: durations.normal,
        ease: easings.easeOut,
      },
    },
  };

  const arrowVariants = {
    hover: {
      x: 3,
      y: -3,
      opacity: 1,
      transition: {
        duration: durations.fast,
        ease: easings.easeOut,
      },
    },
  };

  const sparkleVariants = {
    hover: {
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      transition: {
        duration: 0.6,
        ease: easings.easeOut,
      },
    },
  };

  return (
    <motion.div
      className={gridClass}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
    >
      <Card
        className={`border border-border/80 hover:border-primary/50 shadow-lg hover:shadow-2xl bg-card/90 backdrop-blur-sm hover:bg-card transition-all duration-500 group h-full overflow-hidden relative cursor-pointer ${
          isLarge ? "min-h-[220px]" : "min-h-[200px]"
        }`}
      >
        <motion.div variants={cardHoverVariants} className="h-full">
          <CardContent
            className={`${
              isLarge ? "p-8" : "p-7"
            } h-full flex flex-col relative`}
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,var(--color-primary)_0%,transparent_50%)]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,var(--color-secondary)_0%,transparent_50%)]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Top section with icon and arrow */}
            <div className="flex items-start justify-between mb-6">
              <motion.div variants={iconVariants}>
                <div
                  className={`relative inline-flex items-center justify-center ${
                    isLarge ? "w-16 h-16" : "w-14 h-14"
                  } rounded-3xl bg-primary/8 border border-primary/15 group-hover:bg-primary/12 group-hover:border-primary/25 group-hover:shadow-lg transition-all duration-500`}
                >
                  <IconComponent
                    className={`${
                      isLarge ? "w-8 h-8" : "w-7 h-7"
                    } text-primary group-hover:text-primary/90 transition-colors duration-300`}
                  />

                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                </div>
              </motion.div>

              {/* Interactive elements */}
              <div className="flex items-center gap-2">
                <motion.div
                  variants={sparkleVariants}
                  className="opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                >
                  <Sparkles className="w-4 h-4 text-primary/60" />
                </motion.div>

                {/* <motion.div
                  variants={arrowVariants}
                  className="opacity-0 group-hover:opacity-70 transition-opacity duration-300"
                >
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
                </motion.div> */}
              </div>
            </div>

            {/* Content section */}
            <div className="flex-1 flex flex-col">
              {title && (
                <h3
                  className={`${
                    isLarge ? "text-xl mb-4" : "text-lg mb-3"
                  } font-bold text-secondary group-hover:text-secondary/95 leading-tight tracking-tight transition-colors duration-300`}
                >
                  {title}
                </h3>
              )}

              {description && (
                <div className="mt-auto">
                  <p
                    className={`text-muted-foreground group-hover:text-muted-foreground/90 leading-relaxed ${
                      isLarge ? "text-base" : "text-sm"
                    } transition-colors duration-300`}
                  >
                    {description}
                  </p>
                </div>
              )}
            </div>

            {/* Enhanced decorative elements */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-border/20 group-hover:bg-primary/20 transition-colors duration-500" />
            <div className="absolute top-0 right-0 w-12 h-12 bg-primary/3 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

            {/* Subtle corner highlight */}
            <div className="absolute top-2 right-2 w-2 h-2 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </CardContent>
        </motion.div>
      </Card>
    </motion.div>
  );
};
