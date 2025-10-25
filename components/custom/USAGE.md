# Reusable Components Usage Guide

This guide shows how to use the reusable components in your Next.js application for consistent UI across different pages.

## Available Components

### 1. PageLayout

Wraps entire pages with consistent styling and background options.

```tsx
import { PageLayout } from "@/components/custom";

<PageLayout backgroundVariant="gradient" minHeight="screen">
  {/* Your page content */}
</PageLayout>;
```

**Props:**

- `backgroundVariant`: "default" | "gradient" | "muted"
- `minHeight`: "screen" | "auto" | "full"
- `className`: Additional CSS classes

### 2. Hero

Creates hero sections with title, subtitle, description, and action buttons.

```tsx
import { Hero } from "@/components/custom";

<Hero
  badge="About Us"
  title="Welcome to Our Platform"
  subtitle="Building the Future"
  description="Your comprehensive solution for modern challenges"
  backgroundVariant="gradient"
  primaryAction={{
    text: "Get Started",
    onClick: () => console.log("Primary action"),
  }}
  secondaryAction={{
    text: "Learn More",
    onClick: () => console.log("Secondary action"),
  }}
/>;
```

### 3. Section

Provides consistent spacing and layout for page sections.

```tsx
import { Section } from "@/components/custom";

<Section padding="xl" maxWidth="7xl" backgroundVariant="muted">
  {/* Your section content */}
</Section>;
```

**Props:**

- `padding`: "sm" | "md" | "lg" | "xl"
- `maxWidth`: "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "7xl" | "full"
- `backgroundVariant`: "default" | "muted" | "gradient"

### 4. ContentCard

Displays content in a consistent card format with optional title and badge.

```tsx
import { ContentCard } from "@/components/custom";

<ContentCard title="Our Story" badge="About" variant="highlighted" size="lg">
  Your content goes here...
</ContentCard>;
```

**Props:**

- `variant`: "default" | "highlighted" | "bordered"
- `size`: "sm" | "md" | "lg"
- `title`: Optional card title
- `badge`: Optional badge text

### 5. FeatureGrid

Creates responsive grids for features, services, or platforms.

```tsx
import { FeatureGrid } from "@/components/custom";
import { FileText, Shield, Activity } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Feature 1",
    description: "Description of feature 1",
  },
  // ... more features
];

<FeatureGrid
  title="Our Features"
  subtitle="Everything you need to succeed"
  features={features}
  columns={3}
  cardVariant="hover"
/>;
```

### 6. CallToAction

Creates call-to-action sections with flexible styling options.

```tsx
import { CallToAction } from "@/components/custom";

<CallToAction
  title="Ready to Get Started?"
  description="Join thousands of satisfied customers"
  backgroundVariant="card"
  primaryAction={{
    text: "Sign Up Now",
    onClick: () => console.log("CTA clicked"),
  }}
  secondaryAction={{
    text: "Contact Sales",
    variant: "outline",
  }}
>
  {/* Optional additional content */}
</CallToAction>;
```

## Example: Complete Page Structure

```tsx
"use client";

import { FileText, Shield, Activity } from "lucide-react";
import {
  PageLayout,
  Hero,
  Section,
  ContentCard,
  FeatureGrid,
  CallToAction,
} from "@/components/custom";

const MyPage = () => {
  const features = [
    {
      icon: FileText,
      title: "Feature 1",
      description: "Description here",
    },
    // ... more features
  ];

  return (
    <PageLayout>
      <Hero
        badge="Welcome"
        title="My Page Title"
        subtitle="Subtitle here"
        description="Page description"
        backgroundVariant="gradient"
        primaryAction={{
          text: "Get Started",
          onClick: () => console.log("Get Started"),
        }}
      />

      <Section padding="xl" maxWidth="7xl">
        <ContentCard title="About Us">Your content here...</ContentCard>
      </Section>

      <FeatureGrid
        title="Our Features"
        features={features}
        columns={3}
        cardVariant="hover"
      />

      <CallToAction
        title="Ready to Start?"
        description="Get in touch with us today"
        backgroundVariant="card"
        primaryAction={{
          text: "Contact Us",
          onClick: () => console.log("Contact clicked"),
        }}
      />
    </PageLayout>
  );
};

export default MyPage;
```

## Benefits of Using These Components

1. **Consistency**: All pages will have the same look and feel
2. **Maintainability**: Changes to styling can be made in one place
3. **Reusability**: Components can be used across different pages
4. **Flexibility**: Props allow customization while maintaining consistency
5. **Type Safety**: Full TypeScript support with proper prop types
6. **Performance**: Optimized components with proper React patterns

## Import Pattern

Always import from the custom components index for cleaner imports:

```tsx
import {
  PageLayout,
  Hero,
  Section,
  ContentCard,
  FeatureGrid,
  CallToAction,
} from "@/components/custom";
```

This approach ensures your application maintains a consistent design system while being easy to maintain and extend.
