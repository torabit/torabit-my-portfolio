import { ReactElement } from "react";
import { GrFormClose } from "react-icons/gr";

interface TagButtonProps {
  onPress?: () => void;
  label: string;
}

export const TagButton: React.FC<TagButtonProps> = (props): ReactElement => {
  const { onPress, label } = props;
  return (
    <>
      <button className="tag-button" onClick={onPress}>
        <span className="tag-label">{label}</span>
        <GrFormClose size={"18"} />
      </button>
      <style jsx>{`
        .tag-button {
          background: var(--color-background-tag-default);
          font-family: inherit;
          appearance: none;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          border-radius: var(--border-radius-rounded);
          background-clip: padding-box;
          color: var(--color-text-tag);
          line-height: 1.4;
          white-space: nowrap;
          padding-right: 0.3rem;
          padding-left: 0.8rem;
          height: 3rem;
          border-width: 2px;
          border-style: solid;
          border-color: var(--color-border-tag);
          padding: 1rem;
          margin-top: 1rem;
          margin-left: 1rem;
          cursor: pointer;
          transition: 0.1s;
        }
        .tag-button:hover {
          border-color: var(--color-border-tag-hover);
          background: var(--color-background-tag-hover);
        }
        .tag-label {
          padding-right: 0.5rem;
        }
        @media screen and (min-width: 600px) {
          .tag-button {
            background: var(--color-background-tag-default);
            font-family: inherit;
            appearance: none;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            border-radius: var(--border-radius-rounded);
            background-clip: padding-box;
            color: var(--color-text-tag);
            line-height: 1.4;
            white-space: nowrap;
            padding-right: 0.3rem;
            padding-left: 0.8rem;
            height: 3rem;
            border-width: 2px;
            border-style: solid;
            border-color: var(--color-border-tag);
            padding: 1rem;
            margin-top: 0rem;
            margin-left: 1rem;
            cursor: pointer;
            transition: 0.1s;
          }
        }
      `}</style>
    </>
  );
};
