"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  contact: string;
  action: string;
  delay?: number;
}

const ContactCard = ({
  icon: IconComponent,
  title,
  description,
  contact,
  action,
  delay = 0,
}: ContactCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -4 }}
    >
      <Card className="h-full bg-card/70 backdrop-blur-sm hover:bg-card/90 transition-all duration-300 border-secondary/10 hover:border-secondary/30 relative overflow-hidden">
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/4 to-secondary/4 opacity-0 hover:opacity-100 transition-opacity duration-500"
          initial={false}
        />
        <CardContent className="p-6 sm:p-8 text-center space-y-4 sm:space-y-6 relative z-10">
          <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-gradient-to-br from-primary/15 to-secondary/15 rounded-full flex items-center justify-center">
            <IconComponent className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {title}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              {description}
            </p>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <p className="font-medium text-foreground text-sm sm:text-base break-words">
              {contact}
            </p>
            <Button
              className="w-full bg-gradient-to-r from-secondary/10 to-primary/10 hover:from-secondary/20 hover:to-primary/20 text-secondary border border-secondary/20 hover:border-secondary/40 text-sm sm:text-base"
              variant="outline"
              asChild
            >
              <a href={action}>Get in Touch</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export type { ContactCardProps };
export default ContactCard;
