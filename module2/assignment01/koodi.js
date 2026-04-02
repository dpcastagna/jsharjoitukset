'use strict';

const lista = [];

for (let i = 0; i < 5; i++) {
  lista.push(prompt("Anna luku " + String(i + 1)));
}

for (let i = lista.length - 1; i >= 0; i--) {
  console.log(lista[i])
}