@AGENTS.md

---

# Calcuasada — Manual de Proyecto para Claude

> Este archivo es el contexto principal del proyecto. Actualízalo al cerrar cada sesión de trabajo para que la próxima instancia de Claude tenga todo el historial necesario sin depender de conversaciones anteriores.

---

## Proyecto

- **Nombre:** Calcuasada
- **URL:** calcuasada.com
- **Descripción:** Calculadora de carne asada gratuita para México. El usuario ingresa cuántas personas van y la calculadora devuelve la lista exacta de lo que necesita comprar.
- **Repositorio:** https://github.com/jndggonzalez1/calcuasada
- **Dueño:** Yeyito — de Nuevo León, México (GitHub: jndggonzalez1, email: jndggonzalez1@gmail.com)

---

## Stack técnico

- **Framework:** Next.js (App Router) + TypeScript
- **Estilos:** Tailwind CSS
- **Hosting:** Vercel — auto-deploy desde la rama `main` de GitHub
- **Dominio:** Namecheap → conectado a Vercel
- **Sin usuarios/autenticación:** sigue sin haber cuentas de usuario ni login
- **Backend mínimo (desde sesión 18):** Redis (Redis Cloud, plan Free, RAM-only) conectado vía Vercel Marketplace, usado solo para el contador de votos de la guía de tortillas. No es una base de datos de uso general — es el único feature con persistencia en servidor. Variable de entorno: `REDIS_URL` (inyectada automáticamente por Vercel en Production/Preview/Development)

---

## Estructura del proyecto

```
app/
  layout.tsx                  # Root layout: header con logo, nav, footer, AdSense <script>
  icon.png                    # Favicon del browser tab (logo de Calcuasada)
  page.tsx                    # Página principal: calculadora + secciones de contenido
  globals.css
  components/
    Calculadora.tsx            # Componente principal de la calculadora
    AdBanner.tsx               # Placeholder de anuncio de AdSense
  lib/
    calculator.ts              # Lógica de cálculo (usa calcuasada-config.ts)
    calcuasada-config.ts       # Todas las constantes: proteínas, acompañantes, precios
    redis.ts                   # Cliente singleton de ioredis (usa REDIS_URL)
  api/
    votar-tortilla/route.ts    # GET/POST del contador de votos maíz vs harina (Redis)
  calculadora/
    [personas]/page.tsx        # Páginas SEO estáticas: /calculadora/10, /15, /20...
  guias/
    tortillas-maiz-vs-harina/
      page.tsx                 # Guía + JSON-LD schema
      VotosTortilla.tsx        # Widget de votación interactiva (client component)
  acerca/
    page.tsx                   # Página "Acerca de" con nota personal de Yeyito
  privacidad/
    page.tsx                   # Aviso de privacidad (LFPDPPP + AdSense)
public/
  logo.png                    # Logo de Calcuasada (fondo transparente, usado en header)
```

---

## Lo que ya está construido

### Calculadora principal (`/`)
- 2 inputs: Adultos (default 6) y Niños/niñas, con slider ♂/♀ bajo Adultos
- Selector de nivel de apetito: Ligero, Normal, Tragones
- Proteínas como checkboxes en el form (Carne de res ON por default, Pollo/Salchicha/Queso OFF)
- Lógica dinámica de pool de proteínas: gramos por tipo de persona × apetito × 14 combinaciones
- Acompañantes calculados por tipo de persona (hombre/mujer/niño) con multiplicadores por apetito
- Cerveza calculada en latas por tipo de persona, mostrada como six-packs o cajas
- Botanas: reduce proteína en 5% (multiplicador 0.95)
- 3 validaciones inline: sin personas, sin proteínas, solo queso
- Distribuidor de lista entre amigos (hasta 8 personas, asignación por ítem, split automático)
- Estimador de costo con modo promedio y precio personalizado
- Botones de imprimir, PDF y compartir por WhatsApp (desactivados si no hay personas/proteínas)

### Secciones de contenido en la página principal
- "Cómo usar la calculadora" — 4 pasos
- Tips de carne asada estilo Monterrey — 6 tips
- FAQ — 8 preguntas y respuestas frecuentes

### Páginas adicionales
- `/acerca` — quién es Yeyito, por qué hizo el sitio, nota personal en español mexicano
- `/privacidad` — aviso de privacidad (cumple LFPDPPP, menciona AdSense)
- `/calculadora/[personas]` — páginas SEO estáticas para búsquedas como "carne asada para 20 personas"

### Layout global
- Header negro carbón (`#1E1A17`) con logo real de Calcuasada (PNG 56×56, fondo transparente) y nombre
- Favicon del tab del browser: `app/icon.png` (detectado automáticamente por Next.js App Router)
- Barra de navegación debajo del header (carbón profundo): links a Calculadora y Acerca como pills minimalistas
- Footer con copyright 2026, links a Acerca y Privacidad
- AdSense: `<script>` directo en `<head>` para visibilidad del crawler de Google
- Google Analytics: tag G-G1VZBVG477 en `<head>` directo, aplica a todas las páginas automáticamente

### Anuncios
- `AdBanner` colocado en: inicio de página, después de la calculadora, entre secciones, y en páginas /acerca y /privacidad
- Auto ads de AdSense activados
- Script cargado con `<script>` directo en `<head>` (no con `next/script`) para que Google lo detecte

---

## Decisiones técnicas importantes

