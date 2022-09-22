/*function sumarUno(numero){
    return numero + 1;
}

console.log (sumarUno(15));*/

function sumarUno(numero, callback){
    setTimeout(function(){
        callback(numero + 1);
    }, 800);
}
sumarUno(5, function(nuevoValor){
    sumarUno(nuevoValor, function(nuevoValor2){
        sumarUno(nuevoValor2, function(nuevoValor3){
            console.log (nuevoValor3);
        });
    });
});