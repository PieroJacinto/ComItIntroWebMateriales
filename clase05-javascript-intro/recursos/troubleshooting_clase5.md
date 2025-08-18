# 🆘 Troubleshooting - Clase 5 JavaScript Fundamentos

## 🎯 Problemas Comunes y Soluciones Rápidas

---

## 🚨 PROBLEMAS TÉCNICOS

### **❌ Problema: JavaScript no funciona en mi página**

#### **Síntomas:**
- No aparece nada en la consola
- Los console.log no se muestran
- El archivo .js parece no estar conectado

#### **Soluciones:**

**1. Verificar la conexión del archivo:**
```html
<!-- ✅ Correcto - antes de </body> -->
<script src="js/mi-archivo.js"></script>
</body>
</html>

<!-- ❌ Incorrecto - ruta mal escrita -->
<script src="js/mi-arhivo.js"></script>  <!-- archivo mal escrito -->
<script src="mi-archivo.js"></script>    <!-- falta carpeta js/ -->
```

**2. Verificar estructura de carpetas:**
```
mi-proyecto/
├── index.html          ← Aquí está el <script>
└── js/
    └── mi-archivo.js   ← Aquí está el JavaScript
```

**3. Verificar que la consola esté abierta:**
- Presionar `F12`
- Click en pestaña "Console"
- Recargar la página (`F5`)

---

### **❌ Problema: La consola no abre o no funciona**

#### **Soluciones:**

**1. Diferentes formas de abrir:**
- `F12` (más común)
- `Ctrl + Shift + I` (Windows/Linux)
- `Cmd + Option + I` (Mac)
- Click derecho → "Inspeccionar"

**2. Verificar que estés en la pestaña correcta:**
```
Elements | Console | Sources | Network
         ↑
    Asegúrate de estar aquí
```

**3. Limpiar caché del navegador:**
- `Ctrl + F5` (recarga forzada)
- `Ctrl + Shift + R`

---

### **❌ Problema: Errores rojos en la consola**

#### **Error común: "Uncaught SyntaxError"**
```javascript
// ❌ Error de sintaxis
let nombre = "Ana;  // Falta comilla de cierre

// ✅ Corrección
let nombre = "Ana";
```

#### **Error común: "ReferenceError: variable is not defined"**
```javascript
// ❌ Variable no existe
console.log(nombreUsuario);  // ReferenceError

// ✅ Crear la variable primero
let nombreUsuario = "Ana";
console.log(nombreUsuario);
```

#### **Error común: "TypeError: Cannot read property"**
```javascript
// ❌ Acceder a propiedad de undefined
let persona;
console.log(persona.nombre);  // TypeError

// ✅ Crear el objeto primero
let persona = {nombre: "Ana"};
console.log(persona.nombre);
```

---

## 🧠 PROBLEMAS CONCEPTUALES

### **❌ Problema: "No entiendo los índices de arrays"**

#### **Concepto Clave:**
Los arrays empiezan en posición 0, no en 1.

```javascript
let frutas = ["manzana", "banana", "naranja"];
//  Posición:    0         1         2

console.log(frutas[0]);  // "manzana" (primera)
console.log(frutas[1]);  // "banana"  (segunda)
console.log(frutas[2]);  // "naranja" (tercera)

// ❌ Error común
console.log(frutas[3]);  // undefined (no existe)
```

#### **Analogía Útil:**
Piensa en un edificio:
- Planta Baja = Posición 0
- Primer Piso = Posición 1
- Segundo Piso = Posición 2

---

### **❌ Problema: "Confundo arrays y objetos"**

#### **Regla Simple:**
- **Arrays:** Para listas del mismo tipo
- **Objetos:** Para datos relacionados pero diferentes

```javascript
// ✅ Arrays - lista de elementos similares
let colores = ["rojo", "verde", "azul"];
let numeros = [1, 2, 3, 4, 5];

// ✅ Objetos - datos relacionados
let persona = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Madrid"
};

// ❌ Incorrecto - mezclar datos sin relación en array
let datosPersona = ["Ana", 25, "Madrid"];  // Confuso
```

---

### **❌ Problema: "Mi for loop no funciona"**

#### **Errores comunes en for loops:**

**1. Loop infinito:**
```javascript
// ❌ Nunca termina
for (let i = 0; i < 10; i--) {  // i-- hace que vaya hacia atrás
    console.log(i);
}

// ✅ Correcto
for (let i = 0; i < 10; i++) {   // i++ hace que avance
    console.log(i);
}
```

