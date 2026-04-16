//haetaan TvMaze-sivustolta jonkun tv-sarjan tietoja ja tulostetaan ne konsoliin
'use strict';

const seriesForm = document.querySelector('#series-form')
seriesForm.addEventListener('submit', async function(evt) {
    // ... prevent the default action.
    evt.preventDefault();
    // get value of input element
    const code = document.querySelector('input[name=q]').value;
    const tulos = document.querySelector('#results')
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${code}`);
        const jsonData = await response.json();
        tulos.innerHTML = '';
        console.log(jsonData);
        for (let show of jsonData) {
            const article = document.createElement('article');

            const otsikko = document.createElement('h1');
            otsikko.textContent = show.show.name;
            article.appendChild(otsikko);

            const linkki = document.createElement('a');
            linkki.href = show.show.url;
            linkki.target = "_blank";
            linkki.textContent = show.show.url;
            article.appendChild(linkki);

            const kuva = document.createElement('img');
            kuva.src = show.show.image == null ? 'https://placehold.co/210x295?text=Not%20Found' : show.show.image.medium;
            kuva.alt = show.show.name;
            article.appendChild(kuva);

            const kuvaus = document.createElement('div');
            kuvaus.innerHTML = show.show.summary;
            article.appendChild(kuvaus);

            tulos.appendChild(article);
        }
    } catch (error) {
        console.log(error.message);
    }
});