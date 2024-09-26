import { React, useContext } from "react";
import { GUESS_COLUMNS } from "../../utils/constants";
import { WordleContext } from "../../context/WordleContext";

// evaluate letter accuracy represented by colors: green for correct and right position; yellow for correct and incorrect position; grey for incorrect
export function evalColor(word, wordle) {
  const arrayWordle = wordle.split("");
  const wordColors = new Array(GUESS_COLUMNS).fill("bg-black");

  for (let i = 0; i < arrayWordle.length; i++) {
    const indexWordle = arrayWordle.indexOf(word[i]);

    if (indexWordle === -1) {
      wordColors[i] = "bg-gray-700";
    } else if (word[i] === arrayWordle[i]) {
      wordColors[i] = "bg-green-500";
    } else {
      wordColors[i] = "bg-yellow-500";
    }
  }

  return wordColors;
}

// component to render a row for each guess
function WordleRow({ word, complete }) {
  const { wordle } = useContext(WordleContext);
  const wordColors = complete
    ? evalColor(word, wordle)
    : new Array(GUESS_COLUMNS).fill("");

  return (
    <div className="flex">
      {new Array(GUESS_COLUMNS).fill("").map((_, colIndex) => (
        <div
          key={colIndex}
          className={`flex justify-center items-center h-10 w-10 text-xl text-white font-notmal
            ml-5 mb-2 rounded-sm border-2 border-solid ${word[colIndex] ? "border-white" : "border-gray-400"} 
            uppercase ${wordColors[colIndex]}`}
        >
          {word[colIndex] ?? ""}
        </div>
      ))}
    </div>
  );
}

export default WordleRow;
