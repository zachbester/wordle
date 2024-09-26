import { React } from "react";
import WordleBoard from "../board/WordleBoard";
import WordleKeyBoard from "../keyboard/WordleKeyboard";

function WordleContent() {
  return (
    <main className="justify-start items-start mx-auto ml-1 mt-1 mb-0 max-w-3xl bg-black border-0 border-blue-600">
      <WordleBoard />
      <WordleKeyBoard />
    </main>
  );
}

export default WordleContent;
