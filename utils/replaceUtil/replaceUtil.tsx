import twemoji from "twemoji";
import { DetermineUtil } from "@/utils/determineUtil";
import { ReactElement, ReactNode } from "react";

export class ReplaceUtil {
  public stringNumToEmojiNum(value: any): ReactElement {
    const isNumber = new DetermineUtil().isNumber;

    if (!isNumber(value)) {
      throw new Error(`${value} is not string number or number`);
    }

    const stringNum = String(value);
    const zeroEmoji = this.singleNumToEmojiNum(0);
    const emojiList: ReactNode[] = [];
    const length: number = stringNum.length;

    switch (length) {
      case 1:
        emojiList.unshift(zeroEmoji);
        emojiList.unshift(zeroEmoji);
        break;
      case 2:
        emojiList.unshift(zeroEmoji);
        break;
      default:
        break;
    }

    for (let i = 0; i < length; i++) {
      const num = parseInt(stringNum[i]);
      emojiList.push(this.singleNumToEmojiNum(num));
    }

    return <>{emojiList.map((emoji) => emoji)}</>;
  }

  public singleNumToEmojiNum(singleNum: number) {
    let emoji = "";
    switch (singleNum) {
      case 0:
        emoji = "0⃣";
        break;
      case 1:
        emoji = "1⃣";
        break;
      case 2:
        emoji = "2⃣";
        break;
      case 3:
        emoji = "3⃣";
        break;
      case 4:
        emoji = "4⃣";
        break;
      case 5:
        emoji = "5⃣";
        break;
      case 6:
        emoji = "6⃣";
        break;
      case 7:
        emoji = "7⃣";
        break;
      case 8:
        emoji = "8⃣";
        break;
      case 9:
        emoji = "9⃣";
        break;
      default:
        throw new Error(`${singleNum} is not one digit number`);
    }

    return (
      <>
        <span dangerouslySetInnerHTML={{ __html: twemoji.parse(emoji) }} className="twemoji" />
        <style jsx>{`
          .twemoji {
            font-size: var(--font-size-4);
          }
        `}</style>
      </>
    );
  }
}
