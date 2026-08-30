# Reporte de Preview · Maquillaje para novia en Puebla

## Alcance

Optimización aditiva de `/maquillaje-novia-puebla`: hero visual, trabajo real, guía para definir el look, proceso, puente a Peinado Novia, FAQs contextuales, CTA intermedio/final y acceso móvil a WhatsApp.

## SEO before / after

Permanecen idénticos: URL, HTTP esperado, title, meta description, H1, canonical, robots, intención y enlaces internos existentes. Se enriquecen `Service`, `FAQPage` e `ImageObject` con información visible y una imagen real. No se cambia la arquitectura global.

## Material visual

Utilizado:

- `assets/galeria-maquillaje-natural.avif|webp`: único trabajo real de maquillaje identificable en el repositorio. Se utiliza como imagen principal y, con transparencia editorial, en dos recortes del mismo trabajo.
- `assets/hero-peinado-novia.avif|webp`: trabajo real de peinado, presentado únicamente en la sección complementaria; no se atribuye como maquillaje.

No utilizado como maquillaje:

- `galeria-maquillaje-social-elegante.*` porque la fotografía muestra un peinado de espalda, pese al nombre del archivo.
- Fotografías externas o stock: ninguna.

## Material faltante para una futura iteración

Se necesitan fotografías nupciales autorizadas de Shanty: un look natural/luminoso, uno romántico, uno glam, primer plano de piel, ojos abiertos/cerrados, antes/después con consentimiento y preparación completa con vestido o bata. Hasta contar con ellas no debe afirmarse que el portafolio muestra variedad de novias.

## Medición futura

Métrica principal: `site_whatsapp_click / sesiones orgánicas` filtrada por esta URL. Métricas de control: impresiones, clics, CTR, posición, usuarios orgánicos y Core Web Vitals. Ranking y conversión deben evaluarse por separado.

## Pruebas locales

- Guarda SEO: PASS.
- Lighthouse móvil: Performance 99, Accessibility 95, Best Practices 96, SEO 100.
- FCP: 1.1 s; LCP: 1.5 s; CLS: 0.04; TBT: 80 ms.
- Consola: sin errores ni advertencias.
- Enlaces WhatsApp detectados: 5; conservan la instrumentación global `site_whatsapp_click`.
- Imágenes: AVIF/WebP, dimensiones explícitas, `loading="lazy"` fuera del primer viewport y una sola imagen prioritaria.

La medición se realizó con servidor local y throttling de Lighthouse. Debe repetirse contra el Preview de Vercel para incluir compresión, CDN y caché reales; no sustituye datos de campo de Core Web Vitals.

## Recomendación previa a Producción

**ITERAR una vez sólo si la revisión visual detecta un defecto funcional.** La experiencia ya es claramente superior y la capa SEO congelada pasa la prueba automatizada. La limitación comercial real sigue siendo la falta de material nupcial específico, no un defecto técnico del Preview.
