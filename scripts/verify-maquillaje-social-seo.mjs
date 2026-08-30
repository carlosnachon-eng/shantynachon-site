import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const source = process.argv[2] || new URL('../maquillaje-social-puebla.html', import.meta.url);

async function load(input) {
  if (typeof input === 'string' && /^https?:\/\//.test(input)) {
    const response = await fetch(input, { redirect: 'follow' });
    if (response.status !== 200) throw new Error(`HTTP ${response.status}`);
    return { html: await response.text(), status: response.status, source: input };
  }
  const path = input instanceof URL ? fileURLToPath(input) : input;
  return { html: await readFile(path, 'utf8'), status: 200, source: path };
}

const clean = (value = '') => value
  .replace(/<[^>]*>/g, ' ')
  .replace(/&amp;/g, '&')
  .replace(/\s+/g, ' ')
  .trim();
const one = (html, re, label) => {
  const match = html.match(re);
  if (!match) throw new Error(`Falta ${label}`);
  return clean(match[1]);
};
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const { html, status, source: loaded } = await load(source);
const title = one(html, /<title>([\s\S]*?)<\/title>/i, 'title');
const description = one(html, /<meta\s+name=["']description["']\s+content=["']([^"']*)/i, 'description');
const canonical = one(html, /<link\s+rel=["']canonical["']\s+href=["']([^"']*)/i, 'canonical');
const robots = one(html, /<meta\s+name=["']robots["']\s+content=["']([^"']*)/i, 'robots');
const h1 = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((match) => clean(match[1]));
const schemas = [...html.matchAll(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi)]
  .map((match) => JSON.parse(match[1]));
const analyticsConfigTag = html.match(/<script\s+src=["']\/analytics-config\.js["']\s+defer><\/script>/i);
const analyticsTag = html.match(/<script\s+src=["']\/analytics\.js["']\s+defer><\/script>/i);

assert(status === 200, 'La página no devuelve 200');
assert(title === 'Maquillaje Social en Puebla | Precios y Citas | Shanty Nachón', 'Cambió el title congelado');
assert(description === 'Maquillaje social profesional en Puebla desde $1,050. Looks naturales o glam para bodas, graduaciones y eventos. Consulta disponibilidad por WhatsApp.', 'Cambió la description congelada');
assert(canonical === 'https://shantynachon.com/maquillaje-social-puebla', 'Cambió el canonical');
assert(robots === 'index, follow', 'Cambió robots');
assert(h1.length === 1 && h1[0] === 'Maquillista en Puebla para maquillaje social', 'Cambió el H1 o existe más de uno');
assert(analyticsConfigTag, 'Falta la carga diferida de analytics-config.js');
assert(analyticsTag, 'Falta la carga diferida de analytics.js');
assert(analyticsConfigTag.index < analyticsTag.index, 'analytics-config.js debe cargar antes que analytics.js');

const schemaTypes = schemas.map((schema) => schema['@type']);
for (const type of ['Service', 'BreadcrumbList', 'FAQPage', 'ImageObject']) {
  assert(schemaTypes.includes(type), `Falta schema ${type}`);
}

const faqSchema = schemas.find((schema) => schema['@type'] === 'FAQPage');
const visibleFaqs = [...html.matchAll(/<details><summary>([\s\S]*?)<\/summary>/gi)].map((match) => clean(match[1]));
assert(faqSchema.mainEntity.length === visibleFaqs.length, 'FAQ visible y FAQ Schema no están sincronizados');
assert(faqSchema.mainEntity.every((item, index) => item.name === visibleFaqs[index]), 'El orden o texto de FAQ Schema no coincide con la FAQ visible');

for (const href of ['/', '/maquillaje-y-peinado-angelopolis', '/estilista-a-domicilio-atlixco']) {
  assert(html.includes(`href="${href}"`), `Falta enlace contextual ${href}`);
}
for (const phrase of [
  'graduaciones, cenas, fiestas, eventos y sesiones de fotos',
  'Un mismo maquillaje, visto con más detalle',
  'Esta es una sola clienta y un solo trabajo',
  'Maquillaje para que te sientas tú',
]) {
  assert(clean(html).includes(phrase), `Falta contenido sustantivo: ${phrase}`);
}

const images = [...html.matchAll(/<img\b[^>]*>/gi)].map((match) => match[0]);
assert(images.length === 4, 'La demostración debe usar una imagen real y tres vistas declaradas del mismo trabajo');
assert(images.every((image) => /\bwidth=["']\d+/.test(image) && /\bheight=["']\d+/.test(image) && /\balt=["'][^"']+/.test(image)), 'Hay imágenes sin dimensiones o alt');
assert(images.filter((image) => /fetchpriority=["']high/.test(image)).length === 1, 'Debe existir una sola imagen prioritaria');
assert(images.slice(1).every((image) => /loading=["']lazy/.test(image)), 'Las imágenes fuera del primer viewport deben usar lazy loading');
assert(!/<img\b[^>]+src=["']https?:\/\//i.test(html), 'Se detectó una fotografía externa');

console.log(JSON.stringify({
  source: loaded,
  status,
  title,
  description,
  canonical,
  robots,
  h1: h1[0],
  h1Count: h1.length,
  schemas: schemaTypes,
  visibleFaqs: visibleFaqs.length,
  images: images.length,
  analytics: {
    config: '/analytics-config.js',
    tracker: '/analytics.js',
    order: 'config-before-tracker',
    defer: true,
  },
  result: 'PASS',
}, null, 2));
