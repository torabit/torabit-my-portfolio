import { ReactElement, ReactNode } from "react";
import { SvgIcon } from "@/General/SvgIcon/SvgIcon";

interface SkillChipProps {
  link: string;
  label: string;
  svg: React.FC<React.SVGProps<SVGElement>>;
}

export const SkillChip: React.FC<SkillChipProps> = (props): ReactElement => {
  const { link, label, svg } = props;
  return (
    <>
      <a href={link} target="_blank" rel="noreferrer">
        <div className="skill-chip-wrapper">
          <SvgIcon svg={svg} color="red" />
          <span>{label}</span>
        </div>
      </a>

      <style jsx>{`
        .skill-chip-wrapper {
          display: flex;
          align-items: center;
          flex-direction: column;
          padding: 3rem;
          border-radius: var(--border-radius-large);
          height: 12rem;
          width: 12rem;
          background-color: var(--color-background-skill-chip);
          box-shadow: var(--shadow-elevation-1);
          box-sizing: border-box;
          transition: 0.1s;
        }
        .skill-chip-wrapper:hover {
          background-color: var(--color-background-skill-chip-hover);
          box-shadow: var(--shadow-elevation-2);
        }
        .skill-chip-wrapper:active {
          background-color: var(--color-background-skill-chip-hover);
          box-shadow: var(--shadow-elevation-1);
        }
      `}</style>
    </>
  );
};
