# ✅ Checklist Flexbox - Clase 3

## 📋 Verificación antes de entregar

### 🧭 Navegación con Flexbox

**Verifica en tu repositorio personal:**

- [ ] **Header/navegación usa `display: flex`**
  - [ ] Elementos de navegación organizados horizontalmente
  - [ ] Espaciado uniforme con `gap` (no margin individual)
  - [ ] Enlaces centrados o distribuidos apropiadamente

- [ ] **Si tienes logo + navegación:**
  - [ ] Layout con `justify-content: space-between`
  - [ ] Logo a la izquierda, navegación a la derecha
  - [ ] Alineación vertical correcta con `align-items: center`

- [ ] **Funcionalidad:**
  - [ ] Navegación funciona en todas las páginas (index, sobre-mi, proyectos, contacto)
  - [ ] Links llevan a las páginas correctas
  - [ ] Se ve profesional y organizada

### 🎯 Layout Principal Mejorado

**Verifica secciones de tu sitio:**

- [ ] **Al menos 2 secciones usando Flexbox:**
  - [ ] Sección principal/hero con centrado apropiado
  - [ ] Sección "sobre mí" o similar con layout imagen + texto
  - [ ] O cualquier otra sección que mejore con Flexbox

- [ ] **Layout mixto (imagen + texto):**
  - [ ] Imagen con tamaño fijo: `flex: 0 0 40%` (o similar)
  - [ ] Contenido flexible: `flex: 1`
  - [ ] Espaciado con `gap: 2rem` (o similar)
  - [ ] Alineación vertical apropiada

- [ ] **Centrado de elementos:**
  - [ ] Títulos o elementos importantes centrados horizontalmente
  - [ ] Uso correcto de `justify-content` y `align-items`

### 🎴 Cards o Elementos Repetitivos

**Verifica organización de contenido:**

- [ ] **Al menos una sección con cards:**
  - [ ] Servicios, proyectos, artículos, o elementos similares
  - [ ] Organizados con `display: flex`
  - [ ] Espaciado uniforme con `gap`

- [ ] **Tipo de layout elegido:**
  - [ ] **3 columnas exactas:** `flex: 1` en cada card
  - [ ] **O tamaños diferentes:** `flex: 1`, `flex: 2`, etc. para destacar contenido
  - [ ] **O layout profesional:** Cards se ven organizadas y espaciadas

- [ ] **Estructura de cards:**
  - [ ] Contenido bien organizado (título, descripción, precio/botón)
  - [ ] Padding/espaciado interno consistente
  - [ ] Se ven profesionales y atractivas

### 🔧 Técnica CSS Correcta

**Revisa tu código CSS:**

- [ ] **`display: flex` aplicado en contenedores padre:**
  - [ ] NO en los elementos individuales (flex items)
  - [ ] En el `<ul>` de navegación, no en los `<li>`
  - [ ] En el contenedor de cards, no en cada card individual

- [ ] **Propiedades Flexbox bien usadas:**
  - [ ] `justify-content` para distribución horizontal
  - [ ] `align-items` para alineación vertical
  - [ ] `gap` en lugar de margin para espaciado
  - [ ] `flex: 1` o valores específicos cuando necesarios

- [ ] **Código limpio:**
  - [ ] Una propiedad CSS por línea
  - [ ] Comentarios explicativos donde sea útil
  - [ ] Sin propiedades CSS redundantes o innecesarias

### 📁 Estructura y Git

**Verifica tu repositorio personal:**

- [ ] **Archivos organizados:**
  - [ ] CSS en archivo `css/styles.css`
  - [ ] Todas las páginas vinculan correctamente al CSS
  - [ ] No hay errores de sintaxis en HTML/CSS

- [ ] **Commits realizados:**
  - [ ] Mínimo 3 commits relacionados con Flexbox
  - [ ] Mensajes descriptivos (ej: "Transformar navegación con Flexbox")
  - [ ] Último commit subido a GitHub con `git push`

- [ ] **Contenido actualizado:**
  - [ ] README.md de tu proyecto refleja el progreso
  - [ ] Todas las páginas cargan correctamente
  - [ ] Enlaces entre páginas funcionan

### 🧪 Testing y Calidad

**Prueba tu sitio:**

- [ ] **Funcionamiento básico:**
  - [ ] Abrir `index.html` en Chrome
  - [ ] Navegar entre todas las páginas usando los enlaces
  - [ ] Verificar que todo el CSS se aplica correctamente

