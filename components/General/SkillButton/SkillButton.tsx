import { ReactElement } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

interface SkillButtonProps {
  title: string;
  onClick: () => void;
}

export const SkillButton: React.FC<SkillButtonProps> = (props): ReactElement => {
  const { title, onClick } = props;

  return (
    <>
      <button className="skill-button" onClick={onClick}>
        <span>{title}</span>
        <MdKeyboardArrowRight size={30} />
      </button>
      <style jsx>{`
        .skill-button {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 5.8rem;
          position: relative;
          background: var(--color-background-button);
          margin: 1rem;
          padding: 1rem;
          box-sizing: border-box;
          user-select: none;
          border: none;
          border-radius: var(--border-radius-extra-large);
          color: var(--color-key);
          cursor: pointer;
          font-weight: var(--font-weight-bold);
          font-size: var(--font-size-6);
          box-shadow: var(--shadow-elevation-1);
          transition: 0.1s;
        }
        .skill-button:hover {
          box-shadow: var(--shadow-elevation-2);
        }
        .skill-button:active {
          box-shadow: var(--shadow-elevation-1);
        }

        @media screen and (min-width: 600px) {
          .skill-button {
            font-size: var(--font-size-5);
          }
        }
      `}</style>
    </>
  );
};
