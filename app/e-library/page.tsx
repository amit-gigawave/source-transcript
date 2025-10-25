"use client";

import { eLibraryFeatures } from "@/lib/content";
import PageLayout from "@/components/custom/PageLayout";
import Hero from "@/components/custom/Hero";
import Section from "@/components/custom/Section";
import { motion } from "framer-motion";
import {
  easings,
  durations,
  staggerContainer,
} from "@/components/custom/animations";
import AnimatedBg from "@/components/custom/AnimatedBg";
import { BentoFeatureCard } from "@/components/custom/BentoFeatureCard";

// Special bento grid layout for 11 cards - creates an interesting asymmetric layout
const getBentoLayout = (cardCount: number) => {
  if (cardCount === 11) {
    return [
      "col-span-1 md:col-span-2 lg:col-span-2 row-span-1", // Card 1 (wide) - Secure Access
      "col-span-1 md:col-span-1 lg:col-span-1 row-span-1", // Card 2 - Centralized Storage
      "col-span-1 md:col-span-1 lg:col-span-1 row-span-1", // Card 3 - Built-in Audit Trail
      "col-span-1 md:col-span-1 lg:col-span-1 row-span-1", // Card 4 - Anytime Access
      "col-span-1 md:col-span-1 lg:col-span-1 row-span-1", // Card 5 - Version Tracking
      "col-span-1 md:col-span-2 lg:col-span-2 row-span-1", // Card 6 (wide) - Collaboration
      "col-span-1 md:col-span-1 lg:col-span-1 row-span-1", // Card 7 - Audit Trails
      "col-span-1 md:col-span-1 lg:col-span-1 row-span-1", // Card 8 - Efficient Workflows
      "col-span-1 md:col-span-1 lg:col-span-1 row-span-1", // Card 9 - Manual Oversight
      "col-span-1 md:col-span-1 lg:col-span-1 row-span-1", // Card 10 - Data Integrity
      "col-span-1 md:col-span-2 lg:col-span-2 row-span-1", // Card 11 (wide) - Compliance Support
    ];
  }
  // Fallback for other card counts
  switch (cardCount) {
    case 3:
      return [
        "col-span-1 md:col-span-2 lg:col-span-2 row-span-1",
        "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
        "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
      ];
    case 6:
      return [
        "col-span-1 md:col-span-2 lg:col-span-2 row-span-1",
        "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
        "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
        "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
        "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
        "col-span-1 md:col-span-2 lg:col-span-2 row-span-1",
      ];
    default:
      return Array(cardCount).fill("col-span-1 row-span-1");
  }
};

const ELibraryPage = () => {
  return (
    <PageLayout backgroundVariant="gradient" minHeight="screen">
      {/* Hero Section */}
      <Hero
        badge="E-Library"
        title="Smart, Secure and Collaborative Document Management"
        subtitle={eLibraryFeatures.title}
        description={eLibraryFeatures.description}
        backgroundVariant="gradient"
        // primaryAction={{
        //   text: "Get Started",
        //   onClick: () => console.log("Get Started clicked"),
        // }}
        // secondaryAction={{
        //   text: "Learn More",
        //   onClick: () => console.log("Learn More clicked"),
        // }}
      />

      <AnimatedBg />
      {/* Features Sections */}
      {eLibraryFeatures.child.map((section, sectionIndex) => (
        <Section
          key={sectionIndex}
          backgroundVariant={"muted"}
          padding="xl"
          maxWidth="7xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: durations.slow, ease: easings.easeOut }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent pb-5">
              {section.title}
            </h2>
            {section.description && (
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {section.description}
              </p>
            )}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-fr"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {section.cards.map((card, cardIndex) => {
              const bentoLayouts = getBentoLayout(section.cards.length);
              const gridClass =
                bentoLayouts[cardIndex] || "col-span-1 row-span-1";
              const isLarge =
                gridClass.includes("col-span-2") ||
                gridClass.includes("lg:col-span-2");

              return (
                <BentoFeatureCard
                  key={cardIndex}
                  icon={card.icon}
                  title={card.title || ""}
                  description={card.description}
                  index={cardIndex}
                  gridClass={gridClass}
                  isLarge={isLarge}
                />
              );
            })}
          </motion.div>
        </Section>
      ))}
    </PageLayout>
  );
};

export default ELibraryPage;
