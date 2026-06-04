export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Album {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  images: GalleryImage[];
}

export const albums: Album[] = [
  {
    slug: "dokter-traveler",
    title: "Dengan Dokter Traveler Trans TV",
    description: "Momen kebersamaan kami dengan tim Dokter Traveler Trans TV saat berkunjung ke rumah singgah.",
    coverImage: "/hero_child_smiling.png",
    images: [
      { src: "/hero_child_smiling.png", alt: "Sesi kreatif dengan anak-anak" },
      { src: "/shelter_home.png", alt: "Suasana rumah singgah" },
      { src: "/education_program.png", alt: "Program pendidikan mingguan" },
    ],
  },
  {
    slug: "konser-kita",
    title: "Acara Konser Kita",
    description: "Kegembiraan dan semangat anak-anak dalam acara konser musik amal kami.",
    coverImage: "/emotional_support.png",
    images: [
      { src: "/emotional_support.png", alt: "Sesi musik terapi" },
      { src: "/nutrition_kits.png", alt: "Persiapan kit nutrisi" },
    ],
  },
  {
    slug: "hair-for-solidarity",
    title: "Acara Hair for Solidarity",
    description: "Aksi solidaritas cukur rambut sebagai bentuk dukungan bagi anak-anak pejuang kanker.",
    coverImage: "/medical_support.png",
    images: [
      { src: "/medical_support.png", alt: "Dukungan medis untuk anak" },
      { src: "/education_program.png", alt: "Aktivitas belajar" },
    ],
  },
  {
    slug: "lain-lain",
    title: "Lain-lain",
    description: "Kumpulan momen berharga lainnya dari berbagai kegiatan di yayasan.",
    coverImage: "/nutrition_kits.png",
    images: [
      { src: "/nutrition_kits.png", alt: "Distribusi bantuan" },
      { src: "/shelter_home.png", alt: "Area bermain anak" },
    ],
  },
];
