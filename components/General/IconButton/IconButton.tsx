import { ReactElement, ReactNode } from "react";

interface IconButtonProps {
  children: ReactNode;
  onClick: () => void;
  color: string;
}

export const IconButton: React.FC<IconButtonProps> = (props): ReactElement => {
  const { children, onClick, color } = props;
  return (
    <>
      <button className="icon-button" onClick={onClick}>
        {children}
      </button>
      <style jsx>{`
        .icon-button {
          background: none;
          border: none;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          user-select: none;
          width: 100%;
          height: 100%;
          background-color: ${color};
          box-shadow: var(--shadow-elevation-2);
          border-radius: var(--border-radius-large);
          cursor: pointer;
        }
      `}</style>
    </>
  );
};
