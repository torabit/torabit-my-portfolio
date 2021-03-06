import { useLanguage } from "@/states/languageState";
import type { Contents } from "@/types/contents.type";

export class ContentsUtil {
  private languageHooks = useLanguage();

  private readonly contentsInEnglish: Contents = {
    profile: {
      name: "Toranosuke Ujike",
      biography: `Nice to meet you.π
      My name is Toranosuke Ujike.π― I started to study programing in April of 2021.
      Learning new things despite of my position  is what I am interested in. Such as new languages, frame work and architecture.π
      Absorbing opinions is another thing I have fun doing. I have made connections with people on the internet, who are now my great ει.πΈοΈ
      On my spare time, I like making music and play my bass.πΉπΈ
       Thank you.πΆπΎ
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
      name: "ζ°ε?Ά θδΉδ»",
      kana: "γγγ γ¨γγ?γγ",
      biography: `γ―γγγΎγγ¦π
      2021εΉ΄γ?4ζγγγγ­γ°γ©γγ³γ°γε­¦γ³ε§γγγγγγ¨γγ?γγγ¨η³γγΎγπ―
        ζ°γγθ¨θͺγγγ¬γΌγ γ―γΌγ―γγ’γΌγ­γγ―γγ£γ«θε³γγγγγγΈγ·γ§γ³γ«γ¨γγγγζ₯γζ§γγͺεεΌ·γγγ¦γγΎγπ
        δΊΊγ¨γ³γγ₯γγ±γΌγ·γ§γ³γεγγ?γε₯½γγ§γγ€γ³γΏγΌγγγγ§γγγγγͺειγ¨ηΉγγ£γ¦γγΎγπΈοΈ
        θΆ£ε³γ―ι³ζ₯½γ§γδΌγΏγ?ζ₯γ«γ―δ½ζ²γγγγγγΌγΉγεΌΎγγγγγ¦γγΎγπΉπΈ
        γγγγγι‘γγγΎγπΆπΎ
        `,
      me: "θͺε·±η΄Ήδ»",
      skills: "γ§γγγγ¨",
    },
    skills: [
      { category: "γγ­γ³γγ¨γ³γ" },
      { category: "γγγ―γ¨γ³γ" },
      { category: "γγΌγΏγγΌγΉ" },
      { category: "γγ?δ»" },
    ],
    keywords: {
      categoryList: [
        { id: 1, name: "ι³ζ₯½" },
        { id: 2, name: "γγ­γ°γ©γγ³γ°" },
        { id: 3, name: "η§ηζ΄»" },
        { id: 4, name: "ε₯½γγͺγγ?γγγ¨" },
        { id: 5, name: "θ¦ζγͺγγ?γγγ¨" },
        { id: 6, name: "ει" },
        { id: 7, name: "ζΌ«η»" },
        { id: 8, name: "γ²γΌγ " },
        { id: 9, name: "εΉΌε°ζ" },
      ],
      keywordList: [
        { categoryId: 1, keyword: "γγΌγΉ" },
        { categoryId: 1, keyword: "γ?γΏγΌ" },
        { categoryId: 1, keyword: "γ³γ³γγ©γγΉ" },
        { categoryId: 1, keyword: "δ½ζ²" },
        { categoryId: 1, keyword: "εΉε₯ζ₯½" },
        { categoryId: 1, keyword: "γγ³γ" },
        { categoryId: 1, keyword: "γγΌγ«γ«γ«ε£²γδΈγγεγγγθ©±" },
        { categoryId: 1, keyword: "δΊ¬ι½η²Ύθ―ε€§ε­¦" },
        { categoryId: 1, keyword: "ζ₯½εΈ" },
        { categoryId: 1, keyword: "Jazz" },
        { categoryId: 1, keyword: "γγ«γΌγ" },
        { categoryId: 1, keyword: "γ©γ€γ" },
        { categoryId: 1, keyword: "R&B" },
        { categoryId: 1, keyword: "J-pop" },
        { categoryId: 1, keyword: "ζ―ι±ιζζ₯" },
        { categoryId: 1, keyword: "DJ" },
        { categoryId: 1, keyword: "η°ε’ι³" },

        { categoryId: 2, keyword: "γγ£γδΈγζγ?γ€γ³γΏγΌγ³γ§ε­¦γγ γγ¨" },
        { categoryId: 2, keyword: "ClipLine" },
        { categoryId: 2, keyword: "γγ­γ³γγ¨γ³γ" },
        { categoryId: 2, keyword: "ζθ‘ζΈ" },
        { categoryId: 2, keyword: "εδΊΊγ¨γ?ε±ειηΊ" },
        { categoryId: 2, keyword: "γΉγΏγΌγγ’γγδΌζ₯­γ§ε­¦γγ γγ¨" },
        { categoryId: 2, keyword: "γγ³γγ£γΌδΌζ₯­γ§ε­¦γγ γγ¨" },
        { categoryId: 2, keyword: "Windows" },
        { categoryId: 2, keyword: "ζεΎγΎγ§ζ¬ζ°γ§γγιγγ" },
        { categoryId: 2, keyword: "ε­¦ηΏγε§γγ¦1εΉ΄" },
        { categoryId: 2, keyword: "4γζγ§ε?εη΅ι¨" },
        { categoryId: 2, keyword: "γγ«γΉγΏγγ―" },
        { categoryId: 2, keyword: "γγγ―γ¨γ³γ" },
        { categoryId: 2, keyword: "γγ―γ€γγγΌγ" },
        { categoryId: 2, keyword: "η°ε’γ«ι¦΄ζγθ½ε" },
        { categoryId: 2, keyword: "ζ°γγ­γγ―γγ?ιηΊ" },
        { categoryId: 2, keyword: "ζ°γγζθ‘" },
        { categoryId: 2, keyword: "ζ₯γεεΌ·" },

        { categoryId: 3, keyword: "δΈ‘θ¦ͺ" },
        { categoryId: 3, keyword: "γ³γΌγ" },
        { categoryId: 3, keyword: "γγγγ?γ©γ€" },
        { categoryId: 3, keyword: "η¦η" },
        { categoryId: 3, keyword: "η«γ?η΅΅" },
        { categoryId: 3, keyword: "ι«ζ ‘δΌε­¦" },
        { categoryId: 3, keyword: "ε€§ε­¦γδΌε­¦γγ¦γγ­γ°γ©γγ³γ°γ?εεΌ·" },
        { categoryId: 3, keyword: "ε€§ε­¦γιε­¦γγ¦ε°±θ·" },
        { categoryId: 3, keyword: "ζθ©±" },
        { categoryId: 3, keyword: "η°θ" },
        { categoryId: 3, keyword: "γγ£γγΌγ" },

        { categoryId: 4, keyword: "ιε»γ?θͺεγ¨ζ―γΉγ" },
        { categoryId: 4, keyword: "γγ©γ€γ" },
        { categoryId: 4, keyword: "η©Ίι" },
        { categoryId: 4, keyword: "θΊε€§η¦" },
        { categoryId: 4, keyword: "ζ£ζ­©" },
        { categoryId: 4, keyword: "θ±θͺ" },
        { categoryId: 4, keyword: "ε€ͺι½" },
        { categoryId: 4, keyword: "εͺε" },
        { categoryId: 4, keyword: "ιδΈ­" },
        { categoryId: 4, keyword: "εεΌ·" },
        { categoryId: 4, keyword: "γ―γͺγ¨γ€γγ£γ" },
        { categoryId: 4, keyword: "γ³γγ₯γγ±γΌγ·γ§γ³" },
        { categoryId: 4, keyword: "γγθ»½" },
        { categoryId: 4, keyword: "η₯γγγγγ¨γε€γ" },
        { categoryId: 4, keyword: "η¬ε­¦" },

        { categoryId: 5, keyword: "ζ©θ΅·γ" },
        { categoryId: 5, keyword: "θΎγη©" },
        { categoryId: 5, keyword: "γ’γ¦γγγγ" },
        { categoryId: 5, keyword: "θ³εζ΄ηθ½ε" },
        { categoryId: 5, keyword: "γ³γγ₯γγ±γΌγ·γ§γ³γεγγγ¨γγͺγδΊΊ" },
        { categoryId: 5, keyword: "θ«¦γγγγ¨" },
        { categoryId: 5, keyword: "ζγ£γ¦γγγγ¨γδΌγγͺγδΊΊ" },
        { categoryId: 5, keyword: "γγ£γ¨γγ¦γγγγ¨" },
        { categoryId: 5, keyword: "ε?’θ¦³ηγ«η©δΊγγ¨γγγγγ¨" },
        { categoryId: 5, keyword: "η₯γγͺγγγ¨γε€γ" },

        { categoryId: 6, keyword: "γγγ£γγ" },
        { categoryId: 6, keyword: "δΊΊγγζγγγδΊΊι" },
        { categoryId: 6, keyword: "γ€γ³γΏγΌγγγ" },
        { categoryId: 6, keyword: "γγ­γ°γ©γγ³γ°" },
        { categoryId: 6, keyword: "εͺγγ" },
        { categoryId: 6, keyword: "ι’η½γ" },
        { categoryId: 6, keyword: "γγΉγγͺγ’γΉ" },
        { categoryId: 6, keyword: "θ‘εε" },

        { categoryId: 7, keyword: "5ζ­³" },
        { categoryId: 7, keyword: "8,000ε" },
        { categoryId: 7, keyword: "γγ©γγγ" },
        { categoryId: 7, keyword: "JoJo7ι¨" },
        { categoryId: 7, keyword: "ε°εΉ΄ζΌ«η»" },
        { categoryId: 7, keyword: "ζ₯εΈΈη³»" },

        { categoryId: 8, keyword: "γγ‘γγ³γ³" },
        { categoryId: 8, keyword: "Dota2" },
        { categoryId: 8, keyword: "γ²γΌγγΌεγγ΅γ€γ" },
        { categoryId: 8, keyword: "γ«γΌγγ²γΌγ " },
        { categoryId: 8, keyword: "γͺγ³γ©γ€γ³γ²γΌγ " },
        { categoryId: 8, keyword: "ζ±εγ’γΈγ’700δ½" },
        { categoryId: 8, keyword: "ζ₯ζ¬3δ½" },
        { categoryId: 8, keyword: "γͺγΌγγΌ" },

        { categoryId: 9, keyword: "ζ" },
        { categoryId: 9, keyword: "ε?ε?" },
        { categoryId: 9, keyword: "ιη" },
        { categoryId: 9, keyword: "γ’γ«γγ΅γγ―γΉ" },
        { categoryId: 9, keyword: "ηΎθ‘" },
        { categoryId: 9, keyword: "γγ³γγ³εη»" },
        { categoryId: 9, keyword: "γγ©γ’γγ«" },
        { categoryId: 9, keyword: "θͺ°γ¨γ§γδ»²θ―γ" },
      ],
      keywordRandomLabel: "γ©γ³γγ γ§γ­γΌγ―γΌγγ1γ€ιΈγΆγ",
      filterLabel: "γγ£γ«γΏγΌ",
      keywrodRandomDescription: "θͺ¬ζ",
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
