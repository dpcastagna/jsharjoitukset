'use strict';
const määrä = +prompt("Osallistujamäärä:");

const lista = [];

for (let i = 0; i < määrä; i++) {
  lista.push(prompt("Anna osallistuja " + String(i + 1) + ":n nimi"));
}

lista.sort();

let vastaus = '<ol>';

//document.querySelector('#teksti').innerHTML = '<ul>';
for (let i = 0; i < lista.length; i++){

  //document.querySelector('#teksti').innerHTML += '<li>' + i + '</li>';
  vastaus += '<li>' + lista[i] + '</li>';

}
vastaus += '</ol>';
//console.log(vastaus);
document.querySelector('#teksti').innerHTML = vastaus;