# Urban Route Map / Peta Spasial Perkotaan Tanjungpinang

Urban Route Map Tanjungpinang adalah aplikasi web HTML, CSS, dan JavaScript murni untuk memvisualisasikan peta spasial perkotaan berbasis SVG/vector. Project ini menggunakan graph berbobot node A sampai O, mencari rute terpendek dengan Dijkstra, dan menampilkan animasi kendaraan yang mengikuti jalur SVG.

## Anggota Kelompok

- Nama Anggota 1 - NIM
- Nama Anggota 2 - NIM
- Nama Anggota 3 - NIM
- Nama Anggota 4 - NIM

## Fitur

- Peta utama dibuat dengan SVG, bukan canvas.
- Jalan mayoritas berbentuk Bezier Curve, diagonal, dan melengkung.
- Data graph berbobot menggunakan jarak meter node A sampai O.
- Dijkstra untuk mencari rute terpendek dari Start ke Tujuan.
- Highlight jalur terpendek pada peta.
- Acak Posisi untuk memilih Start dan Tujuan berbeda secara otomatis.
- Acak Map berbasis Prim-like Minimum Spanning Tree agar semua node tetap terhubung.
- Validasi connected graph agar tidak ada node terisolasi.
- Zoom In, Zoom Out, tombol Fit, dan drag/pan viewport.
- Animasi kendaraan top-down mengikuti path SVG dengan `getPointAtLength()`.
- Tombol Start, Pause/Resume, dan Reset animasi.
- Panel info berisi Start, Tujuan, urutan node, nama lokasi, total jarak, jumlah simpul, jumlah ruas, dan status animasi.
- Legenda untuk Start, Tujuan, jalan biasa, jalur terpendek, bangunan, dan taman.

## Algoritma

### Bezier Curve

Setiap ruas jalan digambar sebagai SVG path dengan cubic Bezier Curve. Control point disimpan pada `Javascript/data.js` untuk peta awal, lalu dibuat ulang secara dinamis saat fitur Acak Map dijalankan.

### Dijkstra

Algoritma Dijkstra berada di `Javascript/algorithms.js`. Bobot graph tetap menggunakan jarak meter asli, sehingga rute terpendek dihitung berdasarkan jarak, bukan panjang visual SVG.

### MST / Prim-like MST

Fitur Acak Map memakai pendekatan Prim-like Minimum Spanning Tree untuk memilih ruas jalan yang tetap menghubungkan semua node. Setelah MST terbentuk, beberapa edge ekstra ditambahkan agar peta tidak terlalu kosong. Fungsi `isGraphConnected()` digunakan untuk memastikan tidak ada node terisolasi.

## Cara Menjalankan Project

1. Buka folder project di VS Code.
2. Jalankan `index.html` menggunakan ekstensi Live Server.
3. Project juga dapat dipublikasikan melalui GitHub Pages.

Project tidak membutuhkan backend, framework, CDN, library eksternal, atau koneksi internet.

## Struktur File

- `index.html`: struktur halaman, sidebar, panel, toolbar, dan layer SVG.
- `CSS/style.css`: styling aplikasi, peta, jalan, node, bangunan, taman, legenda, dan kendaraan.
- `Javascript/data.js`: data node, graph berbobot, kurva peta awal, landmark, pohon, dan jalan kecil.
- `Javascript/algorithms.js`: Dijkstra, Prim-like MST, validasi connected graph, dan generator layout acak.
- `Javascript/renderer.js`: render SVG, jalan, label jarak, rute, node, zoom, dan pan.
- `Javascript/animation.js`: animasi kendaraan mengikuti path SVG.
- `Javascript/ui.js`: dropdown, tombol, status, panel info, dan legenda.
- `Javascript/script.js`: penghubung data, algoritma, renderer, UI, dan animasi.

## Pembagian Tugas

- Anggota 1: Pengumpulan data rute A sampai O dan bobot jarak meter.
- Anggota 2: Desain peta SVG, posisi node, Bezier Curve, bangunan, taman, dan legenda.
- Anggota 3: Implementasi Dijkstra, MST, validasi graph, dan struktur data.
- Anggota 4: Implementasi UI, animasi kendaraan, zoom/pan, testing, README, dan materi presentasi.

## Checklist Fitur

- [x] Peta SVG/vector
- [x] Jalan Bezier Curve
- [x] Graph berbobot
- [x] Dijkstra
- [x] Acak Posisi
- [x] Acak Map dengan MST
- [x] Validasi connected graph
- [x] Zoom In/Out
- [x] Pan/drag viewport
- [x] Start/Pause/Resume/Reset animasi
- [x] Kendaraan mengikuti arah jalan
- [x] Panel info
- [x] Legenda
- [x] Responsive minimal untuk layar laptop

## Segmentasi Presentasi / Video Final

- 0:00-0:30 - Pembukaan, judul project, dan tujuan aplikasi.
- 0:30-1:20 - Penjelasan data graph A sampai O dan bobot jarak meter.
- 1:20-2:20 - Penjelasan visual peta SVG dan Bezier Curve.
- 2:20-3:20 - Demo Dijkstra dan highlight rute terpendek.
- 3:20-4:10 - Demo Acak Posisi.
- 4:10-5:10 - Demo Acak Map, MST, dan validasi connected graph.
- 5:10-6:00 - Demo zoom, pan, Start, Pause/Resume, Reset, dan animasi kendaraan.
- 6:00-6:40 - Penjelasan struktur kode dan pembagian tugas.
- 6:40-7:00 - Kesimpulan.
