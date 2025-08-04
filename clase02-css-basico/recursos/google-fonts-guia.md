# 🔤 Google Fonts - Guía Básica

## 🚀 Paso a Paso

### 1. Ir a fonts.google.com
### 2. Elegir máximo 2 fuentes
### 3. Copiar el código

```html
<!-- En el <head> de tu HTML -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

### 4. Usar en CSS

```css
body {
    font-family: 'Roboto', sans-serif;
}
```

## 🎯 Fuentes Recomendadas

### Para Principiantes (muy seguras):

```css
/* Roboto - Moderna y legible */
font-family: 'Roboto', sans-serif;

/* Open Sans - Muy popular */
font-family: 'Open Sans', sans-serif;

/* Lato - Elegante */
font-family: 'Lato', sans-serif;
```

### Combinaciones que funcionan:

```html
<!-- Títulos + Texto -->
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans:wght@400&display=swap" rel="stylesheet">
```

```css
h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
}

body, p {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
}
```

## 💡 Tips Importantes

1. **Máximo 2 fuentes** por sitio
2. **Solo cargar pesos necesarios** (400, 700)
3. **Siempre incluir fallback** (sans-serif, serif)
4. **Probar en móvil** - algunas fuentes se ven mal

## 🚫 Evitar

- **Comic Sans** (nunca)
- **Muchas fuentes diferentes**
- **Fuentes muy decorativas** para texto largo
- **Cargar todos los pesos** (hace lento el sitio)