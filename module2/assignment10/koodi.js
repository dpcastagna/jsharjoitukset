//Äänestysohjelma
'use strict';

const ehdokkaat = [];

let määrä = +prompt("Montako ehdokasta?");

for (let i = 1; i < määrä + 1; i++) {
  let nimi = prompt(`Ehdokkaan ${i} nimi?`);
  ehdokkaat.push({ nimi: nimi, votes: 0});
}

let äänet = +prompt("Montako äänestäjää?")

for (let i = 0; i < äänet; i++) {
  //console.log(ehdokkaat);
  let ääni = prompt(`Äänestäjä ${i + 1}, ketä äänestät?`);
  for (let j = 0; j < ehdokkaat.length; j++) {
    if (ääni === ehdokkaat[j].nimi) {
      ehdokkaat[j].votes += 1;
      break
    }
  }
}
//console.log(ehdokkaat);
ehdokkaat.sort((a, b) =>  a.votes - b.votes);
//console.log(ehdokkaat);
console.log(`Voittaja on ${ehdokkaat[ehdokkaat.length - 1].nimi} ${ehdokkaat[ehdokkaat.length - 1].votes}:llä äänellä.`);

for (let i = ehdokkaat.length - 1; i >= 0; i--) {
  console.log(`${ehdokkaat[i].nimi}: ${ehdokkaat[i].votes} ääntä.`);
}

//document.querySelector('#teksti').innerHTML = vastaus;