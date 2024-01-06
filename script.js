// USO DE VARIABLES EN JAVASCRIPT "VAR", "LET" Y "CONST"

// Declaracion de variables usando 'var'
var nombre = "Deivid";
var edad = 25;

// Declaracion de variables usando 'let'
let ciudad = "La Paz";
let salario = 3000;

// Declaracion de variables usando 'const'
const PI = 3.1416;
const diasEnSemana = 7;

// Mostrar los valores de las variables en la consola
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Ciudad:", ciudad);
console.log("Salario:", salario);
console.log("Valor de PI:", PI);
console.log("Dias en una semana:", diasEnSemana);

// Declaracion de variables
var x = 10; // variable global
let y = 20; // variable de bloque
const z = 30; // constante

// Impresion de los valores iniciales
console.log("Valor inicial de x:", x);
console.log("Valor inicial de y:", y);
console.log("Valor inicial de z:", z);

// Modificación de valores
x = 15;
y = 25;

// Intento de reasignar un valor a una constante (esto generara un error)
// z = 35;

// Impresion de los valores modificados
console.log("Nuevo valor de x:", x);
console.log("Nuevo valor de y:", y);
console.log("Valor constante z:", z);

// Ejemplo de ambito de bloque con 'let'
if (true) {
    let bloqueVariable = "Soy una variable en el bloque";
    console.log(bloqueVariable);
}

// Intento de acceder a "bloqueVariable" fuera del bloque (esto generara un error)
// console.log(bloqueVariable);


// USO DE ESTRUCTURAS DE DATOS "ARRAY" Y "OBJETOS" EN JAVASCRIPT

// Arreglo (Array)
let numeros = [1, 2, 3, 4, 5];
console.log("Arreglo de numeros:", numeros);

// Objeto (Object)
let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Barcelona"
};
console.log("Objeto persona:", persona);


// USO DE EL "PUSH", "UNSHIFT" PARA AGREGAR ELEMENTOS Y EL "POP", "SHIFT" PARA ELIMINAR ELEMENTOS

// Array inicial
let miArrayVariado = [1, "Hola", 3.14, true, ["Manzana", "Naranja"], "MUNDO"];

// Mostrar el arreglo
console.log(miArrayVariado);

// Métodos para agregar elementos
miArrayVariado.push(42); // Agrega el numero 42 al final del arreglo
miArrayVariado.unshift("Inicio"); // Agrega la cadena "Inicio" al inicio del arreglo

// Guardar elementos agregados en variables
let elementoAgregadoAlFinal = miArrayVariado.pop(); // Elimina y retorna el ultimo elemento del arreglo
let elementoAgregadoAlInicio = miArrayVariado.shift(); // Elimina y retorna el primer elemento del arreglo

// Mostrar el estado actual del arreglo
console.log("Arreglo después de agregar y eliminar elementos:");
console.log(miArrayVariado);

// Mostrar los elementos agregados y eliminados
console.log("Elemento agregado al final:", elementoAgregadoAlFinal);
console.log("Elemento agregado al inicio:", elementoAgregadoAlInicio);


// USO DE METODOS DE "sort", "reverse", "indexOf" Y OBTENER ELEMENTOS DEL ARRAY CON EL INDICE

// Método sort para ordenar
let arrayOrdenado = miArrayVariado.sort();

// Mostrar el array ordenado
console.log("Array ordenado:", arrayOrdenado);

// Metodo reverse para invertir el array
let arrayInvertido = miArrayVariado.reverse();

// Mostrar el array invertido
console.log("Array invertido:", arrayInvertido);

// Busqueda de indice por elemento
let elementoABuscar = true;
let indiceDeElemento = miArrayVariado.indexOf(elementoABuscar);

// Mostrar el índice del elemento booleano true
console.log(`Indice del elemento ${elementoABuscar}:`, indiceDeElemento);

// Busqueda de elemento por indice
let indiceABuscar = 3;
let elementoEnIndice = miArrayVariado[indiceABuscar];

// Mostrar el elemento en el indice 3
console.log(`Elemento en el indice ${indiceABuscar}:`, elementoEnIndice);


// USO DE OPERADORES ARITMETICOS Y LOGICOS

x = 10;
y = 5;

let suma = x + y;
let resta = x - y;
let multiplicacion = x * y;
let division = x / y;
let modulo = x % y;

console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicacion:", multiplicacion);
console.log("Division:", division);
console.log("Modulo:", modulo);

let a = 5;

a += 3;  // equivalente a: a = a + 3;
console.log("Despues de a += 3:", a);

a -= 2;  // equivalente a: a = a - 2;
console.log("Despues de a -= 2:", a);

a *= 4;  // equivalente a: a = a * 4;
console.log("Despues de a *= 4:", a);

a /= 2;  // equivalente a: a = a / 2;
console.log("Despues de a /= 2:", a);


let p = 10;
let q = "10";

console.log("p == q:", p == q);   // igualdad (sin comprobacion de tipo)
console.log("p === q:", p === q); // igualdad estricta (con comprobacion de tipo)
console.log("p != q:", p != q);   // desigualdad (sin comprobacion de tipo)
console.log("p !== q:", p !== q); // desigualdad estricta (con comprobacion de tipo)
console.log("p > q:", p > q);     // mayor que
console.log("p < q:", p < q);     // menor que
console.log("p >= q:", p >= q);   // mayor o igual que
console.log("p <= q:", p <= q);   // menor o igual que

let condicion1 = true;
let condicion2 = false;

let resultadoAND = condicion1 && condicion2;
let resultadoOR = condicion1 || condicion2;
let resultadoNOT = !condicion1;

console.log("AND:", resultadoAND);
console.log("OR:", resultadoOR);
console.log("NOT:", resultadoNOT);


// USO DE LAS ESTRUCTURAS DE CONTROL "if", "for" y "while"

edad = 20;

if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

for (let i = 1; i <= 5; i++) {
    console.log("Iteración " + i);
}

let contador = 0;

while (contador < 3) {
    console.log("Contador: " + contador);
    contador++;
}

let num = 5;

do {
    console.log("Numero: " + num);
    num--;
} while (num > 0);

let miObjeto = { nombre: "Juan", edad: 25, ciudad: "Barcelona" };

for (let clave in miObjeto) {
    console.log(clave + ": " + miObjeto[clave]);
}