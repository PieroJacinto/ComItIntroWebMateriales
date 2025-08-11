# ✨ Efectos Básicos Cheatsheet

## 🌊 Transiciones Suaves

### Regla Universal
```css
/* Aplicar a TODOS los elementos interactivos */
a, button, .btn, .card, input, textarea {
    transition: all 0.3s ease;
}
```

**¿Por qué 0.3s?** Es el timing perfecto - no muy rápido, no muy lento.

---

## 🖱️ Efectos Hover

### Botones Básicos
```css
.btn {
    background-color: #3498db;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.btn:hover {
    background-color: #2980b9;        /* Color más oscuro */
    transform: translateY(-2px);      /* Elevar ligeramente */
    box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
}
```

### Enlaces de Navegación
```css
nav a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

nav a:hover {
    background-color: rgba(255, 255, 255, 0.2);
}
```

### Cards Elevadas
```css
.card {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}
```

### Enlaces de Texto
```css
a {
    color: #3498db;
    text-decoration: none;
    transition: all 0.3s ease;
}

a:hover {
    color: #2980b9;
    text-decoration: underline;
}
```

---

## 🎯 Efectos Focus (Formularios)

### Inputs Básicos
```css
input, textarea {
    border: 2px solid #ddd;
    padding: 0.75rem;
    border-radius: 5px;
    transition: all 0.3s ease;
}

input:focus, textarea:focus {
    outline: none;                    /* Quitar outline default */
    border-color: #3498db;           /* Borde azul */
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);  /* Sombra sutil */
}
```

### Placeholder Mejorado
```css
input::placeholder {
    color: #999;
    opacity: 1;
}

input:focus::placeholder {
    opacity: 0.5;
}
```

---

## 🎨 Transform Básicos

### Elevación (más común)
```css
.elemento:hover {
    transform: translateY(-5px);     /* Elevar 5px */
}

.boton:hover {
    transform: translateY(-2px);     /* Elevar 2px (más sutil) */
}
```

### Escala (zoom)
```css
.imagen:hover {
    transform: scale(1.05);          /* 5% más grande */
}

.icono:hover {
    transform: scale(1.1);           /* 10% más grande */
}
```

### Combinados
```css
.card:hover {
    transform: translateY(-5px) scale(1.02);  /* Elevar + agrandar */
}
```

---

## 💫 Box-Shadow para Profundidad

### Niveles de Elevación
```css
/* Nivel 1 - Sutil */
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

/* Nivel 2 - Medio */
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);

/* Nivel 3 - Hover */
box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);

/* Nivel 4 - Destacado */
box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
```

### Con Color (para botones)
```css
.btn-blue:hover {
    box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
}

.btn-green:hover {
    box-shadow: 0 5px 15px rgba(39, 174, 96, 0.3);
}

.btn-red:hover {
    box-shadow: 0 5px 15px rgba(231, 76, 60, 0.3);
}
```

---

## 🎭 Estados de Elementos

### Botón Completo con Estados
```css
.btn {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
}

/* Hover */
.btn:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
}

/* Active (cuando se hace click) */
.btn:active {
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(52, 152, 219, 0.3);
}

/* Disabled */
.btn:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
}
```

---

## 📱 Consideraciones Móviles

### Hover en Touch Devices
```css
/* Solo aplicar hover en dispositivos que lo soportan */
@media (hover: hover) {
    .btn:hover {
        background-color: #2980b9;
        transform: translateY(-2px);
    }
}

/* Focus siempre funciona (para navegación por teclado) */
.btn:focus {
    background-color: #2980b9;
    outline: 2px solid #fff;
    outline-offset: 2px;
}
```

---

## 🎨 Ejemplos Específicos

### Navbar con Hover
```css
.navbar {
    background-color: #2c3e50;
    padding: 1rem 0;
}

.navbar a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    margin: 0 0.25rem;
    border-radius: 4px;
    transition: all 0.3s ease;
}

.navbar a:hover {
    background-color: #34495e;
    transform: translateY(-1px);
}

.navbar a.active {
    background-color: #3498db;
}
```

### Galería de Imágenes
```css
.gallery img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.gallery img:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}
```

### Formulario Elegante
```css
.form-group {
    margin-bottom: 1rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #2c3e50;
    transition: color 0.3s ease;
}

.form-group input:focus + label,
.form-group input:focus ~ label {
    color: #3498db;
}

.form-group input {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.form-group input:focus {
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
    outline: none;
}

.form-group input:valid {
    border-color: #27ae60;
}

.form-group input:invalid {
    border-color: #e74c3c;
}
```

---

## ⚠️ Errores Comunes

### ❌ NO Hagas:
```css
/* Muy rápido - se siente brusco */
transition: all 0.1s ease;

/* Muy lento - se siente pesado */
transition: all 1s ease;

/* Movimiento exagerado */
transform: translateY(-20px);

/* Sombra muy intensa */
box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);

/* Olvidar quitar outline sin reemplazar */
input:focus {
    outline: none;  /* ❌ Sin alternativa */
}
```

### ✅ SÍ Haz:
```css
/* Timing perfecto */
transition: all 0.3s ease;

/* Movimiento sutil */
transform: translateY(-5px);

/* Sombra elegante */
box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);

/* Focus accesible */
input:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
}
```

---

## 🎯 Checklist de Efectos

- [ ] Transiciones aplicadas a elementos interactivos
- [ ] Hover en navegación
- [ ] Hover en botones (color + elevación + sombra)
- [ ] Hover en cards (elevación + sombra)
- [ ] Focus en inputs (borde + sombra)
- [ ] Focus en textarea
- [ ] Enlaces con hover (color + underline)
- [ ] Timing de 0.3s en todas las transiciones
- [ ] Efectos sutiles, no exagerados
- [ ] Testeado en diferentes dispositivos

**✨ Con estos efectos tu sitio se sentirá moderno y profesional!**