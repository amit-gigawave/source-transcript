"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { LucideIcon } from "lucide-react";

interface TimelineItem {
  icon: LucideIcon;
  title: string;
  description: string;
  date?: string;
  highlight?: boolean;
}

interface TimelineProps {
  title?: string;
  subtitle?: string;
  items: TimelineItem[];
  backgroundVariant?: "default" | "muted";
  orientation?: "vertical" | "horizontal";
}

const Timeline = ({
  title,
  subtitle,
  items,
  backgroundVariant = "default",
  orientation = "vertical",
}: TimelineProps) => {
  const getBackgroundClass = () => {
    return backgroundVariant === "muted" ? "bg-muted/30" : "bg-background";
  };

  if (orientation === "horizontal") {
    return (
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${getBackgroundClass()}`}>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                        item.highlight ? "bg-primary" : "bg-secondary"
                      }`}
                    >
                      <item.icon
                        className={`h-6 w-6 ${
                          item.highlight
                            ? "text-primary-foreground"
                            : "text-secondary-foreground"
                        }`}
                      />
                    </div>
                    {item.date && (
                      <span className="text-sm text-muted-foreground font-medium">
                        {item.date}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${getBackgroundClass()}`}>
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

        <Card className="shadow-lg">
          <CardContent className="p-8">
            <div className="space-y-8">
              {items.map((item, index) => (
                <div key={index}>
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                        item.highlight ? "bg-primary" : "bg-secondary"
                      }`}
                    >
                      <item.icon
                        className={`h-6 w-6 ${
                          item.highlight
                            ? "text-primary-foreground"
                            : "text-secondary-foreground"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-foreground">
                          {item.title}
                        </h3>
                        {item.date && (
                          <span className="text-sm text-muted-foreground font-medium">
                            {item.date}
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  {index < items.length - 1 && <Separator className="mt-8" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Timeline;
