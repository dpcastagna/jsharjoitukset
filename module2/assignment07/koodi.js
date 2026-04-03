//Noppa-funktio ja tulosten tulostaminen listaan kunnes tulee käyttäjältä kysytty nopan sivuluku
'use strict';

function heitä_noppaa(sivut) {
  return Math.floor(Math.random() * sivut) + 1;
}

const lista = [];
//let numero = 123;
let jatka = true
let sivut = +prompt("Anna nopan sivujen määrä")

while (jatka) {
  let numero = heitä_noppaa(sivut);

  if (numero === sivut) {
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
