import { stopsData } from "./stops"

export const SVG_VIEWBOX = { width: 800, height: 700 }
export const SVG_PADDING = 80

const USABLE_W = SVG_VIEWBOX.width - SVG_PADDING * 2
const USABLE_H = SVG_VIEWBOX.height - SVG_PADDING * 2

const MIN_LNG = -3.6968
const RANGE_LNG = 0.0039
const MAX_LAT = 40.4026
const RANGE_LAT = 0.0088

export function toSvgCoords(lat: number, lng: number): { x: number; y: number } {
  return {
    x: ((lng - MIN_LNG) / RANGE_LNG) * USABLE_W + SVG_PADDING,
    y: ((MAX_LAT - lat) / RANGE_LAT) * USABLE_H + SVG_PADDING,
  }
}

export interface SvgNode {
  id: number
  x: number
  y: number
}

export const svgNodes: SvgNode[] = stopsData.map((stop) => {
  const { x, y } = toSvgCoords(stop.coords[0], stop.coords[1])
  return { id: stop.id, x: Math.round(x), y: Math.round(y) }
})

export const routePath = svgNodes
  .map((n, i) => (i === 0 ? `M ${n.x},${n.y}` : `L ${n.x},${n.y}`))
  .join(" ")

export interface Street {
  id: string
  name: string
  path: string
  strokeWidth: number
}

export const streets: Street[] = [
  {
    id: "calle-delicias",
    name: "Calle Delicias",
    path: "M 80,450 L 740,450",
    strokeWidth: 2,
  },
  {
    id: "calle-tomas-breton",
    name: "Calle Tomás Bretón",
    path: "M 310,100 L 310,640",
    strokeWidth: 1.5,
  },
  {
    id: "calle-menorca",
    name: "Calle Menorca",
    path: "M 640,80 L 640,640",
    strokeWidth: 1.5,
  },
  {
    id: "calle-alfonso-13",
    name: "Calle Alfonso XIII",
    path: "M 120,180 L 580,180",
    strokeWidth: 1.5,
  },
  {
    id: "plaza-rutilio",
    name: "Plaza Rutilio Gacís",
    path: "M 75,620 L 155,620 L 155,555 L 75,555 Z",
    strokeWidth: 1.5,
  },
  {
    id: "plaza-beata",
    name: "Plaza de la Beata",
    path: "M 480,95 L 565,95 L 565,150 L 480,150 Z",
    strokeWidth: 1.5,
  },
  {
    id: "calle-menorca-sur",
    name: "Calle Menorca (sur)",
    path: "M 680,640 L 680,560",
    strokeWidth: 1,
  },
]
