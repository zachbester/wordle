import { React } from "react";

function WordleHeader() {
  return (
    <header className="flex justify-start shadow-md shadow-gray-200 bg-black p-1">
      <div className="flex space-x-4 ml-4 p-1 justify-between items-center font-bold text-xl text-white text-center">
        <div className="w-9 h-9 p-1 rounded-md bg-green-500 mt-3">W</div>
        <div className="w-9 h-9 p-1 rounded-md bg-yellow-500">O</div>
        <div className="w-9 h-9 p-1 rounded-md bg-gray-500 mt-2">R</div>
        <div className="w-9 h-9 p-1 rounded-md bg-green-500">D</div>
        <div className="w-9 h-9 p-1 rounded-md bg-yellow-500 mt-2">L</div>
        <div className="w-9 h-9 p-1 rounded-md bg-gray-500">E</div>
      </div>
    </header>
  );
}

export default WordleHeader;
