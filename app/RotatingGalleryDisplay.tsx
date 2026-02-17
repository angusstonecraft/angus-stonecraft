"use client";
import React, { useState } from "react";
import Image from "next/image";
import { galleryImages, GalleryImage } from "./gallery/galleryData";

export default function RotatingGalleryDisplay() {
  const [current, setCurrent] = useState(0);
  const images = galleryImages;
  const total = images.length;
  const goPrev = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const goNext = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  // Title always visible now, so no hover state needed

  return (
    <div className="w-full flex flex-col items-center my-8 relative">
      <div className="relative flex items-center justify-center w-full max-w-4xl" style={{ minHeight: 340 }}>
        {/* Left Arrow */}
        <button
          aria-label="Previous image"
          onClick={goPrev}
          className="absolute left-0 z-10 h-full px-2 flex items-center justify-center transition rounded-l-lg"
          style={{ top: 0, bottom: 0, background: '#d6a461cc', minWidth: 32 }}
        >
          <span className="text-5xl text-white select-none">&#8592;</span>
        </button>
        {/* Image */}
        <div
          className="w-full flex justify-center items-center overflow-hidden rounded-lg shadow-lg"
          style={{ background: "#fff", minHeight: 280 }}
        >
          <Image
            src={images[current].src}
            alt={images[current].alt}
            width={images[current].width}
            height={images[current].height}
            className="object-contain max-h-[280px] transition-all duration-500"
            priority
          />
        </div>
        {/* Right Arrow */}
        <button
          aria-label="Next image"
          onClick={goNext}
          className="absolute right-0 z-10 h-full px-2 flex items-center justify-center transition rounded-r-lg"
          style={{ top: 0, bottom: 0, background: '#d6a461cc', minWidth: 32 }}
        >
          <span className="text-5xl text-white select-none">&#8594;</span>
        </button>
      </div>
      {/* Title (always visible) */}
      <div
        className="mt-4 text-2xl font-semibold text-center"
        style={{ color: "#333", fontFamily: "var(--font-playfair-display)" }}
      >
        {images[current].alt}
      </div>
    </div>
  );
}
