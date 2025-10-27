"use client";

import { FileText, Activity, Shield } from "lucide-react";
import {
  Hero,
  Section,
  FeatureGrid,
  CallToAction,
  ContentCard,
  PageLayout,
} from "@/components/custom";

const AboutUs = () => {
  const platforms = [
    {
      icon: FileText,
      title: "eCRF (Electronic Case Report Form)",
      description:
        "A secure and intuitive system for efficient data capture, ensuring accuracy and compliance.",
    },
    {
      icon: Activity,
      title: "IWRS (Interactive Web Response System)",
      description:
        "Automating patient randomization and trial supply management to enhance study efficiency.",
    },
    {
      icon: Shield,
      title: "rSDV (Remote Source Data Verification)",
      description:
        "Enabling real-time, remote monitoring to ensure data integrity and compliance while reducing site visits.",
    },
  ];

  return (
    <PageLayout id={"about"}>
      {/* Hero Section */}
      <Hero
        badge="About Source Transcript"
        title="About Us"
        subtitle="Innovating Clinical Data Management for a Healthier Tomorrow"
        description=""
        backgroundVariant="gradient"
        // primaryAction={{
        //   text: "Learn More",
        //   onClick: () => console.log("Learn More clicked"),
        // }}
        // secondaryAction={{
        //   text: "Contact Us",
        //   onClick: () => console.log("Contact Us clicked"),
        // }}
      >
        <Section padding="sm" maxWidth="7xl" backgroundVariant="muted">
          <ContentCard>
            At Source Transcript, we are dedicated to transforming clinical data
            management through cutting-edge technology and innovation. With a
            deep understanding of the complexities of clinical trials, we
            provide powerful, scalable, and compliant solutions that streamline
            data collection, monitoring, and analysis.
          </ContentCard>
        </Section>
      </Hero>

      {/* Company Description Section */}

      {/* Platforms Section */}
      <FeatureGrid
        title="Our Robust Platforms Include:"
        features={platforms}
        columns={3}
        cardVariant="hover"
      />

      {/* Mission Statement CTA */}
      <CallToAction
        title=""
        description="Driven by a commitment to innovation, compliance, and data integrity, Source Transcript empowers pharmaceutical companies, CROs, and research teams with reliable, user-friendly, and regulatory-compliant solutions. Our mission is to accelerate clinical research while maintaining the highest standards of quality and security."
        backgroundVariant="card"
        maxWidth="7xl"
      >
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-lg border-l-4 border-l-primary ">
          <p className="text-xl font-semibold text-foreground">
            Partner with us to streamline your clinical trial operations and
            unlock the full potential of your data.
          </p>
        </div>
      </CallToAction>
    </PageLayout>
  );
};

export default AboutUs;
