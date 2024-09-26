import { React, useContext } from "react";
import { WordleContext } from "../../context/WordleContext";

function WordleFooter() {
  const { setModalHelp } = useContext(WordleContext);

  function handleOnHelp() {
    setModalHelp(true);
  }

  return (
    <footer className="flex h-15 w-screen bottom-0 p-1 shadow-inner shadow-gray-200 bg-black">
      <div className="flex items-center justify-between m-1">
        <div className="h-7 w-7 rounded-full">
          <a href="https://www.jsmastery.pro/">
            <img
              src="/images/logo-jsm.png"
              height="60px"
              width="60px"
              alt="JSM logo"
              className="rounded-full"
            />
          </a>
        </div>
        <span className="ml-2 text-xs text-wordl-blue font-normal">
          Coding Challenge 4 | By Zach Bester
        </span>
      </div>
      <div className="flex items-end justify-end mt-2 h-6 w-6">
        <button onClick={handleOnHelp}>
          <img
            src="/images/icon-help-48.png"
            alt="Help"
            height="65px"
            width="65px"
          />
        </button>
      </div>
    </footer>
  );
}

export default WordleFooter;
