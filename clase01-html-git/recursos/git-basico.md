# Git Básico - Comandos Esenciales

## 🔧 Comandos que usamos en clase

### Clonar un repositorio
```bash
git clone https://github.com/usuario/repositorio.git
cd repositorio
```

### Ver estado de archivos
```bash
git status
```

### Agregar archivos para guardar
```bash
# Agregar un archivo específico
git add index.html

# Agregar todos los archivos
git add .
```

### Guardar cambios (commit)
```bash
git commit -m "Descripción clara de los cambios"
```

### Subir cambios a GitHub
```bash
git push
```

### Bajar cambios desde GitHub
```bash
git pull
```

## ✅ Buenas Prácticas

### Mensajes de commit claros:
- ✅ "Agregar página de inicio"
- ✅ "Corregir formulario de contacto"
- ✅ "Actualizar información personal"
- ❌ "cambios"
- ❌ "fix"
- ❌ "asdf"

### Flujo de trabajo típico:
1. Hacer cambios en archivos
2. `git add .`
3. `git commit -m "Descripción"`
4. `git push`

## 🆘 ¿Problemas?

### Si te pide usuario y contraseña:
- Configurar: `git config --global user.name "Tu Nombre"`
- Configurar: `git config --global user.email "tu@email.com"`

### Si da error al push:
- Primero hacer: `git pull`
- Luego: `git push`