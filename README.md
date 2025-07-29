# 🎓 Curso Introducción al Desarrollo Web - Material de Estudiantes

## 👋 ¡Bienvenido/a al Curso!

Este repositorio contiene **todo el material** que necesitas para completar el curso de Introducción al Desarrollo Web de **Comunidad IT**. Al finalizar, tendrás tu propio sitio web profesional funcionando online.

## 🎯 Tu Objetivo

Crear un **sitio web personal completo** con:
- 4 páginas HTML conectadas
- Diseño responsive (funciona en móvil y desktop)
- JavaScript interactivo
- Tu contenido personal real

## 📚 Cómo Usar Este Repositorio

### 🔄 Cada Clase Debes:

1. **📥 Actualizar material:** `git pull` al comenzar la clase
2. **📖 Seguir ejemplos:** Carpeta `ejemplos/` para ver conceptos
3. **🏃‍♂️ Completar ejercicios:** Carpeta `ejercicios/` con TODOs
4. **💻 Aplicar a TU proyecto:** Usar conceptos en tu sitio personal
5. **📝 Hacer tarea:** Instrucciones en `tarea-proxima-clase/`

### 📂 Estructura de Cada Clase

```
clases/claseXX-tema/
├── 📄 README.md                  # Plan de la clase
├── 📁 slides/                    # Presentación interactiva
│   └── slides-claseXX.html      # 🌐 Abrir con Live Server
├── 📁 ejemplos/                  # Demos que verás en clase
│   ├── ejemplo-1.html           # 🌐 Abrir con Live Server
│   ├── ejemplo-2.html           # 🌐 Abrir con Live Server
│   └── ejemplo-3.html           # 🌐 Abrir con Live Server
├── 📁 ejercicios/                # Práctica con comentarios TODO
│   ├── ejercicio-1.html         # 🌐 Abrir con Live Server
│   ├── ejercicio-2.html         # 🌐 Abrir con Live Server
│   └── ejercicio-3.html         # 🌐 Abrir con Live Server
├── 📁 tarea-proxima-clase/       # Trabajo para casa
│   ├── README.md
│   ├── checklist.md
│   └── ideas-extras.md
└── 📁 recursos/                  # Ayuda y referencias
    ├── cheatsheet.md
    ├── guia-visual.md
    └── troubleshooting.md
```

### 🌐 Cómo Abrir los Archivos HTML

**⚠️ IMPORTANTE:** Los archivos HTML deben abrirse con un servidor local:

#### **Opción 1: Live Server (Recomendado)**
1. Instalar extensión "Live Server" en VS Code
2. Click derecho en archivo HTML → "Open with Live Server"
3. Se abre automáticamente en el navegador

#### **Opción 2: Open in Browser**
1. Instalar extensión "Open in Browser" en VS Code
2. Click derecho en archivo HTML → "Open In Default Browser"
3. Se abre directamente en el navegador

#### **❌ NO hacer:**
- Doble click en archivo HTML (no funciona igual)
- Arrastrar archivo al navegador (problemas con rutas)

## 🚀 Setup Inicial

### 1. Clonar Este Repositorio

```bash
# Clonar el repositorio de materiales (se crea en Clase 1)
git clone ["aqui la url del repo que se crea en clase 1 por ejemplo intro-desarrollo-web-materiales"]
cd intro-desarrollo-web-materiales
```

**⚠️ IMPORTANTE:** Este repositorio se irá llenando clase por clase. Solo tendrás acceso al material que ya hemos visto en clase.

### 2. Crear TU Repositorio Personal

**⚠️ IMPORTANTE:** Este repo es solo para material de clase. Tu proyecto va en TU propio repositorio. Debe comenzar con tu nombre

#### En GitHub:
1. Ir a github.com
2. Click "New repository"
3. Nombre: `tuNombre-mi-proyecto-web` (o el que prefieras)
4. ✅ Public
5. ✅ Add README.md
6. Click "Create repository"

