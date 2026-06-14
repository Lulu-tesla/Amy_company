# 🛠️ Shared Utils — Amy Developers

## Para qué sirve esta carpeta

Contiene **funciones utilitarias puras** que no dependen de Angular. Son helpers genéricos que se pueden usar en cualquier parte de la aplicación: componentes, servicios, pipes, etc.

## Qué archivos deben vivir aquí

```
utils/
├── helpers.ts    → Funciones utilitarias generales
└── README.md
```

## Qué archivos NO deben vivir aquí

- ❌ Clases o servicios de Angular (van en `core/services/`)
- ❌ Constantes del negocio (van en `core/constants/`)
- ❌ Tipos o interfaces (van en `core/models/`)
- ❌ Funciones que inyectan dependencias de Angular

## Ejemplos prácticos

### Usar las funciones helper:
```typescript
import { slugify, formatCurrency, debounce, generateId, isEmail } from '@shared/utils/helpers';

// Crear un slug
const slug = slugify('Diseño Web Profesional'); // 'diseno-web-profesional'

// Formatear moneda
const precio = formatCurrency(1500, 'USD'); // '$1,500.00'

// Debounce para búsqueda
const buscar = debounce((term: string) => { /* buscar */ }, 300);

// Generar ID único
const id = generateId(); // 'abc123def456'

// Validar email
const esValido = isEmail('info@amydev.com'); // true
```

## Convenciones de nombres

- Archivos en `kebab-case.ts`
- Funciones exportadas en `camelCase`
- Sin clases — solo funciones exportadas

## Buenas prácticas

1. **Funciones puras**: Sin efectos secundarios, sin estado mutable.
2. **Sin dependencias de Angular**: Estas funciones deben funcionar sin inyector.
3. **Tipado estricto**: Usar tipos de TypeScript en parámetros y retorno.
4. **Documentar con JSDoc**: Cada función debe tener documentación.

## Errores comunes

- ⚠️ Inyectar servicios de Angular en funciones utilitarias.
- ⚠️ Crear funciones con efectos secundarios (localStorage, fetch).
- ⚠️ No exportar las funciones (olvidar `export`).
