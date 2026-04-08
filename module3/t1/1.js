//Lisätään listaan tavaraa ja elementtiin class-atribuutti
'use strict'
document.getElementById('target').innerHTML = "<li>First item</li>\n" +
    "<li>Second item</li>\n" +
    "<li>Third item</li>";

document.getElementById('target').setAttribute('class', 'my-list');