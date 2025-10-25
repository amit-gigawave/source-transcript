"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

interface PricingFeature {
  name: string;
  included: boolean;
  description?: string;
}

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period?: string;
  features: PricingFeature[];
  popular?: boolean;
  buttonText?: string;
  buttonVariant?: "default" | "outline" | "secondary";
  onSelect?: () => void;
}

interface PricingProps {
  title?: string;
  subtitle?: string;
  plans: PricingPlan[];
  backgroundVariant?: "default" | "muted";
  columns?: 2 | 3 | 4;
}

const Pricing = ({
  title,
  subtitle,
  plans,
  backgroundVariant = "default",
  columns = 3,
}: PricingProps) => {
  const getBackgroundClass = () => {
    return backgroundVariant === "muted" ? "bg-muted/30" : "bg-background";
  };

  const getGridClass = () => {
    switch (columns) {
      case 2:
        return "grid-cols-1 md:grid-cols-2";
      case 3:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
      case 4:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
      default:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    }
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
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-xl transition-all duration-300 ${
                plan.popular
                  ? "border-primary shadow-lg scale-105"
                  : "border-border shadow-md hover:scale-105"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">
                  {plan.name}
                </CardTitle>
                <p className="text-muted-foreground">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground ml-2">
                      /{plan.period}
                    </span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="pt-4">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      )}
                      <div>
                        <span
                          className={`${
                            feature.included
                              ? "text-foreground"
                              : "text-muted-foreground"
                          }`}
                        >
                          {feature.name}
                        </span>
                        {feature.description && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {feature.description}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={
                    plan.buttonVariant || (plan.popular ? "default" : "outline")
                  }
                  onClick={plan.onSelect}
                >
                  {plan.buttonText || "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
