/* eslint-disable max-lines-per-function */
"use strict";

let game = (function() {
  const maxIncorrectGuesses = 6;

  function randomWord(wordsArr) {
    if (wordsArr.length === 0) {
      alert("Sorry, I've run out of words!");
      return undefined;
    } else if (wordsArr.length === 1) {
      return wordsArr.pop();
    } else {
      let index = Math.floor(Math.random * wordsArr.length);
      return wordsArr.splice(index, 1).pop();
    }
  }

  return {
    words:['apple', 'banana', 'orange', 'pear'],
    guessedLetters: [],
    incorrectGuesses: 0,

    generateBlanks() {
      let spaces = document.querySelector("#spaces");
      for (let i = 0; i < this.word.length; i += 1) {
        let span = document.createElement('span');
        spaces.appendChild(span);
      }
    },

    reset() {
      this.word = randomWord(this.words);
      this.generateBlanks();
      this.incorrectGuesses = 0;
    },

    init() {
      this.reset();
    },
  };
})();

document.addEventListener('DOMContentLoaded', game.init());
