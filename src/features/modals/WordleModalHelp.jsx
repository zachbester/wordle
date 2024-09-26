import { React, useContext } from "react";
import { WordleContext } from "../../context/WordleContext";

// component to render popup for game help when clicking on the help button
function WordleModalHelp({ handleHelpExit }) {
  const { modalHelp } = useContext(WordleContext);

  if (!modalHelp) return;

  return (
    <div
      id="backdrop"
      className="flex justify-center fixed z-40 top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.3)] backdrop-blur-xl"
    >
      <div
        id="content"
        className="flex flex-col bg-white-100 border-2 border-solid border-green-200 backdrop-blur-2xl px-[3px] 
          py-[3px] w-[320px] h-[600px] my-auto mx-auto rounded-md gap-[15px] transition-all"
      >
        <div
          id="heading"
          className="flex space-x-3 mt-0 justify-start items-center font-bold text-2xl text-white text-center"
        >
          <h3>How to play?</h3>
        </div>
        <div id="body" className="text-white text-sm">
          <ul className="list-outside list-disc ml-6 marker:text-yellow-200">
            <li>Guess the word puzzle in 6 attempts</li>
            <li>Provide 5 letters per attempt</li>
            <li>Colors indicate letter accuracy after an attempt</li>
          </ul>
          <div
            id="sub-header-1"
            className="flex space-x-3 mt-3 mb-3 justify-start items-center font-bold text-lg text-white text-center"
          >
            <h5>Colors</h5>
          </div>
          <ul className="list-none space-y-2">
            <li className="flex items-center">
              <span className="w-3 h-3 bg-gray-500 inline-block mr-3"></span>
              Incorrect
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-yellow-500 inline-block mr-3"></span>
              Correct and in wrong position
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-green-500 inline-block mr-3"></span>
              Correct and in right position
            </li>
          </ul>
          <div
            id="sub-header-2"
            className="flex space-x-3 mt-3 mb-3 justify-start items-center font-bold text-xl text-white text-center"
          >
            <h5>Examples</h5>
          </div>
          <div id="example-1">
            <div className="flex space-x-1 mt-1 justify-left items-center font-bold text-2xl text-white text-center">
              <div className="w-9 h-9 p-0 rounded-sm bg-yellow-500">L</div>
              <div className="w-9 h-9 p-0 rounded-sm bg-gray-500">O</div>
              <div className="w-9 h-9 p-0 rounded-sm bg-gray-500">O</div>
              <div className="w-9 h-9 p-0 rounded-sm bg-yellow-500">P</div>
              <div className="w-9 h-9 p-0 rounded-sm bg-gray-500">S</div>
            </div>
            <div className="mt-2">
              <span className="font-bold">L, P</span> are correct but in the
              wrong position
            </div>
          </div>
          <div id="example-2">
            <div className="flex space-x-1 mt-1 justify-left items-center font-bold text-2xl text-white text-center">
              <div className="w-9 h-9 p-0 rounded-sm bg-green-500">A</div>
              <div className="w-9 h-9 p-0 rounded-sm bg-gray-500">R</div>
              <div className="w-9 h-9 p-0 rounded-sm bg-gray-500">I</div>
              <div className="w-9 h-9 p-0 rounded-sm bg-gray-500">S</div>
              <div className="w-9 h-9 p-0 rounded-sm bg-green-500">E</div>
            </div>
            <div className="mt-2">
              <span className="font-bold">A, E</span> are correct and in the
              correct position
            </div>
          </div>
          <div id="example-3">
            <div className="flex space-x-1 mt-1 justify-left items-center font-bold text-2xl text-white text-center">
              <div className="w-9 h-9 p-0 rounded-sm bg-green-500">A</div>
              <div className="w-9 h-9 p-0 rounded-sm bg-green-500">P</div>
              <div className="w-9 h-9 p-0 rounded-sm bg-green-500">P</div>
              <div className="w-9 h-9 p-0 rounded-sm bg-green-500">L</div>
              <div className="w-9 h-9 p-0 rounded-sm bg-green-500">E</div>
            </div>
            <div className="mt-2">
              <span className="font-bold">A, P, L, E</span> are correct and all
              in the correct position
            </div>
          </div>
        </div>
        <div
          id="footer"
          className="flex justify-center gap-0 items-center mt-0"
        >
          <button
            onClick={handleHelpExit}
            className="flex items-center justify-center text-white text-center font-semibold
          uppercase border-1 rounded-md mt-0 p-1 cursor-pointer select-none hover:bg-wordl-blue
          bg-green-500 focus:outline-none focus:border-none h-12 w-16"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
}

export default WordleModalHelp;
