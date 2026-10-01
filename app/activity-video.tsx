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
      void videoRef.current?.play();
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
      <button className="activity-card-video" type="button" onClick={() => setOpen(true)} aria-label={`${title} 축하 영상 재생`}>
        <img src={poster} alt={`${title} 축하 영상 스틸컷`} loading="lazy" decoding="async" />
        <span className="activity-video-play" aria-hidden="true">{"\u25B6\uFE0E"}</span>
        <span className="activity-video-label">축하 영상 보기</span>
      </button>
      <dialog ref={dialogRef} className="activity-video-dialog" onClose={() => { videoRef.current?.pause(); setOpen(false); }} onCancel={(event) => { event.preventDefault(); close(); }} onClick={(event) => { if (event.target === event.currentTarget) close(); }}>
        <div className="activity-video-stage">
          <button className="activity-video-close" type="button" onClick={close} aria-label="영상 닫기">×</button>
          <video ref={videoRef} src={src} poster={poster} controls playsInline preload="metadata" aria-label={title} />
          <p>{title}</p>
        </div>
      </dialog>
    </>
  );
}
