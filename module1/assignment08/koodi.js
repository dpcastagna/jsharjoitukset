'use strict';
const alku = +prompt("Anna alkuvuosi:");
const loppu = +prompt("Anna loppuvuosi:");

let vastaus = '<ul>';

//document.querySelector('#teksti').innerHTML = '<ul>';
for (let i = alku; i < loppu; i++){
  if (i % 4 === 0) {
    if (i % 100 === 0) {
      if (i % 400 === 0) {
        //document.querySelector('#teksti').innerHTML += vuosi + '<li>' + i + '</li>';
        vastaus += '<li>' + i + '</li>';
      }
    } else {
      //document.querySelector('#teksti').innerHTML += '<li>' + i + '</li>';
      vastaus += '<li>' + i + '</li>';
    }
  }
}
vastaus += '</ul>';
console.log(vastaus)
document.querySelector('#teksti').innerHTML = vastaus;