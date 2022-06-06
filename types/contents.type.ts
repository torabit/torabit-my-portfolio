export interface Contents {
  profile: Profile;
  skills: Skill[];
  keywords: {
    categoryList: Category[];
    keywordList: Keyword[];
    keywordRandomLabel: string;
    filterLabel: string;
    keywrodRandomDescription: string;
  };
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

export interface Keyword {
  categoryId: number;
  keyword: string;
}

export interface Category {
  id: number;
  name: string;
}
