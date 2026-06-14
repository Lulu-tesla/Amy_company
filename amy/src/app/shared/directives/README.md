# 🎯 Shared Directives — Amy Developers

## Para qué sirve esta carpeta

Contiene **directivas reutilizables** que agregan comportamiento a elementos del DOM. Las directivas no crean nuevos elementos, sino que modifican el comportamiento de los existentes.

## Qué archivos deben vivir aquí

```
directives/
├── animate-on-scroll.directive.ts   → Animación al hacer scroll
└── README.md
```

## Qué archivos NO deben vivir aquí

- ❌ Componentes (van en `shared/components/`)
- ❌ Pipes (van en `shared/pipes/`)
- ❌ Directivas que solo se usan en un componente (van dentro de ese componente)

## Ejemplos prácticos

### Usar la directiva de animación al scroll:
```html
<div appAnimateOnScroll animation="fade-up" [delay]="200">
  Este contenido se anima al aparecer en pantalla
</div>
```

## Convenciones de nombres

| Tipo        | Archivo                            | Selector              |
| ----------- | ---------------------------------- | --------------------- |
| Directiva   | `nombre.directive.ts`              | `[appNombre]`         |

## Buenas prácticas

1. **Standalone siempre**: Todas las directivas deben ser standalone.
2. **Selector con prefijo**: Usar `app` como prefijo en el selector de atributo.
3. **Un archivo por directiva**: No mezclar múltiples directivas en un archivo.
4. **Documentar inputs**: Especificar tipos, valores por defecto y comportamiento.

## Errores comunes

- ⚠️ No limpiar listeners en `ngOnDestroy`.
- ⚠️ Olvidar marcar la directiva como `standalone: true`.
- ⚠️ Usar `Renderer2` cuando se puede usar `HostBinding` o `host`.
