"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ExperienceImage } from "@/data/experiences";

interface GalleryLabels {
  gallery: string;
  viewImage: string;
  previousImage: string;
  nextImage: string;
  closeImage: string;
  image: string;
  images: string;
}

interface ExperienceGalleryProps {
  images: ExperienceImage[];
  labels: GalleryLabels;
}

export function ExperienceGallery({ images, labels }: ExperienceGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveIndex(null);
      } else if (event.key === "ArrowLeft" && images.length > 1) {
        setActiveIndex((current) =>
          current === null ? null : (current - 1 + images.length) % images.length
        );
      } else if (event.key === "ArrowRight" && images.length > 1) {
        setActiveIndex((current) =>
          current === null ? null : (current + 1) % images.length
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      openerRef.current?.focus();
    };
  }, [images.length, isOpen]);

  const activeImage = activeIndex === null ? null : images[activeIndex];

  return (
    <section className="mt-12" aria-labelledby="experience-gallery-heading">
      <h2 id="experience-gallery-heading" className="text-2xl font-bold tracking-tight">
        {labels.gallery}
      </h2>

      {images.length === 0 ? (
        <div className="mt-5 rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
          {labels.images}
        </div>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {images.map((image, index) => (
            <figure key={image.src} className="overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
              <button
                type="button"
                onClick={(event) => {
                  openerRef.current = event.currentTarget;
                  setActiveIndex(index);
                }}
                className="group block w-full bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-600 dark:bg-slate-950"
                aria-label={`${labels.viewImage}: ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 640px) calc(100vw - 3rem), (max-width: 1024px) 50vw, 448px"
                  className={`w-full transition duration-200 group-hover:opacity-90 ${
                    image.fit === "cover"
                      ? "aspect-[4/3] object-cover"
                      : "mx-auto h-auto max-h-[32rem] w-auto max-w-full object-contain"
                  }`}
                />
              </button>
            </figure>
          ))}
        </div>
      )}

      {activeImage && activeIndex !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={labels.gallery}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default bg-slate-950/95"
            onClick={() => setActiveIndex(null)}
            aria-label={labels.closeImage}
          />

          <div className="relative z-10 flex max-h-full w-full max-w-6xl flex-col items-center">
            <div className="mb-3 flex w-full items-center justify-between gap-4 text-white">
              <span className="text-sm font-medium">
                {labels.image} {activeIndex + 1} / {images.length}
              </span>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setActiveIndex(null)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/30 text-xl transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label={labels.closeImage}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div className="flex min-h-0 w-full flex-1 items-center justify-center">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                width={activeImage.width}
                height={activeImage.height}
                sizes="95vw"
                priority
                className="h-auto max-h-[78vh] w-auto max-w-full rounded-lg object-contain"
              />
            </div>

            {images.length > 1 ? (
              <div className="mt-4 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveIndex((activeIndex - 1 + images.length) % images.length)}
                  className="rounded-full border border-white/30 bg-black/30 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label={labels.previousImage}
                >
                  <span aria-hidden="true">←</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveIndex((activeIndex + 1) % images.length)}
                  className="rounded-full border border-white/30 bg-black/30 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label={labels.nextImage}
                >
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  );
}
