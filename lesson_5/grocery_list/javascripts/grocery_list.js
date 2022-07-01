/* eslint-disable max-lines-per-function */
"use strict";

document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');
  let list = document.getElementById('grocery-list');

  function validateQuantity(str) {
    let num = parseInt(str, 10);
    if (str !== String(num) || num < 1 || str === 'NaN') num = 1;

    return num;
  }

  function addNewListItem(name, quantity) {
    let li = document.createElement('li');
    li.textContent = (`${quantity} ${name}`);
    list.append(li);
  }

  form.addEventListener('submit', event => {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let quantity = document.getElementById('quantity').value;
    quantity = validateQuantity(quantity);

    addNewListItem(name, quantity);
    form.reset();
  });
});