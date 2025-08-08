# 🎴 Clase 3: Ejercicios de Flexbox

## 🎯 Objetivos de la Clase
- Dominar `display: flex` y propiedades fundamentales
- Crear navegaciones modernas y responsivas
- Organizar contenido en cards profesionales
- Aplicar Flexbox al proyecto personal

---

## 📚 Material de la Clase

### 🧭 Ejercicio 1: Navegación con Flexbox
**Archivo:** `ejercicio-navegacion.html` + `ejercicio-navegacion.css`

**Lo que aprenderás:**
- Transformar navegaciones tradicionales con Flexbox
- `justify-content` para alineación horizontal
- `align-items` para alineación vertical
- Layouts de header completo (logo + nav)
- Navegación vertical para sidebar
- Navegación responsive automática

**Conceptos clave:**
```css
/* Navegación horizontal básica */
nav ul {
    display: flex;
    justify-content: center;
    gap: 2rem;
}

/* Header completo */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Navegación vertical */
nav ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
```

### 🎴 Ejercicio 2: Cards con Flexbox
**Archivo:** `ejercicio-cards.html` + `ejercicio-cards.css`

**Lo que aprenderás:**
- Cards responsive automáticas
- Grillas de 3 columnas exactas
- Cards con tamaños diferentes
- Layouts mixtos (imagen fija + contenido flexible)
- Uso de `flex-wrap` para responsive

**Conceptos clave:**
```css
/* Cards responsive */
.cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
}

.card {
    flex: 0 1 300px; /* Base 300px, puede encogerse */
}

/* 3 columnas exactas */
.cards-3col {
    display: flex;
    gap: 2rem;
}

.cards-3col .card {
    flex: 1; /* Cada card toma 1/3 */
}
```

---

## 🛠️ Cómo Usar los Ejercicios

### Paso 1: Actualizar Material
```bash
cd tu-carpeta-clase
git pull origin main
```

### Paso 2: Abrir los Ejercicios
1. Abre `ejercicio-navegacion.html` en tu navegador
2. Abre `ejercicio-navegacion.css` en tu editor
3. Lee las instrucciones y completa los TODOs
4. Repite con `ejercicio-cards.html`

### Paso 3: Completar TODOs
Busca comentarios como:
```css
/* TODO: Los estudiantes deben completar aquí */
.mi-clase {
    /* ACTIVIDAD: Agregar display: flex; */
}
```

### Paso 4: Verificar Resultados
- Refresca el navegador después de cada cambio
- Compara con el resultado esperado
- Usa las DevTools para experimentar

---

## 📋 Lista de TODOs por Ejercicio

### 🧭 Navegación TODOs

#### Ejercicio 1: Navegación Básica
```css
.nav-flex-basico ul {
    /* TODO: 1. Activar Flexbox */
    /* TODO: 2. Centrar elementos */
    /* TODO: 3. Espaciado moderno */
}
```

#### Ejercicio 2: Header Completo
```css
.header-flex {
    /* TODO: Logo izquierda, nav derecha */
    /* TODO: Alineación vertical */
}

.nav-derecha ul {
    /* TODO: Navegación horizontal */
}
```

#### Ejercicio 3: Navegación Vertical
```css
.nav-vertical ul {
    /* TODO: Flexbox vertical */
    /* TODO: Espaciado uniforme */
}
```

#### Ejercicio 4: Navegación Responsive
```css
.nav-responsive ul {
    /* TODO: Flexbox con wrap */
    /* TODO: Centrar elementos */
}
```

### 🎴 Cards TODOs

#### Ejercicio 2: Cards Horizontal
```css
.cards-flex-basico {
    /* TODO: Activar Flexbox */
    /* TODO: Espaciado */
}
```

#### Ejercicio 3: Cards Responsive
```css
.cards-wrap {
    /* TODO: Flexbox con wrap */
    /* TODO: Centrar y espaciar */
}

.cards-wrap .card {
    /* TODO: Tamaño flexible */
}
```

#### Ejercicio 4: 3 Columnas Exactas
```css
.cards-3-columnas {
    /* TODO: Flexbox básico */
}

.cards-3-columnas .card {
    /* TODO: Dividir espacio en 3 */
}
```

#### Ejercicio 5: Tamaños Diferentes
```css
.cards-tamaños {
    /* TODO: Flexbox con altura uniforme */
}

.card-pequeña { /* TODO: Tamaño 1 */ }
.card-grande { /* TODO: Tamaño doble */ }
.card-mediana { /* TODO: Tamaño intermedio */ }
```