- **AdSense en `<head>` directo:** Se intentó con `next/script` pero Google AdSense no lo detectaba. Se movió a un `<script>` nativo dentro de `<head>` explícito en el layout.
- **Sin `gh` CLI ni Homebrew:** La máquina de desarrollo no tiene `gh` ni `brew`. Los pushes se hacen con `git` directamente usando token en la URL del remote: `https://jndggonzalez1:TOKEN@github.com/jndggonzalez1/calcuasada.git`
- **Todo el contenido en español mexicano:** Textos, metadatos, FAQ, tips — siempre en español de México, no neutro ni de España.
- **Mobile first:** El diseño está centrado en móvil con `max-w-lg mx-auto`.
- **Favicon via `app/icon.png`:** Next.js App Router detecta automáticamente `icon.png` en el directorio `app/`. NO crear `favicon.ico` manualmente — fallará si el PNG no es RGBA. Dejar que Next.js lo sirva solo.
- **Constantes en `calcuasada-config.ts`:** Todos los valores numéricos (gramos de proteína, multiplicadores, precios) están en `/app/lib/calcuasada-config.ts`. Para ajustar cantidades, editar solo ese archivo.
- **Proteínas: gramos por tipo de persona** — Ligero: hombre 200g / mujer 150g / niño 100g. Normal: 300/230/150. Tragones: 400/320/200. Estos valores fueron calibrados iterativamente por el dueño.

---

## Preferencias del dueño

- Todo el contenido del sitio en **español mexicano** (no neutro, no de España)
- Diseño **mobile first**
- Esquema de color: **header crema `#FAF7F2`**, nav carbón `#2D2D2D`, acento naranja `#E8460A`, fondo crema `#FDF9F4`, footer oscuro `#1A1A1A`. NO usar naranja genérico de Tailwind.
- El usuario debe obtener su respuesta en menos de 15 segundos
- Sin cuentas de usuario, sin base de datos, sin backend
- Simple, rápido y directo

---

## Estado actual (junio 2026)

| Ítem | Estado |
|------|--------|
| Calculadora funcional | ✅ Listo |
| Lógica dinámica de proteínas por tipo de persona | ✅ Listo |
| Distribuidor de lista entre amigos (arriba de botones, fondo ámbar) | ✅ Listo |
| Inputs Adultos + Niños con slider ♂/♀ | ✅ Listo |
| Logo en header centrado, sin texto duplicado | ✅ Listo |
| Favicon del browser | ✅ Listo |
| Páginas SEO estáticas | ✅ Listo |
| FAQ 9 preguntas (nueva: cómo saber si está lista la carne) | ✅ Listo |
| Página /acerca | ✅ Listo |
| Página /privacidad | ✅ Listo |
| Página /contacto (hola@calcuasada.com) | ✅ Listo |
| Nav bar y footer con links (Guías, Acerca, Contacto, Privacidad) | ✅ Listo |
| Sección /guias con 5 artículos SEO (+ brisket ahumado + salsa verde) | ✅ Listo |
| Sección /termometro — temperaturas + técnica de la mano | ✅ Listo |
| Nuevo color scheme: header crema, nav carbón, acento #E8460A | ✅ Listo |
| NavLink client component con active state y whitespace-nowrap | ✅ Listo |
| Logo 180px con transparencia top/bottom compensada | ✅ Listo |
| Compartir imagen (reemplaza PDF): card diseñada + modal share/download | ✅ Listo |
| 4 tiers de corte de res (Rendidora/Confiable/Mamalona/Fifí) | ✅ Listo |
| Emojis PNG personalizados: salchicha, salsa, refresco | ✅ Listo |
| Precios personalizados: 14 variables completas | ✅ Listo |
| Frijoles en litros (0.5L), ~0.1L/persona, en acompañantes | ✅ Listo |
| "Cómo usar" como acordeón colapsable arriba del form | ✅ Listo |
| AdSense script en `<head>` | ✅ Listo |
| ads.txt en /public | ✅ Listo |
| sitemap.xml generado por Next.js | ✅ Listo |
| robots.txt | ✅ Listo |
| Cookie banner (localStorage, no reaparece) | ✅ Listo |
| Google Analytics G-G1VZBVG477 en `<head>` | ✅ Listo |
| Mensaje WhatsApp mejorado (emojis, secciones, dinámico) | ✅ Listo |
| Rediseño temático "Tierra y Brasa" | ✅ Listo |
| Constantes centralizadas en calcuasada-config.ts | ✅ Listo |
| Repositorio en GitHub | ✅ Listo (`main`) |
| Deploy en Vercel | ✅ Configurado (auto-deploy desde `main`) |
| Salsa casera: Verde / Roja / Piquín limón con ingredientes escalados por tipo | ✅ Listo |
| Guía /guias/salsa-verde-carne-asada con receta completa | ✅ Listo |
| Guía /guias/salsa-roja-carne-asada con receta completa | ✅ Listo |
| Guía /guias/salsa-chile-piquin-limon — favorita de Yeyito | ✅ Listo |
| /guias: card único "Salsas" con 3 botones (Verde/Roja/Piquín) | ✅ Listo |
| Botón de traducción ES/EN (Google Translate) en esquina superior derecha | ✅ Listo |
| Fix traducción ES/EN: localStorage + bloqueo de GT init (no reversa sola) | ✅ Listo |
| "BBQ Calculator" en inglés vía clases CSS es-only/en-only | ✅ Listo |
| error.tsx — error boundary con botón "Recargar página" | ✅ Listo |
| translate="no" en nav — evita que GT intercepte links de navegación | ✅ Listo |
| Título sección tiers de res: "¿Qué tipo de carne asada es? (presupuesto)" | ✅ Listo |
| localStorage: estado persiste entre navegación (lazy useState initializers) | ✅ Listo |
| Fix: six-packs siempre entero (Math.ceil) | ✅ Listo |
| Fix: customPrices merge con DEFAULT_PRICES al cargar localStorage viejo | ✅ Listo |
| Botón 🗑 Limpiar con doble-click para confirmar (evita accidentes) | ✅ Listo |
| Botón 📋 Copiar lista al portapapeles con feedback visual | ✅ Listo |
| 💾 Guardar configuración + 📂 Historial (hasta 3 entradas, tiempo relativo) | ✅ Listo |
| 🔗 Copiar link con estado completo (incluye precios, toggles y tipo de salsa) | ✅ Listo |
| /privacidad: sección de localStorage explicada (renumeradas secciones) | ✅ Listo |
| Favicon explícito en metadata (`icons` en layout.tsx apuntando a /logo.png) | ✅ Listo |
| Distribuidor siempre desplegado (sin botón para abrir) | ✅ Listo |
| Botón ? en distribuidor con instrucciones de uso | ✅ Listo |
| Chile piquín en chiles enteros (no cucharadas) — calculadora + guía | ✅ Listo |
| Precios individuales por ingrediente de salsa casera (tomatillo, jitomate, etc.) | ✅ Listo |
| Google Search Console — reindexar URLs nuevas (salsas y termómetro) | ⏳ Pendiente (acción manual de Yeyito) |
| Fix AdSense: `async` en script de adsbygoogle | ✅ Listo |
| Aprobación de Google AdSense | ✅ Aprobada — ads en proceso de activación (24-48h) |
| Guía marinada para arrachera (/guias/como-marinar-arrachera) | ✅ Listo |
| Guía guacamole para carne asada (/guias/guacamole-para-carne-asada) | ✅ Listo |
| Expansión de salsas verde/roja/piquín (500→1100 palabras c/u) | ✅ Listo |
| Re-submit a Google AdSense después de mejorar contenido | ⏳ Pendiente (acción manual de Yeyito) |
| JSON-LD schema markup (Recipe/HowTo/FAQPage) en guías de salsas, marinada, guacamole y home | ✅ Listo |
| Guía /guias/tortillas-maiz-vs-harina (historia maíz/harina, tono neutral sin declarar ganadora) | ✅ Listo |
| Primer feature con backend: Redis (Redis Cloud vía Vercel Marketplace) conectado al proyecto | ✅ Listo |
| Votación interactiva maíz vs harina en la guía de tortillas, con resultados en vivo (%) | ✅ Listo |

