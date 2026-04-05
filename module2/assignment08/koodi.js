//Concat-funktio ja stringien yhdistely
'use strict';

function concat(nimet) {
  let uusi = "";
  for (let i = 0; i < nimet.length; i++) {
    uusi += nimet[i];
  }
  return uusi
}

const lista = ["Johnny", "DeeDee", "Joey", "Marky", "Danny"];

let vastaus = concat(lista);

document.querySelector('#teksti').innerHTML = vastaus;