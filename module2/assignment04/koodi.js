//Numeroiden kysely kunnes annetaan 0 ja tulostus console.logilla isoimmasta pienimpään
'use strict';

const lista = [];
let numero = 123;

while (numero !== 0) {
  numero = +prompt("Anna numero tai 0 jos haluat lopettaa");
  lista.push(numero);
}

lista.sort((a,b) => a-b);

//let vastaus = '<ul>';

//document.querySelector('#teksti').innerHTML = '<ul>';
for (let i = lista.length - 1; i >= 0; i--){

  //document.querySelector('#teksti').innerHTML += '<li>' + i + '</li>';
  //vastaus += '<li>' + lista[i] + '</li>';
  console.log(lista[i]);

}
/*vastaus += '</ul>';
console.log(vastaus);
document.querySelector('#teksti').innerHTML = vastaus;*/