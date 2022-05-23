import { ReactElement } from "react";
import { SkillChip } from "@/General/SkillChip/SkillChip";
import type { SkillConstant } from "@/types/skills.type";

interface SkillChipListProps {
  items: SkillConstant[];
  title: string;
}

export const SkillChipList: React.FC<SkillChipListProps> = (props): ReactElement => {
  const { items, title } = props;

  return (
    <>
      <div className="skill-chip-list-wrapper">
        <h1 className="skill-chip-list-title">{title}</h1>
        <div className="skill-chip-list">
          {items.map((item, i) => (
            <div className="skill-chip-wrapper" key={i}>
              <SkillChip label={item.name} svg={item.icon} link={item.url} />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .skill-chip-list-title {
          margin-left: 3rem;
          font-size: var(--font-size-5);
          color: var(--color-white);
        }
        .skill-chip-wrapper {
          margin: 3rem;
        }
        .skill-chip-list {
          display: flex;
          align-items: center;
          flex-direction: column;
          flex-flow: row wrap;
        }

        @media screen and (min-width: 600px) {
          .skill-chip-list-title {
            margin-left: 3rem;
            font-size: var(--font-size-2);
            color: var(--color-white);
          }
          .skill-chip-list {
            display: flex;
          }
        }
      `}</style>
    </>
  );
};
