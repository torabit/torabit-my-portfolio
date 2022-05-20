import React from "react";
import { ReactElement } from "react";

interface AddNewLineProps {
  str: string;
}

export const AddNewLine: React.FC<AddNewLineProps> = (props): ReactElement => {
  const { str } = props;
  const strList = str.replace(/\\r/g, "").split("\n");
  return (
    <>
      {strList.map((str, i) => {
        return (
          <React.Fragment key={i}>
            <br />
            {str}
            <br />
          </React.Fragment>
        );
      })}
    </>
  );
};