---

## Historial de sesiones

### Sesión 18 (junio 2026) — Primer feature con backend: votación interactiva de tortillas

- **Calcuasada ya no es 100% sin-backend** — esta sesión introdujo el primer feature que requiere persistencia en servidor. Se activó **Redis** (plan Free, RAM-only sin persistencia en disco) vía el **Vercel Marketplace** (Vercel descontinuó su KV nativo; ahora ofrece Redis de terceros como Redis Cloud). La base de datos se llama `calcuasada-votos`, conectada al proyecto en Production/Preview/Development — Vercel inyecta automáticamente la variable `REDIS_URL`.
- **Setup local** — se usó `npx vercel login` → `npx vercel link` → `npx vercel env pull .env.local` para traer las credenciales a la máquina de desarrollo sin copiarlas a mano. `.env.local` y `.vercel/` ya estaban en `.gitignore` por defecto.
- **`app/lib/redis.ts`** — cliente singleton de `ioredis` usando `process.env.REDIS_URL`.
- **`app/api/votar-tortilla/route.ts`** — API route con `GET` (devuelve porcentajes) y `POST` (registra voto). Protecciones anti-bot:
  - Honeypot field (`hp`) — si viene lleno, se rechaza
  - Validación de User-Agent (rechaza UAs vacíos o muy cortos)
  - Rate limit: 1 voto por IP cada 24h, usando hash SHA-256 de la IP como key en Redis con TTL
  - **Los resultados solo se exponen en porcentaje, nunca en número de votos crudo** — decisión explícita de Yeyito para no revelar cuánta gente ha votado
- **`app/guias/tortillas-maiz-vs-harina/VotosTortilla.tsx`** — client component con dos botones (🌽 De maíz / 🫓 De harina). Usa `localStorage` para que el usuario no pueda re-votar desde el mismo browser, y hace polling cada 30s al API para refrescar los porcentajes y dar sensación de "en vivo". Las barras de progreso usan los colores de marca (`brasa` / `carbon`).
- **Posición del widget** — se colocó originalmente después de la sección "El debate que nadie gana", pero Yeyito pidió moverlo justo debajo del `<h1>`, antes de cualquier texto, para maximizar la probabilidad de voto antes de que el usuario pierda interés en seguir leyendo.
- **Riesgo conocido y aceptado:** el plan Free de Redis es RAM-only sin persistencia a disco. Si la instancia se reinicia, los votos se resetean a 0. Yeyito lo aceptó como riesgo tolerable para un contador de votos no crítico.

