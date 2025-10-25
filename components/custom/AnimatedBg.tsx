import { cn } from "@/lib/utils";
import React from "react";

const AnimatedBg = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn([
        "spline-container absolute top-0 left-0 w-full h-full -z-10 blur-md",
        className,
      ])}
    >
      <iframe
        src="https://my.spline.design/flowingribbon-TlkEaNrvCCNZuJBNJN3LXpRF"
        // frameBorder="0"
        width="100%"
        height="100%"
        id="aura-spline"
      ></iframe>
    </div>
  );
};

export default AnimatedBg;
