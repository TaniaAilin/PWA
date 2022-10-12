/*
fetch('https://reqres.inapi/users/1')

    .then( resp => {
        resp.json().then(console.log);
        })

        .catch( erro =>{
            console.log ('Error en la peticion');
            console.log(error);
        });
*/

/*
fetch('https://reqres.in/api/users/1')

    .then( resp => {
        resp.json().then(console.log);
        })

        .catch( erro =>{
            console.log ('Error en la peticion');
            console.log(error);
        });
*/

/*
fetch('https://reqres.in/api/users/1000')

    .then( resp => {
        resp.json().then(console.log);
        })

        .catch( erro =>{
            console.log ('Error en la peticion');
            console.log(error);
        });
*/


fetch('https://reqres.in/api/users/1000')

    .then( resp => {

        if(resp.ok){
            return resp.json();
        }else
        throw new Error('No existe el ususario 1000')
    
        })

        .then(console.log)
        .catch( error =>{
            console.log ('Error en la peticion');
            console.log(error);
        });