- [ ] **Apariencia visual:**
  - [ ] Layout se ve organizado y profesional
  - [ ] Elementos alineados correctamente
  - [ ] Espaciado uniforme y consistente
  - [ ] Colores y tipografía consistentes con clases anteriores

- [ ] **Flexbox funcionando:**
  - [ ] Navegación horizontal y organizada
  - [ ] Cards o elementos organizados en filas/columnas apropiadas
  - [ ] Centrado funcionando donde corresponde

---

## 🎯 Ejemplos de Verificación Rápida

### ✅ Navegación Correcta:
```css
/* DEBE verse así en tu CSS */
nav ul {
    display: flex;
    justify-content: center;
    gap: 2rem;
    list-style: none;
}
```

### ✅ Layout Mixto Correcto:
```css
/* DEBE verse así en tu CSS */
.seccion-sobre-mi {
    display: flex;
    gap: 2rem;
    align-items: center;
}

.imagen {
    flex: 0 0 40%;
}

.contenido {
    flex: 1;
}
```

### ✅ Cards Correctas:
```css
/* DEBE verse así en tu CSS */
.cards-container {
    display: flex;
    gap: 2rem;
}

.card {
    flex: 1; /* Para 3 columnas iguales */
    /* O flex: 2; para destacar una card */
}
```

---

## 📊 Autoevaluación

**¿Cuántos puntos tienes marcados?**

- **25-30 ✅:** ¡Excelente! Tu proyecto usa Flexbox de manera profesional
- **20-24 ✅:** Muy bien, revisa los puntos faltantes menores
- **15-19 ✅:** Buen progreso, necesitas completar algunos aspectos técnicos
- **Menos de 15 ✅:** Revisa los ejercicios y ejemplos, pide ayuda en clase

---

## 🆘 Solución de Problemas Comunes

### ❌ "Los elementos no se alinean horizontalmente"
**Verificar:**
- [ ] ¿Aplicaste `display: flex` al contenedor padre?
- [ ] ¿Estás poniendo `display: flex` en el elemento correcto?

### ❌ "No se centra verticalmente"
**Verificar:**
- [ ] ¿El contenedor tiene altura definida? (`height` o `min-height`)
- [ ] ¿Usas `align-items: center` además de `justify-content: center`?

### ❌ "Las cards no se ven organizadas"
**Verificar:**
- [ ] ¿El contenedor de las cards tiene `display: flex`?
- [ ] ¿Cada card individual tiene `flex: 1` o valor apropiado?
- [ ] ¿Usas `gap` para espaciado uniforme?

### ❌ "El espaciado se ve desigual"
**Verificar:**
- [ ] ¿Usas `gap` en lugar de `margin` individual?
- [ ] ¿Tienes `margin: 0` en elementos que podrían tener margin por defecto?

---

## 🎯 Señales de Éxito

**Sabrás que lo hiciste bien cuando:**

✅ Tu navegación se ve moderna y organizada horizontalmente
✅ El contenido principal aprovecha mejor el espacio disponible  
✅ Las cards o elementos repetitivos se ven profesionales y organizadas
✅ El espaciado es uniforme y consistente en todo el sitio
✅ Tu código CSS usa Flexbox de manera limpia y eficiente
✅ Te sientes más seguro organizando elementos en tu página

---

## 🚀 Preparación para Clase 4

**Si completaste todo el checklist:**

- [ ] Tu sitio está listo para hacerlo responsive
- [ ] Tienes una base sólida de Flexbox
- [ ] Entiendes cómo organizar elementos modernos
- [ ] Estás preparado para media queries y mobile-first

**En la próxima clase veremos:**
- Media queries para diferentes dispositivos
- Mobile-first approach  
- Breakpoints estratégicos
- Optimización para pantallas pequeñas

¡Tu proyecto va tomando forma profesional! 🎉

---

## 📞 Ayuda

**Si necesitas ayuda:**
1. Revisa los ejemplos en `ejemplos/cards-flexbox.html`
2. Consulta el `recursos/flexbox-cheatsheet.md`
3. Practica con los ejercicios si no terminaste
4. Trae preguntas específicas a la próxima clase

**Fecha límite:** [Completar antes de Clase 4]
**Entrega:** Link a tu repositorio personal en GitHub