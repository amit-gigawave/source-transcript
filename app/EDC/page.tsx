"use client";

import { edcFeatures } from "@/lib/content";
import PageLayout from "@/components/custom/PageLayout";
import Hero from "@/components/custom/Hero";
import Section from "@/components/custom/Section";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  easings,
  durations,
  staggerContainer,
  fadeInUp,
} from "@/components/custom/animations";
import {
  Zap,
  Shield,
  FileCheck,
  CheckCircle,
  Settings,
  TrendingUp,
  FileText,
  Globe,
  Database,
  Activity,
  Cloud,
  Eye,
  DollarSign,
  FileCheck2,
} from "lucide-react";
import AnimatedBg from "@/components/custom/AnimatedBg";
import { BentoFeatureCard } from "@/components/custom/BentoFeatureCard";

// Icon mapping from Bootstrap icons to Lucide icons
const iconMap: Record<string, any> = {
  "bi bi-lightning-charge": Zap,
  "bi bi-shield-check": Shield,
  "bi bi-journal-check": FileCheck,
  "bi bi-check-circle": CheckCircle,
  "bi bi-gear": Settings,
  "bi bi-graph-up": TrendingUp,
  "bi bi-file-earmark-text": FileText,
  "bi bi-globe": Globe,
  "bi bi-database": Database,
  "bi bi-activity": Activity,
  "bi bi-cloud": Cloud,
  "bi bi-eye": Eye,
  "bi bi-currency-dollar": DollarSign,
  "bi bi-file-earmark-check": FileCheck2,
  "bi bi-check2-circle": CheckCircle,
};

// Bento grid layouts for different card counts with responsive classes
const getBentoLayout = (cardCount: number) => {
  switch (cardCount) {
    case 4:
      return [
        "col-span-1 md:col-span-2 lg:col-span-1 row-span-1", // Card 1
        "col-span-1 md:col-span-2 lg:col-span-1 row-span-1", // Card 2
        "col-span-1 md:col-span-2 lg:col-span-2 row-span-1", // Card 3 (wide on lg+)
        "col-span-1 md:col-span-2 lg:col-span-2 row-span-1", // Card 4 (wide on lg+)
      ];
    case 5:
      return [
        "col-span-1 md:col-span-2 lg:col-span-2 row-span-1", // Card 1 (wide)
        "col-span-1 md:col-span-1 lg:col-span-1 row-span-1", // Card 2
        "col-span-1 md:col-span-1 lg:col-span-1 row-span-1", // Card 3
        "col-span-1 md:col-span-1 lg:col-span-1 row-span-1", // Card 4
        "col-span-1 md:col-span-2 lg:col-span-2 row-span-1", // Card 5 (wide)
      ];
    case 6:
      return [
        "col-span-1 md:col-span-2 lg:col-span-2 row-span-1", // Card 1 (wide)
        "col-span-1 md:col-span-1 lg:col-span-1 row-span-1", // Card 2
        "col-span-1 md:col-span-1 lg:col-span-1 row-span-1", // Card 3
        "col-span-1 md:col-span-1 lg:col-span-1 row-span-1", // Card 4
        "col-span-1 md:col-span-1 lg:col-span-1 row-span-1", // Card 5
        "col-span-1 md:col-span-2 lg:col-span-2 row-span-1", // Card 6 (wide)
      ];
    default:
      return Array(cardCount).fill("col-span-1 row-span-1");
  }
};

// Feature card component with bento design
// const BentoFeatureCard = ({
//   icon,
//   title,
//   description,
//   index,
//   gridClass,
//   isLarge = false,
// }: {
//   icon: string;
//   title: string;
//   description?: string;
//   index: number;
//   gridClass: string;
//   isLarge?: boolean;
// }) => {
//   const IconComponent = iconMap[icon] || FileText;

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: durations.slow,
//         ease: easings.easeOut,
//         delay: index * 0.1,
//       },
//     },
//   };

