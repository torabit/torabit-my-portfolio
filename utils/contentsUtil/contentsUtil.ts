import { useLanguage } from "@/states/languageState";
import type { Contents } from "@/types/contents.type";

export class ContentsUtil {
  private languageHooks = useLanguage();

  private readonly contentsInEnglish: Contents = {
    profile: {
      name: "Toranosuke Ujike",
      biography: `Nice to meet you🎈My name is Toranosuke Ujike.🐯 I started to study programing in April of 2021.
      Learning new things despite of my position  is what I am interested in. Such as new languages, frame work and architecture. 📒
      Absorbing opinions is another thing I have fun doing. I have made connections with people on the internet, who are now my great friends.🕸️
      On my spare time, I like making music and play my bass 🎹🎸
       Thank you👶🏾
      `,
      me: "About Me",
      skills: "Skills",
    },
    skills: [
      { category: "Frontend" },
      { category: "Backend" },
      { category: "Database" },
      { category: "Other" },
    ],
  };

  private readonly contentsInJapanese: Contents = {
    profile: {
      name: "氏家 虎之介",
      kana: "うじけ とらのすけ",
      biography: `はじめまして🎈2021年の4月からプログラミングを学び始めたうじけとらのすけと申します🐯
        新しい言語、フレームワーク、アーキテクチャに興味があり、ポジションにとらわれず日々様々な勉強をしています📒
        人とコミュニケーションを取るのが好きで、インターネットでいろいろな友達と繋がっています🕸️
        趣味は音楽で、休みの日には作曲をしたりベースを弾いたりしています🎹🎸
        よろしくお願いします👶🏾
        `,
      me: "自己紹介",
      skills: "できること",
    },
    skills: [
      { category: "フロントエンド" },
      { category: "バックエンド" },
      { category: "データベース" },
      { category: "その他" },
    ],
  };

  public getContents() {
    const language = this.languageHooks.language;

    switch (language) {
      case "en":
        return this.contentsInEnglish;
      case "ja":
        return this.contentsInJapanese;
      default:
        const _language: never = language;
        throw new Error(`Specified language '${_language}' is not supported`);
    }
  }

  public getContentsInEnglish() {
    return this.contentsInEnglish;
  }

  public getContentsInJapanese() {
    return this.contentsInJapanese;
  }
}
