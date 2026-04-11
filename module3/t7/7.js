//kuvan vaihto mouseoverilla ja mouseoutilla
'use strict'

const trigger = document.querySelector('#trigger');
const target = document.querySelector('#target');

function mouseOn(evt){
  target.src = 'img/picB.jpg';
}

function mouseOut(evt) {
  target.src = 'img/picA.jpg';
}

trigger.addEventListener('mouseover', mouseOn);
trigger.addEventListener('mouseout', mouseOut);