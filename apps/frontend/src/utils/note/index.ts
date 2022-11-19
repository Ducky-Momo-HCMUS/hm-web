import { File } from '../../types/note';

export const mapImageUrlToFile = (images: string[]) => {
  return images.map((image) => ({
    source: image,
    options: { type: 'local' },
  })) as File[];
};
