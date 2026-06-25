'use strict';

/* ════════════════════════════════
   PHASE DATA
════════════════════════════════ */
const PHASES = [
  {
    num:1, week:'Minggu 1–2', title:'Setup Aplikasi & Kontrol Garis',
    html:`<ul class="step-list">
      <li><span class="step-icon">📲</span><div class="step-text"><strong>Install Ibis Paint X</strong><p>Download gratis di Play Store / App Store. Buka → New Canvas → ukuran <strong>2000×2000px, 72dpi</strong> untuk latihan. Pakai A4 300dpi hanya kalau mau cetak.</p></div></li>
      <li><span class="step-icon">🗂️</span><div class="step-text"><strong>Pahami 4 tool wajib dulu</strong><p><strong>Pen (G-Pen)</strong> untuk menggambar, <strong>Eraser</strong> untuk hapus, <strong>Layer</strong> untuk memisahkan elemen, <strong>Undo (2 jari)</strong>. Jangan pelajari tool lain dulu sampai 4 ini terasa natural.</p></div></li>
      <li><span class="step-icon">📏</span><div class="step-text"><strong>Latihan garis lurus — gerakan dari siku</strong><p>Tarik garis horizontal panjang dari ujung ke ujung tanpa angkat stylus. Gerakannya dari <em>siku</em>, bukan pergelangan — ini yang bikin garis panjang lebih stabil. Ulangi 20× tiap sesi.</p></div></li>
      <li><span class="step-icon">〰️</span><div class="step-text"><strong>Latihan garis lengkung & busur</strong><p>Gambar busur besar (seperti senyum) dari kiri ke kanan dengan satu tarikan. Jangan angkat pena di tengah jalan. Ini melatih <em>muscle memory</em> tangan untuk gerakan smooth.</p></div></li>
      <li><span class="step-icon">⭕</span><div class="step-text"><strong>Latihan bentuk dasar freehand</strong><p>Gambar lingkaran, kotak, dan segitiga tanpa bantuan ruler. Semua objek di dunia bisa dipecah jadi bentuk dasar ini. Kerjakan 10 menit tiap hari — ini fondasi segalanya.</p></div></li>
      <li><span class="step-icon">⚙️</span><div class="step-text"><strong>Aktifkan Stabilizer</strong><p>Di Ibis Paint, ketuk ikon Pen → geser slider <strong>Stabilizer ke 5–7</strong>. Fitur ini memperlambat ujung garis sedikit agar hasilnya lebih mulus — wajib untuk pemula.</p></div></li>
    </ul>`
  },
  {
    num:2, week:'Minggu 3–4', title:'Proporsi Wajah & Struktur Kepala',
    html:`<ul class="step-list">
      <li><span class="step-icon">⭕</span><div class="step-text"><strong>Bentuk kepala dasar</strong><p>Mulai dari lingkaran (cranium). Tarik 2 garis ke bawah dari sisi kiri-kanan lingkaran → pertemukan di dagu. Untuk gaya anime, dagu lebih runcing. Untuk realis, dagu lebih lebar dan bulat.</p></div></li>
      <li><span class="step-icon">➕</span><div class="step-text"><strong>Cross line — panduan posisi fitur wajah</strong><p>Garis <strong>vertikal</strong> di tengah = sumbu simetri. Garis <strong>horizontal</strong> di tengah kepala = batas posisi mata. Gambar di layer terpisah agar bisa dihapus setelah selesai.</p></div></li>
      <li><span class="step-icon">👁️</span><div class="step-text"><strong>Proporsi mata yang benar</strong><p>Mata diletakkan <em>tepat di garis horizontal</em>. Jarak antar 2 mata = 1 lebar mata (aturan universal). Terlalu jauh atau terlalu dekat = wajah keliatan aneh.</p></div></li>
      <li><span class="step-icon">👃</span><div class="step-text"><strong>Posisi hidung & mulut</strong><p>Hidung = ½ jarak antara garis mata ke dagu. Mulut = ⅔ jarak dari hidung ke dagu. Ini proporsi standar — hafalkan sebagai patokan, bukan aturan kaku.</p></div></li>
      <li><span class="step-icon">👂</span><div class="step-text"><strong>Posisi telinga</strong><p>Bagian atas telinga sejajar dengan garis mata. Bagian bawah telinga sejajar dengan ujung hidung. Telinga berada di samping kepala, bukan di belakang.</p></div></li>
      <li><span class="step-icon">🔄</span><div class="step-text"><strong>Flip canvas untuk deteksi error</strong><p>Ibis Paint punya tombol flip horizontal (ikon cermin). Gunakan tiap 5–10 menit menggambar. Wajah yang terasa benar tapi sebenarnya miring akan langsung ketahuan saat di-flip.</p></div></li>
    </ul>`
  },
  {
    num:3, week:'Minggu 5–6', title:'Mata & Ekspresi',
    html:`<ul class="step-list">
      <li><span class="step-icon">👁️</span><div class="step-text"><strong>Anatomi mata (layer per layer)</strong><p><strong>Layer 1:</strong> outline mata — garis atas <em>tebal</em>, garis bawah <em>tipis</em>. <strong>Layer 2:</strong> iris bulat besar (isi warna dasar). <strong>Layer 3:</strong> pupil gelap di tengah iris. <strong>Layer 4:</strong> shadow gelap di bagian atas iris. <strong>Layer 5:</strong> highlight — titik putih kecil di pojok iris atas. Highlight inilah yang bikin mata "hidup".</p></div></li>
      <li><span class="step-icon">🎭</span><div class="step-text"><strong>Ekspresi = alis + mata + mulut</strong><p>Alis adalah kunci utama: <strong>Senang</strong> — alis normal, ujung mulut naik, mata setengah menutup. <strong>Marah</strong> — alis dalam turun ke tengah, mata menyipit. <strong>Sedih</strong> — bagian dalam alis naik ke atas, sudut mulut turun. <strong>Kaget</strong> — alis naik tinggi, mata dan mulut terbuka lebar.</p></div></li>
      <li><span class="step-icon">🎯</span><div class="step-text"><strong>Latihan referensi — bukan trace</strong><p>Cari 1 karakter gambar yang kamu suka. Amati matanya, tutup referensi, gambar dari ingatan. Bandingkan. Ulangi. Ini jauh lebih efektif dari menjiplak karena melatih <em>visual memory</em>.</p></div></li>
      <li><span class="step-icon">📐</span><div class="step-text"><strong>Konsistensi ukuran 2 mata</strong><p>Kesalahan umum pemula: mata kanan dan kiri ukurannya beda. Gambar kotak panduan (bounding box) untuk tiap mata sebelum mulai — pastikan kotak kiri dan kanan sama besar.</p></div></li>
    </ul>`
  },
  {
    num:4, week:'Minggu 7–8', title:'Rambut',
    html:`<ul class="step-list">
      <li><span class="step-icon">📍</span><div class="step-text"><strong>Crown point — titik asal rambut</strong><p>Sebelum menggambar rambut apapun, tandai 1–2 titik di atas kepala sebagai "sumber". Semua helai dan gumpalan rambut berasal dari titik ini — tanpa aturan ini rambut akan keliatan kacau.</p></div></li>
      <li><span class="step-icon">🖌️</span><div class="step-text"><strong>Gambar per kelompok (clump), bukan per helai</strong><p>Gambar <em>gumpalan besar</em> dulu (silhouette rambut keseluruhan) → lalu tambah 3–5 garis detail di dalam setiap gumpalan. Ini teknik semua ilustrator profesional.</p></div></li>
      <li><span class="step-icon">↓</span><div class="step-text"><strong>Arah rambut mengikuti gravitasi + bentuk kepala</strong><p>Bagian atas kepala (dekat crown): rambut menempel mengikuti lekukan skull. Bagian tengah: mulai jatuh. Bagian ujung: lebih bebas. Rambut tidak tumbuh ke atas kecuali ada alasan spesifik.</p></div></li>
      <li><span class="step-icon">✨</span><div class="step-text"><strong>Highlight rambut dengan blending mode</strong><p>Buat layer baru di <em>atas</em> layer rambut → set ke mode <strong>"Add"</strong> atau <strong>"Screen"</strong>. Gambar garis terang memanjang di area yang kena cahaya (biasanya bagian atas kepala).</p></div></li>
      <li><span class="step-icon">🎨</span><div class="step-text"><strong>Shadow rambut dengan Multiply</strong><p>Layer baru → mode <strong>"Multiply"</strong> → warna gelap transparan (opacity 40–60%) → warnai area yang tidak kena cahaya, terutama bagian bawah gumpalan dan area di sekitar telinga.</p></div></li>
    </ul>`
  },
  {
    num:5, week:'Minggu 9–10', title:'Proporsi Tubuh & Gesture',
    html:`<ul class="step-list">
      <li><span class="step-icon">📐</span><div class="step-text"><strong>Sistem satuan kepala (head unit)</strong><p>Ukur tinggi kepala karakter → itu jadi satuan. <strong>Gaya anime:</strong> tubuh = 6–7× kepala. <strong>Realis/semi-realis:</strong> 7–8× kepala. Buat kotak-kotak panduan dulu sebelum isi tubuhnya.</p></div></li>
      <li><span class="step-icon">🦴</span><div class="step-text"><strong>Gesture drawing — skeleton dulu</strong><p>Mulai dengan <em>stick figure</em>: kepala = lingkaran, tulang belakang = garis, bahu = garis horizontal, pinggul = garis horizontal lebih kecil, anggota = garis. Ini disebut gesture — fondasi pose yang benar.</p></div></li>
      <li><span class="step-icon">📦</span><div class="step-text"><strong>Blockout dengan bentuk 3D sederhana</strong><p>Di atas gesture, gambar kotak/silinder untuk tiap bagian: dada = kotak besar, pinggul = kotak lebih kecil, paha & betis = silinder, lengan = silinder. Membantu "melihat" tubuh sebagai objek 3D.</p></div></li>
      <li><span class="step-icon">📌</span><div class="step-text"><strong>Landmark tubuh yang wajib hafal</strong><p>Siku sejajar dengan pusar. Pergelangan tangan sejajar dengan selangkangan. Lutut di tengah antara pinggul dan lantai. Titik-titik ini berlaku untuk hampir semua proporsi karakter.</p></div></li>
      <li><span class="step-icon">🌐</span><div class="step-text"><strong>Latihan di Line of Action</strong><p>Buka <strong>line-of-action.com</strong> di HP. Pilih "Figure" → timer 30 detik per pose. Gambar gesture cepat sebanyak mungkin — jangan mikir detail, fokus ke overall shape dan pose.</p></div></li>
    </ul>`
  },
  {
    num:6, week:'Minggu 11–12', title:'Tangan & Jari',
    html:`<ul class="step-list">
      <li><span class="step-icon">✋</span><div class="step-text"><strong>Telapak = persegi panjang + jempol di samping</strong><p>Telapak tangan bukan lingkaran — lebih seperti persegi panjang agak membulat. Jempol berasal dari <em>sisi bawah-samping</em> telapak (bukan dari atas bersama 4 jari lain). Ini kesalahan paling sering pemula.</p></div></li>
      <li><span class="step-icon">🔲</span><div class="step-text"><strong>Setiap jari = 3 segmen (falang)</strong><p>Jari terdiri dari 3 ruas dengan sendi di tiap sambungan. Panjang ruas dari bawah ke ujung: <em>panjang → sedang → pendek</em>. Jari tengah terpanjang, kelingking terpendek. Ujung jari membulat.</p></div></li>
      <li><span class="step-icon">📏</span><div class="step-text"><strong>Ujung jari membentuk kurva melengkung</strong><p>Saat tangan terbuka dan rileks, ujung 4 jari membentuk kurva seperti busur — bukan garis lurus. Ini yang bikin tangan terlihat natural dan tidak kaku.</p></div></li>
      <li><span class="step-icon">🤳</span><div class="step-text"><strong>Foto tangan sendiri sebagai referensi</strong><p>Foto tanganmu sendiri dengan berbagai pose pakai kamera HP. Atau gunakan <strong>Just Sketch Me</strong> (justsketch.me) untuk pose tangan 3D.</p></div></li>
      <li><span class="step-icon">🔁</span><div class="step-text"><strong>5 pose dasar yang wajib dikuasai</strong><p>Mengepal, tangan terbuka menghadap depan, menunjuk (1 jari), memegang objek bulat, dan pose peace/V. Kuasai 5 ini dulu dari referensi, baru coba dari imajinasi.</p></div></li>
    </ul>`
  },
  {
    num:7, week:'Minggu 13–14', title:'Line Art, Warna & Shading',
    html:`<ul class="step-list">
      <li><span class="step-icon">🖊️</span><div class="step-text"><strong>Line art bersih dengan variasi ketebalan</strong><p>Outline luar = <strong>tebal</strong>. Detail dalam (lipatan baju, detail wajah, interior rambut) = <strong>tipis</strong>. Variasi ini yang membedakan gambar amatir dan gambar yang terlihat profesional.</p></div></li>
      <li><span class="step-icon">🗂️</span><div class="step-text"><strong>Sistem layer yang benar — wajib diikuti</strong><p>Urutan dari bawah ke atas: <strong>(1) Rough Sketch</strong> (opacity rendah) → <strong>(2) Line Art</strong> → <strong>(3) Base Color</strong> (satu layer per area) → <strong>(4) Shadow</strong> (mode Multiply) → <strong>(5) Highlight</strong> (mode Add/Screen). Beri nama tiap layer.</p></div></li>
      <li><span class="step-icon">🎨</span><div class="step-text"><strong>Color theory dasar</strong><p>Hindari warna terlalu jenuh (saturation 100%) untuk base color. Untuk shadow, jangan pakai hitam murni — pakai versi lebih gelap + sedikit biru atau ungu. Warna shadow yang menarik biasanya agak <em>cool tone</em>.</p></div></li>
      <li><span class="step-icon">🌑</span><div class="step-text"><strong>Shading dasar — cel shading</strong><p>Tentukan sumber cahaya <em>sebelum mulai</em> (misal: kiri atas). Buat layer baru dengan mode <strong>Multiply</strong> → clip ke layer base color → warnai area yang tidak kena cahaya dengan warna gelap transparan (opacity 50–70%).</p></div></li>
      <li><span class="step-icon">✨</span><div class="step-text"><strong>Highlight untuk kedalaman</strong><p>Layer baru mode <strong>Add</strong> atau <strong>Screen</strong> → gambar highlight di area paling terkena cahaya: ujung hidung, dahi, bahu, rambut bagian atas. Highlight kecil tapi akurat = perbedaan besar di hasil akhir.</p></div></li>
      <li><span class="step-icon">📤</span><div class="step-text"><strong>Export yang benar</strong><p>Untuk share di sosmed: export PNG, ukuran asli. Simpan juga file asli (.ibis). Jangan export JPEG untuk lineart — kompresi JPEG merusak kualitas garis.</p></div></li>
    </ul>`
  }
];

