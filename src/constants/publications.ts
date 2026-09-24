export type Publication = {
  title: string;
  authors: string;
  year: number;
  venue: string;
  isbn?: string;
  href: string;
};

export const publications: Publication[] = [
  {
    title: 'Collaborative Filtering Based Simple Recommender System',
    authors: 'Bin Junaid, A., Farooque, U., Khan, B., & Gupta, A.',
    year: 2014,
    venue: 'IEEE Xplore',
    isbn: '978-93-80544-10-6',
    href: 'https://ieeexplore.ieee.org/document/6828187/',
  },
];
