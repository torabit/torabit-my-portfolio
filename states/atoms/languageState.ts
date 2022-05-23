import { atom, useRecoilState } from "recoil";
import type { Language } from "types/language.type";

const languageState = atom<Language>({
  key: "languageState",
  default: "en",
});

export const useLanguage = () => {
  const [language, setLanguage] = useRecoilState(languageState);

  return { language, setLanguage };
};
