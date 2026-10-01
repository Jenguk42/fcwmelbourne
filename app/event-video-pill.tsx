"use client";

import { useEffect, useRef, useState } from "react";
import { useSiteLanguage } from "./language-controller";

export function EventVideoPill({ src, poster }: { src: string; poster: string }) {
  const { language } = useSiteLanguage();
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const label = language === "en" ? "Watch messages of congratulations and support" : "축하·응원 영상 보기";

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      void videoRef.current?.play().catch(() => {});
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  const close = () => {
    videoRef.current?.pause();
    setOpen(false);
  };

  return (
    <>
      <button className="event-video-pill" type="button" aria-haspopup="dialog" onClick={() => setOpen(true)}>
        {label} <span aria-hidden="true">{"\u25B6\uFE0E"}</span>
      </button>
      <dialog
        ref={dialogRef}
        className="activity-video-dialog"
        aria-label={label}
        onClose={close}
        onCancel={(event) => { event.preventDefault(); close(); }}
        onClick={(event) => { if (event.target === event.currentTarget) close(); }}
      >
        <div className="activity-video-stage">
          <button className="activity-video-close" type="button" onClick={close} aria-label={language === "en" ? "Close video" : "영상 닫기"}>×</button>
          {open ? <video ref={videoRef} src={src} poster={poster} controls playsInline preload="metadata" aria-label={label} /> : null}
          <p>{label}</p>
        </div>
      </dialog>
    </>
  );
}
