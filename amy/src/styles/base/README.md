/**
 * ARCHIVO: README.md
 *
 * RESPONSABILIDAD:
 * Documentar la carpeta base/ del sistema de estilos
 *
 * DEBE CONTENER:
 * - Descripción de los estilos base
 * - Guías de uso
 *
 * NO DEBE CONTENER:
 * - Documentación de componentes
 *
 * MODIFICAR CUANDO:
 * - Se agregue un nuevo archivo base
 */

# 📋 Base

## ¿Para qué sirve esta carpeta?

Contiene **estilos que se aplican directamente a elementos HTML** (sin clases). Establece la base visual consistente entre navegadores.

## 📁 Archivos

| Archivo | Contenido |
|---------|-----------|
| `_reset.scss` | Reset CSS moderno: box-sizing, márgenes, smooth scroll, font smoothing |
| `_typography.scss` | Tipografía base: headings h1-h6, párrafos, enlaces, listas, fuente Inter |

## ¿Qué archivos deben vivir aquí?

- ✅ Reset / normalización CSS
- ✅ Estilos tipográficos base
- ✅ Estilos de elementos HTML nativos (`body`, `a`, `img`, `input`)
- ✅ Fuentes web (`@import` de Google Fonts)

## ¿Qué archivos NO deben vivir aquí?

- ❌ Clases de componentes (`.card`, `.button`)
- ❌ Layout o grid
- ❌ Variables o mixins
- ❌ Media queries complejas

## Ejemplos prácticos

Los estilos de `base/` se aplican automáticamente. No necesitas agregar clases:

```html
<!-- Estos elementos ya tienen estilos base: -->
<h1>Título principal</h1>
<p>Párrafo con interlineado y color configurados.</p>
<a href="/about">Enlace con hover configurado</a>
```

Clases utilitarias de tipografía disponibles:

```html
<p class="text-lead">Párrafo destacado más grande</p>
<span class="text-gradient">Texto con gradiente</span>
<span class="text-muted">Texto gris suave</span>
```

## Errores comunes

- ❌ Agregar estilos de componentes aquí en vez de en `components/`
- ❌ Duplicar el reset en otros archivos
- ❌ Sobreescribir estilos base desde componentes sin necesidad
