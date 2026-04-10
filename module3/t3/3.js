//Lisätään listan nimet for-loopilla sivulle
'use strict';
const names = ['John', 'Paul', 'Jones'];

const div = document.querySelector('#target');

for (name of names) {
  const listanOsa = document.createElement('li');
  listanOsa.appendChild(document.createTextNode(`${name}`));
  div.appendChild(listanOsa);
}