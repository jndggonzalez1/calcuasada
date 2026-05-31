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
- **Sin backend:** No hay base de datos, no hay usuarios, no hay autenticación

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
  calculadora/
    [personas]/page.tsx        # Páginas SEO estáticas: /calculadora/10, /15, /20...
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

## Estado actual (mayo 2026)

| Ítem | Estado |
|------|--------|
| Calculadora funcional | ✅ Listo |
| Lógica dinámica de proteínas por tipo de persona | ✅ Listo |
| Distribuidor de lista entre amigos | ✅ Listo |
| Inputs Adultos + Niños con slider ♂/♀ | ✅ Listo |
| Logo en header centrado, sin texto duplicado | ✅ Listo |
| Favicon del browser | ✅ Listo |
| Páginas SEO estáticas | ✅ Listo |
| FAQ mejorado (8 preguntas variadas, sin repetición) | ✅ Listo |
| Página /acerca | ✅ Listo |
| Página /privacidad | ✅ Listo |
| Página /contacto (hola@calcuasada.com) | ✅ Listo |
| Nav bar y footer con links (Guías, Acerca, Contacto, Privacidad) | ✅ Listo |
| Sección /guias con 4 artículos SEO (+ brisket ahumado) | ✅ Listo |
| Sección /termometro — temperaturas internas de cocción | ✅ Listo |
| Nuevo color scheme: header crema, nav carbón, acento #E8460A | ✅ Listo |
| NavLink client component con active state en nav | ✅ Listo |
| Logo 180px con transparencia top/bottom compensada | ✅ Listo |
| Sección "Compartir y distribuir" unificada en calculadora | ✅ Listo |
| AdSense script en `<head>` | ✅ Listo |
| ads.txt en /public | ✅ Listo |
| sitemap.xml generado por Next.js | ✅ Listo |
| robots.txt | ✅ Listo |
| Cookie banner (localStorage, no reaparece) | ✅ Listo |
| Google Analytics G-G1VZBVG477 en `<head>` | ✅ Listo |
| Mensaje WhatsApp mejorado (emojis, secciones, dinámico) | ✅ Listo |
| Fix WhatsApp en desktop (popup blocker) | ✅ Listo |
| Frijoles en calculadora (🫘, 1 olla cada 8-10 personas) | ✅ Listo |
| Cantidades de acompañantes calibradas | ✅ Listo |
| Rediseño temático "Tierra y Brasa" | ✅ Listo |
| Constantes centralizadas en calcuasada-config.ts | ✅ Listo |
| Repositorio en GitHub | ✅ Listo (`main`) |
| Deploy en Vercel | ✅ Configurado (auto-deploy desde `main`) |
| Aprobación de Google AdSense | ⏳ Pendiente (falta Search Console + esperar indexación) |
| Google Search Console — enviar sitemap | ⏳ Pendiente (acción manual de Yeyito) |

---

## Historial de sesiones

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
