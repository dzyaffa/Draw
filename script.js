/* ── Modal & Nav ── */
  let currentLink = '';

  function showModal(title, desc, url, icon) {
    currentLink = url;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDesc').textContent = desc;
    document.getElementById('modalUrl').textContent = url;
    document.getElementById('modalIcon').src = icon;
    document.getElementById('modalOverlay').classList.add('open');
  }
  function goToLink() {
    window.open(currentLink, '_blank');
    document.getElementById('modalOverlay').classList.remove('open');
  }
  function closeModal(e) {
    if (e.target.id === 'modalOverlay') document.getElementById('modalOverlay').classList.remove('open');
  }
  /* ── Video Gallery ── */
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
      { id:'TWe0NYmWc8A', title:'How to Draw Eyes from ANY Perspective | DrawlikeaSir' },
      { id:'2OdCGrQGlHs', title:'Learn to Draw Expressions (Better)!' },
    ]},
    { phase:4, phaseTitle:'Fase 4 — Rambut', videos:[
      { id:'8fAvS36tc5U', title:'Draw Better Hair Like This!' },
      { id:'Qzv1WW45TTo', title:'How To Draw Hair | Tutorial' },
    ]},
    { phase:5, phaseTitle:'Fase 5 — Proporsi Tubuh & Gesture', videos:[
      { id:'WkmZLi8bNBM', title:'Drawing Anatomy is Easier Than You Think, Here\'s How' },
      { id:'X3P7_VlAMIc', title:'How to Draw Bodies / Tutorial and Practice (Chommang)' },
      { id:'DmZdjspTsTw', title:'I Wanna Learn Anatomy in 7 DAYS... so I Got Help' },
    ]},
    { phase:6, phaseTitle:'Fase 6 — Tangan & Jari', videos:[
      { id:'eAhHgPZASYQ', title:'How to Draw Hands / Useful Tips!! Part 1 (Chommang)' },
    ]},
    { phase:7, phaseTitle:'Fase 7 — Line Art, Warna & Shading', videos:[
      { id:'Ehi3qpAkbm0', title:'How to COLOR // 4 steps' },
      { id:'RFQtsXktc9g', title:'Train Your Eyes to See Values' },
      { id:'-Len8j7PeY8', title:'How to RENDER Digital Art // Just Ball' },
      { id:'kGvDQCohHdM', title:'BASIC COLOR THEORY | Beginner Guide + Concepts' },
      { id:'68eC42S_FNc', title:'BASIC COLOR THEORY | YouTube Art School' },
    ]},
  ];

  function showVideoGallery() {
    const container = document.getElementById('videoGalleryContent');
    container.innerHTML = '';
    VIDEO_DATA.forEach(group => {
      const section = document.createElement('div');
      section.style.cssText = 'margin-bottom:24px;';
      const label = document.createElement('p');
      label.style.cssText = 'font-size:11px;text-transform:uppercase;letter-spacing:2px;color:#8888aa;margin-bottom:10px;font-weight:700;';
      label.textContent = group.phaseTitle;
      section.appendChild(label);
      group.videos.forEach(v => {
        const card = document.createElement('div');
        card.style.cssText = 'display:flex;gap:12px;align-items:center;background:#0f0f13;border:1px solid #2a2a3a;border-radius:12px;padding:10px;margin-bottom:8px;cursor:pointer;transition:border-color 0.2s,box-shadow 0.2s;';
        card.onmouseenter = () => { card.style.borderColor='#e8c84a'; card.style.boxShadow='0 0 10px rgba(232,200,74,0.15)'; };
        card.onmouseleave = () => { card.style.borderColor='#2a2a3a'; card.style.boxShadow='none'; };
        card.onclick = () => window.open('https://www.youtube.com/watch?v='+v.id, '_blank');
        const img = document.createElement('img');
        img.src = 'https://i.ytimg.com/vi/'+v.id+'/mqdefault.jpg';
        img.style.cssText = 'width:108px;height:60px;object-fit:cover;border-radius:8px;flex-shrink:0;background:#1a1a24;';
        const info = document.createElement('div');
        info.style.cssText = 'flex:1;min-width:0;';
        const title = document.createElement('p');
        title.style.cssText = 'font-size:13px;font-weight:700;color:#e8e8f0;line-height:1.4;margin:0 0 4px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;';
        title.textContent = v.title;
        const lnk = document.createElement('span');
        lnk.style.cssText = 'font-size:11px;color:#e8c84a;font-weight:600;';
        lnk.textContent = '▶ Tonton di YouTube';
        info.appendChild(title);
        info.appendChild(lnk);
        card.appendChild(img);
        card.appendChild(info);
        section.appendChild(card);
      });
      container.appendChild(section);
    });
    document.getElementById('videoGalleryOverlay').classList.add('open');
  }

  function closeVideoGallery(e) {
    if (e.target.id === 'videoGalleryOverlay') document.getElementById('videoGalleryOverlay').classList.remove('open');
  }

  function showChannelPicker() { showVideoGallery(); }
  function closeChannelModal(e) { closeVideoGallery(e); }
  function goChannel(url) { window.open(url,'_blank'); }

  /* ── Toggle Phase with opened class ── */
  function togglePhase(header) {
    const content = header.nextElementSibling;
    const arrow = header.querySelector('span:last-child');
    content.classList.toggle('open');
    header.classList.toggle('opened', content.classList.contains('open'));
    arrow.textContent = content.classList.contains('open') ? '▲' : '▼';
  }

  /* ── Phase entrance animation (IntersectionObserver) ── */
  const phaseObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.delay || 0;
        setTimeout(() => el.classList.add('visible'), delay);
        phaseObserver.unobserve(el);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.phase').forEach((phase, i) => {
    phase.dataset.delay = i * 60;
    phaseObserver.observe(phase);
  });

  /* ── Progress dots ── */
  const phases = document.querySelectorAll('.phase');
  const dots   = document.querySelectorAll('.progress-dot');
  const miniBar = document.getElementById('miniBar');
  const miniDotsList = miniBar.querySelectorAll('.progress-dot');
  const headerEl = document.querySelector('header');

  function updateDots() {
    let current = 0;
    phases.forEach((phase, i) => {
      if (phase.getBoundingClientRect().top <= window.innerHeight * 0.5) current = i;
    });
    dots.forEach((dot, i) => dot.classList.toggle('active', i <= current));
  }
  function onScroll() {
    updateDots();
    miniDotsList.forEach((dot, i) => dot.classList.toggle('active', dots[i].classList.contains('active')));
    miniBar.classList.toggle('visible', window.scrollY > headerEl.offsetHeight - 20);
  }
  window.addEventListener('scroll', onScroll);
  updateDots();

  /* ── Laser beam JS animation ── */
  (function() {
    const beam = document.getElementById('laserBeam');
    const laserEl = document.querySelector('.timeline-laser');

    function animateLaser() {
      const totalH = laserEl.offsetHeight;
      const beamH = 40;
      let startTime = null;
      const duration = 2600; // ms for one pass

      function step(ts) {
        if (!startTime) startTime = ts;
        const elapsed = ts - startTime;
        const progress = elapsed / duration; // 0 → 1

        // travel from bottom to top: start at totalH, end at -beamH
        const topVal = totalH - (totalH + beamH) * progress;

        let alpha;
        if (progress < 0.05) alpha = progress / 0.05;
        else if (progress > 0.88) alpha = (1 - progress) / 0.12;
        else alpha = 1;

        beam.style.top = topVal + 'px';
        beam.style.opacity = alpha;

        if (elapsed < duration) {
          requestAnimationFrame(step);
        } else {
          beam.style.opacity = 0;
          // pause 0.6s between passes
          setTimeout(animateLaser, 600);
        }
      }
      requestAnimationFrame(step);
    }
    animateLaser();
  })();

  /* ── Constellation Canvas ── */
  (function () {
    const canvas = document.getElementById('constellationCanvas');
    const ctx = canvas.getContext('2d');
    let W, H, stars = [], forming = [], lastSpawn = 0;

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    // --- Real constellation data (normalized 0-100 coords, with named edges) ---
    const CONSTELLATIONS = [
      { name:'Orion', pts:[[50,10],[44,28],[56,28],[35,45],[65,45],[40,62],[60,62],[50,80],[42,90],[58,90]], edges:[[0,1],[0,2],[1,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6,7],[7,8],[7,9]] },
      { name:'Ursa Major', pts:[[10,50],[25,45],[40,48],[55,42],[70,38],[80,25],[90,30],[80,42],[70,50]], edges:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[4,8]] },
      { name:'Ursa Minor', pts:[[50,10],[48,22],[52,34],[50,48],[38,60],[30,72],[44,80]], edges:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[3,6]] },
      { name:'Cassiopeia', pts:[[10,50],[25,20],[50,50],[75,20],[90,50]], edges:[[0,1],[1,2],[2,3],[3,4]] },
      { name:'Leo', pts:[[20,60],[30,40],[40,20],[55,30],[65,50],[60,70],[50,80],[30,70],[20,60],[50,80]], edges:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],[4,8],[5,9]] },
      { name:'Scorpius', pts:[[50,5],[45,18],[40,30],[35,44],[30,56],[32,68],[38,78],[46,86],[55,82],[62,74],[65,62]], edges:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]] },
      { name:'Sagittarius', pts:[[30,70],[20,55],[30,40],[45,35],[55,40],[60,55],[50,65],[35,60],[45,50],[55,35],[65,25],[75,30]], edges:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],[3,8],[8,4],[3,9],[9,10],[10,11]] },
      { name:'Cygnus', pts:[[50,10],[50,35],[50,60],[50,85],[20,35],[80,35],[35,55],[65,55]], edges:[[0,1],[1,2],[2,3],[4,1],[1,5],[6,2],[2,7]] },
      { name:'Lyra', pts:[[50,10],[35,30],[40,50],[50,60],[60,50],[65,30],[50,10]], edges:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[1,5],[2,4]] },
      { name:'Aquila', pts:[[50,10],[45,30],[50,50],[40,65],[60,65],[50,80],[50,50],[35,40],[65,40]], edges:[[0,1],[1,2],[2,3],[2,4],[3,5],[4,5],[1,7],[1,8]] },
      { name:'Gemini', pts:[[20,10],[20,30],[20,50],[20,70],[40,10],[40,30],[40,50],[40,70],[30,85]], edges:[[0,1],[1,2],[2,3],[4,5],[5,6],[6,7],[1,5],[2,6],[3,8],[7,8]] },
      { name:'Taurus', pts:[[50,30],[35,20],[20,15],[55,45],[70,35],[80,20],[65,50],[75,60]], edges:[[0,1],[1,2],[0,3],[3,4],[4,5],[3,6],[6,7]] },
      { name:'Aries', pts:[[20,50],[40,35],[60,40],[80,50]], edges:[[0,1],[1,2],[2,3]] },
      { name:'Virgo', pts:[[50,10],[40,25],[30,40],[35,58],[50,65],[65,58],[70,40],[60,25],[50,10],[50,65],[50,80]], edges:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],[4,9],[9,10]] },
      { name:'Perseus', pts:[[50,10],[45,25],[38,38],[30,50],[42,58],[50,65],[58,58],[60,45],[55,30],[65,18]], edges:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,1],[8,9]] },
      { name:'Auriga', pts:[[50,10],[20,35],[30,60],[50,70],[70,60],[80,35],[50,10]], edges:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[2,4]] },
      { name:'Boötes', pts:[[50,10],[35,28],[25,48],[35,65],[50,75],[65,65],[75,48],[65,28],[50,10]], edges:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],[1,7]] },
      { name:'Corona Borealis', pts:[[20,50],[30,30],[45,20],[60,20],[75,30],[80,50]], edges:[[0,1],[1,2],[2,3],[3,4],[4,5]] },
      { name:'Hercules', pts:[[50,15],[35,28],[28,45],[35,62],[50,70],[65,62],[72,45],[65,28],[50,15],[50,70],[42,85],[58,85]], edges:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],[1,7],[2,6],[4,9],[9,10],[9,11]] },
      { name:'Pegasus', pts:[[10,10],[10,60],[60,60],[60,10],[10,10],[60,10],[80,30],[90,60]], edges:[[0,1],[1,2],[2,3],[3,0],[3,5],[5,6],[6,7]] },
      { name:'Andromeda', pts:[[10,50],[25,40],[40,30],[55,20],[70,15],[55,35],[40,50],[25,65]], edges:[[0,1],[1,2],[2,3],[3,4],[2,5],[5,6],[6,7]] },
      { name:'Canis Major', pts:[[50,10],[40,25],[30,40],[38,55],[50,65],[62,55],[70,40],[60,25],[50,65],[50,80]], edges:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,1],[4,8],[8,9]] },
      { name:'Canis Minor', pts:[[30,40],[60,55],[70,70]], edges:[[0,1],[1,2]] },
      { name:'Draco', pts:[[80,10],[70,20],[60,30],[50,42],[42,55],[35,65],[30,75],[38,82],[48,78],[55,68],[60,55],[68,45],[75,35],[80,10]], edges:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13]] },
      { name:'Libra', pts:[[20,50],[40,30],[60,30],[80,50],[60,70],[40,70],[20,50]], edges:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[1,5],[2,4]] },
      { name:'Capricornus', pts:[[10,40],[25,25],[45,20],[60,30],[70,45],[65,60],[50,70],[30,65],[15,55],[10,40]], edges:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,0]] },
      { name:'Aquarius', pts:[[40,10],[35,25],[30,40],[38,52],[50,58],[62,52],[70,40],[65,25],[60,10],[50,58],[48,72],[55,82]], edges:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[4,9],[9,10],[10,11]] },
      { name:'Pisces', pts:[[20,30],[30,20],[45,18],[55,25],[60,38],[55,52],[45,58],[60,65],[70,72],[80,68],[85,55],[80,42],[68,38]], edges:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12]] },
      { name:'Cancer', pts:[[30,30],[45,45],[55,45],[50,60],[40,70],[60,30]], edges:[[0,1],[1,2],[2,3],[3,4],[1,5]] },
      { name:'Lupus', pts:[[25,30],[40,20],[55,25],[65,40],[60,55],[45,60],[30,50],[25,30]], edges:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0]] },
    ];

    // Background stars
    function mkStar() {
      return {
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 0.7 + 0.15,
        alpha: Math.random() * 0.22 + 0.06,
        twinkle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.005 + 0.002,
      };
    }
    for (let i = 0; i < 70; i++) stars.push(mkStar());

    // Track which constellations were recently used to avoid repeats
    const recentlyUsed = [];

    function spawnConstellation() {
      // Pick one not recently used
      let idx;
      do { idx = Math.floor(Math.random() * CONSTELLATIONS.length); }
      while (recentlyUsed.includes(idx));
      recentlyUsed.push(idx);
      if (recentlyUsed.length > 5) recentlyUsed.shift();

      const src = CONSTELLATIONS[idx];
      const scale = (0.4 + Math.random() * 0.5) * Math.min(W, H) / 120;
      const margin = 60;
      const ox = margin + Math.random() * (W - margin * 2);
      const oy = margin + Math.random() * (H - margin * 2);

      // Floating drift
      const driftAngle = Math.random() * Math.PI * 2;
      const driftSpeed = 0.08 + Math.random() * 0.12;
      const driftAmp = 8 + Math.random() * 14;

      const basePts = src.pts.map(([px, py]) => ({
        bx: ox + (px - 50) * scale,
        by: oy + (py - 50) * scale,
      }));

      const maxLife = 200 + Math.random() * 100; // shorter: ~3-5s at 60fps
      forming.push({
        name: src.name,
        basePts,
        edges: src.edges,
        life: 0,
        maxLife,
        driftAngle,
        driftSpeed,
        driftAmp,
        driftPhase: Math.random() * Math.PI * 2,
      });
    }

    function draw(ts) {
      ctx.clearRect(0, 0, W, H);

      // Background twinkle stars
      stars.forEach(s => {
        s.twinkle += s.speed;
        const a = s.alpha * (0.55 + 0.45 * Math.sin(s.twinkle));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232,200,74,${a})`;
        ctx.fill();
      });

      // Spawn every ~2.5s
      if (!lastSpawn || ts - lastSpawn > 5000) {
        spawnConstellation();
        lastSpawn = ts;
      }

      forming = forming.filter(c => {
        c.life++;
        const FADE_IN  = 35;
        const FADE_OUT = 40;
        let masterAlpha;
        if (c.life < FADE_IN) masterAlpha = c.life / FADE_IN;
        else if (c.life > c.maxLife - FADE_OUT) masterAlpha = (c.maxLife - c.life) / FADE_OUT;
        else masterAlpha = 1;
        if (masterAlpha <= 0) return c.life < c.maxLife;

        // Floating offset
        const floatT = c.life * c.driftSpeed * 0.04 + c.driftPhase;
        const fx = Math.sin(floatT) * c.driftAmp;
        const fy = Math.cos(floatT * 0.7) * c.driftAmp * 0.6;

        const pts = c.basePts.map(p => ({ x: p.bx + fx, y: p.by + fy }));

        // Draw edges
        c.edges.forEach(([a, b]) => {
          const edgeAppear = Math.max(0, Math.min(1, (c.life - a * 5 - 8) / 18));
          const opa = masterAlpha * edgeAppear * 0.18;
          if (opa <= 0) return;
          ctx.beginPath();
          ctx.moveTo(pts[a].x, pts[a].y);
          ctx.lineTo(pts[b].x, pts[b].y);
          ctx.strokeStyle = `rgba(232,200,74,${opa})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        });

        // Draw stars
        pts.forEach((pt, i) => {
          const appear = Math.max(0, Math.min(1, (c.life - i * 4) / 14));
          const a = masterAlpha * appear;
          if (a <= 0) return;
          // glow
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,240,160,${a * 0.18})`;
          ctx.fill();
          // core
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 0.9, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,230,${a * 0.55})`;
          ctx.fill();
        });

        return c.life < c.maxLife;
      });

      requestAnimationFrame(draw);
    }

    spawnConstellation();
    requestAnimationFrame(draw);
  })();