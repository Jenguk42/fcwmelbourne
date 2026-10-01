"use client";

import { useState } from "react";

const posters = {
  ko: {
    src: "https://images.fcwmelbourne.org/events/2026/spirits-homecoming/05-event-poster-ko.webp",
    alt: "귀향 10주년 기념 멜번 특별상영회 한국어 포스터 — 2026년 9월 12일 토요일 오후 6시, Library at The Dock",
    label: "한국어",
  },
  en: {
    src: "https://images.fcwmelbourne.org/events/2026/spirits-homecoming/06-event-poster-en.webp",
    alt: "Spirits’ Homecoming 10th Anniversary Melbourne special screening English poster — Saturday 12 September 2026 at 6:00 PM, Library at The Dock",
    label: "English",
  },
} as const;

type PosterLanguage = keyof typeof posters;

export function ScreeningPosterSwitcher() {
  const [language, setLanguage] = useState<PosterLanguage>("ko");
  const poster = posters[language];

  return (
    <div className="screening-poster-viewer">
      <div className="screening-poster-tabs" aria-label="포스터 언어 선택">
        {(Object.keys(posters) as PosterLanguage[]).map((key) => (
          <button
            key={key}
            type="button"
            className={language === key ? "is-active" : undefined}
            aria-pressed={language === key}
            onClick={() => setLanguage(key)}
          >
            {posters[key].label}
          </button>
        ))}
      </div>

      <figure className="screening-poster">
        <img
          key={language}
          src={poster.src}
          alt={poster.alt}
          width={1200}
          height={1698}
        />
      </figure>
    </div>
  );
}
