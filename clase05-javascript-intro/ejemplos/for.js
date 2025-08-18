let colores = ["rojo", "verde", "azul", "purpura", "rosa", "violeta"];

// Recorrer todo el array
for (let i = 0; i < colores.length; i++) {
    console.log("Color " + i + ": " + colores[i]);
}

// Resultado:
// Color 0: rojo
// Color 1: verde
// Color 2: azul

// Sumar todos los números de un array
let numeros = [10, 20, 30];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
    console.log("suma vuelta " + i + " :", suma);
    
}
console.log("Suma total: " + suma); // 60

// Contar elementos que cumplen una condición
// let edades = [15, 25, 17, 30, 16];
// let mayores = 0;

// for (let i = 0; i < edades.length; i++) {
//     if (edades[i] >= 18) {
//         mayores = mayores + 1;
//     }
// }
// console.log("Mayores de edad: " + mayores); // 2