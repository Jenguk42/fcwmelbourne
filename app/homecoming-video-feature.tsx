"use client";

import { useEffect, useRef, useState } from "react";
import { useSiteLanguage } from "./language-controller";

const videoSrc = "https://images.fcwmelbourne.org/events/2026/spirits-homecoming/07-solidarity-video-messages.mp4";
const poster = "https://images.fcwmelbourne.org/events/2026/spirits-homecoming/05-event-poster-ko.webp";

export function HomecomingVideoFeature() {
  const { language } = useSiteLanguage();
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const english = language === "en";
  const title = english ? "Messages of congratulations and solidarity" : "함께 보내온 축하와 응원의 메시지";
  const label = english ? "Watch messages of congratulations and support" : "축하·응원 영상 보기";
  const copy = english
    ? "Supporters sent their congratulations on the screening of Spirits’ Homecoming, sharing a commitment to honour the survivors’ memories and protect the Statue of Peace in Melbourne together."
    : "《귀향》 상영회를 축하하며, 피해자들의 기억과 멜버른 평화의 소녀상을 함께 지켜 가자는 응원의 마음을 전해 왔습니다.";

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      void videoRef.current?.play().catch(() => {});
    } else if (!open && dialog.open) dialog.close();
  }, [open]);

  const close = () => { videoRef.current?.pause(); setOpen(false); };

  return (
    <section className="homecoming-video-feature" aria-label={title}>
      <button type="button" className="homecoming-video-preview" aria-label={label} aria-haspopup="dialog" onClick={() => setOpen(true)}>
        <video src={`${videoSrc}#t=1`} poster={poster} muted playsInline preload="metadata" aria-hidden="true" tabIndex={-1} />
        <span className="homecoming-video-play" aria-hidden="true">▶</span>
      </button>
      <div className="homecoming-video-copy">
        <span className="initiative-type">{english ? "VIDEO MESSAGES" : "축하·응원 영상"}</span>
        <h4>{title}</h4>
        <p>{copy}</p>
        <div className="source-link-row">
          <button type="button" className="event-video-pill" aria-haspopup="dialog" onClick={() => setOpen(true)}>{label} <span aria-hidden="true">▶</span></button>
        </div>
      </div>
      <dialog ref={dialogRef} className="activity-video-dialog" aria-label={label} onClose={close} onCancel={(event) => { event.preventDefault(); close(); }} onClick={(event) => { if (event.target === event.currentTarget) close(); }}>
        <div className="activity-video-stage">
          <button className="activity-video-close" type="button" onClick={close} aria-label={english ? "Close video" : "영상 닫기"}>×</button>
          {open ? <video ref={videoRef} src={videoSrc} poster={poster} controls playsInline preload="metadata" aria-label={label} /> : null}
          <p>{label}</p>
        </div>
      </dialog>
    </section>
  );
}
