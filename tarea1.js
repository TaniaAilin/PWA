// Tarea sobre promesas y fetch
// Realice resolución de cada ejercicio,

// compruebe el resultado en la consola y posteriormente
// siga con el siguiente.

// Comente TODO el código del ejercicio anterior
// antes de continuar con el siguiente.

// ==============================================
// Ejercicio #1
// ==============================================
/*
 Realizar un llamado FETCH a la siguiente API
 https://swapi.dev/api/people/1/
 Imprima en consola el nombre y género de la persona.
*/

// Resolución de la tarea #1

/*fetch('https://swapi.dev/api/people/1/')

    .then( resp => {
        resp.json().then( usuario =>{
            console.log(usuario.name);
            console.log(usuario.gender);
        });
    });*/

fetch('https://swapi.dev/api/people/1/')
    .then (resp => resp.json())
        .then(respObj => {
       // console.log (respObj);
        console.log (respObj.name);
        console.log (respObj.gender);
    });