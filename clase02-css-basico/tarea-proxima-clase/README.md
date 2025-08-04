# 📝 Tarea para la Próxima Clase

## 🎯 Objetivo
Aplicar CSS completo a tu proyecto usando los conceptos aprendidos y los colores que elegiste en tu análisis UX.

## 📋 Lo que tienes que entregar

### ✅ CSS Completo Aplicado:
1. **Archivo css/styles.css** creado y vinculado en todas las páginas
2. **Reset CSS** aplicado (*, margin: 0, padding: 0, box-sizing: border-box)
3. **Paleta de colores consistente** (tus 3 colores elegidos)
4. **Tipografía profesional** y legible
5. **Header y navegación** completamente estilizados
6. **Formularios** con estilos atractivos
7. **Footer** estilizado


### ✅ Requisitos de Diseño:
- **Colores consistentes** en todo el sitio
- **Texto legible** (mínimo 16px)
- **Espaciado apropiado** (margin y padding)
- **Jerarquía visual clara** (h1 > h2 > p)
- **Botones que parecen botones**
- **Navegación clara y accesible**

### ✅ Técnico:
- Al menos **4 commits** con mensajes descriptivos sobre CSS
- Todo subido a **GitHub**
- CSS **validado** (sin errores obvios)
- **Tested** en Chrome

## 🎨 Aplicando tu Análisis UX

### Recuerda tus decisiones:
- **¿Cuáles fueron tus 3 colores elegidos?** Úsalos consistentemente
- **¿Qué sitios analizaste?** ¿Qué te gustó de su diseño?
- **¿Cuál es la acción principal** que quieres que hagan los usuarios?

### Ejemplo de aplicación si quieres usar colores root (no boligatorio):
```css
/* Si elegiste azul, blanco y gris */
:root {
    --color-primario: #3498db;    /* Tu primer color */
    --color-secundario: #2c3e50;  /* Tu segundo color */
    --color-acento: #e74c3c;      /* Tu tercer color */
    --color-texto: #333;
    --color-fondo: #ffffff;
}

header {
    background-color: var(--color-primario);
    color: white;
}

.btn-principal {
    background-color: var(--color-acento);
    color: white;
}
```

## 🔧 Comandos Git para recordar

```bash
# Ver qué archivos cambiaste
git status

# Agregar todos los archivos
git add .

# Guardar cambios
git commit -m "Aplicar CSS básico con paleta de colores"

# Subir a GitHub
git push
```

## 📋 Checklist detallado

**Revisa `checklist-css.md` para verificar todo punto por punto.**

## 🎨 ¿Necesitas inspiración?

**Revisa `ideas-diseno.md` para ver ejemplos de cómo aplicar estilos.**

## ❓ ¿Dudas?

1. **Consulta** `recursos/css-cheatsheet.md` para sintaxis
2. **Revisa** `recursos/colores-recomendados.md` si no estás seguro de tus colores
3. **Mira** `recursos/google-fonts-guia.md` para mejorar tipografías
4. **Pregunta** en el grupo de la clase

## 🚀 ¡Dale vida a tu proyecto!

Recuerda: **no tiene que ser perfecto, tiene que ser consistente**. En la próxima clase vamos a mejorar el layout con Flexbox.

¡Nos vemos con tu sitio web estilizado! 🎨