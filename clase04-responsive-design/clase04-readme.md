# 📱 CLASE 4: Responsive Design + Efectos Básicos - Plan del Profesor

## 🎯 Objetivos de la Clase
- Hacer sitios web que funcionen perfectamente en móviles, tablets y desktop
- Introducir media queries y mobile-first approach
- Agregar efectos hover, focus y transiciones básicas
- **CRÍTICO:** Que apliquen responsive + efectos a su proyecto personal durante la clase

## ⏰ Cronograma (3 horas)

### 🔍 Parte 1: Repaso y Problema Responsive (25 min)
- **Revisión de tareas CSS + Flexbox** (10 min)
- **Demo: ¿Cómo se ve tu sitio en móvil?** (10 min)
- **Por qué necesitamos responsive design** (5 min)

### 📱 Parte 2: Responsive Fundamentals (70 min)
- **Mobile-first approach y viewport** (15 min)
- **Media queries básicas** (20 min)
- **Navegación responsive con Flexbox** (20 min)
- **Imágenes responsive** (15 min)

### ✨ Parte 3: Efectos Básicos (45 min)
- **Efectos hover en enlaces y botones** (15 min)
- **Focus mejorado en formularios** (15 min)
- **Transiciones suaves** (15 min)

### 🛠️ Parte 4: Aplicación al Proyecto (30 min)
- **Hacer su proyecto completamente responsive** (20 min)
- **Agregar efectos básicos** (10 min)

### 🎯 Parte 5: Testing y Cierre (10 min)
- **Testing en dispositivos reales**
- **Tarea para Clase 5**

---

## 🔍 Repaso y Problema Responsive (25 min)

### Revisión de Tareas (10 min)

**Verificar que TODOS tengan:**
- [ ] CSS aplicado a las 4 páginas
- [ ] Navegación estilizada con Flexbox
- [ ] Formularios con diseño
- [ ] Paleta de colores consistente
- [ ] Proyecto funcional en desktop

**Mostrar 2-3 proyectos** para celebrar progreso.

**Problemas comunes a resolver:**
- CSS no vinculado correctamente
- Flexbox navigation que no funciona
- Inconsistencias de colores
- Formularios sin estilo

### Demo: ¿Cómo se ve en móvil? (10 min)

**Abrir DevTools y mostrar:**
1. Proyecto de estudiante en desktop (se ve bien)
2. Cambiar a vista móvil → ¡HORROR!
3. Mostrar problemas típicos:
   - Texto microscópico
   - Navegación rota
   - Contenido que se sale
   - Botones imposibles de tocar

**Usar ejemplo:** `ejemplos/problema-sin-responsive.html`

### Por qué Responsive (5 min)

**Estadísticas clave:**
- 60% del tráfico web es móvil
- Google prioriza sitios mobile-friendly
- Usuarios abandonan sitios que no funcionan en móvil

---

## 📱 Responsive Fundamentals (70 min)

### Mobile-First y Viewport (15 min)

**Conceptos clave:**
- Mobile-first: diseñar primero para móvil
- Viewport meta tag es OBLIGATORIO
- Progressive enhancement

**Demo:** `ejemplos/viewport-comparacion.html`
- Mostrar diferencia con/sin viewport tag
- Explicar cada parte del meta tag

**Práctica inmediata:**
- Todos agregan viewport a su proyecto
- Verificar que lo tengan en todas las páginas

### Media Queries Básicas (20 min)

**Estructura de media queries:**
```css
/* Mobile: estilos base (sin media query) */
/* Tablet: 768px+ */
/* Desktop: 1024px+ */
```

**Demo:** `ejemplos/media-queries-basicas.html`
- Mostrar cómo cambian los estilos
- Usar DevTools para ver breakpoints
- Explicar mobile-first vs desktop-first

**Conceptos:**
- min-width vs max-width
- Breakpoints estándar
- Testing en DevTools

### Navegación Responsive (20 min)

**Problema:** La navegación Flexbox actual no funciona bien en móvil

**Solución:** Adaptar con media queries

**Demo:** `ejemplos/navegacion-responsive.html`
- Móvil: navegación vertical centrada
- Desktop: navegación horizontal

**Práctica guiada:**
- Todos aplican a su navegación
- Testing inmediato en DevTools
- Resolver problemas individuales

### Imágenes Responsive (15 min)

**Problema:** Imágenes que se salen del contenedor

**Solución:** 
```css
img {
    max-width: 100%;
    height: auto;
}
```

**Demo:** `ejemplos/imagenes-responsive.html`
- Mostrar img que se desborda
- Aplicar solución
- Diferentes técnicas (object-fit, etc.)

---

## ✨ Efectos Básicos (45 min)

### Efectos Hover (15 min)

**¿Por qué hover?**
- Feedback visual inmediato
- Indica elementos interactivos
- Mejora UX significativamente

**Demo:** `ejemplos/efectos-hover.html`
- Botones con hover suave
- Enlaces con transición
- Cards con elevación

**Conceptos:**
- transition para suavidad
- transform básico (translateY, scale)
- box-shadow para depth

### Focus Mejorado (15 min)

**¿Por qué focus?**
- Accesibilidad crítica
- Navegación por teclado
- Mejor UX en formularios

**Demo:** `ejemplos/focus-formularios.html`
- Input con focus elegante
- Comparar con focus por defecto
- Diferentes estados de input

**Técnicas:**
- Remover outline default
- Agregar border-color change
- box-shadow sutil

### Transiciones Suaves (15 min)

**¿Qué son las transiciones?**
- Suavizan cambios de CSS
- Mejoran percepción de calidad
- Fáciles de implementar

**Demo:** `ejemplos/transiciones-basicas.html`
- Comparar con/sin transiciones
- Diferentes timing functions
- Qué propiedades animar

**Mejores prácticas:**
- 0.3s para la mayoría
- ease para natural feeling
- No animar todo

---

## 🛠️ Aplicación al Proyecto (30 min)

### Responsive Complete (20 min)

**Checklist a completar:**
- [ ] Viewport meta tag en todas las páginas
- [ ] Navegación responsive funcionando
- [ ] Imágenes que no se desborden
- [ ] Contenido legible en móvil
- [ ] Testing en DevTools OK

**Metodología:**
1. Página por página
2. Mobile → Tablet → Desktop
3. Testing inmediato
4. Resolver problemas individuales

### Efectos Básicos (10 min)

**Agregar efectos esenciales:**
- [ ] Hover en navegación
- [ ] Hover en botones
- [ ] Focus en formularios
- [ ] Una transición suave mínimo

**Prioridad:** Funcionalidad sobre decoración

---

## 🧪 Testing y Cierre (10 min)

### Testing en Dispositivos Reales

**Métodos:**
1. **DevTools responsive mode**
2. **Redimensionar ventana manualmente**
3. **Móvil real** (si tienen Live Server)

**Quw testeamos:**
- Navegación funciona
- Texto se lee bien
- Botones se pueden tocar
- No hay scroll horizontal

