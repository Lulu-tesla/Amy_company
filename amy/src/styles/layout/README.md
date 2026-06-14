/**
 * ARCHIVO: README.md
 *
 * RESPONSABILIDAD:
 * Documentar la carpeta layout/ del sistema de estilos
 *
 * DEBE CONTENER:
 * - Descripción del sistema de grid
 * - Descripción de los contenedores
 *
 * NO DEBE CONTENER:
 * - Documentación de componentes específicos
 *
 * MODIFICAR CUANDO:
 * - Se agregue un nuevo archivo de layout
 */

# 📐 Layout

## ¿Para qué sirve esta carpeta?

Contiene **clases de estructura y posicionamiento** para organizar el contenido en la página: grids, contenedores y secciones.

## 📁 Archivos

| Archivo | Contenido |
|---------|-----------|
| `_grid.scss` | Sistema de grid responsive: `.grid-2`, `.grid-3`, `.grid-4`, `.grid-auto` |
| `_containers.scss` | Contenedores de ancho: `.container`, `.container-sm`, `.container-lg`, `.container-fluid` |

## ¿Qué archivos deben vivir aquí?

- ✅ Sistema de grid
- ✅ Contenedores de ancho máximo
- ✅ Secciones con padding vertical
- ✅ Layout helpers (flex utilities)

## ¿Qué archivos NO deben vivir aquí?

- ❌ Estilos de componentes (navbar, footer)
- ❌ Estilos tipográficos
- ❌ Variables o mixins
- ❌ Estilos de páginas específicas

## Ejemplos prácticos

### Grids

```html
<!-- Grid de 3 columnas responsive -->
<div class="grid grid-3">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>

<!-- Grid auto-fill (ajusta columnas automáticamente) -->
<div class="grid-auto">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
```

### Contenedores

```html
<!-- Sección típica con contenedor -->
<section class="section">
  <div class="container">
    <h2>Nuestros Servicios</h2>
    <div class="grid grid-3">...</div>
  </div>
</section>

<!-- Contenedor pequeño para texto centrado -->
<div class="container-sm">
  <p>Contenido de texto estrecho y centrado.</p>
</div>
```

### Comportamiento responsive de grids

| Clase | Móvil | Tablet (768px+) | Laptop (1024px+) | Desktop (1280px+) |
|-------|-------|-----------------|-------------------|--------------------|
| `.grid-2` | 1 col | 2 col | 2 col | 2 col |
| `.grid-3` | 1 col | 2 col | 3 col | 3 col |
| `.grid-4` | 1 col | 2 col | 3 col | 4 col |

## Errores comunes

- ❌ Crear grids con CSS personalizado en componentes cuando `.grid-*` ya lo resuelve
- ❌ Olvidar envolver contenido en `.container` dentro de secciones
- ❌ Usar anchos fijos en vez de la clase `.container` correspondiente
