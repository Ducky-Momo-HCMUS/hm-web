interface SocialInfo {
  name: string;
  url: string;
}

export interface Contact {
  phoneNumber: string;
  socialInfoList: SocialInfo[];
}

export interface StudentData {
  studentId: string;
  fullName: string;
  major: string;
  status: string;
  gpaFourPointScale: number;
  gpaTenPointScale: number;
  contact: Contact;
}

export interface NoteItemData {
  title: string;
  lastUpdate: string;
}
