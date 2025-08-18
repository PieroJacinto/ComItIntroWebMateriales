# 📝 TAREA PARA LA PRÓXIMA CLASE - Estructuras de Datos JavaScript

## 🎯 Objetivo Principal
**Crear las estructuras de datos** de tu proyecto personal usando JavaScript. Estos datos los convertiremos a **JSON** en la próxima clase y aprenderemos a leer/escribir archivos.

---

## 📝 ANTES DE EMPEZAR: Template Literals

### **Nueva forma de crear strings:**
```javascript
// ❌ Forma tradicional (concatenación)
let nombre = "Ana";
let edad = 25;
console.log("Hola " + nombre + ", tienes " + edad + " años");

// ✅ Template Literals (forma moderna)
console.log(`Hola ${nombre}, tienes ${edad} años`);
```

**🎯 Ventajas:**
- Usar **backticks** ` `` ` en lugar de comillas `""`
- Meter variables con `${variable}`
- Más fácil de leer y escribir

```javascript
let precio = 100;
console.log(`Precio: $${precio}`);
console.log(`Con descuento: $${precio - 20}`);
console.log(`Total: $${precio * 1.21}`); // Operaciones dentro de ${}
```

### **Operador % (módulo):**
```javascript
console.log(10 % 3);  // 1 (resto de 10 ÷ 3)
console.log(150 % 60); // 30 (útil para convertir minutos a horas)
```

---

## 📋 Lo que tienes que entregar

### ✅ **PARTE PRINCIPAL: Estructuras de Datos (60 min)**
1. **Crear archivo `js/datos.js`** en tu proyecto personal
2. **Definir las estructuras de datos** según tu tipo de proyecto
3. **Conectar con HTML** y mostrar datos usando **for loops**
4. **NO llenar de console.logs** - solo la estructura

### ✅ **Preparación: Template Literals (15 min)**
1. **Practicar** la sintaxis con backticks
2. **Usar en tu código** para mostrar información

### ✅ **Verificación (15 min)**
1. **Probar** que todo funciona sin errores
2. **Subir a GitHub** con commit claro

---

## 🎯 ESTRUCTURAS DE DATOS POR PROYECTO

### **📂 Setup:**
```
tu-proyecto-web/
├── js/
│   └── datos.js
├── index.html
└── otras-paginas.html
```

**En tu HTML, conectar:**
```html
<script src="js/datos.js"></script>
</body>
</html>
```

---

## 💼 PORTFOLIO PERSONAL

### **En `js/datos.js`:**
```javascript
// 🎯 DATOS DE MI PORTFOLIO

// Información personal
const miPerfil = {
    nombre: "Tu Nombre",
    profesion: "Desarrollador Web Jr",
    ciudad: "Tu Ciudad",
    email: "tu@email.com"
};

// Habilidades técnicas
const habilidades = ["HTML", "CSS", "JavaScript"];

// Proyectos
const proyectos = [
    {
        nombre: "Mi sitio web",
        tecnologias: ["HTML", "CSS"],
        estado: "En desarrollo"
    },
    {
        nombre: "App de tareas",
        tecnologias: ["JavaScript"],
        estado: "Planeado"
    }
];

// Educación
const educacion = [
    {curso: "Desarrollo Web", institucion: "ComuIT", año: 2025},
    {curso: "Tu curso anterior", institucion: "Tu institución", año: 2023}
];

// TODO: Usar for loops para mostrar toda la información
// TODO: Usar template literals para el formato
// Ejemplo: `Mi nombre es ${miPerfil.nombre} y soy ${miPerfil.profesion}`
```

---

## 📝 BLOG PERSONAL

