# Shanty Nachón · Diagnóstico SEO de `/maquillaje-social-puebla`

**Fecha del diagnóstico:** 30 de agosto de 2026
**Objetivo:** determinar por qué la URL se encuentra alrededor de una posición media de 23.6 y definir el camino mínimo, basado en evidencia, para competir por el Top 10.
**Alcance:** investigación y diagnóstico. No se modificó la landing, el código, Producción, Google Business Profile ni ninguna señal SEO.

---

## Resumen ejecutivo

La posición media de **23.6 no representa una posición fija para “maquillaje social Puebla”**. Es el promedio de todas las consultas e impresiones asociadas con la URL durante el periodo.

La evidencia apunta a dos fenómenos simultáneos:

1. La URL tiene una oportunidad real de entrar al Top 10 para su consulta correcta. En el histórico disponible, la consulta exacta **“maquillaje social puebla”** registra aproximadamente **17 impresiones y posición media 10.2**, y Google sólo muestra esta landing para dicha búsqueda.
2. El promedio general cayó porque Google amplió la exposición hacia consultas menos precisas. La principal es **“belleza novias puebla”**, que generó 51 impresiones recientes para esta página en posiciones considerablemente más bajas y además corresponde mejor a `/maquillaje-novia-puebla`.

Por tanto, el problema principal no es una falla técnica ni una penalización. Es una combinación de:

- relevancia semántica todavía insuficientemente delimitada entre maquillaje social y maquillaje de novia;
- contenido útil pero demasiado breve frente al Top 10;
- muy poca demostración visual verificable;
- autoridad externa casi inexistente;
- maduración limitada: la página fue publicada el 8 de julio de 2026;
- enlaces internos numerosos, pero mayoritariamente globales y poco contextuales.

La recomendación es **GO para una optimización en rama aislada**, pero no para cambiar de inmediato URL, title, meta description, H1 o canonical. Primero debe reforzarse el cuerpo de la página, la prueba visual real, el enlazado contextual y la autoridad local, preservando las señales que ya acercaron la consulta exacta al Top 10.

---

## 1. Baseline real

### 1.1 Search Console

Fuente: propiedad de dominio `shantynachon.com`, filtro exacto de página para `/maquillaje-social-puebla`.

#### Últimos 28 días comparados con el periodo anterior

| Métrica | 1–28 ago 2026 | 4–31 jul 2026 | Lectura |
|---|---:|---:|---|
| Clics | 1 | 1 | Sin cambio; muestra mínima |
| Impresiones | 126 | 77 | +63.6% de exposición |
| CTR | 0.8% | 1.3% | Descenso asociado a nuevas impresiones en posiciones bajas |
| Posición media | 23.6 | 7.6 | No es una caída fija de ranking; cambió la mezcla de consultas |

#### Histórico disponible

Para el periodo disponible del **8 de julio al 28 de agosto de 2026**:

- 2 clics;
- 203 impresiones;
- CTR aproximado de 1.0%;
- posición media aproximada de 17.5.

La URL sólo cuenta con unas siete semanas de historial. No hay 90 días completos desde su publicación, por lo que cualquier conclusión debe tratarse como temprana.

#### Consultas visibles recientes

| Consulta | Clics | Impresiones recientes | Posición/lectura aproximada |
|---|---:|---:|---|
| belleza novias puebla | 0 | 51 | Consulta amplia, nupcial y en posiciones bajas; no es el objetivo principal de esta landing |
| maquillista en puebla | 0 | 5 | ~12.6; oportunidad secundaria legítima |
| maquillista cerca de mi | 0 | 3 | ~11; intención local y transaccional |
| maquillaje social puebla | 0 | 3 | ~17.7 en el periodo reciente; histórico disponible ~10.2 |
| maquillaje y peinado en puebla | 0 | 2 | ~11.5; intención secundaria válida si el paquete está disponible |
| maquillaje puebla | 0 | 2 | Consulta amplia pero pertinente |
| maquillistas en puebla | 0 | 2 | Consulta local comercial |
| maquillaje en puebla | 0 | 2 | Consulta amplia |
| maquillaje a domicilio cerca de mi | 0 | 1 | Pertinente si el servicio y condiciones se explican con precisión |
| maquillista a domicilio cerca de mi | 0 | 1 | Pertinente si el servicio está confirmado |

Search Console omite consultas de bajo volumen por privacidad. La tabla visible no necesariamente suma todas las impresiones.

#### Branded vs. non-branded

La muestra visible está dominada por consultas **no branded**. No hay volumen suficiente para calcular una proporción robusta, pero la oportunidad depende claramente de descubrimiento genérico y local, no de búsquedas por “Shanty Nachón”.

