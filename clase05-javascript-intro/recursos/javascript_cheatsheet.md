# 📋 JavaScript Cheatsheet - Clase 5

## 🚀 Referencia Rápida de JavaScript Fundamentos

---

## 📦 Variables

### **Declaración**
```javascript
let nombre = "Ana";        // Variable que puede cambiar
const edad = 25;           // Constante (no cambia)
var ciudad = "Buenos Aires"; // Forma antigua (evitar)
```

### **Tipos de Datos**
```javascript
// 📝 STRING (texto)
let nombre = "María";
let apellido = 'González';
let frase = `Hola ${nombre}`;  // Template literal

// 🔢 NUMBER (números)
let edad = 25;
let precio = 19.99;
let negativo = -10;

// ✅❌ BOOLEAN (verdadero/falso)
let esEstudiante = true;
let esProfesor = false;

// 🔍 Verificar tipo
console.log(typeof nombre);    // "string"
console.log(typeof edad);      // "number"
console.log(typeof esEstudiante); // "boolean"
```

---

## 📚 Arrays (Listas)

### **Crear y Acceder**
```javascript
// Crear array
let frutas = ["manzana", "banana", "naranja"];
let numeros = [1, 2, 3, 4, 5];
let mixto = ["texto", 42, true];

// Acceder a elementos (índice empieza en 0)
console.log(frutas[0]);     // "manzana"
console.log(frutas[1]);     // "banana"
console.log(frutas.length); // 3
```

### **Métodos Básicos**
```javascript
let lista = ["a", "b"];

// ➕ Agregar elementos
lista.push("c");           // Agrega al final: ["a", "b", "c"]
lista.unshift("inicio");   // Agrega al inicio: ["inicio", "a", "b", "c"]

// ➖ Quitar elementos
let ultimo = lista.pop();      // Quita del final, retorna "c"
let primero = lista.shift();   // Quita del inicio, retorna "inicio"

// 🔍 Buscar elementos
lista.indexOf("b");        // Retorna posición: 1
lista.includes("b");       // Retorna true/false: true

// 🔗 Unir en string
lista.join(" - ");         // "a - b"
lista.join("");            // "ab"
```

---

## 🏷️ Objetos

### **Crear y Acceder**
```javascript
// Crear objeto
let persona = {
    nombre: "Carlos",
    edad: 30,
    ciudad: "Madrid",
    esEstudiante: false
};

// Acceder a propiedades
console.log(persona.nombre);      // "Carlos"
console.log(persona["edad"]);     // 30

// Agregar nueva propiedad
persona.profesion = "Desarrollador";
persona["telefono"] = "123-456-789";
```

### **Objetos con Arrays**
```javascript
let estudiante = {
    nombre: "Ana",
    materias: ["Matemáticas", "Historia", "Arte"],
    notas: [85, 90, 78]
};

console.log(estudiante.materias[0]);  // "Matemáticas"
console.log(estudiante.notas[1]);     // 90
```

---

## 🔄 For Loops

### **Estructura Básica**
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

//   ①        ②       ③
//   │        │       │
//   │        │       └── Incremento
//   │        └─────────── Condición
//   └─────────────────── Inicio
```

### **Con Arrays**
```javascript
let colores = ["rojo", "verde", "azul"];

for (let i = 0; i < colores.length; i++) {
    console.log(`Color ${i + 1}: ${colores[i]}`);
}
// Color 1: rojo
// Color 2: verde
// Color 3: azul
```

### **Con Objetos**
```javascript
let producto = {
    nombre: "Laptop",
    precio: 800,
    marca: "TechBrand"
};

// Acceder a propiedades usando array de keys
let propiedades = Object.keys(producto);
for (let i = 0; i < propiedades.length; i++) {
    let key = propiedades[i];
    console.log(`${key}: ${producto[key]}`);
}
```

---

## 🎯 Template Literals

### **Sintaxis**
```javascript
// ❌ Concatenación tradicional
let nombre = "Ana";
let edad = 25;
console.log("Hola " + nombre + ", tienes " + edad + " años");

// ✅ Template literals (backticks)
console.log(`Hola ${nombre}, tienes ${edad} años`);
```

### **Ventajas**
```javascript
let precio = 100;
let descuento = 20;

// Expresiones dentro de ${}
console.log(`Precio: $${precio}`);
console.log(`Con descuento: $${precio - descuento}`);
console.log(`Con IVA: $${(precio - descuento) * 1.21}`);

// Múltiples líneas
let mensaje = `
Hola ${nombre},
Tu pedido está listo.
Total a pagar: $${precio}
`;
```

---

## 🖥️ Console.log

### **Formas de Usar**
```javascript
// Básico
console.log("Hola mundo");

// Variables
let x = 42;
console.log(x);
console.log("El valor es:", x);

// Con template literals
console.log(`El valor es: ${x}`);

// Múltiples valores
console.log("Nombre:", nombre, "Edad:", edad);

