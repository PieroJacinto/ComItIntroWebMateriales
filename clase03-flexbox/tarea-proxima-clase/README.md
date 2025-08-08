# 📝 Tarea Clase 3: Transformar tu Proyecto con Flexbox

## 🎯 Objetivo Principal
Aplicar Flexbox a tu proyecto personal para crear layouts modernos y flexibles en navegación, contenido principal y elementos repetitivos.

## ⏰ Fecha de Entrega
**Antes de la Clase 4** (Responsive Design)

---

## 📋 Lo que Debes Entregar

### ✅ 1. Navegación con Flexbox
- [ ] Header/navegación convertida completamente a Flexbox
- [ ] Si tienes logo, debe estar bien posicionado con la navegación
- [ ] Navegación horizontal con espaciado uniforme
- [ ] Enlaces centrados o distribuidos según tu diseño

### ✅ 2. Layout Principal Mejorado  
- [ ] Página principal con secciones organizadas usando Flexbox
- [ ] Al menos una sección con imagen + texto usando layout mixto
- [ ] Contenido centrado apropiadamente (horizontal y/o vertical)
- [ ] Mejor aprovechamiento del espacio disponible

### ✅ 3. Cards o Elementos Repetitivos
- [ ] Al menos una sección con cards (servicios, proyectos, artículos, etc.)
- [ ] Cards organizadas con Flexbox (3 columnas exactas o tamaños diferentes)
- [ ] Espaciado uniforme usando `gap`
- [ ] Cards se ven organizadas y profesionales

### ✅ 4. Aplicación Técnica Correcta
- [ ] Uso correcto de `display: flex` en contenedores padre
- [ ] Aplicación apropiada de `justify-content` y `align-items`
- [ ] Uso de `gap` en lugar de `margin` para espaciado
- [ ] Código limpio y bien comentado

### ✅ 5. Git y Documentación
- [ ] Mínimo 3 commits relacionados con Flexbox
- [ ] Mensajes de commit descriptivos
- [ ] README.md actualizado con progreso de la clase
- [ ] Todo subido a GitHub

---

## 🛠️ Guía Paso a Paso

### Paso 1: Preparar el Entorno (10 min)
```bash
# 1. Abre tu proyecto
cd tu-proyecto

# 2. Verifica el estado
git status

# 3. Crea una nueva rama (opcional)
git checkout -b flexbox-improvements
```

### Paso 2: Transformar la Navegación (30 min)

#### A. Encuentra tu navegación actual
Busca en tu CSS algo como:
```css
nav ul {
    list-style: none;
    text-align: center;
}

nav li {
    display: inline-block;
    margin: 0 1rem;
}
```

#### B. Reemplaza con Flexbox
```css
/* Navegación horizontal básica */
nav ul {
    display: flex;
    justify-content: center;
    gap: 2rem;
    list-style: none;
}

/* Si tienes header con logo */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
}

nav ul {
    display: flex;
    gap: 2rem;
    list-style: none;
}
```

#### C. Prueba y ajusta
- [ ] Verifica que se vea bien
- [ ] Ajusta `justify-content` según tu diseño preferido
- [ ] Asegúrate de que los enlaces se vean organizados

```bash
git add .
git commit -m "Transformar navegación con Flexbox"
```

### Paso 3: Mejorar Layout Principal (45 min)

#### A. Identifica secciones para mejorar
Busca contenido que podrías organizar mejor:
- Sección "Sobre mí" con foto + texto
- Presentación principal con imagen
- Cualquier sección con múltiples elementos

#### B. Aplica layouts con Flexbox

**Para sección imagen + texto:**
```css
.seccion-sobre-mi {
    display: flex;
    gap: 3rem;
    align-items: center;
    margin: 3rem 0;
}

.seccion-imagen {
    flex: 0 0 40%; /* Imagen 40% fijo */
}

.seccion-contenido {
    flex: 1; /* Texto toma resto del espacio */
}

/* Alternar imagen izquierda/derecha */
.seccion:nth-child(even) {
    flex-direction: row-reverse;
}
```

**Para centrar contenido principal:**
```css
.hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
    text-align: center;
}
```

#### C. Responsive básico
```css
@media (max-width: 768px) {
    .seccion-sobre-mi {
        flex-direction: column;
    }
}
```

```bash
git add .
git commit -m "Mejorar layout principal con Flexbox"
```

### Paso 4: Crear Sistema de Cards (45 min)

#### A. Identifica contenido para cards
- Servicios que ofreces
- Proyectos realizados o planeados
- Artículos del blog
- Información de contacto
- Cualquier lista de elementos similares

#### B. Estructura HTML
```html
<section class="mis-servicios">
    <h2>Mis Servicios</h2>
    <div class="cards-container">
        <div class="card">
            <h3>Servicio 1</h3>
            <p>Descripción del servicio...</p>
            <div class="precio">$100</div>
            <a href="#" class="btn">Ver Más</a>
        </div>
        <div class="card">
            <h3>Servicio 2</h3>
            <p>Descripción del servicio...</p>
            <div class="precio">$200</div>
            <a href="#" class="btn">Ver Más</a>
        </div>
        <!-- Más cards... -->
    </div>
</section>
```

#### D. Variaciones según tu proyecto

**Para 3 columnas exactas:**
```css
.cards-3-columnas {
    display: flex;
    gap: 2rem;
}

.card {
    flex: 1; /* Cada una toma 1/3 */
}
```

