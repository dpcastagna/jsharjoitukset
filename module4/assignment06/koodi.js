//haetaan chuck norris vitsi ja tulostetaan se konsoliin
'use strict';

const jokeForm = document.querySelector('#joke-form')
jokeForm.addEventListener('submit', async function(evt) {
    // ... prevent the default action.
    evt.preventDefault();
    // get value of input element
    const code = document.querySelector('input[name=q]').value;
    const tulos = document.querySelector('#results')
    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${code}`);
        const jsonData = await response.json();
        tulos.innerHTML = '';
        console.log(jsonData);
        for (let joke of jsonData.result) {
            const article = document.createElement('article');

            const vitsi = document.createElement('p');
            vitsi.textContent = joke.value;
            article.appendChild(vitsi);

            tulos.appendChild(article);
        }
    } catch (error) {
        console.log(error.message);
    }
});