/* ════════════════════════════════
   VIDEO DATA
════════════════════════════════ */
const VIDEO_DATA = [
  { phase:1, phaseTitle:'Fase 1 — Setup & Kontrol Garis', videos:[
    { id:'5P6gaSJCgBo', title:'The Only Art Tutorial You\'ll Ever Need (Brokendraw)' },
    { id:'PnVYfNmTJ0s', title:'How To Make Drawing 5x Times Easier' },
  ]},
  { phase:2, phaseTitle:'Fase 2 — Proporsi Wajah', videos:[
    { id:'JWTcTUNXcOg', title:'Face Proportion Tutorial for Beginners' },
    { id:'u7xcWi_6yIQ', title:'How I Learned to Draw Better Faces in a Week' },
  ]},
  { phase:3, phaseTitle:'Fase 3 — Mata & Ekspresi', videos:[
    { id:'oD6XnnSJxAc', title:'How to Draw Eyes' },
    { id:'TWe0NYmWc8A', title:'How to Draw Eyes from ANY Perspective (DrawlikeaSir)' },
    { id:'2OdCGrQGlHs', title:'Learn to Draw Expressions (Better)!' },
  ]},
  { phase:4, phaseTitle:'Fase 4 — Rambut', videos:[
    { id:'8fAvS36tc5U', title:'Draw Better Hair Like This!' },
    { id:'Qzv1WW45TTo', title:'How To Draw Hair | Tutorial' },
  ]},
  { phase:5, phaseTitle:'Fase 5 — Proporsi Tubuh & Gesture', videos:[
    { id:'WkmZLi8bNBM', title:'Drawing Anatomy is Easier Than You Think' },
    { id:'X3P7_VlAMIc', title:'How to Draw Bodies / Tutorial and Practice (Chommang)' },
    { id:'DmZdjspTsTw', title:'I Wanna Learn Anatomy in 7 DAYS' },
  ]},
  { phase:6, phaseTitle:'Fase 6 — Tangan & Jari', videos:[
    { id:'eAhHgPZASYQ', title:'How to Draw Hands / Useful Tips!! (Chommang)' },
  ]},
  { phase:7, phaseTitle:'Fase 7 — Line Art, Warna & Shading', videos:[
    { id:'Ehi3qpAkbm0', title:'How to COLOR // 4 steps' },
    { id:'RFQtsXktc9g', title:'Train Your Eyes to See Values' },
    { id:'-Len8j7PeY8', title:'How to RENDER Digital Art // Just Ball' },
    { id:'kGvDQCohHdM', title:'BASIC COLOR THEORY | Beginner Guide + Concepts' },
    { id:'68eC42S_FNc', title:'BASIC COLOR THEORY | YouTube Art School' },
  ]},
];

