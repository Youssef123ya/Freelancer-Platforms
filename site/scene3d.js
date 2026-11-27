(() => {
  'use strict';

  /* ==========================================================================
     Youssef Yacoup — 3D Coding & Engineering Animations Engine
     1) True 3D Perspective Canvas in Hero (Wireframe Polyhedra, Code Cubes,
        Depth-Parallax 3D Code Glyphs & Mouse-Interactive 3D Camera)
     2) Interactive 3D Drag-to-Rotate Tech Stack Cube + 3D Gyroscope Satellites
     3) Multi-Layer 3D Perspective Live-Typing IDE Terminal (C# / Python / TS)
     ========================================================================== */

  const REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const PIGMENTS = [
    '#C2410C', // Terracotta
    '#1D4ED8', // Oxford Cobalt
    '#047857', // Forest Emerald
    '#D97706', // Amber Ochre
    '#0F766E', // Deep Teal
    '#BE123C', // Crimson Wine
  ];

  /* --------------------------------------------------------------------------
     1. TRUE 3D PROJECTION CANVAS IN HERO (#heroCanvas)
     -------------------------------------------------------------------------- */
  function initHero3DCanvas() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let rafId = null;

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    // 3D Geometry Primitives (Cube & Octahedron & Prism)
    const CUBE_VERTS = [
      [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
      [-1, -1, 1],  [1, -1, 1],  [1, 1, 1],  [-1, 1, 1],
    ];
    const CUBE_EDGES = [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7],
    ];
    const OCTA_VERTS = [
      [0, -1.35, 0], [1.15, 0, 0], [0, 0, 1.15],
      [-1.15, 0, 0], [0, 0, -1.15], [0, 1.35, 0],
    ];
    const OCTA_EDGES = [
      [0, 1], [0, 2], [0, 3], [0, 4],
      [5, 1], [5, 2], [5, 3], [5, 4],
      [1, 2], [2, 3], [3, 4], [4, 1],
    ];

    // 4 floating 3D wireframe polyhedra anchored on the outer left/right flanks so center text stays crystal clear
    const shapes = [
      { kind: 'cube', anchorX: 0.09, anchorY: 0.22, size: 34, color: '#1D4ED8', rx: 0.4, ry: 0.2, rz: 0.1, vx: 0.0055, vy: 0.0085, vz: 0.003, phase: 0, label: '{ }' },
      { kind: 'octa', anchorX: 0.91, anchorY: 0.20, size: 36, color: '#C2410C', rx: 0.2, ry: 0.7, rz: 0.3, vx: 0.006,  vy: -0.008, vz: 0.0025, phase: 1.4, label: '</>' },
      { kind: 'octa', anchorX: 0.08, anchorY: 0.72, size: 30, color: '#047857', rx: 0.8, ry: 0.3, rz: 0.0, vx: -0.005, vy: 0.007,  vz: 0.004, phase: 2.7, label: 'API' },
      { kind: 'cube', anchorX: 0.92, anchorY: 0.70, size: 32, color: '#D97706', rx: 0.5, ry: 0.5, rz: 0.2, vx: 0.0045, vy: -0.009, vz: -0.003, phase: 4.1, label: '01' },
    ];

    // 3D depth-layered floating code glyphs & binary nodes
    const TOKENS = ['</>', '{ }', '=>', 'async', '.NET', 'Py', 'SQL', 'AI', 'λ', '01', '[ ]', 'git', 'API', 'TS', '☁'];
    const glyphs = [];
    for (let i = 0; i < 24; i++) {
      // Bias X toward outer flanks (0..0.28 and 0.72..1.0) on desktop for readability
      const leftSide = i % 2 === 0;
      const nx = leftSide ? (0.03 + Math.random() * 0.24) : (0.73 + Math.random() * 0.24);
      glyphs.push({
        nx,
        ny: 0.06 + Math.random() * 0.86,
        z: -140 + Math.random() * 280, // true Z depth
        vz: (Math.random() - 0.5) * 0.35,
        vy: -0.00018 - Math.random() * 0.00022,
        text: TOKENS[i % TOKENS.length],
        color: PIGMENTS[i % PIGMENTS.length],
        phase: Math.random() * Math.PI * 2,
      });
    }

    const cam = { tx: 0, ty: 0, x: 0, y: 0 };
    const heroEl = canvas.parentElement;
    heroEl.addEventListener('pointermove', (e) => {
      const r = heroEl.getBoundingClientRect();
      cam.tx = ((e.clientX - r.left) / Math.max(1, r.width) - 0.5) * 2;
      cam.ty = ((e.clientY - r.top) / Math.max(1, r.height) - 0.5) * 2;
    }, { passive: true });
    heroEl.addEventListener('pointerleave', () => {
      cam.tx = 0;
      cam.ty = 0;
    });

    function rotate3D(p, rx, ry, rz) {
      let [x, y, z] = p;
      // Rotate X
      const cy = Math.cos(rx), sy = Math.sin(rx);
      let y1 = y * cy - z * sy;
      let z1 = y * sy + z * cy;
      y = y1; z = z1;
      // Rotate Y
      const cx = Math.cos(ry), sx = Math.sin(ry);
      let x1 = x * cx + z * sx;
      z1 = -x * sx + z * cx;
      x = x1; z = z1;
      // Rotate Z
      const cz = Math.cos(rz), sz = Math.sin(rz);
      x1 = x * cz - y * sz;
      y1 = x * sz + y * cz;
      return [x1, y1, z];
    }

    let t = 0;
    function render() {
      t += 0.016;
      cam.x += (cam.tx - cam.x) * 0.06;
      cam.y += (cam.ty - cam.y) * 0.06;

      ctx.clearRect(0, 0, w, h);
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const hideFlanks = w < 720;

      // 1) Draw 3D depth-sorted code tokens
      glyphs.sort((a, b) => a.z - b.z);
      for (const g of glyphs) {
        if (!REDUCED) {
          g.ny += g.vy;
          if (g.ny < -0.04) g.ny = 1.04;
          g.z += g.vz;
          if (g.z < -150 || g.z > 150) g.vz *= -1;
        }
        const depth = (g.z + 240) / 420; // ~0.2 to ~0.95
        const px = g.nx * w + cam.x * 26 * depth + Math.sin(t * 0.9 + g.phase) * 7;
        const py = g.ny * h + cam.y * 18 * depth;
        const fontSize = Math.round(10 + depth * 6);
        const alpha = (isDark ? 0.14 : 0.12) + depth * (isDark ? 0.24 : 0.18);

        ctx.save();
        ctx.font = `700 ${fontSize}px "IBM Plex Mono", ui-monospace, monospace`;
        ctx.fillStyle = g.color;
        ctx.globalAlpha = hideFlanks ? alpha * 0.45 : alpha;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(g.text, px, py);
        ctx.restore();
      }

      // 2) Draw 3D rotating wireframe polyhedra on desktop/tablet flanks
      if (!hideFlanks) {
        const focal = 280;
        for (const s of shapes) {
          if (!REDUCED) {
            s.rx += s.vx;
            s.ry += s.vy;
            s.rz += s.vz;
          }
          const cx = s.anchorX * w + cam.x * 22;
          const cy = s.anchorY * h + cam.y * 16 + Math.sin(t * 1.15 + s.phase) * 9;
          const verts = s.kind === 'cube' ? CUBE_VERTS : OCTA_VERTS;
          const edges = s.kind === 'cube' ? CUBE_EDGES : OCTA_EDGES;

          const projected = verts.map((v) => {
            const [rx, ry, rz] = rotate3D(v, s.rx + cam.y * 0.45, s.ry + cam.x * 0.55, s.rz);
            const scale = focal / (focal + rz * s.size + 110);
            return {
              x: cx + rx * s.size * scale * 1.55,
              y: cy + ry * s.size * scale * 1.55,
              z: rz,
              scale,
            };
          });

          // Subtle soft halo behind the 3D polyhedron
          const grad = ctx.createRadialGradient(cx, cy, 4, cx, cy, s.size * 1.9);
          grad.addColorStop(0, isDark ? `${s.color}28` : `${s.color}18`);
          grad.addColorStop(1, 'transparent');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(cx, cy, s.size * 1.9, 0, Math.PI * 2);
          ctx.fill();

          // Draw edges with depth-weighted stroke alpha
          ctx.lineCap = 'round';
          for (const [a, b] of edges) {
            const pa = projected[a];
            const pb = projected[b];
            const avgZ = (pa.z + pb.z) * 0.5;
            const depthAlpha = Math.max(0.16, Math.min(0.72, 0.44 - avgZ * 0.22));
            ctx.strokeStyle = s.color;
            ctx.globalAlpha = isDark ? depthAlpha * 1.1 : depthAlpha * 0.85;
            ctx.lineWidth = avgZ < 0 ? 1.65 : 1.0;
            ctx.beginPath();
            ctx.moveTo(pa.x, pa.y);
            ctx.lineTo(pb.x, pb.y);
            ctx.stroke();
          }

          // Draw 3D vertices as glowing architectural pins
          for (const p of projected) {
            ctx.fillStyle = s.color;
            ctx.globalAlpha = Math.max(0.25, Math.min(0.95, 0.65 - p.z * 0.25));
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.z < 0 ? 2.7 : 1.8, 0, Math.PI * 2);
            ctx.fill();
          }

          // Center floating code symbol inside the 3D wireframe
          ctx.globalAlpha = isDark ? 0.78 : 0.65;
          ctx.fillStyle = s.color;
          ctx.font = '700 12px "IBM Plex Mono", ui-monospace, monospace';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(s.label, cx, cy);
          ctx.globalAlpha = 1;
        }
      }

      if (!REDUCED) {
        rafId = requestAnimationFrame(render);
      }
    }

    document.addEventListener('visibilitychange', () => {
      if (document.hidden && rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      } else if (!document.hidden && !rafId && !REDUCED) {
        rafId = requestAnimationFrame(render);
      }
    });

    render();
  }

  /* --------------------------------------------------------------------------
     2. INTERACTIVE 3D DRAG-TO-ROTATE TECH CUBE & 3D PARALLAX CODE STUDIO
     -------------------------------------------------------------------------- */
  const CODE_TABS = {
    dotnet: {
      file: 'VitalsController.cs',
      lang: 'C# · ASP.NET Core',
      badge: '200 OK · 12ms',
      color: '#1D4ED8',
      lines: [
        '<span class="ck">[ApiController]</span>',
        '<span class="ck">[Route</span>(<span class="cs">"api/v1/medmonitor"</span>)<span class="ck">]</span>',
        '<span class="ck">public class</span> <span class="ct">VitalsController</span> : <span class="ct">ControllerBase</span> {',
        '  <span class="ck">public async</span> <span class="ct">Task</span>&lt;<span class="ct">IActionResult</span>&gt; <span class="cf">StreamBed</span>(<span class="ck">int</span> id) {',
        '    <span class="ck">var</span> state = <span class="ck">await</span> _azure.<span class="cf">PredictRiskAsync</span>(id);',
        '    <span class="ck">return</span> <span class="cf">Ok</span>(<span class="ck">new</span> { bedId = id, score = <span class="cn">99.4</span>, state });',
        '  }',
        '}',
      ],
    },
    python: {
      file: 'dune_tracker.py',
      lang: 'Python · AI & ML',
      badge: 'Accuracy · 96.8%',
      color: '#C2410C',
      lines: [
        '<span class="ck">from</span> sklearn.pipeline <span class="ck">import</span> <span class="ct">Pipeline</span>',
        '<span class="ck">import</span> pandas <span class="ck">as</span> pd',
        '',
        '<span class="ck">def</span> <span class="cf">forecast_encroachment</span>(telemetry: pd.DataFrame):',
        '    features = <span class="cf">extract_satellite_vectors</span>(telemetry)',
        '    risk = model.<span class="cf">predict_proba</span>(features)[:, <span class="cn">1</span>]',
        '    <span class="ck">return</span> {<span class="cs">"status"</span>: <span class="cs">"deployed"</span>, <span class="cs">"alerts"</span>: (risk &gt; <span class="cn">0.82</span>).sum()}',
      ],
    },
    agent: {
      file: 'invoicePilot.ts',
      lang: 'TypeScript · React',
      badge: 'PayPal AI · Live',
      color: '#047857',
      lines: [
        '<span class="ck">export async function</span> <span class="cf">draftClientInvoice</span>(brief: <span class="ct">string</span>) {',
        '  <span class="ck">const</span> parsed = <span class="ck">await</span> aiAgent.<span class="cf">extractMilestones</span>(brief);',
        '  <span class="ck">const</span> link = <span class="ck">await</span> paypal.<span class="cf">createCheckout</span>(parsed.total);',
        '  <span class="ck">return</span> { milestones: parsed.items, checkoutUrl: link };',
        '}',
        '<span class="cc">// 39 verified works · 5 freelance platforms · 100% live</span>',
      ],
    },
  };

  function init3DCodeStudio() {
    const stage = document.getElementById('code3dStage');
    if (!stage) return;

    // --- Interactive 3D Tech Cube (Auto-Spin + Pointer Drag with Inertia) ---
    const cube = document.getElementById('techCube3d');
    const cubeZone = document.getElementById('cubeZone3d');
    let rotX = -20;
    let rotY = 32;
    let velX = 0;
    let velY = 0.35;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;

    if (cube && cubeZone) {
      cubeZone.addEventListener('pointerdown', (e) => {
        dragging = true;
        lastX = e.clientX;
        lastY = e.clientY;
        cubeZone.setPointerCapture?.(e.pointerId);
        cubeZone.classList.add('grabbing');
      });
      cubeZone.addEventListener('pointermove', (e) => {
        if (!dragging) return;
        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;
        lastX = e.clientX;
        lastY = e.clientY;
        rotY += dx * 0.65;
        rotX -= dy * 0.65;
        velY = dx * 0.25;
        velX = -dy * 0.25;
      });
      const stopDrag = () => {
        dragging = false;
        cubeZone.classList.remove('grabbing');
      };
      cubeZone.addEventListener('pointerup', stopDrag);
      cubeZone.addEventListener('pointercancel', stopDrag);

      function spinCube() {
        if (!dragging && !REDUCED) {
          rotY += velY;
          rotX += velX;
          // Smoothly ease back to gentle 3D orbital spin
          velY += (0.38 - velY) * 0.03;
          velX += (Math.sin(performance.now() * 0.0007) * 0.14 - velX) * 0.04;
        }
        cube.style.transform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
        if (!REDUCED) requestAnimationFrame(spinCube);
      }
      if (REDUCED) {
        cube.style.transform = 'rotateX(-22deg) rotateY(35deg)';
      } else {
        requestAnimationFrame(spinCube);
      }
    }

    // --- 3D Layered Perspective IDE Terminal (Mouse Parallax + Live Typing) ---
    const ideCard = document.getElementById('ideCard3d');
    const ideZone = document.getElementById('ideZone3d');
    if (ideCard && ideZone && !REDUCED) {
      ideZone.addEventListener('pointermove', (e) => {
        const r = ideZone.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        ideCard.style.setProperty('--ide-rx', `${(-py * 12).toFixed(2)}deg`);
        ideCard.style.setProperty('--ide-ry', `${(px * 14).toFixed(2)}deg`);
      }, { passive: true });
      ideZone.addEventListener('pointerleave', () => {
        ideCard.style.setProperty('--ide-rx', '4deg');
        ideCard.style.setProperty('--ide-ry', '-7deg');
      });
    }

    // Live line-by-line code reveal & tab switcher
    const codeBody = document.getElementById('ideCodeBody');
    const badgeEl = document.getElementById('ideBadgeStatus');
    const langEl = document.getElementById('ideBadgeLang');
    const tabBtns = stage.querySelectorAll('[data-code-tab]');
    let currentTab = 'dotnet';
    let typeTimer = null;
    let autoCycleTimer = null;
    const tabKeys = Object.keys(CODE_TABS);

    function showCodeTab(key, userClicked = false) {
      if (!CODE_TABS[key] || !codeBody) return;
      currentTab = key;
      const spec = CODE_TABS[key];
      tabBtns.forEach((b) => b.classList.toggle('active', b.dataset.codeTab === key));
      if (badgeEl) {
        badgeEl.textContent = spec.badge;
        badgeEl.style.setProperty('--ide-accent', spec.color);
      }
      if (langEl) langEl.textContent = spec.lang;
      if (ideCard) ideCard.style.setProperty('--ide-accent', spec.color);

      if (typeTimer) clearInterval(typeTimer);
      if (REDUCED) {
        codeBody.innerHTML = spec.lines
          .map((ln, idx) => `<div class="code-line"><span class="ln">${idx + 1}</span><code>${ln || '&nbsp;'}</code></div>`)
          .join('');
        return;
      }

      codeBody.innerHTML = '';
      let idx = 0;
      typeTimer = setInterval(() => {
        if (idx >= spec.lines.length) {
          clearInterval(typeTimer);
          typeTimer = null;
          return;
        }
        const div = document.createElement('div');
        div.className = 'code-line line-enter';
        codeBody.querySelectorAll('.ide-cursor').forEach((c) => c.remove());
        div.innerHTML = `<span class="ln">${idx + 1}</span><code>${spec.lines[idx] || '&nbsp;'}<span class="ide-cursor" aria-hidden="true">▋</span></code>`;
        codeBody.appendChild(div);
        idx++;
      }, 95);

      if (userClicked && autoCycleTimer) {
        clearInterval(autoCycleTimer);
        autoCycleTimer = setInterval(nextTab, 7500);
      }
    }

    function nextTab() {
      const nextIdx = (tabKeys.indexOf(currentTab) + 1) % tabKeys.length;
      showCodeTab(tabKeys[nextIdx], false);
    }

    tabBtns.forEach((btn) => {
      btn.addEventListener('click', () => showCodeTab(btn.dataset.codeTab, true));
    });

    showCodeTab('dotnet', false);
    if (!REDUCED) {
      autoCycleTimer = setInterval(nextTab, 6500);
    }
  }


  /* --------------------------------------------------------------------------
     3. INTERACTIVE 3D PORTRAIT TILT & ORBITAL PARALLAX (#avatarStage3d)
     -------------------------------------------------------------------------- */
  function initAvatar3DTilt() {
    const stage = document.getElementById('avatarStage3d');
    const tilt = document.getElementById('avatarTilt3d');
    if (!stage || !tilt || REDUCED) return;

    stage.addEventListener('pointermove', (e) => {
      const r = stage.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      tilt.style.setProperty('--av-rx', `${(-py * 16).toFixed(2)}deg`);
      tilt.style.setProperty('--av-ry', `${(px * 16).toFixed(2)}deg`);
    }, { passive: true });

    stage.addEventListener('pointerleave', () => {
      tilt.style.setProperty('--av-rx', '0deg');
      tilt.style.setProperty('--av-ry', '0deg');
    });
  }

  function boot() {
    initHero3DCanvas();
    init3DCodeStudio();
    initAvatar3DTilt();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
