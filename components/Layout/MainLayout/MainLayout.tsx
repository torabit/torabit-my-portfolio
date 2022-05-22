import { ReactElement, ReactNode } from "react";
import { IconButton } from "@/General/IconButton";
import { useTheme } from "@/states/themeState";
import { FiMoon } from "react-icons/fi";
import { FaSun } from "react-icons/fa";
import { useLanguage } from "@/states/languageState";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = (props): ReactElement => {
  const { children } = props;
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  const isDark = theme === "dark";
  const isEnglish = language === "en";

  const themeIcon = isDark ? <FiMoon color="var(--color-white)" size="2.5rem" /> : <FaSun size="2.5rem" />;

  const toggleLanguage = () => {
    if (isEnglish) setLanguage("ja");
    else setLanguage("en");
  };

  return (
    <>
      <div>
        <div className="theme-button-wrapper">
          <IconButton onClick={toggleTheme} color="var(--color-background-body)">
            {themeIcon}
          </IconButton>
        </div>
        <div className="language-button-wrapper">
          <IconButton onClick={toggleLanguage} color="var(--color-background-body)">
            <span className="language-text">{language}</span>
          </IconButton>
        </div>
        {children}
      </div>
      <style jsx>{`
        .theme-button-wrapper {
          position: absolute;
          width: 4rem;
          height: 4rem;
          right: 1rem;
          top: 1rem;
          z-index: var(--z-index-default);
        }
        .language-button-wrapper {
          position: absolute;
          width: 4rem;
          height: 4rem;
          right: 6rem;
          top: 1rem;
          z-index: var(--z-index-default);
        }
        .language-text {
          color: var(--color-text-base);
          font-size: var(--font-size-5);
          font-weight: var(--font-weight-bold);
        }
      `}</style>
    </>
  );
};