/* ════════════════════════════════
   PHASE MODAL
════════════════════════════════ */
let currentPhase = 0;

function openPhase(i) {
  currentPhase = i;
  renderPhaseModal();
  document.getElementById('phaseOverlay').classList.add('open');
  document.getElementById('mBody').scrollTop = 0;
}

function renderPhaseModal() {
  const p = PHASES[currentPhase];
  document.getElementById('mBadge').textContent = p.num;
  document.getElementById('mWeek').textContent = p.week;
  document.getElementById('mTitle').textContent = p.title;
  document.getElementById('mBody').innerHTML = p.html;
  document.getElementById('navInfo').textContent = `Fase ${p.num} / ${PHASES.length}`;
  document.getElementById('btnPrev').disabled = currentPhase === 0;
  document.getElementById('btnNext').disabled = currentPhase === PHASES.length - 1;
  // build modal dots
  const dotsEl = document.getElementById('modalDots');
  dotsEl.innerHTML = '';
  PHASES.forEach((_,i) => {
    const d = document.createElement('div');
    d.style.cssText = `width:7px;height:7px;border-radius:50%;background:${i===currentPhase?'var(--accent)':i<currentPhase?'rgba(232,200,74,0.35)':'var(--border)'};cursor:pointer;transition:background 0.25s,transform 0.2s;`;
    d.onclick = () => { currentPhase = i; renderPhaseModal(); document.getElementById('mBody').scrollTop=0; };
    d.onmouseenter = () => { d.style.transform='scale(1.4)'; };
    d.onmouseleave = () => { d.style.transform='scale(1)'; };
    dotsEl.appendChild(d);
  });
}

