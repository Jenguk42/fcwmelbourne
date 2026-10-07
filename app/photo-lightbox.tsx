"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const photoSelector = [".home-activity-collage img", ".screening-feature img", ".cmta-feature img", ".activity-field-gallery img", ".activity-card-media img", ".statue-journey-photos img", ".global-project-gallery img", ".event-photo-grid img", ".initiative-copy-photo img", ".project-photo-gallery img", ".site-photo img"].join(",");
type PhotoDetail = { src: string; alt: string; caption: string };

function getCaption(img: HTMLImageElement) {
  return img.closest("figure")?.querySelector("figcaption")?.textContent?.trim() || img.closest("article")?.querySelector("h3, h4")?.textContent?.trim() || img.alt || "FCWM 활동 기록";
}

function collectPhotos(clicked: HTMLImageElement): PhotoDetail[] {
  const group = clicked.closest<HTMLElement>("[data-photo-group]");
  const images = group ? Array.from(group.querySelectorAll<HTMLImageElement>("img")).filter((img) => !img.closest(".activity-card-video")) : [clicked];
  return images.map((img) => ({ src: img.currentSrc || img.src, alt: img.alt || getCaption(img), caption: getCaption(img) }));
}

export function PhotoLightbox() {
  const [photos, setPhotos] = useState<PhotoDetail[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const active = activeIndex === null ? null : photos[activeIndex];

  useEffect(() => {
    const prepare = () => document.querySelectorAll<HTMLImageElement>(photoSelector).forEach((img) => {
      if (img.closest(".activity-card-video")) return;
      const hidden = Boolean(img.closest(".photo-carousel-slide[aria-hidden='true']"));
      img.tabIndex = hidden ? -1 : 0;
      img.setAttribute("role", "button");
      img.setAttribute("aria-label", `${img.alt || "활동 사진"} 자세히 보기`);
    });
    const open = (img: HTMLImageElement) => {
      const nextPhotos = collectPhotos(img);
      const src = img.currentSrc || img.src;
      const index = nextPhotos.findIndex((item) => item.src === src);
      setPhotos(nextPhotos);
      setActiveIndex(index >= 0 ? index : 0);
    };
    const onClick = (event: MouseEvent) => {
      const img = (event.target as Element | null)?.closest<HTMLImageElement>(photoSelector);
      if (img && !img.closest(".activity-card-video")) { event.preventDefault(); open(img); }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      const img = (event.target as Element | null)?.closest<HTMLImageElement>(photoSelector);
      if (img && !img.closest(".activity-card-video") && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); open(img); }
    };
    prepare();
    const observer = new MutationObserver(prepare);
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["aria-hidden"] });
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKeyDown);
    return () => { observer.disconnect(); document.removeEventListener("click", onClick); document.removeEventListener("keydown", onKeyDown); };
  }, []);

  useEffect(() => {
    if (!active) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") setActiveIndex((index) => index === null ? null : (index + 1) % photos.length);
      if (event.key === "ArrowLeft") setActiveIndex((index) => index === null ? null : (index - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", onKeyDown); };
  }, [active, photos.length]);

  const position = useMemo(() => activeIndex === null ? "" : `${activeIndex + 1} / ${photos.length}`, [activeIndex, photos.length]);
  if (!active) return null;
  return <div className="photo-lightbox" role="dialog" aria-modal="true" aria-label="활동 사진 자세히 보기" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveIndex(null); }}>
    <button ref={closeButton} className="photo-lightbox-close" type="button" onClick={() => setActiveIndex(null)} aria-label="사진 닫기">×</button>
    <div className="photo-lightbox-stage"><img src={active.src} alt={active.alt} /><div className="photo-lightbox-caption"><p>{active.caption}</p><span>{position}</span></div></div>
    {photos.length > 1 ? <><button className="photo-lightbox-nav photo-lightbox-prev" type="button" onClick={() => setActiveIndex((activeIndex - 1 + photos.length) % photos.length)} aria-label="이전 사진">‹</button><button className="photo-lightbox-nav photo-lightbox-next" type="button" onClick={() => setActiveIndex((activeIndex + 1) % photos.length)} aria-label="다음 사진">›</button></> : null}
  </div>;
}
