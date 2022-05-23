import { Profile } from "@/DataDisplay/Profile";
import type { NextPage } from "next";
import { Contents } from "@/DataDisplay/Contents";
import { ModalOverlay } from "@/DataDisplay/ModalOverlay";
import { useButtonListState } from "@/states/buttonListState";
import { SkillChipList } from "@/DataDisplay/SkillChipList";
import { SkillsUtil } from "@/utils/skillsUtil";
import { ContentsUtil } from "../utils";

const Home: NextPage = () => {
  const { clickedButton, setClickedButton } = useButtonListState();
  const skillsUtil = new SkillsUtil();
  const contentsUtil = new ContentsUtil();
  const contents = contentsUtil.getContents();
  const closeModal = () => {
    setClickedButton(null);
  };

  const renderSkillModal = () => {
    switch (clickedButton) {
      case 0:
        return <SkillChipList title={contents.skills[0].category} items={skillsUtil.getFrontEnd()} />;
      case 1:
        return <SkillChipList title={contents.skills[1].category} items={skillsUtil.getBackend()} />;
      case 2:
        return <SkillChipList title={contents.skills[2].category} items={skillsUtil.getDatabase()} />;
      case 3:
        return <SkillChipList title={contents.skills[3].category} items={skillsUtil.getOther()} />;
    }
  };
  return (
    <>
      <div>
        <Profile />
        <Contents />
        {clickedButton !== null ? (
          <ModalOverlay closeModal={closeModal}>{renderSkillModal()}</ModalOverlay>
        ) : null}
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default Home;
