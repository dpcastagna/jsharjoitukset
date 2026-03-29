'use strict';
const nimi = prompt("Name:");

const num = Math.floor(Math.random() * 4) + 1;

if (num === 1){
  document.querySelector('#teksti').innerHTML = nimi + ' you are a Gryffindor!';
} else if (num === 2){
  document.querySelector('#teksti').innerHTML = nimi + ' you are a Slytherin!';
} else if (num === 3){
  document.querySelector('#teksti').innerHTML = nimi + ' you are a Ravenclaw!';
} else{
  document.querySelector('#teksti').innerHTML = nimi + ' you are a Hufflepuff!';
}