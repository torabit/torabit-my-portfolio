import { useLanguage } from "@/states/languageState";
import type { Contents } from "@/types/contents.type";

export class ContentsUtil {
  private languageHooks = useLanguage();

  private readonly contentsInEnglish: Contents = {
    profile: {
      name: "Toranosuke Ujike",
      biography: `Nice to meet you.🎈
      My name is Toranosuke Ujike.🐯 I started to study programing in April of 2021.
      Learning new things despite of my position  is what I am interested in. Such as new languages, frame work and architecture.📒
      Absorbing opinions is another thing I have fun doing. I have made connections with people on the internet, who are now my great friends.🕸️
      On my spare time, I like making music and play my bass.🎹🎸
       Thank you.👶🏾
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
    keywords: {
      categoryList: [
        { id: 1, name: "Music" },
        { id: 2, name: "Programing" },
        { id: 3, name: "Private Life" },
        { id: 4, name: "Favorite" },
        { id: 5, name: "Dislike" },
        { id: 6, name: "Friends" },
        { id: 7, name: "Comic" },
        { id: 8, name: "Game" },
        { id: 9, name: "Childhood" },
      ],
      keywordList: [
        { categoryId: 1, keyword: "Bass" },
        { categoryId: 1, keyword: "Guitar" },
        { categoryId: 1, keyword: "String Bass" },
        { categoryId: 1, keyword: "Compose" },
        { categoryId: 1, keyword: "Brass Band" },
        { categoryId: 1, keyword: "Band" },
        { categoryId: 1, keyword: "The vocalist stole the sales" },
        { categoryId: 1, keyword: "Kyoto Seika University" },
        { categoryId: 1, keyword: "Musical Grammarly" },
        { categoryId: 1, keyword: "Jazz" },
        { categoryId: 1, keyword: "Flute" },
        { categoryId: 1, keyword: "Live" },
        { categoryId: 1, keyword: "R&B" },
        { categoryId: 1, keyword: "J-pop" },
        { categoryId: 1, keyword: "Every Friday" },
        { categoryId: 1, keyword: "DJ" },
        { categoryId: 1, keyword: "Environmental Sounds" },

        { categoryId: 2, keyword: "What I Learned in 1 Month" },
        { categoryId: 2, keyword: "ClipLine" },
        { categoryId: 2, keyword: "Frontend" },
        { categoryId: 2, keyword: "Technical Book" },
        { categoryId: 2, keyword: "Joint Development with Friend" },
        { categoryId: 2, keyword: "What I Learned at a Startup Company" },
        { categoryId: 2, keyword: "What I Learned at a Venture Company" },
        { categoryId: 2, keyword: "Windows" },
        { categoryId: 2, keyword: "Never Giving Up till The End" },
        { categoryId: 2, keyword: "After Studying an Year" },
        { categoryId: 2, keyword: "My First Trial Within 4 Months" },
        { categoryId: 2, keyword: "Full Stack" },
        { categoryId: 2, keyword: "Backend" },
        { categoryId: 2, keyword: "White Board" },
        { categoryId: 2, keyword: "Fitting in an Enviroment" },
        { categoryId: 2, keyword: "Developing a New Project" },
        { categoryId: 2, keyword: "New Technology" },
        { categoryId: 2, keyword: "Studying Everyday" },

        { categoryId: 3, keyword: "Parents" },
        { categoryId: 3, keyword: "Coda" },
        { categoryId: 3, keyword: "My Family Rai" },
        { categoryId: 3, keyword: "NON SMOKING" },
        { categoryId: 3, keyword: "Drawing of Cat" },
        { categoryId: 3, keyword: "Absentence of High School" },
        { categoryId: 3, keyword: "Absentence of University for Studying Programing" },
        { categoryId: 3, keyword: "Leaving University for Work" },
        { categoryId: 3, keyword: "Sign Language" },
        { categoryId: 3, keyword: "Country Side" },
        { categoryId: 3, keyword: "Debate" },

        { categoryId: 4, keyword: "Comparing Myself with My Past" },
        { categoryId: 4, keyword: "Drive" },
        { categoryId: 4, keyword: "Atmosfear" },
        { categoryId: 4, keyword: "Strawberry Daifuku" },
        { categoryId: 4, keyword: "Walking" },
        { categoryId: 4, keyword: "English" },
        { categoryId: 4, keyword: "Sun" },
        { categoryId: 4, keyword: "Effort" },
        { categoryId: 4, keyword: "Focus" },
        { categoryId: 4, keyword: "Study" },
        { categoryId: 4, keyword: "Creative" },
        { categoryId: 4, keyword: "Communication" },
        { categoryId: 4, keyword: "Easy Going" },
        { categoryId: 4, keyword: "Curious" },
        { categoryId: 4, keyword: "Self Education" },

        { categoryId: 5, keyword: "Fast Wakeup" },
        { categoryId: 5, keyword: "Spicy Foods" },
        { categoryId: 5, keyword: "Output" },
        { categoryId: 5, keyword: "Mind Organizing Ability" },
        { categoryId: 5, keyword: "A Person Not Willing to Have Communication" },
        { categoryId: 5, keyword: "Giving Up" },
        { categoryId: 5, keyword: "A Person Not Willing to Share Their Mind" },
        { categoryId: 5, keyword: "I Can't Stay Still" },
        { categoryId: 5, keyword: "Absorbing From A Third Person's View" },
        { categoryId: 5, keyword: "I Don't Know Everything" },

        { categoryId: 6, keyword: "Nosy" },
        { categoryId: 6, keyword: "Being Loved By Many People" },
        { categoryId: 6, keyword: "Internet" },
        { categoryId: 6, keyword: "Programing" },
        { categoryId: 6, keyword: "Nice Guy" },
        { categoryId: 6, keyword: "Funny" },
        { categoryId: 6, keyword: "Mysterious" },
        { categoryId: 6, keyword: "I'm Active" },

        { categoryId: 7, keyword: "5 Years Old" },
        { categoryId: 7, keyword: "8,000 Mangas" },
        { categoryId: 7, keyword: "Doraemon" },
        { categoryId: 7, keyword: "JoJo Part 7" },
        { categoryId: 7, keyword: "Shonen Manga" },
        { categoryId: 7, keyword: "Daily" },

        { categoryId: 8, keyword: "Family Computer" },
        { categoryId: 8, keyword: "Dota2" },
        { categoryId: 8, keyword: "Web Site For Gamers" },
        { categoryId: 8, keyword: "TCG" },
        { categoryId: 8, keyword: "Online Game" },
        { categoryId: 8, keyword: "SEA 700 Place" },
        { categoryId: 8, keyword: "Japan 3rd Place" },
        { categoryId: 8, keyword: "Leader" },

        { categoryId: 9, keyword: "Stars" },
        { categoryId: 9, keyword: "Space" },
        { categoryId: 9, keyword: "Baseball" },
        { categoryId: 9, keyword: "Saxophone" },
        { categoryId: 9, keyword: "Art" },
        { categoryId: 9, keyword: "Nico Nico Doga" },
        { categoryId: 9, keyword: "Plastic Model" },
        { categoryId: 9, keyword: "Being Friendly to Anyone" },
      ],

      keywordRandomLabel: "Choose a keyword randomly !",
      filterLabel: "Filter",
      keywrodRandomDescription: "Description",
    },
  };

  private readonly contentsInJapanese: Contents = {
    profile: {
      name: "氏家 虎之介",
      kana: "うじけ とらのすけ",
      biography: `はじめまして🎈
      2021年の4月からプログラミングを学び始めたうじけとらのすけと申します🐯
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
    keywords: {
      categoryList: [
        { id: 1, name: "音楽" },
        { id: 2, name: "プログラミング" },
        { id: 3, name: "私生活" },
        { id: 4, name: "好きなもの、こと" },
        { id: 5, name: "苦手なもの、こと" },
        { id: 6, name: "友達" },
        { id: 7, name: "漫画" },
        { id: 8, name: "ゲーム" },
        { id: 9, name: "幼少期" },
      ],
      keywordList: [
        { categoryId: 1, keyword: "ベース" },
        { categoryId: 1, keyword: "ギター" },
        { categoryId: 1, keyword: "コントラバス" },
        { categoryId: 1, keyword: "作曲" },
        { categoryId: 1, keyword: "吹奏楽" },
        { categoryId: 1, keyword: "バンド" },
        { categoryId: 1, keyword: "ボーカルに売り上げを取られた話" },
        { categoryId: 1, keyword: "京都精華大学" },
        { categoryId: 1, keyword: "楽典" },
        { categoryId: 1, keyword: "Jazz" },
        { categoryId: 1, keyword: "フルート" },
        { categoryId: 1, keyword: "ライブ" },
        { categoryId: 1, keyword: "R&B" },
        { categoryId: 1, keyword: "J-pop" },
        { categoryId: 1, keyword: "毎週金曜日" },
        { categoryId: 1, keyword: "DJ" },
        { categoryId: 1, keyword: "環境音" },

        { categoryId: 2, keyword: "たった一か月のインターンで学んだこと" },
        { categoryId: 2, keyword: "ClipLine" },
        { categoryId: 2, keyword: "フロントエンド" },
        { categoryId: 2, keyword: "技術書" },
        { categoryId: 2, keyword: "友人との共同開発" },
        { categoryId: 2, keyword: "スタートアップ企業で学んだこと" },
        { categoryId: 2, keyword: "ベンチャー企業で学んだこと" },
        { categoryId: 2, keyword: "Windows" },
        { categoryId: 2, keyword: "最後まで本気でやり遂げる" },
        { categoryId: 2, keyword: "学習を始めて1年" },
        { categoryId: 2, keyword: "4か月で実務経験" },
        { categoryId: 2, keyword: "フルスタック" },
        { categoryId: 2, keyword: "バックエンド" },
        { categoryId: 2, keyword: "ホワイトボード" },
        { categoryId: 2, keyword: "環境に馴染む能力" },
        { categoryId: 2, keyword: "新プロダクトの開発" },
        { categoryId: 2, keyword: "新しい技術" },
        { categoryId: 2, keyword: "日々勉強" },

        { categoryId: 3, keyword: "両親" },
        { categoryId: 3, keyword: "コーダ" },
        { categoryId: 3, keyword: "ペットのライ" },
        { categoryId: 3, keyword: "禁煙" },
        { categoryId: 3, keyword: "猫の絵" },
        { categoryId: 3, keyword: "高校休学" },
        { categoryId: 3, keyword: "大学を休学してプログラミングの勉強" },
        { categoryId: 3, keyword: "大学を退学して就職" },
        { categoryId: 3, keyword: "手話" },
        { categoryId: 3, keyword: "田舎" },
        { categoryId: 3, keyword: "ディベート" },

        { categoryId: 4, keyword: "過去の自分と比べる" },
        { categoryId: 4, keyword: "ドライブ" },
        { categoryId: 4, keyword: "空間" },
        { categoryId: 4, keyword: "苺大福" },
        { categoryId: 4, keyword: "散歩" },
        { categoryId: 4, keyword: "英語" },
        { categoryId: 4, keyword: "太陽" },
        { categoryId: 4, keyword: "努力" },
        { categoryId: 4, keyword: "集中" },
        { categoryId: 4, keyword: "勉強" },
        { categoryId: 4, keyword: "クリエイティブ" },
        { categoryId: 4, keyword: "コミュニケーション" },
        { categoryId: 4, keyword: "フッ軽" },
        { categoryId: 4, keyword: "知りたいことが多い" },
        { categoryId: 4, keyword: "独学" },

        { categoryId: 5, keyword: "早起き" },
        { categoryId: 5, keyword: "辛い物" },
        { categoryId: 5, keyword: "アウトプット" },
        { categoryId: 5, keyword: "脳内整理能力" },
        { categoryId: 5, keyword: "コミュニケーションを取ろうとしない人" },
        { categoryId: 5, keyword: "諦めること" },
        { categoryId: 5, keyword: "思っていることを伝えない人" },
        { categoryId: 5, keyword: "じっとしていること" },
        { categoryId: 5, keyword: "客観的に物事をとらえること" },
        { categoryId: 5, keyword: "知らないことが多い" },

        { categoryId: 6, keyword: "おせっかい" },
        { categoryId: 6, keyword: "人から愛される人間" },
        { categoryId: 6, keyword: "インターネット" },
        { categoryId: 6, keyword: "プログラミング" },
        { categoryId: 6, keyword: "優しい" },
        { categoryId: 6, keyword: "面白い" },
        { categoryId: 6, keyword: "ミステリアス" },
        { categoryId: 6, keyword: "行動力" },

        { categoryId: 7, keyword: "5歳" },
        { categoryId: 7, keyword: "8,000冊" },
        { categoryId: 7, keyword: "ドラえもん" },
        { categoryId: 7, keyword: "JoJo7部" },
        { categoryId: 7, keyword: "少年漫画" },
        { categoryId: 7, keyword: "日常系" },

        { categoryId: 8, keyword: "ファミコン" },
        { categoryId: 8, keyword: "Dota2" },
        { categoryId: 8, keyword: "ゲーマー向けサイト" },
        { categoryId: 8, keyword: "カードゲーム" },
        { categoryId: 8, keyword: "オンラインゲーム" },
        { categoryId: 8, keyword: "東南アジア700位" },
        { categoryId: 8, keyword: "日本3位" },
        { categoryId: 8, keyword: "リーダー" },

        { categoryId: 9, keyword: "星" },
        { categoryId: 9, keyword: "宇宙" },
        { categoryId: 9, keyword: "野球" },
        { categoryId: 9, keyword: "アルトサックス" },
        { categoryId: 9, keyword: "美術" },
        { categoryId: 9, keyword: "ニコニコ動画" },
        { categoryId: 9, keyword: "プラモデル" },
        { categoryId: 9, keyword: "誰とでも仲良く" },
      ],
      keywordRandomLabel: "ランダムでキーワードを1つ選ぶよ",
      filterLabel: "フィルター",
      keywrodRandomDescription: "説明",
    },
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
