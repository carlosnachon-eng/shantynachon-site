import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const source = process.argv[2] || new URL('../peinado-novia-puebla.html', import.meta.url);

async function loadHtml(input) {
  if (typeof input === 'string' && /^https?:\/\//.test(input)) {
    const response = await fetch(input, { redirect: 'follow' });
    if (response.status !== 200) {
      throw new Error(`Se esperaba HTTP 200 y se recibió ${response.status} en ${input}`);
    }
    return { html: await response.text(), status: response.status, source: input };
  }

  const path = input instanceof URL ? fileURLToPath(input) : input;
  return { html: await readFile(path, 'utf8'), status: 200, source: path };
}

function decode(value = '') {
  return value
    .replace(/<[^>]*>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function comparable(value = '') {
  return decode(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function matchOne(html, pattern, label) {
  const match = html.match(pattern);
  if (!match) throw new Error(`No se encontró ${label}`);
  return decode(match[1]);
}

function assertEqual(actual, expected, label) {
  if (actual !== expected) {
    throw new Error(`${label} cambió. Esperado: "${expected}". Actual: "${actual}"`);
  }
}

function assertIncludes(haystack, needle, label) {
  if (!haystack.includes(needle)) throw new Error(`Falta ${label}: ${needle}`);
}

const { html, status, source: loadedSource } = await loadHtml(source);

const title = matchOne(html, /<title>([\s\S]*?)<\/title>/i, 'title');
const description = matchOne(html, /<meta\s+name=["']description["']\s+content=["']([^"']*)["'][^>]*>/i, 'meta description');
const canonical = matchOne(html, /<link\s+rel=["']canonical["']\s+href=["']([^"']*)["'][^>]*>/i, 'canonical');
const robots = matchOne(html, /<meta\s+name=["']robots["']\s+content=["']([^"']*)["'][^>]*>/i, 'robots');
const h1Matches = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];

assertEqual(status, 200, 'status HTTP');
assertEqual(title, 'Peinado para novia en Puebla | Shanty Nachon Stylist', 'title');
assertEqual(description, 'Peinado para novia en Puebla, Angelopolis, Cholula y Atlixco. Recogidos, semi recogidos, ondas, prueba y paquete con maquillaje social.', 'meta description');
assertEqual(canonical, 'https://shantynachon.com/peinado-novia-puebla', 'canonical');
assertEqual(robots, 'index, follow', 'robots');
assertEqual(h1Matches.length, 1, 'cantidad de H1');
assertEqual(decode(h1Matches[0][1]), 'Peinado para novia en Puebla', 'H1');

const schemaTypes = [...html.matchAll(/"@type"\s*:\s*"([^"]+)"/g)].map((match) => match[1]);
for (const schemaType of ['Service', 'BreadcrumbList', 'ImageObject']) {
  if (!schemaTypes.includes(schemaType)) throw new Error(`Falta schema ${schemaType}`);
}

const existingInternalLinks = [
  '/',
  '/maquillaje-social-puebla',
  '/maquillaje-y-peinado-angelopolis',
  '/maquillaje-novia-puebla',
  '/estilista-a-domicilio-atlixco'
];
for (const href of existingInternalLinks) {
  assertIncludes(html, `href="${href}"`, `enlace interno conservado`);
}

const indexableText = comparable(html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, ''));
const frozenSubstantivePhrases = [
  'peinados para novia, civil, sesion previa y eventos de boda',
  'el peinado de novia tiene que hablar el mismo idioma que el vestido',
  'si tu boda sera en puebla, angelopolis, cholula o atlixco',
  'opciones limpias, romanticas o estructuradas para velo, tocado o escote',
  'ideales para un estilo suave, femenino y con movimiento',
  'ondas pulidas o naturales para civil, preboda o eventos de dia',
  'confirma fecha y hora',
  'comparte foto del vestido y referencias',
  'aparta con anticipo para bloquear agenda'
];
for (const phrase of frozenSubstantivePhrases) {
  assertIncludes(indexableText, phrase, 'contenido SEO sustantivo');
}

const images = [...html.matchAll(/<img\b[^>]*>/gi)].map((match) => match[0]);
if (images.length < 3) throw new Error('Se esperaban al menos tres fotografías reales');
for (const image of images) {
  if (!/\bwidth=["']\d+["']/i.test(image) || !/\bheight=["']\d+["']/i.test(image)) {
    throw new Error(`Imagen sin dimensiones explícitas: ${image}`);
  }
  if (!/\balt=["'][^"']+["']/i.test(image)) {
    throw new Error(`Imagen sin alt descriptivo: ${image}`);
  }
}
if (!images.some((image) => /fetchpriority=["']high["']/i.test(image) && /loading=["']eager["']/i.test(image))) {
  throw new Error('La imagen LCP debe ser la única prioritaria');
}
if (images.filter((image) => /fetchpriority=["']high["']/i.test(image)).length !== 1) {
  throw new Error('Sólo una imagen puede utilizar fetchpriority=high');
}

console.log(JSON.stringify({
  source: loadedSource,
  status,
  title,
  description,
  canonical,
  robots,
  h1: decode(h1Matches[0][1]),
  h1Count: h1Matches.length,
  schemaTypes: [...new Set(schemaTypes)],
  internalLinksPreserved: existingInternalLinks.length,
  images: images.length,
  result: 'PASS'
}, null, 2));
