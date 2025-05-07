## Entendiendo el Polimorfismo en el Código de una Forma Sencilla

Imagina que tienes varios tipos de cosas, como un ratón, un teclado, un monitor y una computadora. Cada una de estas cosas puede "describirse" a sí misma, pero lo hace de una manera particular. Eso es, en esencia, lo que el polimorfismo nos permite hacer en el código.

**1. El Método `toString()`: Cada Objeto Habla a su Manera**

* Piensa en la clase `DispositivoEntrada` como una idea general de "algo que usas para meter información a la computadora". Tiene una forma básica de decir qué tipo de dispositivo es y su marca.
* Luego tenemos clases más específicas como `Raton` y `Teclado`. Ellas *toman* esa idea general de `DispositivoEntrada` y la hacen más propia. Cuando les pedimos que se describan (`toString()`), no solo dicen el tipo y la marca (como haría un `DispositivoEntrada` genérico), sino que también añaden su propio identificador único (el `idRaton` o `idTeclado`). Es como si dijeran: "Sí, soy un dispositivo de entrada, marca [marca], ¡y además soy el ratón número [id]!".
* La clase `Monitor` también tiene su forma de describirse con `toString()`, mostrando su propio ID, marca y tamaño. No viene de `DispositivoEntrada`, pero igual tiene su manera de "hablar" sobre sí misma.
* Finalmente, la `Computadora` también usa `toString()`. Pero en lugar de solo hablar de sí misma, ¡hace que su monitor, teclado y ratón también hablen! Llama al `toString()` de cada uno de ellos para dar una descripción completa de todo el equipo.

**La clave aquí es que todos estos objetos tienen una forma de responder cuando les "preguntamos" cómo son (`toString()`), pero cada uno lo hace a su manera.**

**2. La Función `mostrarInformacionDispositivo()`: Tratando a Todos por Igual**

* Creamos una función llamada `mostrarInformacionDispositivo` que puede recibir cualquier "dispositivo" (`DispositivoEntrada`, o algo que "es un tipo de" `DispositivoEntrada` como `Raton` o `Teclado`).
* Dentro de esta función, simplemente le pedimos al dispositivo que se describa usando `dispositivo.toString()`.
* **Lo genial del polimorfismo es que no necesitamos saber *exactamente* si es un ratón o un teclado.** JavaScript se encarga de llamar a la versión correcta del `toString()` según el tipo real del objeto que le pasamos. Si le pasamos un `Raton`, se usa la descripción del `Raton`. Si le pasamos un `Teclado`, se usa la descripción del `Teclado`. ¡Es como si la función pudiera hablar con cada dispositivo en su propio idioma!

**3. La Clase `Orden` y el Polimorfismo: Organizando sin Preocuparse por los Detalles**

* La clase `Orden` se encarga de llevar una lista de computadoras. Cuando queremos ver qué hay en una orden (`mostrarOrden()`), recorre la lista de computadoras y le pide a cada una que se describa con `toString()`.
* Al igual que con la función anterior, la `Orden` no necesita saber los detalles internos de cada `Computadora`. Simplemente confía en que cada objeto `Computadora` sabe cómo mostrar su información (y a su vez, cómo mostrar la información de su monitor, teclado y ratón).

**4. Más Allá de la Herencia: El Comportamiento Similar Importa**

* Aunque `Monitor` y `Computadora` no son "tipos de" `DispositivoEntrada`, también tienen su propio método `toString()`. Esto también es una forma de polimorfismo: diferentes objetos responden al mismo "mensaje" (`toString()`) de maneras que tienen sentido para ellos.

**En resumen, el polimorfismo nos permite escribir código más flexible porque:**

* Podemos tratar objetos de diferentes tipos de una manera general (por ejemplo, pedirles a todos que se describan con `toString()`).
* Cada objeto puede comportarse de la manera que es más apropiada para su tipo específico.
* Esto hace que sea más fácil añadir nuevos tipos de objetos en el futuro sin tener que cambiar mucho el código que ya existe. ¡Simplemente necesitamos asegurarnos de que los nuevos objetos también sepan cómo responder a los "mensajes" importantes (como `toString()`)!