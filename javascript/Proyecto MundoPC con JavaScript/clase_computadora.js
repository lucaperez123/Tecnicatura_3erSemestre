class Computadora {
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    toString() {
        return `Computadora [ID: ${this._idComputadora}], Nombre: ${this._nombre}\n` +
               `   ${this._monitor.toString()}\n` +
               `   ${this._teclado.toString()}\n` +
               `   ${this._raton.toString()}`;
    }
}
