"use client";

import { useEffect } from "react";
import AboutUs from "./components/AboutUs";
import Support from "./components/Support";
import ContactUs from "./components/ContactUs";
import AnimatedBg2 from "@/components/custom/AnimatedBg2";
import AnimatedBg from "@/components/custom/AnimatedBg";
import HomeSection from "./components/HomeSection";

// Extend Window interface for UnicornStudio
declare global {
  interface Window {
    UnicornStudio?: {
      isInitialized: boolean;
      init: () => void;
    };
  }
}

const Page = () => {
  useEffect(() => {
    // Load UnicornStudio script
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false, init: () => {} };
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
      script.onload = function () {
        if (!window.UnicornStudio?.isInitialized) {
          window.UnicornStudio?.init();
          if (window.UnicornStudio) {
            window.UnicornStudio.isInitialized = true;
          }
        }
      };
      (document.head || document.body).appendChild(script);
    }
  }, []);

  return (
    <section className="overflow-x-hidden">
      {/* <div className="aura-background-component top-0 w-full -z-10 absolute h-full ">
        <div
          data-us-project="JUFg0MwEcM3urKc9W7Vg"
          className="absolute w-full h-full left-0 top-0 -z-10"
        />
      </div> */}
      {/* <AnimatedBg className="h-[150vh]" /> */}
      {/* <AnimatedBg2 /> */}
      <HomeSection />
      <AboutUs />
      <Support />
      <ContactUs />
    </section>
  );
};

export default Page;
