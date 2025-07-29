# Git - Comandos Básicos

## 🚀 Comandos que usamos hoy

### Clonar repositorio (solo la primera vez)
```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
```

### Ver qué archivos cambiaron
```bash
git status
```

### Preparar archivos para guardar
```bash
git add .
```

### Guardar cambios con mensaje
```bash
git commit -m "Tu mensaje descriptivo aquí"
```

### Subir a GitHub
```bash
git push
```

## ✅ Ejemplos de buenos mensajes

```bash
git commit -m "Crear página principal"
git commit -m "Agregar formulario de contacto"
git commit -m "Completar página sobre mí"
git commit -m "Corregir enlaces de navegación"
```

## ❌ Evitar estos mensajes

```bash
git commit -m "cambios"
git commit -m "fix"
git commit -m "asdf"
git commit -m "test"
```

## 🔄 Flujo típico

1. Haces cambios en tus archivos
2. `git add .`
3. `git commit -m "Descripción clara"`
4. `git push`
5. Repetir para cada cambio importante