### Sesión 17 (junio 2026) — Mejora de contenido para re-submit a AdSense

- **Rechazo de AdSense por "Low value content"** — Google rechazó el sitio porque las páginas de salsa tenían ~500 palabras y el contenido no era suficientemente profundo.
- **Expansión de las 3 páginas de salsa** (verde, roja, piquín) de ~550 → ~1,100 palabras cada una:
  - Salsa verde: sección "por qué el asador cambia todo", variaciones (jalapeño, chipotle, aguacate, molcajete), troubleshooting completo (5 problemas + soluciones), cómo guardar, FAQ 5 preguntas
  - Salsa roja: sección sobre el chile de árbol vs otros chiles (tabla comparativa), variaciones con guajillo/chipotle/mezcla, troubleshooting, cómo guardar, FAQ 4 preguntas
  - Piquín: historia del chile piquín en el norte de México, dónde conseguirlo en Monterrey (con opciones), variaciones (naranja agria, sal de grano, ajo negro), troubleshooting, cómo guardar, FAQ 5 preguntas
- **Nueva guía: `/guias/como-marinar-arrachera`** (~900 palabras):
  - Cuándo marinar y cuándo NO (arrachera suavizada no necesita)
  - 2 recetas: marinada clásica (soya + limón) y marinada norteña (naranja + limón)
  - Tabla de tiempos de marinado con resultados
  - La ciencia del ácido, sal, aceite y azúcar en la marinada
  - Errores comunes (marinar en metal, reutilizar marinada, no secar antes de asar)
  - Marinadas express con ingredientes comunes (Valentina, cerveza, balsámico)
  - FAQ 5 preguntas
- **Nueva guía: `/guias/guacamole-para-carne-asada`** (~900 palabras):
  - Cómo elegir aguacates maduros (3 pruebas: tacto, rabo, color)
  - Receta clásica norteña con ingredientes y proporciones
  - El secreto para que no se oxide (plástico directo sobre la superficie)
  - Tabla de cantidades por número de personas
  - Variaciones (jitomate, granada, mango, versión tatemada del asador)
  - FAQ 5 preguntas
- **Actualización del índice `/guias`** — 2 nuevas tarjetas, ahora muestra 6 artículos + card de salsas
- **Actualización del sitemap** — 2 URLs nuevas agregadas
- Push a main, Vercel deployando automáticamente

### Sesión 16 (junio 2026) — Diagnóstico ads.txt

- **ads.txt "not found" en AdSense** — Google AdSense mostraba warning de ads.txt no encontrado. Se verificó que el archivo `/public/ads.txt` existe con el contenido correcto (`google.com, pub-1068311584605438, DIRECT, f08c47fec0942fa0`) y que la URL `calcuasada.com/ads.txt` carga correctamente en el browser. Conclusión: no hay problema técnico, AdSense simplemente no ha re-crawleado aún. El warning desaparecerá solo en unos días sin ningún cambio en el código.

### Sesión 15 (junio 2026) — Fix AdSense async

- **AdSense aprobado** — Google aprobó la cuenta de Yeyito.
- **Fix `async` en script de AdSense** — El script de `adsbygoogle.js` en `layout.tsx` no tenía el atributo `async`, lo que impedía que Auto Ads funcionara. Se agregó `async` y se hizo push. Los anuncios pueden tardar 24-48h en aparecer después de la aprobación.

### Sesión 14 (junio 2026) — Favicon, distribuidor UX y precios de salsa casera

- **Favicon explícito** — Se agregó `icons: { icon, shortcut, apple: "/logo.png" }` al metadata en `layout.tsx`. Antes Google Search Console mostraba el triángulo de Vercel; ahora el tag `<link rel="icon">` apunta directamente al logo.
- **Distribuidor siempre abierto** — `distribuidorOpen` inicializa en `true`. Ya no se necesita picar un botón para ver el input de agregar personas. El wrapper condicional `{distribuidorOpen && (...)}` fue eliminado.
- **Botón ? en distribuidor** — Reemplaza la flecha ▼/▲ del header. Es un círculo ámbar que despliega/colapsa un panel con 3 instrucciones: (1) agregar personas, (2) asignar ítems, (3) el mensaje de WhatsApp muestra todos los ingredientes con quién compra qué.
- **Chile piquín en chiles enteros** — Cambiado de cucharadas a piezas individuales en toda la app:
  - Fórmula: `Math.max(15, Math.round(30 * batches))` chiles (antes era cucharadas)
  - Unidad en lista de compras: `"pzas"` (antes `"cdas"`)
  - Texto inline en ingredientes caseros: "X chiles piquín" (antes "X cdas de chile piquín")
  - Guía `/guias/salsa-chile-piquin-limon`: "25 a 35 pzas" en ingredientes; tabla de nivel de picante en chiles (suave: 10-15, medio: 25-35, picante: 40+)
- **Precios individuales salsa casera** — `DEFAULT_PRICES` en `calcuasada-config.ts` ahora incluye 7 precios nuevos: `chile_piquin` $0.30/pza, `tomatillo` $3.00/pza, `jitomate` $4.00/pza, `chile_serrano` $2.00/pza, `chile_arbol` $1.50/pza, `ajo` $1.00/diente, `cilantro` $4.00/puñito. El total ya no usa constantes flat (`SALSA_PIQUIN_COSTO_RECETA` / `SALSA_CASERA_COSTO_RECETA`) — calcula multiplicando cantidad × precio unitario por cada ingrediente de la salsa activa.

