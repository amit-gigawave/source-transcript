"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CTAAction {
  text: string;
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "destructive"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  onClick?: () => void;
  href?: string;
}

interface CallToActionProps {
  badge?: string;
  title: string;
  description: string;
  primaryAction?: CTAAction;
  secondaryAction?: CTAAction;
  backgroundVariant?: "default" | "muted" | "gradient" | "card";
  textAlign?: "left" | "center" | "right";
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "7xl" | "full";
  children?: ReactNode;
}

const CallToAction = ({
  badge,
  title,
  description,
  primaryAction,
  secondaryAction,
  backgroundVariant = "muted",
  textAlign = "center",
  maxWidth = "4xl",
  children,
}: CallToActionProps) => {
  const getBackgroundClass = () => {
    switch (backgroundVariant) {
      case "muted":
        return "bg-gradient-to-br from-muted/30 to-muted/10 relative overflow-hidden";
      case "gradient":
        return "bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden";
      case "card":
        return "bg-background";
      default:
        return "bg-background";
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
        return "max-w-4xl";
    }
  };

  const getTextAlignClass = () => {
    switch (textAlign) {
      case "left":
        return "text-left";
      case "right":
        return "text-right";
      default:
        return "text-center";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const content = (
    <motion.div
      className={`${getMaxWidthClass()} mx-auto ${getTextAlignClass()} relative z-10 p-0`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {badge && (
        <motion.div variants={itemVariants}>
          <Badge
            variant="secondary"
            className="mb-6 text-sm font-medium px-4 py-2 bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 transition-colors duration-300"
          >
            {badge}
          </Badge>
        </motion.div>
      )}

      <motion.h2
        className="text-4xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary via-foreground to-secondary bg-clip-text text-transparent p-0"
        variants={itemVariants}
      >
        {title}
      </motion.h2>

      <motion.p
        className="text-xl sm:text-2xl text-muted-foreground mb-12 leading-relaxed font-light"
        variants={itemVariants}
      >
        {description}
      </motion.p>

      {(primaryAction || secondaryAction) && (
        <motion.div
          className={`flex flex-col sm:flex-row gap-6 ${
            textAlign === "center"
              ? "justify-center"
              : textAlign === "right"
              ? "justify-end"
              : "justify-start"
          } mb-12`}
          variants={itemVariants}
        >
          {primaryAction && (
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                variant={primaryAction.variant || "default"}
                size={primaryAction.size || "lg"}
                className="text-lg px-10 py-4 h-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                onClick={primaryAction.onClick}
                asChild={!!primaryAction.href}
              >
                {primaryAction.href ? (
                  <a href={primaryAction.href}>{primaryAction.text}</a>
                ) : (
                  primaryAction.text
                )}
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
                variant={secondaryAction.variant || "outline"}
                size={secondaryAction.size || "lg"}
                className="text-lg px-10 py-4 h-auto border-2 border-secondary/30 hover:border-secondary hover:bg-secondary/5 transition-all duration-300"
                onClick={secondaryAction.onClick}
                asChild={!!secondaryAction.href}
              >
                {secondaryAction.href ? (
                  <a href={secondaryAction.href}>{secondaryAction.text}</a>
                ) : (
                  secondaryAction.text
                )}
              </Button>
            </motion.div>
          )}
        </motion.div>
      )}

      {children && <motion.div variants={itemVariants}>{children}</motion.div>}
    </motion.div>
  );

  if (backgroundVariant === "card") {
    return (
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ y: -4 }}
        >
          <Card className="shadow-2xl bg-card/80 backdrop-blur-sm border-0 overflow-hidden">
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/8 to-secondary/8 opacity-0 hover:opacity-100 transition-opacity duration-500"
              initial={false}
            />
            <CardContent className="p-12 relative z-10">{content}</CardContent>
          </Card>
        </motion.div>
      </section>
    );
  }

  return (
    <section className={`py-24 px-4 sm:px-6  ${getBackgroundClass()}`}>
      {/* Animated background elements */}
      {(backgroundVariant === "muted" || backgroundVariant === "gradient") && (
        <>
          <motion.div
            className="absolute top-1/4 left-0 w-64 h-64 bg-primary/8 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/8 rounded-full blur-3xl"
            animate={{
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary/6 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
            }}
          />
        </>
      )}
      {content}
    </section>
  );
};

export default CallToAction;
