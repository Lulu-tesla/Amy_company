/**
 * ARCHIVO: README.md
 *
 * RESPONSABILIDAD:
 * Documentar la carpeta components/ del sistema de estilos
 *
 * DEBE CONTENER:
 * - Descripción de qué va aquí
 * - Ejemplos de archivos futuros
 *
 * NO DEBE CONTENER:
 * - Documentación de componentes Angular
 *
 * MODIFICAR CUANDO:
 * - Se agregue el primer archivo de componente SCSS
 */

# 🧩 Components (SCSS Globales)

## ¿Para qué sirve esta carpeta?

Contiene **estilos SCSS globales para componentes UI reutilizables** que se usan en múltiples páginas. Estos son estilos que se aplican mediante clases CSS globales.

> ⚠️ **Nota:** Esta carpeta es para estilos SCSS globales, NO para estilos de componentes Angular. Los componentes Angular tienen su propio archivo `.css` encapsulado.

## 📁 Archivos futuros

```
components/
├── _buttons.scss     ← Estilos de botones globales
├── _cards.scss       ← Estilos de cards globales
├── _forms.scss       ← Estilos de formularios globales
├── _modals.scss      ← Estilos de modales
└── _badges.scss      ← Badges y etiquetas
```

## ¿Qué archivos deben vivir aquí?

- ✅ Clases CSS reutilizables (`.btn`, `.card`, `.form-group`)
- ✅ Estilos que se usan en 3+ componentes Angular
- ✅ Sobrescrituras globales de librerías de terceros

## ¿Qué archivos NO deben vivir aquí?

- ❌ Estilos de componentes Angular específicos (van en `component.css`)
- ❌ Variables o mixins (van en `abstracts/`)
- ❌ Estilos de páginas específicas (van en `pages/`)
- ❌ Reset o tipografía base (van en `base/`)

## Convenciones

- Archivo: `_nombre-componente.scss`
- Clases: `.nombre-componente` (BEM cuando aplique)
- Agregar import en `main.scss` al crear un nuevo archivo

## Errores comunes

- ❌ Duplicar estilos que ya existen en el CSS del componente Angular
- ❌ No agregar el import en `main.scss`
- ❌ Crear archivos sin prefijo `_`
