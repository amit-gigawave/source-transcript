"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating?: number;
  avatar?: string;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
  columns?: 1 | 2 | 3;
  backgroundVariant?: "default" | "muted";
  showRatings?: boolean;
}

const Testimonials = ({
  title,
  subtitle,
  testimonials,
  columns = 3,
  backgroundVariant = "default",
  showRatings = true,
}: TestimonialsProps) => {
  const getBackgroundClass = () => {
    return backgroundVariant === "muted" ? "bg-muted/30" : "bg-background";
  };

  const getGridClass = () => {
    switch (columns) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-1 md:grid-cols-2";
      case 3:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
      default:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-muted-foreground"
        }`}
      />
    ));
  };

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

        <div className={`grid ${getGridClass()} gap-8`}>
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow border-0 shadow-md"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>

                {showRatings && testimonial.rating && (
                  <div className="flex items-center gap-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                )}

                <div className="flex items-center gap-3">
                  {testimonial.avatar && (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <Badge variant="secondary" className="text-xs mt-1">
                      {testimonial.company}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
