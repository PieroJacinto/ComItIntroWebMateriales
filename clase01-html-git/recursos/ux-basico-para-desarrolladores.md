# 🎨 UX Básico para Desarrolladores Web

## 🎯 ¿Por qué necesito saber esto?

Como desarrollador web, no solo escribes código - **creates experiencias**. Un sitio web técnicamente perfecto pero confuso para el usuario es un sitio web que falla.

Esta guía te dará las bases para que tu código no solo funcione, sino que **la gente quiera usarlo**.

---

## 🧠 ¿Qué es UX (User Experience)?

**UX = User Experience = Experiencia del Usuario**

Es **cómo se siente una persona** cuando usa tu sitio web:
- ¿Encuentra lo que busca rápidamente?
- ¿Se siente confundido o seguro?
- ¿Quiere volver a usarlo?

### Ejemplo simple:
- **Mal UX:** Botón de "Contacto" escondido en letra pequeña al final
- **Buen UX:** Botón de "Contacto" visible, claro, donde la gente espera encontrarlo

---

## 🎯 Principios Básicos (Los 5 Mandamientos)

### 1. **Claridad antes que creatividad**
- La gente debe entender **inmediatamente** qué puede hacer en tu sitio
- Si dudan más de 3 segundos, perdiste
- **Ejemplo:** Botón que dice "Enviar" vs "Disparar tu mensaje al ciberespacio"

### 2. **Consistencia es clave**
- Mismo estilo de botones en todo el sitio
- Misma navegación en todas las páginas
- Mismos colores para las mismas funciones
- **Ejemplo:** Si "Contacto" está arriba a la derecha en una página, debe estar ahí en todas

### 3. **Menos es más (Simplicidad)**
- No pongas 15 opciones si con 3 alcanza
- Espacios en blanco son tus amigos
- Una cosa importante por pantalla
- **Ejemplo:** Google.com - solo una caja de búsqueda

### 4. **La gente escanea, no lee**
- Usa títulos claros y descriptivos
- Párrafos cortos (2-3 líneas máximo)
- Listas con bullets
- **Palabras importantes en negrita**

### 5. **Móvil primero**
- 70% de la gente usa el celular
- Botones grandes para dedos
- Texto legible sin zoom
- Navegación simple

---

## 🎨 Diseño Visual Básico

### **Colores que funcionan:**

**✅ Combinaciones seguras:**
- **Profesional:** Azul oscuro + blanco + gris claro
- **Moderno:** Negro + blanco + un color vibrante (verde, naranja)
- **Amigable:** Azul claro + blanco + gris oscuro
- **Creativo:** Púrpura + blanco + gris

**❌ Evitar:**
- Más de 3 colores principales
- Rojo y verde juntos (problemas de daltonismo)
- Colores muy brillantes como fondo
- Texto claro sobre fondo claro

### **Tipografías:**

**✅ Fuentes que siempre funcionan:**
- **Para títulos:** Montserrat, Roboto, Open Sans
- **Para texto:** Arial, Helvetica, Georgia
- **Regla:** Máximo 2 fuentes por sitio

**❌ Evitar:**
- Comic Sans (nunca, jamás)
- Fuentes muy decorativas para texto largo
- Texto muy pequeño (menos de 16px)
- Mezclar muchas fuentes

---

## 📱 Estructura de Página Que Funciona

### **Header (parte de arriba):**
```
[Logo]                    [Navegación]
```
- Logo a la izquierda
- Navegación a la derecha
- Máximo 5 opciones en el menú

### **Cuerpo principal:**
```
[Título grande y claro]
[Subtítulo explicativo]
[Contenido principal]
[Llamada a la acción]
```

### **Footer (parte de abajo):**
```
[Contacto] [Redes sociales] [Copyright]
```

---

## 🎯 Errores Comunes de Principiantes

### ❌ **Error 1: Demasiada información**
```html
<!-- MAL -->
<h1>Bienvenido a mi increíble sitio web personal donde encontrarás información sobre mi vida, mis proyectos, mis gustos, mi experiencia profesional y muchas cosas más que seguramente te van a interesar</h1>

<!-- BIEN -->
<h1>Hola, soy María</h1>
<p>Desarrolladora web y diseñadora</p>
```

### ❌ **Error 2: Navegación confusa**
```html
<!-- MAL -->
<nav>
    <a href="info.html">Info</a>
    <a href="yo.html">Yo</a>
    <a href="cosas.html">Cosas</a>
    <a href="hablar.html">Hablar</a>
</nav>

<!-- BIEN -->
<nav>
    <a href="index.html">Inicio</a>
    <a href="sobre-mi.html">Sobre Mí</a>
    <a href="proyectos.html">Proyectos</a>
    <a href="contacto.html">Contacto</a>
</nav>
```

### ❌ **Error 3: Botones que no parecen botones**
```css
/* MAL */
.boton {
    color: blue;
    text-decoration: underline;
}

/* BIEN */
.boton {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
}
```

---

## 🔍 ¿Cómo Piensan los Usuarios?

