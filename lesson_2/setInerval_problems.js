"use strict";

// Write a function named startCounting that logs a number to the console every
// second, starting with 1. Each number should be one greater than the previous
// number.

function startCounting() {
  let number = 1;
  let countInterval = setInterval(() => {
    console.log(number);
    number += 1;
  }, 1000);
}

// Extend the code from the previous problem with a stopCounting function that
// stops the logger when called.

function stopCounting() {
  clearInterval(countInterval);
}