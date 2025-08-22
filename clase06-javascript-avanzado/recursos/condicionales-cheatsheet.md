# 🤔 CONDICIONALES - Cheatsheet Clase 6

## 📋 Resumen Rápido

**Las condicionales nos permiten tomar decisiones en el código:** ejecutar diferentes acciones dependiendo de si algo es verdadero o falso.

---

## 🚦 IF/ELSE - Lo Más Importante

### **Sintaxis Básica**
```javascript
if (condicion) {
    // Código si es verdadero
} else {
    // Código si es falso
}
```

### **Ejemplo Práctico**
```javascript
let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}
```

### **If/Else Múltiple**
```javascript
let puntuacion = 85;

if (puntuacion >= 90) {
    console.log("Excelente");
} else if (puntuacion >= 70) {
    console.log("Bien");
} else if (puntuacion >= 50) {
    console.log("Suficiente");
} else {
    console.log("Necesitas estudiar más");
}
```

---

## ⚖️ Operadores de Comparación

| Operador | Significado | Ejemplo |
|----------|-------------|---------|
| `===` | Igual (exacto) | `5 === 5` → true |
| `!==` | No igual | `5 !== 3` → true |
| `>` | Mayor que | `10 > 5` → true |
| `<` | Menor que | `3 < 8` → true |
| `>=` | Mayor o igual | `5 >= 5` → true |
| `<=` | Menor o igual | `4 <= 6` → true |

### **⚠️ IMPORTANTE: Usar === no ==**
```javascript
// ✅ BIEN - Comparación estricta
if (edad === 18) { }

// ❌ EVITAR - Comparación no estricta
if (edad == 18) { }
```

---

## 🔗 Operadores Lógicos

### **AND (&&) - Ambas condiciones deben ser verdaderas**
```javascript
let usuario = "admin";
let contraseña = "1234";

if (usuario === "admin" && contraseña === "1234") {
    console.log("Acceso permitido");
}
```

### **OR (||) - Al menos una condición debe ser verdadera**
```javascript
let dia = "sábado";

if (dia === "sábado" || dia === "domingo") {
    console.log("Es fin de semana");
}
```

### **NOT (!) - Invierte el valor**
```javascript
let estaLloviendo = false;

if (!estaLloviendo) {
    console.log("Podemos salir a caminar");
}
```

---

## 🔀 SWITCH - Para Múltiples Opciones

### **Sintaxis**
```javascript
switch (variable) {
    case valor1:
        // Código para valor1
        break;
    case valor2:
        // Código para valor2
        break;
    default:
        // Código si no coincide con ningún caso
}
```

### **Ejemplo Práctico**
```javascript
let dia = "lunes";

switch (dia) {
    case "lunes":
        console.log("Inicio de semana");
        break;
    case "viernes":
        console.log("¡Por fin viernes!");
        break;
    case "sábado":
    case "domingo":
        console.log("Fin de semana");
        break;
    default:
        console.log("Día normal");
}
```

### **⚠️ No olvides el `break`**
Sin `break`, el código continúa ejecutándose en los siguientes casos.

---

## ❓ Operador Ternario - Condicional Corto

### **Sintaxis**
```javascript
condicion ? valorSiVerdadero : valorSiFalso
```

### **Ejemplos**
```javascript
// Simple
let mensaje = edad >= 18 ? "Mayor" : "Menor";

// En función
function clasificarEdad(edad) {
    return edad >= 18 ? "Adulto" : "Menor";
}

// Anidado (cuidado, puede ser confuso)
let categoria = edad < 13 ? "Niño" : 
                edad < 18 ? "Adolescente" : "Adulto";
```

---

## 🎯 Casos de Uso Comunes

### **1. Validación de Formularios**
```javascript
function validarEmail(email) {
    if (email.includes("@") && email.includes(".")) {
        return "Email válido";
    } else {
        return "Email inválido";
    }
}
```

### **2. Control de Acceso**
```javascript
function puedeVotar(edad, nacionalidad) {
    if (edad >= 18 && nacionalidad === "argentina") {
        return true;
    } else {
        return false;
    }
}
```

### **3. Clasificación de Datos**
```javascript
function clasificarTemperatura(temp) {
    if (temp < 0) {
        return "Congelando";
    } else if (temp < 20) {
        return "Frío";
    } else if (temp < 30) {
        return "Templado";
    } else {
        return "Caliente";
    }
}
```

---

## 🚨 Errores Comunes

### **❌ Error 1: Asignación en lugar de comparación**
```javascript
// ❌ MAL
if (edad = 18) { }  // Asigna 18 a edad

// ✅ BIEN  
if (edad === 18) { }  // Compara edad con 18
```

### **❌ Error 2: Comparar strings y números**
```javascript
let input = "18";  // String desde formulario

// ❌ Puede dar problemas
if (input === 18) { }

// ✅ MEJOR - Convertir a número
if (Number(input) === 18) { }
// o
if (parseInt(input) === 18) { }
```

### **❌ Error 3: Lógica invertida**
```javascript
// ❌ Confuso
if (!estaDeshabilitado === false) { }

// ✅ Más claro
if (estaHabilitado) { }
```

---

## 💡 Tips y Mejores Prácticas

### **1. Nombres de variables claros**
```javascript
// ❌ Confuso
if (x > 18) { }

// ✅ Claro
if (edadUsuario > 18) { }
```

### **2. Condiciones positivas cuando sea posible**
```javascript
// ❌ Negativo (más difícil de leer)
if (!noEsValido) { }

// ✅ Positivo (más fácil)
if (esValido) { }
```

### **3. Usar funciones para condiciones complejas**
```javascript
// ❌ Condicional muy larga
if (usuario.edad >= 18 && usuario.verificado && !usuario.bloqueado) { }

// ✅ Extraer a función
function puedeAcceder(usuario) {
    return usuario.edad >= 18 && usuario.verificado && !usuario.bloqueado;
}

if (puedeAcceder(usuario)) { }
```

---

## 🎯 En tu Proyecto Personal

### **Aplicaciones Prácticas:**
- **Validar formularios** de contacto
- **Mostrar contenido** según el tipo de proyecto
- **Cambiar temas** (claro/oscuro)
- **Filtrar proyectos** por tecnología
- **Controlar navegación** según sección

### **Ejemplo para Portfolio:**
```javascript
function mostrarProyecto(proyecto) {
    if (proyecto.completado) {
        console.log(`✅ ${proyecto.nombre} - Completado`);
    } else {
        console.log(`⏳ ${proyecto.nombre} - En progreso`);
    }
}
```

---

## 🚀 Próximo Paso

**En Clase 7** conectarás estas condicionales con el DOM para crear **interactividad real** en tu sitio web:
- Mostrar/ocultar elementos
- Validar formularios en tiempo real  
- Cambiar estilos dinámicamente
- Crear navegación inteligente

¡Las condicionales son la base de toda la lógica de tu sitio web! 🎉