### **Los primeros 5 segundos:**
1. "¿Qué es este sitio?"
2. "¿Qué puedo hacer aquí?"
3. "¿Dónde está lo que busco?"
4. "¿Es confiable?"
5. "¿Vale la pena mi tiempo?"

### **Patrón de lectura en F:**
Los usuarios leen así:
```
━━━━━━━━━━━━━ (línea horizontal arriba)
━━━━━━━       (línea horizontal media)
┃             (línea vertical izquierda)
┃
┃
```

**¿Qué significa?**
- La info más importante va **arriba y a la izquierda**
- Los títulos y palabras clave van al **inicio de las líneas**
- El lado derecho se ve menos

---

## 🎨 Trucos de Diseño Instantáneo

### **1. Espaciado (muy importante):**
- Deja espacio entre elementos
- No pegues todo junto
- Usa márgenes y padding generosamente

### **2. Alineación:**
- Alinea elementos entre sí
- No pongas texto centrado si no es necesario
- Crea líneas invisibles de orden

### **3. Contraste:**
- Títulos más grandes y oscuros
- Texto normal más claro
- Botones importantes más llamativos

### **4. Jerarquía visual:**
```css
h1 { font-size: 2.5rem; color: #333; }      /* Más importante */
h2 { font-size: 2rem; color: #555; }        /* Importante */
p { font-size: 1rem; color: #777; }         /* Normal */
```

---

## 📋 Checklist de UX para tu Proyecto

### **Antes de empezar a diseñar:**
- [ ] ¿Quién va a usar mi sitio?
- [ ] ¿Qué quieren lograr?
- [ ] ¿Cuál es la acción más importante que quiero que hagan?

### **Mientras diseñas:**
- [ ] ¿Se entiende inmediatamente qué es mi sitio?
- [ ] ¿La navegación es obvia?
- [ ] ¿Los botones parecen botones?
- [ ] ¿El texto es fácil de leer?
- [ ] ¿Funciona en móvil?

### **Cuando termines:**
- [ ] Muéstraselo a alguien que no lo conoce
- [ ] ¿Puede navegar sin que le expliques?
- [ ] ¿Encuentra la información rápido?
- [ ] ¿Se ve bien en su teléfono?

---

## 🌟 Ejemplos de Sitios con Buen UX

### **Para inspirarte (estudia estos):**

**📱 Simplicidad:**
- **Apple.com** - Limpio, claro, una cosa por pantalla
- **Google.com** - Función obvia, diseño minimalista

**💼 Profesional:**
- **Stripe.com** - Explicación clara, diseño confiable
- **Airbnb.com** - Fácil de usar, bonito, funcional

**🎨 Creativo pero usable:**
- **Spotify.com** - Colorido pero organizado
- **GitHub.com** - Técnico pero accesible

### **¿Qué estudiar en estos sitios?**
1. ¿Cómo organizan la información?
2. ¿Qué colores usan?
3. ¿Cómo son sus botones?
4. ¿Dónde ponen la navegación?
5. ¿Cómo se ven en móvil?

---

## 🧪 Ejercicio Práctico

### **Antes de la próxima clase:**

1. **Mira 3 sitios web** que uses frecuentemente
2. **Para cada uno, anota:**
   - ¿Qué te gusta del diseño?
   - ¿Qué te confunde?
   - ¿Cómo navegan?
   - ¿Qué colores usan?

3. **Piensa en tu proyecto:**
   - ¿Qué sitios te gustaría que se pareciera al tuyo?
   - ¿Qué 3 colores vas a usar?
   - ¿Qué quieres que la gente haga en tu sitio?

---

## 💡 Reglas de Oro para Recordar

1. **Si tienes que explicar cómo se usa, está mal diseñado**
2. **El mejor diseño es invisible** - la gente se enfoca en el contenido, no en el diseño
3. **Diseña para tu abuela** - si ella lo puede usar, cualquiera puede
4. **En la duda, copia lo que funciona** - no reinventes la rueda
5. **Testa con gente real** - tu opinión no es la de tus usuarios

---

## 🎯 Para la Próxima Clase

Con estos conceptos en mente, cuando veamos CSS vas a entender **por qué** hacemos las cosas de cierta manera:

- ¿Por qué ciertos colores?
- ¿Por qué ese espaciado?
- ¿Por qué esa tipografía?
- ¿Por qué esa estructura?

**No solo vas a hacer que funcione - vas a hacer que la gente lo quiera usar.**

---

## 🔗 Recursos para Seguir Aprendiendo

**📚 Lectura extra (opcional):**
- **Don't Make Me Think** - Steve Krug (libro clásico)
- **Material Design Guidelines** - Google
- **Apple Human Interface Guidelines**

**🎨 Inspiración de diseño:**
- **Dribbble.com** - Diseños creativos
- **Behance.com** - Portfolios profesionales
- **UI Movement** - Interfaces que funcionan

**🎨 Herramientas de colores:**
- **Coolors.co** - Paletas de colores
- **Adobe Color** - Combinaciones profesionales

---

*¡Ahora a aplicar esto en tu proyecto! En la próxima clase vamos a darle vida con CSS. 🚀*