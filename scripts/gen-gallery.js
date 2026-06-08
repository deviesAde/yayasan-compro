/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const dirsConfig = [
  {
    dir: '2021',
    slug: 'activities-2021',
    title: 'Activities 2021',
    description: 'Precious moments and care activities supporting children battling leukemia throughout 2021.'
  },
  {
    dir: '2022',
    slug: 'activities-2022',
    title: 'Activities 2022',
    description: 'Nutrition support, education programs, and medical care initiatives during 2022.'
  },
  {
    dir: '2023',
    slug: 'activities-2023',
    title: 'Activities 2023',
    description: 'Real acts of solidarity with volunteers and donors throughout 2023.'
  },
  {
    dir: '2024',
    slug: 'activities-2024',
    title: 'Activities 2024',
    description: 'Humanitarian aid distribution and creative educational programs in 2024.'
  },
  {
    dir: 'Disability Day 2025',
    slug: 'disability-day-2025',
    title: 'Disability Day 2025',
    description: 'Peringatan Hari Disabilitas Internasional bersama pejuang cilik, merayakan ketegaran dan semangat pantang menyerah.'
  },
  {
    dir: 'Tunica concert 2025',
    slug: 'tunica-concert-2025',
    title: 'Tunica Concert 2025',
    description: 'Keceriaan, harmoni musik, dan kebersamaan hangat dalam acara konser amal Tunica Concert 2025.'
  },
  {
    dir: 'National Television Program (Dokter Traveler TransTV)',
    slug: 'dokter-traveler-transtv',
    title: 'Dokter Traveler TransTV',
    description: 'Momen seru dan interaktif saat tim Dokter Traveler Trans TV mengunjungi dan bermain bersama anak-anak.'
  },
  {
    dir: 'Cancer Day 2026',
    slug: 'cancer-day-2026',
    title: 'Cancer Day 2026',
    description: 'Aksi kepedulian bersama pejuang kanker anak dalam memperingati Hari Kanker Sedunia 2026.'
  },
  {
    dir: 'Eid Mubarak 2026',
    slug: 'eid-mubarak-2026',
    title: 'Eid Mubarak 2026',
    description: 'Perayaan Idul Fitri penuh berkah bersama anak-anak di rumah singgah, berbagi kebahagiaan hari raya.'
  },
  {
    dir: 'Miracle of Smile 2026',
    slug: 'miracle-of-smile-2026',
    title: 'Miracle of Smile 2026',
    description: 'Senyum optimisme anak-anak dalam program dukungan mental, terapi bermain, dan pemulihan.'
  }
];

const publicPath = path.join(__dirname, '..', 'public');

const albums = dirsConfig.map(config => {
  const fullPath = path.join(publicPath, config.dir);
  let files = [];
  try {
    files = fs.readdirSync(fullPath).filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.webp', '.jpg', '.jpeg', '.png', '.gif'].includes(ext);
    });
  } catch (err) {
    console.error(`Error reading directory ${config.dir}:`, err.message);
  }

  // Sort files so that IMG_ or R00 or DSC files come first for better cover images
  const sortedFiles = [...files].sort((a, b) => {
    const isSpecialA = a.startsWith('IMG_') || a.startsWith('R00') || a.startsWith('DSC') ? 0 : 1;
    const isSpecialB = b.startsWith('IMG_') || b.startsWith('R00') || b.startsWith('DSC') ? 0 : 1;
    return isSpecialA - isSpecialB;
  });

  const encodedDir = encodeURIComponent(config.dir);
  const images = files.map(file => ({
    src: `/${encodedDir}/${encodeURIComponent(file)}`,
    alt: `${config.title} - ${path.basename(file, path.extname(file))}`
  }));

  const coverImage = sortedFiles.length > 0 
    ? `/${encodedDir}/${encodeURIComponent(sortedFiles[0])}` 
    : '/hero_child_smiling.png';

  return {
    slug: config.slug,
    title: config.title,
    description: config.description,
    coverImage,
    images
  };
});

const outputContent = `export interface GalleryImage {
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

export const albums: Album[] = ${JSON.stringify(albums, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '..', 'lib', 'gallery-data.ts'), outputContent, 'utf-8');
console.log('Successfully generated lib/gallery-data.ts');
