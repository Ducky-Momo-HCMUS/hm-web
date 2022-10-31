interface SocialInfo {
  name: string;
  url: string;
}

export interface Contact {
  phoneNumber: string;
  socialInfoList: SocialInfo[];
}

export interface StudentData {
  index: number;
  studentId: string;
  fullName: string;
  major: string;
  status: string;
  gpaFourPointScale: number;
  gpaTenPointScale: number;
  contact: Contact;
}
