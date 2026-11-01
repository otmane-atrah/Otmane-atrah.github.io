"use client";

import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { MediaItem } from "~/types/data";

interface LightboxProps {
  items: MediaItem[];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export function Lightbox({ items, index, onClose, onIndexChange }: LightboxProps) {
  const item = items[index];

  const prev = useCallback(() => {
    onIndexChange((index - 1 + items.length) % items.length);
  }, [index, items.length, onIndexChange]);

  const next = useCallback(() => {
    onIndexChange((index + 1) % items.length);
  }, [index, items.length, onIndexChange]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors"
      >
        <X size={28} />
      </button>

      {items.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
            className="absolute left-2 md:left-6 z-10 text-white/70 hover:text-white transition-colors"
          >
            <ChevronLeft size={36} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
            className="absolute right-2 md:right-6 z-10 text-white/70 hover:text-white transition-colors"
          >
            <ChevronRight size={36} />
          </button>
        </>
      )}

      <div
        className="max-w-5xl max-h-[85vh] w-full flex flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "image" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.src}
            alt={item.caption || ""}
            className="max-h-[75vh] w-auto rounded-lg object-contain"
          />
        ) : (
          <video
            src={item.src}
            controls
            autoPlay
            className="max-h-[75vh] w-auto rounded-lg"
          />
        )}
        {item.caption && (
          <p className="text-sm text-white/70 text-center">{item.caption}</p>
        )}
        {items.length > 1 && (
          <p className="text-xs text-white/40 font-mono">
            {index + 1} / {items.length}
          </p>
        )}
      </div>
    </div>
  );
}
