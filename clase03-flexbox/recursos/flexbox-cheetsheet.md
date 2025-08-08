# 🎯 Flexbox Cheatsheet - Referencia Rápida

## 🚀 Conceptos Básicos

### Activar Flexbox
```css
.contenedor {
    display: flex;
}
```

### Terminología
- **Flex Container** = Elemento padre (con `display: flex`)
- **Flex Items** = Elementos hijos directos
- **Main Axis** = Eje principal (horizontal por defecto)
- **Cross Axis** = Eje transversal (vertical por defecto)

---

## 📐 Propiedades del Contenedor (Flex Container)

### flex-direction
```css
.contenedor {
    flex-direction: row;          /* Fila (default) */
    flex-direction: row-reverse;  /* Fila invertida */
    flex-direction: column;       /* Columna */
    flex-direction: column-reverse; /* Columna invertida */
}
```

### justify-content (Eje Principal)
```css
.contenedor {
    justify-content: flex-start;    /* Inicio (default) */
    justify-content: flex-end;      /* Final */
    justify-content: center;        /* Centro */
    justify-content: space-between; /* Extremos */
    justify-content: space-around;  /* Espaciado alrededor */
    justify-content: space-evenly;  /* Espaciado uniforme */
}
```

### align-items (Eje Transversal)
```css
.contenedor {
    align-items: stretch;     /* Estirar (default) */
    align-items: flex-start;  /* Inicio */
    align-items: flex-end;    /* Final */
    align-items: center;      /* Centro */
    align-items: baseline;    /* Línea base */
}
```

### flex-wrap
```css
.contenedor {
    flex-wrap: nowrap;    /* No envolver (default) */
    flex-wrap: wrap;      /* Envolver */
    flex-wrap: wrap-reverse; /* Envolver invertido */
}
```

### gap
```css
.contenedor {
    gap: 1rem;           /* Mismo espacio H y V */
    gap: 1rem 2rem;      /* Vertical 1rem, Horizontal 2rem */
    column-gap: 2rem;    /* Solo horizontal */
    row-gap: 1rem;       /* Solo vertical */
}
```

---

## 🎛️ Propiedades de los Items (Flex Items)

### flex-grow
```css
.item {
    flex-grow: 0;    /* No crece (default) */
    flex-grow: 1;    /* Crece proporcionalmente */
    flex-grow: 2;    /* Crece el doble que flex-grow: 1 */
}
```

### flex-shrink
```css
.item {
    flex-shrink: 1;    /* Puede encogerse (default) */
    flex-shrink: 0;    /* No se encoge */
    flex-shrink: 2;    /* Se encoge más rápido */
}
```

### flex-basis
```css
.item {
    flex-basis: auto;    /* Tamaño del contenido (default) */
    flex-basis: 200px;   /* Tamaño específico */
    flex-basis: 25%;     /* Porcentaje */
}
```

### flex (Shorthand)
```css
.item {
    flex: 1;              /* flex-grow: 1, flex-shrink: 1, flex-basis: 0 */
    flex: 0 1 auto;       /* Valores por defecto */
    flex: 0 0 200px;      /* No crece, no encoge, 200px base */
    flex: 1 1 300px;      /* Crece, encoge, 300px base */
}
```

### align-self
```css
.item {
    align-self: auto;       /* Hereda de align-items (default) */
    align-self: flex-start; /* Inicio */
    align-self: flex-end;   /* Final */
    align-self: center;     /* Centro */
    align-self: stretch;    /* Estirar */
}
```

---

## 🎯 Patrones Comunes

### 1. Centrado Perfecto
```css
.centrar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Necesario para centrado vertical */
}
```

### 2. Navegación Horizontal
```css
nav ul {
    display: flex;
    justify-content: center;
    gap: 2rem;
    list-style: none;
}
```

### 3. Header con Logo y Nav
```css
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
}
```

