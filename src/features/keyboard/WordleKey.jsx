import { React, useContext } from "react";
import { WordleContext } from "../../context/WordleContext";
import { GUESS_COLUMNS, GUESS_ROWS } from "../../utils/constants";

export function handleEvalColor(wordle, board, guess, letter) {
  let color = "bg-gray-400";
  return color;
}

// component to render each key on keyboard for qwerty letters, incl delete & enter
function WordleKey({ letter }) {
  const {
    wordBank,
    wordle,
    setBoard,
    guess,
    setGuess,
    game,
    setGame,
    setModalGame,
    setModalWord,
  } = useContext(WordleContext);

  function handleEvalGame() {
    const endDate = new Date();
    let updateGame = {
      ...game,
      play: false,
      end: endDate,
      time: endDate - game.start,
      message: "",
    };

    if (guess.data === wordle && wordle) {
      updateGame.message = "Congrats.. You won!";
      setGame(updateGame);
      setModalGame(true);
      return;
    }

    if (guess.row === GUESS_COLUMNS) {
      updateGame.message = "Nada.. Sorry, you lost!";
      setGame(updateGame);
      setModalGame(true);
      return;
    }

    if (game.play) {
      const newGuess = { row: guess.row + 1, col: 0, data: "" };
      setGuess(newGuess);
    }
  }

  function handleValidateWord(word) {
    const validation = wordBank.has(word);
    return validation;
  }

  function handleOnKeyPress() {
    if (!game.play) return;
    if (guess.data.length < 5) {
      const newLetter = {
        ...guess,
        col: guess.col + 1,
        data: guess.data + letter.toLowerCase(),
      };
      setGuess(newLetter);
    }
  }

  function handleOnEnter() {
    if (!game.play) return;

    if (guess.data.length === 5) {
      const validateWord = handleValidateWord(guess.data);
      if (!validateWord) {
        setModalWord(true);
        return;
      }
      setBoard((items) =>
        items.map((item, i) => (i === guess.row ? guess.data : item))
      );
      handleEvalGame();
    }
  }

  function handleOnDelete() {
    if (!game.play) return;
    if (guess.data.length > 0) {
      const removeLetter = {
        ...guess,
        col: guess.col - 1,
        data: guess.data.slice(0, -1),
      };
      setGuess(removeLetter);
    }
  }

  //enter key
  if (letter === "enter") {
    return (
      <button
        className="flex items-center justify-center text-white text-center font-semibold 
          uppercase border-0 rounded-md m-1 cursor-pointer select-none hover:bg-wordl-blue
          focus:outline-none focus:border-none h-8 w-9 col-span-3 fill-white bg-gray-400"
        onClick={handleOnEnter}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-7 w-8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 14a1 1 0 0 1 1-1h12a3 3 0 0 0 3-3V6a1 1 0 1 1 2 0v4a5 5 0 0 1-5 5H4a1 1 0 0 1-1-1z"
              fill="white"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.293 14.707a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L5.414 14l3.293 3.293a1 1 0 1 1-1.414 1.414l-4-4z"
              fill="white"
            ></path>
          </g>
        </svg>
      </button>
    );
  }

  //delete key
  else if (letter === "delete") {
    return (
      <button
        className="flex items-center justify-center text-white text-center font-semibold
        uppercase border-0 rounded-md m-1 cursor-pointer select-none hover:bg-wordl-blue 
        focus:outline-none focus:border-none h-8 w-9 col-span-3 fill-white bg-gray-400"
        onClick={handleOnDelete}
      >
        <svg
          fill="#ffffff"
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          version="1.2"
          baseProfile="tiny"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M19.5 5h-10c-1.266 0-2.834.807-3.57 1.837l-2.61 3.653-1.199 1.679c-.121.175-.122.492.003.664l1.188 1.664 2.619 3.667c.735 1.029 2.302 1.836 3.569 1.836h10c1.379 0 2.5-1.122 2.5-2.5v-10c0-1.378-1.121-2.5-2.5-2.5zm-2.293 9.793c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293 2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023 0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l2.293 2.293 2.293-2.293c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-2.293 2.293 2.293 2.293z"></path>
          </g>
        </svg>
      </button>
    );
  }

  //other keys
  else {
    return (
      <button
        className="flex items-center justify-center text-white text-center font-semibold
          uppercase border-0 rounded-md m-1 cursor-pointer select-none hover:bg-wordl-blue
          focus:outline-none focus:border-none h-8 w-6 col-span-2 bg-gray-400"
        onClick={handleOnKeyPress}
      >
        {letter}
      </button>
    );
  }
}

export default WordleKey;
