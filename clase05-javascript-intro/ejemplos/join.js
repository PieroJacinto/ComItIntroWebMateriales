let nombres = ["Ana", "Carlos", "María"];

// Unir elementos en un string
let lista = nombres.join(", ");        // "Ana, Carlos, María"
let listaCon = nombres.join(" y ");    // "Ana y Carlos y María"
let sinSeparador = nombres.join("");   // "AnaCarlosMaría"

// Obtener cantidad de elementos
let cantidad = nombres.length;        

console.log("lista:", lista);
console.log("listaCon:", listaCon);

console.log("sinSeparador:", sinSeparador);
