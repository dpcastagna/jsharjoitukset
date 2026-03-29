'use strict';
const num1 = +prompt("Anna ensimmäinen luku:");
const num2 = +prompt("Anna toinen luku:");
const num3 = +prompt("Anna kolmas luku:");

document.querySelector('#sum').innerHTML = 'Summa: ' + (num1 + num2 + num3).toString();
document.querySelector('#product').innerHTML = 'Tulo: ' + (num1 * num2 * num3).toString();
document.querySelector('#average').innerHTML = 'Keskiarvo: ' + ((num1 + num2 + num3) / 3).toString();