"use client";

import { Section, ContentCard, ContactCard } from "@/components/custom";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Clock,
  Target,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

const Support = () => {
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
      icon: MessageCircle,
      title: "Business Contact",
      description: "For business inquiries",
      contact: "+91 7507779256",
      action: "tel:+917507779256",
    },
  ];

  const supportFeatures = [
    "Technical troubleshooting and issue resolution",
    "Step-by-step guidance for all features",
    "Quick response times during business hours",
    "Personalized assistance for your needs",
  ];

  return (
    <Section backgroundVariant="muted" padding="xl" className="min-h-screen">
      <div className="space-y-16">
        {/* Header Section */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* <motion.div variants={fadeInUp}> */}
          <Badge
            variant="secondary"
            className="mb-6 text-sm font-medium px-4 py-2 bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 transition-colors duration-300"
          >
            Support
          </Badge>
          {/* </motion.div> */}
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-primary via-foreground to-secondary bg-clip-text text-transparent">
            We're here to assist you
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            with every step of your journey
          </p>
        </motion.div>

        {/* Main Support Card */}
        <ContentCard
          title="Need Help? We're Here for You!"
          variant="highlighted"
          size="lg"
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-8">
            <p className="text-lg leading-relaxed">
              At SourceTranscript, we are committed to providing seamless
              support to ensure you have the best experience with our services.
              Whether you have a question, need technical assistance, or require
              guidance, our team is ready to assist you.
            </p>

            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-primary/8 to-secondary/8 rounded-lg border border-secondary/10">
              <Target className="h-6 w-6 text-secondary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  How Can We Help?
                </h3>
                <p className="text-muted-foreground">
                  Technical Support: Facing an issue? Our support team is
                  available to help troubleshoot and resolve any technical
                  challenges.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  What We Offer
                </span>
              </h3>
              <div className="grid gap-3">
                {supportFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-background/50"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ContentCard>

        {/* Contact Methods Grid */}
        <div className="space-y-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg text-muted-foreground">
              Choose the method that works best for you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <ContactCard
                key={index}
                icon={method.icon}
                title={method.title}
                description={method.description}
                contact={method.contact}
                action={method.action}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>

        {/* Commitment Section */}
        <ContentCard variant="bordered" className="max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Clock className="h-8 w-8 text-secondary" />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Our Commitment
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                We strive to respond to all inquiries as quickly as possible.
                Our support team is available{" "}
                <strong>Monday to Friday, 9 AM to 6 PM IST</strong>, ensuring
                you receive timely and effective solutions.
              </p>

              <Separator className="my-6" />

              <div className="flex items-center justify-center gap-2 text-lg">
                <span>
                  We're here to make your experience with SourceTranscript
                </span>
                <strong className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  smooth and hassle-free!
                </strong>
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </ContentCard>
      </div>
    </Section>
  );
};

export default Support;
