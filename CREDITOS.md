# ASTAU — Inventario de Recursos Visuales y Placeholders a Reemplazar

Este documento detalla los recursos gráficos incluidos en el proyecto y la lista de archivos provisorios (`placeholders`) listos para ser reemplazados por las fotografías y el video definitivos de ASTAU (Sección 8 y Checklist Sección 13 del Plan de Implementación).

---

## 1. Identidad de Marca (`assets/brand/` y raíz)

Extraídos fielmente del archivo vectorial original `docs/Mesa de trabajo 1.svg` respetando proporciones y trazos sin alteraciones, con los colores oficiales del Manual de Identidad Visual:

| Archivo | Versión | Uso |
|---------|---------|-----|
| `assets/brand/logo-color.svg` | Color institucional (`#5B2E44` Pantone 7645 C) | Header sólido, mobile menu y footer |
| `assets/brand/logo-negativo.svg` | Negativo (`#EEEAE4` Pantone 7527 C) | Header sobre el hero y bloque de cierre ciruela |
| `assets/brand/isotipo.svg` | Isotipo circular de trazo de pincel | Recurso institucional |
| `favicon.svg` | Isotipo sobre fondo `#EEEAE4` | Icono de pestaña y `site.webmanifest` |

---

## 2. Tipografía Autoalojada (`assets/fonts/`)

Licencia abierta SIL Open Font License 1.1 (Google Fonts / Colophon Foundry):
- `assets/fonts/DMSans-Variable.woff2` (pesos 300–700)
- `assets/fonts/DMSans-Italic-Variable.woff2` (itálica 300–700)

---

## 3. Lista de Placeholders a Reemplazar por Fotografía y Video Real

Todos los espacios de imagen y video cuentan con composiciones tonales generadas según la paleta del manual (`#EEEAE4`, `#D6D1CA`, `#B3B7AE`, `#5B2E44`) en formatos `.avif` y `.webp` (1x y 2x) y muestran en pantalla su etiqueta identificatoria. Para reemplazarlos por las fotos reales, basta con sobrescribir los archivos manteniendo el mismo nombre y proporción:

| Identificador | Archivos en `assets/img/` o `assets/video/` | Proporción | Dimensiones (1x / 2x) | Ubicación |
|---------------|---------------------------------------------|------------|-----------------------|-----------|
| `hero-astau` (video) | `assets/video/hero-astau.webm`, `assets/video/hero-astau.mp4` | 16:9 | 1920 × 1080 px | Hero de Inicio (incluye pista de respiración para el botón de sonido) |
| `hero-astau` (póster) | `hero-astau.avif`, `hero-astau-2x.avif`, `hero-astau.webp`, `hero-astau-2x.webp` | 16:9 | 960×540 / 1920×1080 px | Póster LCP del Hero en Inicio |
| `espacio-astau` | `espacio-astau.avif`, `espacio-astau-2x.avif`, `espacio-astau.webp`, `espacio-astau-2x.webp` | 3:2 | 720×480 / 1440×960 px | Bloque "El espacio" en Inicio |
| `practica-ashtanga` | `practica-ashtanga.avif`, `practica-ashtanga-2x.avif`, `practica-ashtanga.webp`, `practica-ashtanga-2x.webp` | 4:5 | 600×750 / 1200×1500 px | Índice en Inicio + Ficha `#ashtanga` en Clases |
| `practica-yin` | `practica-yin.avif`, `practica-yin-2x.avif`, `practica-yin.webp`, `practica-yin-2x.webp` | 4:5 | 600×750 / 1200×1500 px | Índice en Inicio + Ficha `#yin-yoga` en Clases |
| `practica-hatha` | `practica-hatha.avif`, `practica-hatha-2x.avif`, `practica-hatha.webp`, `practica-hatha-2x.webp` | 4:5 | 600×750 / 1200×1500 px | Índice en Inicio + Ficha `#hatha-yoga` en Clases |
| `practica-terapia` | `practica-terapia.avif`, `practica-terapia-2x.avif`, `practica-terapia.webp`, `practica-terapia-2x.webp` | 4:5 | 600×750 / 1200×1500 px | Índice en Inicio + Ficha `#yoga-terapia` en Clases |
| `practica-embarazo` | `practica-embarazo.avif`, `practica-embarazo-2x.avif`, `practica-embarazo.webp`, `practica-embarazo-2x.webp` | 4:5 | 600×750 / 1200×1500 px | Índice en Inicio + Ficha `#yoga-embarazo` en Clases |
| `practica-maternidad` | `practica-maternidad.avif`, `practica-maternidad-2x.avif`, `practica-maternidad.webp`, `practica-maternidad-2x.webp` | 4:5 | 600×750 / 1200×1500 px | Índice en Inicio + Ficha `#yoga-maternidad` en Clases |
| `practica-meditacion` | `practica-meditacion.avif`, `practica-meditacion-2x.avif`, `practica-meditacion.webp`, `practica-meditacion-2x.webp` | 4:5 | 600×750 / 1200×1500 px | Índice en Inicio + Ficha `#meditacion` en Clases |
| `equipo-constanza` | `equipo-constanza.avif`, `equipo-constanza-2x.avif`, `equipo-constanza.webp`, `equipo-constanza-2x.webp` | 4:5 | 520×650 / 1040×1300 px | Inicio + `#constanza-iselli` en Equipo |
| `equipo-jesica` | `equipo-jesica.avif`, `equipo-jesica-2x.avif`, `equipo-jesica.webp`, `equipo-jesica-2x.webp` | 4:5 | 520×650 / 1040×1300 px | Inicio + `#jesica-doldan` en Equipo |
| `equipo-lucia` | `equipo-lucia.avif`, `equipo-lucia-2x.avif`, `equipo-lucia.webp`, `equipo-lucia-2x.webp` | 4:5 | 520×650 / 1040×1300 px | Inicio + `#lucia-larroude` en Equipo |
| `equipo-paz` | `equipo-paz.avif`, `equipo-paz-2x.avif`, `equipo-paz.webp`, `equipo-paz-2x.webp` | 4:5 | 520×650 / 1040×1300 px | Inicio + `#paz-rufino` en Equipo |
| `equipo-melisa` | `equipo-melisa.avif`, `equipo-melisa-2x.avif`, `equipo-melisa.webp`, `equipo-melisa-2x.webp` | 4:5 | 520×650 / 1040×1300 px | Inicio + `#melisa-larsen` en Equipo |
| `mapa-astau` | `mapa-astau.avif`, `mapa-astau-2x.avif`, `mapa-astau.webp`, `mapa-astau-2x.webp` | 3:2 | 600×400 / 1200×800 px | Footer en todas las páginas (enlazado a Google Maps) |
| `og-astau` | `og-astau.jpg`, `og-astau.webp` | 1.91:1 | 1200 × 630 px | Imagen Open Graph para compartir en redes y WhatsApp |