#### Interpretación correcta del 23.6

La caída desde 7.6 hasta 23.6 coincide con un aumento de impresiones. Google no necesariamente retiró la página de sus posiciones previas; empezó a probarla para consultas adicionales y menos precisas. La consulta `belleza novias puebla` explica una parte relevante de ese cambio.

La consulta exacta `maquillaje social puebla`, evaluada en todo el histórico disponible, se encuentra mucho más cerca del Top 10 que el promedio general de la URL.

### 1.2 GA4

La muestra disponible para esta landing es insuficiente para diagnosticar comportamiento o conversión:

- sesiones orgánicas medibles en la landing: 0 en el corte consultado;
- usuarios y engagement por landing: no determinables con fiabilidad;
- clics de WhatsApp por landing: sin muestra atribuible suficiente;
- formularios y conversiones por landing: sin muestra atribuible suficiente.

Como contexto del sitio completo en el corte del 2 al 29 de agosto:

- 22 sesiones totales;
- 10 sesiones orgánicas;
- 3 eventos `site_whatsapp_click` de 2 usuarios;
- 2 eventos `lead_form_submit` de 2 usuarios.

Estos datos no deben atribuirse a `/maquillaje-social-puebla`. Confirman que la medición existe, no que esta página convierta bien o mal.

**Conclusión GA4:** todavía no existe evidencia para clasificar el problema principal como CRO. Primero debe aumentarse la visibilidad cualificada.

---

## 2. SEO técnico actual

### Estado técnico

| Elemento | Estado | Observación |
|---|---|---|
| HTTP | Correcto | Responde 200 por HTTPS |
| Indexabilidad | Correcta | `index, follow` |
| Canonical | Correcto | Autorreferente y HTTPS |
| Sitemap | Correcto | URL incluida; `lastmod` 2026-08-19 |
| Robots.txt | Correcto | Permite rastreo y declara sitemap |
| Title | Correcto | `Maquillaje Social en Puebla \| Precios y Citas \| Shanty Nachón` |
| Meta description | Correcta | Describe servicio, precio, ocasiones y WhatsApp |
| H1 | Correcto | Único: `Maquillista en Puebla para maquillaje social` |
| Schema | Parcialmente sólido | `Service`, `BreadcrumbList` e `ImageObject` genérico |
| FAQ visible | Presente | Tres preguntas visibles, pero sin `FAQPage` |
| Imágenes visibles | Déficit | La landing no demuestra visualmente el servicio |
| Enlaces internos | Presentes | Nueve enlaces internos detectados hacia la URL, principalmente navegación/footer |

### Contenido indexable actual

La página tiene aproximadamente **313 palabras**. Incluye información real y comercialmente útil sobre:

- bodas, graduaciones, cenas, XV años, bautizos, comuniones y sesiones;
- acabados natural, elegante, glam y de noche;
- preparación de piel, pestañas y duración;
- servicio a domicilio y zonas;
- maquillaje con peinado;
- precio base y CTA.

El problema no es ausencia total de relevancia, sino falta de profundidad, demostración y jerarquía para resolver la intención mejor que páginas competidoras.

### Schema

La implementación actual ya comunica:

- servicio de maquillaje social;
- precio de referencia de $1,050 MXN;
- proveedor tipo `BeautySalon`;
- cobertura en Puebla, Angelópolis, Cholula y Atlixco;
- breadcrumbs.

Oportunidades futuras de bajo riesgo:

- añadir `FAQPage` sólo si refleja exactamente las preguntas visibles;
- sustituir/enriquecer el `ImageObject` genérico con una fotografía real, autorizada y representativa;
- no añadir reseñas, calificaciones o claims no verificables.

### Rendimiento y Core Web Vitals

Lighthouse público, ejecución del 30 de agosto de 2026:

| Métrica | Resultado |
|---|---:|
| Performance | 75 |
| Accessibility | 90 |
| Best Practices | 96 |
| SEO | 100 |
| FCP | 3.2 s |
| LCP | 4.6 s |
| CLS | 0 |
| TBT | 80 ms |
| Speed Index | 4.7 s |

Datos adicionales:

- respuesta inicial del documento: ~100 ms;
- transferencia aproximada: 286 KiB;
- 12 solicitudes;
- cuatro fuentes web y el script de medición concentran gran parte de la carga;
- `favicon.ico` devuelve 404, sin impacto material de ranking.

