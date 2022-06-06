import { KeywordCard } from "@/DataDisplay/KeywordCard";
import { FilledButton } from "@/General/FilledButton";
import { useKeyword } from "@/states/keywordState";
import { ContentsUtil } from "@/utils/contentsUtil";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownMenuItem } from "@/Layout/Dropdown";
import { useCategoryFilter } from "@/states/categoryFilterState";
import { TagButton } from "@/General/TagButton";
import { useEffect, useState } from "react";
import { Category } from "@/types/contents.type";
import { MdKeyboardArrowDown } from "react-icons/md";

const KeywordList = () => {
  const contents = new ContentsUtil().getContents();
  const { pickOneKeyword, getKeyword, toggleKeyword, currentKeywordId, checkedKeywords } = useKeyword();
  const keywords = contents.keywords;
  const keyword = getKeyword();
  const category = keywords.categoryList.find((category) => category.id === keyword?.categoryId);
  const { addFilter, removeFilter, categoryFilter } = useCategoryFilter();
  const [filteredCategory, setFilteredCategory] = useState<Category[] | null>(null);

  useEffect(() => {
    const _filteredCategory: Category[] = [];
    keywords.categoryList.map((category) => {
      if (categoryFilter.find((categoryId) => categoryId === category.id)) {
        _filteredCategory.push(category);
      }
    });
    setFilteredCategory(_filteredCategory);
  }, [categoryFilter]);
  return (
    <>
      <div className="contents-wrapper">
        <div className="random-picker-wrapper">
          <div className="random-picker">
            {currentKeywordId !== null ? (
              <KeywordCard
                id={currentKeywordId + 1}
                keyword={keyword?.keyword}
                category={category?.name}
                onPress={pickOneKeyword}
              />
            ) : (
              <KeywordCard
                id={0}
                keyword={keywords.keywordRandomLabel}
                category={keywords.keywrodRandomDescription}
                onPress={pickOneKeyword}
              />
            )}
            <div className="button-wrapper">
              <FilledButton size="LARGE" label="❓" onPress={pickOneKeyword} />
            </div>
          </div>
        </div>

        <div className="filter-dropdown-wrapper">
          <Dropdown>
            <DropdownToggle>
              <div className="dropdown-toggle">
                {contents.keywords.filterLabel}
                <MdKeyboardArrowDown size="20" />
              </div>
            </DropdownToggle>
            <DropdownMenu
              width="15rem"
              anchorOrigin={{ positionX: "left", positionY: "top", translateX: 0, translateY: 5 }}
            >
              {keywords.categoryList.map((category) =>
                categoryFilter.includes(category.id) ? null : (
                  <div key={category.id} onClick={() => addFilter(category.id)}>
                    <DropdownMenuItem>{category.name}</DropdownMenuItem>
                  </div>
                )
              )}
            </DropdownMenu>
          </Dropdown>
          <div className="filtered-category-wrapper">
            {filteredCategory?.map((category) => (
              <TagButton key={category.id} onPress={() => removeFilter(category.id)} label={category.name} />
            ))}
          </div>
        </div>

        <div className="keyword-card-list-wrapper">
          {keywords.keywordList?.map((keyword, i) => {
            const category = keywords.categoryList.find((category) => category.id === keyword.categoryId);
            if (
              categoryFilter.some((categoryId) => keyword.categoryId === categoryId) &&
              categoryFilter.length !== 0
            ) {
              return (
                <div className="keyword-card-wrapper">
                  <KeywordCard
                    key={i}
                    id={i + 1}
                    keyword={keyword.keyword}
                    category={category?.name}
                    alreadySelected={checkedKeywords.some((checkedKeyword) => i === checkedKeyword)}
                    onPress={() => toggleKeyword(i)}
                  />
                </div>
              );
            } else if (categoryFilter.length === 0) {
              return (
                <div className="keyword-card-wrapper">
                  <KeywordCard
                    key={i}
                    id={i + 1}
                    keyword={keyword.keyword}
                    category={category?.name}
                    alreadySelected={checkedKeywords.some((checkedKeyword) => i === checkedKeyword)}
                    onPress={() => toggleKeyword(i)}
                  />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>

      <style jsx>{`
        .contents-wrapper {
          padding-top: 8rem;
        }
        .random-picker-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .keyword-card-list-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .random-picker {
          width: 30rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .button-wrapper {
          width: inherit;
          margin-top: 2rem;
        }
        .keyword-card-wrapper {
          width: 14rem;
          margin: 2rem;
        }
        .dropdown-toggle {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: var(--color-background-button);
          padding: 0.5rem 1rem;
          color: var(--color-text-base);
          border-radius: var(--border-radius-large);
          font-weight: var(--font-weight-bold);
          font-size: var(--font-size-8);
          box-shadow: var(--shadow-elevation-1);
        }
        .dropdown-toggle:hover {
          box-shadow: var(--shadow-elevation-2);
        }
        .dropdown-toggle:active {
          box-shadow: var(--shadow-elevation-1);
        }
        .filter-dropdown-wrapper {
          display: flex;
          margin: 5rem;
          align-items: center;
          flex-direction: column;
        }
        .filtered-category-wrapper {
          display: flex;
          flex-wrap: wrap;
        }

        @media screen and (min-width: 600px) {
          .contents-wrapper {
            padding: 8rem;
          }
          .keyword-card-wrapper {
            width: 15rem;
            margin: 2rem;
          }
          .filter-dropdown-wrapper {
            display: flex;
            margin: 0;
            align-items: baseline;
            flex-direction: row;
          }
        }
      `}</style>
    </>
  );
};

export default KeywordList;
