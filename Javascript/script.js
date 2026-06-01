"use strict";

/* =====================================================
   // DATA DEFAUL / KOTA TANJUNGPINANG
===================================================== */

const defaultGraph = {
  A: { B: 385, K: 175, J: 309 },
  B: { A: 385, C: 100 },
  C: { B: 100, D: 607 },
  D: { C: 607, E: 128, O: 353 },
  E: { D: 128, F: 64 },
  F: { E: 64, G: 390 },
  G: { F: 390, H: 159 },
  H: { G: 159, I: 192 },
  I: { H: 192, J: 119 },
  J: { I: 119, A: 309 },
  K: { A: 175, L: 142 },
  L: { K: 142, M: 158 },
  M: { L: 158, N: 135 },
  N: { M: 135, O: 79 },
  O: { N: 79, D: 353 }
};

const defaultNodeNames = {
  A: "Simpang Acak 1",
  B: "Simpang Acak 2",
  C: "Simpang Acak 3",
  D: "Simpang Acak 4",
  E: "Simpang Acak 5",
  F: "Simpang Acak 6",
  G: "Simpang Acak 7",
  H: "Simpang Acak 8",
  I: "Simpang Acak 9",
  J: "Simpang Acak 10",
  K: "Simpang Acak 11",
  L: "Simpang Acak 12",
  M: "Simpang Acak 13",
  N: "Simpang Acak 14",
  O: "Simpang Acak 15"
};

const defaultNodePositions = {
  A: { x: 195, y: 440 },
  B: { x: 215, y: 175 },
  C: { x: 430, y: 140 },
  D: { x: 1310, y: 195 },
  E: { x: 1340, y: 340 },
  F: { x: 1195, y: 510 },
  G: { x: 960, y: 640 },
  H: { x: 740, y: 700 },
  I: { x: 530, y: 665 },
  J: { x: 340, y: 600 },
  K: { x: 400, y: 385 },
  L: { x: 600, y: 330 },
  M: { x: 810, y: 285 },
  N: { x: 1020, y: 248 },
  O: { x: 1155, y: 222 }
};

const defaultDecorations = {
  water: [
    { d: "M 1320 0 H 1600 V 170 C 1535 155 1485 165 1430 142 C 1380 118 1350 128 1320 100 Z" },
    { d: "M 0 750 C 60 730 120 760 180 740 C 240 720 280 750 340 738 L 340 900 H 0 Z" }
  ],
  zones: [
    { x: 55, y: 55, w: 420, h: 290, rx: 28 },
    { x: 530, y: 80, w: 410, h: 260, rx: 28 },
    { x: 1060, y: 380, w: 380, h: 290, rx: 28 },
    { x: 180, y: 660, w: 490, h: 180, rx: 26 },
    { x: 680, y: 460, w: 280, h: 210, rx: 24 }
  ],
  parks: [
    { x: 48, y: 52, w: 115, h: 78, rx: 16, treeRows: 2, treeCols: 3 },
    { x: 78, y: 770, w: 148, h: 88, rx: 18, treeRows: 2, treeCols: 4 },
    { x: 1280, y: 620, w: 155, h: 95, rx: 18, treeRows: 2, treeCols: 4 },
    { x: 1450, y: 430, w: 110, h: 76, rx: 16, treeRows: 2, treeCols: 3 },
    { x: 450, y: 30, w: 90, h: 65, rx: 14, treeRows: 2, treeCols: 2 },
    { x: 50, y: 480, w: 110, h: 80, rx: 16, treeRows: 2, treeCols: 3 }
  ],
  buildingClusters: [
    { rects: [
      { x: 56, y: 260, w: 52, h: 32, rx: 6 },
      { x: 130, y: 260, w: 40, h: 28, rx: 5 },
      { x: 56, y: 312, w: 42, h: 30, rx: 5 }
    ]},
    { rects: [
      { x: 565, y: 38, w: 56, h: 34, rx: 6 },
      { x: 642, y: 38, w: 42, h: 28, rx: 5 },
      { x: 565, y: 92, w: 48, h: 30, rx: 5 }
    ]},
    { rects: [
      { x: 1420, y: 242, w: 56, h: 36, rx: 6 },
      { x: 1498, y: 242, w: 42, h: 30, rx: 5 },
      { x: 1420, y: 300, w: 46, h: 30, rx: 5 }
    ]},
    { rects: [
      { x: 1350, y: 470, w: 56, h: 36, rx: 6 },
      { x: 1428, y: 470, w: 42, h: 28, rx: 5 },
      { x: 1350, y: 526, w: 44, h: 28, rx: 5 }
    ]},
    { rects: [
      { x: 750, y: 770, w: 54, h: 34, rx: 6 },
      { x: 826, y: 770, w: 40, h: 28, rx: 5 }
    ]},
    { rects: [
      { x: 130, y: 620, w: 52, h: 34, rx: 6 },
      { x: 204, y: 620, w: 38, h: 28, rx: 5 }
    ]},
    { rects: [
      { x: 470, y: 770, w: 48, h: 32, rx: 6 },
      { x: 540, y: 770, w: 36, h: 26, rx: 5 },
      { x: 598, y: 770, w: 40, h: 28, rx: 5 }
    ]},
    { rects: [
      { x: 860, y: 44, w: 50, h: 32, rx: 6 },
      { x: 932, y: 44, w: 38, h: 26, rx: 5 }
    ]},
    { rects: [
      { x: 470, y: 480, w: 50, h: 32, rx: 6 },
      { x: 535, y: 480, w: 40, h: 28, rx: 5 }
    ]},
    { rects: [
      { x: 740, y: 420, w: 54, h: 36, rx: 6 },
      { x: 805, y: 420, w: 40, h: 30, rx: 5 }
    ]},
    { rects: [
      { x: 960, y: 390, w: 52, h: 34, rx: 6 },
      { x: 1020, y: 390, w: 42, h: 28, rx: 5 }
    ]},
    { rects: [
      { x: 1010, y: 50, w: 55, h: 35, rx: 6 },
      { x: 1075, y: 50, w: 45, h: 30, rx: 5 }
    ]},
    { rects: [
      { x: 1220, y: 50, w: 60, h: 36, rx: 6 },
      { x: 1290, y: 50, w: 40, h: 28, rx: 5 }
    ]},
    { rects: [
      { x: 300, y: 30, w: 48, h: 32, rx: 5 },
      { x: 360, y: 30, w: 48, h: 32, rx: 5 }
    ]}
  ],
  parkingLots: [
    { x: 600, y: 230, w: 90, h: 50, slots: 5, vertical: true },
    { x: 250, y: 260, w: 50, h: 90, slots: 5, vertical: false },
    { x: 1220, y: 430, w: 90, h: 50, slots: 5, vertical: true },
    { x: 630, y: 770, w: 90, h: 50, slots: 5, vertical: true },
    { x: 1100, y: 380, w: 90, h: 50, slots: 5, vertical: true }
  ],
  staticCars: [
    { x: 610, y: 245, color: "#dc2626", rot: 90 },
    { x: 645, y: 245, color: "#eab308", rot: 90 },
    { x: 265, y: 280, color: "#2563eb", rot: 0 },
    { x: 265, y: 315, color: "#ffffff", rot: 0 },
    { x: 1235, y: 445, color: "#16a34a", rot: 270 },
    { x: 1100, y: 565, color: "#ea580c", rot: 151 },
    { x: 440, y: 635, color: "#7c3aed", rot: 19 },
    { x: 310, y: 146, color: "#06b6d4", rot: -9 },
    { x: 642, y: 785, color: "#dc2626", rot: 90 },
    { x: 677, y: 785, color: "#ffffff", rot: 90 },
    { x: 1112, y: 395, color: "#eab308", rot: 90 },
    { x: 1147, y: 395, color: "#1d4ed8", rot: 90 }
  ]
};

deepFreeze(defaultGraph);
deepFreeze(defaultNodeNames);
deepFreeze(defaultNodePositions);
deepFreeze(defaultDecorations);

/* =====================================================
   // STATUS APLIKASI (STATE)
===================================================== */

let activeGraph = deepCopy(defaultGraph);
let activeNodeNames = deepCopy(defaultNodeNames);
let activeNodePositions = deepCopy(defaultNodePositions);
let activeDecorations = deepCopy(defaultDecorations);
let currentMapMode = "tanjungpinang";

let currentStart = "A";
let currentEnd = "D";
let currentPath = [];
let currentDist = 0;

let vehiclePathEl = null;
let animLen = 0;
let animProgress = 0;
let animSpeed = 120;
let animRunning = false;
let animRafId = null;
let animLastTime = null;

