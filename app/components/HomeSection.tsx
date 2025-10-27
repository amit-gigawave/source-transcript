import { TravelCard } from "@/components/card-7";
import { Hero } from "@/components/custom";
import { homeCards } from "@/lib/content";

const HomeSection = () => {
  return (
    <Hero
      title="Source Transcript Suite"
      description="Modern Solutions for Smarter Clinical Trials"
      backgroundVariant="muted"
      className="min-h-screen"
    >
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-2 gap-4 mx-auto max-w-5xl">
        {/* First card - spans 2 columns, 2 rows (large) */}
        {homeCards.map((item) => (
          <TravelCard
            key={item.title}
            imageUrl={item.img}
            imageAlt={item.title}
            title={item.title}
            onBookNow={() => {}}
            aria-label={` ${item.title}`}
            className="h-full min-h-[320px]"
          />
        ))}
      </div>
    </Hero>
  );
};

export default HomeSection;
