let frutas = ["manzana", "banana", "naranja"];

// Acceder por índice (posición)
let primera = frutas[0];  // "manzana"
let segunda = frutas[1];  // "banana"  
let tercera = frutas[2];  // "naranja"

// Obtener la cantidad de elementos
let cantidad = frutas.length; // 3

// Último elemento usando length
let ultima = frutas[frutas.length - 1]; // "naranja"

console.log("primera:", primera);
console.log("segunda:", segunda);
console.log("tercera:", tercera);
console.log("cantidad:", cantidad);
console.log("ultima:", ultima);


// metodos de arrays
let colores = ["rojo", "verde"];

// Agregar al final con push()
colores.push("azul");
// Resultado: ["rojo", "verde", "azul"]
console.log("agregar al final con push()");
console.log("colores:", colores);

// Quitar del final con pop()
console.log("Quitar del final con pop()");

let ultimo = colores.pop(); // ultimo = "azul"
// Resultado: ["rojo", "verde"]

console.log("colores:", colores);

// Buscar elemento con indexOf()
let posicion = colores.indexOf("verde"); // 1

console.log("posicion de verde con indexOf():", posicion);

let posicionNula =  colores.indexOf("violeta");
// CUANDO NO ENCUENTRA EL VALOR, DEVUELVE -1
console.log("posicion de violeta con indexOf():", posicionNula);

// Verificar si existe con includes(), DEVUELVE UN BOOLEAN
let existe = colores.includes("verde"); // false

console.log("EXISTE?:", existe);
