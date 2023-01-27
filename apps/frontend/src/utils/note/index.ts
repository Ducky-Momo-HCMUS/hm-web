import { File } from '../../types/note';

export const mapImageUrlToFile = (images: string[]) => {
  if (!images) return [];
  return images.map((image) => ({
    source: image,
    options: { type: 'local' },
  })) as File[];
};

export const extractContent = (html: string) => {
  return new DOMParser().parseFromString(html, 'text/html').documentElement
    .textContent;
};