### **En `js/datos.js`:**
```javascript
// 📝 DATOS DE MI BLOG

// Información del blogger
const autor = {
    nombre: "Tu Nombre",
    especialidad: "Tecnología",
    bio: "Escribo sobre programación y tecnología"
};

// Categorías del blog
const categorias = ["Tecnología", "Tutoriales", "Opinión"];

// Artículos
const articulos = [
    {
        titulo: "Mi primer día con JavaScript",
        categoria: "Tecnología",
        fecha: "2025-01-15"
    },
    {
        titulo: "Cómo aprender a programar",
        categoria: "Tutoriales", 
        fecha: "2025-01-20"
    },
    {
        titulo: "Por qué elegí programación",
        categoria: "Opinión",
        fecha: "2025-01-25"
    }
];

// Tags populares
const tags = ["javascript", "programacion", "web", "tutorial"];

// TODO: Usar for loops para mostrar todos los artículos
// TODO: Mostrar categorías y tags usando template literals
```

---

## 🍽️ RESTAURANTE

### **En `js/datos.js`:**
```javascript
// 🍽️ DATOS DEL RESTAURANTE

// Información del restaurante
const restaurante = {
    nombre: "La Cocina de María",
    direccion: "Av. Principal 123",
    telefono: "123-456-7890",
    horario: "12:00 - 22:00"
};

// Menú
const menu = [
    {nombre: "Pizza Margherita", precio: 800, categoria: "Principal"},
    {nombre: "Ensalada César", precio: 450, categoria: "Entrada"},
    {nombre: "Tiramisu", precio: 300, categoria: "Postre"}
];

// Personal
const equipo = [
    {nombre: "María González", cargo: "Chef", experiencia: 10},
    {nombre: "Juan Pérez", cargo: "Mesero", experiencia: 3}
];

// Horarios de atención
const horarios = [
    {dia: "Lunes a Viernes", horario: "12:00 - 22:00"},
    {dia: "Sábados y Domingos", horario: "11:00 - 23:00"}
];

// TODO: Mostrar el menú completo con precios usando for loops
// TODO: Mostrar información del equipo con template literals
// TODO: Calcular precio promedio del menú
```

---

## 🚀 SERVICIO/EMPRENDIMIENTO

### **En `js/datos.js`:**
```javascript
// 💼 DATOS DE MI SERVICIO

// Información del negocio
const negocio = {
    nombre: "TechHelp Solutions",
    descripcion: "Soluciones tecnológicas para pequeños negocios",
    email: "contacto@techhelp.com",
    telefono: "123-456-7890"
};

// Servicios que ofrezco
const servicios = [
    {nombre: "Desarrollo Web", precio: 15000, duracion: "2-3 semanas"},
    {nombre: "Consultoría IT", precio: 3000, duracion: "Por sesión"},
    {nombre: "Capacitación Digital", precio: 5000, duracion: "1 semana"}
];

// Tipos de clientes
const tiposClientes = [
    {tipo: "Pequeños comercios", descripcion: "Tiendas y locales"},
    {tipo: "Profesionales", descripcion: "Médicos, abogados, contadores"},
    {tipo: "Emprendedores", descripcion: "Nuevos negocios digitales"}
];

// Contacto
const formasContacto = [
    {medio: "Email", valor: "contacto@techhelp.com", horario: "24hs"},
    {medio: "Teléfono", valor: "123-456-7890", horario: "9-18hs"},
    {medio: "WhatsApp", valor: "123-456-7890", horario: "9-20hs"}
];

// TODO: Mostrar todos los servicios con precios usando for loops
// TODO: Mostrar formas de contacto con template literals
// TODO: Calcular precio promedio de servicios
```

---

## ✅ TAREAS ESPECÍFICAS

### **Para TODOS los proyectos:**

1. **Crear las estructuras de datos** según tu tipo de proyecto
2. **Usar for loops** para mostrar:
   - Todos los elementos de cada array
   - Información formateada con template literals
3. **Calcular al menos una estadística:**
   - Precio promedio
   - Total de elementos
   - Algún dato numérico relevante