let camX = 0;
let camY = 0;
let camScale = 1;
let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;
let camStartX = 0;
let camStartY = 0;

const SVG_NS = "http://www.w3.org/2000/svg";
const VIEWBOX = { w: 1600, h: 900 };
const DEFAULT_ROUTE_EXPECTED = {
  path: ["A", "K", "L", "M", "N", "O", "D"],
  total: 1042
};

/* =====================================================
   // REFERENSI ELEMEN DOM (HTML)
===================================================== */

const $ = id => document.getElementById(id);

const svg = $("urbanSvg");
const cameraGroup = $("cameraGroup");

const layerBase = $("layerBase");
const layerWater = $("layerWater");
const layerZones = $("layerZones");
const layerParks = $("layerParks");
const layerTrees = $("layerTrees");
const layerBuildings = $("layerBuildings");
const layerParking = $("layerParking");
const layerSidewalks = $("layerSidewalks");
const layerRoadCasing = $("layerRoadCasing");
const layerRoadFill = $("layerRoadFill");
const layerRoadLine = $("layerRoadLine");
const layerCrosswalks = $("layerCrosswalks");
const layerStaticCars = $("layerStaticCars");
const layerRoute = $("layerRoute");
const layerNodes = $("layerNodes");
const layerPins = $("layerPins");
const layerLabels = $("layerLabels");
const layerVehicle = $("layerVehicle");

const startSelect = $("startSelect");
const endSelect = $("endSelect");
const statusBadge = $("statusBadge");
const summaryDist = $("summaryDist");
const infoStart = $("infoStart");
const infoEnd = $("infoEnd");
const infoNodes = $("infoNodes");
const infoPlaces = $("infoPlaces");
const infoDist = $("infoDist");
const infoSegs = $("infoSegs");
const hudStatus = $("hudStatus");
const hudDist = $("hudDist");
const hudRoute = $("hudRoute");
const hudBarFill = $("hudBarFill");
const hudPct = $("hudPct");
const findRouteBtn = $("findRouteBtn");
const shufflePairBtn = $("shufflePairBtn");
const shuffleMapBtn = $("shuffleMapBtn");
const restoreMapBtn = $("restoreMapBtn");
const playBtn = $("playBtn");
const holdBtn = $("holdBtn");
const rewindBtn = $("rewindBtn");
const zoomInBtn = $("zoomInBtn");
const zoomOutBtn = $("zoomOutBtn");
const fitBtn = $("fitBtn");

/* =====================================================
   // FUNGSI BANTUAN (HELPERS) & OPERASI SVG
===================================================== */

function deepCopy(value) {
  return JSON.parse(JSON.stringify(value));
}

function deepFreeze(value) {
  if (!value || typeof value !== "object" || Object.isFrozen(value)) return value;
  Object.freeze(value);
  for (const key of Object.getOwnPropertyNames(value)) {
    deepFreeze(value[key]);
  }
  return value;
}

function clearLayer(layer) {
  while (layer.firstChild) layer.removeChild(layer.firstChild);
}

function svgEl(tag, attrs = {}) {
  const el = document.createElementNS(SVG_NS, tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (value !== undefined && value !== null) el.setAttribute(key, String(value));
  }
  return el;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function simpleHash(text) {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function makeEdgeKey(from, to) {
  return [from, to].sort().join("-");
}

function getNodes(graph = activeGraph) {
  return Object.keys(graph);
}

function addText(layer, x, y, text, className, extra = {}) {
  const el = svgEl("text", { x, y, class: className, ...extra });
  el.textContent = text;
  layer.appendChild(el);
  return el;
}

function formatMeters(value) {
  if (!Number.isFinite(value)) return "-";
  return `${Math.round(value)} meter`;
}

function mapStatusLabel() {
  return currentMapMode === "random" ? "Peta Acak MST" : "Peta Tanjungpinang";
}

function setStatus(text) {
  statusBadge.textContent = text;
}

/* =====================================================
   // KURVA BEZIER & CACHE GEOMETRI JALAN
===================================================== */

const defaultStraightEdges = new Set(["B-C"]);
let edgeGeometryCache = {};

function rebuildEdgeGeometryCache() {
  edgeGeometryCache = {};
  const seen = new Set();
  for (const [from, neighbors] of Object.entries(activeGraph)) {
    for (const [to, weight] of Object.entries(neighbors)) {
      const edgeKey = makeEdgeKey(from, to);
      if (seen.has(edgeKey)) continue;
      seen.add(edgeKey);

      const curve = getRoadCurve(from, to, edgeKey, 0.18, activeNodePositions);
      const prefix = `M ${curve.p1.x} ${curve.p1.y} `;
      const pathData = curve.straight
        ? `${prefix}L ${curve.p2.x} ${curve.p2.y}`
        : `${prefix}Q ${round1(curve.c.x)} ${round1(curve.c.y)} ${curve.p2.x} ${curve.p2.y}`;

      edgeGeometryCache[edgeKey] = {
        edgeKey,
        from,
        to,
        curve,
        pathData
      };
    }
  }
}

function getPathAndCurveForEdge(from, to) {
  const edgeKey = makeEdgeKey(from, to);
  const geom = edgeGeometryCache[edgeKey];
  
  if (!geom) {
    const curve = getRoadCurve(from, to, edgeKey, 0.18, activeNodePositions);
    const prefix = `M ${curve.p1.x} ${curve.p1.y} `;
    const pathData = curve.straight
      ? `${prefix}L ${curve.p2.x} ${curve.p2.y}`
      : `${prefix}Q ${round1(curve.c.x)} ${round1(curve.c.y)} ${curve.p2.x} ${curve.p2.y}`;
    return { curve, pathData };
  }

  const { curve } = geom;
  if (from === geom.from) {
    return { curve, pathData: geom.pathData };
  } else {
    const reversedCurve = {
      p1: curve.p2,
      p2: curve.p1,
      c: curve.c,
      straight: curve.straight
    };
    const prefix = `M ${reversedCurve.p1.x} ${reversedCurve.p1.y} `;
    const pathData = reversedCurve.straight
      ? `${prefix}L ${reversedCurve.p2.x} ${reversedCurve.p2.y}`
      : `${prefix}Q ${round1(reversedCurve.c.x)} ${round1(reversedCurve.c.y)} ${reversedCurve.p2.x} ${reversedCurve.p2.y}`;
    return { curve: reversedCurve, pathData };
  }
}

function createBezierPath(from, to) {
  return getPathAndCurveForEdge(from, to).pathData;
}

function createRoadSegmentCommand(from, to, includeMove) {
  const { curve } = getPathAndCurveForEdge(from, to);
  const prefix = includeMove ? `M ${curve.p1.x} ${curve.p1.y} ` : "";
  if (curve.straight) return `${prefix}L ${curve.p2.x} ${curve.p2.y}`;
  return `${prefix}Q ${round1(curve.c.x)} ${round1(curve.c.y)} ${curve.p2.x} ${curve.p2.y}`;
}

function getRoadCurve(from, to, edgeKey = makeEdgeKey(from, to), strength = 0.18, positions = activeNodePositions) {
  const p1 = positions[from];
  const p2 = positions[to];
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const straight = shouldUseStraightEdge(edgeKey);

  if (straight) {
    return { p1, p2, c: { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 }, straight: true };
  }

  const mid = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
  const normal = { x: -dy / len, y: dx / len };
  const hash = simpleHash(edgeKey);
  const sign = hash % 2 === 0 ? 1 : -1;
  
  let finalStrength = 0.12; // Kekuatan lengkungan peta utama Tanjungpinang (0.10 - 0.14)
  let minOffset = 15;
  let maxOffset = 50; // Dibatasi maksimal 50px agar tidak melambai terlalu liar
  
  if (currentMapMode === "random") {
    finalStrength = 0.07; // Kelengkungan peta acak yang lebih tenang
    minOffset = 10;
    maxOffset = 30; // Dibatasi maksimal 30px
  }
  
  const localStrength = finalStrength + ((hash % 5) - 2) * 0.008;
  const offset = clamp(len * localStrength, minOffset, maxOffset) * sign;

  return {
    p1,
    p2,
    c: {
      x: mid.x + normal.x * offset,
      y: mid.y + normal.y * offset
    },
    straight: false
  };
}

function shouldUseStraightEdge(edgeKey) {
  if (currentMapMode === "tanjungpinang") return defaultStraightEdges.has(edgeKey);
  return simpleHash(edgeKey) % 12 === 0; // ~8-10% lurus di peta acak
}

function pointOnCurve(curve, t) {
  if (curve.straight) {
    return {
      x: curve.p1.x + (curve.p2.x - curve.p1.x) * t,
      y: curve.p1.y + (curve.p2.y - curve.p1.y) * t
    };
  }

  const mt = 1 - t;
  return {
    x: mt * mt * curve.p1.x + 2 * mt * t * curve.c.x + t * t * curve.p2.x,
    y: mt * mt * curve.p1.y + 2 * mt * t * curve.c.y + t * t * curve.p2.y
  };
}

function tangentOnCurve(curve, t) {
  if (curve.straight) {
    return {
      x: curve.p2.x - curve.p1.x,
      y: curve.p2.y - curve.p1.y
    };
  }
  const mt = 1 - t;
  const dx = 2 * mt * (curve.c.x - curve.p1.x) + 2 * t * (curve.p2.x - curve.c.x);
  const dy = 2 * mt * (curve.c.y - curve.p1.y) + 2 * t * (curve.p2.y - curve.c.y);
  return { x: dx, y: dy };
}

function round1(value) {
  return Math.round(value * 10) / 10;
}

/* =====================================================
   // ALGORITMA DIJKSTRA (PENCARIAN JALUR TERPENDEK)
===================================================== */

function dijkstra(graph, start, end) {
  const distances = {};
  const previous = {};
  const visited = new Set();
  const nodes = Object.keys(graph);

  for (const node of nodes) {
    distances[node] = Infinity;
    previous[node] = null;
  }
  distances[start] = 0;

  const queue = [{ node: start, distance: 0 }];

  while (queue.length > 0) {
    queue.sort((a, b) => a.distance - b.distance);
    const current = queue.shift();
    const node = current.node;

    if (visited.has(node)) continue;
    visited.add(node);
    if (node === end) break;

    for (const [neighbor, weight] of Object.entries(graph[node] || {})) {
      const candidate = distances[node] + weight;
      if (candidate < distances[neighbor]) {
        distances[neighbor] = candidate;
        previous[neighbor] = node;
        queue.push({ node: neighbor, distance: candidate });
      }
    }
  }

  if (!Number.isFinite(distances[end])) {
    return { path: [], totalDistance: Infinity };
  }

  const path = [];
  let cursor = end;
  while (cursor !== null) {
    path.unshift(cursor);
    cursor = previous[cursor];
  }

  return { path, totalDistance: distances[end] };
}

/* =====================================================
   // PEMBUATAN PETA ACAK DENGAN MST (MINIMUM SPANNING TREE)
===================================================== */

function buildMST(nodes, positions) {
  const candidates = buildCandidateEdges(nodes, positions);
  const parent = {};
  const rank = {};

  for (const node of nodes) {
    parent[node] = node;
    rank[node] = 0;
  }

  function find(node) {
    if (parent[node] !== node) parent[node] = find(parent[node]);
    return parent[node];
  }

  function union(a, b) {
    const rootA = find(a);
    const rootB = find(b);
    if (rootA === rootB) return false;
    if (rank[rootA] < rank[rootB]) parent[rootA] = rootB;
    else if (rank[rootA] > rank[rootB]) parent[rootB] = rootA;
    else {
      parent[rootB] = rootA;
      rank[rootA]++;
    }
    return true;
  }

  const mstEdges = [];
  const mstKeys = new Set();

  for (const edge of candidates) {
    if (union(edge.u, edge.v)) {
      mstEdges.push(edge);
      mstKeys.add(makeEdgeKey(edge.u, edge.v));
    }
    if (mstEdges.length === nodes.length - 1) break;
  }

  const graph = graphFromEdges(nodes, mstEdges);
  const extraEdges = chooseExtraEdges(candidates, mstKeys, graph, nodes.length);
  return graphFromEdges(nodes, [...mstEdges, ...extraEdges]);
}

function buildCandidateEdges(nodes, positions) {
  const edges = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const u = nodes[i];
      const v = nodes[j];
      const px = positions[u];
      const py = positions[v];
      const distance = pointDistance(px, py);
      edges.push({ u, v, w: Math.max(45, Math.round(distance * 0.86)), raw: distance });
    }
  }
  return edges.sort((a, b) => a.raw - b.raw);
}

