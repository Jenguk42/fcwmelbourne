"use client";

import { useEffect, useRef, useState } from "react";

type ActivityVideoProps = {
  src: string;
  poster: string;
  title: string;
};

export function ActivityVideo({ src, poster, title }: ActivityVideoProps) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      void videoRef.current?.play().catch(() => { /* Playback controls remain available if autoplay is blocked. */ });
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
      <button className="activity-video-pill" type="button" onClick={() => setOpen(true)} aria-haspopup="dialog">
        연대 메시지 영상 보기 <span aria-hidden="true">{"\u25B6\uFE0E"}</span>
      </button>
      <dialog ref={dialogRef} className="activity-video-dialog" aria-label={title} onClose={() => { videoRef.current?.pause(); setOpen(false); }} onCancel={(event) => { event.preventDefault(); close(); }} onClick={(event) => { if (event.target === event.currentTarget) close(); }}>
        <div className="activity-video-stage">
          <button className="activity-video-close" type="button" onClick={close} aria-label="영상 닫기">×</button>
          {open ? <video ref={videoRef} src={src} poster={poster} controls playsInline preload="metadata" aria-label={title} /> : null}
          <p>{title}</p>
        </div>
      </dialog>
    </>
  );
}
