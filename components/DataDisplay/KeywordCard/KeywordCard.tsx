import { ReplaceUtil } from "@/utils/replaceUtil/replaceUtil";
import { ReactElement } from "react";

interface KeywordCardProps {
  id: number;
  keyword: string;
  category?: string;
  alreadySelected?: boolean;
  onPress?: () => void;
}

export const KeywordCard: React.FC<KeywordCardProps> = (props): ReactElement => {
  const { id, keyword, category, alreadySelected = false, onPress } = props;
  const replaceUtil = new ReplaceUtil();
  const idEmoji = replaceUtil.stringNumToEmojiNum(id);
  const headerColor = alreadySelected ? "var(--color-emerald)" : "var(--color-keyword-card-header)";
  return (
    <>
      <button className="keyword-card" onClick={onPress}>
        <div className="emoji-wrapper">{idEmoji}</div>
        <div className="category-wrapper">{category}</div>
        <div className="keyword-wrapper">{keyword}</div>
      </button>

      <style jsx>{`
        .keyword-card {
          width: 100%;
          height: auto;
          box-sizing: border-box;
          border-radius: var(--border-radius-extra-large);
          background: var(--color-background-button);
          box-shadow: var(--shadow-elevation-1);
          user-select: none;
          padding: 0;
          cursor: pointer;
          border: none;
          transition: 0.1s;
          color: var(--color-font-base);
        }
        .keyword-card:hover {
          box-shadow: var(--shadow-elevation-2);
        }
        .keyword-card:active {
          box-shadow: var(--shadow-elevation-1);
        }
        .emoji-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 12rem;
          padding: 1rem;
          background-color: ${headerColor};
          border-radius: var(--border-radius-extra-large) var(--border-radius-extra-large) 0 0;
        }
        .keyword-wrapper {
          width: 100%;
          height: 100%;
          padding: 1rem;
          color: var(--color-font-base);
          background-color: var(--color-keyword-card-body);
          border-radius: 0 0 var(--border-radius-extra-large) var(--border-radius-extra-large);
        }
        .category-wrapper {
          color: var(--color-key);
          padding-top: 1rem;
          width: 100%;
          background-color: var(--color-keyword-card-body);
        }
        @media screen and (min-width: 600px) {
          .keyword-card {
            width: 100%;
            height: auto;
            position: relative;
            box-sizing: border-box;
            border-radius: var(--border-radius-extra-large);
            color: var(--color-font-base);
            box-shadow: var(--shadow-elevation-1);
          }
        }
      `}</style>
    </>
  );
};
