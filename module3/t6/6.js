//alertin aukaisu napin painamisen jälkeen
'use strict'

const button = document.querySelector('button');

function klikkaus(evt){
  alert('Button Clicked');
}

button.addEventListener('click', klikkaus);