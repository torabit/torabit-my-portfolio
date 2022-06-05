import { atom, useRecoilState } from "recoil";
import { ContentsUtil } from "@/utils/contentsUtil/contentsUtil";

const keywordIdList = () => {
  const keywordIds: number[] = [];
  for (let i = 0; i < 101; i++) {
    keywordIds.push(i);
  }

  return keywordIds;
};

const uncheckedKeywordsState = atom<number[]>({
  key: "uncheckedKeywordsState",
  default: keywordIdList(),
});

const checkedKeywordsState = atom<number[]>({
  key: "checkedKeywordsState",
  default: [],
});

const currentKeywordIdState = atom<number>({
  key: "currentKeywordIdState",
  default: 0,
});

export const useKeyword = () => {
  const [uncheckedKeywords, setUncheckedKeywords] = useRecoilState(uncheckedKeywordsState);
  const [checkedKeywords, setCheckedKeywords] = useRecoilState(checkedKeywordsState);
  const [currentKeywordId, setCurrentKeywordId] = useRecoilState(currentKeywordIdState);

  const pickOneKeyword = () => {
    if (uncheckedKeywords.length === 0) {
      setCurrentKeywordId(0);
      return;
    }
    // ランダムな配列のindexを取得
    const rand = Math.floor(Math.random() * uncheckedKeywords.length);
    // indexに応じた値をcurrentにset
    setCurrentKeywordId(uncheckedKeywords[rand]);

    // currentのidをset
    const _checkedKeywords = checkedKeywords.concat();
    _checkedKeywords.push(uncheckedKeywords[rand]);
    setCheckedKeywords(_checkedKeywords);

    // currentのidと一致する配列の要素を削除
    const _uncheckedKeywords = uncheckedKeywords.concat();
    const index = _uncheckedKeywords.indexOf(uncheckedKeywords[rand]);
    _uncheckedKeywords.splice(index, 1);
    setUncheckedKeywords(_uncheckedKeywords);
  };

  const getKeyword = () => {
    const contents = new ContentsUtil().getContents();

    return contents.keywords.keywordList[currentKeywordId];
  };

  const toggleKeyword = (id: number) => {
    const _checkedKeywords = checkedKeywords.concat();
    const _uncheckedKeywords = uncheckedKeywords.concat();
    const isChecked = checkedKeywords.some((checkedKeyword) => id === checkedKeyword);

    if (isChecked) {
      const index = _checkedKeywords.indexOf(id);
      _checkedKeywords.splice(index, 1);
      setCheckedKeywords(_checkedKeywords);

      _uncheckedKeywords.push(id);
      setUncheckedKeywords(_uncheckedKeywords);
    } else {
      const index = _uncheckedKeywords.indexOf(id);
      _uncheckedKeywords.splice(index, 1);
      setUncheckedKeywords(_uncheckedKeywords);

      _checkedKeywords.push(id);
      setCheckedKeywords(_checkedKeywords);
    }
  };

  return { currentKeywordId, checkedKeywords, getKeyword, pickOneKeyword, toggleKeyword };
};
