"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck, ExternalLink, FileText } from "lucide-react";
import { certificates } from "~/data/certificates";
import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "~/lib/motion";

export function Certificates() {
  return (
    <AnimatedSection id="certificates">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Certificates" subtitle="Courses and certifications" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {certificates.map((c) => (
            <motion.div
              key={c.id}
              variants={staggerItem}
              className="glass glass-hover rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.1)]"
            >
              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-red-500/10">
                  <Award size={18} className="text-red-400" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-[#fafafa]">{c.title}</h3>
                  <p className="mt-1 text-sm text-red-400">{c.issuer}</p>
                  <p className="text-sm text-[#a1a1aa]/60 font-mono">{c.date}</p>

                  {c.description && (
                    <p className="mt-3 text-sm leading-relaxed text-[#a1a1aa]">
                      {c.description}
                    </p>
                  )}

                  {c.credentialId && (
                    <p className="mt-3 flex items-center gap-1.5 text-xs text-[#a1a1aa]/70 font-mono break-all">
                      <BadgeCheck size={14} className="shrink-0 text-red-400" />
                      Credential ID: {c.credentialId}
                    </p>
                  )}

                  {(c.verifyUrl || c.fileUrl) && (
                    <div className="mt-3 flex flex-wrap gap-4">
                      {c.verifyUrl && (
                        <a
                          href={c.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-[#a1a1aa] hover:text-red-400 transition-colors"
                        >
                          <ExternalLink size={14} />
                          Verify
                        </a>
                      )}
                      {c.fileUrl && (
                        <a
                          href={c.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-[#a1a1aa] hover:text-red-400 transition-colors"
                        >
                          <FileText size={14} />
                          View certificate
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
