"use strict";

// 1. Write a JavaScript function named delayLog that loops through the numbers
//    from 1 to 10, and logs each number after that number of seconds. It should
//    log 1 after 1 second, 2 after 2 seconds, etc. Note that the computation of
//    the time is not dependent on when a previous number was logged. This means
//    that for 10 numbers a total of 10 seconds would have passed.

function delayLog() {
  for (let i = 1; i <= 10; i += 1) {
    let miliseconds = 1000 * i;
    setTimeout(() => {
      console.log(i);
    }, miliseconds);
  }
}

// delayLog();

// 2. In what sequence will the JavaScript runtime run the following lines of
//    code? Number them from 1-8 to show the order of execution.

// setTimeout(() => {        // 1
//   console.log('Once');    //5
// }, 1000);

// setTimeout(() => {        // 2
//   console.log('upon');    // 7
// }, 3000);

// setTimeout(() => {        // 3
//   console.log('a');       // 6
// }, 2000);

// setTimeout(() => {        // 4
//   console.log('time');    // 8
// }, 4000);

// 3. In what sequence does the JavaScript runtime run the functions q, d, n, z,
//    s, f, and g in the following code?

// setTimeout(() => {      // 1
//   setTimeout(() => {    // 6
//     q();                // 12
//   }, 15);

//   d();                  //7

//   setTimeout(() => {    // 8
//     n();                // 10
//   }, 5);

//   z();                  // 9
// }, 10);

// setTimeout(() => {      // 2
//   s();                  // 11
// }, 20);

// setTimeout(() => {      // 3
//   f();                  // 5
// });

// g();                    // 4

// /// g, f, d, z, n, s, q

// 4. Write a function named afterNSeconds that takes two arguments: a callback
//    and a time duration in seconds. The function should wait for the indicated
//    period, then invoke the callback function.

function afterNSeconds(callback, seconds) {
  setTimeout(callback, seconds * 1000);
}