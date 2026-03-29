'use strict';
const vuosi = +prompt("Anna vuosi:");



if (vuosi % 4 === 0) {
  if (vuosi % 100 === 0) {
    if (vuosi % 400 === 0) {
      document.querySelector('#teksti').innerHTML = vuosi + ' on karkausvuosi.';
    } else {
      document.querySelector('#teksti').innerHTML = vuosi + ' ei ole karkausvuosi.';
    }
  } else {
    document.querySelector('#teksti').innerHTML = vuosi + ' on karkausvuosi.';
  }
} else {
  document.querySelector('#teksti').innerHTML = vuosi + ' ei ole karkausvuosi.';
}