### Sesión 13 (junio 2026) — Salsas, Google Translate fixes, guías y UX

- **Fix Google Translate (doble sentido)** — Dos bugs distintos resueltos:
  1. Página revertía a inglés sola: GT inicializaba aunque el usuario quisiera español. Fix: `window.__calcuasadaWantsEn` se setea en el primer script del `<head>` desde `localStorage`; `googleTranslateElementInit` es no-op si esa bandera es false. GT nunca corre cuando el usuario no lo pidió.
  2. Inglés no persistía (revertía a español): el key `calcuasada_lang_en` estaba en `sessionStorage` que se borra en mobile al recargar. Fix: movido a `localStorage` en `TranslateButton.tsx` y en el script del `<head>`.
- **"BBQ Calculator" en inglés** — GT traducía "Carne Asada" como "Roast Beef". Fix: clases CSS `es-only` y `en-only` en `globals.css` usando selector `html.translated-ltr` (que GT agrega al `<html>`). El `<h1>` de la home y el subtítulo del header ahora muestran "BBQ Calculator" / "Mexican BBQ Calculator" en inglés sin JS extra.
- **Salsa casera: 3 tipos** — `tipoSalsa: 'verde' | 'roja' | 'piquin'` (antes era solo verde/roja). UI: botones [🟢 Verde] [🔴 Roja] [🌶️ Piquín limón] aparecen en fila debajo de [Comprada] [Casera]. Ingredientes y costo escalan por tipo:
  - Verde/Roja: tomatillos o jitomates + chiles + cebolla + ajo (±cilantro)
  - Piquín: cucharadas de chile piquín + limones extra + ajo tostado. Costo: `SALSA_PIQUIN_COSTO_RECETA = $25`.
  - `tipoSalsa` se guarda en localStorage, historial y URL params (`salsat=verde|roja|piquin`).
- **Guías de salsas** — 3 páginas de receta individuales:
  - `/guias/salsa-verde-carne-asada` (ya existía)
  - `/guias/salsa-roja-carne-asada` (nueva) — jitomates tatemados + chiles de árbol + cebolla + ajo
  - `/guias/salsa-chile-piquin-limon` (nueva) — receta favorita de Yeyito, como le enseñó su abuelito. Piquines rojos preferidos. Sin agua, solo limón como base líquida.
  - El índice `/guias` ahora tiene UN solo card "🫙 Salsas para carne asada — 3 recetas" con 3 botones en lugar de 3 cards separados.
- **`app/error.tsx`** — Error boundary de Next.js App Router. Cuando un componente crasha (ej. conflicto React+Google Translate en navegación), muestra "🥩 Algo salió mal / Recargar página" en vez del error genérico del browser.
- **`translate="no"` en `<nav>`** — Previene que Google Translate intercepte los clicks en los links de navegación (Calculadora, Guías, etc.) durante la navegación client-side, que causaba el error "This page couldn't load".

### Sesión 12 (junio 2026) — localStorage, bugs, UX y compartir link

- **localStorage con lazy initializers** — El estado de la calculadora (adultos, niños, slider, tipo, proteínas, tier, extras, precios, filas desactivadas, salsa casera) se persiste en `localStorage` key `"calcuasada-state"`. Se usa lazy `useState` initializers en lugar de `useEffect` para evitar race condition que sobreescribía con defaults en el primer render. Solo aplica en la página principal (`persistState` prop). Las páginas SEO no cargan localStorage.
- **Fix traducción ES/EN** — El cookie `googtrans` persistía entre sesiones y causaba que la página abriera en inglés. Fix: script en `<head>` limpia el cookie a menos que `sessionStorage.getItem('calcuasada_lang_en')` exista. `TranslateButton.tsx` actualizado para setear/limpiar esa clave de sessionStorage.
- **Fix six-packs fraccionados** — `formatCerveza` usaba `latas/6` crudo. Fix: `Math.ceil(latas/6)`.
- **Fix customPrices stale** — Al cargar `customPrices` de localStorage viejo (sin campo `frijoles`), el merge era incompleto. Fix: `{ ...DEFAULT_PRICES, ...saved.customPrices }` en lugar de solo `saved.customPrices`.
- **Botón Limpiar con confirmación** — Primer click muestra "¿Seguro? →" en rojo por 3s, segundo click ejecuta el reset. Borra localStorage también.
- **📋 Copiar lista** — Nuevo botón en la grid de compartir. Copia el texto de `buildShareText()` al clipboard. Grid cambia de 3 columnas a 2×2.
- **💾 Historial de configuraciones** — Key `"calcuasada-historial"` en localStorage, hasta 3 entradas. Botón "💾 Guardar" en el header del form. Acordeón "📂 Configuraciones guardadas" solo aparece si hay entradas. Cada entrada muestra `"N personas · Tipo · proteínas · hace Xh"`. Un click carga la configuración.
- **🔗 Compartir link con estado completo** — Función `buildShareUrl()` genera URL con todos los params: adultos, ninos, sl, tipo, res/pollo/salchicha/queso, tier, cerveza/refrescos/botanas, casera, off (filas desactivadas), tab=custom + p_* (14 precios). ~337 chars con todo. Al abrir, `readUrlParams()` lee los params y los lazy initializers los usan con prioridad sobre localStorage. Botón naranja destacado en la sección de compartir.
- **Aviso de privacidad** — Nueva sección 3 "Almacenamiento local (localStorage)" en `/privacidad`. Secciones renumeradas hasta 7.