//   const cardHoverVariants = {
//     hover: {
//       y: -4,
//       scale: 1.01,
//       transition: {
//         duration: durations.normal,
//         ease: easings.easeOut,
//       },
//     },
//   };

//   const iconVariants = {
//     hover: {
//       scale: 1.1,
//       rotate: 5,
//       transition: {
//         duration: durations.normal,
//       },
//     },
//   };

//   return (
//     <motion.div
//       className={gridClass}
//       variants={cardVariants}
//       initial="hidden"
//       whileInView="visible"
//       whileHover="hover"
//       viewport={{ once: true }}
//     >
//       <Card
//         className={`border-0 shadow-lg backdrop-blur-sm bg-gradient-to-br from-card/60 to-card/40 hover:from-card/80 hover:to-card/60 transition-all duration-500 group h-full overflow-hidden relative ${
//           isLarge ? "min-h-[200px]" : "min-h-[180px]"
//         }`}
//       >
//         <motion.div variants={cardHoverVariants} className="h-full">
//           <CardContent
//             className={`${
//               isLarge ? "p-8" : "p-6"
//             } h-full flex flex-col justify-between relative z-10`}
//           >
//             {/* Background decoration */}
//             <motion.div
//               className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-2xl -translate-y-8 translate-x-8 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-500"
//               animate={{
//                 scale: [1, 1.1, 1],
//                 opacity: [0.5, 0.8, 0.5],
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />

//             <div className="relative z-10">
//               <motion.div
//                 className={`mb-4 ${isLarge ? "mb-6" : ""}`}
//                 variants={iconVariants}
//               >
//                 <div
//                   className={`inline-flex items-center justify-center ${
//                     isLarge ? "w-16 h-16" : "w-12 h-12"
//                   } rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-500 shadow-lg group-hover:shadow-xl`}
//                 >
//                   <IconComponent
//                     className={`${
//                       isLarge ? "w-8 h-8" : "w-6 h-6"
//                     } text-primary group-hover:text-primary/90 transition-colors duration-300`}
//                   />
//                 </div>
//               </motion.div>

//               {title && (
//                 <h3
//                   className={`${
//                     isLarge ? "text-xl" : "text-lg"
//                   } font-bold text-foreground mb-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight`}
//                 >
//                   {title}
//                 </h3>
//               )}
//             </div>

//             {description && (
//               <p
//                 className={`text-muted-foreground leading-relaxed ${
//                   isLarge ? "text-base" : "text-sm"
//                 } mt-auto`}
//               >
//                 {description}
//               </p>
//             )}
//           </CardContent>
//         </motion.div>
//       </Card>
//     </motion.div>
//   );
// };

const EDCPage = () => {
  return (
    <PageLayout
      backgroundVariant="gradient"
      minHeight="screen"
      // className="blur-lg"
    >
      {/* Hero Section */}
      <Hero
        badge="Electronic Data Capture"
        title="EDC System"
        subtitle={edcFeatures.title}
        description={edcFeatures.description}
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
      {edcFeatures.child.map((section, sectionIndex) => (
        <Section
          key={sectionIndex}
          backgroundVariant={sectionIndex % 2 === 0 ? "default" : "muted"}
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
            <h2 className="text-4xl pb-5 sm:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
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

      {/* Call to Action Section */}
      {/* <Section backgroundVariant="gradient" padding="xl" maxWidth="4xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: durations.slow, ease: easings.easeOut }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Ready to Transform Your Clinical Trials?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Join leading pharmaceutical companies and CROs who trust our EDC
            system to streamline their clinical research operations.
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-0"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Demo
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-secondary/30 hover:border-secondary hover:bg-secondary/5 text-foreground rounded-lg font-semibold text-lg transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Sales
            </motion.button>
          </motion.div>
        </motion.div>
      </Section> */}
    </PageLayout>
  );
};

export default EDCPage;
