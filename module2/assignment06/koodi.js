//Noppa-funktio ja tulosten tulostaminen listaan kunnes tulee 6
'use strict';

function heitä_noppaa() {
  return Math.floor(Math.random() * 6) + 1;
}

const lista = [];
//let numero = 123;
let jatka = true

while (jatka) {
  let numero = heitä_noppaa();

  if (numero === 6) {
    jatka = false;
  }
  lista.push(numero);
  let vastaus = '<ul>';

  for (let i = 0; i < lista.length; i++) {
    vastaus += `<li>${lista[i]}</li>`;
  }
  vastaus += '</ul>';
  //console.log(vastaus);
  document.querySelector('#teksti').innerHTML = vastaus;
}
