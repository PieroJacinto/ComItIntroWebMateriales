nota1 = 85;
nota2 = 92;
nota3 = 78; 
nota4 = 88;

let sumaNotas = nota1 + nota2 + nota3 + nota4 ;
let promedio = sumaNotas / 4;
console.log("promedio:", promedio);
console.log((nota1 + nota2 + nota3 + nota4)/ 4);

let rango = nota2 - nota3;

console.log(rango);

/*
🧩 Problema: Organiza y procesa una lista de tareas usando arrays y for loops.

📝 Tareas:
Crea let tareas = ["desayunar", "estudiar", "ejercicio", "trabajo"];
Crea let duracion = [30, 120, 60, 480]; (minutos para cada tarea)
Usa for loop para mostrar cada tarea con su duración
Calcula el total de minutos del día
Convierte el total a horas (dividir entre 60)
Agrega una nueva tarea "cena" de 45 minutos al final
✅ Resultado esperado:
desayunar: 30 minutos
estudiar: 120 minutos
ejercicio: 60 minutos
trabajo: 480 minutos
Total: 690 minutos (11.5 horas)
Nueva tarea agregada: cena (45 min)
*/
 let tareas = ["desayunar", "estudiar", "ejercicio", "trabajo"];
 let duracion = [30, 120, 60, 480];

 console.log("Tareas del dia:");

 for ( let i = 0; i < tareas.length; i++){
    console.log(tareas[i] + ": " + duracion[i] + " minutos");    
 }
 
 // calcular tyotal de minutos
 // incializo una variable acumuladora en 0
 let totalMinutos = 0;
 for (let i = 0; i < duracion.length; i++) {
    totalMinutos = totalMinutos + duracion[i];    
 }
 console.log("total de minutos:", totalMinutos);
 totalHoras = totalMinutos / 60;
 console.log("total horas:", totalHoras);

 // agregar una nueva tarea
 tareas.push("cena");
 duracion.push(45);

 console.log("Nueva tarea agregada: " + tareas[tareas.length - 1] + " " + duracion[duracion.length - 1] + " min");
 
 /*
 🧩 Problema: Crea un catálogo de productos de una tienda usando objetos.

📝 Tareas:
Crea 3 objetos producto con: nombre, precio, categoria, disponible (true/false)
Guarda los productos en un array
Usa for loop para mostrar cada producto
Calcula el precio promedio de todos los productos
Crea un objeto "resumen" con: totalProductos, precioPromedio, categorias encontradas
✅ Ejemplo de resultado:
Producto 1: Laptop - $800 - Tecnología - Disponible
Producto 2: Mesa - $150 - Muebles - Disponible
Producto 3: Libro - $25 - Educación - No disponible
Precio promedio: $325
Total productos: 3

*/

let producto1 = {
    nombre: "Laptop",
    precio: 800,
    categoria: "Tecnología",
    disponible: true
};

let producto2 = {
    nombre: "Mesa",
    precio: 150,
    categoria: "Muebles",
    disponible: true
};

let producto3 = {
    nombre: "Libro",
    precio: 25,
    categoria: "Educación",
    disponible: false
};

// guardar productos en un array
let listaProductos = [];
listaProductos.push(producto1);
listaProductos.push(producto2);
listaProductos.push(producto3);
console.log(listaProductos);

console.log("Catalogo de productos:");

for(let i = 0; i < listaProductos.length; i++){
    let producto = listaProductos[i];
    console.log("producto: " + producto.nombre + ", precio: $" + producto.precio + ", categoria:" + producto.categoria + ", disponible: " + producto.disponible );
}

let sumaPrecios = 0;
for(let i = 0; i < listaProductos.length; i++){
    sumaPrecios = sumaPrecios + listaProductos[i].precio;
}

console.log(sumaPrecios);

let precioPromedio = sumaPrecios / listaProductos.length;

console.log("precio promedio: ", precioPromedio);
