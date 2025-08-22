# 📄 JSON - Explicación Completa Clase 6

## 🤔 ¿Qué es JSON?

**JSON** significa **JavaScript Object Notation** (Notación de Objetos de JavaScript). Es un **formato de texto** usado para intercambiar datos entre aplicaciones.

### **Piénsalo así:**
- **Objeto JavaScript** = datos que puedes usar en tu código
- **JSON** = texto que puedes enviar, guardar y compartir
- Es como "empaquetar" tus datos para enviarlos por correo 📦

---

## 🆚 DIFERENCIA: Objeto JS vs JSON

### **Objeto JavaScript (en tu código)**
```javascript
let usuario = {
    nombre: "Ana",
    edad: 25,
    activo: true,
    skills: ["HTML", "CSS", "JavaScript"]
};
```

### **Mismo dato en formato JSON (texto)**
```json
{
    "nombre": "Ana",
    "edad": 25,
    "activo": true,
    "skills": ["HTML", "CSS", "JavaScript"]
}
```

### **Diferencias clave:**
| Objeto JavaScript | JSON |
|-------------------|------|
| Tipo: `object` | Tipo: `string` (texto) |
| Propiedades sin comillas | Propiedades CON comillas |
| Puede tener funciones | NO puede tener funciones |
| Vive en memoria | Se puede guardar/enviar |

---

## 📤 JSON.stringify() - JS a JSON

**Convierte objetos JavaScript en texto JSON para enviar o guardar.**

### **Sintaxis Básica**
```javascript
let objeto = { nombre: "Ana", edad: 25 };
let textoJSON = JSON.stringify(objeto);

console.log(typeof objeto);     // "object"
console.log(typeof textoJSON);  // "string"
console.log(textoJSON);         // '{"nombre":"Ana","edad":25}'
```

### **Con Formato Legible**
```javascript
let persona = {
    nombre: "Ana",
    edad: 25,
    activo: true
};

// JSON compacto (difícil de leer)
let compacto = JSON.stringify(persona);
// {"nombre":"Ana","edad":25,"activo":true}

// JSON formateado (fácil de leer)
let formateado = JSON.stringify(persona, null, 2);
/*
{
  "nombre": "Ana",
  "edad": 25,
  "activo": true
}
*/
```

### **Casos Prácticos con stringify()**
```javascript
// Ejemplo 1: Guardar perfil de usuario
let perfil = {
    nombre: "Ana García",
    profesion: "Desarrolladora Frontend",
    skills: ["HTML", "CSS", "JavaScript"],
    proyectos: [
        { nombre: "Portfolio", completado: true },
        { nombre: "Blog", completado: false }
    ]
};

let perfilJSON = JSON.stringify(perfil, null, 2);
console.log(perfilJSON); // Listo para guardar en archivo

// Ejemplo 2: Datos del clima para API
let clima = {
    ciudad: "Buenos Aires",
    temperatura: 22,
    soleado: true
};

let climaJSON = JSON.stringify(clima);
// Listo para enviar a servidor
```

---

## 📥 JSON.parse() - JSON a JS

**Convierte texto JSON de vuelta a objetos JavaScript para usar en tu código.**

### **Sintaxis Básica**
```javascript
let textoJSON = '{"nombre":"Ana","edad":25}';
let objeto = JSON.parse(textoJSON);

console.log(typeof textoJSON); // "string"
console.log(typeof objeto);    // "object"
console.log(objeto.nombre);    // "Ana"
```

### **Ejemplo Real: Datos de API**
```javascript
// Texto que recibes de una API
let datosClima = `{
    "ciudad": "Buenos Aires",
    "temperatura": 25,
    "clima": "soleado",
    "pronostico": ["soleado", "nublado", "lluvia"]
}`;

// Convertir a objeto para usar
let clima = JSON.parse(datosClima);

// Ahora puedes usar los datos
console.log(`En ${clima.ciudad} hace ${clima.temperatura}°C`);
console.log(`Pronóstico: ${clima.pronostico.join(", ")}`);
```

### **Casos Prácticos con parse()**
```javascript
// Ejemplo 1: Leer configuración guardada
let configTexto = `{
    "tema": "oscuro",
    "idioma": "español",
    "notificaciones": true
}`;

let config = JSON.parse(configTexto);
if (config.notificaciones) {
    console.log("Mostrar notificaciones");
}

// Ejemplo 2: Procesar datos de formulario
let datosFormulario = `{
    "nombre": "María",
    "email": "maria@email.com",
    "mensaje": "Hola, me interesa el curso"
}`;

let formulario = JSON.parse(datosFormulario);
console.log(`Nuevo mensaje de ${formulario.nombre}`);
```

---

## 🔄 CICLO COMPLETO: Ida y Vuelta

```javascript
// 1. OBJETO ORIGINAL
let producto = {
    nombre: "Laptop",
    precio: 1000,
    disponible: true
};

console.log("Original:", typeof producto); // "object"

// 2. CONVERTIR A JSON
let productoJSON = JSON.stringify(producto);
console.log("JSON:", typeof productoJSON);    // "string"
console.log("Contenido:", productoJSON);       // '{"nombre":"Laptop","precio":1000,"disponible":true}'

// 3. VOLVER A OBJETO
let productoRecuperado = JSON.parse(productoJSON);
console.log("Recuperado:", typeof productoRecuperado); // "object"
console.log("Funciona:", productoRecuperado.nombre);   // "Laptop"

// 4. VERIFICAR QUE SON IGUALES
console.log(producto.nombre === productoRecuperado.nombre); // true
```

