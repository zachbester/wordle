// utility defining all initializations

import { GUESS_ROWS } from "./constants";

export function initWordle() {
  return "";
}

export function initBoard() {
  return Array(GUESS_ROWS).fill("");
}

export function initGuess() {
  return {
    row: 0,
    col: 0,
    data: "",
  };
}

export function initGame() {
  return {
    play: true,
    start: new Date(),
    end: "",
    time: "",
    message: "",
  };
}

export function initModalGame() {
  return false;
}

export function initModalHelp() {
  return false;
}

export function initModalWord() {
  return false;
}
