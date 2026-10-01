import Link from "next/link";
import { Footer, Header, SectionEyebrow } from "../site-components";

const globalProjectPhotos = [
  {
    src: "https://images.fcwmelbourne.org/events/2024/chinese-peace-statue-launch/02-group-photo.webp",
    alt: "멜번 한인회관 앞에 모인 Global Peace Statue Project 출범 행사 참석자들",
    className: "global-project-photo-main",
  },
  {
    src: "https://images.fcwmelbourne.org/events/2024/chinese-peace-statue-launch/04-speaker-cho.webp",
    alt: "Global Peace Statue Project 출범 행사에서 연설하는 참석자",
  },
  {
    src: "https://images.fcwmelbourne.org/events/2024/chinese-peace-statue-launch/05-appreciation-presentation.webp",
    alt: "Global Peace Statue Project 출범 행사 중 감사장을 전달하는 모습",
  },
  {
    src: "https://images.fcwmelbourne.org/events/2024/chinese-peace-statue-launch/06-speaker-kim.webp",
    alt: "Global Peace Statue Project 출범 행사에서 연설하는 참석자",
  },
];

const cmtaPhotos = [
  {
    src: "https://images.fcwmelbourne.org/events/2026/cmta/01-award-presentation.jpg",
    alt: "CAPA 대표가 CMTA 1등 수상자에게 상장을 전달하는 장면",
    caption: "CAPA 대표가 1등 수상자에게 상장을 전달하는 모습",
  },
  {
    src: "https://images.fcwmelbourne.org/events/2026/cmta/02-artist-presentation.jpg",
    alt: "전시 작품 앞에서 작품을 소개하는 발표자",
    caption: "전시 작품을 소개하는 발표자의 모습",
  },
  {
    src: "https://images.fcwmelbourne.org/events/2026/cmta/03-audience.jpg",
    alt: "사회자의 작품 소개를 경청하는 CMTA 관객들",
    caption: "작품 소개에 귀 기울이는 관객들",
  },
  {
    src: "https://images.fcwmelbourne.org/events/2026/cmta/07-audience-2.jpg",
    alt: "CMTA 전시회에 함께한 관객들",
    caption: "전시회에 함께한 관객들",
  },
  {
    src: "https://images.fcwmelbourne.org/events/2026/cmta/08-chinese-statue.jpg",
    alt: "CMTA 전시장에 전시된 중국 평화의 소녀상",
    caption: "전시장에 함께 전시된 중국 평화의 소녀상",
  },

];

const screeningPhotos = [
  {
    src: "https://images.fcwmelbourne.org/events/2026/spirits-homecoming/01-audience.jpg",
    alt: "귀향 상영을 앞두고 관객들로 가득 찬 Library at The Dock 공연장",
    caption: "상영을 앞두고 객석을 가득 메운 관객들",
  },
  {
    src: "https://images.fcwmelbourne.org/events/2026/spirits-homecoming/02-welcome-desk.jpg",
    alt: "귀향 상영회 입구 안내 데스크에서 관객을 맞이하는 스태프",
    caption: "입구 안내 데스크에서 관객을 맞이한 스태프",
  },
  {
    src: "https://images.fcwmelbourne.org/events/2026/spirits-homecoming/04-photo-zone.jpg",
    alt: "귀향 상영회 포토존에서 기념사진을 촬영한 관객들",
    caption: "포토존에서 기억과 연대의 메시지를 나눈 관객들",
  },
  {
    src: "https://images.fcwmelbourne.org/events/2026/spirits-homecoming/03-paper-planes.jpg",
    alt: "상영 후 노란 종이비행기를 함께 날리는 관객들",
    caption: "기억과 평화의 메시지를 담은 종이비행기를 함께 날리는 관객들",
  },
];

const memorialDayPhotos = [
  {
    src: "https://images.fcwmelbourne.org/events/2026/girim-day/05-kim-seo-kyung-speech.webp",
    alt: "기림의 날 행사에서 발언하는 김서경 작가",
    caption: "기림의 날을 맞아 초청한 ‘평화의 소녀상’ 공동 제작자인 김서경 작가",
  },
  {
    src: "https://images.fcwmelbourne.org/events/2026/girim-day/06-song-of-cell-no-8.webp",
    alt: "기림의 날 행사에서 8호 감방의 노래를 부르는 멜소연 회원",
    caption: "‘8호 감방의 노래’를 부르는 멜소연 회원",
  },
  {
    src: "https://images.fcwmelbourne.org/events/2026/girim-day/07-group-photo.webp",
    alt: "기림의 날 행사 참가자들의 단체 사진",
    caption: "행사 후 함께 찍은 단체 사진",
  },
];

