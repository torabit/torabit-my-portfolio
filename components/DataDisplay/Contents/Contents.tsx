import { ReactElement } from "react";
import { Article } from "@/Layout/Article";
import { AddNewLine } from "@/Layout/AddNewLine";
import { ContentsUtil } from "@/utils/contentsUtil";
import { useButtonList } from "@/states/buttonListState";

export const Contents: React.FC = (): ReactElement => {
  const contentsUtil = new ContentsUtil();
  const contents = contentsUtil.getContents();
  const categories = contents.skills.map((skill) => skill.category);
  const renderButtonList = useButtonList(categories);

  return (
    <>
      <div className="contents-wrapper">
        <Article title={contents.profile.me}>
          <AddNewLine str={contents.profile.biography} />
        </Article>
        <Article title={contents.profile.skills}>{renderButtonList()}</Article>
      </div>
      <style jsx>
        {`
          .contents-wrapper {
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-top: 4rem;
            margin: 0 3rem;
          }
        `}
      </style>
    </>
  );
};
