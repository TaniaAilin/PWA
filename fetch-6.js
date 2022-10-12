/* Fetch blob Ejercicio 1
fetch('superman.png')

    .then( response => response.blob() )
    .then( imagen => {
        console.log(imagen);
    });
*/

let img = document.querySelector('img');

fetch('superman.png')

    .then( response => response.blob() )
    .then( imagen => {
        var imgPath = URL.createObjectURL(imagen)
        img.src = imgPath;
    });
