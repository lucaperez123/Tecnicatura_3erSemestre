
function mifuncion(){
    console.log('saludos desde mi funcion')
}

mifuncion();

let myFuncion = function () {
    console.log('Saludos desde la funcion anonima')
}

//ahora vamos a crear una funcion flecha
let miFuncionFlecha = () => {
    console.log('Saludos desde mi funcion flecha');
}

//hay mas variantes para funciones flecha que vamos a ir viendo
miFuncionFlecha();

//lo hacemos en una linea 
const saludar = () => console.log('saludos a todos desde esta funcion flecha')
console.log(saludar);

//otro ejemplo
const saludar2 = () => {
    return 'SALUDOS DESDE LA FUNCION FLECHA DOS'
}

console.log(saludar2);

//simplificamos la funcion anterior
const saludar3 = () => 'SALUDOS DESDE LA FUNCION FLECHA 3';

console.log(saludar3);

//continuamos con otro ejemplo
const regresaObjeto = () => ({Nombre : 'Juan', apellido : 'Perez'});

console.log(regresaObjeto());

//funciones flecha que reciben parametros
const funcionParametros = (mensaje) => console.log (mensaje);

funcionParametros('Saludos desde esta funcion con parametros');

//una funcion clasica

const funcionParametrosClasica = function(mensaje){
    console.log(mensaje);
}

funcionParametrosClasica('Saludos desde la funcion clasica')

// se pueden omitir los parentesis en la funcion flecha de la siguiente manera
const funcionConParametros = mensaje => console.log(mensaje);

funcionConParametros('Otra forma de trabajar con funcion flecha');

// ahora vemos funciones flecha con varios parametros
//podemos abrir la funcion y tener mas cosas dentro de ella
const funcionConParametros2 = (op1, op2) => {
    op1 + op2;
    return resultado;
}
console.log(funcionConParametros2(3,5));