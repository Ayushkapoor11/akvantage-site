"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

interface TemplateCard {
  id: string;
  title: string;
  description: string;
  href: string;
  /** Tailwind gradient classes for the preview tile */
  gradient: string;
  icon: string;
}

const templates: TemplateCard[] = [
  {
    id: "1",
    title: "Smoke Shop",
    description: "Bold, edgy design for tobacco & vape retailers",
    href: "/templates/1-smoke-shop.html",
    gradient: "from-zinc-800 to-zinc-900",
    icon: "🔥",
  },
  {
    id: "2",
    title: "Local Service",
    description: "Clean trust-building site for home services",
    href: "/templates/2-local-service.html",
    gradient: "from-sky-900 to-ink",
    icon: "🔧",
  },
  {
    id: "3",
    title: "Personal Brand",
    description: "Sleek portfolio for coaches & consultants",
    href: "/templates/3-personal-brand.html",
    gradient: "from-violet-900 to-ink",
    icon: "✨",
  },
  {
    id: "4",
    title: "Chinese Restaurant",
    description: "Rich, appetizing layout for Asian cuisine",
    href: "/templates/4-chinese-restaurant.html",
    gradient: "from-red-900 to-ink",
    icon: "🥢",
  },
  {
    id: "5",
    title: "Agency Portfolio",
    description: "Modern showcase for creative agencies",
    href: "/templates/5-agency-portfolio.html",
    gradient: "from-emerald-900 to-ink",
    icon: "🎨",
  },
  {
    id: "6",
    title: "E-Commerce",
    description: "Conversion-focused storefront design",
    href: "/templates/6-ecommerce.html",
    gradient: "from-amber-900 to-ink",
    icon: "🛍️",
  },
  {
    id: "7",
    title: "Restaurant",
    description: "Inviting design for food & hospitality",
    href: "/templates/7-restaurant.html",
    gradient: "from-orange-900 to-ink",
    icon: "🍽️",
  },
  {
    id: "8",
    title: "Fitness Studio",
    description: "High-energy look for gyms & trainers",
    href: "/templates/8-fitness-studio.html",
    gradient: "from-lime-900 to-ink",
    icon: "💪",
  },
];

export default function Gallery4() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section
      id="gallery"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-ink-2 border-t border-border scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-fraunces italic font-black text-cream mb-4">
            See Example Designs
          </h2>
          <p className="text-lg text-mid max-w-xl mx-auto">
            Every site we build is tailored to your unique business. Browse our
            ready-made templates by industry.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative px-12">
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {templates.map((t) => (
                <CarouselItem
                  key={t.id}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <a
                    href={t.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-lg overflow-hidden border border-border hover:border-fire/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-fire/10"
                  >
                    {/* Preview tile */}
                    <div
                      className={`relative h-48 bg-gradient-to-br ${t.gradient} flex items-center justify-center`}
                    >
                      <span className="text-5xl">{t.icon}</span>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-fire/0 group-hover:bg-fire/10 transition-all duration-300 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm font-semibold text-cream bg-ink/80 px-4 py-2 rounded border border-fire/30">
                          View Template →
                        </span>
                      </div>
                    </div>

                    {/* Card info */}
                    <div className="p-4 bg-ink-2">
                      <h3 className="font-fraunces italic font-black text-cream text-lg mb-1 group-hover:text-fire transition-colors">
                        {t.title}
                      </h3>
                      <p className="text-sm text-mid">{t.description}</p>
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6" />
            <CarouselNext className="-right-6" />
          </Carousel>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 bg-fire"
                  : "w-1.5 bg-cream/20 hover:bg-cream/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="/gallery.html"
            className="inline-block px-8 py-4 bg-fire text-ink font-semibold rounded text-base hover:bg-orange-600 transition-all hover:-translate-y-1 shadow-lg hover:shadow-fire/20"
          >
            View Full Gallery →
          </a>
        </div>
      </div>
    </section>
  );
}
