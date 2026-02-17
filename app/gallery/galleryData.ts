// This file exports the gallery images for use in other components
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  description: string;
  width: number;
  height: number;
}

export const galleryImages: GalleryImage[] = [
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