Search Console informa **datos de campo insuficientes** para móvil y escritorio. Lighthouse es una prueba de laboratorio y no sustituye Core Web Vitals reales. El LCP de laboratorio merece optimización, pero no explica por sí solo una posición media de 23.6.

**Diagnóstico técnico:** no hay un bloqueo crítico de indexación. La capa técnica es funcional y no es la causa principal del ranking.

---

## 3. Intención de búsqueda

### Intención principal

La intención de `maquillaje social Puebla` es **comercial, transaccional y local**. La persona quiere evaluar y contactar a una maquillista para un evento, conocer el estilo del trabajo, disponibilidad, precio orientativo, ubicación/domicilio y confianza profesional.

### Intenciones secundarias legítimas

- `maquillista social Puebla`;
- `maquillaje profesional Puebla`;
- `maquillista Puebla`;
- `maquillaje para evento Puebla`;
- `maquillaje para fiesta Puebla`;
- maquillaje de día y de noche;
- natural y glam;
- servicio a domicilio;
- maquillaje con peinado;
- precio, duración, preparación y qué incluye.

### Términos que esta URL no debería perseguir como objetivo principal

- tiendas o productos de maquillaje;
- cursos de maquillaje;
- tutoriales;
- maquillaje artístico o efectos especiales no ofrecidos;
- peinado sin maquillaje;
- maquillaje de novia como intención principal;
- consultas nupciales amplias como `belleza novias puebla`.

La página puede mencionar bodas como una de varias ocasiones sociales, pero no debe intentar sustituir a `/maquillaje-novia-puebla`.

### Mapa de intención recomendado

| Intención | URL que debería responder |
|---|---|
| Maquillaje social, fiesta, graduación, evento | `/maquillaje-social-puebla` |
| Maquillaje de novia | `/maquillaje-novia-puebla` |
| Peinado de novia | `/peinado-novia-puebla` |
| Maquillaje y peinado en Angelópolis | Página local de Angelópolis, con enlace a servicio principal |
| Maquillaje en Atlixco | Página local de Atlixco, con enlace a servicio principal |
| Curso de automaquillaje | Página del curso |

---

## 4. SERP actual

Consulta observada desde México/Puebla cuando Google pudo inferir la ubicación, sin personalización de historial (`pws=0`). Las posiciones cambian por dispositivo, ubicación y momento; no son una medición fija.

### `maquillaje social puebla`

La primera página combina:

- una entidad/local profile denominada “MAQUILLAJE SOCIAL PUEBLA”;
- Instagram;
- maquillistas independientes con páginas propias;
- grupos de Facebook;
- Bodas.com.mx;
- directorios/marketplaces como AgendaPro y Fresha;
- carrusel de videos cortos;
- People Also Ask.

Shanty se observó en la segunda página, aproximadamente alrededor del lugar orgánico 12 en ese momento. Esto es compatible con la variación registrada en Search Console.

### Local Pack para `maquillista puebla`

Se observaron, entre otros:

- Dian Sorcia Beauty House — 4.6, 245 reseñas;
- MAQUILLAJE SOCIAL PUEBLA — 4.8, 22 reseñas;
- LOF Makeup & Styling — 4.9, 106 reseñas.

Shanty no apareció en el Local Pack observado para esa consulta. Esto no implica ausencia permanente, pero sí una brecha de autoridad/prominencia local para términos amplios.

### People Also Ask

- ¿Cuánto se cobra por un maquillaje social?
- ¿Qué incluye el maquillaje social?
- ¿Dónde comprar maquillaje en Puebla?
- ¿Cuánto cobra un maquillador a domicilio?

Las preguntas de precio, contenido del servicio y domicilio son pertinentes. La búsqueda de tiendas no corresponde a la intención de la landing.

### Búsquedas relacionadas

- maquillaje y peinado en Puebla;
- maquillaje social de día;
- maquillaje social de noche;
- peinado y maquillaje social;
- maquillaje y peinado social precio;
- maquillaje y peinado social cerca de mí;
- maquillaje a domicilio Puebla.

---

## 5. Competidores relevantes

La selección distingue competidores directos de superficies que compiten por atención y autoridad.

### 5.1 Marlene Rivera

