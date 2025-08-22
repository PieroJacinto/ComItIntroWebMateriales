# 🎯 CALLBACKS - Introducción Completa Clase 6

## 🤔 ¿Qué es un Callback?

Un **callback** es una **función que se pasa como parámetro a otra función**. La función que recibe el callback puede ejecutarlo cuando lo necesite.

### **Piénsalo así:**
- **Función principal** = "Haz esta tarea"
- **Callback** = "Y cuando termines, ejecuta esto"

**Ejemplo de la vida real:**
> "Lava los platos, y cuando termines, llámame por teléfono"
- 🍽️ **Lavar platos** = función principal
- 📞 **Llamarte** = callback (función que se ejecuta después)

---

## 🔧 CALLBACK BÁSICO

### **Ejemplo Simple**
```javascript
// 1. Crear una función normal
function saludar(nombre) {
    console.log(`¡Hola ${nombre}!`);
}

// 2. Crear una función que recibe un callback
function procesarUsuario(nombre, callback) {
    console.log(`Procesando usuario: ${nombre}`);
    callback(nombre); // Ejecutar el callback
}

// 3. Usar la función con callback
procesarUsuario("Ana", saludar);

// Output:
// Procesando usuario: Ana
// ¡Hola Ana!
```

### **¿Cómo funciona?**
1. `procesarUsuario` recibe el nombre "Ana" y la **función** `saludar`
2. Hace su trabajo (procesar usuario)
3. Cuando está listo, ejecuta el callback: `callback(nombre)`
4. Como `callback` es la función `saludar`, ejecuta `saludar("Ana")`

---

## 🔄 CALLBACKS EN ARRAYS

Los **métodos de arrays** (forEach, map, filter) usan callbacks para procesar cada elemento.

### **La Evolución del For Loop**

#### **🏚️ ANTES (Clase 5): For Loop Tradicional**
```javascript
let frutas = ["manzana", "banana", "naranja"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
```

#### **✨ AHORA (Clase 6): forEach con Callback**
```javascript
let frutas = ["manzana", "banana", "naranja"];

frutas.forEach(function(fruta) {
    console.log(fruta);
});
```

**¿Qué pasó?**
- `forEach` recibe una **función** como parámetro
- Ejecuta esa función **una vez por cada elemento**
- Le pasa el elemento actual como argumento

---

## 🔄 forEach - Ejecutar para Cada Elemento

**`forEach` ejecuta una función para cada elemento del array.**

### **Sintaxis**
```javascript
array.forEach(function(elemento, indice, arrayCompleto) {
    // Código a ejecutar con cada elemento
});
```

### **Ejemplos Prácticos**

#### **Ejemplo 1: Mostrar Elementos**
```javascript
let tecnologias = ["HTML", "CSS", "JavaScript", "React"];

// Callback simple
tecnologias.forEach(function(tech) {
    console.log(`Aprendiendo: ${tech}`);
});

// Output:
// Aprendiendo: HTML
// Aprendiendo: CSS
// Aprendiendo: JavaScript
// Aprendiendo: React
```

#### **Ejemplo 2: Con Índice**
```javascript
let colores = ["rojo", "azul", "verde"];

colores.forEach(function(color, indice) {
    console.log(`${indice + 1}. ${color}`);
});

// Output:
// 1. rojo
// 2. azul
// 3. verde
```

#### **Ejemplo 3: Arrow Function (Moderno)**
```javascript
let numeros = [5, 10, 15, 20];

// Arrow function corta
numeros.forEach(num => {
    console.log(`Número: ${num * 2}`);
});

// Output:
// Número: 10
// Número: 20
// Número: 30
// Número: 40
```

---

## 🔄 map - Transformar y Crear Nuevo Array

**`map` crea un nuevo array transformando cada elemento con una función.**

### **Diferencia Clave**
- **forEach:** Ejecuta algo, NO devuelve nada
- **map:** Transforma elementos, DEVUELVE nuevo array

### **Sintaxis**
```javascript
let nuevoArray = array.map(function(elemento) {
    return // valor transformado
});
```

### **Ejemplos Prácticos**

#### **Ejemplo 1: Transformar Números**
```javascript
let precios = [100, 250, 75, 500];

// Aplicar descuento del 20%
let preciosConDescuento = precios.map(function(precio) {
    return precio * 0.8; // 80% del precio original
});

console.log("Originales:", precios);        // [100, 250, 75, 500]
console.log("Con descuento:", preciosConDescuento); // [80, 200, 60, 400]
```

