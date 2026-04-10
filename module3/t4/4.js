//Lisätään optioneita for loopilla select-elementtiin
'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const div = document.querySelector('#target');

for (let i = 0; i < students.length; i++) {
  const listanOsa = document.createElement('option');
  listanOsa.textContent = `${students[i].name}`;
  listanOsa.value = `${students[i].id}`;
  div.appendChild(listanOsa);
}