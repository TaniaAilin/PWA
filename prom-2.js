/*function sumarUno(numero){
    var promesa = new Promise(function(resolve, reject){
       setTimeout(function(){ 
        resolve( numero + 1);
    }, 800);
    });
    return promesa;
}
sumarUno( 5 ).then(nuevoNumero => {
    sumarUno(nuevoNumero).then(nuevoNumero2 => {
        console.log(nuevoNumero2);
  });
});*/

/*function sumarUno(numero){
    var promesa = new Promise(function(resolve, reject){
        if (numero>=7){
            reject('El número es muy alto');
        }
       setTimeout(function(){ 
        resolve( numero + 1);
    }, 800);
    });
    return promesa;
}
sumarUno( 8 )
    .then(nuevoValor => {
        console.log(nuevoValor);
    })
        .catch(error=> {
            console.log('Error en promesa');
            console.log(error);
    });*/
/*
    function sumarUno(numero){
        var promesa = new Promise(function(resolve, reject){
            if (numero>=7){
                reject('El número es muy alto');
            }
           setTimeout(function(){ 
            resolve( numero + 1);
        }, 800);
        });
        return promesa;
    }
    sumarUno( 5 )
        .then(sumarUno)
        .then(sumarUno)
        .then(sumarUno)
    
        .then(nuevoValor => {
            console.log(nuevoValor);
        })
            .catch(error=> {
                console.log('Error en promesa');
                console.log(error);
        });
*/

function sumarUno(numero){
    var promesa = new Promise(function(resolve, reject){
        console.log(numero)
        if (numero>=7){
            reject('El número es muy alto');
        }
       setTimeout(function(){ 
        resolve( numero + 1);
    }, 800);
    });
    return promesa;
}
sumarUno( 5 )
    .then(sumarUno)
    .then(sumarUno)
    .then(sumarUno)

    .then(nuevoValor => {
        console.log(nuevoValor);
    })
        .catch(error=> {
            console.log('Error en promesa');
            console.log(error);
    });
