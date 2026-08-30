# Maquillaje social Puebla · reporte de Preview

Fecha: 30 de agosto de 2026.

Rama: `codex/maquillaje-social-top10`

## Resultado ejecutivo

La landing pasó de una página principalmente textual a una experiencia comercial y editorial que cubre la intención `maquillaje social en Puebla` con mayor profundidad. No se modificaron URL, title, meta description, H1, canonical, robots ni la intención principal.

Recomendación provisional: **GO para revisión del Preview**. Producción permanece intacta.

## Señales SEO antes y después

| Señal | Antes | Después | Estado |
|---|---|---|---|
| URL | `/maquillaje-social-puebla` | `/maquillaje-social-puebla` | Sin cambio |
| Title | Maquillaje Social en Puebla \| Precios y Citas \| Shanty Nachón | Igual | PASS |
| Meta description | Maquillaje social profesional en Puebla desde $1,050… | Igual | PASS |
| H1 | Maquillista en Puebla para maquillaje social | Igual | PASS |
| Canonical | `https://shantynachon.com/maquillaje-social-puebla` | Igual | PASS |
| Robots | `index, follow` | Igual | PASS |
| H1 totales | 1 | 1 | PASS |
| Schema | Service, BreadcrumbList, ImageObject | Service, BreadcrumbList, ImageObject, FAQPage | Enriquecido |

La prueba `scripts/verify-maquillaje-social-seo.mjs` también valida sincronización entre FAQ visible/schema, una sola imagen prioritaria, lazy loading fuera del hero, dimensiones, alt y ausencia de fotografías externas.

## Contenido añadido

- Elección entre un look natural/fresco y uno más definido.
- Influencia del horario, iluminación y tipo de evento.
- Ocasiones: graduación, evento nocturno, evento diurno, sesión fotográfica, fiesta y evento especial.
- Proceso real en cinco pasos: contexto, definición, preparación, maquillaje y revisión final.
- Preparación de la piel.
- Combinación opcional de maquillaje y peinado.
- Servicio a domicilio sujeto a disponibilidad, zona y viáticos.
- Seis preguntas frecuentes visibles, sincronizadas con FAQPage.
- Prueba social general presentada con atribución transparente.

## Material visual

Se utilizó exclusivamente:

- `assets/galeria-maquillaje-natural.avif`
- `assets/galeria-maquillaje-natural.webp`

Es un único trabajo real de Shanty. La página lo muestra completo y en dos recortes editoriales identificados explícitamente como detalles del mismo trabajo. No se aparentan varias clientas y no se utilizó stock ni material externo.

### Material faltante

- Cuatro a ocho trabajos adicionales con autorización de uso.
- Casos confirmados de graduación, evento de día, evento de noche y sesión.
- Testimonios específicos y verificables de maquillaje social.

La falta de este material no bloquea la versión actual, pero limita la amplitud del portfolio y la autoridad demostrable.

## Enlazado interno

Se añadieron enlaces contextuales hacia la landing desde páginas no congeladas:

- Home: `Ver maquillaje social para eventos en Puebla`.
- Maquillaje y peinado en Angelópolis: `servicio de maquillaje social para eventos en Puebla`.
- Estilista a domicilio en Atlixco: `maquillaje social según el horario y tipo de evento`.
- Artículo de peinados para graduación: `maquillaje social para una graduación o evento`.

Desde la landing se añadieron rutas útiles hacia Home, paquete de maquillaje + peinado y servicio a domicilio en Atlixco. No se modificaron `/peinado-novia-puebla` ni `/maquillaje-novia-puebla`.

## Rendimiento local

Lighthouse móvil local:

| Métrica | Antes disponible | Después local |
|---|---:|---:|
| Performance | 75 | 97 |
| Accessibility | 90 | 100 |
| Best Practices | 96 | 100 |
| SEO | 100 | 100 |
| FCP | 3.2 s | 1.6 s |
| LCP | 4.6 s | 1.6 s |
| CLS | 0 | 0.074 |
| TBT | 80 ms | 120 ms |

Los datos posteriores son de laboratorio local; no sustituyen Core Web Vitals de campo. El incremento de CLS permanece dentro del umbral bueno, pero debe revisarse nuevamente sobre el Preview remoto.

## Pruebas

- Guarda SEO automatizada: PASS.
- HTML/diff whitespace: PASS.
- Un solo H1: PASS.
- FAQ visible/schema: PASS (6/6).
- Cuatro vistas de una sola fotografía real: PASS.
- AVIF servido por navegador compatible: PASS.
- Imágenes cargadas correctamente: 4/4.
- Una sola imagen LCP prioritaria: PASS.
- Lazy loading fuera del hero: PASS.
- Overflow móvil: 0 px.
- Consola en prueba local: 0 errores.
- CTA de WhatsApp: 5 enlaces válidos.
- Páginas congeladas modificadas: 0.

## Riesgo de canibalización

Riesgo **bajo**. La landing se concentra en eventos sociales no nupciales. No intenta desarrollar la intención de maquillaje de novia; la referencia especializada permanece como navegación secundaria. La meta description congelada conserva la palabra `bodas`, pero no se expandió esa intención en el contenido nuevo.

## Capturas

- `docs/screenshots/maquillaje-social-before-desktop.png`
- `docs/screenshots/maquillaje-social-after-desktop.png`
- `docs/screenshots/maquillaje-social-before-mobile.png`
- `docs/screenshots/maquillaje-social-after-mobile.png`

## Autoridad futura

Las acciones no ejecutadas están documentadas en `docs/maquillaje-social-authority-opportunities.md`. No se compraron enlaces, no se modificó Google Business Profile y no se ejecutó outreach.

## Medición posterior a una eventual publicación

- Día 7, 14 y 28.
- Consulta exacta `maquillaje social puebla` separada del promedio agregado de URL.
- Posición, impresiones, clics y CTR en Search Console.
- Sesiones orgánicas, engagement y `site_whatsapp_click` en GA4.
- Métrica comercial: `site_whatsapp_click / sesiones orgánicas de la landing`.
