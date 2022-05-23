export interface Contents {
  profile: Profile;
  skills: Skill[];
}

export interface Profile {
  name: string;
  kana?: string;
  biography: string;
  me: string;
  skills: string;
}

export interface Skill {
  category: string;
  subCategory?: string[];
}
