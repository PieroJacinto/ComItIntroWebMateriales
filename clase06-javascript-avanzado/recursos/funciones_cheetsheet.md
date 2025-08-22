# 🔧 FUNCIONES - Guía Completa Clase 6

## 🎯 ¿Qué son las funciones?

**Una función es un bloque de código reutilizable** que realiza una tarea específica. Es como una "máquina" que toma ingredientes (parámetros), hace algo con ellos, y devuelve un resultado.

### **¿Por qué usar funciones?**
- **Reutilización**: Escribes el código una vez, lo usas muchas veces
- **Organización**: Tu código está más limpio y estructurado  
- **Mantenimiento**: Cambias el código en un solo lugar
- **Legibilidad**: Es más fácil entender qué hace cada parte

---

## 🏗️ DECLARACIÓN DE FUNCIONES

### **Sintaxis Básica**
```javascript
function nombreFuncion() {
    // Código que se ejecuta cuando llamas la función
    console.log("¡Hola desde la función!");
}

// Llamar la función
nombreFuncion(); // ¡Hola desde la función!
```

### **Función con Parámetros**
```javascript
function saludar(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}

saludar("Ana");   // ¡Hola, Ana!
saludar("Luis");  // ¡Hola, Luis!
```

### **Función con Múltiples Parámetros**
```javascript
function sumar(a, b) {
    let resultado = a + b;
    console.log(`${a} + ${b} = ${resultado}`);
}

sumar(5, 3);    // 5 + 3 = 8
sumar(10, 7);   // 10 + 7 = 17
```

---

## ↩️ RETURN - Devolver Valores

### **Función con Return**
```javascript
function multiplicar(a, b) {
    return a * b;  // Devuelve el resultado
}

// Usar el valor devuelto
let resultado = multiplicar(4, 5);
console.log(resultado); // 20

// O usarlo directamente
console.log(`El doble de 8 es: ${multiplicar(8, 2)}`);
```

### **Return vs Console.log**
```javascript
// ❌ SOLO muestra, no devuelve valor
function sumarSolo(a, b) {
    console.log(a + b);
    // return undefined (implícito)
}

// ✅ Devuelve el valor para usar después
function sumarReturn(a, b) {
    return a + b;
}

// Comparación
let resultado1 = sumarSolo(3, 4);      // undefined
let resultado2 = sumarReturn(3, 4);    // 7
```

### **Return Múltiple**
```javascript
function analizarNumero(num) {
    if (num > 0) {
        return "Positivo";
    } else if (num < 0) {
        return "Negativo";
    } else {
        return "Cero";
    }
    
    // Esta línea nunca se ejecuta
    console.log("Después del return");
}

console.log(analizarNumero(5));   // Positivo
console.log(analizarNumero(-3));  // Negativo
console.log(analizarNumero(0));   // Cero
```

---

## 🏹 ARROW FUNCTIONS (Funciones Flecha)

### **Sintaxis Básica**
```javascript
// Función tradicional
function saludar(nombre) {
    return `¡Hola, ${nombre}!`;
}

// Arrow function equivalente
const saludarArrow = (nombre) => {
    return `¡Hola, ${nombre}!`;
}

// Arrow function simplificada (una línea)
const saludarSimple = nombre => `¡Hola, ${nombre}!`;
```

### **Diferentes Formas de Arrow Functions**
```javascript
// Sin parámetros
const obtenerFecha = () => new Date();

// Un parámetro (paréntesis opcionales)
const cuadrado = x => x * x;
const cuadradoConParentesis = (x) => x * x;

// Múltiples parámetros
const sumar = (a, b) => a + b;

// Cuerpo con múltiples líneas
const procesarUsuario = (nombre, edad) => {
    const mensaje = `Usuario: ${nombre}`;
    const estado = edad >= 18 ? "Adulto" : "Menor";
    return `${mensaje} - ${estado}`;
}
```

### **¿Cuándo usar cada una?**
```javascript
// ✅ Función tradicional para funciones principales
function calcularDescuento(precio, porcentaje) {
    if (precio <= 0) return 0;
    return precio * (porcentaje / 100);
}

// ✅ Arrow function para funciones simples/cortas
const duplicar = x => x * 2;
const esMayor = edad => edad >= 18;

// ✅ Arrow functions son perfectas para callbacks (próximo tema)
let numeros = [1, 2, 3, 4, 5];
let dobles = numeros.map(num => num * 2);
```

---

## 🔄 SCOPE (Alcance de Variables)

### **Variables dentro de Funciones**
```javascript
function ejemploScope() {
    let variableLocal = "Solo existe aquí";
    console.log(variableLocal); // ✅ Funciona
}

ejemploScope();
// console.log(variableLocal); // ❌ Error: no existe fuera de la función
```

