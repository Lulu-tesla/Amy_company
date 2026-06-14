# 🔄 Shared Pipes — Amy Developers

## Para qué sirve esta carpeta

Contiene **pipes reutilizables** que transforman datos en las plantillas. Los pipes son funciones puras que reciben un valor y devuelven una versión transformada.

## Qué archivos deben vivir aquí

```
pipes/
├── truncate.pipe.ts     → Truncar texto largo
├── safe-html.pipe.ts    → Renderizar HTML seguro
└── README.md
```

## Qué archivos NO deben vivir aquí

- ❌ Pipes que dependen de servicios complejos (van en `core/`)
- ❌ Funciones utilitarias puras que no se usan en templates (van en `utils/`)
- ❌ Componentes o directivas

## Ejemplos prácticos

### Usar el pipe truncate:
```html
<p>{{ articulo.contenido | truncate:150:'...' }}</p>
```

### Usar el pipe safeHtml:
```html
<div [innerHTML]="contenidoHtml | safeHtml"></div>
```

## Convenciones de nombres

| Tipo   | Archivo                | Nombre del pipe  |
| ------ | ---------------------- | ---------------- |
| Pipe   | `nombre.pipe.ts`       | `nombre`         |

## Buenas prácticas

1. **Pure pipes**: Mantener pipes puros siempre que sea posible (por defecto en Angular).
2. **Standalone**: Todas los pipes deben ser standalone.
3. **Sin efectos secundarios**: Los pipes no deben mutar el valor original.
4. **Documentar parámetros**: Especificar todos los argumentos opcionales.

## Errores comunes

- ⚠️ Usar `safeHtml` con contenido de usuario no validado (riesgo XSS).
- ⚠️ Crear pipes impuros innecesariamente (problemas de rendimiento).
- ⚠️ No manejar valores `null` o `undefined` en el pipe.
