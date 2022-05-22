export interface Contents {
  profile: Profile;
  skills: Skill[];
}

export interface Profile {
  name: string;
  kana?: string;
  biography: string;
}

export interface Skill {
  category: string;
  subCategory?: string[];
}
