window.UrbanRenderer = (function () {
  const SVG_NS = "http://www.w3.org/2000/svg";

  let state = {};

  function svgEl(tag, attrs) {
    const el = document.createElementNS(SVG_NS, tag);
    Object.keys(attrs || {}).forEach(function (key) {
      el.setAttribute(key, attrs[key]);
    });
    return el;
  }

  function getCurve(nodes, curves, from, to) {
    const key = window.UrbanAlgorithms.edgeKey(from, to);
    const a = nodes[from];
    const b = nodes[to];
    const curve = curves[key];

    if (!curve) {
      const midX = (a.x + b.x) / 2;
      const midY = (a.y + b.y) / 2 - 55;
      return `M${a.x},${a.y} Q${midX},${midY} ${b.x},${b.y}`;
    }

    return `M${a.x},${a.y} C${curve.c1.x},${curve.c1.y} ${curve.c2.x},${curve.c2.y} ${b.x},${b.y}`;
  }

  function clear(el) {
    while (el.firstChild) el.removeChild(el.firstChild);
  }

  function setMapSize(size) {
    const svg = document.getElementById("cityMap");
    const background = svg.querySelector(".map-background");
    svg.setAttribute("viewBox", `0 0 ${size.width} ${size.height}`);
    background.setAttribute("width", size.width);
    background.setAttribute("height", size.height);
  }

  function renderLandmarks() {
    clear(state.layers.landmark);

    state.data.landmarks.forEach(function (item) {
      if (item.type === "building") {
        const cx = item.x + item.width / 2;
        const cy = item.y + item.height / 2;
        state.layers.landmark.appendChild(svgEl("rect", {
          class: "building",
          x: item.x,
          y: item.y,
          width: item.width,
          height: item.height,
          rx: 6,
          transform: `rotate(${item.rotate} ${cx} ${cy})`
        }));
        return;
      }

      if (item.type === "water") {
        state.layers.landmark.appendChild(svgEl("rect", {
          class: "water-shape",
          x: item.x,
          y: item.y,
          width: item.width,
          height: item.height
        }));
      }

      if (item.type === "park") {
        state.layers.landmark.appendChild(svgEl("rect", {
          class: "park-shape",
          x: item.x,
          y: item.y,
          width: item.width,
          height: item.height,
          rx: item.rx || 14
        }));
      }
    });

    (state.data.trees || []).forEach(function (tree) {
      const group = svgEl("g", { class: "tree", transform: `translate(${tree.x} ${tree.y})` });
      group.appendChild(svgEl("circle", { class: "tree-top", cx: 0, cy: -7, r: 13 }));
      group.appendChild(svgEl("rect", { class: "tree-trunk", x: -3, y: 4, width: 6, height: 13, rx: 2 }));
      state.layers.landmark.appendChild(group);
    });
  }

  function labelOffset(edge) {
    if (edge.weight >= 350) return 0.47;
    if (edge.weight <= 100) return 0.58;
    return 0.52;
  }

  function renderRoadLabel(edge, pathElement) {
    const length = pathElement.getTotalLength();
    const point = pathElement.getPointAtLength(length * labelOffset(edge));
    const value = `${edge.weight} m`;
    const width = 34 + value.length * 7.5;
    const group = svgEl("g", { class: "road-label-group" });
    const rect = svgEl("rect", {
      class: "road-label-bg",
      x: Math.round(point.x - width / 2),
      y: Math.round(point.y - 14),
      width: Math.round(width),
      height: 24,
      rx: 7
    });
    const text = svgEl("text", {
      class: "road-label",
      x: Math.round(point.x),
      y: Math.round(point.y + 4),
      "text-anchor": "middle"
    });

    text.textContent = value;
    group.appendChild(rect);
    group.appendChild(text);
    state.layers.label.appendChild(group);
  }

  function renderRoads(activeGraph, nodes, curves, shortestPath) {
    clear(state.layers.road);
    clear(state.layers.route);
    clear(state.layers.label);

    const shortestKeys = new Set();
    for (let i = 0; i < shortestPath.length - 1; i += 1) {
      shortestKeys.add(window.UrbanAlgorithms.edgeKey(shortestPath[i], shortestPath[i + 1]));
    }

    window.UrbanAlgorithms.getUndirectedEdges(activeGraph).forEach(function (edge) {
      const d = getCurve(nodes, curves, edge.from, edge.to);
      const isMainRoad = edge.weight >= 300;
      const casing = svgEl("path", { class: isMainRoad ? "road-casing main" : "road-casing", d });
      const line = svgEl("path", {
        class: isMainRoad ? "road-line main" : "road-line",
        d,
        "data-edge": edge.key,
        "data-from": edge.from,
        "data-to": edge.to
      });
      const center = svgEl("path", {
        class: isMainRoad ? "road-center main" : "road-center",
        d
      });

      state.layers.road.appendChild(casing);
      state.layers.road.appendChild(line);
      state.layers.road.appendChild(center);
      renderRoadLabel(edge, line);

      if (shortestKeys.has(edge.key)) {
        state.layers.route.appendChild(svgEl("path", { class: "route-casing", d }));
        state.layers.route.appendChild(svgEl("path", {
          class: "route-line",
          d,
          "data-route-edge": edge.key,
          "data-from": edge.from,
          "data-to": edge.to
        }));
      }
    });
  }

  function renderNodes(nodes, start, end) {
    clear(state.layers.node);

    Object.keys(nodes).forEach(function (id) {
      const node = nodes[id];
      const group = svgEl("g", { class: "node", "data-node": id });
      const circleClass = id === start ? "node-dot start" : id === end ? "node-dot end" : "node-dot";
      group.appendChild(svgEl("circle", { class: circleClass, cx: node.x, cy: node.y, r: 13 }));

      const label = svgEl("text", { class: "node-label", x: node.x + 18, y: node.y - 16 });
      label.textContent = id;
      group.appendChild(label);
      state.layers.node.appendChild(group);
    });
  }

  function render(options) {
    const nodes = options.nodes || state.data.nodes;
    const curves = options.curves || state.data.roadCurves;
    renderRoads(options.graph, nodes, curves, options.shortestPath || []);
    renderNodes(nodes, options.start, options.end);
  }

  function getRoutePathElements(path) {
    const elements = [];
    for (let i = 0; i < path.length - 1; i += 1) {
      const key = window.UrbanAlgorithms.edgeKey(path[i], path[i + 1]);
      const el = state.layers.route.querySelector(`[data-route-edge="${key}"]`);
      if (el) {
        elements.push({
          element: el,
          from: path[i],
          to: path[i + 1],
          reversed: el.getAttribute("data-from") !== path[i]
        });
      }
    }
    return elements;
  }

  function setupPanZoom(svg, viewport) {
    const size = state.data.mapSize || { width: 1200, height: 760 };
    const view = { x: 0, y: 0, width: size.width, height: size.height };
    let drag = null;

    function applyViewBox() {
      svg.setAttribute("viewBox", `${view.x} ${view.y} ${view.width} ${view.height}`);
    }

    function zoom(factor) {
      const cx = view.x + view.width / 2;
      const cy = view.y + view.height / 2;
      view.width = Math.max(460, Math.min(size.width * 1.25, view.width * factor));
      view.height = Math.max(285, Math.min(size.height * 1.25, view.height * factor));
      view.x = cx - view.width / 2;
      view.y = cy - view.height / 2;
      applyViewBox();
    }

    function fit() {
      view.x = 0;
      view.y = 0;
      view.width = size.width;
      view.height = size.height;
      applyViewBox();
    }

    viewport.addEventListener("wheel", function (event) {
      event.preventDefault();
      zoom(event.deltaY > 0 ? 1.12 : 0.88);
    }, { passive: false });

    viewport.addEventListener("pointerdown", function (event) {
      drag = {
        x: event.clientX,
        y: event.clientY,
        viewX: view.x,
        viewY: view.y
      };
      viewport.classList.add("is-panning");
      viewport.setPointerCapture(event.pointerId);
    });

    viewport.addEventListener("pointermove", function (event) {
      if (!drag) return;
      const rect = viewport.getBoundingClientRect();
      const dx = (event.clientX - drag.x) * (view.width / rect.width);
      const dy = (event.clientY - drag.y) * (view.height / rect.height);
      view.x = drag.viewX - dx;
      view.y = drag.viewY - dy;
      applyViewBox();
    });

    viewport.addEventListener("pointerup", function () {
      drag = null;
      viewport.classList.remove("is-panning");
    });

    viewport.addEventListener("pointercancel", function () {
      drag = null;
      viewport.classList.remove("is-panning");
    });

    return { zoomIn: function () { zoom(0.82); }, zoomOut: function () { zoom(1.18); }, fit };
  }

  function init(config) {
    state = {
      data: config.data,
      layers: {
        landmark: document.getElementById("landmarkLayer"),
        road: document.getElementById("roadLayer"),
        route: document.getElementById("routeLayer"),
        label: document.getElementById("labelLayer"),
        node: document.getElementById("nodeLayer"),
        vehicle: document.getElementById("vehicleLayer")
      }
    };
    setMapSize(state.data.mapSize || { width: 1200, height: 760 });
    renderLandmarks();
    return setupPanZoom(document.getElementById("cityMap"), document.getElementById("mapViewport"));
  }

  return {
    getCurve,
    getRoutePathElements,
    init,
    render,
    svgEl
  };
})();