### 4. Cards Responsivas
```css
.cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
}

.card {
    flex: 0 1 300px; /* Base 300px, puede encogerse */
}
```

### 5. Tres Columnas Exactas
```css
.tres-columnas {
    display: flex;
    gap: 2rem;
}

.columna {
    flex: 1; /* Cada una toma 1/3 del espacio */
}
```

### 6. Layout de Contenido (Imagen + Texto)
```css
.seccion {
    display: flex;
    gap: 2rem;
    align-items: center;
}

.imagen {
    flex: 0 0 40%; /* 40% fijo */
}

.contenido {
    flex: 1; /* Toma el resto del espacio */
}
```

### 7. Sidebar + Main Content
```css
.layout {
    display: flex;
    gap: 2rem;
}

.sidebar {
    flex: 0 0 250px; /* Ancho fijo */
}

.main {
    flex: 1; /* Toma el resto */
}
```

### 8. Footer Pegado al Bottom
```css
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main {
    flex: 1; /* Toma todo el espacio disponible */
}
```

---

## 📱 Responsive con Flexbox

### Cards que se Adaptan
```css
.responsive-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
}

.card {
    flex: 1 1 250px; /* Crece, encoge, mínimo 250px */
    min-width: 250px;
}
```

### Navegación que se Envuelve
```css
nav ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
}
```

### Layout que Cambia a Columna en Móvil
```css
.layout {
    display: flex;
    gap: 2rem;
}

@media (max-width: 768px) {
    .layout {
        flex-direction: column;
    }
}
```

---

## 🐛 Errores Comunes

### ❌ Aplicar flex al item en lugar del contenedor
```css
/* INCORRECTO */
.item {
    display: flex; /* No! Esto va en el contenedor */
}

/* CORRECTO */
.contenedor {
    display: flex; /* Sí! En el padre */
}
```

### ❌ No definir altura para centrado vertical
```css
/* INCORRECTO */
.centrar {
    display: flex;
    justify-content: center;
    align-items: center;
    /* Falta height! */
}

/* CORRECTO */
.centrar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px; /* O min-height: 100vh */
}
```

### ❌ Usar margin en lugar de gap
```css
/* MENOS RECOMENDADO */
.item {
    margin: 1rem; /* Puede crear espacios desiguales */
}

/* MEJOR */
.contenedor {
    display: flex;
    gap: 1rem; /* Espaciado uniforme */
}
```

---

## 🎨 Combinaciones Útiles

### Cards con Hover Effect
```css
.card {
    flex: 0 1 300px;
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
}
```

### Layout de Portfolio
```css
.proyecto {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
}

.proyecto:nth-child(even) {
    flex-direction: row-reverse; /* Alternar imagen */
}
```

### Navegación con Botón Destacado
```css
nav ul {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.btn-cta {
    margin-left: auto; /* Empuja a la derecha */
}
```

---

## 🔍 Debug Tips

### Ver los Flex Containers
En Chrome DevTools:
1. Inspecciona el elemento
2. En la pestaña Elements, verás un badge "flex"
3. Click en él para ver las líneas de Flexbox

### Propiedades para Debug
```css
.debug {
    border: 2px solid red; /* Ver los contenedores */
    min-height: 100px;     /* Ver el espacio que ocupan */
}
```

---

## 📚 Recursos Adicionales

- **Flexbox Froggy**: https://flexboxfroggy.com/ (Juego para practicar)
- **CSS-Tricks Guide**: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- **MDN Flexbox**: https://developer.mozilla.org/es/docs/Web/CSS/CSS_Flexible_Box_Layout

---

## 🎯 Recuerda

1. **Flexbox es para una dimensión** (fila O columna)
2. **CSS Grid es para dos dimensiones** (filas Y columnas)  
3. **`display: flex` va en el contenedor padre**
4. **`gap` es mejor que `margin` para espaciado**
5. **Siempre define altura para centrado vertical**

¡Con esta referencia tienes todo lo necesario para dominar Flexbox! 🚀