const graph = {
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

const posisiNode = {
  A: { x: 100, y: 250 },
  B: { x: 200, y: 150 },
  C: { x: 300, y: 120 },
  D: { x: 700, y: 200 },
  E: { x: 650, y: 320 },
  F: { x: 550, y: 420 },
  G: { x: 420, y: 470 },
  H: { x: 300, y: 430 },
  I: { x: 220, y: 360 },
  J: { x: 150, y: 300 },
  K: { x: 220, y: 260 },
  L: { x: 330, y: 270 },
  M: { x: 430, y: 260 },
  N: { x: 520, y: 240 },
  O: { x: 620, y: 220 }
};

const namaNode = {
  A: 'Start',
  D: 'Tujuan'
};

const canvas = document.getElementById('mapCanvas');
const ctx = canvas.getContext('2d');

const startSelect = document.getElementById('startNode');
const endSelect = document.getElementById('endNode');

let jalurTerbaik = [];

function isiDropdown() {
  for (let node in posisiNode) {
    startSelect.innerHTML += `<option value="${node}">${node}</option>`;
    endSelect.innerHTML += `<option value="${node}">${node}</option>`;
  }

  startSelect.value = 'A';
  endSelect.value = 'D';
}

function dijkstra(graph, start, end) {
  let distances = {};
  let visited = {};
  let previous = {};

  for (let node in graph) {
    distances[node] = Infinity;
    previous[node] = null;
  }

  distances[start] = 0;

  while (true) {
    let closestNode = null;

    for (let node in distances) {
      if (!visited[node] &&
          (closestNode === null || distances[node] < distances[closestNode])) {
        closestNode = node;
      }
    }

    if (closestNode === null) break;
    if (closestNode === end) break;

    visited[closestNode] = true;

    for (let neighbor in graph[closestNode]) {
      let newDist = distances[closestNode] + graph[closestNode][neighbor];

      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        previous[neighbor] = closestNode;
      }
    }
  }

  let path = [];
  let current = end;

  while (current) {
    path.unshift(current);
    current = previous[current];
  }

  return {
    distance: distances[end],
    path
  };
}

function drawBezierRoad(start, end, highlight = false) {
  const cpX = (start.x + end.x) / 2;
  const cpY = (start.y + end.y) / 2 - 60;

  ctx.beginPath();
  ctx.moveTo(start.x, start.y);

  ctx.quadraticCurveTo(cpX, cpY, end.x, end.y);

  ctx.strokeStyle = highlight ? '#2563eb' : '#cbd5e1';
  ctx.lineWidth = highlight ? 5 : 2;
  ctx.stroke();
}

function gambarGraph() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let node in graph) {
    for (let tetangga in graph[node]) {

      let isBest = false;

      for (let i = 0; i < jalurTerbaik.length - 1; i++) {
        if (
          (jalurTerbaik[i] === node && jalurTerbaik[i + 1] === tetangga) ||
          (jalurTerbaik[i] === tetangga && jalurTerbaik[i + 1] === node)
        ) {
          isBest = true;
        }
      }

      drawBezierRoad(
        posisiNode[node],
        posisiNode[tetangga],
        isBest
      );
    }
  }

  for (let node in posisiNode) {

    if (node === startSelect.value) {
      ctx.fillStyle = 'green';
    }
    else if (node === endSelect.value) {
      ctx.fillStyle = 'red';
    }
    else {
      ctx.fillStyle = '#111827';
    }

    ctx.beginPath();
    ctx.arc(posisiNode[node].x, posisiNode[node].y, 8, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = 'black';
    ctx.font = '13px Arial';
    ctx.fillText(node, posisiNode[node].x + 10, posisiNode[node].y - 10);
  }
}

function cariRute() {
  const start = startSelect.value;
  const end = endSelect.value;

  const result = dijkstra(graph, start, end);

  jalurTerbaik = result.path;

  document.getElementById('hasil').innerHTML = `
    <h3>Hasil Rute</h3>
    <p><b>Jalur:</b> ${result.path.join(' → ')}</p>
    <p><b>Total Jarak:</b> ${result.distance} meter</p>
  `;

  gambarGraph();
}

function acakPosisi() {
  const nodes = Object.keys(graph);

  let start = nodes[Math.floor(Math.random() * nodes.length)];
  let end = nodes[Math.floor(Math.random() * nodes.length)];

  while (start === end) {
    end = nodes[Math.floor(Math.random() * nodes.length)];
  }

  startSelect.value = start;
  endSelect.value = end;

  cariRute();
}

isiDropdown();
gambarGraph();


document.getElementById('btnRoute').addEventListener('click', cariRute);
document.getElementById('btnRandom').addEventListener('click', acakPosisi);