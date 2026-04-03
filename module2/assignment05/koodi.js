//Numeroiden kysely kunnes annetaan sama numero ja tulostus console.logilla pienimmästä isoimpaan
'use strict';

const lista = [];
//let numero = 123;
let jatka = true

while (jatka) {
  let numero = +prompt("Anna numero tai jo annettu numero jos haluat lopettaa");
  for (let i = 0; i < lista.length; i++) {
    if (numero === lista[i]) {
      jatka = false;
    }
  }
  if (jatka) {
    lista.push(numero);
  }
}

lista.sort((a,b) => a-b);

//let vastaus = '<ul>';

for (let i = 0; i < lista.length; i++){
  console.log(lista[i]);
}
/*vastaus += '</ul>';
console.log(vastaus);
document.querySelector('#teksti').innerHTML = vastaus;*/