# 🧩 Shared Components — Amy Developers

## Para qué sirve esta carpeta

Contiene **componentes UI reutilizables** que se usan en múltiples páginas de la aplicación. Son componentes presentacionales (sin lógica de negocio) que reciben datos via inputs y emiten eventos via outputs.

## Qué archivos deben vivir aquí

Cada componente vive en su propia subcarpeta con tres archivos:

```
components/
├── button/
│   ├── button.ts          → Lógica del componente
│   ├── button.html        → Template HTML
│   └── button.css         → Estilos encapsulados
├── card/
│   ├── card.ts
│   ├── card.html
│   └── card.css
├── section-title/
├── modal/
├── loader/
├── social-links/
└── README.md
```

## Qué archivos NO deben vivir aquí

- ❌ Componentes de layout (navbar, footer → `layouts/`)
- ❌ Componentes que solo se usan en una página (→ `pages/[page]/components/`)
- ❌ Servicios o lógica de negocio
- ❌ Archivos de barril (index.ts) — importar directamente

## Ejemplos prácticos

### Usar el botón:
```typescript
import { Button } from '@shared/components/button/button';

@Component({
  imports: [Button],
  template: `
    <app-button label="Contáctanos" variant="primary" size="md" />
    <app-button label="Ver más" variant="outline" href="/portfolio" />
  `
})
```

### Usar el card:
```typescript
import { Card } from '@shared/components/card/card';

@Component({
  imports: [Card],
  template: `
    <app-card title="Diseño Web" description="Creamos sitios increíbles" />
  `
})
```

## Convenciones

- **Selector**: `app-[nombre]` (ej: `app-button`, `app-card`)
- **Clase**: PascalCase sin sufijo (ej: `Button`, `Card`, `Modal`)
- **Inputs**: Usar `input()` de signals
- **Outputs**: Usar `output()` de signals

## Buenas prácticas

1. Componentes 100% presentacionales — sin servicios inyectados.
2. Documentar todos los inputs con tipos y valores por defecto.
3. Usar `ng-content` para composición flexible.
4. CSS con `:host` para estilos del contenedor.
5. Accesibilidad: usar roles ARIA cuando sea necesario.

## Errores comunes

- ⚠️ Inyectar servicios HTTP en componentes shared.
- ⚠️ Acoplar componentes a rutas específicas.
- ⚠️ No usar encapsulación de estilos (ViewEncapsulation).
- ⚠️ Olvidar el bloque de documentación en español.