function navPhase(dir) {
  const next = currentPhase + dir;
  if (next < 0 || next >= PHASES.length) return;
  currentPhase = next;
  renderPhaseModal();
  document.getElementById('mBody').scrollTop = 0;
}

function closePhaseModal() {
  document.getElementById('phaseOverlay').classList.remove('open');
}

function overlayClose(e) {
  if (e.target === document.getElementById('phaseOverlay')) closePhaseModal();
}

/* ════════════════════════════════
   LINK MODAL
════════════════════════════════ */
let _link = '';
function showModal(title, desc, url, icon) {
  _link = url;
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalDesc').textContent = desc;
  document.getElementById('modalUrl').textContent = url;
  document.getElementById('modalIcon').src = icon;
  document.getElementById('modalOverlay').classList.add('open');
}
function goToLink() {
  window.open(_link, '_blank');
  document.getElementById('modalOverlay').classList.remove('open');
}
function closeLinkModal(e) {
  if (e.target.id === 'modalOverlay') document.getElementById('modalOverlay').classList.remove('open');
}

/* ════════════════════════════════
   VIDEO GALLERY
════════════════════════════════ */
function showVideoGallery() {
  const cont = document.getElementById('vgContent');
  if (!cont.children.length) {
    VIDEO_DATA.forEach(g => {
      const sec = document.createElement('div');
      sec.style.marginBottom = '22px';
      const lbl = document.createElement('p');
      lbl.className = 'vg-section-label';
      lbl.textContent = g.phaseTitle;
      sec.appendChild(lbl);
      g.videos.forEach(v => {
        const card = document.createElement('div');
        card.className = 'vg-card';
        card.onclick = () => window.open('https://www.youtube.com/watch?v='+v.id,'_blank');
        const img = document.createElement('img');
        img.src = 'https://i.ytimg.com/vi/'+v.id+'/mqdefault.jpg';
        img.alt = v.title;
        img.loading = 'lazy';
        const info = document.createElement('div');
        info.className = 'vg-info';
        info.innerHTML = `<p class="vg-title">${v.title}</p><span class="vg-link">▶ Tonton di YouTube</span>`;
        card.appendChild(img); card.appendChild(info);
        sec.appendChild(card);
      });
      cont.appendChild(sec);
    });
  }
  document.getElementById('vgOverlay').classList.add('open');
}
function closeVG(e) {
  if (e.target.id === 'vgOverlay') document.getElementById('vgOverlay').classList.remove('open');
}