// Para debugging
console.log("=== INICIO DEBUG ===");
console.log("Variable x:", x);
console.log("=== FIN DEBUG ===");
```

---

## 🧮 Operadores

### **Matemáticos**
```javascript
let a = 10;
let b = 3;

console.log(a + b);  // 13 (suma)
console.log(a - b);  // 7  (resta)
console.log(a * b);  // 30 (multiplicación)
console.log(a / b);  // 3.333... (división)
console.log(a % b);  // 1  (módulo/resto)

// Incremento/Decremento
let contador = 0;
contador++;          // contador = 1
contador--;          // contador = 0
```

### **Comparación**
```javascript
console.log(5 == "5");   // true (igualdad débil)
console.log(5 === "5");  // false (igualdad estricta)
console.log(5 != "5");   // false
console.log(5 !== "5");  // true
console.log(5 > 3);      // true
console.log(5 < 3);      // false
```

### **Lógicos**
```javascript
let esAdulto = edad >= 18;
let tieneDescuento = edad > 65 || edad < 12;
let puedeComprar = esAdulto && tieneDescuento;
```

---

## 🎯 Condicional Ternario

```javascript
// Sintaxis: condición ? valorSiTrue : valorSiFalse
let edad = 17;
let mensaje = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";

let estado = producto.disponible ? "Disponible" : "Agotado";
let descuento = precio > 100 ? precio * 0.1 : 0;
```

---

## 🚨 Errores Comunes

### **1. Índices de Arrays**
```javascript
let frutas = ["manzana", "banana"];

// ❌ Error común
console.log(frutas[1]); // ¿Primera fruta? NO!

// ✅ Correcto
console.log(frutas[0]); // Primera fruta: "manzana"
console.log(frutas[1]); // Segunda fruta: "banana"
```

### **2. For Loop Infinito**
```javascript
// ❌ PELIGROSO - Loop infinito
for (let i = 0; i < 10; i--) {
    console.log(i); // Nunca para!
}

// ✅ Correcto
for (let i = 0; i < 10; i++) {
    console.log(i); // Para cuando i = 10
}
```

### **3. Confundir Arrays y Objetos**
```javascript
// ❌ Incorrecto para datos relacionados
let persona = ["Juan", 25, "Madrid"];

// ✅ Correcto - usar objeto
let persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid"
};
```

### **4. Template Literals**
```javascript
// ❌ Comillas normales no funcionan
let mensaje = "Hola ${nombre}"; // Literal: "Hola ${nombre}"

// ✅ Usar backticks
let mensaje = `Hola ${nombre}`;  // "Hola Ana"
```

---

## 🔧 JavaScript en Archivos

### **Conectar con HTML**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Mi Proyecto</title>
</head>
<body>
    <h1>Mi Sitio Web</h1>
    
    <!-- Al final del body -->
    <script src="js/mi-archivo.js"></script>
</body>
</html>
```

### **Estructura de Archivos**
```
mi-proyecto/
├── index.html
├── css/
│   └── styles.css
└── js/
    ├── datos.js
    ├── funciones.js
    └── main.js
```

---

## 📝 Buenas Prácticas

### **Nombres de Variables**
```javascript
// ✅ Descriptivos
let nombreUsuario = "Ana";
let precioTotal = 150;
let esUsuarioAdmin = true;

// ❌ Confusos
let n = "Ana";
let p = 150;
let admin = true;
```

### **Comentarios**
```javascript
// ✅ Explicar QUÉ hace el código
// Calcular descuento para usuarios premium
let descuento = esUsuarioPremium ? precio * 0.15 : 0;

// ✅ Separar secciones
// ==================
// DATOS DE USUARIO
// ==================
let usuario = {...};

// ==================
// PROCESAMIENTO
// ==================
for (let i = 0; i < datos.length; i++) {
    // ...
}
```

### **Console.log para Debugging**
```javascript
// ✅ Usar para verificar valores
console.log("=== DEBUG: Calculando total ===");
console.log("Precio base:", precioBase);
console.log("Descuento:", descuento);
console.log("Total final:", precioBase - descuento);
```

---

## ⚡ Tips Rápidos

- 🎯 **Índices:** Siempre empiezan en 0
- 🎯 **Template literals:** Usar backticks \` no comillas "
- 🎯 **For loops:** Verificar i++, no i--
- 🎯 **Arrays vs Objetos:** Arrays para listas, objetos para datos relacionados
- 🎯 **Debugging:** console.log es tu mejor amigo
- 🎯 **Nombres:** Descriptivos > cortos
- 🎯 **Constantes:** Usar const si no va a cambiar

---

## 🔮 Próxima Clase: Funciones

```javascript
// 🚫 Hoy: código repetitivo
console.log(`Hola Ana`);
console.log(`Hola Luis`);
console.log(`Hola María`);

// ✅ Clase 6: funciones
function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}

saludar("Ana");   // ¡Más limpio!
saludar("Luis");  // ¡Reutilizable!
saludar("María"); // ¡Profesional!
```