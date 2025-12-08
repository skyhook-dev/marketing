"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none" | "blur-in" | "slide-fade";
  fullWidth?: boolean;
}

export function FadeIn({ 
  children, 
  className = "", 
  delay = 0, 
  direction = "up",
  fullWidth = false 
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  // Consistent blur value: 8px for all blur effects
  const BLUR_AMOUNT = "8px";

  const getInitialVariant = (dir: string) => {
    switch (dir) {
        case "up": return { y: 24, x: 0, opacity: 0, filter: "blur(0px)" };
        case "down": return { y: -24, x: 0, opacity: 0, filter: "blur(0px)" };
        case "left": return { x: 24, y: 0, opacity: 0, filter: "blur(0px)" };
        case "right": return { x: -24, y: 0, opacity: 0, filter: "blur(0px)" };
        case "none": return { x: 0, y: 0, opacity: 0, filter: "blur(0px)" };
        case "blur-in": return { opacity: 0, filter: `blur(${BLUR_AMOUNT})`, y: 8, x: 0 };
        case "slide-fade": return { opacity: 0, x: 20, filter: `blur(4px)`, y: 0 };
        default: return { y: 24, x: 0, opacity: 0, filter: "blur(0px)" };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialVariant(direction)}
      animate={isInView ? { opacity: 1, x: 0, y: 0, filter: "blur(0px)" } : {}}
      transition={{
        duration: 0.9,
        delay: delay,
        ease: [0.22, 1, 0.36, 1], // Custom easing for a more "organic" feel
      }}
      className={className}
      style={{ width: fullWidth ? "100%" : "auto" }}
    >
      {children}
    </motion.div>
  );
}

export function FadeInStagger({ children, className = "", faster = false }: { children: React.ReactNode; className?: string; faster?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: faster ? 0.1 : 0.2,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Fades out content as it scrolls toward the top of the viewport
export function FadeOnExit({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // Track from when element's bottom hits viewport bottom, to when element's top hits viewport top
    offset: ["start end", "end start"]
  });

  // Fade out as element exits top of viewport
  // 0 = element just entered from bottom
  // 0.5 = element is centered in viewport
  // 1 = element has exited top
  const opacity = useTransform(scrollYProgress, [0.75, 0.9], [1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
