# Custom Components Library

A collection of reusable, modern UI components built with shadcn/ui and Tailwind CSS for clinical research applications.

## Components Overview

### 1. Hero Component

A flexible hero section component for landing pages and feature introductions.

```tsx
import { Hero } from "@/components/custom";

<Hero
  badge="About Source Transcript"
  title="Transform Clinical Research"
  subtitle="Through Innovation"
  description="Leading provider of clinical research technology solutions..."
  primaryAction={{ text: "Get Started", onClick: () => {} }}
  secondaryAction={{ text: "Learn More", onClick: () => {} }}
  backgroundVariant="gradient"
/>;
```

**Props:**

- `badge?: string` - Optional badge text
- `title: string` - Main heading
- `subtitle?: string` - Optional subtitle (styled with primary color)
- `description: string` - Description text
- `primaryAction?: { text: string, onClick?: () => void }` - Primary button
- `secondaryAction?: { text: string, onClick?: () => void }` - Secondary button
- `backgroundVariant?: "default" | "gradient" | "muted"` - Background style
- `children?: ReactNode` - Additional content

### 2. StatsGrid Component

Display statistics in an attractive grid layout.

```tsx
import { StatsGrid } from "@/components/custom";
import { Users, Globe, CheckCircle, Clock } from "lucide-react";

const stats = [
  { number: "500+", label: "Projects Completed", icon: CheckCircle },
  { number: "50+", label: "Team Members", icon: Users },
  { number: "25+", label: "Countries Served", icon: Globe },
  { number: "10+", label: "Years Experience", icon: Clock },
];

<StatsGrid
  title="Our Impact"
  subtitle="Numbers that speak for themselves"
  stats={stats}
  columns={4}
  cardVariant="hover"
/>;
```

**Props:**

- `title?: string` - Section title
- `subtitle?: string` - Section subtitle
- `stats: Stat[]` - Array of statistics
- `columns?: 2 | 3 | 4` - Grid columns (default: 4)
- `backgroundVariant?: "default" | "muted"` - Background style
- `cardVariant?: "default" | "hover" | "gradient"` - Card style

### 3. FeatureGrid Component

Showcase features or services in a grid layout.

```tsx
import { FeatureGrid } from "@/components/custom";
import { Shield, Zap, Database, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Security First",
    description: "Enterprise-grade security for all your data",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance for clinical workflows",
  },
];

<FeatureGrid
  title="Core Features"
  subtitle="What makes us different"
  features={features}
  columns={3}
  cardVariant="hover"
/>;
```

**Props:**

- `title?: string` - Section title
- `subtitle?: string` - Section subtitle
- `features: Feature[]` - Array of features
- `columns?: 2 | 3 | 4` - Grid columns (default: 4)
- `backgroundVariant?: "default" | "muted"` - Background style
- `cardVariant?: "default" | "hover" | "bordered"` - Card style

### 4. CallToAction Component

Flexible call-to-action sections with multiple styling options.

```tsx
import { CallToAction } from "@/components/custom";

<CallToAction
  badge="Get Started Today"
  title="Ready to Transform Your Research?"
  description="Join hundreds of organizations worldwide..."
  primaryAction={{ text: "Start Free Trial", onClick: () => {} }}
  secondaryAction={{ text: "Schedule Demo", variant: "outline" }}
  backgroundVariant="gradient"
  textAlign="center"
/>;
```

**Props:**

- `badge?: string` - Optional badge
- `title: string` - CTA heading
- `description: string` - CTA description
- `primaryAction?: CTAAction` - Primary button with styling options
- `secondaryAction?: CTAAction` - Secondary button
- `backgroundVariant?: "default" | "muted" | "gradient" | "card"` - Background style
- `textAlign?: "left" | "center" | "right"` - Text alignment
- `maxWidth?: string` - Maximum width constraint

### 5. Timeline Component

Display chronological information or process steps.

```tsx
import { Timeline } from "@/components/custom";
import { Target, TrendingUp, Globe } from "lucide-react";

const timelineItems = [
  {
    icon: Target,
    title: "Founded with Purpose",
    description: "Established to transform clinical research...",
    date: "2014",
    highlight: true,
  },
  {
    icon: TrendingUp,
    title: "Rapid Growth",
    description: "Expanded our solutions portfolio...",
    date: "2018",
  },
];

<Timeline
  title="Our Journey"
  subtitle="A decade of innovation"
  items={timelineItems}
  orientation="vertical"
/>;
```