function chooseExtraEdges(candidates, usedKeys, graph, nodeCount) {
  const extra = [];
  const target = Math.max(3, Math.floor(nodeCount * 0.34));
  const degree = {};

  for (const node of Object.keys(graph)) degree[node] = Object.keys(graph[node]).length;

  for (const edge of candidates) {
    const key = makeEdgeKey(edge.u, edge.v);
    if (usedKeys.has(key)) continue;
    if (edge.raw > 450) continue;
    if (degree[edge.u] >= 4 || degree[edge.v] >= 4) continue;

    extra.push(edge);
    usedKeys.add(key);
    degree[edge.u]++;
    degree[edge.v]++;

    if (extra.length >= target) break;
  }

  return extra;
}

function graphFromEdges(nodes, edges) {
  const graph = {};
  for (const node of nodes) graph[node] = {};
  for (const edge of edges) {
    graph[edge.u][edge.v] = edge.w;
    graph[edge.v][edge.u] = edge.w;
  }
  return graph;
}

function generateRandomMap() {
  for (let attempt = 0; attempt < 30; attempt++) {
    const count = 12 + Math.floor(Math.random() * 6); // 12-17 simpang (nodes)
    const nodes = Array.from({ length: count }, (_, index) => String(index + 1));
    const positions = generateRandomNodePositions(nodes);
    const graph = buildMST(nodes, positions);

    if (!isGraphConnected(graph)) continue;

    activeGraph = graph;
    activeNodePositions = positions;
    activeNodeNames = {};
    for (const node of nodes) activeNodeNames[node] = `Simpang Acak ${node}`;
    
    // Kita harus memanggil rebuildEdgeGeometryCache() SEBELUM membuat dekorasi agar sampleRoadPoints menggunakan cache yang benar!
    rebuildEdgeGeometryCache();
    currentMapMode = "random";

    activeDecorations = generateRoadAlignedDecorations();
    return true;
  }

  return false;
}

function generateRandomNodePositions(nodes) {
  const count = nodes.length;
  const cols = count > 14 ? 6 : 5;
  const rows = Math.ceil(count / cols);
  const minX = 180;
  const maxX = 1420;
  const minY = 140;
  const maxY = 760;
  const slots = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      slots.push({
        x: cols === 1 ? (minX + maxX) / 2 : minX + (maxX - minX) * (col / (cols - 1)),
        y: rows === 1 ? (minY + maxY) / 2 : minY + (maxY - minY) * (row / (rows - 1))
      });
    }
  }

  shuffle(slots);

  const positions = {};
  for (let i = 0; i < nodes.length; i++) {
    const slot = slots[i];
    positions[nodes[i]] = {
      x: Math.round(clamp(slot.x + randomBetween(-50, 50), 100, 1500)),
      y: Math.round(clamp(slot.y + randomBetween(-40, 40), 90, 810))
    };
  }

  return positions;
}

function pickRandomRoutePair() {
  const nodes = getNodes();
  let best = { start: nodes[0], end: nodes[1], distance: -1 };

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const d = pointDistance(activeNodePositions[nodes[i]], activeNodePositions[nodes[j]]);
      if (d > best.distance) best = { start: nodes[i], end: nodes[j], distance: d };
    }
  }

  return { start: best.start, end: best.end };
}