### Sesión 11 (junio 2026) — Traducción ES/EN y ajuste de título
- **Botón de traducción** — `TranslateButton.tsx` client component en esquina superior derecha del header crema. Usa Google Translate vía cookie `googtrans`. Al picar "🌐 EN" traduce toda la página al inglés; al picar "🌐 ES" regresa al español recargando sin cookie. El banner feo de Google Translate está oculto con CSS en `globals.css`. Script de Google Translate agregado al `<head>` del layout.
- **Título tiers de res** — cambiado de "Tipo de corte de res (presupuesto)" a "¿Qué tipo de carne asada es? (presupuesto)" para mayor coherencia con el tono conversacional del form.

### Sesión 10 (mayo 2026) — Salsa casera, SEO fix, guía Monterrey y UX form
- **Fix Search Console** — sitemap y robots.txt cambiados de `calcuasada.com` a `www.calcuasada.com`. `metadataBase` agregado al layout. Yeyito debe reindexar las 5 URLs afectadas manualmente.
- **Salsa casera** — toggle Comprada/Casera en el item de salsa de la lista de compras. En modo Casera muestra ingredientes escalados al # de personas (tomatillos, chiles, cebolla, ajo, cilantro — sin sal). Cebolla salsa fusionada con la cebolla de la carne en activeItems (reportes), con nota "+X pedazo(s) para salsa". Costo de salsa casera = $33.50 por receta (7 personas), escalado automáticamente.
- **Precio salsa comprada** — actualizado de $45/L a $100/L ($1 cada 10g, bote 300g = $30).
- **Guía salsa verde** — nueva página `/guias/salsa-verde-carne-asada` con receta completa, tips, recomendación especial de Yeyito (grasa de la carne), y link de vuelta a la calculadora. Usa `/salsa.png` como thumbnail en el índice de guías. Incluida en sitemap.
- **Guía Monterrey actualizada** — ribeye agregado como corte premium (favorito de Yeyito, $800–$1,200/kg), reordenado a 2° lugar (después de arrachera). Nueva sección "Técnica del sellado": fuego alto para sellar → fuego lento para cocer. Precios actualizados: arrachera $320–$450, costilla $500–$650, agujas $150–$220. Error nuevo en errores comunes: no sellar antes de bajar el fuego.
- **Títulos del form centrados** — ¿Cuántos van?, Tipo de carne asada, Tipo de corte de res (presupuesto) y Proteínas ahora tienen recuadro `brasa-light` con borde naranja y texto centrado.

### Sesión 9 (mayo 2026) — UX calculadora, compartir imagen, tiers de res y emojis personalizados
- **Distribuidor reordenado** — se mueve arriba de los botones de compartir, fondo ámbar, flecha más notoria. El formulario de agregar personas también sube arriba de los botones.
- **Compartir imagen** — reemplaza el PDF por generación de imagen con html2canvas. Card diseñada con logo real, header naranja, secciones por categoría (proteínas/acompañantes/bebidas) y vista de distribución por persona cuando está activo el distribuidor. Modal con `maxHeight: 80vh`, imagen con scroll y botones 📤 Compartir / ⬇️ Descargar siempre visibles. Web Share API en móvil.
- **4 tiers de corte de res** — aparecen bajo el selector de tipo de carne asada, solo cuando "Carne de res" está activa. Rendidora $250/kg, La confiable $390/kg (default), Mamalona $600/kg, Mamalona fifí $850/kg. Botón `?` despliega detalles (cortes + descripción) para ambos cards de la misma fila simultáneamente. Integrado al estimador de costo.
- **Precios personalizados completos** — ahora incluye las 14 variables: res, pollo, salchicha, queso, tortillas, cebolla, limón, aguacate, salsa, carbón, hielo, frijoles, cerveza, refrescos. Total calcula todos los ítems.
- **Precios ajustados** — pollo $120, queso $190, tortillas $25, hielo $15, refrescos $40.
- **Frijoles en litros** — cambiado de "ollas" a litros con incrementos de 0.5L. Base: ~0.1L por persona (hombre 0.12/mujer 0.10/niño 0.06). Ahora aparece en la sección de acompañantes con toggle.
- **Emojis PNG personalizados** — `renderLabel()` helper reemplaza 🌭→salchicha.png, 🫙→salsa.png, 🥤→refresco.png en toda la UI. Tamaño 1.7em con verticalAlign compensado. Precarga base64 al montar.
- **"Cómo usar" como acordeón** — `ComoUsarAccordion.tsx` client component, colapsable, centrado, se ubica entre el título y la calculadora.
- **FAQ primer pregunta** — "¿Cómo sé si ya está lista la carne?" con respuesta sobre termómetro y finger test. Botones pill que navegan a `/termometro#temperaturas` y `/termometro#tecnica-mano`.
- **Técnica de la mano en /termometro** — nueva sección `id="tecnica-mano"` con tabla de 5 gestos → término. Sección de res tiene `id="temperaturas"`.
- **Título del termómetro** — emoji 🌡️ separado del h1 para evitar wrap en móvil.
- **Nav fix** — `whitespace-nowrap` en NavLink, padding reducido a `px-3` y gap a `gap-1` para que los 4 links quepan en móvil sin cortarse.