### **Variables Globales vs Locales**
```javascript
let variableGlobal = "Accesible en todas partes";

function probarScope() {
    let variableLocal = "Solo aquí";
    
    console.log(variableGlobal); // ✅ Puede acceder
    console.log(variableLocal);  // ✅ Puede acceder
}

probarScope();
console.log(variableGlobal); // ✅ Puede acceder
// console.log(variableLocal); // ❌ Error
```

### **Parámetros son Variables Locales**
```javascript
function procesar(dato) {
    // 'dato' es una variable local de la función
    dato = dato + " procesado";
    console.log(dato);
}

let miTexto = "original";
procesar(miTexto); // "original procesado"
console.log(miTexto); // "original" (no cambió)
```

---

## 📚 EJEMPLOS PRÁCTICOS

### **Función de Validación**
```javascript
function validarEmail(email) {
    if (!email) {
        return "Email es requerido";
    }
    
    if (!email.includes("@")) {
        return "Email debe contener @";
    }
    
    if (email.length < 5) {
        return "Email muy corto";
    }
    
    return "Email válido";
}

// Usar la función
console.log(validarEmail("ana@gmail.com"));  // Email válido
console.log(validarEmail("invalido"));       // Email debe contener @
console.log(validarEmail(""));               // Email es requerido
```

### **Función de Cálculo**
```javascript
function calcularPrecioFinal(precio, descuento = 0, impuesto = 0.21) {
    // Parámetros con valores por defecto
    let precioConDescuento = precio - (precio * descuento / 100);
    let precioFinal = precioConDescuento + (precioConDescuento * impuesto);
    
    return Math.round(precioFinal * 100) / 100; // Redondear a 2 decimales
}

// Ejemplos de uso
console.log(calcularPrecioFinal(100));           // 121 (solo impuesto)
console.log(calcularPrecioFinal(100, 10));       // 108.9 (10% descuento)
console.log(calcularPrecioFinal(100, 10, 0.15)); // 101.25 (10% desc, 15% imp)
```

### **Función para Arrays**
```javascript
function encontrarMayor(numeros) {
    if (numeros.length === 0) {
        return null;
    }
    
    let mayor = numeros[0];
    
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }
    
    return mayor;
}

// Usar la función
let puntuaciones = [85, 92, 78, 96, 88];
console.log(`Mayor puntuación: ${encontrarMayor(puntuaciones)}`); // 96
```

---

## ⚠️ ERRORES COMUNES

### **1. Olvidar llamar la función**
```javascript
// ❌ Declara pero no ejecuta
function saludar() {
    console.log("¡Hola!");
}
// Nada pasa...

// ✅ Declarar Y llamar
saludar(); // ¡Ahora sí se ejecuta!
```

### **2. Confundir parámetros con argumentos**
```javascript
// ❌ Número incorrecto de argumentos
function sumar(a, b) {
    return a + b;
}

console.log(sumar(5));        // NaN (b es undefined)
console.log(sumar(5, 3, 8));  // 8 (ignora el tercer argumento)
```

### **3. No usar return cuando se necesita**
```javascript
// ❌ No devuelve nada
function multiplicar(a, b) {
    a * b; // Se calcula pero se pierde
}

let resultado = multiplicar(3, 4); // undefined

// ✅ Devolver el resultado
function multiplicarCorrect(a, b) {
    return a * b;
}
```

### **4. Usar variables antes de declararlas**
```javascript
// ❌ Variable usada antes de declararse
function ejemplo() {
    console.log(variable); // undefined
    let variable = "valor";
}
```

---

## 🚀 PRÓXIMO PASO: CALLBACKS

Una vez que domines las funciones básicas, aprenderás **callbacks** - funciones que se pasan como argumentos a otras funciones. Esto te permitirá usar métodos como `forEach`, `map`, y `filter` con arrays.

```javascript
// Vista previa de lo que viene:
function procesarElemento(elemento) {
    console.log(`Procesando: ${elemento}`);
}

// Pasar función como argumento (callback)
let lista = ["A", "B", "C"];
lista.forEach(procesarElemento); // ¡Próxima clase!
```

---

## ✅ CHECKLIST FUNCIONES

**Antes de continuar, asegúrate de que puedes:**
- [ ] Crear una función básica sin parámetros
- [ ] Crear una función con parámetros
- [ ] Usar `return` para devolver valores
- [ ] Llamar funciones y usar sus valores devueltos
- [ ] Escribir arrow functions simples
- [ ] Entender scope básico (variables locales vs globales)
- [ ] Crear funciones prácticas para tu proyecto

**¡Una vez que domines estos conceptos, estarás listo para callbacks y métodos avanzados de arrays!** 🎯