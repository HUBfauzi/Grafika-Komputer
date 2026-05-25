window.UrbanUI = (function () {
  const refs = {};

  function text(id, value) {
    refs[id].textContent = value;
  }

  function fillSelects(nodes) {
    const ids = Object.keys(nodes);
    refs.startSelect.innerHTML = "";
    refs.endSelect.innerHTML = "";

    ids.forEach(function (id) {
      const startOption = document.createElement("option");
      const endOption = document.createElement("option");
      startOption.value = id;
      endOption.value = id;
      startOption.textContent = `${id} - ${nodes[id].name.split(" - ")[1]}`;
      endOption.textContent = startOption.textContent;
      refs.startSelect.appendChild(startOption);
      refs.endSelect.appendChild(endOption);
    });
  }

  function updateInfo(data) {
    text("infoStart", data.startLabel || "-");
    text("infoEnd", data.endLabel || "-");
    text("infoPath", data.path && data.path.length ? data.path.join(" -> ") : "-");
    text("infoLocations", data.locations && data.locations.length ? data.locations.join(" -> ") : "-");
    text("infoDistance", Number.isFinite(data.distance) ? `${data.distance} meter` : "-");
    text("infoNodes", String(data.nodeCount || "-"));
    text("infoEdges", String(data.edgeCount || "-"));
    text("infoStatus", data.status || "-");
    text("featureStatus", data.featureStatus || "Siap");
  }

  function setAnimationStatus(status) {
    text("infoStatus", status);
    refs.btnPause.textContent = status === "Pause" ? "Resume" : "Pause";
  }

  function getSelection() {
    return {
      start: refs.startSelect.value,
      end: refs.endSelect.value
    };
  }

  function setSelection(start, end) {
    refs.startSelect.value = start;
    refs.endSelect.value = end;
  }

  function bind(events) {
    refs.btnRoute.addEventListener("click", events.route);
    refs.btnRandomPosition.addEventListener("click", events.randomPosition);
    refs.btnRandomMap.addEventListener("click", events.randomMap);
    refs.btnResetMap.addEventListener("click", events.resetMap);
    refs.btnStart.addEventListener("click", events.startAnimation);
    refs.btnPause.addEventListener("click", events.pauseResume);
    refs.btnResetAnimation.addEventListener("click", events.resetAnimation);
    refs.btnZoomIn.addEventListener("click", events.zoomIn);
    refs.btnZoomOut.addEventListener("click", events.zoomOut);
    refs.btnFit.addEventListener("click", events.fit);
    refs.startSelect.addEventListener("change", events.route);
    refs.endSelect.addEventListener("change", events.route);
  }

  function init(nodes) {
    refs.startSelect = document.getElementById("startNode");
    refs.endSelect = document.getElementById("endNode");
    refs.btnRoute = document.getElementById("btnRoute");
    refs.btnRandomPosition = document.getElementById("btnRandomPosition");
    refs.btnRandomMap = document.getElementById("btnRandomMap");
    refs.btnResetMap = document.getElementById("btnResetMap");
    refs.btnStart = document.getElementById("btnStart");
    refs.btnPause = document.getElementById("btnPause");
    refs.btnResetAnimation = document.getElementById("btnResetAnimation");
    refs.btnZoomIn = document.getElementById("btnZoomIn");
    refs.btnZoomOut = document.getElementById("btnZoomOut");
    refs.btnFit = document.getElementById("btnFit");
    refs.infoStart = document.getElementById("infoStart");
    refs.infoEnd = document.getElementById("infoEnd");
    refs.infoPath = document.getElementById("infoPath");
    refs.infoLocations = document.getElementById("infoLocations");
    refs.infoDistance = document.getElementById("infoDistance");
    refs.infoNodes = document.getElementById("infoNodes");
    refs.infoEdges = document.getElementById("infoEdges");
    refs.infoStatus = document.getElementById("infoStatus");
    refs.featureStatus = document.getElementById("featureStatus");

    fillSelects(nodes);
    setSelection("A", "D");
  }

  return {
    bind,
    getSelection,
    init,
    fillSelects,
    setAnimationStatus,
    setSelection,
    updateInfo
  };
})();
