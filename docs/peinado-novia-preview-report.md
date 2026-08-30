# Optimización visual · Peinado para novia en Puebla

Fecha de validación: 30 de agosto de 2026.

## Alcance

La intervención mejora demostración visual, confianza y acceso a WhatsApp sin cambiar la URL, la intención de búsqueda ni las señales SEO que ya posicionan la landing.

## Material visual utilizado

El portafolio muestra exclusivamente trabajos reales existentes de Shanty:

- `assets/hero-peinado-novia.avif|webp`: recogido de novia con perlas; imagen LCP y hero.
- `assets/galeria-semi-recogido-perlas.avif|webp`: semirrecogido con ondas y tocado.
- `assets/galeria-peinado-cola-trenzada.avif|webp`: peinado pulido para evento.
- `assets/og-peinado-novia.jpg`: composición social 1200 × 630 creada a partir de la fotografía real del hero.

No se utilizaron imágenes de terceros ni material stock. No se añadió una sección de testimonios porque el repositorio no contiene testimonios de novias verificables. Para ampliar honestamente el portafolio se necesita una futura producción o selección de más trabajos nupciales propios y autorización de sus testimonios.

## Antes y después visual

- Antes desktop: `docs/screenshots/peinado-before-desktop.png`
- Después desktop: `docs/screenshots/peinado-after-desktop.png`
- Antes responsive: `docs/screenshots/peinado-before-mobile.png`
- Después responsive: `docs/screenshots/peinado-after-mobile.png`

La versión anterior dependía casi por completo de texto. La nueva versión incorpora un hero demostrativo, portafolio editorial, orientación para elegir estilo, proceso de atención, presentación breve de Shanty y CTAs contextuales, conservando el recorrido comercial y los enlaces existentes.

## Comparación SEO automatizada

El comando de control es:

```bash
node scripts/verify-peinado-seo.mjs peinado-novia-puebla.html
```

Resultado: `PASS`.

Se conservaron exactamente:

- status 200;
- title;
- meta description;
- canonical;
- robots;
- un solo H1 y su texto;
- schemas `Service`, `BreadcrumbList` e `ImageObject`;
- cinco destinos internos existentes;
- contenido SEO sustantivo.

El schema de imágenes se enriqueció sin eliminar información válida.

## Rendimiento y accesibilidad

Auditoría Lighthouse local, perfil móvil y servidor estático sin compresión ni caché de Vercel:

- Performance: 73;
- Accessibility: 100;
- Best Practices: 100;
- SEO: 100;
- FCP: 3.0 s;
- LCP: 5.0 s;
- TBT: 130 ms;
- CLS: 0.

El reporte completo está en `docs/performance/lighthouse-peinado-local.json`. La medición local penaliza la ausencia de compresión/caché del servidor de desarrollo y la descarga de fuentes; debe repetirse contra el Preview de Vercel antes de aprobar Producción. No existe muestra suficiente de datos de campo para atribuir un cambio de Core Web Vitals.

Validaciones adicionales:

- cero errores en consola en la navegación local inspeccionada;
- cero imágenes sin `alt`;
- dimensiones explícitas en todas las imágenes;
- una sola imagen prioritaria;
- lazy loading fuera del primer viewport;
- cero desbordamiento horizontal en la vista inspeccionada;
- landmarks `header`, `main` y `footer` presentes.

## Medición y producción

Se conserva GA4 `G-XKMQ757MHK` y el evento existente `site_whatsapp_click`. No hay formulario propio en esta landing. Producción no fue modificada durante esta validación.