---

## 🎯 ¿Para qué se usa JSON en la vida real?

### **1. APIs y Comunicación Web**
```javascript
// Lo que envías a un servidor
let datos = { usuario: "ana", accion: "login" };
let paraEnviar = JSON.stringify(datos);

// Lo que recibes del servidor
let respuesta = '{"status":"success","mensaje":"Bienvenida"}';
let resultado = JSON.parse(respuesta);
```

### **2. Guardar Datos Localmente**
```javascript
// Guardar preferencias del usuario
let preferencias = { tema: "oscuro", idioma: "es" };
localStorage.setItem("config", JSON.stringify(preferencias));

// Recuperar preferencias
let configGuardada = localStorage.getItem("config");
let config = JSON.parse(configGuardada);
```

### **3. Archivos de Configuración**
```javascript
// package.json, settings.json, etc.
let packageInfo = {
    name: "mi-proyecto",
    version: "1.0.0",
    dependencies: ["bootstrap", "jquery"]
};

let packageJSON = JSON.stringify(packageInfo, null, 2);
// Se guarda como archivo .json
```

### **4. Intercambio con Otras Aplicaciones**
```javascript
// Enviar datos a una app móvil
let datosApp = {
    usuario: "ana",
    puntuacion: 850,
    nivel: 5
};

let paraApp = JSON.stringify(datosApp);
// La app móvil puede leer estos datos
```

---

## ⚠️ ERRORES COMUNES CON JSON

### **1. JSON Inválido (Error de Sintaxis)**
```javascript
// ❌ JSON mal formado
let malJSON = '{"nombre": "Ana", "edad": 25,}'; // Coma extra al final

try {
    let objeto = JSON.parse(malJSON);
} catch (error) {
    console.log("Error:", error.message); // "Unexpected token }"
}

// ✅ JSON correcto
let bienJSON = '{"nombre": "Ana", "edad": 25}';
let objeto = JSON.parse(bienJSON); // ✅ Funciona
```

### **2. Tipos de Datos No Soportados**
```javascript
let objetoComplejo = {
    nombre: "Ana",
    edad: 25,
    saludar: function() { return "Hola"; }, // ❌ Función se pierde
    datos: undefined,                       // ❌ undefined se pierde
    vacio: null                            // ✅ null se mantiene
};

let json = JSON.stringify(objetoComplejo);
console.log(json); // '{"nombre":"Ana","edad":25,"vacio":null}'
// ¡Las funciones y undefined desaparecieron!
```

### **3. Olvidar que JSON es Texto**
```javascript
// ❌ Error común
let datos = { nombre: "Ana" };
let json = JSON.stringify(datos);
console.log(json.nombre); // undefined (porque json es string, no objeto)

// ✅ Correcto
let objeto = JSON.parse(json);
console.log(objeto.nombre); // "Ana"
```

---

## 📝 CASOS PRÁCTICOS PARA TU PROYECTO

### **Portfolio Personal**
```javascript
// Datos de tu portfolio
let portfolio = {
    nombre: "Tu Nombre",
    profesion: "Desarrollador Web",
    bio: "Estudiante de ComuIT",
    proyectos: [
        {
            titulo: "Mi Portfolio",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            completado: true,
            url: "https://mi-portfolio.com"
        },
        {
            titulo: "Blog Personal",
            tecnologias: ["HTML", "CSS"],
            completado: false,
            url: null
        }
    ],
    contacto: {
        email: "tu@email.com",
        linkedin: "tu-linkedin",
        github: "tu-github"
    }
};

// Convertir para guardar o enviar
let portfolioJSON = JSON.stringify(portfolio, null, 2);
console.log("Portfolio en JSON:", portfolioJSON);
```

### **Sistema de Contactos**
```javascript
// Lista de contactos
let contactos = [
    { nombre: "Ana", email: "ana@email.com", favorito: true },
    { nombre: "Luis", email: "luis@email.com", favorito: false }
];

// Guardar contactos
let contactosJSON = JSON.stringify(contactos);
localStorage.setItem("contactos", contactosJSON);

// Cargar contactos
let contactosGuardados = localStorage.getItem("contactos");
let listaContactos = JSON.parse(contactosGuardados);
```

---

## ✅ CHECKLIST JSON

**Antes de continuar, asegúrate de que puedes:**
- [ ] Explicar qué es JSON y para qué sirve
- [ ] Usar `JSON.stringify()` para convertir objetos a texto
- [ ] Usar `JSON.parse()` para convertir texto JSON a objetos
- [ ] Entender la diferencia entre objeto JS y JSON
- [ ] Manejar errores básicos de JSON inválido
- [ ] Ver casos prácticos donde usarías JSON

---

## 🚀 PRÓXIMO PASO: APIs

En las próximas clases aprenderás a:
- **Consumir APIs** que devuelven datos en JSON
- **Enviar datos** a servidores en formato JSON
- **Guardar datos** localmente usando JSON
- **Crear tu propia API** (curso de Backend)

**¡JSON es la base de toda comunicación web moderna!** 🌐