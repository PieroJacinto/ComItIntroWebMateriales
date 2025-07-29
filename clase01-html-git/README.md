# 📚 CLASE 1: HTML Básico + Git

## 🎯 Objetivos de Hoy
- Crear tu primera página web con HTML básico
- Configurar Git y GitHub para trabajo profesional
- **IMPORTANTE:** Crear TU repositorio personal para tu proyecto
- Aprender el workflow que usarás todo el curso

## 📋 Agenda (3 horas)

### 🚀 Setup de Repositorios (30 min)
- Entender la estructura de trabajo
- Configurar herramientas
- Clonar este repositorio compartido

### 🏗️ HTML Básico (90 min)
- Estructura de una página web
- Etiquetas esenciales
- Navegación y enlaces
- Formularios básicos

### 🔧 Git y GitHub (75 min)
- Conceptos básicos
- Crear TU repositorio personal
- Workflow: add, commit, push

### 🎯 Tu Proyecto Personal (15 min)
- Elegir tipo de proyecto
- Estructurar tu sitio web

---

## 🚀 Setup de Repositorios

### Estructura de Trabajo

**Tienes DOS repositorios diferentes:**

#### 1. 📚 Este Repositorio (Material de Clase)
- **Nombre:** `intro-desarrollo-web-materiales`
- **Propósito:** Ejemplos, ejercicios y recursos
- **Tu acción:** `git pull` cada clase para actualizar
- **⚠️ IMPORTANTE:** NO puedes hacer push aquí

#### 2. 👨‍🎓 Tu Repositorio Personal (Tu Proyecto)
- **Nombre:** `mi-proyecto-web` (o el que elijas)
- **Propósito:** TU sitio web personal
- **Tu acción:** Crear, trabajar y hacer push
- **✅ IMPORTANTE:** Este ES tu proyecto, aquí trabajas

### Clonar Este Repositorio

```bash
# 1. Clonar el repositorio de materiales
git clone https://github.com/profesor/intro-desarrollo-web-materiales.git
cd intro-desarrollo-web-materiales

# 2. Verificar que tienes el material
ls clases/clase01-html-git/
```

---

## 🏗️ HTML Básico

### Estructura de una Página Web

Toda página web HTML tiene esta estructura básica:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título de tu página</title>
</head>
<body>
    <!-- Tu contenido va aquí -->
</body>
</html>
```

### Etiquetas Esenciales

#### Títulos y Párrafos
```html
<h1>Título Principal</h1>
<h2>Subtítulo</h2>
<h3>Título de Sección</h3>
<p>Este es un párrafo de texto normal.</p>
```

#### Navegación
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

#### Imágenes
```html
<img src="images/mi-foto.jpg" alt="Descripción de la imagen">
```

#### Listas
```html
<ul>
    <li>Primer elemento</li>
    <li>Segundo elemento</li>
    <li>Tercer elemento</li>
</ul>
```

### Estructura Semántica

Organiza tu contenido con etiquetas semánticas:

```html
<header>
    <h1>Mi Sitio Web</h1>
    <nav>
        <!-- navegación -->
    </nav>
</header>

<main>
    <section>
        <h2>Sobre mí</h2>
        <p>Contenido principal...</p>
    </section>
</main>

<footer>
    <p>&copy; 2025 Tu Nombre</p>
</footer>
```

### Formulario de Contacto

```html
<form>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="mensaje">Mensaje:</label>
    <textarea id="mensaje" name="mensaje" required></textarea>
    
    <button type="submit">Enviar</button>
</form>
```

---

## 🔧 Git y GitHub

### ¿Qué es Git y GitHub?

- **Git:** Sistema para guardar versiones de tu código
- **GitHub:** Plataforma online para tus proyectos
- **¿Por qué usarlo?** Backup automático + portfolio profesional

### Comandos Básicos de Git

```bash
# Ver estado de tus archivos
git status

# Agregar archivos para guardar
git add .

# Guardar cambios con mensaje
git commit -m "Descripción de los cambios"

# Subir a GitHub
git push

# Actualizar desde GitHub
git pull
```

### Crear Tu Repositorio Personal

**Sigue estos pasos para crear TU proyecto:**

#### 1. En GitHub:
- Ir a github.com
- Click "New repository"
- Nombre: `mi-proyecto-web` (o el que prefieras)
- ✅ Public
- ✅ Add README.md
- Click "Create repository"

#### 2. En tu computadora:
```bash
# Cambiar a carpeta padre (salir del repo de materiales)
cd ..

# Clonar TU repositorio personal
git clone https://github.com/tu-usuario/mi-proyecto-web.git
cd mi-proyecto-web
```

#### 3. Crear estructura básica:
```bash
touch index.html sobre-mi.html proyectos.html contacto.html
mkdir css js images
touch css/styles.css js/main.js
```

#### 4. Tu primer commit:
```bash
git add .
git commit -m "Crear estructura inicial del proyecto"
git push
```

### Workflow Diario

```bash
# PARA ACTUALIZAR MATERIALES DE CLASE:
cd intro-desarrollo-web-materiales
git pull

