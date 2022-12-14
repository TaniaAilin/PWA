/*
function sumarLento(numero){
    return new Promise(function(resolve, reject){
       setTimeout(function(){ 
        resolve(numero + 1);
    }, 800);
    });
}
let sumarRapido = (numero) =>{
    return new Promise ((resolve, reject)=>{
    setTimeout( ()=> resolve (numero + 1), 300);

});
}
Promise.race([sumarLento(5), sumarRapido(10)])
.then(respuesta =>{
    console.log(respuesta);
})
*/

/*
function sumarLento(numero){
    return new Promise(function(resolve, reject){
       setTimeout(function(){ 
        resolve(numero + 1);
    }, 800);
    });
}
let sumarRapido = (numero) =>{
    return new Promise ((resolve, reject)=>{
    setTimeout( ()=>{

     reject ('Error al sumar rápido')
    }, 300);

});
}
Promise.race([sumarLento(5), sumarRapido(10)])
.then(respuesta =>{
    console.log(respuesta);
})
.catch(console.log);
*/

function sumarLento(numero){
    return new Promise(function(resolve, reject){
       setTimeout(function(){ 
        resolve(numero + 1);
    }, 800);
    });
}
let sumarRapido = (numero) =>{
    return new Promise ((resolve, reject)=>{
    setTimeout( ()=>{

     reject ('Error al sumar rápido')
    }, 900);

});
}
Promise.race([sumarLento(5), sumarRapido(10)])
.then(respuesta =>{
    console.log(respuesta);
})
.catch(console.log);