#### Ejercicio 6: Layout Mixto
```css
.proyecto-card {
    /* TODO: Flexbox horizontal */
}

.proyecto-imagen {
    /* TODO: Tamaño fijo 40% */
}

.proyecto-contenido {
    /* TODO: Resto del espacio */
}
```

---

## 🎯 Resultados Esperados

### ✅ Al Completar Navegación:
- Navegación horizontal centrada y espaciada
- Header con logo a la izquierda y nav a la derecha
- Sidebar vertical con enlaces apilados
- Navegación que se adapta automáticamente

### ✅ Al Completar Cards:
- Cards organizadas en fila horizontal
- Sistema responsive que se adapta al ancho
- Grilla de 3 columnas perfectas
- Cards con jerarquía visual (tamaños diferentes)
- Layout profesional de proyectos

---

## 🔧 Herramientas y Tips

### DevTools para Experimentar
1. F12 para abrir DevTools
2. Busca el elemento con Flexbox
3. En la pestaña Styles, cambia valores:
   - `justify-content: center, flex-start, flex-end, space-between`
   - `align-items: center, flex-start, flex-end, stretch`
   - `flex-direction: row, column, row-reverse`

### Valores Comunes de Flexbox
```css
/* justify-content (eje principal) */
justify-content: flex-start;    /* Izquierda */
justify-content: center;        /* Centro */
justify-content: flex-end;      /* Derecha */
justify-content: space-between; /* Extremos + espaciado */
justify-content: space-around;  /* Espaciado alrededor */
justify-content: space-evenly;  /* Espaciado uniforme */

/* align-items (eje cruzado) */
align-items: flex-start;    /* Arriba */
align-items: center;        /* Centro */
align-items: flex-end;      /* Abajo */
align-items: stretch;       /* Estira al 100% */

/* flex (tamaño de elementos) */
flex: 1;           /* Toma todo el espacio disponible */
flex: 0 0 300px;   /* Tamaño fijo 300px */
flex: 0 1 300px;   /* Base 300px, puede encogerse */
flex: 2;           /* Toma doble espacio que flex: 1 */
```

---

## ❓ Solución de Problemas

### "No veo cambios al modificar CSS"
- ✅ Guarda el archivo CSS
- ✅ Refresca el navegador (Ctrl+F5)
- ✅ Verifica que no hay errores de sintaxis

### "Los elementos no se centran"
- ✅ Asegúrate de que el contenedor tenga `display: flex`
- ✅ Usa `justify-content: center` para centrar horizontalmente
- ✅ Usa `align-items: center` para centrar verticalmente

### "Las cards no son del mismo tamaño"
- ✅ Usa `align-items: stretch` para altura uniforme
- ✅ Evita poner `height` fijo en las cards
- ✅ Verifica que no hay `margin` o `padding` diferentes

### "No entiendo la diferencia entre flex: 1 y flex: 0 1 300px"
- `flex: 1` = Toma todo el espacio disponible, se reparte equitativamente
- `flex: 0 1 300px` = Comienza con 300px, puede encogerse pero no crecer
- `flex: 0 0 300px` = Tamaño fijo de 300px, no cambia

---

## 🚀 Aplicación al Proyecto Personal

### Después de Completar los Ejercicios:
1. **Identifica en tu proyecto:**
   - ¿Dónde está tu navegación?
   - ¿Qué contenido podrías organizar en cards?
   - ¿Qué secciones se beneficiarían de Flexbox?

2. **Aplica lo aprendido:**
   - Convierte tu navegación a Flexbox
   - Crea una sección con cards
   - Mejora el layout de tu contenido principal

3. **Verifica el resultado:**
   - Todo se ve organizado y profesional
   - Espaciado uniforme en todo el sitio
   - Navegación moderna y funcional

---

## 📝 Entrega - Tarea para Casa

Ver archivo: `tarea-casa/README.md` para instrucciones completas.

**Resumen de la tarea:**
- Aplicar Flexbox a navegación principal
- Crear sistema de cards en el proyecto
- Mejorar layout general con Flexbox
- Mínimo 3 commits documentando el progreso

---

## 🔮 Próxima Clase

**Clase 4: Responsive Design**
- Media queries para diferentes dispositivos
- Mobile-first approach
- Breakpoints comunes
- Hacer tu proyecto completamente responsive

¡Con Flexbox dominado, estarás listo para hacer tu sitio perfecto en todos los dispositivos! 📱💻🖥️