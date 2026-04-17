//haetaan chuck norris vitsi ja tulostetaan se konsoliin
'use strict';

async function haeVitsi() {
    const response = await fetch('https://api.chucknorris.io/jokes/random')
    const jsonData = await response.json();
    console.log(jsonData.value);
}

haeVitsi();
