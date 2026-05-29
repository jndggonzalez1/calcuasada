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
  layout.tsx                  # Root layout: header, nav, footer, AdSense <script>
  page.tsx                    # Página principal: calculadora + secciones de contenido
  globals.css
  components/
    Calculadora.tsx            # Componente principal de la calculadora
    AdBanner.tsx               # Placeholder de anuncio de AdSense
  lib/
    calculator.ts              # Lógica de cálculo de cantidades
  calculadora/
    [personas]/page.tsx        # Páginas SEO estáticas: /calculadora/10, /15, /20...
  acerca/
    page.tsx                   # Página "Acerca de" con nota personal de Yeyito
  privacidad/
    page.tsx                   # Aviso de privacidad (LFPDPPP + AdSense)
```

---

## Lo que ya está construido

### Calculadora principal (`/`)
- Input de número de personas
- Selector de nivel de hambre: Ligero, Normal, Tragones
- Output: lista de compras con 9 ítems (carne, tortillas, limones, carbón, hielo, etc.)
- Extras opcionales con checkboxes: cerveza, refrescos, botanas, queso, pollo, hamburguesas
- Estimador de costo con modo promedio y precio personalizado
- Botones de imprimir, PDF y compartir por WhatsApp

### Secciones de contenido en la página principal
- "Cómo usar la calculadora" — 4 pasos
- Tips de carne asada estilo Monterrey — 6 tips
- FAQ — 8 preguntas y respuestas frecuentes

### Páginas adicionales
- `/acerca` — quién es Yeyito, por qué hizo el sitio, nota personal en español mexicano
- `/privacidad` — aviso de privacidad (cumple LFPDPPP, menciona AdSense)
- `/calculadora/[personas]` — páginas SEO estáticas para búsquedas como "carne asada para 20 personas"

### Layout global
- Header naranja con logo 🥩 y nombre Calcuasada
- Barra de navegación debajo del header: links a Calculadora y Acerca
- Footer con copyright 2026, links a Acerca y Privacidad
- AdSense: `<script>` directo en `<head>` para visibilidad del crawler de Google

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

---

## Preferencias del dueño

- Todo el contenido del sitio en **español mexicano** (no neutro, no de España)
- Diseño **mobile first**
- Esquema de color **naranja** (`orange-500` como color principal)
- El usuario debe obtener su respuesta en menos de 15 segundos
- Sin cuentas de usuario, sin base de datos, sin backend
- Simple, rápido y directo

---

## Estado actual (mayo 2026)

| Ítem | Estado |
|------|--------|
| Calculadora funcional | ✅ Listo |
| Páginas SEO estáticas | ✅ Listo |
| FAQ, tips, cómo usar | ✅ Listo |
| Página /acerca | ✅ Listo |
| Página /privacidad | ✅ Listo |
| Nav bar y footer con links | ✅ Listo |
| AdSense script en `<head>` | ✅ Listo |
| Repositorio en GitHub | ✅ Listo (`main`) |
| Deploy en Vercel | ✅ Configurado (auto-deploy desde `main`) |
| Aprobación de Google AdSense | ⏳ Pendiente (1–7 días tras envío) |
| Google Search Console indexando | ⏳ En progreso |

---

## Historial de sesiones

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