### **Ejemplo de lo que debes hacer:**
```javascript
// 📊 MOSTRAR DATOS (ejemplo)
console.log(`=== ${negocio.nombre} ===`);

// Mostrar servicios
for (let i = 0; i < servicios.length; i++) {
    console.log(`${servicios[i].nombre} - $${servicios[i].precio}`);
}

// Calcular promedio
let suma = 0;
for (let i = 0; i < servicios.length; i++) {
    suma += servicios[i].precio;
}
let promedio = suma / servicios.length;
console.log(`Precio promedio: $${promedio}`);
```

---

## 🏃‍♂️ PARTE 2: EJERCICIOS OPCIONALES (Si tienes tiempo extra)

**La Parte 1 es lo PRINCIPAL.** Si terminas y quieres practicar más conceptos de JavaScript:

### **📊 Ejercicio Extra A: Análisis de tus Datos**
```javascript
// Usando las estructuras que creaste:

// TODO: Contar elementos totales
console.log(`Total de servicios: ${servicios.length}`);
console.log(`Total de artículos: ${articulos.length}`);

// TODO: Calcular promedios o estadísticas
let suma = 0;
for (let i = 0; i < menu.length; i++) {
    suma += menu[i].precio;
}
let promedio = suma / menu.length;
console.log(`Precio promedio: ${promedio}`);

// TODO: Buscar elementos específicos
let indice = categorias.indexOf("Tecnología");
console.log(`Posición de Tecnología: ${indice}`);
```

### **🔄 Ejercicio Extra B: Manipular tus Datos**
```javascript
// TODO: Agregar elementos nuevos usando push()
habilidades.push("React");
servicios.push({nombre: "Nuevo servicio", precio: 8000});

// TODO: Crear un objeto resumen
let resumen = {
    totalHabilidades: habilidades.length,
    totalProyectos: proyectos.length,
    fechaActualizacion: "2025-01-XX"
};

// TODO: Mostrar el resumen con template literals
console.log(`Resumen: ${resumen.totalHabilidades} habilidades, ${resumen.totalProyectos} proyectos`);
```

### **🎨 Ejercicio Extra C: Patrones y Repetición**
```javascript
// TODO: Crear múltiples objetos similares
let clientes = [
    {nombre: "Cliente 1", tipo: "Premium", activo: true},
    {nombre: "Cliente 2", tipo: "Básico", activo: false},
    {nombre: "Cliente 3", tipo: "Premium", activo: true}
];

// TODO: Procesar con for loops
let clientesActivos = 0;
for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].activo) {
        clientesActivos++;
    }
}

// TODO: Observar patrones repetitivos
// ¿Qué código escribes una y otra vez?
// ¿Qué operaciones repites constantemente?
// Esto te preparará para FUNCIONES en Clase 6
```

### **🧮 Ejercicio Extra D: Matemáticas Básicas**
```javascript
// TODO: Convertir tiempos usando operador %
let minutosTotales = 150;
let horas = Math.floor(minutosTotales / 60);
let minutosRestantes = minutosTotales % 60;
console.log(`${horas} horas y ${minutosRestantes} minutos`);

// TODO: Calcular porcentajes
let totalVentas = 10000;
let ventasEsteWes = 2500;
let porcentaje = (ventasEsteWes / totalVentas) * 100;
console.log(`Este mes: ${porcentaje}% de las ventas totales`);

// TODO: Trabajar con arrays numéricos
let ventas = [1200, 1500, 800, 2000, 1800];
let mayorVenta = ventas[0];
for (let i = 1; i < ventas.length; i++) {
    if (ventas[i] > mayorVenta) {
        mayorVenta = ventas[i];
    }
}
console.log(`Mayor venta: ${mayorVenta}`);
```

### **📝 Ejercicio Extra E: Procesamiento de Texto**
```javascript
// TODO: Trabajar con strings básicos
let frase = "JavaScript es genial para programar";

// Contar letras
let totalLetras = 0;
for (let i = 0; i < frase.length; i++) {
    if (frase[i] !== " ") {
        totalLetras++;
    }
}
console.log(`Total de letras: ${totalLetras}`);

// Contar palabras (separar por espacios)
let palabras = frase.split(" "); // Nota: split es un método útil
console.log(`Total de palabras: ${palabras.length}`);

// Crear acrónimos
let iniciales = "";
for (let i = 0; i < palabras.length; i++) {
    iniciales += palabras[i][0].toUpperCase();
}
console.log(`Acrónimo: ${iniciales}`);
```