const communityInitiatives = [
  {
    number: "01",
    date: "12 September 2026",
    title: "《귀향》 10주년 멜번 특별상영회",
    eyebrow: "FILM SCREENING",
    copy: "영화 《귀향》을 통해 일본군 ‘위안부’ 피해자들의 아픔과 목소리를 지역사회와 나누고, 전쟁과 성폭력의 역사를 함께 기억하는 자리를 마련했습니다.",
    detail: "Library at The Dock · Docklands",
  },
  {
    number: "02",
    date: "15 August 2026",
    title: "광복절과 일본군 ‘위안부’ 피해자 기림의 날",
    eyebrow: "REMEMBRANCE",
    copy: "광복의 의미를 되새기고 일본군 ‘위안부’ 피해자들의 용기와 삶을 기억하며, 다음 세대와 함께 역사와 평화의 가치를 나누었습니다.",
    detail: "빅토리아주 한인회관",
  },
];

function EventPhotoGallery({ photos, label, groupPhotos = true }: { photos: typeof cmtaPhotos; label: string; groupPhotos?: boolean }) {
  return (
    <div className="event-photo-grid" data-photo-group={groupPhotos ? "" : undefined} aria-label={`${label} 사진`}>
      {photos.map((photo, index) => (
        <figure className={index === 0 ? "event-photo-main" : ""} key={photo.src}>
          <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
          <figcaption>{photo.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="projects-page projects-page-refined">
      <Header />
      <section className="inner-page-hero projects-hero">
        <div className="inner-hero-copy">
          <SectionEyebrow>프로젝트</SectionEyebrow>
          <h1>기억을 지키고,<br />지역사회와 연결합니다</h1>
          <p>
            FCWM은 소녀상을 통한 국제연대와 지역사회의 역사 인식을
            넓히는 두 가지 프로젝트를 중심으로 활동합니다.
          </p>
        </div>
        <div className="about-emblem" aria-hidden="true">
          <img src="https://images.fcwmelbourne.org/site/headers/projects-peace-dove.png" alt="" />
        </div>
      </section>

      <section className="global-project global-project-first" id="global-peace-statue-project">
        <header className="global-project-heading">
          <div className="global-project-label">
            <span className="project-number global-project-number">PROJECT 01</span>
            <span>Global Peace Statue Project</span>
          </div>
          <h2>국경을 넘어<br />기억을 연결하다</h2>
          <p>
            전시 성폭력 피해자들의 기억을 특정 국가의 역사에 한정하지
            않고, 다양한 공동체가 함께 기억하고 연대할 가능성을 모색한
            프로젝트입니다.
          </p>
        </header>

        <div className="global-project-body">
          <div className="global-project-gallery" data-photo-group aria-label="Global Peace Statue Project 출범 행사 사진">
            {globalProjectPhotos.map((photo) => (
              <figure className={photo.className ?? ""} key={photo.src}>
                <img src={photo.src} alt={photo.alt} />
              </figure>
            ))}
            <p className="global-project-gallery-note">
              <time dateTime="2024-01-29">29 January 2024</time>
              <span>Australia Chinese Peace Statue Project 출범 행사 · Melbourne</span>
            </p>
          </div>
          <div className="global-project-steps">
            <article>
              <span>01</span>
              <h3>대화를 시작하다</h3>
              <p>2023년부터 CAPA와 다문화 공동체가 함께하는 평화기념사업의 방향을 논의했습니다.</p>
            </article>
            <article>
              <span>02</span>
              <h3>지역사회의 목소리를 듣다</h3>
              <p>2024년 공청회와 2025년 지방의원 면담을 통해 지역사회의 의견을 들었습니다.</p>
            </article>
            <article>
              <span>03</span>
              <h3>연대의 다음 길을 찾다</h3>
              <p>공동체 화합을 고려해 초기 계획을 조정했으며, 협력 관계는 향후 국제연대의 기반으로 이어지고 있습니다.</p>
            </article>
            <div className="source-panel global-source-panel" aria-label="Global Peace Statue Project 관련 자료">
              <span>관련 기록과 보도</span>
              <div className="source-link-row">
                <a href="https://cccav.org.au/successful-launch-of-australia-chinese-peace-statue-project-in-melbourne/" target="_blank" rel="noreferrer">
                  CCCAV 출범 기록 <span aria-hidden="true">{"\u2197\uFE0E"}</span>
                </a>
                <a href="https://www.abc.net.au/news/2025-08-31/australias-first-chinese-world-war-two-sex-slave-statue/105671016" target="_blank" rel="noreferrer">
                  ABC News <span aria-hidden="true">{"\u2197\uFE0E"}</span>
                </a>
                <a href="https://www.abc.net.au/chinese/2025-08-14/comfort-women-statues-reflect-sex-slavery-in-war/105620746" target="_blank" rel="noreferrer">
                  ABC Chinese <span aria-hidden="true">{"\u2197\uFE0E"}</span>
                </a>
                <a href="https://insidestory.org.au/commemorating-the-peace-or-remembering-the-war/" target="_blank" rel="noreferrer">
                  Inside Story 분석 <span aria-hidden="true">{"\u2197\uFE0E"}</span>
                </a>
              </div>
              <Link className="source-all-link" href="/resources#global-peace">
                관련 자료 모두 보기 <span aria-hidden="true">{"\u2192\uFE0E"}</span>
              </Link>
            </div>
          </div>
        </div>

        <article className="nested-initiative nested-initiative-dark">
          <EventPhotoGallery photos={cmtaPhotos} label="Connecting Memories Through Art 행사" />
          <div className="nested-initiative-copy">
            <span className="initiative-kicker">PROJECT 01 · 2026 INITIATIVE</span>
            <p className="initiative-meta">19 September 2026 · The Mezzanine, Brunswick</p>
            <h3>Connecting Memories Through Art</h3>
            <p>
              FCWM과 Chinese Australians for Peace Association이 공동으로 마련한 예술 전시입니다.
              다양한 배경의 예술가와 시민들이 전쟁의 기억, 인권과 평화에 관한 이야기를 작품으로 나누며
              공동체 간 연대를 넓혔습니다.
            </p>
            <a className="initiative-link initiative-link-light" href="https://connectingmemory.org/" target="_blank" rel="noreferrer">
              CMTA 웹사이트 보기 <span aria-hidden="true">{"\u2197\uFE0E"}</span>
            </a>
            <div className="cmta-media-links">
              <a className="initiative-link initiative-link-light" href="https://omn.kr/2jwk3" target="_blank" rel="noreferrer">
                오마이뉴스 보도 <span aria-hidden="true">{"\u2197\uFE0E"}</span>
              </a>
              <a className="initiative-link initiative-link-light" href="https://www.artkoreatv.com/news/articleView.html?idxno=104652" target="_blank" rel="noreferrer">
                아트코리아TV 보도 <span aria-hidden="true">{"\u2197\uFE0E"}</span>
              </a>
            </div>
          </div>
        </article>
      </section>

      <section className="community-project" aria-labelledby="community-project-title">
        <header className="community-project-heading">
          <div className="community-project-label">
            <span className="project-number">PROJECT 02</span>
            <span>Community Awareness &amp; Remembrance Project</span>
          </div>
          <h2 id="community-project-title">기억을 지역사회로<br />이어가다</h2>
          <p>
            일본군 ‘위안부’ 문제와 피해자들의 목소리를 한국 지역사회에 알리고,
            영화와 기념행사를 통해 역사를 함께 기억하는 자리를 만들어 갑니다.
          </p>
        </header>

        <div className="community-initiative-list">
          {communityInitiatives.map((initiative, index) => (
            <article
              className={`nested-initiative community-initiative${initiative.number === "01" ? " community-initiative-split-gallery" : ""}${index % 2 ? " community-initiative-reverse" : ""}`}
              data-photo-group={initiative.number === "01" ? "" : undefined}
              key={initiative.number}
            >
              {initiative.number === "01" ? (
                <div className="event-gallery-with-links">
                  <EventPhotoGallery photos={screeningPhotos.slice(0, 3)} label={initiative.title} groupPhotos={false} />
                  <div className="source-link-row screening-media-links">
                    <a href="https://www.sbs.com.au/language/korean/ko/podcast-episode/k-art-gwihyang-melbourne-aussiebrosquad/gj9xglt7i" target="_blank" rel="noreferrer">
                      SBS 한국어 보도 <span aria-hidden="true">{"\u2197\uFE0E"}</span>
                    </a>
                    <a href="https://www.topstarnews.net/news/articleView.html?idxno=16172128" target="_blank" rel="noreferrer">
                      톱스타뉴스 보도 <span aria-hidden="true">{"\u2197\uFE0E"}</span>
                    </a>
                    <a href="https://www.apej.kr/bbs/board.php?bo_table=news&wr_id=8090" target="_blank" rel="noreferrer">
                      아태경제저널 보도 <span aria-hidden="true">{"\u2197\uFE0E"}</span>
                    </a>
                  </div>
                </div>
              ) : (
                <EventPhotoGallery photos={memorialDayPhotos} label={initiative.title} />
              )}
              <div className="nested-initiative-copy">
                <span className="initiative-kicker">PROJECT 02 · INITIATIVE {initiative.number}</span>
                <p className="initiative-meta">{initiative.date} · {initiative.detail}</p>
                <span className="initiative-type">{initiative.eyebrow}</span>
                <h3>{initiative.title}</h3>
                <p>{initiative.copy}</p>
                {initiative.number === "01" && (
                  <figure className="initiative-copy-photo">
                    <img
                      src={screeningPhotos[3].src}
                      alt={screeningPhotos[3].alt}
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption>{screeningPhotos[3].caption}</figcaption>
                  </figure>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-cta">
        <div>
          <span>함께 만드는 평화</span>
          <h2>학교, 연구자, 예술가와 지역사회의<br />협력을 기다립니다.</h2>
        </div>
        <Link className="button button-primary" href="/faq#contact">
          협력 제안하기 <span aria-hidden="true">›</span>
        </Link>
      </section>
      <Footer />
    </main>
  );
}
