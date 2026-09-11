# Landing — Ernesto Loeza Camargo

Landing personal bilingüe (ES/EN), construida en React + TypeScript + Tailwind CSS
a partir del diseño aprobado en `design/`.

## Desarrollo

```bash
npm install
npm run dev
```

## Producción

```bash
npm run build   # genera dist/
npm run preview # sirve dist/ localmente para probarlo
```

## Pendiente

El botón "Descargar CV" / "Download CV" apunta al placeholder `[URL del CV en PDF]`.
Cuando tengas dónde alojar el CV, cambia `CV_PDF_URL` en [`src/config.ts`](src/config.ts).

## Estructura

- `src/config.ts` — datos de contacto y la URL del CV (pendiente).
- `src/i18n/` — contenido en español e inglés (`translations.ts`), el contexto de
  idioma y el hook `useLanguage()`. Todo el copy vive ahí; no hay texto duplicado
  en los componentes.
- `src/data/techIcons.ts` — paths SVG de los iconos de tecnologías (Simple Icons, CC0).
- `src/components/` — un componente por sección (`Hero`, `StackSection`,
  `ProjectsSection`, `AISection`, `ContactSection`) más piezas chicas reutilizadas
  (`Icon`, `InfoRow`, `StatusValue`). `Hero` y `StackSection` incluyen su propio
  layout de escritorio y de móvil/tablet (el quiebre es en `lg`, 1024px).
- `design/` — el material del diseño original: los bocetos de las 3 direcciones
  exploradas, la versión aprobada tal como quedó en el canvas, y los assets que
  se usaron para portar el diseño a código (iconos, foto). Es referencia; el sitio
  real ya no depende de estos archivos.
