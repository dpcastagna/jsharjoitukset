//even-funktio ja parittomien lukujen poisto listasta
'use strict';

function even(numerot) {
  let uusi = [];
  for (let i = 0; i < numerot.length; i++) {
    if (numerot[i] % 2 === 0) {
      uusi.push(numerot[i]);
    }
  }
  return uusi
}

const lista = [1, 2, 3, 4, 1234124, 123, 4443];

let vastaus = even(lista);

console.log("Koko lista: " + lista);
console.log("Muokattu lista: " + vastaus);

//document.querySelector('#teksti').innerHTML = vastaus;