/* ════════════════════════════════
   THEME TOGGLE
════════════════════════════════ */
const themeBtn = document.getElementById('themeBtn');
let isDark = true;
function applyTheme(dark) {
  isDark = dark;
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  themeBtn.textContent = dark ? '🌙' : '☀️';
  try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch(e){}
}
themeBtn.addEventListener('click', () => applyTheme(!isDark));
try {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') applyTheme(false);
} catch(e){}

/* ════════════════════════════════
   SEARCH
════════════════════════════════ */
const searchInput = document.getElementById('searchInput');
const searchBanner = document.getElementById('searchBanner');
const phaseCards = document.querySelectorAll('.phase-card');

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) {
    phaseCards.forEach(c => c.classList.remove('hidden-search'));
    searchBanner.classList.remove('show');
    return;
  }
  let count = 0;
  phaseCards.forEach(c => {
    const kw = (c.dataset.keywords || '') + ' ' + c.querySelector('h2').textContent.toLowerCase();
    const match = kw.includes(q);
    c.classList.toggle('hidden-search', !match);
    if (match) count++;
  });
  searchBanner.textContent = count ? `${count} fase ditemukan untuk "${q}"` : `Tidak ada fase yang cocok dengan "${q}"`;
  searchBanner.classList.add('show');
});

