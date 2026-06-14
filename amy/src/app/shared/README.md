# 📦 Shared Module — Amy Developers

## Para qué sirve esta carpeta

La carpeta `shared/` contiene **componentes, directivas, pipes y utilidades reutilizables** que se comparten entre múltiples módulos y páginas de la aplicación. Todo lo que vive aquí es **genérico** y no pertenece a ninguna feature específica.

## Estructura

```
shared/
├── components/       → Componentes UI reutilizables (Button, Card, Modal, etc.)
├── directives/       → Directivas personalizadas (animaciones, comportamientos)
├── pipes/            → Pipes de transformación (truncate, safeHtml, etc.)
├── utils/            → Funciones utilitarias puras (helpers, formatters)
└── README.md         → Este archivo
```

## Qué archivos deben vivir aquí

- **Componentes UI genéricos**: Botones, cards, modales, loaders, section-titles
- **Directivas reutilizables**: Animaciones, autofocus, click-outside
- **Pipes de transformación**: Formateo de texto, sanitización HTML
- **Funciones utilitarias puras**: Helpers sin dependencias de Angular

## Qué archivos NO deben vivir aquí

- ❌ Servicios (van en `core/services/`)
- ❌ Guards y resolvers (van en `core/guards/`)
- ❌ Interceptores HTTP (van en `core/interceptors/`)
- ❌ Componentes específicos de una página (van en `pages/[pagina]/components/`)
- ❌ Layouts (van en `layouts/`)
- ❌ Modelos de datos específicos del negocio (van en `core/models/`)

## Convenciones de nombres

| Tipo        | Archivo                          | Selector / Nombre        |
| ----------- | -------------------------------- | ------------------------ |
| Componente  | `component-name.ts`              | `app-component-name`     |
| Directiva   | `directive-name.directive.ts`    | `[appDirectiveName]`     |
| Pipe        | `pipe-name.pipe.ts`              | `pipeName`               |
| Utilidad    | `helper-name.ts`                 | Funciones exportadas     |

## Buenas prácticas

1. **Standalone siempre**: Todos los componentes, directivas y pipes deben ser standalone.
2. **Signals**: Usar `input()`, `output()`, `model()` y `computed()` en lugar de decoradores legacy.
3. **Sin lógica de negocio**: Los componentes shared son "tontos" (presentacionales).
4. **Documentación**: Cada archivo debe tener el bloque de documentación en español.
5. **Un componente, una responsabilidad**: No mezclar funcionalidades.

## Errores comunes

- ⚠️ Poner servicios en `shared/` en lugar de `core/`.
- ⚠️ Crear componentes aquí que solo se usan en una página.
- ⚠️ Importar módulos completos en lugar de componentes standalone.
- ⚠️ Olvidar exportar las funciones utilitarias.
- ⚠️ No documentar los inputs y outputs de los componentes.
