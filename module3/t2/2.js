//
'use strict'


const div = document.querySelector('#target');

const first = document.createElement('li');
first.innerHTML = "First item";
const second = document.createElement('li');
second.innerHTML = "Second item";
const third = document.createElement('li');
third.innerHTML = "Third item";

second.setAttribute('class',  'my-item');

div.appendChild(first);
div.appendChild(second);
div.appendChild(third);



