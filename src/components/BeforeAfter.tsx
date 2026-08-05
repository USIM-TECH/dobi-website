"use client";

import React, { useState, useRef, useEffect } from "react";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export default function BeforeAfter({
  beforeImage,
  afterImage,
  beforeAlt = "Before stain treatment",
  afterAlt = "After stain treatment",
}: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  // Attach global mouseup / touchend events to stop dragging
  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-lg select-none cursor-ew-resize border border-gray-100"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* After Image (Full background) */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={afterImage}
          alt={afterAlt}
          className="w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute bottom-4 right-4 bg-lime text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm z-10">
          After
        </div>
      </div>

      {/* Before Image (Split overlay) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        {/* We need to keep the image full width inside a clipping container */}
        <div className="absolute top-0 left-0 w-full h-full" style={{ width: containerRef.current?.getBoundingClientRect().width || 500 }}>
          <img
            src={beforeImage}
            alt={beforeAlt}
            className="h-full object-cover pointer-events-none"
            style={{ width: containerRef.current?.getBoundingClientRect().width || "100%", maxWidth: "none" }}
          />
        </div>
        <div className="absolute bottom-4 left-4 bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm z-10">
          Before
        </div>
      </div>

      {/* Slider Line & Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-md"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-primary flex items-center justify-between px-1.5 shadow-lg border border-gray-100">
          <span className="text-[10px] font-bold">◀</span>
          <span className="text-[10px] font-bold">▶</span>
        </div>
      </div>
    </div>
  );
}
