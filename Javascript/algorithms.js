window.UrbanAlgorithms = (function () {
  function edgeKey(a, b) {
    return [a, b].sort().join("-");
  }

  function cloneGraph(graph) {
    const copy = {};
    Object.keys(graph).forEach(function (node) {
      copy[node] = Object.assign({}, graph[node]);
    });
    return copy;
  }

  function getUndirectedEdges(graph) {
    const seen = new Set();
    const edges = [];

    Object.keys(graph).forEach(function (from) {
      Object.keys(graph[from]).forEach(function (to) {
        const key = edgeKey(from, to);
        if (!seen.has(key)) {
          seen.add(key);
          edges.push({ from, to, weight: graph[from][to], key });
        }
      });
    });

    return edges;
  }

  function addUndirectedEdge(graph, from, to, weight) {
    if (!graph[from]) graph[from] = {};
    if (!graph[to]) graph[to] = {};
    graph[from][to] = weight;
    graph[to][from] = weight;
  }

  function edgeCount(graph) {
    return getUndirectedEdges(graph).length;
  }

  function cloneNodes(nodes) {
    const copy = {};
    Object.keys(nodes).forEach(function (id) {
      copy[id] = Object.assign({}, nodes[id]);
    });
    return copy;
  }

  function isGraphConnected(graph) {
    const nodes = Object.keys(graph);
    if (nodes.length === 0) return false;

    const visited = new Set([nodes[0]]);
    const stack = [nodes[0]];

    while (stack.length > 0) {
      const current = stack.pop();
      Object.keys(graph[current] || {}).forEach(function (neighbor) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
        }
      });
    }

    return visited.size === nodes.length;
  }

  // Algoritma Dijkstra: memilih simpul belum dikunjungi dengan jarak terkecil,
  // lalu melakukan relaksasi bobot ke tetangganya sampai tujuan ditemukan.
  function dijkstra(graph, start, end) {
    const distances = {};
    const previous = {};
    const visited = new Set();
    const nodes = Object.keys(graph);

    nodes.forEach(function (node) {
      distances[node] = Infinity;
      previous[node] = null;
    });
    distances[start] = 0;

    while (visited.size < nodes.length) {
      let current = null;

      nodes.forEach(function (node) {
        if (!visited.has(node) && (current === null || distances[node] < distances[current])) {
          current = node;
        }
      });

      if (current === null || distances[current] === Infinity) break;
      if (current === end) break;

      visited.add(current);

      Object.keys(graph[current]).forEach(function (neighbor) {
        const candidate = distances[current] + graph[current][neighbor];
        if (candidate < distances[neighbor]) {
          distances[neighbor] = candidate;
          previous[neighbor] = current;
        }
      });
    }

    const path = [];
    let walker = end;
    while (walker) {
      path.unshift(walker);
      walker = previous[walker];
    }

    if (path[0] !== start) {
      return { path: [], distance: Infinity };
    }

    return { path, distance: distances[end] };
  }

  // Prim-like MST: bobot asli tetap dipakai untuk rute, tetapi pemilihan cabang
  // diberi jitter acak agar map berubah dan semua simpul tetap terhubung.
  function createRandomConnectedMap(baseGraph) {
    const nodes = Object.keys(baseGraph);
    const start = nodes[Math.floor(Math.random() * nodes.length)];
    const visited = new Set([start]);
    const mst = {};
    nodes.forEach(function (node) {
      mst[node] = {};
    });

    while (visited.size < nodes.length) {
      let chosen = null;

      visited.forEach(function (from) {
        Object.keys(baseGraph[from]).forEach(function (to) {
          if (visited.has(to)) return;
          const score = baseGraph[from][to] * (0.65 + Math.random() * 0.7);
          if (!chosen || score < chosen.score) {
            chosen = { from, to, weight: baseGraph[from][to], score };
          }
        });
      });

      if (!chosen) break;
      addUndirectedEdge(mst, chosen.from, chosen.to, chosen.weight);
      visited.add(chosen.to);
    }

    const used = new Set(getUndirectedEdges(mst).map(function (edge) {
      return edge.key;
    }));
    const candidates = getUndirectedEdges(baseGraph)
      .filter(function (edge) {
        return !used.has(edge.key);
      })
      .sort(function () {
        return Math.random() - 0.5;
      });

    const extraCount = Math.min(4, candidates.length);
    for (let i = 0; i < extraCount; i += 1) {
      addUndirectedEdge(mst, candidates[i].from, candidates[i].to, candidates[i].weight);
    }

    return mst;
  }

  function randomBetween(min, max) {
    return min + Math.random() * (max - min);
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function createRandomizedNodes(baseNodes, mapSize) {
    const ids = Object.keys(baseNodes);
    const centerX = mapSize.width / 2;
    const centerY = mapSize.height / 2;
    const angle = randomBetween(-0.22, 0.22);
    const scaleX = randomBetween(0.96, 1.04);
    const scaleY = randomBetween(0.95, 1.05);
    const shiftX = randomBetween(-35, 35);
    const shiftY = randomBetween(-22, 22);
    const randomized = {};

    ids.forEach(function (id) {
      const node = baseNodes[id];
      const dx = (node.x - centerX) * scaleX;
      const dy = (node.y - centerY) * scaleY;
      const rotatedX = dx * Math.cos(angle) - dy * Math.sin(angle);
      const rotatedY = dx * Math.sin(angle) + dy * Math.cos(angle);

      randomized[id] = {
        name: node.name,
        x: Math.round(clamp(centerX + rotatedX + shiftX + randomBetween(-18, 18), 70, mapSize.width - 80)),
        y: Math.round(clamp(centerY + rotatedY + shiftY + randomBetween(-18, 18), 170, mapSize.height - 70))
      };
    });

    return randomized;
  }

  function createCurveSet(nodes, graph) {
    const curves = {};
    const usedMidpoints = [];

    getUndirectedEdges(graph).forEach(function (edge, index) {
      const a = nodes[edge.from];
      const b = nodes[edge.to];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const length = Math.max(1, Math.sqrt(dx * dx + dy * dy));
      const normalX = -dy / length;
      const normalY = dx / length;
      let offset = Math.min(95, Math.max(28, edge.weight * 0.11));

      if (index % 2 === 1) offset *= -1;

      const midX = (a.x + b.x) / 2 + normalX * offset;
      const midY = (a.y + b.y) / 2 + normalY * offset;
      const tooClose = usedMidpoints.some(function (point) {
        return Math.abs(point.x - midX) < 50 && Math.abs(point.y - midY) < 34;
      });
      usedMidpoints.push({ x: midX, y: midY });

      curves[edge.key] = {
        c1: {
          x: Math.round(a.x + dx * 0.34 + normalX * offset * (tooClose ? 0.65 : 1)),
          y: Math.round(a.y + dy * 0.34 + normalY * offset * (tooClose ? 0.65 : 1))
        },
        c2: {
          x: Math.round(a.x + dx * 0.68 + normalX * offset * (tooClose ? 0.65 : 1)),
          y: Math.round(a.y + dy * 0.68 + normalY * offset * (tooClose ? 0.65 : 1))
        }
      };
    });

    return curves;
  }

  function createRandomMap(baseGraph, baseNodes, mapSize) {
    const graph = createRandomConnectedMap(baseGraph);
    if (!isGraphConnected(graph)) {
      return null;
    }

    const nodes = createRandomizedNodes(baseNodes, mapSize);
    const curves = createCurveSet(nodes, graph);

    return { graph, nodes, curves };
  }

  return {
    addUndirectedEdge,
    cloneGraph,
    cloneNodes,
    createCurveSet,
    createRandomMap,
    createRandomConnectedMap,
    dijkstra,
    edgeCount,
    edgeKey,
    getUndirectedEdges,
    isGraphConnected
  };
})();
