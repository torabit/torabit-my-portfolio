import { atom, useRecoilState } from "recoil";

const languageState = atom<Language>({
  key: "languageState",
  default: "en",
});

export const useLanguage = () => {
  const [language, setLanguage] = useRecoilState(languageState);

  return { language, setLanguage };
};
