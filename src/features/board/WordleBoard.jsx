import { React, useContext } from "react";
import { WordleContext } from "../../context/WordleContext";
import WordleRow from "./WordleRow";

//component to render board with 6 rows and 5 columns, representing each guess with 5 letters
function WordleBoard() {
  const { board, guess } = useContext(WordleContext);

  return (
    <div className="flex flex-col p-1 mt-1 justify-start items-start border-0 border-red-300">
      {board.map((_, rowIndex) => (
        <WordleRow
          key={rowIndex}
          word={guess.row === rowIndex ? guess.data : board[rowIndex]}
          complete={guess.row > rowIndex}
        />
      ))}
    </div>
  );
}

export default WordleBoard;