**Props:**

- `title?: string` - Section title
- `subtitle?: string` - Section subtitle
- `items: TimelineItem[]` - Timeline items
- `backgroundVariant?: "default" | "muted"` - Background style
- `orientation?: "vertical" | "horizontal"` - Layout orientation

### 6. Testimonials Component

Display customer testimonials and reviews.

```tsx
import { Testimonials } from "@/components/custom";

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Clinical Research Director",
    company: "MedTech Solutions",
    content: "Source Transcript has revolutionized our clinical trials...",
    rating: 5,
    avatar: "/avatars/sarah.jpg",
  },
];

<Testimonials
  title="What Our Clients Say"
  subtitle="Trusted by leading organizations"
  testimonials={testimonials}
  columns={3}
  showRatings={true}
/>;
```

**Props:**

- `title?: string` - Section title
- `subtitle?: string` - Section subtitle
- `testimonials: Testimonial[]` - Array of testimonials
- `columns?: 1 | 2 | 3` - Grid columns (default: 3)
- `backgroundVariant?: "default" | "muted"` - Background style
- `showRatings?: boolean` - Show star ratings (default: true)

### 7. Pricing Component

Display pricing plans and feature comparisons.

```tsx
import { Pricing } from "@/components/custom";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small studies",
    price: "$99",
    period: "month",
    features: [
      { name: "Up to 100 subjects", included: true },
      { name: "Basic reporting", included: true },
      { name: "24/7 support", included: false },
    ],
    buttonText: "Start Free Trial",
  },
  {
    name: "Professional",
    description: "For growing organizations",
    price: "$299",
    period: "month",
    popular: true,
    features: [
      { name: "Up to 1000 subjects", included: true },
      { name: "Advanced reporting", included: true },
      { name: "24/7 support", included: true },
    ],
  },
];

<Pricing
  title="Choose Your Plan"
  subtitle="Flexible pricing for every need"
  plans={pricingPlans}
  columns={3}
/>;
```

**Props:**

- `title?: string` - Section title
- `subtitle?: string` - Section subtitle
- `plans: PricingPlan[]` - Array of pricing plans
- `backgroundVariant?: "default" | "muted"` - Background style
- `columns?: 2 | 3 | 4` - Grid columns (default: 3)

### 8. Section Component

A flexible wrapper component for consistent spacing and layouts.

```tsx
import { Section } from "@/components/custom";

<Section
  backgroundVariant="muted"
  padding="xl"
  maxWidth="4xl"
  className="custom-class"
>
  <YourContent />
</Section>;
```

**Props:**

- `children: ReactNode` - Content to wrap
- `className?: string` - Additional CSS classes
- `backgroundVariant?: "default" | "muted" | "gradient"` - Background style
- `padding?: "sm" | "md" | "lg" | "xl"` - Padding size
- `maxWidth?: string` - Maximum width constraint

## Design System

### Color Scheme

All components use the project's primary and secondary color scheme:

- **Primary**: Used for main actions, highlights, and brand elements
- **Secondary**: Used for secondary actions and accents
- **Muted**: Used for backgrounds and subtle elements

### Responsive Design

All components are fully responsive with:

- Mobile-first approach
- Breakpoint-specific layouts
- Flexible grid systems
- Scalable typography

### Animations

Components include subtle animations:

- Hover effects with scale transforms
- Smooth transitions (300ms duration)
- Shadow elevation changes
- Color transitions

## Usage Tips

1. **Import Components**: Use the index file for clean imports

   ```tsx
   import { Hero, StatsGrid, FeatureGrid } from "@/components/custom";
   ```

2. **Consistent Spacing**: Use the Section component for consistent layouts
3. **Color Variants**: Alternate background variants for visual hierarchy
4. **Responsive Columns**: Adjust column counts based on content and screen size
5. **Icon Consistency**: Use Lucide React icons throughout for consistency

## Customization

All components accept additional className props and can be extended with:

- Custom CSS classes
- Tailwind utility classes
- CSS-in-JS solutions
- Theme customization through CSS variables

## Dependencies

- React 18+
- shadcn/ui components
- Tailwind CSS
- Lucide React (for icons)
- clsx (for conditional classes)
