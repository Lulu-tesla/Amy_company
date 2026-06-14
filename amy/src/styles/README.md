/**
 * ARCHIVO: README.md
 *
 * RESPONSABILIDAD:
 * Documentar la estructura y convenciones de la carpeta styles/
 *
 * DEBE CONTENER:
 * - Descripción general de la arquitectura SCSS
 * - Estructura de carpetas
 * - Convenciones de nombres
 *
 * NO DEBE CONTENER:
 * - Documentación de componentes Angular
 * - Guías de instalación
 *
 * MODIFICAR CUANDO:
 * - Se agregue una nueva subcarpeta
 * - Se cambien las convenciones
 */

# 🎨 Estilos Globales (styles/)

## ¿Para qué sirve esta carpeta?

Contiene toda la **arquitectura SCSS global** de Amy Developers. Aquí viven los estilos que se aplican a toda la aplicación: variables de diseño, reset CSS, tipografía base, grids y contenedores.

## 📁 Estructura

```
styles/
├── main.scss              ← Punto de entrada (importa todo)
├── abstracts/             ← Variables, mixins, funciones (no generan CSS)
│   ├── _variables.scss    ← Tokens de diseño
│   ├── _mixins.scss       ← Bloques reutilizables
│   └── _functions.scss    ← Funciones SCSS puras
├── base/                  ← Estilos base de elementos HTML
│   ├── _reset.scss        ← Normalización del navegador
│   └── _typography.scss   ← Tipografía global
├── layout/                ← Estructura y layout
│   ├── _grid.scss         ← Sistema de grid responsive
│   └── _containers.scss   ← Contenedores de ancho
├── components/            ← Estilos de componentes globales (futuro)
└── pages/                 ← Estilos específicos de páginas (futuro)
```

## ¿Qué archivos deben vivir aquí?

- ✅ Archivos SCSS parciales (con prefijo `_`)
- ✅ `main.scss` como punto de entrada único
- ✅ README.md en cada subcarpeta

## ¿Qué archivos NO deben vivir aquí?

- ❌ Estilos de componentes Angular (van en `component.css`)
- ❌ Archivos CSS planos (usamos SCSS)
- ❌ Archivos TypeScript o JavaScript
- ❌ Assets (imágenes, fuentes → van en `assets/`)

## Convenciones de nombres

| Patrón | Ejemplo | Descripción |
|--------|---------|-------------|
| `_nombre.scss` | `_variables.scss` | Parcial SCSS (no compila solo) |
| `main.scss` | `main.scss` | Punto de entrada (sin prefijo `_`) |
| `kebab-case` | `_hero-section.scss` | Nombres compuestos |

## Cómo usar los abstracts en otros archivos

```scss
// En cualquier archivo SCSS que necesite variables/mixins:
@use '../abstracts/variables' as *;
@use '../abstracts/mixins' as *;
@use '../abstracts/functions' as *;

// Luego usar directamente:
.mi-clase {
  color: $color-primary;
  @include respond-to('tablet') { ... }
  font-size: rem(18);
}
```

## Buenas prácticas

1. **Nunca escribas estilos directos en `main.scss`** — solo importaciones
2. **Usa `@use` en lugar de `@import`** — es el estándar moderno de SCSS
3. **Prefija con `_` los parciales** — evita que compilen como archivos independientes
4. **Estilos de componentes Angular van en `.css`** — no en esta carpeta
5. **Sigue la escala de espaciado** — usa `$spacing-*` en lugar de valores mágicos

## Errores comunes

- ❌ Poner estilos de un componente Angular aquí en vez de en su `.css`
- ❌ Duplicar variables en archivos de componentes
- ❌ Usar `@import` en lugar de `@use`
- ❌ No usar las variables de breakpoints y poner media queries con valores hardcodeados
- ❌ Olvidar importar un nuevo parcial en `main.scss`
