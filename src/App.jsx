import { React, useEffect, useState } from "react";
import { WordleContext } from "./context/WordleContext";
import {
  initWordle,
  initBoard,
  initGuess,
  initGame,
  initModalGame,
  initModalHelp,
  initModalWord,
} from "./utils/functions";

import WordBank from "./utils/WordleWordBank.txt";
import WordleHeader from "./features/main/WordleHeader";
import WordleContent from "./features/main/WordleContent";
import WordleFooter from "./features/main/WordleFooter";
import WordleModalGame from "./features/modals/WordleModalGame";
import WordleModalHelp from "./features/modals/WordleModalHelp";
import WordleModalWord from "./features/modals/WordleModalWord";

function App() {
  const [wordBank, setWordBank] = useState(new Set());
  const [wordle, setWordle] = useState(initWordle());
  const [board, setBoard] = useState(initBoard());
  const [guess, setGuess] = useState(initGuess());
  const [game, setGame] = useState(initGame());
  const [modalGame, setModalGame] = useState(initModalGame());
  const [modalHelp, setModalHelp] = useState(initModalHelp());
  const [modalWord, setModalWord] = useState(initModalWord());

  //fetch wordle from wordle bank text file i.e. utils/WordleWordBank.txt
  async function handleWordle() {
    let wordArray, wordSet, word;

    try {
      const response = await fetch(WordBank);
      if (!response) throw new Error("Unable to fetch from word bank!");

      const wordsText = await response.text();
      if (!wordsText) throw new Error("No word available!");

      wordArray = wordsText
        .split("\n")
        .map((entry) => entry.trim().toLowerCase());

      if (wordArray.length > 0) {
        wordSet = new Set(wordArray);
        setWordBank(wordSet);

        word = wordArray[Math.floor(Math.random() * wordArray.length)];
        setWordle(word);
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  //game initialize
  function handleGameExit() {
    setModalGame(initModalGame());
  }

  //game play again
  function handleGamePlayAgain() {
    setBoard(initBoard());
    setGame(initGame());
    setGuess(initGuess());
    setModalGame(initModalGame());
    handleWordle();
  }

  //help initialize
  function handleHelpExit() {
    setModalHelp(initModalHelp());
  }

  //word initialize
  function handleWordExit() {
    setModalWord(initModalWord());
  }

  //app mount action(s)
  useEffect(() => {
    handleWordle();
  }, []);

  return (
    <WordleContext.Provider
      value={{
        wordBank,
        setWordBank,
        wordle,
        board,
        setBoard,
        guess,
        setGuess,
        game,
        setGame,
        modalGame,
        setModalGame,
        modalHelp,
        setModalHelp,
        modalWord,
        setModalWord,
      }}
    >
      <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-black">
        <WordleHeader />
        <WordleContent />
        <WordleFooter />
        <WordleModalGame
          handleGameExit={handleGameExit}
          handleGamePlayAgain={handleGamePlayAgain}
        />
        <WordleModalHelp handleHelpExit={handleHelpExit} />
        <WordleModalWord handleWordExit={handleWordExit} />
      </div>
    </WordleContext.Provider>
  );
}

export default App;
