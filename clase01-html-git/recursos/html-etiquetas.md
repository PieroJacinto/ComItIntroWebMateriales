# HTML - Etiquetas que Usamos

🎯 **Solo las etiquetas esenciales para empezar**

## 📋 Estructura básica

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título de tu página</title>
</head>
<body>
    <!-- Tu contenido aquí -->
</body>
</html>
```

## 🏗️ Estructura de página

```html
<header>
    <!-- Título del sitio y navegación -->
</header>

<main>
    <!-- Contenido principal -->
</main>

<footer>
    <!-- Pie de página -->
</footer>
```

## 📝 Títulos y texto

```html
<h1>Título principal</h1>
<h2>Título secundario</h2>
<h3>Subtítulo</h3>

<p>Párrafo de texto</p>

<strong>Texto importante</strong>
<em>Texto enfatizado</em>
```

## 📋 Listas

```html
<ul>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
    <li>Elemento 3</li>
</ul>
```

## 🔗 Enlaces e imágenes

```html
<a href="https://google.com">Enlace a Google</a>
<a href="otra-pagina.html">Enlace a otra página</a>

<img src="mi-imagen.jpg" alt="Descripción de la imagen">
```

## 📝 Navegación típica

```html
<nav>
    <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="sobre-mi.html">Sobre Mí</a></li>
        <li><a href="proyectos.html">Proyectos</a></li>
        <li><a href="contacto.html">Contacto</a></li>
    </ul>
</nav>
```

## 📋 Formulario básico

```html
<form>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="mensaje">Mensaje:</label>
    <textarea id="mensaje" name="mensaje" rows="5" required></textarea>
    
    <button type="submit">Enviar</button>
</form>
```

## 💡 Consejos importantes

- Siempre pon `alt` en las imágenes
- Conecta `label` con `input` usando `for` e `id`
- Solo un `h1` por página
- Cierra todas las etiquetas
- Usa comillas en los atributos