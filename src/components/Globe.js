import React, { useEffect, useRef } from "react";

// The globe at the top of the home page: peers spread over a sphere, each
// joined to its nearest neighbours, turning slowly in 3D. Now and then a
// signal hops from peer to peer along the links. With reduced motion it is
// drawn once and stays still, and it rests while it is off screen.

const PEERS = 110;
const LINKS_PER_PEER = 3;
// Radians a second: one turn in about 45 seconds.
const TURN_PER_SECOND = 0.14;
// Tipped toward the viewer, so the top of the globe shows.
const TILT = 0.38;
// How far the eye is from the centre, in globe radii. Nearer peers look bigger.
const CAMERA = 4;
const SIGNALS = 3;
const HOP_MS = 1100;
const HOPS_PER_TRIP = 8;
const INK = "17, 24, 39";
const BLUE = "21, 149, 237";

// The same globe on every load.
function seeded(seed) {
  let state = seed;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function makeGlobe() {
  const random = seeded(7);
  const golden = Math.PI * (3 - Math.sqrt(5));
  const peers = [];
  for (let i = 0; i < PEERS; i++) {
    // Spread evenly, then nudged a little so it looks grown, not printed.
    const y = 1 - ((i + 0.5) / PEERS) * 2;
    const ring = Math.sqrt(1 - y * y);
    const angle = golden * i;
    const point = [
      Math.cos(angle) * ring + (random() - 0.5) * 0.12,
      y + (random() - 0.5) * 0.12,
      Math.sin(angle) * ring + (random() - 0.5) * 0.12,
    ];
    const length = Math.hypot(...point);
    peers.push(point.map((value) => value / length));
  }

  const links = [];
  const neighbours = peers.map(() => []);
  const seen = new Set();
  peers.forEach((a, i) => {
    peers
      .map((b, j) => [j, (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2])
      .filter(([j]) => j !== i)
      .sort((x, y) => x[1] - y[1])
      .slice(0, LINKS_PER_PEER)
      .forEach(([j]) => {
        const key = Math.min(i, j) * PEERS + Math.max(i, j);
        if (seen.has(key)) return;
        seen.add(key);
        links.push([i, j]);
        neighbours[i].push(j);
        neighbours[j].push(i);
      });
  });
  return { peers, links, neighbours };
}

function startTrip(globe, random) {
  const from = Math.floor(random() * globe.peers.length);
  const options = globe.neighbours[from];
  return { from, to: options[Math.floor(random() * options.length)], elapsed: 0, hops: 0 };
}

// Moves a signal on by ms. At each peer it goes on to a neighbour other than
// the one it came from, and after a few hops it starts again somewhere else.
function move(signal, ms, globe, random) {
  signal.elapsed += ms;
  while (signal.elapsed >= HOP_MS) {
    signal.elapsed -= HOP_MS;
    signal.hops += 1;
    if (signal.hops >= HOPS_PER_TRIP) {
      Object.assign(signal, startTrip(globe, random));
      continue;
    }
    const options = globe.neighbours[signal.to].filter((peer) => peer !== signal.from);
    const next = options.length ? options[Math.floor(random() * options.length)] : signal.from;
    signal.from = signal.to;
    signal.to = next;
  }
}

function draw(context, size, globe, turn, signals) {
  const radius = size * 0.44;
  const centre = size / 2;
  // Dots and dashes keep their size whatever the canvas size.
  const unit = size / 400;
  const cosTurn = Math.cos(turn);
  const sinTurn = Math.sin(turn);
  const cosTilt = Math.cos(TILT);
  const sinTilt = Math.sin(TILT);
  const points = globe.peers.map(([x, y, z]) => {
    const x1 = x * cosTurn + z * sinTurn;
    const z1 = z * cosTurn - x * sinTurn;
    const y2 = y * cosTilt - z1 * sinTilt;
    const z2 = y * sinTilt + z1 * cosTilt;
    const scale = CAMERA / (CAMERA - z2);
    return {
      x: centre + x1 * radius * scale,
      y: centre - y2 * radius * scale,
      // 0 at the back of the globe, 1 at the front.
      depth: (z2 + 1) / 2,
      scale,
    };
  });

  context.clearRect(0, 0, size, size);

  // Links, back to front, fading toward the back.
  context.lineWidth = Math.max(0.75, unit);
  context.setLineDash([3 * unit, 4 * unit]);
  const links = globe.links
    .map(([a, b]) => [a, b, (points[a].depth + points[b].depth) / 2])
    .sort((one, other) => one[2] - other[2]);
  for (const [a, b, depth] of links) {
    context.strokeStyle = `rgba(${INK}, ${0.06 + depth * 0.36})`;
    context.beginPath();
    context.moveTo(points[a].x, points[a].y);
    context.lineTo(points[b].x, points[b].y);
    context.stroke();
  }
  context.setLineDash([]);

  // Signals: the link they are on lights up, and a dot runs along it.
  for (const signal of signals) {
    const from = points[signal.from];
    const to = points[signal.to];
    const progress = signal.elapsed / HOP_MS;
    const eased = progress < 0.5 ? 2 * progress * progress : 1 - (-2 * progress + 2) ** 2 / 2;
    const depth = (from.depth + to.depth) / 2;
    context.strokeStyle = `rgba(${BLUE}, ${0.2 + depth * 0.6})`;
    context.lineWidth = 1.5 * unit;
    context.beginPath();
    context.moveTo(from.x, from.y);
    context.lineTo(to.x, to.y);
    context.stroke();
    const x = from.x + (to.x - from.x) * eased;
    const y = from.y + (to.y - from.y) * eased;
    context.fillStyle = `rgba(${BLUE}, ${0.35 + depth * 0.65})`;
    context.shadowColor = `rgba(${BLUE}, 0.8)`;
    context.shadowBlur = 8 * unit;
    context.beginPath();
    context.arc(x, y, 3 * unit, 0, Math.PI * 2);
    context.fill();
    context.shadowBlur = 0;
  }

  // Peers, back to front: smaller and fainter at the back.
  const order = points.map((_, i) => i).sort((i, j) => points[i].depth - points[j].depth);
  for (const i of order) {
    const point = points[i];
    context.fillStyle = `rgba(${INK}, ${0.18 + point.depth * 0.82})`;
    context.beginPath();
    context.arc(point.x, point.y, (1.1 + point.depth * 1.9) * point.scale * unit, 0, Math.PI * 2);
    context.fill();
  }
}

function Globe({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    // No canvas, as in tests or a very old browser: the space stays empty.
    const context = canvas && canvas.getContext && canvas.getContext("2d");
    if (!context) return undefined;

    const globe = makeGlobe();
    const random = seeded(11);
    const signals = Array.from({ length: SIGNALS }, (_, i) => {
      const signal = startTrip(globe, random);
      signal.elapsed = (i * HOP_MS) / SIGNALS;
      return signal;
    });
    const reduceMotion = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
    const still = () => Boolean(reduceMotion && reduceMotion.matches);
    let size = 0;
    let turn = 0.6;
    let frame = 0;
    let last = 0;
    let onScreen = true;

    const render = () => {
      if (size) draw(context, size, globe, turn, still() ? [] : signals);
    };
    const stop = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      last = 0;
    };
    const tick = (now) => {
      frame = 0;
      // A long gap, as after a pause, moves things on by one frame only.
      const ms = last ? Math.min(now - last, 50) : 0;
      last = now;
      turn += (ms / 1000) * TURN_PER_SECOND;
      for (const signal of signals) move(signal, ms, globe, random);
      render();
      schedule();
    };
    const schedule = () => {
      if (!frame && onScreen && !still() && !document.hidden) frame = requestAnimationFrame(tick);
    };
    const resize = () => {
      const box = canvas.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;
      size = box.width;
      canvas.width = Math.round(box.width * ratio);
      canvas.height = Math.round(box.width * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      render();
    };

    resize();
    schedule();

    const resizeObserver = window.ResizeObserver ? new ResizeObserver(resize) : null;
    if (resizeObserver) resizeObserver.observe(canvas);
    else window.addEventListener("resize", resize);

    const screenObserver = window.IntersectionObserver
      ? new IntersectionObserver(([entry]) => {
          onScreen = entry.isIntersecting;
          if (onScreen) schedule();
          else stop();
        })
      : null;
    if (screenObserver) screenObserver.observe(canvas);

    const onVisibility = () => (document.hidden ? stop() : schedule());
    document.addEventListener("visibilitychange", onVisibility);
    const onMotionChange = () => {
      stop();
      render();
      schedule();
    };
    if (reduceMotion && reduceMotion.addEventListener) reduceMotion.addEventListener("change", onMotionChange);

    return () => {
      stop();
      if (resizeObserver) resizeObserver.disconnect();
      else window.removeEventListener("resize", resize);
      if (screenObserver) screenObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      if (reduceMotion && reduceMotion.removeEventListener) reduceMotion.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`block aspect-square w-full ${className}`}
      role="img"
      aria-label="A turning globe of peers, each joined to the peers nearest it"
    />
  );
}

export default Globe;
