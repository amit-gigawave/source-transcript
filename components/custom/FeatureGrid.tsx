"use client";

import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { easings, durations, staggerContainer, fadeInUp } from "./animations";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGridProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  backgroundVariant?: "default" | "muted";
  cardVariant?: "default" | "hover" | "bordered";
}

const FeatureGrid = ({
  title,
  subtitle,
  features,
  columns = 4,
  backgroundVariant = "default",
  cardVariant = "hover",
}: FeatureGridProps) => {
  const getGridClass = () => {
    switch (columns) {
      case 2:
        return "grid-cols-1 md:grid-cols-2";
      case 3:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
      case 4:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
      default:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
    }
  };

  const getBackgroundClass = () => {
    return backgroundVariant === "muted" ? "bg-muted/30" : "bg-background";
  };

  const getCardClass = () => {
    switch (cardVariant) {
      case "hover":
        return "text-center border-0 shadow-lg backdrop-blur-sm bg-card/50 hover:bg-card/80 transition-all duration-500 group";
      case "bordered":
        return "text-center border-l-4 border-l-primary shadow-lg hover:shadow-xl transition-shadow bg-card/80 backdrop-blur-sm";
      default:
        return "text-center border-0 shadow-md bg-card/60 backdrop-blur-sm";
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: durations.slow,
        ease: easings.easeOut,
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
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: durations.normal,
      },
    },
  };

  return (
    <section className={`py-24 px-4 sm:px-6 lg:px-8 ${getBackgroundClass()}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: durations.slow, ease: easings.easeOut }}
          >
            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        <motion.div
          className={`grid ${getGridClass()} gap-8`}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} whileHover="hover">
              <Card className={getCardClass()}>
                <motion.div variants={cardHoverVariants}>
                  <CardContent className="p-6 sm:p-8">
                    <motion.div
                      className="mb-6 sm:mb-8"
                      variants={iconVariants}
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-500 shadow-lg">
                        <feature.icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary group-hover:text-primary/90 transition-colors duration-300" />
                      </div>
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                      {feature.description}
                    </p>
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureGrid;
