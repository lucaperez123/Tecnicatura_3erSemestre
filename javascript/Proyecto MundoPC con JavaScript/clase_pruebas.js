let raton1 = new Raton("USB", "Logitech");
let teclado1 = new Teclado("USB", "Redragon");
let monitor1 = new Monitor("Samsung", "27 pulgadas");
let computadora1 = new Computadora("PC Gamer", monitor1, teclado1, raton1);

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.mostrarOrden();
