"use client";

import { useRef, useState } from "react";

type CarouselPhoto = { src: string; alt: string; position?: string };

export function PhotoCarousel({ photos, label, className = "" }: { photos: CarouselPhoto[]; label: string; className?: string }) {
  const [active, setActive] = useState(0);
  const touchStart = useRef<number | null>(null);
  const count = photos.length;
  const move = (direction: number) => setActive((index) => (index + direction + count) % count);

  return (
    <div className={`photo-carousel ${className}`.trim()} data-photo-group aria-label={label} tabIndex={count > 1 ? 0 : undefined}
      onKeyDown={(event) => {
        if (count < 2) return;
        if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
        if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
      }}
      onTouchStart={(event) => { touchStart.current = event.changedTouches[0]?.clientX ?? null; }}
      onTouchEnd={(event) => {
        if (touchStart.current === null || count < 2) return;
        const distance = (event.changedTouches[0]?.clientX ?? touchStart.current) - touchStart.current;
        if (Math.abs(distance) > 40) move(distance > 0 ? -1 : 1);
        touchStart.current = null;
      }}>
      <div className="photo-carousel-track">
        {photos.map((photo, index) => (
          <div className={`photo-carousel-slide${index === active ? " is-active" : ""}`} aria-hidden={index !== active} key={photo.src}>
            <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" style={{ objectPosition: photo.position ?? "center" }} />
          </div>
        ))}
      </div>
      {count > 1 ? <>
        <button className="photo-carousel-arrow photo-carousel-prev" type="button" onClick={() => move(-1)} aria-label="이전 사진">‹</button>
        <button className="photo-carousel-arrow photo-carousel-next" type="button" onClick={() => move(1)} aria-label="다음 사진">›</button>
        <span className="photo-carousel-count" aria-live="polite">{active + 1} / {count}</span>
        <div className="photo-carousel-dots" aria-label="사진 선택">
          {photos.map((photo, index) => <button type="button" className={index === active ? "is-active" : ""} onClick={() => setActive(index)} aria-label={`${index + 1}번째 사진`} aria-current={index === active ? "true" : undefined} key={photo.src} />)}
        </div>
      </> : null}
    </div>
  );
}
