/**
 * ARCHIVO: README.md
 *
 * RESPONSABILIDAD:
 * Documentar la carpeta abstracts/ del sistema de estilos
 *
 * DEBE CONTENER:
 * - Descripción de cada archivo abstract
 * - Guías de uso
 *
 * NO DEBE CONTENER:
 * - Documentación de componentes
 *
 * MODIFICAR CUANDO:
 * - Se agregue un nuevo archivo abstract
 */

# 🔧 Abstracts

## ¿Para qué sirve esta carpeta?

Contiene **variables, funciones y mixins** que **no generan CSS por sí solos**. Son herramientas auxiliares que se importan en otros archivos SCSS con `@use`.

## 📁 Archivos

| Archivo | Contenido |
|---------|-----------|
| `_variables.scss` | Tokens de diseño: colores, tipografía, espaciado, breakpoints, sombras, z-index |
| `_mixins.scss` | Bloques reutilizables: `respond-to()`, `flex-center`, `glass-effect`, etc. |
| `_functions.scss` | Funciones puras: `rem()`, `em()`, `color-opacity()` |

## ¿Qué archivos deben vivir aquí?

- ✅ Variables SCSS (`$variable`)
- ✅ Mixins (`@mixin nombre { ... }`)
- ✅ Funciones SCSS (`@function nombre() { ... }`)
- ✅ Mapas de configuración (`$breakpoints`, etc.)

## ¿Qué archivos NO deben vivir aquí?

- ❌ Archivos que generen CSS (selectores, clases)
- ❌ Estilos de componentes
- ❌ Animaciones o keyframes
- ❌ Reset o normalización

## Ejemplos prácticos

```scss
// Importar en cualquier archivo SCSS:
@use '../abstracts/variables' as *;
@use '../abstracts/functions' as *;
@use '../abstracts/mixins' as *;

// Variables
color: $color-primary;           // #6C63FF
font-family: $font-primary;      // 'Inter', sans-serif
padding: $spacing-lg;            // 24px

// Funciones
font-size: rem(18);              // 1.125rem
background: color-opacity(#6C63FF, 0.3);

// Mixins
@include flex-center;
@include respond-to('tablet') {
  font-size: rem(24);
}
@include glass-effect(15px, 0.1);
@include hover-lift;
```

## Convenciones

- Nombres en `kebab-case` con prefijo semántico: `$color-*`, `$font-*`, `$spacing-*`
- Funciones reciben valores simples, retornan valores
- Mixins aceptan parámetros con valores por defecto
- Siempre documentar con comentarios `///` (estilo SassDoc)

## Errores comunes

- ❌ Escribir selectores CSS en archivos abstracts
- ❌ Usar `@import` en vez de `@use`
- ❌ No pasar valores sin unidad a `rem()` y `em()`
- ❌ Hardcodear colores en vez de usar `$color-*`
