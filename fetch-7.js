

/*
fetch('https://reqres.in/api/users/1')

    .then( resp => resp.json() )
    .then( usuario => {
        console.log(usuario);
    });
*/

/*
fetch('https://reqres.in/api/users/1')

    .then( resp => {
        resp.json().then( usuario =>{
            console.log(usuario.data);
        });
        
    });
*/

/*
fetch('https://reqres.in/api/users/1')

    .then( resp => {
        resp.json().then( usuario =>{
            console.log(usuario.data);
        });

        resp.json().then( usuario =>{
               console.log(usuario.data);
        });
    });
*/

fetch('https://reqres.in/api/users/1')

    .then( resp => {
        resp.clone().clone().clone().clone().json().then( usuario =>{
            console.log(usuario.data);
        });

        resp.clone().clone().clone().json().then( usuario =>{
               console.log(usuario.data);
        });
        resp.clone().clone().json().then( usuario =>{
            console.log(usuario.data);
        });
        resp.clone().json().then( usuario =>{
            console.log(usuario.data);
        });
        resp.json().then( usuario =>{
            console.log(usuario.data);
        });
    });