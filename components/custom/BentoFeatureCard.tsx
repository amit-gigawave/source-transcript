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

// Feature card component with bento design
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: durations.slow,
        ease: easings.easeOut,
        delay: index * 0.08, // Slightly faster stagger for 11 cards
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -4,
      scale: 1.01,
      transition: {
        duration: durations.normal,
        ease: easings.easeOut,
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: durations.normal,
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
        className={`border-0 shadow-lg backdrop-blur-sm bg-gradient-to-br from-card/60 to-card/40 hover:from-card/80 hover:to-card/60 transition-all duration-500 group h-full overflow-hidden relative ${
          isLarge ? "min-h-[200px]" : "min-h-[180px]"
        }`}
      >
        <motion.div variants={cardHoverVariants} className="h-full">
          <CardContent
            className={`${
              isLarge ? "p-8" : "p-6"
            } h-full flex flex-col justify-between relative z-10`}
          >
            {/* Background decoration */}
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-2xl -translate-y-8 translate-x-8 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-500"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4 + index * 0.2, // Vary animation timing slightly
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative z-10">
              <motion.div
                className={`mb-4 ${isLarge ? "mb-6" : ""}`}
                variants={iconVariants}
              >
                <div
                  className={`inline-flex items-center justify-center ${
                    isLarge ? "w-16 h-16" : "w-12 h-12"
                  } rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-500 shadow-lg group-hover:shadow-xl`}
                >
                  <IconComponent
                    className={`${
                      isLarge ? "w-8 h-8" : "w-6 h-6"
                    } text-primary group-hover:text-primary/90 transition-colors duration-300`}
                  />
                </div>
              </motion.div>

              {title && (
                <h3
                  className={`${
                    isLarge ? "text-xl" : "text-lg"
                  } font-bold text-secondary mb-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight`}
                >
                  {title}
                </h3>
              )}
            </div>

            {description && (
              <p
                className={`text-muted-foreground leading-relaxed ${
                  isLarge ? "text-base" : "text-sm"
                } mt-auto`}
              >
                {description}
              </p>
            )}
          </CardContent>
        </motion.div>
      </Card>
    </motion.div>
  );
};
