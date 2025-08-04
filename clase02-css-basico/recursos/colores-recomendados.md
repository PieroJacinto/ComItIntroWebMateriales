# 🎨 Colores Recomendados para Principiantes

## 🏢 Paletas Profesionales Probadas

### Azul Corporativo
```css
--azul-oscuro: #2c3e50;    /* Headers, títulos */
--azul-medio: #3498db;     /* Botones, enlaces */
--azul-claro: #ebf3fd;     /* Fondos suaves */
--gris-texto: #333333;     /* Texto principal */
```

### Verde Moderno
```css
--verde-oscuro: #27ae60;   /* Botones principales */
--verde-medio: #2ecc71;    /* Acentos */
--verde-claro: #d5f4e6;    /* Fondos */
--gris-oscuro: #2c3e50;    /* Texto */
```

### Púrpura Creativo
```css
--purpura-oscuro: #6c3483; /* Headers */
--purpura-medio: #8e44ad;  /* Botones */
--purpura-claro: #f4ecf7;  /* Fondos */
--gris-texto: #2d3748;     /* Texto */
```

### Naranja Energético
```css
--naranja-oscuro: #d35400; /* Botones principales */
--naranja-medio: #e67e22;  /* Acentos */
--naranja-claro: #fdeaa7;  /* Fondos */
--gris-oscuro: #34495e;    /* Texto */
```

## 🎯 Cómo Usar las Paletas

### Estructura recomendada:
```css
/* Color primario: Header, botones principales */
header {
    background-color: #2c3e50;
}

.btn-principal {
    background-color: #3498db;
}

/* Color secundario: Enlaces, acentos */
a {
    color: #3498db;
}

h2 {
    color: #2c3e50;
    border-bottom: 2px solid #3498db;
}

/* Color claro: Fondos suaves */
form {
    background-color: #ebf3fd;
}

/* Texto: Siempre legible */
body {
    color: #333333;
}
```

## 🚫 Combinaciones a Evitar

### Problemas de contraste:
```css
/* MAL - Poco contraste */
color: #cccccc;
background-color: #ffffff;

/* BIEN - Buen contraste */
color: #333333;
background-color: #ffffff;
```

### Colores problemáticos juntos:
```css
/* MAL - Problemas de daltonismo */
color: #ff0000;  /* rojo */
background-color: #00ff00;  /* verde */

/* MAL - Muy brillante */
color: #ffff00;  /* amarillo */
background-color: #ff00ff;  /* magenta */
```

## 💡 Tips Rápidos

1. **Máximo 3 colores** principales
2. **Un color dominante** (60% del diseño)
3. **Un color secundario** (30% del diseño)  
4. **Un color de acento** (10% del diseño)
5. **Siempre usar grises** para texto (#333, #666, #999)
6. **Probar contraste** - texto debe ser fácil de leer

## 🔧 Herramientas Útiles

- **Coolors.co** - Generar paletas
- **Adobe Color** - Paletas profesionales
- **WebAIM Contrast Checker** - Verificar legibilidad