**Para destacar una card:**
```css
.card-destacada {
    flex: 2; /* Toma doble espacio */
    transform: scale(1.05);
}
```

```bash
git add .
git commit -m "Implementar sistema de cards con Flexbox"
```

### Paso 5: Pulir y Testear (30 min)

#### A. Prueba en diferentes aspectos
- [ ] Desktop: ¿Se ve profesional?
- [ ] ¿Las cards se ven organizadas?
- [ ] ¿Todo es legible y accesible?

#### B. Ajustes finales
- [ ] Espaciado consistente en todas las secciones
- [ ] Alineación vertical apropiada
- [ ] Hover effects funcionando
- [ ] Navegación organizada con Flexbox

#### C. Validar HTML/CSS
- [ ] No hay errores de sintaxis
- [ ] Todas las páginas cargan correctamente
- [ ] Enlaces funcionan

```bash
git add .
git commit -m "Ajustes finales y optimización Flexbox"
git push
```

---

## 🎯 Criterios de Evaluación

| Aspecto | Excelente (4) | Bueno (3) | Suficiente (2) | Insuficiente (1) |
|---------|---------------|-----------|----------------|------------------|
| **Navegación** | Nav moderna, flexible, responsive | Nav con Flexbox básico funcionando | Nav convertida a Flexbox | Nav sin Flexbox o no funciona |
| **Layout Principal** | Layout complejo con múltiples usos de Flexbox | Layout básico mejorado con Flexbox | Algunos elementos usando Flexbox | Sin mejoras significativas |
| **Cards/Elementos** | Cards perfectamente organizadas y responsive | Cards con Flexbox básico | Algunos elementos en cards | Sin organización en cards |
| **Técnica** | Uso avanzado y eficiente de propiedades Flexbox | Buen uso de propiedades principales | Flexbox básico correcto | Aplicación incorrecta |
| **Responsive** | Se ve bien y organizado | Layout básico funcionando | Adaptación parcial | Desorganizado |
| **Código** | Código limpio, comentado, bien estructurado | Código ordenado y funcional | Código funcional básico | Código desordenado o problemático |

---

## 📸 Ejemplos de Resultados Esperados

### Navegación Antes vs Después
```css
/* ANTES */
nav li {
    display: inline-block;
    margin: 0 1rem;
}

/* DESPUÉS */
nav ul {
    display: flex;
    justify-content: center;
    gap: 2rem;
}
```

### Layout Antes vs Después
```css
/* ANTES */
.contenido {
    margin: 0 auto;
    max-width: 800px;
}

/* DESPUÉS */
.seccion {
    display: flex;
    gap: 2rem;
    align-items: center;
}
```

---

## 🆘 Ayuda y Troubleshooting

### Problema: "Los elementos no se alinean"
**Solución:** Verifica que tienes `display: flex` en el contenedor padre, no en los items.

### Problema: "No se centra verticalmente"
**Solución:** Asegúrate de definir una altura:
```css
.contenedor {
    display: flex;
    align-items: center;
    min-height: 400px; /* ¡Importante! */
}
```

### Problema: "Se ve mal en pantallas diferentes"
**Solución:** Por ahora enfócate en desktop. En la próxima clase veremos responsive design completo.

### Problema: "Las cards son muy anchas"
**Solución:** Controla el ancho máximo:
```css
.card {
    flex: 0 1 300px;
    max-width: 350px;
}
```

---

## 📚 Recursos de Apoyo

- **Flexbox Cheatsheet:** `recursos/flexbox-cheatsheet.md`
- **Ejemplos de clase:** `ejemplos/cards-flexbox.html`
- **Ejercicios prácticos:** `ejercicios/ejercicio-navegacion.html`
- **Flexbox Froggy:** https://flexboxfroggy.com/ (para practicar)

---

## 🎯 Checklist Final

Antes de entregar, verifica que tienes:

### Navegación
- [ ] `display: flex` aplicado al contenedor de navegación
- [ ] Enlaces organizados horizontalmente
- [ ] Espaciado uniforme con `gap`
- [ ] Se ve bien en desktop principalmente
- [ ] Cards organizadas y espaciadas uniformemente

### Layout Principal  
- [ ] Al menos 2 secciones usando Flexbox
- [ ] Buen uso de `justify-content` y `align-items`
- [ ] Contenido bien distribuido y centrado

### Cards
- [ ] Al menos una sección con cards
- [ ] Cards organizadas que se ven profesionales
- [ ] Hover effects funcionando
- [ ] Contenido bien organizado

### Código
- [ ] CSS limpio y comentado
- [ ] No hay errores de sintaxis
- [ ] Commits descriptivos realizados
- [ ] Todo funciona en GitHub

### Testing
- [ ] Probado en Chrome desktop
- [ ] Se ve organizado y profesional
- [ ] Todas las páginas cargan correctamente
- [ ] Navegación funciona entre páginas

---

## 🎉 ¡Estás listo para la Clase 4!

Con Flexbox dominado, en la próxima clase veremos:
- **Media queries** para responsive design preciso
- **Mobile-first approach**
- **Breakpoints estratégicos**
- **Optimización para diferentes dispositivos**

¡Tu proyecto se verá increíblemente profesional! 🚀

---

## 📞 Contacto

Si tienes dudas:
1. Revisa el cheatsheet y ejemplos
2. Practica con Flexbox Froggy
3. Consulta en el foro del curso
4. Ven con preguntas específicas a la próxima clase