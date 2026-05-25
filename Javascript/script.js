(function () {
  const data = window.UrbanMapData;
  const algorithms = window.UrbanAlgorithms;
  const renderer = window.UrbanRenderer;
  const ui = window.UrbanUI;
  const animation = window.UrbanAnimation;

  let activeGraph = algorithms.cloneGraph(data.graph);
  let activeNodes = algorithms.cloneNodes(data.nodes);
  let activeCurves = Object.assign({}, data.roadCurves);
  let shortestPath = [];
  let shortestDistance = Infinity;
  let panZoom = null;
  let featureStatus = "Siap";

  function nodeLabel(id) {
    return activeNodes[id] ? activeNodes[id].name : id;
  }

  function shortLocationName(id) {
    const label = nodeLabel(id);
    return label.indexOf(" - ") >= 0 ? label.split(" - ")[1] : label;
  }

  function differentRandomNodes() {
    const ids = Object.keys(activeNodes);
    const start = ids[Math.floor(Math.random() * ids.length)];
    let end = ids[Math.floor(Math.random() * ids.length)];

    while (end === start) {
      end = ids[Math.floor(Math.random() * ids.length)];
    }

    return { start, end };
  }

  function refreshInfo(start, end) {
    ui.updateInfo({
      startLabel: nodeLabel(start),
      endLabel: nodeLabel(end),
      path: shortestPath,
      locations: shortestPath.map(shortLocationName),
      distance: shortestDistance,
      nodeCount: Object.keys(activeGraph).length,
      edgeCount: algorithms.edgeCount(activeGraph),
      status: animation.getStatus(),
      featureStatus
    });
  }

  function calculateRoute(statusAfter) {
    const selection = ui.getSelection();
    featureStatus = "Menghitung rute";

    if (selection.start === selection.end) {
      shortestPath = [selection.start];
      shortestDistance = 0;
    } else {
      const result = algorithms.dijkstra(activeGraph, selection.start, selection.end);
      shortestPath = result.path;
      shortestDistance = result.distance;
    }

    renderer.render({
      graph: activeGraph,
      nodes: activeNodes,
      curves: activeCurves,
      shortestPath,
      start: selection.start,
      end: selection.end
    });

    animation.loadRoute(renderer.getRoutePathElements(shortestPath));
    featureStatus = typeof statusAfter === "string"
      ? statusAfter
      : shortestPath.length > 0 ? "Rute ditemukan" : "Rute tidak tersedia";
    refreshInfo(selection.start, selection.end);
  }

  function randomPosition() {
    const picks = differentRandomNodes();
    ui.setSelection(picks.start, picks.end);
    calculateRoute("Posisi diacak");
  }

  function randomMap() {
    const randomMapData = algorithms.createRandomMap(data.graph, data.nodes, data.mapSize);
    if (!randomMapData || !algorithms.isGraphConnected(randomMapData.graph)) {
      featureStatus = "Gagal membuat map connected";
      const selection = ui.getSelection();
      refreshInfo(selection.start, selection.end);
      return;
    }

    activeGraph = randomMapData.graph;
    activeNodes = randomMapData.nodes;
    activeCurves = randomMapData.curves;
    ui.fillSelects(activeNodes);
    const picks = differentRandomNodes();
    ui.setSelection(picks.start, picks.end);
    calculateRoute("Peta diacak");
  }

  function resetMap() {
    activeGraph = algorithms.cloneGraph(data.graph);
    activeNodes = algorithms.cloneNodes(data.nodes);
    activeCurves = Object.assign({}, data.roadCurves);
    ui.fillSelects(activeNodes);
    ui.setSelection("A", "D");
    calculateRoute("Peta reset");
  }

  function startAnimation() {
    animation.start();
    featureStatus = "Animasi berjalan";
    const selection = ui.getSelection();
    refreshInfo(selection.start, selection.end);
  }

  function pauseResume() {
    if (animation.getStatus() === "Pause") {
      animation.resume();
      featureStatus = "Animasi berjalan";
    } else {
      animation.pause();
      featureStatus = "Animasi pause";
    }
    const selection = ui.getSelection();
    refreshInfo(selection.start, selection.end);
  }

  function resetAnimation() {
    animation.reset();
    featureStatus = "Animasi reset";
    const selection = ui.getSelection();
    refreshInfo(selection.start, selection.end);
  }

  document.addEventListener("DOMContentLoaded", function () {
    ui.init(data.nodes);
    panZoom = renderer.init({ data });
    animation.init(document.getElementById("vehicleLayer"), ui.setAnimationStatus);

    ui.bind({
      route: calculateRoute,
      randomPosition,
      randomMap,
      resetMap,
      startAnimation,
      pauseResume,
      resetAnimation,
      zoomIn: function () { panZoom.zoomIn(); },
      zoomOut: function () { panZoom.zoomOut(); },
      fit: function () { panZoom.fit(); }
    });

    calculateRoute();
  });
})();
