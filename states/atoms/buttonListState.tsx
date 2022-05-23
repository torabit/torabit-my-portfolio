import { ReactElement } from "react";
import { atom, useRecoilState, useSetRecoilState } from "recoil";
import { SkillButton } from "@/General/SkillButton";

const buttonListState = atom<number | null>({
  key: "buttonListState",
  default: null,
});

export const useButtonListState = () => {
  const [clickedButton, setClickedButton] = useRecoilState(buttonListState);
  return { clickedButton, setClickedButton };
};

export const useButtonList = (titleList: readonly string[]) => {
  const setClickedButton = useSetRecoilState(buttonListState);

  const renderButtonList = (): ReactElement => {
    return (
      <>
        <div className="button-list">
          {titleList.map((title, i) => (
            <SkillButton key={i} title={title} onClick={() => setClickedButton(i)} />
          ))}
        </div>
        <style jsx>{`
          @media screen and (min-width: 600px) {
            .button-list {
              display: flex;
            }
          }
        `}</style>
      </>
    );
  };

  return renderButtonList;
};
