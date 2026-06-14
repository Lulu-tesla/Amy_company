/**
 * ARCHIVO: README.md
 *
 * RESPONSABILIDAD:
 * Documentar la carpeta pages/ del sistema de estilos
 *
 * DEBE CONTENER:
 * - Descripción de qué va aquí
 * - Ejemplos de archivos futuros
 *
 * NO DEBE CONTENER:
 * - Documentación de componentes Angular
 *
 * MODIFICAR CUANDO:
 * - Se agregue el primer archivo de página SCSS
 */

# 📄 Pages (Estilos por Página)

## ¿Para qué sirve esta carpeta?

Contiene **estilos SCSS específicos de una página** que no se reutilizan en otras partes. Son sobrescrituras o ajustes puntuales.

> ⚠️ **Nota:** En la mayoría de los casos, los estilos de página deben ir en el archivo `.css` del componente de la página en Angular. Solo usar esta carpeta para estilos globales que afectan una página específica.

## 📁 Archivos futuros

```
pages/
├── _home.scss        ← Estilos exclusivos de la página Home
├── _about.scss       ← Estilos exclusivos de la página About
├── _contact.scss     ← Estilos exclusivos de la página Contact
└── _not-found.scss   ← Estilos de la página 404
```

## ¿Qué archivos deben vivir aquí?

- ✅ Estilos globales que solo aplican a una página
- ✅ Sobrescrituras de componentes para una página específica
- ✅ Animaciones exclusivas de una página

## ¿Qué archivos NO deben vivir aquí?

- ❌ Estilos reutilizables (van en `components/`)
- ❌ Estilos del componente Angular (van en `page.css`)
- ❌ Variables o mixins
- ❌ Layout general

## Convenciones

- Archivo: `_nombre-pagina.scss`
- Envolver en selector de página: `.page-home { ... }`
- Agregar import en `main.scss` al crear un nuevo archivo

## Errores comunes

- ❌ Poner estilos reutilizables aquí en vez de `components/`
- ❌ Duplicar estilos que ya están en el `.css` del componente Angular
- ❌ No agregar el import en `main.scss`
