"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";

// Flip to true once real before/after photos are in /public/images/
// (before.jpg and after.jpg). Falls back to illustrative graphics if the
// files aren't there yet, so this is safe to flip early.
const USE_REAL_PHOTOS = false;

function DamagedPlanks() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#8a7a63" />
      {[0, 1, 2, 3, 4, 5].map((row) => (
        <g key={row}>
          <rect x="0" y={row * 50} width="400" height="48" fill={row % 2 === 0 ? "#7c6c56" : "#71624d"} />
          <rect x="0" y={row * 50 + 46} width="400" height="2" fill="#3f3527" opacity="0.6" />
        </g>
      ))}
      <path d="M40 40 L120 90 L90 140 L30 110 Z" fill="#4a3f30" opacity="0.55" />
      <path d="M200 60 Q230 100 210 150 Q180 170 190 120 Q170 90 200 60" fill="#5c4632" opacity="0.5" />
      <path d="M260 180 L340 210 L310 260 L250 230 Z" fill="#3f3527" opacity="0.5" />
      <circle cx="330" cy="70" r="26" fill="#6b5a45" opacity="0.6" />
      <line x1="10" y1="0" x2="60" y2="300" stroke="#3f3527" strokeWidth="3" opacity="0.4" />
      <line x1="300" y1="0" x2="260" y2="300" stroke="#3f3527" strokeWidth="3" opacity="0.4" />
    </svg>
  );
}

function HerringboneFloor() {
  const planks = [];
  const size = 34;
  for (let y = -size; y < 320; y += size) {
    for (let x = -size; x < 420; x += size * 2) {
      planks.push(
        <rect
          key={`a-${x}-${y}`}
          x={x}
          y={y}
          width={size * 1.9}
          height={size * 0.62}
          fill="#C08A4E"
          stroke="#a9723a"
          strokeWidth="1"
          transform={`rotate(45 ${x} ${y})`}
        />
      );
      planks.push(
        <rect
          key={`b-${x}-${y}`}
          x={x}
          y={y}
          width={size * 1.9}
          height={size * 0.62}
          fill="#d3a066"
          stroke="#a9723a"
          strokeWidth="1"
          transform={`rotate(-45 ${x + size} ${y + size})`}
        />
      );
    }
  }
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#e2b17c" />
      <g clipPath="url(#clip)">{planks}</g>
      <defs>
        <clipPath id="clip">
          <rect width="400" height="300" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const [photosFailed, setPhotosFailed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const showRealPhotos = USE_REAL_PHOTOS && !photosFailed;

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="focus-ring relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl shadow-2xl shadow-walnut/30"
        onPointerDown={(e) => {
          dragging.current = true;
          updateFromClientX(e.clientX);
        }}
        onPointerMove={(e) => {
          if (dragging.current) updateFromClientX(e.clientX);
        }}
        onPointerUp={() => (dragging.current = false)}
        onPointerLeave={() => (dragging.current = false)}
      >
        <div className="absolute inset-0">
          {showRealPhotos ? (
            <Image
              src="/images/after.jpg"
              alt="Floor after repair"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              onError={() => setPhotosFailed(true)}
            />
          ) : (
            <HerringboneFloor />
          )}
        </div>
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          {showRealPhotos ? (
            <Image
              src="/images/before.jpg"
              alt="Floor before repair"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              onError={() => setPhotosFailed(true)}
            />
          ) : (
            <DamagedPlanks />
          )}
        </div>

        <div className="absolute bottom-3 left-3 rounded-full bg-walnut/80 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-fieldstone">
          Before
        </div>
        <div className="absolute bottom-3 right-3 rounded-full bg-oak/90 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-walnut">
          After
        </div>

        <div
          className="absolute top-0 bottom-0 w-1 -translate-x-1/2 bg-fieldstone shadow-lg"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-fieldstone text-walnut shadow-xl">
            <span className="text-xs">↔</span>
          </div>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          aria-label="Drag to compare before and after"
        />
      </div>
      <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-wider text-grout">
        Drag to compare · illustrative example, swap in real job photos
      </p>
    </div>
  );
}
