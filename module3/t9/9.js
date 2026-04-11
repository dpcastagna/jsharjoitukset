//laskin yhdellä merkkijonolla
'use strict'

const calculation = document.querySelector('#calculation');
const start = document.querySelector('#start');
const result = document.querySelector('#result')

function klikkaus(evt){
  let lista = [];
  let lasku = '';
  if (calculation.value.includes('+')){
    lasku = '+';
  } else if (calculation.value.includes('-')){
    lasku = '-';
  } else if (calculation.value.includes('*')){
    lasku = '*';
  } else if (calculation.value.includes('/')){
    lasku = '/';
  }

  switch (lasku) {
    case '+':
      lista = calculation.value.split('+');
      result.textContent = String(Number(lista[0]) + Number(lista[1]));
      break;
    case '-':
      lista = calculation.value.split('-');
      result.textContent = String(Number(lista[0]) - Number(lista[1]));
      break
    case '*':
      lista = calculation.value.split('*');
      result.textContent = String(Number(lista[0]) * Number(lista[1]));
      break;
    case '/':
      lista = calculation.value.split('/');
      result.textContent = String(Number(lista[0]) / Number(lista[1]));
      break;
    default:
      result.textContent = 'Ei löydetty laskumerkkiä!';
  }
}

start.addEventListener('click', klikkaus);