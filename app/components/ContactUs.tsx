"use client";

import { MapPin, Phone, Mail, Building2, Globe } from "lucide-react";
import {
  Hero,
  Section,
  ContactCard,
  ContentCard,
  PageLayout,
} from "@/components/custom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { useState, Suspense } from "react";
import FormDemoRequest from "./ContantForm";

const ContactUs = () => {
  const [activeMap, setActiveMap] = useState<"head" | "branch">("head");

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed help via email",
      contact: "support@sourcetranscript.com",
      action: "mailto:support@sourcetranscript.com",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our team",
      contact: "+91 8796448379 / 7410124595",
      action: "tel:+918796448379",
    },
    {
      icon: Phone,
      title: "Business Contact",
      description: "For business inquiries",
      contact: "+91 7507779256",
      action: "tel:+917507779256",
    },
  ];

  const offices = [
    {
      type: "Head Office",
      address: [
        "305, 309, Level -3,",
        "West Wing, Nyati Unitree,",
        "Yerawada - 411006,",
        "Pune, MH, India.",
      ],
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.7257203228386!2d73.8788563!3d18.5413631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c135b72eb9b1%3A0xaeb865158a0141a9!2sNyati%20Unitree%2C%20Yerawada%2C%20Pune%2C%20Maharashtra%20411006!5e0!3m2!1sen!2sin!4v1689750422191!5m2!1sen!2sin",
      key: "head" as const,
    },
    {
      type: "Branch Office",
      address: [
        "WeWork Krishe Emerald,",
        "Kondapur Main Road, Laxmi Cyber City,",
        "Whitefields, Kondapur, Hyderabad,",
        "Telangana - 500081",
      ],
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.425232841394!2d78.37969727594404!3d17.44710400172019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9305d70c70f3%3A0x84e40f1865bc1aa4!2sWeWork%20Krishe%20Emerald!5e0!3m2!1sen!2sin!4v1718613290002!5m2!1sen!2sin",
      key: "branch" as const,
    },
  ];

  return (
    <PageLayout backgroundVariant="gradient">
      {/* Hero Section */}
      <Hero
        badge="Contact Us"
        title="Get in Touch"
        subtitle="Get in touch with the Source Transcript team. We'd love to hear from you."
        description=""
        backgroundVariant="gradient"
        className="pb-0"
        // primaryAction={{
        //   text: "Email Us",
        //   onClick: () => window.open("mailto:support@sourcetranscript.com"),
        // }}
        // secondaryAction={{
        //   text: "Call Us",
        //   onClick: () => window.open("tel:+918796448379"),
        // }}
      >
        {/* Contact Form Section */}
        <Section className="bg-transparent" padding="sm" maxWidth="2xl">
          <div className="space-y-8">
            {/* <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
            
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Send us a Message
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as
                possible
              </p>
            </motion.div> */}

            <ContentCard variant="bordered" size="lg">
              <Suspense
                fallback={
                  <div className="p-8 text-center">Loading form...</div>
                }
              >
                <FormDemoRequest />
              </Suspense>
            </ContentCard>
          </div>
        </Section>
      </Hero>

      {/* Office Locations Section */}
      <Section backgroundVariant="muted" padding="xl" maxWidth="7xl">
        <div className="space-y-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="secondary"
              className="mb-6 text-sm font-medium px-4 py-2 bg-secondary/10 text-secondary border-secondary/20"
            >
              Our Locations
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Office Locations
            </h2>
          </motion.div>

          {/* Office Address Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
            {offices.map((office, index) => (
              <ContentCard
                key={index}
                title={office.type}
                variant="bordered"
                size="md"
                className="h-full"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <address className="not-italic text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {office.address.map((line, lineIndex) => (
                      <div key={lineIndex}>{line}</div>
                    ))}
                  </address>
                </div>
              </ContentCard>
            ))}
          </div>

          {/* Global Presence */}
          <ContentCard variant="highlighted" size="lg" className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Globe className="h-8 w-8 text-secondary" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Global Presence
              </h3>
            </div>
            <p className="text-lg font-semibold text-foreground">
              Multiple offices across India, Malaysia, Philippines, Dubai, and
              Vietnam.
            </p>
          </ContentCard>

          <Separator className="my-8" />

          {/* Interactive Map Section */}
          <div className="space-y-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Find Us on the Map
              </h3>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8">
                {offices.map((office) => (
                  <Button
                    key={office.key}
                    variant={activeMap === office.key ? "default" : "outline"}
                    onClick={() => setActiveMap(office.key)}
                    className={`flex items-center justify-center gap-2 w-full sm:w-auto ${
                      activeMap === office.key
                        ? "bg-gradient-to-r from-primary to-secondary text-white"
                        : "border-secondary/20 hover:border-secondary/40"
                    }`}
                    type="button"
                  >
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm sm:text-base">{office.type}</span>
                  </Button>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-xl border border-secondary/20"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {offices.map((office) => (
                <iframe
                  key={office.key}
                  src={office.mapSrc}
                  className={`w-full h-full border-0 transition-opacity duration-300 ${
                    activeMap === office.key
                      ? "opacity-100"
                      : "opacity-0 absolute"
                  }`}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${office.type} Location`}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default ContactUs;
