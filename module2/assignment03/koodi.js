'use strict';

const lista = [];

for (let i = 0; i < 6; i++) {
  lista.push(prompt("Anna koiran " + String(i + 1) + ":n nimi"));
}

lista.sort();

let vastaus = '<ul>';

//document.querySelector('#teksti').innerHTML = '<ul>';
for (let i = lista.length - 1; i >= 0; i--){

  //document.querySelector('#teksti').innerHTML += '<li>' + i + '</li>';
  vastaus += '<li>' + lista[i] + '</li>';

}
vastaus += '</ul>';
//console.log(vastaus);
document.querySelector('#teksti').innerHTML = vastaus;