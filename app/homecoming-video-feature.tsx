"use client";

import { useEffect, useRef, useState } from "react";
import { useSiteLanguage } from "./language-controller";

const videoSrc = "https://images.fcwmelbourne.org/events/2026/spirits-homecoming/07-solidarity-video-messages.mp4";
const poster = "https://images.fcwmelbourne.org/events/2026/spirits-homecoming/08-solidarity-viedo-messages-still.webp";

export function HomecomingVideoFeature() {
  const { language } = useSiteLanguage();
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const english = language === "en";
  const title = english ? "Messages of congratulations and support for the Melbourne special screening" : "멜번 특별상영회를 위한 축하와 응원의 메시지";
  const label = english ? "Watch messages of congratulations and support" : "축하·응원 영상 보기";
  const copy = english
    ? "To mark the 10th anniversary of Spirits’ Homecoming, director Cho Jung-rae and others who share its message of remembrance and peace sent video messages to audiences in Melbourne. Their messages celebrate the screening and express warm support and solidarity for preserving the victims’ memories and protecting the Statue of Peace in Melbourne together."
    : "영화 《귀향》 개봉 10주년을 맞아, 조정래 감독님을 비롯해 기억과 평화의 메시지에 뜻을 함께하는 분들이 멜번 관객들에게 영상 메시지를 보내주셨습니다. 상영회를 축하하고, 피해자들의 기억과 멜버른 평화의 소녀상을 함께 지켜 가자는 따뜻한 응원과 연대의 마음을 담았습니다.";

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
        <img src={poster} alt="" loading="lazy" decoding="async" />
        <span className="homecoming-video-play" aria-hidden="true">▶</span>
      </button>
      <div className="homecoming-video-copy">
        <span className="initiative-type">{english ? "VIDEO MESSAGES" : "축하·응원 영상"}</span>
        <h4>{title}</h4>
        <p>{copy}</p>
        <p className="homecoming-video-contributors">
          {english ? "Video messages from: Director Cho Jung-rae, " : "영상 메시지를 보내주신 분들: 조정래 감독, "}
          {english ? "Kim Nam-joon, Member of the National Assembly" : "김남준 국회의원"}
          {english
            ? ", Kim Boo-mi (Myeongjamom), Fr David Kim Uk, Noh Jong-myeon (Member of the National Assembly), Park Chan-dae (Mayor of Incheon), Seo Mi-hwa (Member of the National Assembly), Baek Eun-jong (Representative of Voice of Seoul), Dr Sin Ji Jung (Lecturer in Korean Studies, University of Melbourne), Jeong Myeong-geun (Mayor of Hwaseong)"
            : ", 김부미(명자맘), 김욱 다윗 신부, 노종면 국회의원, 박찬대 인천광역시장, 서미화 국회의원, 백은종 서울의소리 대표, 정신지 멜버른대학교 한국학 강사, 정명근 화성특례시장"}
        </p>
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