# PARA TRABAJAR EN TU PROYECTO:
cd ../mi-proyecto-web
# ... hacer cambios en tus archivos ...
git add .
git commit -m "Descripción clara de qué hiciste"
git push
```

---

## 🎯 Tu Proyecto Personal

### Tipos de Proyecto (Elige UNO)

#### 💼 Portfolio Personal
- **index.html:** Tu presentación profesional
- **sobre-mi.html:** Tu historia, estudios, experiencia
- **proyectos.html:** Tus trabajos (pueden ser ideas por ahora)
- **contacto.html:** Formulario + tus redes sociales

#### 📝 Blog Personal
- **index.html:** Últimos artículos
- **sobre-mi.html:** Quién eres, sobre qué escribes
- **articulos.html:** Lista de todos tus posts
- **contacto.html:** Para que te escriban lectores

#### 🍽️ Restaurante
- **index.html:** Historia del restaurante, ambiente
- **menu.html:** Platos organizados por categorías
- **galeria.html:** Fotos del lugar y la comida
- **contacto.html:** Ubicación, horarios, reservas

#### 🚀 Servicio/Emprendimiento
- **index.html:** Qué problema resuelves
- **servicios.html:** Tus servicios y precios
- **nosotros.html:** Tu experiencia, testimonios
- **contacto.html:** Formulario para cotizaciones

### Estructura Final Esperada

```
mi-proyecto-web/                    # TU repositorio personal
├── README.md
├── index.html
├── [segunda-pagina].html
├── [tercera-pagina].html
├── contacto.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── images/
    └── (tus imágenes)
```

---

## 🏃‍♂️ Práctica en Clase

### Ejercicio 1: Estructura Básica
1. Ve a `ejercicios/ejercicio-1.html`
2. Completa la estructura HTML básica
3. Agrega navegación y contenido

### Ejercicio 2: Formulario
1. Ve a `ejercicios/ejercicio-2.html`
2. Crea un formulario de contacto completo
3. Conecta labels con inputs

**💡 Nota:** Los ejercicios tienen comentarios `<!-- TODO: -->` que te indican qué completar.

---

## 📝 Tarea para Casa

### 🎯 Objetivo:
Completar las 4 páginas HTML de tu proyecto personal con contenido REAL.

### ✅ Checklist de Entrega:

#### Contenido:
- [ ] **index.html** - Página principal completa
- [ ] **[segunda-página]** - Mínimo 3 párrafos de contenido real
- [ ] **[tercera-página]** - Mínimo 3 elementos/proyectos/artículos
- [ ] **contacto.html** - Formulario completo funcionando

#### Técnico:
- [ ] Navegación funciona entre TODAS las páginas
- [ ] Estructura semántica: `<header>`, `<main>`, `<footer>`
- [ ] Al menos una imagen con `alt` descriptivo
- [ ] Formulario con `<label>` conectado a `<input>`
- [ ] **Sin Lorem Ipsum** - todo contenido es real y tuyo

#### Git:
- [ ] Mínimo 3 commits con mensajes descriptivos
- [ ] Todo subido a GitHub
- [ ] README.md actualizado con info de tu proyecto

### 📅 Fecha de Entrega:
**Antes de la Clase 2** - Enviar link a TU repositorio personal

### 💡 Tips:
- **Dos repositorios:** Materiales de clase + TU proyecto personal
- **Empieza simple:** No te preocupes por el diseño, solo estructura
- **Contenido real:** Escribe sobre ti, tus ideas, tus planes
- **Commits frecuentes:** Guarda cambios cada vez que completes algo

---

## 🆘 Solución de Problemas

### "No puedo hacer push al repositorio de materiales"
✅ **Correcto:** NO debes hacer push aquí. Solo `git pull` para actualizar.

### "Git no funciona"
```bash
# Verificar configuración
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

### "Enlaces no funcionan"
- Verificar que el nombre del archivo sea exacto
- Usar extensión `.html`
- Rutas relativas: `sobre-mi.html`, no `/sobre-mi.html`

### "No sé en qué repositorio estoy"
```bash
pwd                    # Ver carpeta actual
git remote -v          # Ver URL del repositorio
```

---

## 📚 Recursos Útiles

- **Ejemplos de la clase:** `ejemplos/`
- **HTML Cheatsheet:** `recursos/html-cheatsheet.md`
- **Git Básico:** `recursos/git-basico.md`
- **VS Code Tips:** `recursos/vs-code-setup.md`

---

## 🚀 ¿Qué Sigue?

**En la Clase 2 veremos:**
- CSS básico para darle estilo a TU proyecto
- Colores, tipografías y espaciado
- Hacer que tu sitio se vea profesional
- Aplicar todo directamente a TU sitio web

**¡Tu proyecto va a empezar a verse increíble!** 🎨

---

## ❓ Preguntas Frecuentes

**P: ¿Cuál es la diferencia entre los dos repositorios?**
R: Este repo tiene ejemplos y ejercicios (solo git pull). Tu repo personal es donde construyes TU proyecto (ahí haces push).

**P: ¿Puedo cambiar el tipo de proyecto después?**
R: Sí, pero es mejor decidirlo pronto para mantener consistencia.

**P: ¿Qué pasa si no tengo contenido real?**
R: Invéntalo basado en tus intereses reales. Es mejor contenido inventado pero coherente que Lorem Ipsum.

**P: ¿Dónde entrego la tarea?**
R: Envías el link a TU repositorio personal (mi-proyecto-web), no a este.

¡Estás dando tu primer paso hacia convertirte en desarrollador web! 🚀