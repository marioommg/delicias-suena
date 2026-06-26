# Delicias Suena 🎙️

**Un paseo sonoro interactivo por el barrio de Delicias, Madrid.**

[🌐 Ver en vivo](https://colectivoradiopatio.com/proyectos/deliciassuena) · [Colectivo Radiopatio](https://colectivoradiopatio.com)

---

Delicias Suena es un proyecto de escucha y documentación sonora del barrio de Delicias (Madrid), impulsado por [Colectivo Radiopatio](https://colectivoradiopatio.com). Este repositorio contiene el código de la web interactiva: un mapa sonoro del paseo, una fonoteca de grabaciones vecinales y un fanzine descargable.

El proyecto nació como un ejercicio de escucha colectiva: caminamos por el barrio con grabadoras, recogimos sonidos, historias y testimonios de vecinas y vecinos, y los pusimos en común.

## 📦 Qué incluye este repo

| Sección | Descripción |
|---|---|
| **Paseo sonoro** (`/proyectos/deliciassuena/paseo`) | Mapa interactivo con MapLibre GL + PMTiles. Cada parada tiene audio, transcripción y descripción. |
| **Fonoteca** (`/proyectos/deliciassuena/fonoteca`) | Archivo de grabaciones vecinales. Los visitantes pueden subir sus propias grabaciones del barrio. |
| **Administración** (`/proyectos/deliciassuena/admin`) | Panel para moderar las grabaciones recibidas (requiere contraseña). |
| **Inicio** (`/proyectos/deliciassuena`) | Presentación del proyecto y fanzine descargable. |

## 🛠️ Stack técnico

- **[Astro 6](https://astro.build/)** — framework web
- **[Tailwind CSS v4](https://tailwindcss.com/)** — estilos (configurado via `@theme`, sin `tailwind.config.js`)
- **[MapLibre GL JS](https://maplibre.org/)** — mapa interactivo
- **[PMTiles](https://protomaps.com/docs/pmtiles)** — tiles del mapa autoalojados (sin API keys)
- **AWS Lambda** — backend para subida y moderación de grabaciones (no incluido en este repo)

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/colectivoradiopatio/delicias-suena.git
cd delicias-suena

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Edita .env con tus valores

# Iniciar servidor de desarrollo
npm run dev
```

La web estará disponible en `http://localhost:4321`.

## ⚙️ Variables de entorno

Copia `.env.example` a `.env` y rellena los valores:

| Variable | Descripción |
|---|---|
| `PUBLIC_UPLOAD_API_URL` | URL de tu Lambda (o cualquier backend) para gestión de grabaciones |
| `ADMIN_PASSWORD` | Contraseña del panel de administración |
| `FROM_EMAIL` | Email remitente para notificaciones |
| `NOTIFY_EMAIL` | Email donde recibirás avisos de nuevas grabaciones |

> [!NOTE]
> Sin `PUBLIC_UPLOAD_API_URL`, el mapa y la fonoteca de solo lectura funcionan igualmente. La funcionalidad de **subir grabaciones** y el **panel de admin** requieren el backend.

## 🗺️ Archivo PMTiles (mapa)

El mapa usa un archivo `.pmtiles` de Madrid que **no está incluido en este repositorio** por su tamaño. Necesitas descargarlo y colocarlo en `public/tiles/`:

### Opción A — Descargar el extracto de Madrid desde Protomaps

```bash
# Instala protomaps-themes-base si no lo tienes
npx -y pmtiles extract https://build.protomaps.com/20240101.pmtiles public/tiles/madrid_omt.pmtiles --bbox=-3.8,40.3,-3.6,40.5
```

> Ajusta el `--bbox` a la zona que necesites. Consulta [Protomaps Downloads](https://maps.protomaps.com/builds/) para la versión más reciente.

### Opción B — Generar tu propio PMTiles con OpenStreetMap

Consulta la [documentación oficial de Protomaps](https://protomaps.com/docs/pmtiles/create) para generar un archivo PMTiles de cualquier ciudad a partir de datos de OpenStreetMap.

### Opción C — Usar tiles en la nube

También puedes apuntar el mapa a tiles remotos modificando la configuración de MapLibre en `src/pages/proyectos/deliciassuena/paseo.astro`.

## 🖋️ Fuentes tipográficas

El proyecto usa **Helvetica Neue** (Light, Roman, Medium, Bold) y **Alfarn 2**. Las fuentes `.woff2` están incluidas en `public/fonts/`. Asegúrate de tener los derechos de licencia necesarios si redistribuyes o adaptas el proyecto.

## 🏗️ Estructura del proyecto

```
delicias-suena/
├── src/
│   ├── assets/images/deliciassuena/    # Logos y mapas del proyecto
│   ├── components/deliciassuena/       # Componentes Astro reutilizables
│   │   ├── AudioPlayer.astro           # Reproductor de audio
│   │   ├── PaseoMapa.astro             # Wrapper del mapa
│   │   └── StopCard.astro             # Tarjeta de parada del paseo
│   ├── data/
│   │   ├── stops.ts                   # Datos de las paradas del paseo
│   │   ├── transcriptions.json        # Transcripciones de los audios
│   │   └── svg-map.ts                 # Datos para el mapa SVG estático
│   ├── layouts/
│   │   └── DeliciasSuenaLayout.astro  # Layout HTML base
│   ├── pages/proyectos/deliciassuena/
│   │   ├── index.astro                # Página de presentación
│   │   ├── paseo.astro                # Mapa interactivo del paseo sonoro
│   │   ├── fonoteca.astro             # Archivo de grabaciones
│   │   └── admin.astro                # Panel de administración
│   └── styles/
│       └── delicias-suena.css         # Estilos del proyecto
└── public/
    ├── fonts/                         # Fuentes tipográficas + glyphs del mapa
    ├── proyectos/deliciassuena/       # Fanzine PDF e imágenes
    └── tiles/                         # Coloca aquí tu archivo .pmtiles
```

## 🎨 Adaptar el proyecto a tu barrio

Este código está pensado para ser reutilizable. Para adaptarlo a otro paseo sonoro:

1. **Edita `src/data/stops.ts`** — cambia las paradas, coordenadas, audios y descripciones
2. **Edita `src/data/transcriptions.json`** — añade las transcripciones de tus audios
3. **Descarga un PMTiles** de tu ciudad/barrio (ver sección anterior)
4. **Sustituye las imágenes** en `src/assets/images/deliciassuena/`
5. **Actualiza los textos** en las páginas `.astro`

## 📄 Licencia

- **Código fuente**: [MIT License](./LICENSE)
- **Contenidos creativos** (textos, imágenes, diseño, fanzine): [CC BY-SA 4.0](./LICENSE-CONTENT)

Puedes usar, modificar y redistribuir el código libremente. Si usas los contenidos creativos, debes atribuirlos a **Colectivo Radiopatio** y compartirlos bajo la misma licencia.

## 🤝 Créditos

Desarrollado por [Colectivo Radiopatio](https://colectivoradiopatio.com) — una radio comunitaria del barrio de Delicias, Madrid.

Los datos de mapa provienen de © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright), servidos mediante [Protomaps](https://protomaps.com/) (licencia ODbL).
