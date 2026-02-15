'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  description: string;
  width: number;
  height: number;
}

const images: GalleryImage[] = [
  {
    id: 'belt_1',
    src: '/belt_1.JPEG',
    alt: 'Wonderstone Belt',
    description: '40x30mm wonderstone cabochon set in an intricately designed belt buckle. Material collected outside of Fallon, Nevada.',
    width: 400,
    height: 300,
  },
  {
    id: 'book_1',
    src: '/book_1.JPEG',
    alt: 'Conglomerate Bookends (1/2)',
    description: 'A pair of bookends made from conglomerate with amethyst inclusions, showcasing unique natural formations. Material found in Custer County, Idaho',
    width: 350,
    height: 280,
  },
  {
    id: 'book_2',
    src: '/book_2.JPEG',
    alt: 'Conglomerate Bookends (2/2)',
    description: 'Another view of the conglomerate bookends, highlighting the variation of the material.',
    width: 350,
    height: 280,
  },
  {
    id: 'fluorite_1',
    src: '/fluorite_1.JPEG',
    alt: 'Fluorite Cabochon',
    description: 'Vibrant fluorite cabochon set in a stainless steel leaf pendant.',
    width: 380,
    height: 320,
  },
  {
    id: 'tiger_1',
    src: '/tiger_1.JPEG',
    alt: 'Hawks Eye Cabochon',
    description: 'A beautifully polished hawks eye cabochon, 40x30mm.',
    width: 420,
    height: 300,
  },
  {
    id: 'turq_1',
    src: '/turq_1.JPEG',
    alt: 'Turquoise Cabochon',
    description: 'Exquisite turquoise cabochon mounted in a stainless steel leaf pendant.',
    width: 360,
    height: 300,
  },
  {
    id: 'two_cab',
    src: '/two_cab.JPEG',
    alt: 'Cabochon Pair (1/2)',
    description: '',
    width: 390,
    height: 310,
  },
  {
    id: 'two_cab_2',
    src: '/two_cab_2.JPEG',
    alt: 'Cabochon Pair (2/2)',
    description: '',
    width: 390,
    height: 310,
  },
];

// Showcase image - separate from gallery
const showcaseImage: GalleryImage = {
  id: 'showcase',
  src: '/green_1.JPEG', // Replace with your showcase image filename
  alt: 'Jade Necklace',
  description: 'An exceptional jade necklace mounted in a bronze setting.',
  width: 800,
  height: 600,
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const handlePrevious = () => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    if (currentIndex > 0) {
      setSelectedImage(images[currentIndex - 1]);
    } else {
      setSelectedImage(images[images.length - 1]);
    }
  };

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    if (currentIndex < images.length - 1) {
      setSelectedImage(images[currentIndex + 1]);
    } else {
      setSelectedImage(images[0]);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="p-10 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Gallery</h1>
        <p className="text-lg text-gray-600 mb-10">Stone pieces and custom work. Click on any image to view details.</p>
        
        {/* Showcase Section */}
        <div
          className="mb-12 rounded-lg overflow-hidden shadow-lg cursor-pointer group transition-transform duration-200 hover:shadow-2xl hover:scale-102"
          onClick={() => setSelectedImage(showcaseImage)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter') setSelectedImage(showcaseImage);
          }}
        >
          <div className="relative w-full" style={{ aspectRatio: `${showcaseImage.width}/${showcaseImage.height}`, maxHeight: '400px' }}>
            <Image
              src={showcaseImage.src}
              alt={showcaseImage.alt}
              fill
              className="object-contain w-full h-full group-hover:brightness-95 transition-all duration-200"
              sizes="100vw"
              priority
            />
          </div>
          <div className="p-6 bg-white">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">{showcaseImage.alt}</h2>
            <p className="text-gray-600">{showcaseImage.description}</p>
          </div>
        </div>
        
        {/* Collage Grid */}
        <div className="grid gap-0 mb-10" style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gridAutoRows: 'auto',
        }}>
          {images.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden cursor-pointer group bg-white transition-transform duration-200 hover:scale-105 hover:z-10 shadow-md hover:shadow-xl"
              onClick={() => setSelectedImage(image)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') setSelectedImage(image);
              }}
            >
              <div className="relative w-full h-64">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover w-full h-full group-hover:brightness-90 transition-all duration-200"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="font-semibold text-gray-800">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          role="button"
          tabIndex={-1}
        >
          <div
            className="bg-white rounded-lg shadow-2xl max-w-4xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-gray-300 hover:bg-gray-400 text-black rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold z-10"
              aria-label="Close"
            >
              ×
            </button>
            <div className="flex items-center justify-between">
              {/* Previous Button */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-200 text-black rounded-full w-12 h-12 flex items-center justify-center text-3xl font-bold transition-colors duration-200"
                aria-label="Previous image"
              >
                ‹
              </button>

              {/* Image Container */}
              <div className="relative w-full h-96">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 70vw"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-200 text-black rounded-full w-12 h-12 flex items-center justify-center text-3xl font-bold transition-colors duration-200"
                aria-label="Next image"
              >
                ›
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">{selectedImage.alt}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
