"use client";

import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface Stat {
  number: string;
  label: string;
  icon: LucideIcon;
  description?: string;
}

interface StatsGridProps {
  title?: string;
  subtitle?: string;
  stats: Stat[];
  columns?: 2 | 3 | 4;
  backgroundVariant?: "default" | "muted";
  cardVariant?: "default" | "hover" | "gradient";
}

const StatsGrid = ({
  title,
  subtitle,
  stats,
  columns = 4,
  backgroundVariant = "muted",
  cardVariant = "hover",
}: StatsGridProps) => {
  const getGridClass = () => {
    switch (columns) {
      case 2:
        return "grid-cols-1 sm:grid-cols-2";
      case 3:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
      case 4:
        return "grid-cols-2 lg:grid-cols-4";
      default:
        return "grid-cols-2 lg:grid-cols-4";
    }
  };

  const getBackgroundClass = () => {
    return backgroundVariant === "muted" ? "bg-muted/30" : "bg-background";
  };

  const getCardClass = () => {
    switch (cardVariant) {
      case "gradient":
        return "text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-primary/5 to-secondary/5 hover:scale-105";
      case "hover":
        return "text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105";
      default:
        return "text-center border-0 shadow-md";
    }
  };

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${getBackgroundClass()}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className={`grid ${getGridClass()} gap-8`}>
          {stats.map((stat, index) => (
            <Card key={index} className={getCardClass()}>
              <CardContent className="pt-6">
                <stat.icon className="h-8 w-8 text-secondary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium mb-2">
                  {stat.label}
                </div>
                {stat.description && (
                  <div className="text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsGrid;
