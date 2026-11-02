"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { galleryItems } from "~/data/gallery";
import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { Lightbox } from "~/components/ui/Lightbox";
import { staggerContainer, staggerItem } from "~/lib/motion";

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  if (galleryItems.length === 0) return null;

  return (
    <AnimatedSection id="gallery">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Field Work" subtitle="Installations and work in the field" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
        >
          {galleryItems.map((item, i) => (
            <motion.button
              key={item.src}
              variants={staggerItem}
              onClick={() => setIndex(i)}
              className="relative aspect-square overflow-hidden rounded-xl border border-white/10 group"
            >
              {item.type === "image" ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.src}
                  alt={item.caption || "Field work"}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              ) : (
                <>
                  <video src={item.src} className="h-full w-full object-cover" muted />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Play size={22} className="text-white" fill="white" />
                  </div>
                </>
              )}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {index !== null && (
        <Lightbox
          items={galleryItems}
          index={index}
          onClose={() => setIndex(null)}
          onIndexChange={setIndex}
        />
      )}
    </AnimatedSection>
  );
}
