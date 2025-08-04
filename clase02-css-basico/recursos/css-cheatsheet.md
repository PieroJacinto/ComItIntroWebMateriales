# 📚 CSS Cheat Sheet - Clase 2 Básico

## 🎯 Selectores Básicos

```css
/* Por etiqueta HTML */
h1 { color: #2c3e50; }
p { font-size: 16px; }
body { font-family: Arial, sans-serif; }

/* Por clase (.) */
.mi-clase { background-color: #f8f9fa; }
.boton { padding: 10px 20px; }
.centrado { text-align: center; }

/* Por ID (#) */
#header { background-color: #3498db; }
#footer { margin-top: 50px; }

/* Descendiente (espacio) */
nav ul { list-style: none; }
header h1 { color: white; }

/* Múltiple (,) */
h1, h2, h3 { color: #2c3e50; }
p, li { line-height: 1.6; }
```

---

## 🎨 Colores

```css
/* Hexadecimal (RECOMENDADO) */
color: #ff0000;           /* rojo */
color: #3498db;           /* azul */
color: #2c3e50;           /* gris oscuro */
background-color: #f8f9fa; /* gris claro */

/* RGB */
color: rgb(255, 0, 0);           /* rojo */
background-color: rgb(52, 152, 219); /* azul */

/* Nombres básicos */
color: white;
color: black;
background-color: red;
```

### 🎨 Paleta Recomendada Clase 2:
```css
/* Copia y pega esta paleta */
#3498db  /* Azul principal */
#2c3e50  /* Gris oscuro */
#f8f9fa  /* Gris muy claro */
#ffffff  /* Blanco */
#333333  /* Texto normal */
```

---

## ✍️ Tipografías

```css
/* Familia de fuentes */
font-family: Arial, sans-serif;    /* Sin serifas */
font-family: Georgia, serif;       /* Con serifas */
font-family: "Times New Roman", serif; /* Con espacios usar comillas */

/* Tamaño */
font-size: 16px;        /* Mínimo recomendado */
font-size: 1.2rem;      /* Relativo al elemento raíz */
font-size: 2rem;        /* Para títulos */

/* Peso */
font-weight: normal;    /* 400 */
font-weight: bold;      /* 700 */

/* Estilo */
font-style: normal;
font-style: italic;

/* Altura de línea */
line-height: 1.6;       /* MUY IMPORTANTE para legibilidad */

/* Alineación */
text-align: left;       /* default */
text-align: center;
text-align: right;

/* Decoración */
text-decoration: none;       /* Quitar subrayado */
text-decoration: underline;  /* Agregar subrayado */
```

---

## 📦 Modelo de Caja

```css
/* SIEMPRE usar al inicio */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Dimensiones */
width: 300px;
height: 200px;
max-width: 800px;       /* Ancho máximo */

/* Espaciado interno */
padding: 20px;                    /* Todos los lados */
padding: 10px 20px;               /* Vertical | Horizontal */
padding: 10px 15px 20px 25px;     /* Arriba | Derecha | Abajo | Izquierda */
padding-top: 10px;                /* Individual */

/* Borde */
border: 2px solid #333;           /* Grosor | Estilo | Color */
border-radius: 8px;               /* Esquinas redondeadas */
border: none;                     /* Sin borde */

/* Espaciado externo */
margin: 30px;                     /* Todos los lados */
margin: 20px 0;                   /* Vertical | Horizontal */
margin: 0 auto;                   /* Centrar horizontalmente */
margin-bottom: 2rem;              /* Individual */
```

---

## 📐 Layout Básico

```css
/* Centrar contenido */
.contenedor {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

/* Display básico */
display: block;         /* Ocupa toda la línea */
display: inline;        /* Solo el ancho del contenido */
display: inline-block;  /* Combina ambos */
display: none;          /* Ocultar elemento */

/* Navegación horizontal básica */
nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
}

nav li {
    display: inline-block;
    margin: 0 1rem;
}
```

---

## 🎯 Background (Fondos)

```css
/* Color sólido */
background-color: #f8f9fa;

/* Imagen */
background-image: url('images/fondo.jpg');
background-size: cover;        /* Cubrir todo el área */
background-position: center;   /* Centrar imagen */
background-repeat: no-repeat;  /* No repetir */

/* Gradiente básico */
background: linear-gradient(to right, #3498db, #2c3e50);
```

---

## 🔧 Propiedades Útiles

```css
/* Cursor */
cursor: pointer;        /* Manita al pasar mouse */
cursor: default;        /* Flecha normal */

/* Visibility */
visibility: hidden;     /* Oculto pero ocupa espacio */
opacity: 0.5;          /* Semi-transparente (0-1) */

/* Overflow */
overflow: hidden;       /* Ocultar contenido que sobresale */
overflow: auto;         /* Scroll si es necesario */

/* Border-radius */
border-radius: 4px;     /* Esquinas redondeadas */
border-radius: 50%;     /* Círculo perfecto */
```

---

## 📋 Reset CSS Esencial

```css
/* Copiar al inicio de TODOS los proyectos */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: #333;
}

/* Hacer imágenes responsive */
img {
    max-width: 100%;
    height: auto;
}

/* Quitar estilos de lista */
ul {
    list-style: none;
}

/* Quitar subrayado de enlaces */
a {
    text-decoration: none;
}
```

---

## 📝 Estructura CSS Recomendada

```css
/* ===== RESET Y BASE ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
}

/* ===== HEADER ===== */
header {
    background-color: #3498db;
    color: white;
    padding: 2rem 0;
}

/* ===== NAVEGACIÓN ===== */
nav ul {
    list-style: none;
    text-align: center;
}

nav li {
    display: inline-block;
    margin: 0 1rem;
}

/* ===== MAIN CONTENT ===== */
main {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
}

/* ===== FORMULARIOS ===== */
form {
    background-color: #f8f9fa;
    padding: 2rem;
    border-radius: 8px;
}

/* ===== FOOTER ===== */
footer {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 2rem;
}
```

---

## ✅ Checklist CSS Básico

### Antes de terminar, verificar:
- [ ] Reset CSS aplicado (`* { margin: 0; padding: 0; }`)
- [ ] Font-family definida en body
- [ ] Colores consistentes (máximo 3-4)
- [ ] Navegación horizontal funcionando
- [ ] Formularios estilizados
- [ ] Espaciado consistente (múltiplos de 8px/16px)
- [ ] Max-width en contenido principal
- [ ] CSS vinculado en todas las páginas HTML

---

## 💡 Tips Importantes

### ✅ Buenas Prácticas:
- **Una propiedad por línea** para legibilidad
- **Comentarios** para organizar el código
- **Consistencia** en nomenclatura
- **Mobile-first** thinking (pero sin media queries aún)

### ❌ Evitar en Clase 2:
- CSS inline (style="...")
- !important (excepto casos muy específicos)
- Selectores muy complejos
- Demasiados colores diferentes

### 🔧 Para debuggear:
- **F12** para abrir DevTools
- **Inspeccionar elemento** para ver estilos aplicados
- **Computed** para ver el modelo de caja
- **Cambiar valores** en tiempo real para experimentar

---

## 🚀 Siguiente Nivel

Una vez domines CSS básico, estarás listo para:
- **Flexbox** (Clase 3) para layouts avanzados
- **Grid** para layouts complejos
- **Responsive design** (Clase 4) para móviles
- **Animaciones** para efectos dinámicos

**¡El CSS básico es tu fundación sólida!** 🎯