### Sesión 8 (mayo 2026) — Rediseño visual, guía brisket y sección Termómetro
- **Guía de brisket ahumado** — nueva página `/guias/como-hacer-brisket-ahumado`: temperatura, madera, cómo envolver, probe tender, errores comunes, resumen 9 pasos. Imagen del smoker PNG como header de la guía y thumbnail en el índice.
- **Logo transparente** — reemplazado `public/logo.png` con versión que tiene canal alpha (la anterior era RGB sin transparencia y mostraba fondo negro).
- **Nuevo color scheme completo:**
  - Header: crema `#FAF7F2` con sombra suave
  - Nav bar: carbón oscuro `#2D2D2D`
  - Acento principal: naranja `#E8460A` (antes rojo `#B83A2A`)
  - Fondo de página: `#FDF9F4`
  - Footer: `#1A1A1A` con texto blanco
  - Tokens actualizados en `globals.css`
- **NavLink client component** — `app/components/NavLink.tsx` usa `usePathname` para resaltar el link activo en naranja `#E8460A` automáticamente.
- **Logo más grande** — de 100px → 140px → 180px. Márgenes negativos `-mt-4 -mb-9` para compensar transparencia arriba y abajo del PNG.
- **Sección "Compartir y distribuir"** — distribuidor de amigos + 3 botones (Imprimir, PDF, WhatsApp) agrupados en una sola tarjeta con header naranja y descripción visible. Ya no están sueltos al final.
- **Cerveza siempre en six-packs** — eliminada la lógica de conversión a cajas. Ahora siempre muestra "X six-packs (Y latas)".
- **Texto "Distribuir compras entre tus amigos"** — corregido desde "Distribuir lista".
- **"Cómo usar la calculadora"** — 4 pasos reescritos: refleja que es en tiempo real (sin botón calcular), menciona proteínas/extras y compartir/distribuir.
- **Página /acerca reescrita** — más personal y divertida: menciona amor por arrachera/costilla/brisket, el clásico debate familiar de cuánta carne, lista de funciones actualizadas. Texto corregido: "asada" → "carne asada", sin mención de fútbol ni Sabritas.
- **Sección /termometro** — nueva página completa con referencia de temperaturas internas: res (con "Al punto" ⭐ favorito de Yeyito entre medio y tres cuartos), pollo, cerdo y cordero. Card resumen con las 3 temperaturas clave. Botón 🌡️ Temps en nav. Entrada en sitemap.

### Sesión 7 (mayo 2026) — Contenido SEO, AdSense y ajustes de calculadora
- **Header rediseñado** — logo centrado y más grande (100×100), sin texto "Calcuasada" (ya está en el logo), subtítulo abajo
- **Sección /guias** — índice + 3 artículos completos (600+ palabras c/u): carne asada estilo Monterrey, cuánto carbón, lista de compras completa. Enlace en nav y footer.
- **Página /contacto** — hola@calcuasada.com
- **Cumplimiento AdSense:**
  - `ads.txt` en `/public` con publisher ID
  - `sitemap.xml` generado via `app/sitemap.ts` (todas las páginas)
  - `robots.txt` via `app/robots.ts` apuntando al sitemap
  - Cookie banner (fijo abajo, se cierra con localStorage, no reaparece)
  - Aviso de privacidad: fecha corregida a 2026, email y link a /contacto
- **Google Analytics** — tag G-G1VZBVG477 en `<head>` del layout raíz (cubre todas las páginas automáticamente)
- **AdBanner limpiado** — sin texto ni borde "Anuncio", solo espacio invisible del color del fondo
- **Colores corregidos** — eliminado todo `orange-50`/`orange-500` viejo de /acerca y /privacidad
- **WhatsApp mejorado** — mensaje con emojis por ítem, secciones (PROTEÍNAS / ACOMPAÑANTES / BEBIDAS), header con personas y nivel, footer con CTA. Fix de popup blocker en desktop usando `<a>` dinámico en lugar de `window.open`. Mensaje 100% dinámico basado en `activeItems`.
- **FAQ reescrito** — 8 preguntas variadas sin repetición: arrachera vs costilla, campechana, temperatura de parrilla, cerveza, sobras, niños, distribuidor
- **Guía de carbón corregida** — eliminado modelo "1 kg por persona" (era excesivo), reemplazado con tabla realista por tamaño de asador (3–9 kg total), explicación de que el asador manda
- **Cantidades de acompañantes calibradas:**
  - Tortillas: 7/5/3 → 3.5/3/2 por persona (3-4 por persona)
  - Cebolla: 0.33/0.25/0.15 → 0.25/0.20/0.10 (1 cada 4-5 personas)
  - Limones: 1.0/0.8/0.5 → 0.8/0.6/0.3 (~1 kg cada 10 personas)
  - Aguacates: 0.25/0.20/0.15 → 0.40/0.35/0.20 (1 cada 2-3 personas)
- **Frijoles agregados** — nuevo acompañante 🫘 en calculadora: 1 olla cada 8-10 personas, con toggle, aparece en lista y en WhatsApp
- **Papas (botanas)** — ajustado de 1/6 a 1/5 personas

