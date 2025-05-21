function mifuncion1(){
    console.log('Funcion 1');
}

function miFuncion2(){
    console.log('Funcion 2');
}

miFuncion2()
mifuncion1()

//funcion de tipo callback
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1,op2,funcionCallBack){
    let res = op1 + op2;
    funcionCallBack('resultado: ${res}');
}

sumar(5,3,imprimir);

//lamadas asincronas con uso setTImeout

function miFuncionCallBack(){
    console.log('Saludo asincrono despues de 3 segundos')
}

setTimeout(miFuncionCallBack, 3000);

setTimeout(function() {console.log('Saludo asincrono 2')}, 5000);

setTimeout( () => console.log('Saludo asincrono '), 5000);

let reloj = () => {
    let fecha = new Date();
    console.log(‵${fecha.getHours}:${fecha.getMinutes}:$[fecha.getSeconds]‵);
}


setInterval(reloj, 1000) //cada 1 segundo se ejecuta