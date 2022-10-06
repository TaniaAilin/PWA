/*
function sumarLento(numero){
    return new Promise(function(resolve, reject){
       setTimeout(function(){ 
        resolve( numero + 1);
    }, 800);
    });
}
let sumarRapido = (numero) =>{
    return new Promise ((resolve, reject)=>{
    setTimeout( ()=> resolve (numero + 1), 300);

});
}
sumarLento(5).then(console.log);
sumarRapido(10).then(console.log);
*/

/*
function sumarLento(numero){
    return new Promise(function(resolve, reject){
       setTimeout(function(){ 
        resolve( numero + 1);
    }, 800);
    });
}
let sumarRapido = (numero) =>{
    return new Promise ((resolve, reject)=>{
    setTimeout( ()=> resolve (numero + 1), 300);

});
}
Promise.all([ sumarLento(5),sumarRapido(10)])
.then(respuestas=> {
    console.log(respuestas);
});
*/

/*
function sumarLento(numero){
    return new Promise(function(resolve, reject){
       setTimeout(function(){ 
        resolve( 'sumarLento fallo');
    }, 800);
    });
}
let sumarRapido = (numero) =>{
    return new Promise ((resolve, reject)=>{
    setTimeout( ()=> resolve (numero + 1), 300);

});
}
Promise.all([ sumarRapido(10),sumarLento(5)])
.then(respuestas=> {
    console.log(respuestas);
});
*/

function retornaTrue(){
    return true
}
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
let cosas = [sumarLento(5), sumarRapido(10), true, 'hola mundo', retornaTrue()];

Promise.all(cosas)
.then(respuestas=> {
    console.log(respuestas);
})
.catch(console.log);
