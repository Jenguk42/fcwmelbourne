"use client";

import { useRef, useState } from "react";
import { ActivityVideo } from "./activity-video";

type CarouselPhoto = { src: string; alt: string; position?: string };

export function PhotoCarousel({ photos, label, className = "", video }: { photos: CarouselPhoto[]; label: string; className?: string; video?: { src: string; poster: string; title: string } }) {
  const [active, setActive] = useState(0);
  const touchStart = useRef<number | null>(null);
  const count = photos.length + (video ? 1 : 0);
  const move = (direction: number) => setActive((index) => (index + direction + count) % count);

  return (
    <div className={`photo-carousel ${className}`.trim()} data-photo-group aria-label={label} tabIndex={count > 1 ? 0 : undefined}
      onKeyDown={(event) => {
        if ((event.target as Element).closest("dialog")) return;
        if (count < 2) return;
        if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
        if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
      }}
      onTouchStart={(event) => { touchStart.current = (event.target as Element).closest("dialog") ? null : event.changedTouches[0]?.clientX ?? null; }}
      onTouchEnd={(event) => {
        if (touchStart.current === null || count < 2) return;
        const distance = (event.changedTouches[0]?.clientX ?? touchStart.current) - touchStart.current;
        if (Math.abs(distance) > 40) move(distance > 0 ? -1 : 1);
        touchStart.current = null;
      }}>
      <div className="photo-carousel-track">
        {video ? <div className={`photo-carousel-slide photo-carousel-video-slide${active === 0 ? " is-active" : ""}`} aria-hidden={active !== 0} inert={active !== 0}>
          <ActivityVideo {...video} />
        </div> : null}
        {photos.map((photo, index) => (
          <div className={`photo-carousel-slide${index + (video ? 1 : 0) === active ? " is-active" : ""}`} aria-hidden={index + (video ? 1 : 0) !== active} key={photo.src}>
            <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" style={{ objectPosition: photo.position ?? "center" }} />
          </div>
        ))}
      </div>
      {count > 1 ? <>
        <button className="photo-carousel-arrow photo-carousel-prev" type="button" onClick={() => move(-1)} aria-label="이전 사진">‹</button>
        <button className="photo-carousel-arrow photo-carousel-next" type="button" onClick={() => move(1)} aria-label="다음 사진">›</button>
        <span className="photo-carousel-count" aria-live="polite">{active + 1} / {count}</span>
        <div className="photo-carousel-dots" aria-label={video ? "영상 및 사진 선택" : "사진 선택"}>
          {video ? <button type="button" className={active === 0 ? "is-active" : ""} onClick={() => setActive(0)} aria-label="첫 번째 항목: 축하 영상" aria-current={active === 0 ? "true" : undefined} /> : null}
          {photos.map((photo, index) => <button type="button" className={index + (video ? 1 : 0) === active ? "is-active" : ""} onClick={() => setActive(index + (video ? 1 : 0))} aria-label={`${index + 1}번째 사진`} aria-current={index + (video ? 1 : 0) === active ? "true" : undefined} key={photo.src} />)}
        </div>
      </> : null}
    </div>
  );
}
