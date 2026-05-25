window.UrbanMapData = (function () {
  const mapSize = { width: 1400, height: 860 };

  const nodes = {
    A: { x: 105, y: 430, name: "A - Pelabuhan Sri Bintan" },
    B: { x: 245, y: 250, name: "B - Jalan Merdeka" },
    C: { x: 430, y: 215, name: "C - Kawasan Kota Lama" },
    D: { x: 1240, y: 270, name: "D - Bundaran Dompak" },
    E: { x: 1195, y: 430, name: "E - Jalan Basuki Rahmat" },
    F: { x: 1115, y: 525, name: "F - Melayu Kota Piring" },
    G: { x: 760, y: 695, name: "G - Batu IX" },
    H: { x: 565, y: 665, name: "H - Tanjung Unggat" },
    I: { x: 390, y: 600, name: "I - Jalan Pemuda" },
    J: { x: 245, y: 530, name: "J - Pasar Kota" },
    K: { x: 285, y: 405, name: "K - Teuku Umar" },
    L: { x: 470, y: 398, name: "L - Bintan Center Barat" },
    M: { x: 650, y: 385, name: "M - Bintan Center" },
    N: { x: 805, y: 365, name: "N - Senggarang Link" },
    O: { x: 925, y: 340, name: "O - Arah Dompak" }
  };

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

  const roadCurves = {
    "A-B": { c1: { x: 115, y: 350 }, c2: { x: 170, y: 275 } },
    "A-K": { c1: { x: 155, y: 410 }, c2: { x: 225, y: 385 } },
    "A-J": { c1: { x: 135, y: 485 }, c2: { x: 190, y: 550 } },
    "B-C": { c1: { x: 300, y: 225 }, c2: { x: 365, y: 250 } },
    "C-D": { c1: { x: 650, y: 105 }, c2: { x: 990, y: 135 } },
    "D-E": { c1: { x: 1290, y: 335 }, c2: { x: 1240, y: 392 } },
    "D-O": { c1: { x: 1150, y: 295 }, c2: { x: 1038, y: 305 } },
    "E-F": { c1: { x: 1185, y: 470 }, c2: { x: 1152, y: 505 } },
    "F-G": { c1: { x: 1010, y: 655 }, c2: { x: 880, y: 735 } },
    "G-H": { c1: { x: 705, y: 725 }, c2: { x: 640, y: 640 } },
    "H-I": { c1: { x: 515, y: 615 }, c2: { x: 450, y: 650 } },
    "I-J": { c1: { x: 350, y: 560 }, c2: { x: 295, y: 590 } },
    "J-K": { c1: { x: 220, y: 485 }, c2: { x: 275, y: 470 } },
    "K-L": { c1: { x: 342, y: 365 }, c2: { x: 408, y: 430 } },
    "L-M": { c1: { x: 525, y: 360 }, c2: { x: 590, y: 415 } },
    "M-N": { c1: { x: 700, y: 345 }, c2: { x: 755, y: 398 } },
    "N-O": { c1: { x: 842, y: 340 }, c2: { x: 880, y: 370 } }
  };

  const landmarks = [
    { type: "water", x: 0, y: 0, width: 1400, height: 132 },
    { type: "park", x: 520, y: 500, width: 240, height: 105, rx: 18 },
    { type: "park", x: 1025, y: 650, width: 245, height: 112, rx: 18 },
    { type: "building", x: 175, y: 315, width: 70, height: 44, rotate: 0 },
    { type: "building", x: 310, y: 300, width: 96, height: 52, rotate: 0 },
    { type: "building", x: 515, y: 250, width: 118, height: 54, rotate: 0 },
    { type: "building", x: 690, y: 235, width: 132, height: 58, rotate: 0 },
    { type: "building", x: 845, y: 430, width: 110, height: 54, rotate: 0 },
    { type: "building", x: 975, y: 390, width: 90, height: 50, rotate: 0 },
    { type: "building", x: 1210, y: 515, width: 95, height: 55, rotate: 0 },
    { type: "building", x: 300, y: 700, width: 118, height: 56, rotate: 0 },
    { type: "building", x: 575, y: 735, width: 108, height: 52, rotate: 0 },
    { type: "building", x: 880, y: 585, width: 110, height: 54, rotate: 0 }
  ];

  const trees = [
    { x: 555, y: 535 }, { x: 610, y: 535 }, { x: 675, y: 545 },
    { x: 720, y: 570 }, { x: 580, y: 580 }, { x: 1085, y: 690 },
    { x: 1145, y: 690 }, { x: 1210, y: 722 }
  ];

  return { mapSize, nodes, graph, roadCurves, landmarks, trees };
})();