function shuffle(list) {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function isGraphConnected(graph) {
  const nodes = Object.keys(graph);
  if (nodes.length === 0) return true;

  const visited = new Set([nodes[0]]);
  const queue = [nodes[0]];

  while (queue.length > 0) {
    const node = queue.shift();
    for (const neighbor of Object.keys(graph[node] || {})) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return visited.size === nodes.length;
}

/* =====================================================
   // LOGIKA ZONA AMAN DEKORASI (PENCEGAHAN TABRAKAN)
===================================================== */

function sampleRoadPoints(graph = activeGraph, positions = activeNodePositions, step = 20) {
  const points = [];
  const seen = new Set();

  for (const [from, neighbors] of Object.entries(graph)) {
    for (const to of Object.keys(neighbors)) {
      const edgeKey = makeEdgeKey(from, to);
      if (seen.has(edgeKey)) continue;
      seen.add(edgeKey);

      const { curve } = getPathAndCurveForEdge(from, to);
      const estimated = pointDistance(curve.p1, curve.c) + pointDistance(curve.c, curve.p2);
      const steps = Math.max(8, Math.ceil(estimated / step));

      for (let i = 0; i <= steps; i++) {
        points.push(pointOnCurve(curve, i / steps));
      }
    }
  }

  return points;
}

function pointDistance(a, b) {
  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}

function pointToRectDistance(point, rect) {
  const closestX = clamp(point.x, rect.x, rect.x + rect.w);
  const closestY = clamp(point.y, rect.y, rect.y + rect.h);
  return pointDistance(point, { x: closestX, y: closestY });
}

function rectNearRoad(rect, roadPoints, padding = 55) {
  return roadPoints.some(point => pointToRectDistance(point, rect) < padding);
}

function rectNearNode(rect, positions = activeNodePositions, padding = 70) {
  return Object.values(positions).some(point => pointToRectDistance(point, rect) < padding);
}

function rectOverlapsRect(a, b, padding = 20) {
  return !(
    a.x + a.w + padding < b.x ||
    b.x + b.w + padding < a.x ||
    a.y + a.h + padding < b.y ||
    b.y + b.h + padding < a.y
  );
}

function isClearForDecoration(rect, roadPoints, existing = [], positions = activeNodePositions, roadPadding = 90, nodePadding = 85, overlapPadding = 22) {
  if (rect.x < 30 || rect.y < 30) return false;
  if (rect.x + rect.w > VIEWBOX.w - 30 || rect.y + rect.h > VIEWBOX.h - 30) return false;
  if (rectNearRoad(rect, roadPoints, roadPadding)) return false;
  if (rectNearNode(rect, positions, nodePadding)) return false;
  return !existing.some(other => rectOverlapsRect(rect, other, overlapPadding));
}

function generateRandomDecorations(graph, positions) {
  const roadPoints = sampleRoadPoints(graph, positions);
  const existing = [];
  const parks = [];
  const buildingClusters = [];
  const parkingLots = [];
  const staticCars = [];

  // Hasilkan Taman Kota (Parks)
  for (let attempt = 0; attempt < 100 && parks.length < 5; attempt++) {
    const park = {
      x: Math.round(randomBetween(80, 1380)),
      y: Math.round(randomBetween(80, 740)),
      w: Math.round(randomBetween(100, 160)),
      h: Math.round(randomBetween(70, 110)),
      rx: 16,
      treeRows: 2,
      treeCols: Math.random() > 0.5 ? 4 : 3
    };

    if (isClearForDecoration(park, roadPoints, existing, positions, 90, 85, 22)) {
      parks.push(park);
      existing.push(park);
    }
  }

  // Hasilkan Area Parkir (Parking Lots)
  for (let attempt = 0; attempt < 100 && parkingLots.length < 4; attempt++) {
    const isVert = Math.random() > 0.5;
    const lot = {
      x: Math.round(randomBetween(100, 1350)),
      y: Math.round(randomBetween(100, 700)),
      w: isVert ? 90 : 50,
      h: isVert ? 50 : 90,
      slots: 5,
      vertical: isVert
    };

    if (isClearForDecoration(lot, roadPoints, existing, positions, 80, 85, 22)) {
      parkingLots.push(lot);
      existing.push(lot);

      // Isi mobil statis terparkir di area parkir ini
      const count = 1 + Math.floor(Math.random() * 3);
      const colors = ["#dc2626", "#eab308", "#2563eb", "#ffffff", "#7c3aed"];
      for (let s = 0; s < count; s++) {
        const slotIdx = Math.floor(Math.random() * lot.slots);
        let cx = lot.x;
        let cy = lot.y;
        let rot = 0;
        if (lot.vertical) {
          cx += 12 + slotIdx * 16;
          cy += 25;
          rot = 90;
        } else {
          cx += 25;
          cy += 12 + slotIdx * 16;
          rot = 0;
        }
        staticCars.push({ x: cx, y: cy, color: colors[Math.floor(Math.random() * colors.length)], rot });
      }
    }
  }

  // Hasilkan Kompleks Bangunan (Buildings)
  for (let attempt = 0; attempt < 250 && buildingClusters.length < 14; attempt++) {
    const cluster = makeBuildingCluster(randomBetween(80, 1320), randomBetween(80, 680));
    const rects = cluster.rects;
    const tempExisting = [...existing];
    let safe = rects.length >= 1;

    for (const rect of rects) {
      if (!isClearForDecoration(rect, roadPoints, tempExisting, positions, 90, 85, 22)) {
        safe = false;
        break;
      }
      tempExisting.push(rect);
    }

    if (safe) {
      buildingClusters.push(cluster);
      existing.push(...rects);
    }
  }

  // Isi mobil statis secara dinamis di bahu jalan (jauh dari simpang jalan)
  const colors = ["#dc2626", "#eab308", "#2563eb", "#ffffff", "#7c3aed", "#06b6d4"];
  const shuffledRoadPoints = shuffle([...roadPoints]);
  let roadCarsPlaced = 0;
  for (const pt of shuffledRoadPoints) {
    if (roadCarsPlaced >= 6) break;
    const farFromNodes = Object.values(positions).every(nodePos => pointDistance(pt, nodePos) > 105);
    if (farFromNodes) {
      const rot = Math.random() > 0.5 ? 0 : 90;
      staticCars.push({ x: Math.round(pt.x), y: Math.round(pt.y), color: colors[roadCarsPlaced % colors.length], rot });
      roadCarsPlaced++;
    }
  }

  return {
    water: [
      { d: "M 1308 0 H 1600 V 158 C 1524 142 1478 130 1410 150 C 1375 162 1348 132 1308 110 Z" },
      { d: "M 0 760 C 55 740 110 770 170 748 C 230 726 270 756 320 745 L 320 900 H 0 Z" }
    ],
    zones: [
      { x: 78, y: 78, w: 420, h: 255, rx: 28 },
      { x: 570, y: 110, w: 410, h: 250, rx: 28 },
      { x: 995, y: 430, w: 410, h: 250, rx: 28 },
      { x: 160, y: 560, w: 360, h: 200, rx: 26 }
    ],
    parks,
    buildingClusters,
    parkingLots,
    staticCars
  };
}

function makeBuildingCluster(anchorX, anchorY) {
  const count = 2 + Math.floor(Math.random() * 2);
  const rects = [];

  for (let i = 0; i < count; i++) {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const w = Math.round(randomBetween(45, 68));
    const h = Math.round(randomBetween(30, 48));
    rects.push({
      x: Math.round(anchorX + col * randomBetween(84, 100) + randomBetween(-3, 3)),
      y: Math.round(anchorY + row * randomBetween(60, 74) + randomBetween(-3, 3)),
      w,
      h,
      rx: 5
    });
  }

  return { rects };
}

/* =====================================================
   // PENERJEMAH / RENDERER DEKORASI KOTA PERKOTAAN
===================================================== */

function renderFullMap() {
  renderDecorations();
  renderRoads();
  renderCrosswalks();
  renderStaticCars();
  renderNodes();
}

function generateRoadAlignedDecorations() {
  const parks = [];
  const buildingClusters = [];
  const parkingLots = [];
  const staticCars = [];
  const streetTrees = [];
  
  const roadPoints = sampleRoadPoints(activeGraph, activeNodePositions, 25);
  const existing = [];
  const seen = new Set();
  
  for (const [from, neighbors] of Object.entries(activeGraph)) {
    for (const [to, weight] of Object.entries(neighbors)) {
      const edgeKey = makeEdgeKey(from, to);
      if (seen.has(edgeKey)) continue;
      seen.add(edgeKey);
      
      const { curve } = getPathAndCurveForEdge(from, to);
      const tSamples = [0.16, 0.32, 0.48, 0.64, 0.80];
      
      for (const t of tSamples) {
        const pt = pointOnCurve(curve, t);
        const tang = tangentOnCurve(curve, t);
        const len = Math.sqrt(tang.x * tang.x + tang.y * tang.y) || 1;
        const tx = tang.x / len;
        const ty = tang.y / len;
        const nx = -ty;
        const ny = tx;
        const angle = Math.atan2(ty, tx) * 180 / Math.PI;
        
        // Letakkan di sisi kiri dan kanan jalan secara sejajar
        const offsets = [46, -46];
        
        for (const sideOffset of offsets) {
          const cx = pt.x + nx * sideOffset;
          const cy = pt.y + ny * sideOffset;
          
          // Hindari simpang node agar penanda/pin tidak tertutup
          const nearNode = Object.values(activeNodePositions).some(nodePos => {
            return pointDistance({ x: cx, y: cy }, nodePos) < 62;
          });
          if (nearNode) continue;
          
          // Mencegah tabrakan antar elemen dekorasi
          const overlaps = existing.some(other => {
            return pointDistance({ x: cx, y: cy }, { x: other.x, y: other.y }) < 32;
          });
          if (overlaps) continue;
          
          const hashVal = simpleHash(`${Math.round(cx)}-${Math.round(cy)}`);
          const choice = hashVal % 10;
          
          if (choice < 6) {
            // Gedung pseudo-3D melengkung searah jalan
            const w = 24 + (hashVal % 10);
            const h = 18 + ((hashVal >> 2) % 6);
            const bldg = {
              x: Math.round(cx),
              y: Math.round(cy),
              w,
              h,
              rot: Math.round(angle),
              rx: 4
            };
            buildingClusters.push({ rects: [bldg] });
            existing.push({ x: cx, y: cy });
          } else if (choice < 8) {
            // Area parkir pinggir jalan (street-side parking) sejajar jalan
            const lot = {
              x: Math.round(cx),
              y: Math.round(cy),
              w: 32,
              h: 18,
              rot: Math.round(angle),
              slots: 3
            };
            parkingLots.push(lot);
            existing.push({ x: cx, y: cy });
            
            // Isi mobil terparkir di slot tersebut
            if ((hashVal % 3) > 0) {
              const carColors = ["#dc2626", "#eab308", "#2563eb", "#ffffff", "#7c3aed", "#0ea5e9"];
              const carColor = carColors[hashVal % carColors.length];
              const slotIdx = hashVal % 3;
              const carOffset = (slotIdx - 1) * 9;
              const carX = cx + tx * carOffset;
              const carY = cy + ty * carOffset;
              staticCars.push({
                x: Math.round(carX),
                y: Math.round(carY),
                color: carColor,
                rot: Math.round(angle)
              });
            }
          } else {
            // Pohon rindang pembatas trotoar jalan
            streetTrees.push({ x: Math.round(cx), y: Math.round(cy) });
            existing.push({ x: cx, y: cy });
          }
        }
      }
    }
  }
  
  // Hasilkan taman kota hijau di area kosong yang jauh dari jalan
  for (let px = 200; px < VIEWBOX.w - 200; px += 240) {
    for (let py = 180; py < VIEWBOX.h - 180; py += 180) {
      let minDist = Infinity;
      for (const pt of roadPoints) {
        const d = pointDistance({ x: px, y: py }, pt);
        if (d < minDist) minDist = d;
      }
      
      if (minDist > 130) {
        const nearNode = Object.values(activeNodePositions).some(nodePos => {
          return pointDistance({ x: px, y: py }, nodePos) < 130;
        });
        if (!nearNode) {
          const pw = 130 + (px % 40);
          const ph = 85 + (py % 30);
          parks.push({
            x: px - pw/2,
            y: py - ph/2,
            w: pw,
            h: ph,
            rx: 18,
            treeRows: 2,
            treeCols: 4
          });
        }
      }
    }
  }
  
  const water = currentMapMode === "tanjungpinang"
    ? [
        { d: "M 1320 0 H 1600 V 170 C 1535 155 1485 165 1430 142 C 1380 118 1350 128 1320 100 Z" },
        { d: "M 0 750 C 60 730 120 760 180 740 C 240 720 280 750 340 738 L 340 900 H 0 Z" }
      ]
    : [
        { d: "M 1340 0 H 1600 V 160 C 1530 140 1480 150 1420 130 C 1370 110 1340 120 1310 90 Z" },
        { d: "M 0 760 C 60 740 120 770 180 750 C 240 730 280 760 340 745 L 340 900 H 0 Z" }
      ];
      
  const zones = [
    { x: 90, y: 90, w: 320, h: 220, rx: 24 },
    { x: 600, y: 120, w: 350, h: 200, rx: 24 },
    { x: 1050, y: 440, w: 340, h: 220, rx: 24 },
    { x: 220, y: 620, w: 380, h: 140, rx: 24 }
  ];
  
  return {
    water,
    zones,
    parks,
    buildingClusters,
    parkingLots,
    staticCars,
    streetTrees
  };
}

/* =====================================================
   // PENERJEMAH / RENDERER DEKORASI KOTA PERKOTAAN
===================================================== */

function renderDecorations() {
  clearLayer(layerBase);
  clearLayer(layerWater);
  clearLayer(layerZones);
  clearLayer(layerParks);
  clearLayer(layerTrees);
  clearLayer(layerBuildings);
  clearLayer(layerParking);

  // 1. Lapisan Tanah Dasar (Base Land)
  layerBase.appendChild(svgEl("rect", {
    x: 0, y: 0, width: VIEWBOX.w, height: VIEWBOX.h, class: "land-fill"
  }));

  // Garis kisi-kisi (grid) tipis untuk estetika peta skematik tata kota
  const gridGroup = svgEl("g", { opacity: 0.05 });
  for (let gx = 100; gx < VIEWBOX.w; gx += 200) {
    gridGroup.appendChild(svgEl("line", { x1: gx, y1: 0, x2: gx, y2: VIEWBOX.h, stroke: "#6b7280", "stroke-width": 1 }));
  }
  for (let gy = 100; gy < VIEWBOX.h; gy += 200) {
    gridGroup.appendChild(svgEl("line", { x1: 0, y1: gy, x2: VIEWBOX.w, y2: gy, stroke: "#6b7280", "stroke-width": 1 }));
  }
  layerBase.appendChild(gridGroup);

  // 2. Area Perairan (Water)
  for (const water of activeDecorations.water || []) {
    layerWater.appendChild(svgEl("path", { d: water.d, class: "sea-fill" }));
    layerWater.appendChild(svgEl("path", { d: water.d, class: "water-edge" }));
  }

  // 3. Zona Perkotaan / Distrik (City Zones)
  for (const zone of activeDecorations.zones || []) {
    layerZones.appendChild(svgEl("rect", {
      x: zone.x, y: zone.y, width: zone.w, height: zone.h, rx: zone.rx || 24, class: "zone-fill"
    }));
  }

  // 4. Taman Kota & Pepohonan (Parks & Trees)
  for (const park of activeDecorations.parks || []) {
    drawPark(park);
  }

  // 5. Area Parkir Kendaraan (Parking)
  for (const lot of activeDecorations.parkingLots || []) {
    drawParkingLot(lot);
  }

  // 6. Kompleks Bangunan (Buildings)
  for (const cluster of activeDecorations.buildingClusters || []) {
    for (const rect of cluster.rects || []) {
      drawBuilding(rect);
    }
  }
  
  // 7. Pohon Jalanan (Street Trees)
  for (const tree of activeDecorations.streetTrees || []) {
    layerTrees.appendChild(svgEl("circle", {
      cx: tree.x, cy: tree.y, r: 2.2, class: "tree-trunk"
    }));
    layerTrees.appendChild(svgEl("circle", {
      cx: tree.x, cy: tree.y, r: 8.5, class: "tree-crown"
    }));
  }
}

function drawPark(park) {
  layerParks.appendChild(svgEl("rect", {
    x: park.x, y: park.y, width: park.w, height: park.h, rx: park.rx || 16, class: "park-fill"
  }));

  const rows = park.treeRows || 2;
  const cols = park.treeCols || 3;
  const stepX = park.w / (cols + 1);
  const stepY = park.h / (rows + 1);

  for (let row = 1; row <= rows; row++) {
    for (let col = 1; col <= cols; col++) {
      const cx = round1(park.x + stepX * col);
      const cy = round1(park.y + stepY * row);
      
      // Batang pohon
      layerTrees.appendChild(svgEl("circle", {
        cx, cy, r: 2.2, class: "tree-trunk"
      }));
      // Tajuk/daun pohon
      layerTrees.appendChild(svgEl("circle", {
        cx, cy, r: 8.5, class: "tree-crown"
      }));
    }
  }
}

function drawParkingLot(lot) {
  const rot = lot.rot || 0;
  const group = svgEl("g", {
    transform: `translate(${lot.x}, ${lot.y}) rotate(${rot})`
  });

  // Area parkir dasar berwarna abu-abu
  group.appendChild(svgEl("rect", {
    x: -lot.w/2, y: -lot.h/2, width: lot.w, height: lot.h, rx: 4, class: "parking-fill"
  }));

  // Garis pembatas tepi parkiran
  group.appendChild(svgEl("rect", {
    x: -lot.w/2, y: -lot.h/2, width: lot.w, height: lot.h, rx: 4, fill: "none", stroke: "#6b6458", "stroke-width": 1.2
  }));

  // Marka garis parkir (Spots)
  const isVertical = lot.vertical !== undefined ? lot.vertical : (lot.w > lot.h);
  if (isVertical) {
    const slotSize = lot.w / lot.slots;
    for (let i = 1; i < lot.slots; i++) {
      const sx = -lot.w/2 + i * slotSize;
      group.appendChild(svgEl("line", {
        x1: sx, y1: -lot.h/2, x2: sx, y2: lot.h/2 - 2, class: "parking-line"
      }));
    }
  } else {
    const slotSize = lot.h / lot.slots;
    for (let i = 1; i < lot.slots; i++) {
      const sy = -lot.h/2 + i * slotSize;
      group.appendChild(svgEl("line", {
        x1: -lot.w/2, y1: sy, x2: lot.w/2 - 2, y2: sy, class: "parking-line"
      }));
    }
  }
  
  layerParking.appendChild(group);
}

function drawBuilding(b) {
  const rot = b.rot || 0;
  const group = svgEl("g", {
    transform: `translate(${b.x}, ${b.y}) rotate(${rot})`
  });

  const hw = b.w / 2;
  const hh = b.h / 2;

  // Efek bayangan gedung
  group.appendChild(svgEl("rect", {
    x: -hw + 4, y: -hh + 5, width: b.w, height: b.h, rx: b.rx || 5, class: "bldg-shadow"
  }));

  // Lapisan dasar gedung (Base)
  group.appendChild(svgEl("rect", {
    x: -hw, y: -hh, width: b.w, height: b.h, rx: b.rx || 5, class: "bldg-base"
  }));

  // Atap gedung (dibuat agak mengecil ke dalam untuk efek 3D Top-Down)
  const roofInset = 3;
  group.appendChild(svgEl("rect", {
    x: -hw + roofInset,
    y: -hh + roofInset,
    width: b.w - roofInset * 2,
    height: b.h - roofInset * 2,
    rx: Math.max(2, (b.rx || 5) - roofInset),
    class: "bldg-roof"
  }));

  // Elemen atap tambahan (seperti kotak ventilasi udara)
  if (b.w > 18 && b.h > 14) {
    const boxW = Math.max(4, b.w * 0.35);
    const boxH = Math.max(4, b.h * 0.35);
    group.appendChild(svgEl("rect", {
      x: -boxW / 2,
      y: -boxH / 2,
      width: boxW,
      height: boxH,
      rx: 1.5,
      class: "bldg-detail"
    }));
  }

  layerBuildings.appendChild(group);
}

/* =====================================================
   // PENERJEMAH / RENDERER JALAN RAYA BEZIER
===================================================== */

function renderRoads() {
  clearLayer(layerSidewalks);
  clearLayer(layerRoadCasing);
  clearLayer(layerRoadFill);
  clearLayer(layerRoadLine);
  clearLayer(layerLabels);

  const seen = new Set();

  for (const [from, neighbors] of Object.entries(activeGraph)) {
    for (const [to, weight] of Object.entries(neighbors)) {
      const edgeKey = makeEdgeKey(from, to);
      if (seen.has(edgeKey)) continue;
      seen.add(edgeKey);

      const pathData = createBezierPath(from, to, edgeKey);

      // Lapisan 1: Trotoar beton terluar (Sidewalk curbs) berwarna krem/putih-lembut
      layerSidewalks.appendChild(svgEl("path", { d: pathData, class: "sidewalk-fill", "stroke-width": 54 }));
      // Lapisan 2: Pembatas jalan (Road casing) garis tepi hitam aspal
      layerRoadCasing.appendChild(svgEl("path", { d: pathData, class: "road-casing", "stroke-width": 42 }));
      // Lapisan 3: Marka tepi jalan kuning padat (Road edges)
      layerRoadCasing.appendChild(svgEl("path", { d: pathData, class: "road-edge", "stroke-width": 32 }));
      // Lapisan 4: Permukaan aspal utama abu-abu gelap (Road fill)
      layerRoadFill.appendChild(svgEl("path", { d: pathData, class: "road-fill", "stroke-width": 30 }));
      // Lapisan 5: Marka pembagi lajur jalan garis putus-putus putih (Lane dividers)
      layerRoadLine.appendChild(svgEl("path", { d: pathData, class: "road-center", "stroke-width": 2.5 }));

      // Tambahkan label teks jarak di titik tengah jalan (midpoint)
      const curve = getRoadCurve(from, to, edgeKey);
      const labelPoint = pointOnCurve(curve, 0.5);
      addText(layerLabels, round1(labelPoint.x), round1(labelPoint.y - 12), `${weight} m`, "dist-label", {
        "text-anchor": "middle"
      });
    }
  }
}

function renderCrosswalks() {
  clearLayer(layerCrosswalks);

  // Gambar penyeberangan zebra cross di persimpangan jalan utama
  const positions = activeNodePositions;
  const graph = activeGraph;
  const seenJunctions = new Set();

  for (const [node, neighbors] of Object.entries(graph)) {
    const pos = positions[node];
    const neighborKeys = Object.keys(neighbors);
    
    // Zebra cross pada jalan-jalan yang terhubung ke simpang ini
    for (const nextNode of neighborKeys) {
      const jKey = [node, nextNode].sort().join(":");
      if (seenJunctions.has(jKey)) continue;
      seenJunctions.add(jKey);

      const { curve } = getPathAndCurveForEdge(node, nextNode);
      
      // Posisi zebra cross digeser sedikit dari titik koordinat simpang agar pas di mulut jalan
      const offsetT = 45 / (pointDistance(pos, positions[nextNode]) || 1);
      const t1 = clamp(offsetT, 0.08, 0.25);
      const t2 = clamp(1 - offsetT, 0.75, 0.92);

      const crossPoint1 = pointOnCurve(curve, t1);
      const crossPoint2 = pointOnCurve(curve, t2);

      drawZebraAtCurve(crossPoint1, curve, t1);
      drawZebraAtCurve(crossPoint2, curve, t2);
    }
  }
}

function drawZebraAtCurve(point, curve, t) {
  const tang = tangentOnCurve(curve, t);
  const len = Math.sqrt(tang.x * tang.x + tang.y * tang.y) || 1;
  const tx = tang.x / len; // Vektor satuan tangen (searah kurva jalan)
  const ty = tang.y / len;
  const nx = -ty; // Vektor satuan normal (tegak lurus terhadap kurva jalan)
  const ny = tx;

  const group = svgEl("g", { opacity: 0.8 });
  const numStripes = 4;
  const stripeWidth = 2.4;
  const stripeLength = 9;

  for (let i = -numStripes / 2; i <= numStripes / 2; i++) {
    const sx = point.x + i * stripeWidth * 2.5 * nx;
    const sy = point.y + i * stripeWidth * 2.5 * ny;
    group.appendChild(svgEl("line", {
      x1: sx - tx * (stripeLength / 2),
      y1: sy - ty * (stripeLength / 2),
      x2: sx + tx * (stripeLength / 2),
      y2: sy + ty * (stripeLength / 2),
      stroke: "#ffffff",
      "stroke-width": stripeWidth,
      class: "crosswalk-stripe"
    }));
  }
  layerCrosswalks.appendChild(group);
}

/* =====================================================
   // PENERJEMAH / RENDERER MOBIL STATIS TERPARKIR
===================================================== */

function renderStaticCars() {
  clearLayer(layerStaticCars);

  for (const car of activeDecorations.staticCars || []) {
    const group = svgEl("g", {
      transform: `translate(${car.x}, ${car.y}) rotate(${car.rot})`
    });

    // Bayangan mobil
    group.appendChild(svgEl("rect", {
      x: -6, y: -3, width: 12, height: 6, rx: 1.5, fill: "rgba(15, 23, 42, 0.25)"
    }));

    // Badan mobil
    group.appendChild(svgEl("rect", {
      x: -7, y: -3.5, width: 14, height: 7, rx: 1.8, fill: car.color, class: "static-car-body", stroke: "#1e293b"
    }));

    // Kaca depan mobil
    group.appendChild(svgEl("rect", {
      x: 0, y: -2.2, width: 4, height: 4.4, rx: 0.8, class: "static-car-window"
    }));

    // Lampu depan mobil
    group.appendChild(svgEl("circle", { cx: 5.5, cy: -2, r: 0.7, fill: "#fef08a" }));
    group.appendChild(svgEl("circle", { cx: 5.5, cy: 2, r: 0.7, fill: "#fef08a" }));

    layerStaticCars.appendChild(group);
  }
}

function renderNodes() {
  clearLayer(layerNodes);

  for (const node of getNodes()) {
    const pos = activeNodePositions[node];
    const group = svgEl("g");

    // Penanda lingkaran simpang (Base)
    group.appendChild(svgEl("circle", {
      cx: pos.x, cy: pos.y, r: 13, class: "node-circle"
    }));

    addText(group, pos.x, pos.y, node, "node-code");
    layerNodes.appendChild(group);

    // Label nama simpang / Landmark Perkotaan Tanjungpinang
    addText(layerLabels, pos.x, pos.y + 24, activeNodeNames[node], "node-label", {
      "text-anchor": "middle"
    });
  }
}

/* =====================================================
   // PEMBARUAN RUTE & DETEKSI PENCARIAN DIJKSTRA
===================================================== */

function calculateAndShowRoute(start, end, statusText = `${mapStatusLabel()} / Siap`) {
  currentStart = start;
  currentEnd = end;
  const result = dijkstra(activeGraph, start, end);
  updateRoute(result.path, result.totalDistance);
  setStatus(statusText);
}

function updateRoute(path, totalDistance) {
  stopAnimation(true);
  clearLayer(layerRoute);
  clearLayer(layerPins);
  clearLayer(layerVehicle);

  currentPath = path;
  currentDist = Number.isFinite(totalDistance) ? totalDistance : 0;

  if (!path || path.length === 0) {
    updateInfoPanel([], totalDistance);
    setStatus(`${mapStatusLabel()} / Rute tidak ditemukan`);
    return;
  }

  if (path.length === 1) {
    drawEndpointPin(path[0], "S", "ep-start");
    updateInfoPanel(path, 0);
    buildVehiclePath([]);
    return;
  }

  for (let i = 0; i < path.length - 1; i++) {
    const edgeKey = makeEdgeKey(path[i], path[i + 1]);
    layerRoute.appendChild(svgEl("path", {
      d: createBezierPath(path[i], path[i + 1], edgeKey),
      class: "active-route",
      "stroke-width": 12
    }));
  }

  drawEndpointPin(path[0], "S", "ep-start");
  drawEndpointPin(path[path.length - 1], "T", "ep-end");
  buildVehiclePath(path);
  updateInfoPanel(path, totalDistance);
}

function drawEndpointPin(node, label, className) {
  const pos = activeNodePositions[node];
  const group = svgEl("g");
  group.appendChild(svgEl("circle", {
    cx: pos.x, cy: pos.y, r: 14, class: `ep-circle ${className}`
  }));
  addText(group, pos.x, pos.y, label, "ep-text");
  layerPins.appendChild(group);
}

function updateInfoPanel(path, totalDistance) {
  const start = path[0] || currentStart;
  const end = path[path.length - 1] || currentEnd;

  infoStart.textContent = start ? `${start} - ${activeNodeNames[start] || "-"}` : "-";
  infoEnd.textContent = end ? `${end} - ${activeNodeNames[end] || "-"}` : "-";
  infoNodes.textContent = path.length ? path.join(" -> ") : "-";
  infoPlaces.textContent = path.length ? path.map(node => activeNodeNames[node]).join(" -> ") : "-";
  infoDist.textContent = path.length ? formatMeters(totalDistance) : "-";
  infoSegs.textContent = path.length ? `${Math.max(0, path.length - 1)} ruas` : "-";
  summaryDist.textContent = path.length ? `${Math.round(totalDistance)} m` : "0 m";
  hudRoute.textContent = path.length ? path.join(" -> ") : "-";
  hudDist.textContent = "0 m";
  hudPct.textContent = "0%";
  hudBarFill.style.width = "0%";
}

function populateDropdowns(start, end) {
  startSelect.innerHTML = "";
  endSelect.innerHTML = "";

  for (const node of getNodes()) {
    const label = `${node} - ${activeNodeNames[node]}`;
    const startOption = document.createElement("option");
    startOption.value = node;
    startOption.textContent = label;
    startSelect.appendChild(startOption);

    const endOption = document.createElement("option");
    endOption.value = node;
    endOption.textContent = label;
    endSelect.appendChild(endOption);
  }

  startSelect.value = start;
  endSelect.value = end;
}

function loadDefaultMap() {
  stopAnimation(true);
  activeGraph = deepCopy(defaultGraph);
  activeNodeNames = deepCopy(defaultNodeNames);
  activeNodePositions = deepCopy(defaultNodePositions);
  currentMapMode = "tanjungpinang";

  rebuildEdgeGeometryCache();
  activeDecorations = generateRoadAlignedDecorations();

  renderFullMap();
  populateDropdowns("A", "D");
  calculateAndShowRoute("A", "D", "Peta Tanjungpinang / Siap");
  fitMap();
}

/* =====================================================
   // ANIMASI PERJALANAN KENDARAAN (VEHICLE MOTION)
===================================================== */

function buildVehiclePath(path) {
  removeHiddenVehiclePath();
  vehiclePathEl = null;
  animLen = 0;
  animProgress = 0;

  if (!path || path.length < 2) return;

  const parts = [];
  for (let i = 0; i < path.length - 1; i++) {
    const from = path[i];
    const to = path[i + 1];
    parts.push(createRoadSegmentCommand(from, to, i === 0, makeEdgeKey(from, to)));
  }

  vehiclePathEl = svgEl("path", {
    id: "_vehicleHiddenPath",
    d: parts.join(" "),
    visibility: "hidden",
    "pointer-events": "none"
  });
  svg.appendChild(vehiclePathEl);
  animLen = vehiclePathEl.getTotalLength();
}

function removeHiddenVehiclePath() {
  const old = document.getElementById("_vehicleHiddenPath");
  if (old && old.parentNode) old.parentNode.removeChild(old);
}

function drawVehicle(x, y, angle) {
  clearLayer(layerVehicle);
  const group = svgEl("g", {
    transform: `translate(${round1(x)}, ${round1(y)}) rotate(${round1(angle)})`
  });

  group.appendChild(svgEl("rect", { x: -15, y: -8, width: 30, height: 16, rx: 5, class: "car-body" }));
  group.appendChild(svgEl("rect", { x: 1, y: -5, width: 11, height: 10, rx: 2, class: "car-window" }));
  group.appendChild(svgEl("rect", { x: 12, y: -3, width: 4, height: 6, rx: 2, class: "car-front" }));

  for (const wheel of [
    { x: -8, y: -9 },
    { x: 8, y: -9 },
    { x: -8, y: 9 },
    { x: 8, y: 9 }
  ]) {
    group.appendChild(svgEl("ellipse", { cx: wheel.x, cy: wheel.y, rx: 4, ry: 2.5, class: "car-wheel" }));
  }

  layerVehicle.appendChild(group);
}

function startAnimation(resetProgress = false) {
  if (!vehiclePathEl || animLen <= 0) return;
  if (animRunning) return;
  if (resetProgress || animProgress >= animLen) animProgress = 0;

  document.body.classList.add("is-tracking");
  animRunning = true;
  animLastTime = null;
  hudStatus.textContent = "Berjalan";
  setStatus(`${mapStatusLabel()} / Tracking`);
  updateMotionButtons();
  animRafId = requestAnimationFrame(animationFrame);
}

function pauseAnimation() {
  if (!animRunning) return;
  animRunning = false;
  if (animRafId) cancelAnimationFrame(animRafId);
  animRafId = null;
  hudStatus.textContent = "Dijeda";
  setStatus(`${mapStatusLabel()} / Dijeda`);
  updateMotionButtons();
}

function stopAnimation(clearVehicle = false) {
  animRunning = false;
  if (animRafId) cancelAnimationFrame(animRafId);
  animRafId = null;
  animLastTime = null;
  animProgress = 0;
  document.body.classList.remove("is-tracking");
  hudStatus.textContent = "Siap";
  hudDist.textContent = "0 m";
  hudPct.textContent = "0%";
  hudBarFill.style.width = "0%";
  if (clearVehicle) clearLayer(layerVehicle);
  updateMotionButtons();
}

function animationFrame(timestamp) {
  if (!animRunning) return;
  if (animLastTime === null) animLastTime = timestamp;

  const delta = (timestamp - animLastTime) / 1000;
  animLastTime = timestamp;
  animProgress = Math.min(animLen, animProgress + animSpeed * delta);

  const point = vehiclePathEl.getPointAtLength(animProgress);
  const angle = angleAtLength(vehiclePathEl, animProgress, animLen);
  drawVehicle(point.x, point.y, angle);
  updateHudProgress();

  if (animProgress >= animLen) {
    animRunning = false;
    animRafId = null;
    document.body.classList.remove("is-tracking");
    hudStatus.textContent = "Selesai";
    setStatus(`${mapStatusLabel()} / Selesai`);
    updateMotionButtons();
    return;
  }

  animRafId = requestAnimationFrame(animationFrame);
}

function angleAtLength(path, length, totalLength) {
  const delta = 2.4;
  const p1 = path.getPointAtLength(clamp(length - delta, 0, totalLength));
  const p2 = path.getPointAtLength(clamp(length + delta, 0, totalLength));
  return Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
}

function updateHudProgress() {
  const ratio = animLen > 0 ? animProgress / animLen : 0;
  const percent = clamp(Math.round(ratio * 100), 0, 100);
  hudBarFill.style.width = `${percent}%`;
  hudPct.textContent = `${percent}%`;
  hudDist.textContent = `${Math.round(currentDist * ratio)} m`;
}

function updateMotionButtons() {
  const tracking = document.body.classList.contains("is-tracking");
  holdBtn.textContent = tracking && !animRunning && animProgress > 0 ? "Resume" : "Pause";
}

/* =====================================================
   // PENGIKATAN EVENT ANTARMUKA (UI EVENTS)
===================================================== */

function bindEvents() {
  findRouteBtn.addEventListener("click", () => {
    calculateAndShowRoute(startSelect.value, endSelect.value, `${mapStatusLabel()} / Rute siap`);
  });

  shufflePairBtn.addEventListener("click", () => {
    const nodes = getNodes();
    if (nodes.length < 2) return;
    let start = nodes[Math.floor(Math.random() * nodes.length)];
    let end = nodes[Math.floor(Math.random() * nodes.length)];

    while (end === start) end = nodes[Math.floor(Math.random() * nodes.length)];

    startSelect.value = start;
    endSelect.value = end;
    calculateAndShowRoute(start, end, `${mapStatusLabel()} / Posisi diacak`);
  });

  shuffleMapBtn.addEventListener("click", () => {
    stopAnimation(true);
    if (!generateRandomMap()) {
      setStatus("Peta Acak MST / Gagal generate");
      return;
    }

    renderFullMap();
    const pair = pickRandomRoutePair();
    populateDropdowns(pair.start, pair.end);
    calculateAndShowRoute(pair.start, pair.end, "Peta Acak MST / Siap");
    fitMap();
  });

  restoreMapBtn.addEventListener("click", () => {
    loadDefaultMap();
  });

  playBtn.addEventListener("click", () => {
    startAnimation(true);
  });

  holdBtn.addEventListener("click", () => {
    if (animRunning) {
      pauseAnimation();
      return;
    }
    if (document.body.classList.contains("is-tracking") && animProgress > 0) {
      startAnimation(false);
    }
  });

  rewindBtn.addEventListener("click", () => {
    stopAnimation(true);
    setStatus(`${mapStatusLabel()} / Siap`);
  });

  startSelect.addEventListener("change", () => {
    currentStart = startSelect.value;
  });

  endSelect.addEventListener("change", () => {
    currentEnd = endSelect.value;
  });

  window.addEventListener("resize", fitMap);
}

/* =====================================================
   // INISIALISASI UTAMA (INIT)
===================================================== */

function init() {
  bindEvents();
  loadDefaultMap();

  const check = dijkstra(defaultGraph, "A", "D");
  const pathOk = check.path.join(" -> ") === DEFAULT_ROUTE_EXPECTED.path.join(" -> ");
  const distOk = check.totalDistance === DEFAULT_ROUTE_EXPECTED.total;
  if (!pathOk || !distOk) {
    setStatus("Peta Tanjungpinang / Validasi gagal");
  }
}

/* =====================================================
   // CAMERA & VIEWPOINT SYSTEM
===================================================== */

function applyCamera() {
  cameraGroup.setAttribute(
    "transform",
    `
      translate(${round1(camX)}, ${round1(camY)})
      scale(${round1(camScale)})
    `
  );
}

/* =====================================================
   // ZOOM SYSTEM
===================================================== */

function zoomAtPoint(factor, pointX, pointY) {

  const previousScale = camScale;

  const nextScale = clamp(
    previousScale * factor,
    0.35,
    4.5
  );

  const worldX = (pointX - camX) / previousScale;
  const worldY = (pointY - camY) / previousScale;

  camScale = nextScale;

  camX = pointX - worldX * nextScale;
  camY = pointY - worldY * nextScale;

  applyCamera();
}

function smoothZoom(targetScale) {

  targetScale = clamp(targetScale, 0.35, 4.5);

  const startScale = camScale;
  const startTime = performance.now();
  const duration = 180;

  function animate(now) {

    const elapsed = now - startTime;

    const t = clamp(elapsed / duration, 0, 1);

    const eased =
      1 - Math.pow(1 - t, 3);

    camScale =
      startScale +
      (targetScale - startScale) * eased;

    applyCamera();

    if (t < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

function zoomIn() {

  const target =
    camScale * 1.18;

  smoothZoom(target);
}

function zoomOut() {

  const target =
    camScale / 1.18;

  smoothZoom(target);
}

/* =====================================================
   // AUTO FIT CAMERA
===================================================== */

function fitMap() {

  const vw = mapStage.clientWidth;
  const vh = mapStage.clientHeight;

  // ukuran asli SVG map
  const mapWidth = 1000;
  const mapHeight = 520;

  // hitung scale responsive
  const scale = Math.min(
    vw / mapWidth,
    vh / mapHeight
  ) * 0.9;

  camScale = scale;

  // CENTER viewport
  camX = (vw / 2) - (mapWidth * scale / 2);
  camY = (vh / 2) - (mapHeight * scale / 2);

  applyCamera();
}

/* =====================================================
   // PAN / DRAG CAMERA
===================================================== */

function startPan(event) {

  if (event.button !== 0) return;

  isDragging = true;

  dragStartX = event.clientX;
  dragStartY = event.clientY;

  camStartX = camX;
  camStartY = camY;

  svg.classList.add("dragging");
}

function movePan(event) {

  if (!isDragging) return;

  const dx =
    event.clientX - dragStartX;

  const dy =
    event.clientY - dragStartY;

  camX = camStartX + dx;
  camY = camStartY + dy;

  applyCamera();
}

function endPan() {

  isDragging = false;

  svg.classList.remove("dragging");
}

/* =====================================================
   // MOUSE CONTROLS
===================================================== */

svg.addEventListener(
  "mousedown",
  startPan
);

window.addEventListener(
  "mousemove",
  movePan
);

window.addEventListener(
  "mouseup",
  endPan
);

/* =====================================================
   // TRACKPAD / WHEEL ZOOM
===================================================== */

svg.addEventListener(
  "wheel",
  event => {

    event.preventDefault();

    const rect =
      svg.getBoundingClientRect();

    const mouseX =
      event.clientX - rect.left;

    const mouseY =
      event.clientY - rect.top;

    const zoomFactor =
      event.deltaY < 0
        ? 1.12
        : 1 / 1.12;

    zoomAtPoint(
      zoomFactor,
      mouseX,
      mouseY
    );
  },
  { passive: false }
);

/* =====================================================
   // TOUCH SUPPORT
===================================================== */

svg.addEventListener(
  "touchstart",
  event => {

    if (event.touches.length !== 1)
      return;

    const touch =
      event.touches[0];

    startPan({
      button: 0,
      clientX: touch.clientX,
      clientY: touch.clientY
    });
  },
  { passive: true }
);

svg.addEventListener(
  "touchmove",
  event => {

    if (
      event.touches.length !== 1 ||
      !isDragging
    ) return;

    event.preventDefault();

    const touch =
      event.touches[0];

    movePan({
      clientX: touch.clientX,
      clientY: touch.clientY
    });
  },
  { passive: false }
);

svg.addEventListener(
  "touchend",
  endPan
);

/* =====================================================
   // BUTTON CONTROLS
===================================================== */

zoomInBtn.addEventListener(
  "click",
  zoomIn
);

zoomOutBtn.addEventListener(
  "click",
  zoomOut
);

fitBtn.addEventListener(
  "click",
  fitMap
);

/* =====================================================
   // KEYBOARD NAVIGATION
===================================================== */

window.addEventListener(
  "keydown",
  event => {

    const speed = 40;

    switch (
      event.key.toLowerCase()
    ) {

      case "w":
      case "arrowup":
        camY += speed;
        break;

      case "s":
      case "arrowdown":
        camY -= speed;
        break;

      case "a":
      case "arrowleft":
        camX += speed;
        break;

      case "d":
      case "arrowright":
        camX -= speed;
        break;

      default:
        return;
    }

    applyCamera();
  }
);

/* =====================================================
   // INITIALIZE CAMERA
===================================================== */

applyCamera();

init();

setTimeout(() => {
  fitMap();
}, 50);