#### **Ejemplo 2: Transformar Strings**
```javascript
let nombres = ["ana", "carlos", "maria"];

// Convertir a mayúsculas
let nombresMayusculas = nombres.map(function(nombre) {
    return nombre.toUpperCase();
});

console.log("Originales:", nombres);         // ["ana", "carlos", "maria"]
console.log("Mayúsculas:", nombresMayusculas); // ["ANA", "CARLOS", "MARIA"]
```

#### **Ejemplo 3: Crear Objetos**
```javascript
let edades = [20, 25, 30];

let personas = edades.map(function(edad) {
    return {
        edad: edad,
        categoria: edad >= 18 ? "Adulto" : "Menor"
    };
});

console.log(personas);
// [{edad: 20, categoria: "Adulto"}, {edad: 25, categoria: "Adulto"}, ...]
```

#### **Ejemplo 4: Crear HTML**
```javascript
let productos = ["Laptop", "Mouse", "Teclado"];

let productosHTML = productos.map(function(producto) {
    return `<li>${producto}</li>`;
});

console.log(productosHTML);
// ["<li>Laptop</li>", "<li>Mouse</li>", "<li>Teclado</li>"]
```

---

## 🔍 filter - Seleccionar Elementos

**`filter` crea un nuevo array con solo los elementos que cumplen una condición.**

### **Sintaxis**
```javascript
let arrayFiltrado = array.filter(function(elemento) {
    return // condición que devuelve true/false
});
```

### **Ejemplos Prácticos**

#### **Ejemplo 1: Filtrar por Condición**
```javascript
let edades = [15, 22, 17, 25, 30, 16];

// Solo mayores de edad
let mayoresDeEdad = edades.filter(function(edad) {
    return edad >= 18;
});

console.log("Todas:", edades);           // [15, 22, 17, 25, 30, 16]
console.log("Mayores:", mayoresDeEdad);  // [22, 25, 30]
```

#### **Ejemplo 2: Filtrar Strings**
```javascript
let palabras = ["gato", "elefante", "perro", "mariposa"];

// Solo palabras largas
let palabrasLargas = palabras.filter(function(palabra) {
    return palabra.length > 5;
});

console.log("Todas:", palabras);         // ["gato", "elefante", "perro", "mariposa"]
console.log("Largas:", palabrasLargas);  // ["elefante", "mariposa"]
```

#### **Ejemplo 3: Filtrar Objetos**
```javascript
let productos = [
    { nombre: "Laptop", precio: 1000, disponible: true },
    { nombre: "Phone", precio: 500, disponible: false },
    { nombre: "Tablet", precio: 300, disponible: true }
];

// Solo productos disponibles
let disponibles = productos.filter(function(producto) {
    return producto.disponible === true;
});

console.log("Disponibles:", disponibles);
// [{ nombre: "Laptop", ...}, { nombre: "Tablet", ...}]
```

---

## 🔗 COMBINANDO MÉTODOS

Puedes **encadenar** métodos para operaciones complejas:

```javascript
let estudiantes = [
    { nombre: "Ana", nota: 85 },
    { nombre: "Luis", nota: 92 },
    { nombre: "María", nota: 76 },
    { nombre: "Carlos", nota: 88 }
];

// 1. Filtrar estudiantes aprobados (nota >= 80)
// 2. Crear array con solo los nombres
// 3. Convertir a mayúsculas
let aprobadosMayusculas = estudiantes
    .filter(estudiante => estudiante.nota >= 80)  // Solo aprobados
    .map(estudiante => estudiante.nombre)         // Solo nombres
    .map(nombre => nombre.toUpperCase());         // A mayúsculas

console.log("Aprobados:", aprobadosMayusculas); // ["ANA", "LUIS", "CARLOS"]
```

---

## 🆚 COMPARACIÓN DE MÉTODOS

| Método | ¿Qué hace? | ¿Devuelve? | Uso típico |
|--------|------------|------------|------------|
| **forEach** | Ejecuta función para cada elemento | `undefined` | Mostrar, procesar |
| **map** | Transforma cada elemento | Nuevo array | HTML, cálculos |
| **filter** | Selecciona elementos | Nuevo array | Búsquedas, filtros |

### **Cuándo usar cada uno:**

