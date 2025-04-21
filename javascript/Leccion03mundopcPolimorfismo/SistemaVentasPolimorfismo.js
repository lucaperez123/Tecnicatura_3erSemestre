// Clase padre
class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada() {
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }

    toString() {
        return `Tipo de entrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
    }
}

// Clases hijas
class Raton extends DispositivoEntrada {
    static contadorRatones = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    toString() {
        return `Raton [ID: ${this._idRaton}], ${super.toString()}`;
    }

    // Método específico de Raton
    click() {
        console.log(`El ratón con ID ${this._idRaton} ha hecho click.`);
    }
}

class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    toString() {
        return `Teclado [ID: ${this._idTeclado}], ${super.toString()}`;
    }

    // Método específico de Teclado
    escribir(texto) {
        console.log(`El teclado con ID ${this._idTeclado} ha escrito: "${texto}"`);
    }
}

// Clase Monitor
class Monitor {
    static contadorMonitores = 0;

    constructor(marca, tamaño) {
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor() {
        return this._idMonitor;
    }

    toString() {
        return `Monitor [ID: ${this._idMonitor}], Marca: ${this._marca}, Tamaño: ${this._tamaño}`;
    }
}

// Clase Computadora
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

// Clase Orden
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
            console.log("No se pueden agregar más computadoras a la orden.");
        }
    }

    mostrarOrden() {
        let computadorasStr = "";
        for (let computadora of this._computadoras) {
            computadorasStr += `\n${computadora.toString()}`;
        }
        console.log(`Orden [ID: ${this._idOrden}] - Computadoras: ${computadorasStr}`);
    }
}

// Función que demuestra el polimorfismo al interactuar con DispositivoEntrada
function mostrarInformacionDispositivo(dispositivo) {
    console.log(`Información del dispositivo: ${dispositivo.toString()}`);
    // No podemos llamar a dispositivo.click() o dispositivo.escribir() aquí
    // porque no todos los DispositivoEntrada tienen estos métodos.
}

// 🧪 Pruebas
const raton1 = new Raton("USB", "Logitech");
const teclado1 = new Teclado("USB", "Redragon");
const monitor1 = new Monitor("Samsung", "27 pulgadas");
const computadora1 = new Computadora("PC Gamer", monitor1, teclado1, raton1);

const raton2 = new Raton("Bluetooth", "Genius");
const teclado2 = new Teclado("Bluetooth", "Microsoft");
const monitor2 = new Monitor("LG", "24 pulgadas");
const computadora2 = new Computadora("PC Oficina", monitor2, teclado2, raton2);

const orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();

console.log("\n--- Demostración de Polimorfismo con DispositivoEntrada ---");
mostrarInformacionDispositivo(raton1);
mostrarInformacionDispositivo(teclado1);

// Aunque Monitor no hereda de DispositivoEntrada, el concepto de polimorfismo
// también se aplica a cómo diferentes objetos responden al mismo método (toString()).
console.log("\n--- Polimorfismo con Monitor ---");
console.log(monitor1.toString());

console.log("\n--- Polimorfismo dentro de Computadora ---");
console.log(computadora1.toString());