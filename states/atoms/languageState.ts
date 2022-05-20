import { atom, useRecoilState } from "recoil";

const languageState = atom<Language>({
  key: "languageState",
  default: "en",
});

export const useLanguage = () => {
  const [language, setLanguage] = useRecoilState(languageState);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ja" : "en";
    setLanguage(newLanguage);
  };

  return { language, toggleLanguage };
};
