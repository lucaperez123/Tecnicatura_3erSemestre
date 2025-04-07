class Orden {
    static contadorOrdenes = 0;
    static get MAX_COMPUTADORAS() {
        return 5;
    }

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    agregarComputadora(computadora) {
        if (this._computadoras.length < Orden.MAX_COMPUTADORAS) {
            this._computadoras.push(computadora);
        } else {
            console.log("No se pueden agregar más computadoras");
        }
    }

    mostrarOrden() {
        let computadorasStr = "";
        for (let computadora of this._computadoras) {
            computadorasStr += `\n${computadora.toString()}`;
        }
        console.log(`Orden [ID: ${this._idOrden}], Computadoras: ${computadorasStr}`);
    }
}
