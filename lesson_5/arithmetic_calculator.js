/* eslint-disable max-lines-per-function */
document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');
  let total = document.getElementById('total');

  form.addEventListener('submit', event => {
    event.preventDefault();

    let firstNumber = parseInt(document.getElementById('first-number').value, 10);
    let secondNumber = parseInt(document.getElementById('second-number').value, 10);
    let operator = document.getElementById('operator').value;

    switch(operator) {
      case '+':
        total.textContent = (firstNumber + secondNumber);
        break;
      case '-':
        total.textContent = (firstNumber - secondNumber);
        break;
      case '*':
        total.textContent = (firstNumber * secondNumber);
        break;
      case '/':
        total.textContent = (firstNumber / secondNumber);
        break;
    }
  });
});