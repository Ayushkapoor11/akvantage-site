"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.08]",
            "shadow-[0_8px_32px_0_rgba(255,69,0,0.08)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,69,0,0.15),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

function HeroGeometric({
  badge = "Mesa, AZ",
  title1 = "Websites that",
  title2 = "get customers.",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-ink">
      {/* Subtle fire glow bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-fire/[0.04] via-transparent to-fire/[0.03] blur-3xl" />

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-fire/[0.12]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-gold/[0.08]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-fire/[0.10]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-gold/[0.06]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-fire/[0.08]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fire/[0.08] border border-fire/[0.20] mb-8 md:mb-12"
          >
            <Circle className="h-2 w-2 fill-fire" />
            <span className="text-sm text-cream/70 tracking-wide font-outfit">
              {badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-fraunces font-black italic mb-6 md:mb-8 tracking-tight leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-cream to-cream/80">
                {title1}
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fire via-orange-400 to-gold">
                {title2}
              </span>
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-mid mb-10 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              Strategic design and development for local businesses that want to
              thrive online. No fluff—just results.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="#contact"
              className="relative group px-8 py-4 bg-fire text-ink font-semibold rounded text-base transition-all hover:-translate-y-1 shadow-lg hover:shadow-fire/30 overflow-hidden"
            >
              <span className="absolute h-px opacity-0 group-hover:opacity-100 transition-all duration-500 inset-x-0 top-0 bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
              Book a Free Consultation
              <span className="absolute h-px opacity-30 group-hover:opacity-60 transition-all duration-500 inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-transparent border-2 border-cream/20 text-cream font-semibold rounded text-base hover:border-fire hover:text-fire transition-all hover:bg-fire/5"
            >
              See Our Work →
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            custom={4}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-20"
          >
            <div className="text-center">
              <div className="font-bebas text-4xl text-gold mb-1">8+</div>
              <div className="text-sm text-muted font-outfit">Templates Ready</div>
            </div>
            <div className="text-center">
              <div className="font-bebas text-4xl text-gold mb-1">2–3 wk</div>
              <div className="text-sm text-muted font-outfit">Launch Time</div>
            </div>
            <div className="text-center">
              <div className="font-bebas text-4xl text-gold mb-1">Mesa, AZ</div>
              <div className="text-sm text-muted font-outfit">Local & Proud</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60 pointer-events-none" />
    </div>
  );
}

export { HeroGeometric, ElegantShape };