#### En tu computadora:
```bash
# Salir del repo de materiales
cd ..

# Clonar TU repositorio personal
git clone https://github.com/tu-usuario/tuNombre-mi-proyecto-web.git
cd tuNombre-mi-proyecto-web
```

### 3. Workflow Diario

```bash
# ACTUALIZAR MATERIALES DE CLASE (antes de cada clase):
cd intro-desarrollo-web-materiales
git pull

# TRABAJAR EN TU PROYECTO:
cd ../tuNombre-mi-proyecto-web
# ... hacer cambios ...
git add .
git commit -m "Descripción clara"
git push
```

## 📋 Sistema de Repositorios

### 🎯 Tienes 2 Repositorios:

1. **📚 Este Repositorio (Materiales de Clase)**
   - Contiene ejemplos, ejercicios y recursos
   - Se actualiza clase por clase
   - Hacer `git pull` antes de cada clase
   - **NO hacer push** aquí

2. **💻 Tu Repositorio Personal (Tu Proyecto)**
   - TU sitio web personal
   - Donde aplicas lo aprendido
   - Hacer `git add`, `git commit`, `git push`
   - **Este es TU proyecto**

### 🔄 Cómo Funciona:

- **Antes de cada clase:** Haces `git pull` y recibes material nuevo
- **Durante la clase:** Practicas con ejemplos y ejercicios
- **Después de clase:** Aplicas conceptos a TU proyecto personal

## 📅 Cronograma del Curso

| Clase | Tema | Qué Aprenderás |
|-------|------|----------------|
| **1** | **HTML + Git** | Crear páginas web, usar GitHub |
| **2** | **CSS Básico** | Colores, tipografías, espaciado |
| **3** | **Flexbox** | Layout moderno y flexible |
| **4** | **Responsive** | Sitio funcional en todos los dispositivos |
| **5** | **JavaScript Básico** | Variables, arrays, lógica básica |
| **6** | **Funciones** | Funciones, callbacks, programación |
| **7** | **DOM** | Interactividad, eventos, formularios |
| **8** | **Local Storage** | Guardar datos, proyecto final |
| **9** | **Presentaciones** | Mostrar tu trabajo terminado |

## 🎨 Tipos de Proyecto (Elige UNO)

### 💼 Portfolio Personal
- **index.html:** Tu presentación profesional
- **sobre-mi.html:** Tu historia, estudios, experiencia
- **proyectos.html:** Tus trabajos (ideas por ahora)
- **contacto.html:** Formulario + redes sociales

### 📝 Blog Personal
- **index.html:** Últimos artículos
- **sobre-mi.html:** Quién eres, sobre qué escribes
- **articulos.html:** Lista de posts
- **contacto.html:** Para que te escriban

### 🍽️ Restaurante
- **index.html:** Historia del restaurante
- **menu.html:** Platos por categorías
- **galeria.html:** Fotos del lugar
- **contacto.html:** Ubicación, reservas

### 🚀 Servicio/Emprendimiento
- **index.html:** Qué problema resuelves
- **servicios.html:** Servicios y precios
- **nosotros.html:** Experiencia, testimonios
- **contacto.html:** Formulario cotización

## 🏃‍♂️ Cómo Completar Ejercicios

### 📝 Los ejercicios tienen comentarios TODO:

```html
<!-- TODO: Agregar un título h1 aquí -->
<!-- TODO: Crear una lista de navegación -->
<!-- TODO: Completar el formulario -->
```

### ✅ Pasos para cada ejercicio:

1. **📂 Abrir** el archivo del ejercicio
2. **👀 Leer** las instrucciones en comentarios
3. **🔨 Completar** los TODOs paso a paso
4. **🚀 Probar** en el navegador
5. **✅ Verificar** que funciona correctamente

## 🆘 Cuando Necesites Ayuda

### 📍 Ubicación de Recursos:

- **📁 recursos/cheatsheet.md** - Referencia rápida
- **📁 recursos/troubleshooting.md** - Problemas comunes
- **📁 ejemplos/** - Código funcionando
- **📖 README.md** de cada clase - Explicación completa

### 🌐 Recursos Online:

- **MDN Web Docs** - Documentación oficial
- **W3Schools** - Tutoriales básicos
- **CSS-Tricks** - Guías de CSS
- **JavaScript.info** - JavaScript detallado

### 💬 Canales de Soporte:

- **Discord:** [Servidor de Comunidad IT - proximamente]

## 🎯 Criterios de Éxito

### ✅ Al final del curso tendrás:

- [ ] **4 páginas HTML** con contenido real
- [ ] **Diseño responsive** testeado en móvil
- [ ] **Navegación funcional** entre páginas
- [ ] **JavaScript interactivo** en al menos 2 funciones
- [ ] **Formulario con validación** básica
- [ ] **Local Storage** guardando datos
- [ ] **Proyecto subido** a GitHub
- [ ] **URL pública** para compartir

### 📊 Evaluación por Clase:

| Clase | Entregable | Criterio |
|-------|------------|----------|
| 1 | 4 páginas HTML básicas | Estructura semántica |
| 2 | Sitio con estilos CSS | Diseño atractivo |
| 3 | Layout con Flexbox | Organización profesional |
| 4 | Versión responsive | Funciona en móvil |
| 5-6 | Lógica JavaScript | Programación básica |
| 7 | Interactividad DOM | Eventos funcionando |
| 8 | Proyecto final | Todo integrado |
| 9 | Presentación pública | Demostración completa |

## 📝 Tareas y Entregas

### 🎯 Cada Clase Debes:

1. **📚 Completar ejercicios** en clase
2. **💻 Aplicar conceptos** a tu proyecto
3. **📤 Subir cambios** a tu repositorio
4. **📋 Seguir checklist** de la tarea
5. **🔄 Preparar** para próxima clase

### 📅 Fechas Importantes:

- **Clase 4:** Proyecto responsive terminado
- **Clase 7:** JavaScript básico funcionando
- **Clase 8:** Proyecto final completo
- **Clase 9:** Presentación pública (¡obligatoria!)

## 🏆 Requisitos para Certificación

### ✅ Para obtener tu certificado:

- [ ] **Asistencia:** Mínimo 8 de 9 clases
- [ ] **Proyecto:** Completado según criterios
- [ ] **Presentación:** Participar en clase final
- [ ] **Repositorio:** Código organizado y documentado

## 💡 Consejos de Éxito

### 🎯 Para Destacar:

- **📝 Contenido real:** No uses Lorem Ipsum
- **🎨 Personalización:** Hazlo tuyo, no copies
- **🔄 Práctica constante:** Codifica un poco cada día
- **🤝 Participa:** Haz preguntas en clase
- **🚀 Experimenta:** Prueba más allá de lo enseñado

### 🚨 Errores Comunes a Evitar:

- No actualizar el repositorio con `git pull`
- Confundir el repo de materiales con tu proyecto
- Dejar ejercicios sin completar
- No hacer commits frecuentes
- Esperar hasta último momento para la tarea

## 📞 Contacto

### 👨‍🏫 Instructor:
- **Nombre:** [Nombre del Instructor]
- **Discord:** [Servidor de Comunidad IT - proximamente]

---

## 🎊 ¡Empezamos!

### 🌟 Tu Primer Paso:

1. **📥 Clonar** este repositorio
2. **🎯 Elegir** tu tipo de proyecto
3. **🚀 Crear** tu repositorio personal
4. **📝 Completar** la Clase 1

### 🎯 Recuerda:

**¡Al final del curso tendrás un sitio web profesional que podrás mostrar con orgullo!**

---

**🚀 Comunidad IT 2025 - ¡Tu futuro en tecnología comienza aquí!**