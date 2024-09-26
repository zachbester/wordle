import { React } from "react";
import WordleKey from "./WordleKey";

const buttonsRowTop = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const buttonsRowMiddle = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const buttonsRowBottom = ["z", "x", "c", "v", "b", "n", "m"];

// component to render keyboard for the game, delete & enter handled separately because of different size and functionality
function WordlKeyboard() {
  return (
    <div className="ml-1 mt-1">
      <div className="flex justify-center">
        {buttonsRowTop.map((topKey, topIndex) => (
          <WordleKey key={topIndex} letter={topKey} />
        ))}
      </div>
      <div className="flex justify-center">
        {buttonsRowMiddle.map((middleKey, middleIndex) => (
          <WordleKey key={middleIndex} letter={middleKey} />
        ))}
      </div>
      <div className="flex justify-center">
        <WordleKey letter={"enter"} />
        {buttonsRowBottom.map((botKey, botIndex) => (
          <WordleKey key={botIndex} letter={botKey} />
        ))}
        <WordleKey letter={"delete"} />
      </div>
    </div>
  );
}

export default WordlKeyboard;
