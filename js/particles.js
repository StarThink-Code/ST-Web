(function () {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const COUNT = 70;
  const MAX_DIST = 130;
  const ACCENT = '137, 243, 54';
  const WHITE = '255, 255, 255';

  let particles = [];
  let raf;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function rand(min, max) {
    return min + Math.random() * (max - min);
  }

  function makeParticle() {
    const isAccent = Math.random() > 0.4;
    return {
      x: rand(0, canvas.width),
      y: rand(0, canvas.height),
      r: rand(1.5, 3.5),
      vx: rand(-0.35, 0.35),
      vy: rand(-0.35, 0.35),
      color: isAccent ? ACCENT : WHITE,
      alpha: rand(0.15, 0.55),
      dalpha: rand(0.003, 0.008) * (Math.random() < 0.5 ? 1 : -1),
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: COUNT }, makeParticle);
  }

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < MAX_DIST) {
          const lineAlpha = (1 - d / MAX_DIST) * 0.12;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${ACCENT}, ${lineAlpha})`;
          ctx.lineWidth = 0.6;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // dots
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;

      // wrap
      if (p.x < -5) p.x = canvas.width + 5;
      else if (p.x > canvas.width + 5) p.x = -5;
      if (p.y < -5) p.y = canvas.height + 5;
      else if (p.y > canvas.height + 5) p.y = -5;

      // pulse
      p.alpha += p.dalpha;
      if (p.alpha > 0.55 || p.alpha < 0.1) p.dalpha *= -1;

      ctx.beginPath();
      ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    raf = requestAnimationFrame(tick);
  }

  window.addEventListener('resize', () => {
    cancelAnimationFrame(raf);
    resize();
    raf = requestAnimationFrame(tick);
  });

  init();
  tick();
})();