```javascript
let numeros = [1, 2, 3, 4, 5];

// ✅ forEach: Para mostrar o hacer algo (sin devolver)
numeros.forEach(num => console.log(num));

// ✅ map: Para transformar (devuelve nuevo array)
let dobles = numeros.map(num => num * 2);

// ✅ filter: Para seleccionar (devuelve nuevo array)
let pares = numeros.filter(num => num % 2 === 0);
```

---

## 🚀 CASOS PRÁCTICOS PARA TU PROYECTO

### **Portfolio Personal**
```javascript
let proyectos = [
    { titulo: "Portfolio", tecnologias: ["HTML", "CSS"], completado: true },
    { titulo: "Blog", tecnologias: ["HTML", "CSS", "JS"], completado: false },
    { titulo: "Tienda", tecnologias: ["HTML", "CSS", "JS"], completado: true }
];

// Mostrar todos los proyectos
proyectos.forEach(proyecto => {
    console.log(`Proyecto: ${proyecto.titulo}`);
});

// Crear HTML para proyectos completados
let proyectosHTML = proyectos
    .filter(proyecto => proyecto.completado)
    .map(proyecto => {
        return `
            <div class="proyecto">
                <h3>${proyecto.titulo}</h3>
                <p>Tecnologías: ${proyecto.tecnologias.join(", ")}</p>
            </div>
        `;
    });

// Usar en tu HTML
document.getElementById("proyectos").innerHTML = proyectosHTML.join("");
```

### **Lista de Contactos**
```javascript
let contactos = [
    { nombre: "Ana García", email: "ana@email.com", favorito: true },
    { nombre: "Luis Pérez", email: "luis@email.com", favorito: false },
    { nombre: "María López", email: "maria@email.com", favorito: true }
];

// Mostrar solo favoritos
let favoritos = contactos.filter(contacto => contacto.favorito);

// Crear lista de emails
let emails = contactos.map(contacto => contacto.email);

// Buscar por nombre
let busqueda = contactos.filter(contacto => 
    contacto.nombre.toLowerCase().includes("ana")
);
```

---

## ⚠️ ERRORES COMUNES

### **1. Confundir forEach con map**
```javascript
// ❌ Error: Usar forEach esperando que devuelva algo
let numeros = [1, 2, 3];
let dobles = numeros.forEach(num => num * 2); // undefined

// ✅ Correcto: Usar map para transformar
let dobles = numeros.map(num => num * 2); // [2, 4, 6]
```

### **2. Olvidar el return en map/filter**
```javascript
// ❌ Error: No devolver nada en map
let nombres = ["ana", "luis"];
let mayusculas = nombres.map(nombre => {
    nombre.toUpperCase(); // Sin return!
}); // [undefined, undefined]

// ✅ Correcto: Usar return
let mayusculas = nombres.map(nombre => {
    return nombre.toUpperCase();
}); // ["ANA", "LUIS"]
```

### **3. Modificar el array original**
```javascript
// ❌ Error: Modificar el array original
let numeros = [1, 2, 3];
numeros.forEach(num => {
    num = num * 2; // No modifica el array
});
console.log(numeros); // [1, 2, 3] - sin cambios

// ✅ Correcto: Usar map para crear nuevo array
let dobles = numeros.map(num => num * 2);
```

---

## ✅ CHECKLIST CALLBACKS

**Antes de continuar, asegúrate de que puedes:**
- [ ] Explicar qué es un callback
- [ ] Usar `forEach` para ejecutar código con cada elemento
- [ ] Usar `map` para transformar arrays
- [ ] Usar `filter` para seleccionar elementos
- [ ] Combinar métodos con encadenamiento
- [ ] Entender la diferencia entre forEach y map
- [ ] Escribir callbacks con function y arrow functions

---

## 🚀 PRÓXIMO PASO: DOM

En la próxima clase aprenderás a:
- **Conectar JavaScript con HTML** usando el DOM
- **Capturar eventos** del usuario (clicks, formularios)
- **Modificar contenido** dinámicamente
- **Crear interactividad** real en tu proyecto

**¡Los callbacks que aprendiste hoy son la base para eventos del DOM!** 🌐

```javascript
// Vista previa de lo que viene:
document.querySelectorAll('.boton').forEach(boton => {
    boton.addEventListener('click', function() {
        console.log('¡Botón clickeado!');
    });
});
```