/* ════════════════════════════════
   SCROLL — DOTS + ENTRANCE ANIM
════════════════════════════════ */
const cards = Array.from(phaseCards);

// Intersection for entrance animation
const entranceObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const el = e.target;
      const i = cards.indexOf(el);
      setTimeout(() => el.classList.add('visible'), i * 55);
      entranceObs.unobserve(el);
    }
  });
}, { threshold: 0.1 });
cards.forEach(c => entranceObs.observe(c));

/* ════════════════════════════════
   KEYBOARD NAV
════════════════════════════════ */
document.addEventListener('keydown', e => {
  const overlay = document.getElementById('phaseOverlay');
  if (!overlay.classList.contains('open')) return;
  if (e.key === 'ArrowRight') navPhase(1);
  else if (e.key === 'ArrowLeft') navPhase(-1);
  else if (e.key === 'Escape') closePhaseModal();
});

/* ════════════════════════════════
   CONSTELLATION CANVAS
   Optimized: pause when hidden,
   throttled to ~30fps for mobile
════════════════════════════════ */
(function () {
  const canvas = document.getElementById('constellationCanvas');
  const ctx = canvas.getContext('2d', { alpha: true });
  let W, H, stars = [], forming = [], lastSpawn = 0, lastFrame = 0;
  const TARGET_FPS = 30;
  const FRAME_INTERVAL = 1000 / TARGET_FPS;
  let paused = false;
  let rafId;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize, { passive: true });
  resize();

  // Pause when tab hidden
  document.addEventListener('visibilitychange', () => {
    paused = document.hidden;
    if (!paused && !rafId) rafId = requestAnimationFrame(draw);
  });

  const CONSTELLATIONS = [
    { name:'Orion', pts:[[50,10],[44,28],[56,28],[35,45],[65,45],[40,62],[60,62],[50,80]], edges:[[0,1],[0,2],[1,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6,7]] },
    { name:'Ursa Major', pts:[[10,50],[25,45],[40,48],[55,42],[70,38],[80,25],[90,30],[80,42]], edges:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,3]] },
    { name:'Cassiopeia', pts:[[10,50],[25,20],[50,50],[75,20],[90,50]], edges:[[0,1],[1,2],[2,3],[3,4]] },
    { name:'Cygnus', pts:[[50,10],[50,40],[50,70],[20,40],[80,40],[35,58],[65,58]], edges:[[0,1],[1,2],[3,1],[1,4],[5,2],[2,6]] },
    { name:'Lyra', pts:[[50,10],[35,30],[40,50],[60,50],[65,30]], edges:[[0,1],[0,4],[1,2],[2,3],[3,4],[1,4]] },
    { name:'Scorpius', pts:[[50,5],[45,18],[40,30],[35,44],[30,56],[38,68],[46,78],[55,74],[62,64]], edges:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8]] },
    { name:'Gemini', pts:[[20,10],[20,30],[20,50],[40,10],[40,30],[40,50],[30,70]], edges:[[0,1],[1,2],[3,4],[4,5],[1,4],[2,5],[5,6],[2,6]] },
    { name:'Taurus', pts:[[50,30],[35,20],[20,15],[55,45],[70,35],[65,50]], edges:[[0,1],[1,2],[0,3],[3,4],[4,5]] },
    { name:'Leo', pts:[[20,60],[30,40],[45,22],[58,32],[65,50],[55,68],[30,68]], edges:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[0,6],[6,1]] },
    { name:'Virgo', pts:[[50,10],[38,28],[28,48],[38,65],[55,72],[68,55],[72,35],[60,18]], edges:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0]] },
    { name:'Perseus', pts:[[50,10],[44,25],[36,38],[30,52],[42,60],[50,68],[58,60],[62,45],[56,28]], edges:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,1]] },
    { name:'Boötes', pts:[[50,10],[35,30],[25,52],[38,68],[52,75],[66,68],[75,52],[65,30]], edges:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],[1,7]] },
    { name:'Corona Borealis', pts:[[20,50],[32,28],[48,18],[64,18],[78,28],[88,50]], edges:[[0,1],[1,2],[2,3],[3,4],[4,5]] },
    { name:'Aquila', pts:[[50,10],[46,30],[50,52],[40,66],[60,66],[50,80],[36,40],[64,40]], edges:[[0,1],[1,2],[2,3],[2,4],[3,5],[4,5],[1,6],[1,7]] },
    { name:'Pegasus', pts:[[10,10],[10,60],[60,60],[60,10],[80,30],[90,58]], edges:[[0,1],[1,2],[2,3],[3,0],[3,4],[4,5]] },
    { name:'Andromeda', pts:[[10,50],[28,38],[44,28],[58,18],[72,12],[58,32],[44,48]], edges:[[0,1],[1,2],[2,3],[3,4],[2,5],[5,6]] },
    { name:'Aries', pts:[[20,50],[42,33],[62,38],[82,48]], edges:[[0,1],[1,2],[2,3]] },
    { name:'Capricornus', pts:[[10,40],[28,22],[48,18],[64,28],[72,46],[66,62],[50,72],[30,66],[14,55]], edges:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,0]] },
    { name:'Pisces', pts:[[20,30],[35,18],[52,20],[62,34],[58,50],[46,58],[65,65],[78,72],[82,58],[76,44]], edges:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]] },
    { name:'Draco', pts:[[80,10],[68,20],[56,32],[46,44],[38,56],[32,68],[38,80],[48,76],[56,66],[64,52],[72,38],[80,10]], edges:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11]] },
  ];

  function mkStar() {
    return {
      x: Math.random()*W, y: Math.random()*H,
      r: Math.random()*0.65+0.12,
      alpha: Math.random()*0.18+0.05,
      twinkle: Math.random()*Math.PI*2,
      speed: Math.random()*0.004+0.0015,
    };
  }
  for (let i=0; i<60; i++) stars.push(mkStar());

  const recentIdx = [];
  function spawnConstellation() {
    let idx;
    let tries = 0;
    do { idx = Math.floor(Math.random()*CONSTELLATIONS.length); tries++; }
    while (recentIdx.includes(idx) && tries < 10);
    recentIdx.push(idx);
    if (recentIdx.length > 4) recentIdx.shift();

    const src = CONSTELLATIONS[idx];
    const scale = (0.35 + Math.random()*0.45) * Math.min(W,H) / 120;
    const margin = 50;
    const ox = margin + Math.random()*(W - margin*2);
    const oy = margin + Math.random()*(H - margin*2);
    const basePts = src.pts.map(([px,py]) => ({
      bx: ox + (px-50)*scale,
      by: oy + (py-50)*scale,
    }));
    forming.push({
      basePts, edges:src.edges,
      life:0, maxLife: 180 + Math.random()*80,
      driftSpeed: 0.06 + Math.random()*0.08,
      driftAmp: 6 + Math.random()*10,
      driftPhase: Math.random()*Math.PI*2,
    });
  }

  function draw(ts) {
    rafId = requestAnimationFrame(draw);
    if (paused) return;
    if (ts - lastFrame < FRAME_INTERVAL) return;
    lastFrame = ts;

    ctx.clearRect(0,0,W,H);

    // Background stars
    for (let i=0; i<stars.length; i++) {
      const s = stars[i];
      s.twinkle += s.speed;
      const a = s.alpha * (0.5 + 0.5*Math.sin(s.twinkle));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(232,200,74,${a})`;
      ctx.fill();
    }

    // Spawn
    if (!lastSpawn || ts - lastSpawn > 6000) {
      spawnConstellation();
      lastSpawn = ts;
    }

    forming = forming.filter(c => {
      c.life++;
      const FI=30, FO=35;
      let ma;
      if (c.life < FI) ma = c.life/FI;
      else if (c.life > c.maxLife-FO) ma = (c.maxLife-c.life)/FO;
      else ma = 1;
      if (ma <= 0) return c.life < c.maxLife;

      const ft = c.life*c.driftSpeed*0.035 + c.driftPhase;
      const fx = Math.sin(ft)*c.driftAmp;
      const fy = Math.cos(ft*0.7)*c.driftAmp*0.5;
      const pts = c.basePts.map(p => ({x:p.bx+fx, y:p.by+fy}));

      // Batch edges
      ctx.beginPath();
      c.edges.forEach(([a,b]) => {
        const ea = Math.max(0,Math.min(1,(c.life - a*5 - 8)/16));
        const opa = ma*ea*0.15;
        if (opa <= 0) return;
        ctx.moveTo(pts[a].x, pts[a].y);
        ctx.lineTo(pts[b].x, pts[b].y);
      });
      ctx.strokeStyle = `rgba(232,200,74,0.15)`;
      ctx.lineWidth = 0.45;
      ctx.stroke();

      // Stars
      pts.forEach((pt,i) => {
        const appear = Math.max(0,Math.min(1,(c.life - i*4)/12));
        const a = ma*appear;
        if (a < 0.02) return;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 0.85, 0, Math.PI*2);
        ctx.fillStyle = `rgba(255,250,220,${a*0.5})`;
        ctx.fill();
      });

      return c.life < c.maxLife;
    });
  }

  spawnConstellation();
  rafId = requestAnimationFrame(draw);
})();