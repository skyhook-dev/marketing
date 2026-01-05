"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function WhatIsSkyhook() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax offsets
    const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const y2 = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const y3 = useTransform(scrollYProgress, [0, 1], [30, -30]);

    return (
        <div ref={containerRef} className="relative w-full md:w-[1310px] mx-auto px-4 md:px-0 py-24">

            {/* Decorative Cubes - Hidden on mobile, visible on desktop */}
            <div className="hidden md:block absolute inset-0 pointer-events-none z-20">
                {/* Cube 1 (Left) */}
                <motion.img
                    src="/images/platform/platform-page/cube-1.svg"
                    alt=""
                    style={{ y: y1 }}
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-[0px] top-[20%] w-[180px] h-auto"
                />

                {/* Cube 2 (Right Top) */}
                <motion.img
                    src="/images/platform/platform-page/cube-2.svg"
                    alt=""
                    style={{ y: y2 }}
                    animate={{ rotate: [0, -10, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute right-[50px] top-[-20px] w-[140px] h-auto"
                />

                {/* Cube 3 (Right Bottom) */}
                <motion.img
                    src="/images/platform/platform-page/cube-3.svg"
                    alt=""
                    style={{ y: y3 }}
                    animate={{ rotate: [0, 8, 0] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute right-[50px] bottom-[-20px] w-[160px] h-auto"
                />
            </div>

            <div className="flex flex-col items-center gap-8 text-center max-w-4xl mx-auto relative z-10">
                <h2
                    className="text-[#101927] font-semibold leading-[110%] text-[32px] md:text-[50px]"
                    style={{ fontFamily: '"DM Sans"' }}
                >
                    What is Skyhook?
                </h2>
                <div className="flex flex-col gap-6 text-[#445166] text-lg md:text-2xl leading-relaxed font-light">
                    <p>
                        Skyhook is all the automation and work you would do to deliver a kubernetes-based platform, available immediately, right in your cloud, on your terms, together with a developer interface.
                    </p>
                    <p>
                        It’s a modern k8s-based internal developer platform that implements best practices and golden paths, by orchestrating the best-of-breed open source and enterprise tools in the industry.
                    </p>
                </div>
            </div>
        </div>
    );
}
