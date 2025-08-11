# 📱 Responsive Design Cheatsheet

## 🚨 OBLIGATORIO: Viewport Meta Tag

```html
<!-- DEBE ir en TODAS las páginas -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**Sin esto:** Tu sitio será inutilizable en móviles (simula desktop)
**Con esto:** Usa el ancho real del dispositivo

---

## 📐 Breakpoints Estándar

```css
/* Mobile First Approach */

/* Móvil (base) - Sin media query */
/* 0px - 767px */

/* Tablet */
@media (min-width: 768px) {
    /* Estilos para tablet y más grande */
}

/* Desktop */
@media (min-width: 1024px) {
    /* Estilos para desktop */
}

/* Large Desktop */
@media (min-width: 1200px) {
    /* Estilos para pantallas grandes */
}
```

---

## 🧭 Navegación Responsive

### Patrón Básico: Vertical → Horizontal

```css
/* Base (móvil): navegación vertical */
nav ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

nav a {
    padding: 1rem;
    display: block;
    text-align: center;
}

/* Tablet+: navegación horizontal */
@media (min-width: 768px) {
    nav ul {
        flex-direction: row;
        justify-content: center;
        gap: 2rem;
    }
    
    nav a {
        padding: 0.5rem 1rem;
    }
}
```

---

## 🖼️ Imágenes Responsive

### Regla Universal
```css
img {
    max-width: 100%;
    height: auto;
}
```

### Imágenes Hero
```css
.hero-image {
    width: 100%;
    height: 250px;        /* Móvil */
    object-fit: cover;
    object-position: center;
}

@media (min-width: 768px) {
    .hero-image {
        height: 400px;    /* Desktop */
    }
}
```

---

## 📦 Contenedores Responsive

```css
.container {
    width: 100%;
    padding: 1rem;        /* Móvil */
    margin: 0 auto;
}

@media (min-width: 768px) {
    .container {
        max-width: 750px;
        padding: 2rem;
    }
}

@media (min-width: 1024px) {
    .container {
        max-width: 1000px;
    }
}

@media (min-width: 1200px) {
    .container {
        max-width: 1200px;
    }
}
```

---

## 🔘 Botones Touch-Friendly

```css
.btn {
    padding: 0.5rem 1rem;    /* Desktop */
    font-size: 1rem;
}

/* Móvil: más grandes para tocar */
@media (max-width: 767px) {
    .btn {
        padding: 1rem 2rem;
        display: block;
        width: 100%;
        margin: 0.5rem 0;
        min-height: 44px;    /* Mínimo para tocar */
    }
}
```

---

## 📝 Tipografía Responsive

```css
/* Base (móvil) */
body {
    font-size: 16px;        /* Mínimo legible */
    line-height: 1.6;
}

h1 {
    font-size: 1.8rem;      /* Móvil */
}

h2 {
    font-size: 1.4rem;
}

/* Desktop: más grandes */
@media (min-width: 768px) {
    body {
        font-size: 18px;
    }
    
    h1 {
        font-size: 2.5rem;
    }
    
    h2 {
        font-size: 2rem;
    }
}
```

---

## 📊 Grid Responsive con Flexbox

```css
.grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.grid-item {
    flex: 1;
    min-width: 280px;       /* Mínimo para móvil */
    background: white;
    padding: 1rem;
}

/* Resultado automático:
   Móvil: 1 columna
   Tablet: 2 columnas  
   Desktop: 3+ columnas */
```

---

## 🧪 Testing Responsive

### DevTools (F12)
1. Click en ícono de dispositivo móvil
2. Seleccionar dispositivos: iPhone, iPad, Desktop
3. Redimensionar manualmente
4. Verificar: NO scroll horizontal

### Dispositivos Reales
```bash
# En VS Code con Live Server
# Buscar IP de tu computadora:
ipconfig  # Windows
ifconfig  # Mac/Linux

# En móvil navegar a:
http://TU-IP:5500
```

---

## ⚠️ Errores Comunes

### ❌ NO Hagas:
- Olvidar viewport meta tag
- Usar `max-width` en lugar de `min-width`
- Texto menor a 16px en móvil
- Botones muy pequeños (menos de 44px)
- Ancho fijo que cause scroll horizontal

### ✅ SÍ Haz:
- Viewport en TODAS las páginas
- Mobile-first approach
- Probar en dispositivos reales
- `max-width: 100%` en imágenes
- Botones grandes para tocar

---

## 💡 Tips Pro

### 1. Mobile-First es Más Fácil
```css
/* ✅ Mejor: Expandir desde móvil */
.elemento {
    flex-direction: column;  /* Base móvil */
}

@media (min-width: 768px) {
    .elemento {
        flex-direction: row;  /* Desktop */
    }
}

/* ❌ Más difícil: Comprimir desde desktop */
.elemento {
    flex-direction: row;     /* Base desktop */
}

@media (max-width: 767px) {
    .elemento {
        flex-direction: column; /* Móvil */
    }
}
```

### 2. Usa Relative Units
```css
/* ✅ Mejor */
padding: 1rem;          /* Se adapta al font-size */
gap: 2rem;
margin: 1.5rem 0;

/* ❌ Peor */
padding: 16px;          /* Fijo, no se adapta */
gap: 32px;
margin: 24px 0;
```

### 3. Contenido Que Se Adapta
```css
/* ✅ Cards que se adaptan automáticamente */
.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.card {
    flex: 1;
    min-width: 250px;       /* Ancho mínimo */
}
```

---

## 🎯 Checklist Final

- [ ] Viewport meta tag en todas las páginas
- [ ] Navegación vertical en móvil, horizontal en desktop
- [ ] Imágenes con `max-width: 100%`
- [ ] Botones de mínimo 44px en móvil
- [ ] Texto mínimo 16px
- [ ] Sin scroll horizontal en ningún tamaño
- [ ] Testeado en DevTools responsive
- [ ] Testeado en dispositivo real

**🚀 Si pasa este checklist, tu sitio es responsive!**