- Sitio: [marlenerivera.makeup](https://marlenerivera.makeup/)
- Página específica: [Maquillaje Social y para Eventos en Puebla](https://marlenerivera.makeup/servicio/social)
- Página local amplia: [Maquilladora en Puebla](https://marlenerivera.makeup/maquilladora-puebla)

**Por qué es relevante:** es el benchmark orgánico más completo observado. Tiene arquitectura temática, página específica de servicio, cobertura local y una URL para la intención amplia.

**Ventajas SEO y de experiencia:**

- H1 e intención exactos;
- contenido por ocasión;
- preparación de piel, aerógrafo, cejas, pestañas y peinado;
- domicilio, duración, proceso y FAQs;
- más de diez años declarados;
- marcas, imágenes, precios y CTA;
- cluster de servicios y páginas locales.

### 5.2 Tefa Makeup Artist

- Página: [Maquillaje social](https://www.tefamakeupartist.com/maquillaje-social)

**Ventajas observadas:**

- múltiples fotografías visibles;
- precio y duración;
- preparación de piel y pestañas;
- alternativa con aerógrafo;
- reserva/contacto;
- servicio claramente delimitado.

### 5.3 Fashion & Style Puebla

- Página: [Maquillaje Social Puebla](https://fashionstylepuebla.com/maquillaje-social/)

**Ventajas observadas:**

- H1 exacto;
- fotografías del servicio;
- experiencia declarada;
- equipo y servicio a domicilio;
- correspondencia directa entre consulta, página y oferta.

### 5.4 Perfil/entidad “MAQUILLAJE SOCIAL PUEBLA” e Instagram

**Por qué compite:** domina una superficie local y cuenta con un perfil de Instagram con una audiencia visible considerable. Para esta consulta, la coincidencia de nombre/servicio/ubicación es extremadamente fuerte.

**Ventajas observadas:**

- entidad local clara;
- 4.8 y 22 reseñas en el resultado observado;
- material visual y actividad social;
- coincidencia exacta con la búsqueda.

### 5.5 Bodas.com.mx

- Directorio: [Belleza para novias en Puebla](https://www.bodas.com.mx/belleza-novias/puebla)

No es un competidor directo perfecto para maquillaje social, pero explica la presión sobre búsquedas nupciales amplias como `belleza novias puebla`.

**Ventajas:**

- dominio/directorio con autoridad;
- decenas de proveedores;
- portfolios, reseñas, precios y perfiles;
- alta cobertura de intención comparativa.

### 5.6 AgendaPro y Fresha

- Ejemplo: [AgendaPro · maquillaje social Puebla](https://agendapro.com/mp/mx/maquillaje-social-puebla)

Son marketplaces de descubrimiento y reserva. Compiten por comparaciones de precio, disponibilidad y proximidad, aunque no reemplazan la autoridad personal de una maquillista.

### 5.7 Instagram, TikTok y Facebook

Estas superficies aparecen porque el servicio es altamente visual y porque Google interpreta que parte de la intención se satisface mejor viendo trabajos recientes. No deben copiarse ni sustituir la web, pero confirman que la evidencia visual y la actividad local importan.

---

## 6. Benchmark contra Shanty

| Dimensión | Shanty ya gana en | Competidor gana en | Diagnóstico |
|---|---|---|---|
| Técnica | Indexación, canonical, sitemap, schema base, SEO Lighthouse 100 | Algunos competidores pueden tener mayor antigüedad/autoridad | Shanty no está bloqueada técnicamente |
| Coincidencia de intención | Title y URL exactos; H1 pertinente; precio y CTA | Páginas Top 10 desarrollan mejor las ocasiones y el proceso | Relevancia base buena, profundidad insuficiente |
| Contenido local | Puebla, Angelópolis, Cholula y Atlixco | Marlene trabaja arquitectura y cobertura con mayor detalle | Necesita jerarquía, no keyword stuffing |
| Visual | Marca personal y al menos una foto real utilizable en el repositorio | Tefa, Fashion, Instagram y directorios demuestran más trabajos | Brecha evidente |
| Confianza | Nombre propio, precios, duración y condiciones básicas | Portfolios, reseñas, experiencia, procesos y reserva | Falta evidencia visible |
| Enlazado interno | 9 enlaces internos; segunda URL más enlazada del sitio | Competidores fuertes tienen clusters contextuales | Cantidad suficiente; calidad/contexto mejorables |
| Autoridad externa | Sitio y marca propios | Directorios, perfiles sociales y competidores tienen más señales externas | Brecha importante |
| Antigüedad | Página técnicamente bien lanzada | Competidores consolidados y directorios maduros | Shanty apenas tiene ~7 semanas |
| Rendimiento | CLS 0 y backend rápido | LCP de laboratorio de Shanty es 4.6 s | Mejora recomendable, no causa principal |

---

## 7. Content gap

La página ya menciona muchas entidades correctas, pero de forma comprimida. El Top 10 responde mejor a la decisión real de contratación.

### Cobertura actual útil

- definición implícita del servicio;
- ocasiones principales;
- estilos natural, elegante, glam y noche;
- preparación de piel y pestañas;
- duración;
- domicilio y cobertura;
- precio;
- maquillaje con peinado;
- tres preguntas frecuentes.

### Brechas que sí responden dudas reales

1. **Qué incluye exactamente el servicio.** La clienta necesita distinguir preparación, maquillaje, pestañas, retoques y exclusiones.
2. **Cómo elegir según horario y evento.** Día, noche, graduación, cena o sesión requieren decisiones diferentes.
3. **Natural vs. glam.** Mostrar qué cambia y cómo se adapta a facciones, piel, vestido y preferencias.
4. **Preparación previa.** Qué hacer antes de la cita y qué evitar.
5. **Duración y resistencia.** Explicar expectativas sin prometer resultados no verificables.
6. **Servicio a domicilio.** Zonas, condiciones y anticipación, únicamente con información confirmada.
7. **Proceso de reserva.** Consulta, confirmación, preparación y día del evento.
8. **Maquillaje + peinado.** Presentarlo como solución combinada sin canibalizar la página de peinado de novia.
9. **FAQs visibles y precisas.** Precio, duración, domicilio, qué incluye, grupos y anticipación si son condiciones reales.

No se recomienda crear bloques repetitivos sólo para incluir `maquillaje`, `Puebla` o variantes. Cada sección debe resolver una objeción comercial.

---

## 8. Visual gap

### Material localizado en el repositorio

| Asset | Clasificación segura | Uso posible |
|---|---|---|
| `assets/galeria-maquillaje-natural.avif` / `.webp` | Trabajo real de maquillaje; resultado completo visible | Hero o evidencia principal, con atribución honesta |
| `assets/galeria-maquillaje-social-elegante.avif` / `.webp` | Predomina peinado/parte posterior; no demuestra maquillaje | No utilizar como prueba principal de maquillaje |
| Otros assets | Cabello, infancia, marca u OG | No atribuibles a maquillaje social |

### Conclusión visual

Existe **una fotografía claramente utilizable** como trabajo real de maquillaje. Puede presentarse como un trabajo y admitir un recorte de detalle, pero no debe convertirse en varias supuestas clientas ni varios trabajos diferentes.

No hay material suficiente para demostrar honestamente:

- natural y glam;
- día y noche;
- piel y ojos;
- diferentes edades/tonos de piel;
- graduación, cena, fiesta o XV años;
- variedad sostenida de resultados.

### Necesidad de producción

Para competir visualmente se recomienda obtener de 6 a 10 trabajos reales, autorizados y bien fotografiados:

- rostro completo;
- detalle de piel;
- detalle de ojos;
- natural/día;
- glam/noche;
- evento o graduación;
- antes/después sólo con consentimiento;
- luz y color consistentes.

No deben asignarse contextos como “graduación”, “novia” o “evento” si no pueden comprobarse.

**Peso estimado:** la falta visual no explica por sí sola el ranking, pero reduce relevancia percibida, engagement, confianza y probabilidad de obtener menciones/enlaces.

---

## 9. Autoridad on-page y off-page

### On-page

Fortalezas:

- página dedicada al servicio;
- title, H1, canonical y schema coherentes;
- precio, ubicación y CTA;
- cluster básico con páginas de novia, locales y blog.

Debilidades:

- contenido corto;
- falta de portfolio visible;
- FAQs no marcadas;
- enlaces contextuales escasos;
- arquitectura temática menos desarrollada que la del principal competidor orgánico.

### Off-page

Search Console reporta:

- **0 enlaces externos detectados** hacia el dominio/URL en el informe disponible;
- 39 enlaces internos en todo el sitio;
- `/maquillaje-social-puebla` con 9 enlaces internos.

La ausencia reportada no demuestra matemáticamente que no exista ninguna mención en internet, pero sí que Google todavía no muestra autoridad enlazada relevante para este sitio joven.

Las SERP favorecen entidades con:

- Google Business Profile y reseñas;
- portfolios sociales activos;
- directorios de reserva o bodas;
- dominios con mayor antigüedad y arquitectura temática.

### Acciones externas legítimas futuras

- alinear Google Business Profile con el servicio y la landing cuando se autorice;
- publicar fotografías reales y recientes;
- obtener reseñas auténticas que mencionen el servicio de forma natural;
- mantener consistencia de nombre, teléfono, ubicación/zonas y URL;
- conseguir menciones editoriales o de proveedores/eventos reales;
- seleccionar directorios reputados y pertinentes, sin duplicación masiva;
- no comprar enlaces.

---

## 10. Enlazado interno

### Estado actual

La landing recibe enlaces desde varias secciones, pero la mayoría son enlaces globales de navegación o footer con anchors como:

- `Maquillaje`;
- `Maquillaje Puebla`;
- `Maquillaje social en Puebla`;
- `Maquillaje social Puebla`;
- `Servicio de maquillaje social`.

Fuentes detectadas:

- Home;
- maquillaje de novia;
- peinado de novia;
- Angelópolis;
- Atlixco;
- blog;
- curso;
- botox;
- artículo de graduación;
- artículo de maquillaje de boda.

### Oportunidades naturales

Sin tocar las páginas de novia congeladas, las mejores oportunidades futuras son:

1. enlace contextual desde el bloque de servicios del Home;
2. enlace dentro del artículo de graduación, junto a la necesidad concreta de maquillaje para el evento;
3. enlace contextual desde Angelópolis;
4. enlace contextual desde Atlixco;
5. enlaces desde artículos de eventos/maquillaje que realmente respondan la misma intención;
6. enlace de retorno desde la landing social hacia recursos pertinentes, para fortalecer el cluster.

Anchors naturales sugeridos:

- `maquillaje social en Puebla`;
- `maquillaje para graduación y eventos`;
- `maquillaje profesional para eventos`;
- `servicio de maquillaje social`.

No conviene repetir el mismo anchor exacto en todos los enlaces ni crear enlaces sin contexto.

---

## 11. Canibalización

| Query | URL que Google muestra | URL que debería responder | Evaluación |
|---|---|---|---|
| maquillaje social puebla | `/maquillaje-social-puebla` | `/maquillaje-social-puebla` | Sin canibalización; 17 impresiones históricas, posición ~10.2 |
| maquillista en puebla | Principalmente `/maquillaje-social-puebla`; una impresión/clic del Home HTTP | `/maquillaje-social-puebla` o una futura página amplia sólo si el volumen lo justifica | Solapamiento mínimo, muestra insuficiente |
| maquillaje puebla | `/maquillaje-social-puebla` | `/maquillaje-social-puebla` | Correcto |
| belleza novias puebla | `/maquillaje-social-puebla` y `/maquillaje-novia-puebla` | `/maquillaje-novia-puebla` | Conflicto real de intención amplia; principal distorsión del promedio |
| maquillaje y peinado en puebla | Social landing y Home en muestra mínima | Social/local según la intención | No hay evidencia suficiente para consolidar nada |

### Diagnóstico

No existe canibalización crítica para la consulta exacta `maquillaje social puebla`. Google entiende correctamente la URL objetivo.

Sí existe **solapamiento parcial con consultas nupciales amplias**, especialmente `belleza novias puebla`. La solución no es consolidar páginas ni tocar las landings congeladas. Es delimitar mejor el cuerpo de la landing social como servicio para eventos y dejar la intención nupcial principal a `/maquillaje-novia-puebla`.

---

## 12. Diagnóstico ponderado

Las siguientes cifras son una estimación razonada para priorizar; no son una medición científica ni un modelo de Google.

| Factor | Peso diagnóstico | Evidencia principal |
|---|---:|---|
| Relevancia/intención | 22% | Exposición nueva a `belleza novias puebla`; necesidad de delimitar social vs. novia |
| Autoridad externa | 20% | 0 enlaces externos reportados; SERP dominada por entidades/perfiles/directorios maduros |
| Profundidad de contenido | 18% | ~313 palabras frente a competidores que cubren ocasiones, proceso, preparación y FAQs |
| Experiencia visual | 15% | 0 imágenes visibles y sólo una foto real claramente utilizable en el repositorio |
| Enlazado interno | 8% | Buen conteo, pero predominan navegación/footer y anchors genéricos |
| SEO técnico/rendimiento | 7% | Sin bloqueo técnico; LCP de laboratorio 4.6 s mejorable |
| Canibalización | 5% | Parcial en consultas nupciales, no en el término exacto |
| Antigüedad/maduración | 5% | Página publicada el 8 de julio de 2026 |
| **Total** | **100%** | |

### Causa principal

La causa principal es la combinación **relevancia/intención + autoridad + profundidad**, agravada por una demostración visual insuficiente. No hay evidencia de una falla técnica que impida el Top 10.

---

## 13. Camino mínimo hacia Top 10

### P0 · Alto impacto / bajo riesgo

| Acción | Evidencia | Impacto esperado | Riesgo SEO | Esfuerzo | Dependencias |
|---|---|---|---|---|---|
| Delimitar claramente maquillaje social frente a novia en el cuerpo de la página | `belleza novias puebla` distorsiona la exposición; exact match social ya está cerca del Top 10 | Alto | Bajo si no se elimina contenido útil | Medio | Copy real y revisión SEO |
| Ampliar respuestas comerciales: qué incluye, ocasiones, día/noche, natural/glam, preparación, duración, domicilio y proceso | PAA y competidores cubren estas dudas con más profundidad | Alto | Bajo | Medio | Confirmar condiciones reales |
| Añadir la única foto real utilizable como evidencia honesta, sin multiplicar recortes como trabajos distintos | Landing actual tiene 0 imágenes; SERP es visual | Medio-alto | Bajo | Bajo | Autorización de uso y optimización de asset |
| Añadir enlaces contextuales desde Home, artículo de graduación y páginas locales no congeladas | 9 enlaces actuales, pero mayoritariamente globales | Medio | Bajo | Bajo | No tocar landings congeladas |
| Corregir acentos/claridad editorial y marcar FAQs visibles de forma consistente | Mejora comprensión y calidad; FAQ visible ya existe | Medio | Bajo | Bajo | Validar correspondencia exacta con schema |

### P1 · Importante / requiere trabajo o material

| Acción | Evidencia | Impacto esperado | Riesgo SEO | Esfuerzo | Dependencias |
|---|---|---|---|---|---|
| Producir portfolio real de 6–10 trabajos sociales | Sólo una foto verificable; competidores muestran variedad | Alto para confianza y conversión; indirecto para SEO | Bajo | Alto | Sesiones fotográficas y consentimientos |
| Fortalecer autoridad local externa | 0 backlinks reportados; Local Pack favorece entidades con reseñas/actividad | Alto a medio plazo | Bajo si es orgánico | Medio-alto | GBP, clientes, proveedores y directorios legítimos |
| Enriquecer el cluster con contenido útil de eventos sólo donde exista demanda | Competidor principal tiene arquitectura temática superior | Medio | Medio si se crean páginas delgadas | Medio | Search Console y material real |
| Mejorar LCP y carga de fuentes | LCP de laboratorio 4.6 s | Medio para UX, bajo-directo para ranking | Bajo | Medio | Auditoría de fuentes/carga crítica |
| Enriquecer `Service`, `FAQPage` e `ImageObject` con evidencia real | Schema actual es correcto pero básico | Bajo-medio | Bajo | Bajo | Contenido visible equivalente |

### P2 · Esperar datos o material adicional

| Acción | Motivo para esperar |
|---|---|
| Cambiar title, meta description o H1 | La consulta exacta ya llegó a ~10.2; primero conviene reforzar cuerpo y autoridad sin alterar la señal principal |
| Crear páginas separadas para maquillaje de día/noche | No hay volumen demostrado; riesgo de contenido delgado/canibalización |
| Crear una página amplia adicional para `maquillista Puebla` | La muestra es mínima y la landing social ya responde razonablemente |
| Pruebas CRO avanzadas | No hay suficiente tráfico orgánico de esta landing |
| Consolidar URLs | No existe evidencia que lo justifique |

---

## 14. Las cinco acciones con mayor probabilidad de mover la página

1. **Reforzar intención y profundidad del cuerpo**, dejando inequívoco que la página resuelve maquillaje social para eventos y no la intención principal de novia.
2. **Incorporar prueba visual real**, primero con el único trabajo verificable y después con un portfolio auténtico y diverso.
3. **Crear enlaces contextuales desde páginas no congeladas**, especialmente Home, graduación y páginas locales.
4. **Construir autoridad local externa legítima**, mediante Google Business Profile, reseñas reales, fotografías y menciones pertinentes cuando se autorice.
5. **Mejorar rendimiento y datos estructurados sin alterar señales principales**, con foco en LCP, fuentes, FAQ visible y `ImageObject` real.

---

## 15. Protección de las landings congeladas

No se recomienda modificar durante esta fase:

- `/peinado-novia-puebla`;
- `/maquillaje-novia-puebla`.

Sus enlaces actuales hacia maquillaje social pueden permanecer intactos. Las primeras oportunidades de enlazado deben implementarse en páginas no congeladas. Tampoco se recomienda reorientar la landing social hacia novia, porque aumentaría la canibalización y contaminaría la medición de `/maquillaje-novia-puebla`.

---

## 16. Respuestas finales

### 1. ¿Cuál es la causa principal de la posición ~23.6?

Una mezcla de relevancia todavía poco delimitada, contenido menos profundo que el Top 10, poca evidencia visual y autoridad externa débil. Además, el 23.6 está distorsionado por nuevas impresiones de consultas nupciales amplias y de posición baja; no representa la posición fija para `maquillaje social puebla`.

### 2. ¿Existe un problema técnico?

No existe un bloqueo crítico. HTTP, indexación, canonical, sitemap, robots y schema base funcionan. El LCP de laboratorio de 4.6 s y el favicon 404 son mejorables, pero no explican el ranking por sí solos.

### 3. ¿Existe canibalización?

No para `maquillaje social puebla`: Google muestra correctamente la landing social. Sí existe solapamiento parcial con `belleza novias puebla`, que debería corresponder principalmente a la landing de maquillaje de novia.

### 4. ¿El contenido actual satisface la intención?

La satisface de forma básica: ofrece servicio, precio, ocasiones, duración, estilos, domicilio y CTA. No la satisface con la profundidad, demostración y confianza de los mejores resultados.

### 5. ¿Qué hacen mejor los resultados Top 10?

Muestran más trabajos, explican mejor qué incluye el servicio, organizan contenido por ocasión, aportan proceso, duración, FAQs, precios/reserva, experiencia y señales locales o externas más fuertes.

### 6. ¿Cuánto pesa la falta de material visual?

Se estima en aproximadamente 15% del problema diagnóstico directo, con efecto adicional sobre engagement, confianza y autoridad. En esta categoría visual, una landing sin imágenes queda claramente en desventaja.

### 7. ¿Tenemos fotografías reales suficientes?

No. Sólo se localizó una fotografía claramente utilizable como prueba real de maquillaje. Es suficiente para mejorar el hero o una sección, no para construir un portfolio diverso.

### 8. ¿Qué oportunidades de enlazado interno existen?

Enlaces contextuales desde Home, el artículo de graduación, Angelópolis, Atlixco y artículos realmente relacionados. La página ya recibe nueve enlaces, pero predominan navegación y footer.

### 9. ¿Necesitamos más autoridad externa?

Sí. Search Console reporta cero enlaces externos y la SERP favorece perfiles/entidades con reseñas, actividad visual, directorios y mayor madurez. Debe construirse de forma legítima, sin comprar enlaces.

### 10. ¿Cuáles son las cinco acciones con mayor probabilidad de mover la página?

Reforzar intención/profundidad; incorporar evidencia visual real; mejorar enlazado contextual desde páginas no congeladas; fortalecer autoridad local externa; y optimizar LCP/schema sin alterar las señales principales.

### 11. ¿Modificarías title/H1/meta o los conservarías?

Los conservaría en la primera optimización. Son coherentes con la intención y la consulta exacta ya mostró posición media aproximada de 10.2 en el histórico disponible. Un cambio de snippet o H1 debe esperar a una muestra mayor y a evaluar primero las mejoras de cuerpo, imágenes, enlaces y autoridad.

### 12. ¿Recomiendas GO para una optimización en rama aislada?

**Sí, GO**, con alcance controlado: cuerpo de contenido, prueba visual real, enlaces contextuales desde páginas no congeladas, schema fiel y rendimiento. Sin cambiar URL, title, meta description, H1 o canonical en la primera iteración; sin tocar Producción hasta aprobar Preview y guarda SEO before/after.

---

## Fuentes y límites

Fuentes utilizadas:

- Google Search Console de `shantynachon.com`;
- GA4 de Shanty Nachón;
- inspección directa de Producción;
- Lighthouse público;
- reporte de enlaces de Search Console;
- SERP de Google observada desde Puebla/México;
- páginas públicas de [Marlene Rivera](https://marlenerivera.makeup/servicio/social), [Tefa Makeup Artist](https://www.tefamakeupartist.com/maquillaje-social), [Fashion & Style Puebla](https://fashionstylepuebla.com/maquillaje-social/), [Bodas.com.mx](https://www.bodas.com.mx/belleza-novias/puebla) y [AgendaPro](https://agendapro.com/mp/mx/maquillaje-social-puebla);
- repositorio local de Shanty Nachón.

Limitaciones:

- la página tiene menos de 90 días de historia;
- las consultas de bajo volumen pueden ocultarse por privacidad;
- las posiciones SERP varían según ubicación, dispositivo y momento;
- no se dispuso de una herramienta externa de backlinks, por lo que la autoridad se evaluó con Search Console y señales observables;
- no hay suficiente tráfico de la landing para conclusiones de conversión;
- los porcentajes diagnósticos son una priorización razonada, no una medición del algoritmo de Google.

**Estado final:** diagnóstico terminado. No se implementó ni publicó ningún cambio.
