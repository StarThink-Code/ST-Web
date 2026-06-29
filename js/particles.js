(function () {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const COUNT = 160;
  const ACCENT = '137, 243, 54';
  const WHITE  = '255, 255, 255';
  const PALE   = '190, 255, 130';

  let particles = [];
  let raf;

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function rand(min, max) {
    return min + Math.random() * (max - min);
  }

  function makeStar() {
    const roll = Math.random();
    let color, r, baseAlpha;

    if (roll > 0.55) {
      // green accent star
      color     = ACCENT;
      r         = rand(0.8, 2.4);
      baseAlpha = rand(0.35, 0.85);
    } else if (roll > 0.2) {
      // white star
      color     = WHITE;
      r         = rand(0.4, 1.6);
      baseAlpha = rand(0.15, 0.55);
    } else {
      // pale green-white dust
      color     = PALE;
      r         = rand(0.3, 1.0);
      baseAlpha = rand(0.08, 0.35);
    }

    const twinkleSpeed = rand(0.004, 0.018) * (Math.random() < 0.5 ? 1 : -1);

    return {
      x: rand(0, canvas.width),
      y: rand(0, canvas.height),
      r,
      vx: rand(-0.1, 0.1),
      vy: rand(-0.1, 0.1),
      color,
      alpha:      baseAlpha,
      minAlpha:   baseAlpha * 0.08,
      maxAlpha:   Math.min(baseAlpha * 1.15, 1),
      twinkleSpeed,
      glow: color === ACCENT && r > 1.4,
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: COUNT }, makeStar);
  }

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const p of particles) {
      // drift
      p.x += p.vx;
      p.y += p.vy;

      // wrap around edges
      if (p.x < -5)               p.x = canvas.width  + 5;
      else if (p.x > canvas.width  + 5) p.x = -5;
      if (p.y < -5)               p.y = canvas.height + 5;
      else if (p.y > canvas.height + 5) p.y = -5;

      // twinkle
      p.alpha += p.twinkleSpeed;
      if (p.alpha > p.maxAlpha || p.alpha < p.minAlpha) p.twinkleSpeed *= -1;

      // soft glow halo for brighter green stars
      if (p.glow) {
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
        grad.addColorStop(0, `rgba(${p.color}, ${p.alpha * 0.28})`);
        grad.addColorStop(1, `rgba(${p.color}, 0)`);
        ctx.beginPath();
        ctx.fillStyle = grad;
        ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
        ctx.fill();
      }

      // core dot
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
