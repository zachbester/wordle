import { React, useContext } from "react";
import { WordleContext } from "../../context/WordleContext";

// component to render popup to indicate invalid word guessed
function WordleModalWord({ handleWordExit }) {
  const { modalWord } = useContext(WordleContext);

  if (!modalWord) return;

  return (
    <div
      id="backdrop"
      className="flex justify-center fixed z-40 top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.3)] backdrop-blur-xl"
    >
      <div
        id="content"
        className="flex flex-col bg-white-100 border-2 border-solid border-green-200 backdrop-blur-2xl px-[10px] 
          py-[10px] w-[280px] h-[210px] my-auto mx-auto rounded-md gap-[15px] transition-all"
      >
        <div
          id="heading"
          className="flex space-x-3 mt-0 justify-start items-center font-bold text-xl text-white text-center"
        >
          <h3>Information</h3>
        </div>
        <div id="body" className="text-white text-sm">
          <p className="">
            The current guess is not recognized as a valid word! Please try
            again
          </p>
        </div>
        <div
          id="footer"
          className="flex justify-center gap-0 items-center mt-0"
        >
          <button
            onClick={handleWordExit}
            className="flex items-center justify-center text-white text-center font-semibold
              uppercase border-1 rounded-md mt-5 p-0 cursor-pointer select-none hover:bg-wordl-blue
              bg-green-500 focus:outline-none focus:border-none h-12 w-16"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
}

export default WordleModalWord;
