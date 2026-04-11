//laskin kahdella luvulla ja selectillä
'use strict'

const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const operation = document.querySelector('#operation');
const start = document.querySelector('#start');
const result = document.querySelector('#result')

function klikkaus(evt){
  switch (operation.value) {
    case 'add':
      result.textContent = String(Number(num1.value) + Number(num2.value));
      break;
    case 'sub':
      result.textContent = String(Number(num1.value) - Number(num2.value));
      break
    case 'multi':
      result.textContent = String(Number(num1.value) * Number(num2.value));
      break;
    case 'div':
      result.textContent = String(Number(num1.value) / Number(num2.value));
      break;
  }
}

start.addEventListener('click', klikkaus);