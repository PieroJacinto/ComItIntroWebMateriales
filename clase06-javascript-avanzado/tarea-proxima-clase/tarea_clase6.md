# 📝 TAREA CLASE 6 - Funciones Básicas y JSON

## 🎯 Objetivo Simple

**Convertir los datos de la Clase 5 en funciones básicas** y crear archivos JSON. Preparación para conectar con HTML en la Clase 7.

---

## 📋 LO QUE TIENES QUE HACER

### **✅ PARTE 1: Crear Funciones Básicas (45 min)**

**Modificar tu archivo `js/datos.js` agregando funciones:**

```javascript
// 🎯 TUS DATOS (mantener igual que Clase 5)
const miPerfil = { /* tus datos actuales */ };
const proyectos = [ /* tus proyectos actuales */ ];
// ... resto de tus datos

// 🔧 FUNCIONES UNIVERSALES (todos los proyectos)

// 1. Convertir datos a JSON
function convertirAJSON(datos) {
    // TODO: convertir a texto con formato legible
}

// 2. Convertir JSON a objeto
function convertirDeJSON(textoJSON) {
    // TODO: convertir texto a objeto
}

// 3. Mostrar información con formato
function mostrarConFormato(titulo, datos) {
    // TODO: Mostrar título en mayúsculas
    // TODO: Usar forEach para mostrar cada elemento numerado
}

// 4. Contar elementos
function contarElementos(array) {
    // TODO: Devolver la cantidad de elementos del array
}

// TODO: Agregar 2-3 funciones específicas según tu proyecto (ver abajo)
```

### **✅ FUNCIONES ESPECÍFICAS POR PROYECTO:**

#### **💼 Portfolio Personal:**
```javascript
// Obtener proyectos completados
function obtenerProyectosCompletados() {
    // TODO: Usar filter para devolver solo proyectos con completado === true
}

// Obtener todas las tecnologías
function obtenerTecnologias() {
    // TODO: Crear array vacío
    // TODO: Usar forEach en proyectos
    // TODO: Para cada proyecto, usar forEach en tecnologias
    // TODO: Si la tecnología no está en el array, agregarla
    // TODO: Devolver el array de tecnologías únicas
}
```

#### **📝 Blog Personal:**
```javascript
// Obtener artículos por categoría
function obtenerPorCategoria(categoria) {
    // TODO: Usar filter para devolver artículos de esa categoría
}

// Obtener categorías únicas
function obtenerCategorias() {
    // TODO: Crear array vacío para categorías
    // TODO: Usar forEach en artículos
    // TODO: Si la categoría no está en el array, agregarla
    // TODO: Devolver array de categorías únicas
}
```

#### **🍽️ Restaurante:**
```javascript
// Obtener platos por categoría
function obtenerPlatosPorCategoria(categoria) {
    // TODO: Usar filter para devolver platos de esa categoría
}

// Calcular precio promedio
function calcularPrecioPromedio() {
    // TODO: Crear variable total = 0
    // TODO: Usar forEach para sumar todos los precios
    // TODO: Devolver total dividido por cantidad de platos
}
```

#### **💼 Servicio/Emprendimiento:**
```javascript
// Obtener servicios principales
function obtenerServiciosPrincipales() {
    // TODO: Usar filter para devolver servicios con principal === true
}

// Calcular precio total de servicios
function calcularPrecioTotal(serviciosSeleccionados) {
    // TODO: Crear variable total = 0
    // TODO: Usar forEach para sumar precios de servicios seleccionados
    // TODO: Devolver total
}
```

### **✅ PARTE 2: Usar Funciones con Callbacks (30 min)**

**Agregar al final de `datos.js`:**

```javascript
// 🚀 USAR TODAS LAS FUNCIONES

console.log("=== 🎯 PROBANDO FUNCIONES ===");

// 1. Mostrar datos con forEach
console.log("\n📋 TODOS MIS DATOS:");
// TODO: Usar forEach para mostrar cada elemento de tus arrays principales

// 2. Crear listas con map
console.log("\n🔄 TRANSFORMANDO DATOS:");
// TODO: Usar map para crear una lista de solo nombres (proyectos, artículos, etc.)

// 3. Filtrar datos con filter
console.log("\n🔍 FILTRANDO DATOS:");
// TODO: Usar filter con una de tus funciones específicas

// 4. Convertir a JSON
console.log("\n📄 DATOS EN JSON:");
const miDatosJSON = convertirAJSON(miPerfil);
console.log(miDatosJSON);

// 5. Convertir de vuelta a objeto
const datosRecuperados = convertirDeJSON(miDatosJSON);
console.log("\n✅ DATOS RECUPERADOS:");
console.log(datosRecuperados.nombre); // o la propiedad que tengas

console.log("\n🎉 ¡Todo funcionando! Listo para Clase 7 - DOM");
```

