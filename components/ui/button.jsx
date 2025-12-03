import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",

        primary:
          // "relative px-8 py-4 text-lg font-medium text-white rounded-xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.45)] hover:border-cyan-400/30 hover:bg-white/10",
          // " px-8 py-4 text-lg font-medium text-white rounded-xl bg-white/5 border border-white/10 backdrop-blur-md  transition-all duration-300 hover:bg-white/10 hover:border-cyan-300/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.60)]",
          // "backdrop-blur-lg bg-gradient-to-r from-blue-500 to-green-600 text-white border-transparent hover:shadow-2xl hover:shadow-blue-500/25 hover:transform hover:scale-105", // custom
          "px-6 py-3 rounded-lg  bg-purple-600 text-white font-semibold shadow-[0_0_12px_rgba(139,92,246,0.35)] hover:bg-purple-500  hover:shadow-[0_0_20px_rgba(139,92,246,0.55)] transition-all duration-200 cursor-pointer", // custom
        glass:
          "cursor-pointer relative px-8 py-4 text-white font-medium rounded-xl backdrop-blur-2xl bg-white/5 border border-white/10 shadow-[0_0_25px_rgba(255,255,255,0.06)] hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.12)] transition-all duration-300 hover:scale-105before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300", // custom
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        xl: "h-12 px-6 text-base rounded-xl", // custom
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
