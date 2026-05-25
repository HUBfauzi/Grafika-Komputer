window.UrbanAnimation = (function () {
  let vehicle = null;
  let routeParts = [];
  let totalLength = 0;
  let distance = 0;
  let lastTime = null;
  let frameId = null;
  let status = "Idle";
  let onStatus = function () {};

  function createVehicle(layer) {
    const group = window.UrbanRenderer.svgEl("g", { id: "vehicle", transform: "translate(-100 -100)" });
    group.appendChild(window.UrbanRenderer.svgEl("path", {
      class: "vehicle-body",
      d: "M0,-16 L24,-8 L30,0 L24,8 L0,16 L-10,9 L-14,0 L-10,-9 Z"
    }));
    group.appendChild(window.UrbanRenderer.svgEl("rect", {
      class: "vehicle-window",
      x: -2,
      y: -7,
      width: 15,
      height: 14,
      rx: 3
    }));
    layer.appendChild(group);
    return group;
  }

  function setStatus(nextStatus) {
    status = nextStatus;
    onStatus(status);
  }

  function resetPosition() {
    distance = 0;
    lastTime = null;
    placeVehicle(0);
  }

  function placeVehicle(distanceOnRoute) {
    if (!vehicle || routeParts.length === 0) return;

    let remaining = distanceOnRoute;
    let selected = routeParts[routeParts.length - 1];
    let localDistance = selected.length;

    for (let i = 0; i < routeParts.length; i += 1) {
      if (remaining <= routeParts[i].length) {
        selected = routeParts[i];
        localDistance = remaining;
        break;
      }
      remaining -= routeParts[i].length;
    }

    const pathDistance = selected.reversed ? selected.length - localDistance : localDistance;
    const nextDistance = selected.reversed
      ? Math.max(0, pathDistance - 2)
      : Math.min(selected.length, pathDistance + 2);
    const point = selected.element.getPointAtLength(pathDistance);
    const nextPoint = selected.element.getPointAtLength(nextDistance);
    const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * 180 / Math.PI;

    vehicle.setAttribute("transform", `translate(${point.x} ${point.y}) rotate(${angle})`);
  }

  function tick(time) {
    if (status !== "Berjalan") return;
    if (lastTime === null) lastTime = time;

    const delta = time - lastTime;
    lastTime = time;
    distance += delta * 0.18;

    if (distance >= totalLength) {
      distance = totalLength;
      placeVehicle(distance);
      setStatus("Selesai");
      frameId = null;
      return;
    }

    placeVehicle(distance);
    frameId = requestAnimationFrame(tick);
  }

  function loadRoute(parts) {
    pause(false);
    routeParts = parts.map(function (part) {
      return Object.assign({}, part, { length: part.element.getTotalLength() });
    });
    totalLength = routeParts.reduce(function (sum, part) {
      return sum + part.length;
    }, 0);
    resetPosition();
    setStatus(routeParts.length > 0 ? "Siap" : "Idle");
  }

  function start() {
    if (routeParts.length === 0) return;
    if (status === "Berjalan") return;
    if (status === "Selesai") resetPosition();
    setStatus("Berjalan");
    frameId = requestAnimationFrame(tick);
  }

  function pause(updateStatus) {
    if (frameId) cancelAnimationFrame(frameId);
    frameId = null;
    lastTime = null;
    if (updateStatus !== false && status === "Berjalan") setStatus("Pause");
  }

  function resume() {
    if (status !== "Pause") return;
    setStatus("Berjalan");
    frameId = requestAnimationFrame(tick);
  }

  function reset() {
    pause(false);
    resetPosition();
    setStatus(routeParts.length > 0 ? "Siap" : "Idle");
  }

  function init(layer, statusCallback) {
    onStatus = statusCallback || onStatus;
    vehicle = createVehicle(layer);
    setStatus("Idle");
  }

  return {
    init,
    loadRoute,
    pause,
    reset,
    resume,
    start,
    getStatus: function () {
      return status;
    }
  };
})();
