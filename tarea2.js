
// ==============================================
// Ejercicio #2
// ==============================================
/*
 Similar al ejercicio anterior... haga un llamado a la misma api
 (puede reutilizar el código )
 https://swapi.dev/api/people/1/
 
 Pero con el nombre y el género, haga un posteo
 POST a: https://reqres.in/api/users

 Imprima en consola el objeto y asegúrese que tenga
 el ID y la fecha de creación del objeto
*/

// Resolución de la tarea #2

    fetch('https://swapi.dev/api/people/1/')
    .then (resp => resp.json())
        .then( respObj => {
       // console.log (respObj);
        console.log (respObj.name);
       console.log (respObj.gender);
    });

     let respObj={
    
   };
    
    fetch('https://reqres.in/api/users',{
        method: 'POST',
        body: JSON.stringify( respObj),
        headers: {
            'Content-Type' : 'aplication/json' 
        }
    
    })
     .then (resp => resp.json())
        .then(respObj => {
            // console.log (respObj);
             console.log (respObj.id);
             console.log (respObj.createdAt);
         })
    .catch(error=>{
    console.log ('Error en la petición');
    console.log(error);
    });
    
    