### Sesión 6 (mayo 2026) — Refactor mayor + logo
- **Feature: Distribuidor de lista** — sección colapsable entre estimador de costo y botones de acción. Hasta 8 personas, asigna qué compra cada quien, divide cantidades (ceil), valida cobertura total antes de exportar. WhatsApp/PDF/Imprimir generan texto agrupado por persona si está activo y válido.
- **Refactor completo de la calculadora:**
  - 3 inputs separados (hombres/mujeres/niños) → 2 inputs (adultos con slider ♂/♀ + niños). Default 6 adultos.
  - Proteínas movidas de "extras" al form como checkboxes: Carne de res ON, resto OFF por default
  - Eliminado: hamburguesas, toggle caguamas/latas, sliders separados por sexo
  - Pool dinámico de proteínas: gramos por tipo de persona × nivel de apetito, distribuidos según 14 combinaciones activas
  - Acompañantes recalculados por tipo de persona (hombre/mujer/niño) con multiplicadores propios
  - Cerveza: latas por tipo de persona por nivel, redondeado a six-pack, mostrado como six-packs o cajas
  - Botanas: multiplica proteína total × 0.95
  - 3 validaciones inline (no alerts): sin personas, sin proteínas, solo queso
  - Constantes centralizadas en `/app/lib/calcuasada-config.ts`
- **Ajuste de gramos de proteína** — valores reducidos: Ligero 200/150/100g, Normal 300/230/150g, Tragones 400/320/200g (hombre/mujer/niño). Los valores originales eran demasiado altos.
- **Logo en header** — reemplaza el emoji 🥩🔥 con el logo real PNG (56×56, fondo transparente)
- **Favicon del browser tab** — `app/icon.png` detectado automáticamente por Next.js App Router. Nota: no crear `favicon.ico` manualmente (falla si no es RGBA)

### Sesión 5 (mayo 2026) — Mejoras a la calculadora
- Toggle por ingrediente en la lista de compras: switch izquierdo que apaga/prende cada ítem
- Texto por persona en gris tenue debajo de cada ingrediente (dinámico según tipo ligero/normal/tragones)
- El estimador de costo excluye ingredientes apagados
- Cerveza: toggle Caguamas / Latas con tagline "No puede haber carnita asada sin cervecita 🍻"
- En modo latas: muestra número de latas + equivalente en sixpacks (≈ X sixpacks)
- Sliders de proporción hombres/mujeres y niños/niñas debajo de cada input, centrados al 50/50 por defecto
- Cajita resumen al final del form mostrando: X hombres · X mujeres · X niños · X niñas · Total N participantes
- Fix: posición del círculo del switch corregida con `left-1` explícito

### Sesión 4 (mayo 2026) — Rediseño temático
- Rediseño visual completo: concepto "Tierra y Brasa"
- Header cambiado de naranja a negro carbón (`#1E1A17`), ícono 🥩🔥
- Fondo del sitio cambiado de gris frío a crema/masa (`#FAF5EE`)
- Acento principal: rojo ladrillo/guajillo (`#B83A2A`) en lugar de `orange-500`
- Tokens de color definidos en `globals.css` con `@theme inline` de Tailwind v4: `brasa`, `brasa-light`, `brasa-mid`, `carbon`, `carbon-mid`, `masa`
- Nav pills estilizados para fondo oscuro (texto blanco translúcido con borde sutil)
- Push a `main`, deployado en Vercel

### Sesión 1 (mayo 2026) — Setup inicial
- Creación del repo en GitHub (`jndggonzalez1/calcuasada`)
- `.gitignore` estándar de Next.js ya incluido por Create Next App
- Autenticación con GitHub via Personal Access Token (fine-grained) en la URL del remote
- Primer push de todos los archivos del proyecto

### Sesión 3 (mayo 2026) — Navegación y cierre
- Nav bar rediseñada: botones centrados con estilo pill (rounded-full, border) en lugar de texto plano
- CLAUDE.md creado como manual vivo del proyecto para futuras sesiones

### Sesión 2 (mayo 2026) — Contenido y páginas
- AdSense agregado primero con `next/script`, luego movido a `<script>` directo en `<head>`
- Secciones de contenido agregadas a la página principal: cómo usar, tips Monterrey, FAQ
- Creadas páginas `/acerca` y `/privacidad`
- Footer actualizado con links a ambas páginas y año 2026
- Nav bar agregada debajo del header naranja
- `AdBanner` agregado en páginas /acerca y /privacidad

---

## Roadmap — Fase 2 (solo si hay tráfico)

- Calculadora de cerveza
- Calculadora de brisket
- Calculadora de carbón
- Calculadora de costo por persona

---

## Instrucciones para Claude en futuras sesiones

1. Leer este archivo completo antes de hacer cualquier cambio
2. Siempre escribir contenido en español mexicano
3. Leer `node_modules/next/dist/docs/` antes de usar APIs de Next.js (ver AGENTS.md)
4. Al cerrar la sesión, actualizar la sección "Historial de sesiones" y "Estado actual" con lo que se hizo
5. No agregar funcionalidades no solicitadas — el proyecto es intencionalmente simple
6. Para hacer push usar git con token en la URL (no hay `gh` CLI disponible)
7. **Google Analytics (G-G1VZBVG477) ya está en `app/layout.tsx` y aplica a TODAS las páginas automáticamente.** No agregar el tag manualmente en páginas individuales — el layout raíz lo cubre todo. Si se crea un layout anidado nuevo, verificar que herede del raíz y no necesite el tag por separado.
