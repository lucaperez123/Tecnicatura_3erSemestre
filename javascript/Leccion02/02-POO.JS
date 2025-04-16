class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }


    obtenerDetalles(){
        return 'Empleado:nombre: ${this._nombre},
        sueldo: ${this._sueldo};
    }
}

class gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }


    //agregamos la sobreescritura
    obtenerDetalles(){
        return 'gerente: ${super.obtenerDetalles()} depto: ${THIS._departamento}{};
    }
}

let gerente1 = new gerente("Carlos", 5000 , "Sistemas");
console.log(gerebte1) // objeto de la clase hija

let Empleado1 = new Empleado ("juan", 3000);
console.log(empleado1);