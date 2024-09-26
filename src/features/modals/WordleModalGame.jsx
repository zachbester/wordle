import { React, useContext } from "react";
import { WordleContext } from "../../context/WordleContext";

// component to render popup for game results
function WordleModalGame({ handleGameExit, handleGamePlayAgain }) {
  const { wordle, game, guess, modalGame } = useContext(WordleContext);

  function handleDisplayDate(date) {
    if (date === undefined || date === null) return;
    const year = date?.getFullYear();
    const month = String(date?.getMonth() + 1).padStart(2, "0");
    const day = String(date?.getDate()).padStart(2, "0");
    const hours = String(date?.getHours()).padStart(2, "0");
    const minutes = String(date?.getMinutes()).padStart(2, "0");
    const seconds = String(date?.getSeconds()).padStart(2, "0");
    const dateString = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;

    return dateString;
  }

  function handleDisplayTime(dateStart, dateEnd) {
    const start = new Date(dateStart);
    const end = new Date(dateEnd);
    const diff = end - start;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const sec = Math.floor((diff % (1000 * 60)) / 1000);
    let time;

    if (sec > 0) time = `${sec} sec`;
    if (sec > 0 && min > 0) time = `${min} min, ${sec} sec`;
    if (sec > 0 && min > 0 && hours > 0)
      time = `${hours} hours, ${min} min, ${sec} sec`;
    if (sec > 0 && min > 0 && hours > 0 && days > 0)
      time = `${days} days, ${hours} hours, ${min} min, ${sec} sec`;

    return time;
  }

  if (!modalGame) return;

  return (
    <div
      id="backdrop"
      className="flex justify-center fixed z-40 top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.3)] backdrop-blur-xl"
    >
      <div
        id="content"
        className=" flex flex-col bg-white-100 border-2 border-solid border-green-200
          backdrop-blur-2xl my-auto mx-auto w-[320px] h-[370px] rounded-md gap-[15px] transition-all"
      >
        {game.message.includes("won") && (
          <div id="heading-won">
            <div className="flex space-x-3 mt-0 justify-center items-center font-bold text-2xl text-white text-center">
              <div className="w-12 h-12 p-1 rounded-md bg-green-500 mt-3">
                W
              </div>
              <div className="w-12 h-12 p-1 rounded-md bg-yellow-500">H</div>
              <div className="w-12 h-12 p-1 rounded-md bg-gray-500 mt-2">O</div>
              <div className="w-12 h-12 p-1 rounded-md bg-green-500">O</div>
              <div className="w-12 h-12 p-1 rounded-md bg-yellow-500 mt-2">
                P
              </div>
            </div>
          </div>
        )}
        {game.message.includes("lost") && (
          <div id="heading-lost">
            <div className="flex space-x-3 mt-1 justify-center items-center font-bold text-2xl text-white text-center">
              <div className="w-12 h-12 p-1 rounded-md bg-green-500 mt-3">
                N
              </div>
              <div className="w-12 h-12 p-1 rounded-md bg-yellow-500">O</div>
              <div className="w-12 h-12 p-1 rounded-md bg-gray-500 mt-2">P</div>
              <div className="w-12 h-12 p-1 rounded-md bg-green-500">E</div>
            </div>
          </div>
        )}
        <div
          id="sub-header"
          className="flex space-x-3 mt-1 justify-start items-center font-bold text-lg text-white text-center"
        >
          <h3>{game.message}</h3>
        </div>
        <div id="body" className="text-white text-sm">
          <p>
            <span>Start:</span>
            <span>&nbsp;</span>
            <span>{handleDisplayDate(game.start)}</span>
          </p>
          <p>
            <span>End:</span>
            <span>&nbsp;</span>
            <span>{handleDisplayDate(game.end)}</span>
          </p>
          <p>
            <span>Time:</span>
            <span>&nbsp;</span>
            <span>
              {handleDisplayTime(
                handleDisplayDate(game.start),
                handleDisplayDate(game.end)
              )}
            </span>
          </p>
          <p>
            <span>Attempts:</span>
            <span>&nbsp;</span>
            <span>{guess.row + 1}</span>
          </p>
          <p className="flex justify-center items-center text-2xl">
            <span>{wordle.toUpperCase()}</span>
          </p>
        </div>
        <div
          id="footer"
          className="flex justify-center gap-[24px] items-center mt-[40px]"
        >
          <button
            onClick={handleGamePlayAgain}
            className="flex items-center justify-center text-white text-center font-semibold
              uppercase border-1 rounded-md m-0 p-0 cursor-pointer select-none hover:bg-wordl-blue
              bg-green-500 focus:outline-none focus:border-none h-12 w-16"
          >
            Replay
          </button>
          <button
            onClick={handleGameExit}
            className="flex items-center justify-center text-white text-center font-semibold
              uppercase border-1 rounded-md m-0 p-0 cursor-pointer select-none hover:bg-wordl-blue
              bg-green-500 focus:outline-none focus:border-none h-12 w-16"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
}

export default WordleModalGame;