**2. Condición incorrecta:**
```javascript
let frutas = ["manzana", "banana"];

// ❌ Condición mal escrita
for (let i = 0; i <= frutas.length; i++) {  // <= causa error
    console.log(frutas[i]);  // frutas[2] = undefined
}

// ✅ Correcto
for (let i = 0; i < frutas.length; i++) {   // < es correcto
    console.log(frutas[i]);
}
```

**3. Variable mal inicializada:**
```javascript
// ❌ Empezar en 1 cuando debería ser 0
for (let i = 1; i < frutas.length; i++) {
    console.log(frutas[i]);  // Se salta frutas[0]
}

// ✅ Correcto - empezar en 0
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
```

---

### **❌ Problema: "Template literals no funcionan"**

#### **Error común: Usar comillas en lugar de backticks**
```javascript
let nombre = "Ana";

// ❌ Comillas normales - no funciona
console.log("Hola ${nombre}");  // Imprime literal: "Hola ${nombre}"

// ✅ Backticks - funciona
console.log(`Hola ${nombre}`);  // Imprime: "Hola Ana"
```

#### **Cómo escribir backticks:**
- **Windows:** `Alt Gr + ]` o `Alt + 96`
- **Mac:** `Option + ]`
- **Linux:** `Alt Gr + ]`

#### **Visual para identificar:**
```javascript
// ❌ Comillas dobles
"texto"

// ❌ Comillas simples
'texto'

// ✅ Backticks (template literals)
`texto`
```

---

## 🔧 PROBLEMAS DE SINTAXIS

### **❌ Problema: "Olvido punto y coma o llaves"**

#### **Errores comunes:**
```javascript
// ❌ Falta punto y coma
let nombre = "Ana"
let edad = 25  // Error de sintaxis

// ✅ Con punto y coma
let nombre = "Ana";
let edad = 25;

// ❌ Llaves mal balanceadas
let persona = {
    nombre: "Ana",
    edad: 25
// Falta }

// ✅ Llaves balanceadas
let persona = {
    nombre: "Ana",
    edad: 25
};
```

### **❌ Problema: "Paréntesis mal cerrados"**

#### **Chequeo visual:**
```javascript
// ❌ Paréntesis no balanceados
for (let i = 0; i < frutas.length; i++ {  // Falta )
    console.log(frutas[i]);
}

// ✅ Paréntesis balanceados
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// ❌ En console.log
console.log("Hola " + nombre;  // Falta )

// ✅ Correcto
console.log("Hola " + nombre);
```

---

## 💡 PROBLEMAS DE LÓGICA

### **❌ Problema: "Los datos no se muestran como espero"**

#### **Debugging paso a paso:**
```javascript
// En lugar de asumir, verificar cada paso
let productos = [
    {nombre: "Laptop", precio: 800},
    {nombre: "Mouse", precio: 25}
];

// 1. Verificar que el array existe
console.log("Productos:", productos);

// 2. Verificar la longitud
console.log("Cantidad:", productos.length);

// 3. Verificar primer elemento
console.log("Primer producto:", productos[0]);

// 4. Verificar acceso a propiedades
console.log("Nombre del primero:", productos[0].nombre);

// 5. Después hacer el loop
for (let i = 0; i < productos.length; i++) {
    console.log(`Producto ${i + 1}: ${productos[i].nombre} - ${productos[i].precio}`);
}
```

### **❌ Problema: "Los cálculos están mal"**

#### **Verificar tipos de datos:**
```javascript
// ❌ Concatenación en lugar de suma
let precio1 = "100";  // String
let precio2 = "50";   // String
let total = precio1 + precio2;  // "10050" (concatenación)

// ✅ Conversión a números
let precio1 = 100;    // Number
let precio2 = 50;     // Number
let total = precio1 + precio2;  // 150 (suma)

// O convertir:
let total = Number(precio1) + Number(precio2);
```

---

## 🎯 MÉTODOS DE DEBUGGING

### **1. Console.log Estratégico**
```javascript
// ✅ Debugging efectivo
function calcularDescuento(precio, porcentaje) {
    console.log("=== INICIO CÁLCULO ===");
    console.log("Precio recibido:", precio, typeof precio);
    console.log("Porcentaje recibido:", porcentaje, typeof porcentaje);
    
    let descuento = precio * (porcentaje / 100);
    console.log("Descuento calculado:", descuento);
    
    let precioFinal = precio - descuento;
    console.log("Precio final:", precioFinal);
    console.log("=== FIN CÁLCULO ===");
    
    return precioFinal;
}
```