---

## 💡 REFLEXIONA MIENTRAS PRACTICAS

### **🤔 Observa estos patrones:**
Mientras haces los ejercicios opcionales, nota que:

```javascript
// ❌ Escribes código similar muchas veces:
console.log(`${proyectos[0].nombre} - ${proyectos[0].estado}`);
console.log(`${proyectos[1].nombre} - ${proyectos[1].estado}`);
console.log(`${proyectos[2].nombre} - ${proyectos[2].estado}`);

// ❌ O cálculos parecidos:
let suma1 = array1[0] + array1[1] + array1[2];
let suma2 = array2[0] + array2[1] + array2[2];
let suma3 = array3[0] + array3[1] + array3[2];

// ❌ O validaciones repetidas:
if (precio1 > 100) { /* hacer algo */ }
if (precio2 > 100) { /* hacer algo */ }
if (precio3 > 100) { /* hacer algo */ }
```

### **🔮 En la Clase 6 solucionaremos esto con FUNCIONES:**
```javascript
// ✅ Una función para mostrar cualquier proyecto:
function mostrarProyecto(proyecto) {
    console.log(`${proyecto.nombre} - ${proyecto.estado}`);
}

// ✅ Una función para sumar arrays:
function sumarArray(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}

// ✅ Una función para validar precios:
function esCarol(precio) {
    return precio > 100;
}
```

### **📝 Preguntas para reflexionar:**
- ¿Qué operaciones repito constantemente?
- ¿Qué sería más fácil si pudiera "nombrar" esas operaciones?
- ¿Qué patrones veo en mi código?

**¡Estas observaciones te van a ayudar MUCHO en las próximas clases!**

### **¿Qué haremos con estos datos?**
- **Convertir a JSON** (formato estándar para APIs)
- **Leer y escribir archivos** con JavaScript
- **JSON.parse() y JSON.stringify()**
- **Preparación para Backend** (curso siguiente)

### **¿Por qué es importante?**
- En el **curso de Backend** construirás APIs
- Estas estructuras serán la base de tu base de datos
- JSON es el formato estándar para intercambio de datos

---

## 📋 Checklist antes de Clase 6

### **Técnico:**
- [ ] Archivo `js/datos.js` creado
- [ ] Estructuras de datos definidas según mi proyecto
- [ ] Código funciona sin errores en consola
- [ ] Uso template literals para mostrar información
- [ ] Todo subido a GitHub

### **Contenido:**
- [ ] Datos representan MI proyecto específico
- [ ] Al menos 3 arrays con 2-3 elementos cada uno
- [ ] Al menos 3 objetos con propiedades relevantes
- [ ] Un cálculo estadístico básico
- [ ] Información mostrada con for loops

### **Preparación:**
- [ ] Entiendo que estos datos se convertirán a JSON
- [ ] Veo patrones de código que se repiten (preparación para funciones)
- [ ] Los datos están organizados y son consistentes

---

## 🎯 ¡LO MÁS IMPORTANTE!

**Enfócate en:**
- ✨ **Datos bien estructurados** de TU proyecto
- ✨ **Template literals** para mostrar información
- ✨ **For loops** para iterar arrays
- ✨ **Preparación para JSON** y archivos

**NO te preocupes por:**
- ❌ Hacer mil console.logs
- ❌ Código muy complejo
- ❌ Muchas funcionalidades

**¡En la próxima clase transformaremos estos datos en archivos JSON y los manejaremos como en aplicaciones reales!** 🚀

---

## 🔧 Git para recordar

```bash
git add js/datos.js
git commit -m "Crear estructuras de datos para mi proyecto"
git push
```