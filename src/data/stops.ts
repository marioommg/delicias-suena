import transcriptions from "./transcriptions.json";

export interface Audio {
  title: string
  file: string
  duration: string
  category: string
  origin: string
  transcription?: string
}

export interface Stop {
  id: number
  name: string
  coords: [number, number]
  description: string
  address: string
  audios: Audio[]
}

export const stopsDataFull: Stop[] = [
  {
    id: 1,
    name: "Otto Barber Shop",
    coords: [40.404500, -3.696842],
    description: "Música ambiente en la barbería",
    address: "Calle de José Antonio Armona, 24, 28012 Madrid",
    audios: [
      { title: "Jazz y swing en Otto Barber Shop", file: "005 - Musica barberia (recortada).opus", duration: "139 KB", category: "general", origin: "deliciassuena" }
    ]
  },
  {
    id: 2,
    name: "Petanca / Centro de día",
    coords: [40.402611, -3.694500],
    description: "Testimonio sobre el juego de la petanca, el centro de mayores y las fiestas populares",
    address: "Calle de Palos de la Frontera, 28045 Madrid",
    audios: [
      { title: "Recuerdos de petanca y el centro de mayores", file: "004 - Abuelo (petanca centro de dia) (recortada).opus", duration: "578 KB", category: "general", origin: "deliciassuena" }
    ]
  },
  {
    id: 3,
    name: "Plaza de la Beata",
    coords: [40.401778, -3.694139],
    description: "Sonido de una paloma en la plaza",
    address: "Plaza de la Beata, 28045 Madrid",
    audios: [
      { title: "Arrullo de paloma", file: "011 - Sonido paloma.opus", duration: "17 KB", category: "general", origin: "deliciassuena" }
    ]
  },
  {
    id: 4,
    name: "Calle Alfonso XIII",
    coords: [40.400694, -3.694417],
    description: "Sonido de una ambulancia cruzando la calle",
    address: "Calle Alfonso XIII, 28045 Madrid",
    audios: [
      { title: "Sirena de ambulancia en el tráfico", file: "018 - Sonido ambulancia.opus", duration: "3,4 MB", category: "general", origin: "deliciassuena" }
    ]
  },
  {
    id: 5,
    name: "C/ Tomás Bretón, 39",
    coords: [40.397395, -3.693443],
    description: "Marta Prieto, nieta del ilustre diseñador gráfico y escultor Manolo Prieto, recuerda su estudio y vida en el barrio",
    address: "Calle Tomás Bretón, 39, 28045 Madrid",
    audios: [
      { title: "El legado de Manolo Prieto (por su nieta)", file: "003 - Manolo Prieto (c Tomas Breton) (recortada).opus", duration: "463 KB", category: "general", origin: "deliciassuena" }
    ]
  },
  {
    id: 6,
    name: "Calle Delicias",
    coords: [40.397306, -3.694250],
    description: "Sonido ambiente de tráfico en la calle",
    address: "Calle Delicias, 28045 Madrid",
    audios: [
      { title: "Tráfico sobre asfalto mojado", file: "008 - Coches.opus", duration: "2,5 MB", category: "general", origin: "deliciassuena" }
    ]
  },
  {
    id: 7,
    name: "Infinito Delicias",
    coords: [40.396797, -3.692476],
    description: "Ensayos de copla y baile flamenco de las señoras en el centro cultural Infinito Delicias",
    address: "Calle de Juana Doña, 5, 28045 Madrid",
    audios: [
      { title: "Ensayo de baile: risas y flamenco", file: "010 - Senoras baile (madrigueira Infinito Delicias) - 3 (recortada).opus", duration: "734 KB", category: "general", origin: "deliciassuena" },
      { title: "Ensayo de baile: conteo de pasos", file: "010 - Senoras baile (madrigueira Infinito Delicias) - 1.opus", duration: "89 KB", category: "general", origin: "deliciassuena" },
      { title: "Ensayo de baile: el campeón de la copla", file: "010 - Senoras baile (madrigueira Infinito Delicias) - 2.opus", duration: "139 KB", category: "general", origin: "deliciassuena" }
    ]
  },
  {
    id: 8,
    name: "Cafetería Fátima",
    coords: [40.395968, -3.692961],
    description: "Testimonios de varios vecinos sobre la transformación de Delicias y Arganzuela, y el problema de las palomas",
    address: "Calle de Juana Doña, 16, 28045 Madrid",
    audios: [
      { title: "Sesenta años en el barrio y la queja de las palomas", file: "001 - 60 anios en Delicias (recortada).opus", duration: "339 KB", category: "general", origin: "deliciassuena" }
    ]
  },
  {
    id: 10,
    name: "Salida del CEIP Miguel de Unamuno",
    coords: [40.394111, -3.693056],
    description: "Niñxs a la salida del CEIP Miguel de Unamuno piden un barrio más limpio, sin cacas y con más árboles",
    address: "C. de Alicante, 5, Arganzuela, 28045 Madrid",
    audios: [
      { title: "Peticiones infantiles: limpieza y árboles", file: "014 - Ninxs futuro Delicias (limpieza arboles) (recortada).opus", duration: "149 KB", category: "general", origin: "deliciassuena" }
    ]
  },
  {
    id: 11,
    name: "Salida del CEIP Miguel de Unamuno",
    coords: [40.393806, -3.692889],
    description: "Niñas y niños del colegio imaginan un barrio con más comercio local, zonas peatonales y una piscina pública",
    address: "C. de Alicante, 5, Arganzuela, 28045 Madrid",
    audios: [
      { title: "Peticiones infantiles: comercios, plantas y piscina", file: "015 - Ninxs futuro Delicias (piscina casas plantas) (recortado).opus", duration: "402 KB", category: "general", origin: "deliciassuena" }
    ]
  },
  {
    id: 12,
    name: "Salida del CEIP Miguel de Unamuno",
    coords: [40.394139, -3.693500],
    description: "El deseo rotundo de un/a niñx sobre el futuro de su entorno: no cambiar nada",
    address: "C. de Alicante, 5, Arganzuela, 28045 Madrid",
    audios: [
      { title: "Peticiones infantiles: conservar el barrio", file: "016 - Ninxs futuro Delicias (no cambios) (recortado).opus", duration: "18 KB", category: "general", origin: "deliciassuena" }
    ]
  },
  {
    id: 13,
    name: "Salida del CEIP Miguel de Unamuno",
    coords: [40.394472, -3.693028],
    description: "Sonido ambiente del patio del colegio",
    address: "C. de Alicante, 5, Arganzuela, 28045 Madrid",
    audios: [
      { title: "Alboroto alegre a la salida del colegio", file: "017 - Ruido ninxs (al final) (recortado).opus", duration: "10,8 MB", category: "general", origin: "deliciassuena" }
    ]
  },
  {
    id: 14,
    name: "Plaza Beata Mª Ana de Jesús / C. Alicante",
    coords: [40.394278, -3.694028],
    description: "Sonido de un semáforo acústico",
    address: "Plaza de la Beata María Ana de Jesús, 28045 Madrid",
    audios: [
      { title: "Señal acústica de semáforo", file: "012 - Sonido semaforo (recortado).opus", duration: "37 KB", category: "general", origin: "deliciassuena" }
    ]
  },
  {
    id: 15,
    name: "Calle Delicias",
    coords: [40.394944, -3.694750],
    description: "Sonido ambiente de pasos y voces en la calle",
    address: "Calle Delicias, 28045 Madrid",
    audios: [
      { title: "Pasos y conversación en la acera", file: "009 - Pasos (tacones).opus", duration: "1,4 MB", category: "general", origin: "deliciassuena" }
    ]
  },
  {
    id: 16,
    name: "Tejidos Carmena",
    coords: [40.396624, -3.694634],
    description: "Historia de una emblemática tienda de retales del barrio, abierta hace medio siglo y gestionada por la misma familia",
    address: "Paseo de las Delicias, 100, 28045 Madrid",
    audios: [
      { title: "Tejidos Carmena: tres generaciones de telas", file: "019 - Testimonio Tejidos Carmena (recortado).opus", duration: "24,1 MB", category: "general", origin: "deliciassuena" }
    ]
  },
  {
    id: 17,
    name: "Cristalería Escribano",
    coords: [40.396028, -3.696355],
    description: "La última generación de un negocio familiar abierto en 1970 reflexiona sobre el declive del comercio local y la falta de relevo",
    address: "Calle de Embajadores, 164, 28045 Madrid",
    audios: [
      { title: "Cristalería Escribano: medio siglo de oficio", file: "020 - Testimonio Cristaleria Escribano (recortado).opus", duration: "24,6 MB", category: "general", origin: "deliciassuena" }
    ]
  },
  {
    id: 18,
    name: "Mercado Guillermo de Osma",
    coords: [40.395012, -3.695904],
    description: "Sonidos ambiente del mercado y la pescadería",
    address: "Calle Miguel Arredondo, 4, 28045 Madrid",
    audios: [
      { title: "Ambiente cotidiano en los puestos", file: "022 - Sonido mercado 2.opus", duration: "5,7 MB", category: "general", origin: "deliciassuena" },
      { title: "Preparando la merluza en la pescadería", file: "023 - Sonido mercado 3 (pescadero) (recortado).opus", duration: "269 KB", category: "general", origin: "deliciassuena" },
      { title: "El bullicio del despacho diario", file: "024 - Sonido mercado 4 (mujer hablando).opus", duration: "15 MB", category: "general", origin: "deliciassuena" }
    ]
  },
  {
    id: 19,
    name: "Plaza Rutilio Gacís (CHE MARTINA)",
    coords: [40.394447, -3.696578],
    description: "Vecinos debaten sobre la transformación de la plaza: encarecimiento de la vivienda, pérdida de comercios y la necesidad de un instituto público",
    address: "Plaza Rutilio Gacís, 28045 Madrid",
    audios: [
      { title: "Gentrificación, comercio tradicional y la lucha por un instituto", file: "002 - Testimonio plaza Rutilio Gacis (recortada).opus", duration: "632 KB", category: "general", origin: "deliciassuena" }
    ]
  },
  {
    id: 20,
    name: "Plaza Rutilio Gacís",
    coords: [40.394278, -3.696750],
    description: "Dos paisajes sonoros del parque de la plaza",
    address: "Plaza Rutilio Gacís, 28045 Madrid",
    audios: [
      { title: "Tarde de juegos y encuentros", file: "025 - Sonido parque plaza Rutilio Gacis 1.opus", duration: "4,9 MB", category: "general", origin: "deliciassuena" },
      { title: "Murmullo lejano de juegos y charlas", file: "026 - Sonido parque plaza Rutilio Gacis 2.opus", duration: "3,5 MB", category: "general", origin: "deliciassuena" }
    ]
  },
  {
    id: 21,
    name: "Bar Toboggan",
    coords: [40.394449, -3.696828],
    description: "La perspectiva de un residente recién llegado sobre la comodidad y conectividad de Delicias",
    address: "Plaza Rutilio Gacís, 2, 28045 Madrid",
    audios: [
      { title: "Testimonio de un vecino recién llegado", file: "006 - Bar tobogan (vecino nuevo) (recortada).opus", duration: "156 KB", category: "general", origin: "deliciassuena" }
    ]
  },
  {
    id: 22,
    name: "Espacio Afro Conciencia",
    coords: [40.399010, -3.700110],
    description: "Shana, directora de Intersect Madrid, explica su labor en escuelas contra la discriminación y cómo el racismo se conecta con la gentrificación",
    address: "Calle de Cáceres, 49, 28045 Madrid",
    audios: [
      { title: "Antirracismo y educación: Intersect Madrid", file: "007 - Afro (intercomunidad Intersect Madrid) (recortada).opus", duration: "850 KB", category: "general", origin: "deliciassuena" }
    ]
  }
]

export const stopsData: Stop[] = [
  16, 6, 5, 7, 8, 13, 10, 11, 12, 14, 15, 18, 19, 20, 21, 17,
].map((id) => stopsDataFull.find((s) => s.id === id)!)

stopsDataFull.forEach((stop) => {
  stop.audios.forEach((audio) => {
    audio.transcription = (transcriptions as Record<string, string>)[audio.file] || "";
  });
});