### **2. Verificar Variables Paso a Paso**
```javascript
// En lugar de esto:
let resultado = datos.map(item => item.precio * 1.21).filter(precio => precio > 100);

// Hacer esto para debug:
let paso1 = datos.map(item => item.precio * 1.21);
console.log("Después de aplicar IVA:", paso1);

let paso2 = paso1.filter(precio => precio > 100);
console.log("Después de filtrar:", paso2);

let resultado = paso2;
```

### **3. Usar typeof para verificar tipos**
```javascript
let valor = "123";
console.log("Valor:", valor);
console.log("Tipo:", typeof valor);

// Si necesitas número:
let valorNumerico = Number(valor);
console.log("Como número:", valorNumerico);
console.log("Tipo:", typeof valorNumerico);
```

---

## 🆘 SOLUCIONES RÁPIDAS

### **Para Errores de Sintaxis:**
1. **Verificar paréntesis:** Cada `(` debe tener su `)`
2. **Verificar llaves:** Cada `{` debe tener su `}`
3. **Verificar comillas:** Cada `"` debe tener su `"`
4. **Punto y coma:** Agregar `;` al final de cada línea

### **Para Errores de Lógica:**
1. **Console.log todo:** Ver qué valores tienes en cada paso
2. **Verificar tipos:** Usar `typeof` para confirmar string vs number
3. **Simplificar:** Dividir código complejo en pasos más simples
4. **Verificar índices:** Recordar que arrays empiezan en 0

### **Para Errores de Arrays:**
1. **Verificar longitud:** `array.length` antes del loop
2. **Verificar primer elemento:** `array[0]` para confirmar estructura
3. **Verificar condición loop:** Usar `<` no `<=`
4. **Verificar incremento:** Usar `i++` no `i--`

---

## 🔍 PREGUNTAS PARA SELF-DEBUG

### **Cuando algo no funciona, pregúntate:**

1. **¿Está la consola abierta?**
2. **¿Hay errores rojos en la consola?**
3. **¿El archivo .js está bien conectado?**
4. **¿Estoy usando backticks para template literals?**
5. **¿Mis paréntesis están balanceados?**
6. **¿Mis arrays empiezan en índice 0?**
7. **¿Mi for loop tiene i++ y no i--?**
8. **¿Mis variables están definidas antes de usarlas?**

---

## 📞 CUÁNDO PEDIR AYUDA

### **Antes de preguntar, haz esto:**
1. **Lee el error** completo en la consola
2. **Copia el mensaje de error** exacto
3. **Aísla el problema** a la línea específica
4. **Muestra tu código** completo, no solo la línea problemática

### **Información útil para dar:**
- **Qué esperabas** que pasara
- **Qué está pasando** realmente
- **Mensaje de error** completo
- **Código relevante** (no solo una línea)
- **Pasos** que seguiste

---

## ✅ CHECKLIST DE VERIFICACIÓN

### **Antes de decir "no funciona":**
- [ ] La consola está abierta (F12)
- [ ] No hay errores rojos en consola
- [ ] El archivo .js está conectado correctamente
- [ ] Estoy usando backticks para template literals
- [ ] Mis paréntesis están balanceados: ( )
- [ ] Mis llaves están balanceadas: { }
- [ ] Mis comillas están balanceadas: " "
- [ ] Tengo punto y coma al final: ;
- [ ] Mi for loop usa i++ no i--
- [ ] Mi condición usa < no <=
- [ ] Mis variables están declaradas con let/const

---

## 🎯 ERRORES QUE SON NORMALES

### **No te preocupes si:**
- **Te equivocas con los índices** - todos empezamos contando desde 1
- **Olvidas backticks** - es nuevo, toma práctica
- **Haces loops infinitos** - parte del aprendizaje
- **Confundes arrays y objetos** - con práctica se clarifica
- **Los errores te asustan** - son mensajes de ayuda, no críticas

---

## 🚀 RECUERDA

**Los errores son tus amigos:**
- Te dicen exactamente qué está mal
- Te enseñan a escribir mejor código
- Son parte normal del desarrollo
- Cada error resuelto te hace mejor programador

**¡La consola es tu laboratorio!** Úsala para experimentar y no tengas miedo de romper cosas. Es la mejor forma de aprender. 🧪✨