### **✅ PARTE 3: Crear 1 Archivo JSON (15 min)**

**Agregar al final de tu `datos.js` (después de todo lo anterior):**

```javascript
// 📄 GENERAR JSON PARA GUARDAR
console.log("\n" + "=".repeat(50));
console.log("📄 COPIA ESTE JSON Y GUÁRDALO:");
console.log("=".repeat(50));

// Crear un objeto con TODOS tus datos principales
const todosMisDatos = {
    perfil: miPerfil,           // Tu objeto de perfil
    proyectos: proyectos,       // Tu array de proyectos
    // TODO: Agregar otros arrays/objetos que tengas
};

// Convertir a JSON y mostrar
const jsonParaGuardar = convertirAJSON(todosMisDatos);
console.log(jsonParaGuardar);

console.log("=".repeat(50));
console.log("⬆️ COPIA TODO EL TEXTO DE ARRIBA ⬆️");
console.log("=".repeat(50));
```

**Pasos específicos:**

1. **Ejecutar tu código:**
   - Abre `index.html` en el navegador
   - Abre la consola (F12)
   - Busca el texto entre las líneas de "="

2. **Copiar el JSON:**
   - Selecciona TODO el texto JSON que aparece
   - Debe empezar con `{` y terminar con `}`
   - Copia con Ctrl+C

3. **Crear el archivo:**
   ```bash
   # En la terminal, en tu carpeta del proyecto:
   mkdir datos
   ```
   
4. **Guardar el JSON:**
   - Crea nuevo archivo: `datos/mi-proyecto.json`
   - Pega el JSON copiado
   - Guarda el archivo

**Ejemplo de lo que deberías copiar:**
```json
{
  "perfil": {
    "nombre": "Tu Nombre",
    "profesion": "Desarrollador Web Jr"
  },
  "proyectos": [
    {
      "nombre": "Mi Portfolio",
      "tecnologias": ["HTML", "CSS"]
    }
  ]
}
```

---

## 📂 ESTRUCTURA FINAL SIMPLE

```
mi-proyecto-web/
├── index.html                # ← Conecta datos.js con <script>
├── css/styles.css
├── js/
│   └── datos.js              # ← TODO en un solo archivo
├── datos/
│   └── mi-proyecto.json      # ← NUEVO archivo JSON
└── images/
```

### **🔗 CONECTAR CON HTML:**

**En tu `index.html`, antes de `</body>`:**
```html
<script src="js/datos.js"></script>
</body>
</html>
```

**Para probar que funciona:**
1. Abre `index.html` en el navegador
2. Abre la consola (F12)
3. Deberías ver todos los console.log de tus funciones
4. Si hay errores, aparecerán en rojo en la consola

---

## ✅ CHECKLIST SIMPLE

### **Código:**
- [ ] 4 funciones universales funcionando
- [ ] 2-3 funciones específicas de tu proyecto
- [ ] Uso de forEach, map, filter al final
- [ ] Todo funciona sin errores en consola

### **JSON:**
- [ ] Carpeta `datos/` creada
- [ ] Archivo `mi-proyecto.json` con tus datos
- [ ] JSON válido (sin errores de sintaxis)

### **Git:**
- [ ] Todo subido a GitHub
- [ ] Commit: "Agregar funciones básicas y JSON"

---

## 🚀 PREPARACIÓN PARA CLASE 7

**Con estas funciones simples, en la próxima clase podremos:**
- Insertar tus datos en HTML con `document.getElementById()`
- Usar tus funciones para mostrar listas dinámicas
- Conectar el JSON con `fetch()` cuando sea necesario

**¡Simple pero poderoso!** 🎯

---

## 🔧 Git para la Tarea

```bash
mkdir datos
git add js/datos.js datos/mi-proyecto.json
git commit -m "Agregar funciones básicas y archivo JSON"
git push
```