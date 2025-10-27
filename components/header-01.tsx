"use client";
import { Equal, X, Moon, Sun } from "@aliimam/icons";
import * as React from "react";
import { cn } from "@/lib/utils";

import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const Header = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 4);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className={cn(
          "fixed z-50 w-full px-3 md:px-4 transition-colors duration-300",
          isScrolled ? "border-transparent" : "border-b"
        )}
      >
        <div
          className={cn(
            "mx-auto mt-2 transition-all duration-300",
            isScrolled &&
              "bg-[oklch(0.141 0.005 285.823)]/50 max-w-5xl rounded-2xl border backdrop-blur-xl px-3"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-3 py-3">
            <div className="flex w-full justify-between lg:w-auto">
              <a href="#" aria-label="home" className="flex gap-2 items-center">
                <Image
                  src={"/SourceLogo.png"}
                  width={1000}
                  height={1000}
                  alt="logo"
                  className="w-44"
                />
              </a>
              <div className="flex gap-2">
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                  className="relative z-20 block cursor-pointer p-2 lg:hidden hover:bg-secondary/10 rounded-md transition-colors"
                >
                  <Equal className="in-data-[state=active]:rotate-180 scale-120 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto duration-200 h-6 w-6" />
                  <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-120 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                </button>
              </div>
            </div>

            <div className="absolute inset-0 m-auto hidden lg:block size-fit">
              <Menus />
            </div>

            {/* Mobile Menu */}
            <div className="in-data-[state=active]:block border backdrop-blur-2xl lg:in-data-[state=active]:flex hidden w-full flex-wrap items-center justify-end space-y-8 rounded-sm p-3 shadow-3xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden block p-3 w-full">
                <ul className="space-y-6 text-base">
                  <li>
                    <a
                      href="/"
                      className="text-muted-foreground hover:text-primary text-lg block duration-150 py-2"
                      onClick={() => setMenuState(false)}
                    >
                      <span>Home</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#about"
                      className="text-muted-foreground hover:text-primary text-lg block duration-150 py-2"
                      onClick={() => setMenuState(false)}
                    >
                      <span>About Us</span>
                    </a>
                  </li>
                  <li>
                    <div className="text-muted-foreground text-lg py-2 font-medium">
                      Products
                    </div>
                    <ul className="ml-4 mt-2 space-y-3">
                      <li>
                        <a
                          href="/EDC"
                          className="text-muted-foreground hover:text-primary text-base block duration-150 py-1"
                          onClick={() => setMenuState(false)}
                        >
                          EDC
                        </a>
                      </li>
                      <li>
                        <a
                          href="/IWRS"
                          className="text-muted-foreground hover:text-primary text-base block duration-150 py-1"
                          onClick={() => setMenuState(false)}
                        >
                          IWRS
                        </a>
                      </li>
                      <li>
                        <a
                          href="/rSDV"
                          className="text-muted-foreground hover:text-primary text-base block duration-150 py-1"
                          onClick={() => setMenuState(false)}
                        >
                          rSDV
                        </a>
                      </li>
                      <li>
                        <a
                          href="/e-library"
                          className="text-muted-foreground hover:text-primary text-base block duration-150 py-1"
                          onClick={() => setMenuState(false)}
                        >
                          E-Library
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="/#support"
                      className="text-muted-foreground hover:text-primary text-lg block duration-150 py-2"
                      onClick={() => setMenuState(false)}
                    >
                      <span>Support</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#contact"
                      className="text-muted-foreground hover:text-primary text-lg block duration-150 py-2"
                      onClick={() => setMenuState(false)}
                    >
                      <span>Contact</span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div className="flex w-full flex-col space-y-3 px-3 pb-3 sm:flex-row sm:gap-2 sm:space-y-0 lg:hidden">
                <ModeToggle />
              </div> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const components: { title: string; href: string; description: string }[] = [
  {
    title: "EDC",
    href: "/EDC",
    description:
      "Our Electronic Data Capture system is engineered to simplify and accelerate clinical trial data collection with real-time access, built-in compliance, and user-friendly design.",
  },
  {
    title: "IWRS",
    href: "/IWRS",
    description:
      "Our Interactive Web Response System is engineered to simplify and accelerate clinical trial randomization and supply management with real-time access, built-in compliance, and user-friendly design.",
  },
  {
    title: "rSDV",
    href: "/rSDV",
    description:
      "rSDV revolutionizes clinical research monitoring by enabling remote source data verification through secure digital workflows, comprehensive audit trails, and role-based collaboration tools.",
  },
  {
    title: "E-Library",
    href: "/e-library",
    description:
      "The e-Library is more than a digital filing cabinet — it's a smart, secure, and collaborative system designed to simplify information management for research teams and organizations.",
  },
];
export function Menus() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-transparent text-sm"
            )}
          >
            <a href="/">Home</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-transparent text-sm"
            )}
          >
            <a href="/#about">About Us</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-transparent text-xs"
            )}
          >
            <a href="#">Blocks</a>
          </NavigationMenuLink>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-sm">
            Products
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-2 px-5">
            <ul className="grid gap-3 md:grid-cols-3 max-w-xl lg:w-3xl">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-transparent text-sm"
            )}
          >
            <a href="/#support">Support</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-transparent text-sm"
            )}
          >
            <a href="/#contact">Contact</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a className="p-3" href={href}>
          <div className="text-base leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-xs leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}

// export function ModeToggle() {
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => {
//     setMounted(true);
//   }, []);
//   if (!mounted) return null;
//   return (
//     <div className="flex flex-col justify-center">
//       <div>
//         <Toggle
//           className="group bg-secondary dark:bg-secondary data-[state=on]:hover:bg-muted cursor-pointer size-9 data-[state=on]:bg-transparent"
//           pressed={theme === "dark"}
//           onPressedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
//           aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
//         >
//           <Moon
//             size={16}
//             className="shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
//             aria-hidden="true"
//           />
//           <Sun
//             size={16}
//             className="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
//             aria-hidden="true"
//           />
//         </Toggle>
//       </div>
//     </div>
//   );
// }

export { Header };
