"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "~/data/education";
import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "~/lib/motion";

export function Education() {
  return (
    <AnimatedSection id="education">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Education" subtitle="Where I studied" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4"
        >
          {education.map((item) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              className="glass glass-hover rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.1)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-red-500/10">
                    <GraduationCap size={18} className="text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#fafafa]">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-sm text-red-400">{item.school}</p>
                    <p className="text-sm text-[#a1a1aa]/60">{item.location}</p>
                  </div>
                </div>
                <span className="text-sm text-[#a1a1aa]/60 font-mono">{item.year}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
