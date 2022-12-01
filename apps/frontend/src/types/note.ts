export interface File {
  source: string;
  options: {
    type: string;
  };
}

export interface NoteItemData {
  title: string;
  lastUpdate: string;
  content: string;
  images: string[];
  tags: string[];
}
