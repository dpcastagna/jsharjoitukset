//
'use strict'

const form = document.querySelector('#source');
const firstname = document.querySelector('input[name=firstname]');
const lastname = document.querySelector('input[name=lastname]');
const p = document.querySelector('#target');

// When the form is submitted...
form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    p.innerText = `Your name is ${firstname.value} ${lastname.value}`;
});