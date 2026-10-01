import Link from "next/link";
import { Footer, Header, SectionEyebrow } from "./site-components";

function HeroCopy() {
  return (
    <div className="hero-copy">
      <div className="eyebrow reveal reveal-1">
        <img
          className="eyebrow-butterfly"
          src="https://images.fcwmelbourne.org/site/graphics/butterflies/butterfly-01.png"
          alt=""
          aria-hidden="true"
        />
        <span>‘위안부’를 기억하며</span>
        <i />
      </div>
      <h1 id="hero-title" className="reveal reveal-2">
        Memory.
        <br />
        Dignity.
        <br />
        Solidarity.
      </h1>
      <div className="title-divider reveal reveal-3">
        <span />
        <img src="https://images.fcwmelbourne.org/site/graphics/butterflies/butterfly-03.png" alt="" aria-hidden="true" />
        <span />
      </div>
      <p className="hero-statement reveal reveal-4">
        과거를 기억하고 정의를 지키며,
        <br />
        더 평화로운 미래를 향해 함께 나아갑니다.
      </p>
      <div className="hero-actions reveal reveal-5">
        <Link className="button button-primary" href="/statue">
          소녀상 소개 <span aria-hidden="true">›</span>
        </Link>
        <Link className="button button-secondary" href="/about">
          단체 소개 <span aria-hidden="true">›</span>
        </Link>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="paper-glow" aria-hidden="true" />
      <picture>
        <source
          media="(min-width: 1025px)"
          srcSet="https://images.fcwmelbourne.org/site/home/botanicals/plants-left-desktop.png"
        />
        <img
          className="left-botanical"
          src="https://images.fcwmelbourne.org/site/home/botanicals/plants-left-mobile.png"
          alt=""
          aria-hidden="true"
        />
      </picture>
      <picture>
        <source
          media="(min-width: 1025px)"
          srcSet="https://images.fcwmelbourne.org/site/home/botanicals/plants-right-desktop.png"
        />
        <img
          className="right-botanical"
          src="https://images.fcwmelbourne.org/site/home/botanicals/plants-right-mobile.png"
          alt=""
          aria-hidden="true"
        />
      </picture>
      <div className="hero-stage">
        <div className="hero-inner">
          <div className="statue-shadow" aria-hidden="true" />
          <div className="statue-composition">
            <img
              className="hero-statue"
              src="https://images.fcwmelbourne.org/site/home/peace-statue-web.png"
              alt="빈 의자 옆에 앉아 있는 평화의 소녀상"
            />
            <img
              className="golden-lines"
              src="https://images.fcwmelbourne.org/site/home/golden-lines-web.png"
              alt=""
              aria-hidden="true"
            />
            <img
              className="shoulder-butterfly"
              src="https://images.fcwmelbourne.org/site/graphics/butterflies/butterfly-02.png"
              alt=""
              aria-hidden="true"
            />
          </div>
          <HeroCopy />
        </div>
      </div>
    </section>
  );
}

function HistorySection() {
  return (
    <section className="history-section" id="our-story">
      <div className="history-heading">
        <SectionEyebrow>기억해야 할 역사</SectionEyebrow>
        <h2>‘위안부’란 누구인가?</h2>
        <p className="history-lead">
          침묵 속에 묻혀 있던 목소리를 기억하는 일은 오늘의 정의와
          평화를 지키는 첫걸음입니다.
        </p>
      </div>

      <div className="history-layout">
        <aside className="history-facts" aria-label="주요 역사적 사실">
          <div>
            <strong>1932—1945</strong>
            <span>일본군 ‘위안부’ 제도가 운영된 시기</span>
          </div>
          <div>
            <strong>약 20만 명</strong>
            <span>아시아 11개국에서 희생된 것으로 추정되는 여성들</span>
          </div>
          <div>
            <strong>1991</strong>
            <span>김학순 할머니가 처음으로 공개 증언에 나선 해</span>
          </div>
        </aside>

        <div className="history-copy">
          <p>
            일본군 ‘위안부’ 제도는 1932년부터 1945년까지 일본군이
            계획하고 조직적으로 운영한 성노예 제도입니다. 아시아 여러
            지역의 수많은 여성이 강제로 동원되었으며, 생존자들은 전쟁이
            끝난 뒤에도 오랜 세월 신체적·정신적 고통과 사회적 침묵 속에서
            살아야 했습니다.
          </p>
          <p>
            1991년 김학순 할머니가 처음으로 피해 사실을 공개 증언한 이후,
            생존자들과 시민사회는 일본 정부에 진상 규명과 공식적인 사과,
            법적 책임을 요구해 왔습니다. 이 문제는 아직 끝나지 않은
            역사이며, 피해자들의 존엄과 명예를 회복하기 위한 노력도
            계속되고 있습니다.
          </p>
          <div className="source-link-row history-source-links">
            <a
              href="https://hrlibrary.umn.edu/commission/country52/53-add1.htm"
              target="_blank"
              rel="noreferrer"
            >
              UN 특별보고관 보고서 <span aria-hidden="true">{"\u2197\uFE0E"}</span>
            </a>
            <Link href="/resources#research">
              학술·연구자료 보기 <span aria-hidden="true">{"\u2192\uFE0E"}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="mission-section">
      <div className="mission-content">
        <SectionEyebrow>우리의 임무</SectionEyebrow>
        <h2>기억을 교육과<br />실천으로 이어갑니다</h2>
        <p>
          우리는 일본군 ‘위안부’ 피해자들의 존엄과 명예를 지키고, 그
          역사를 다음 세대에 전하기 위해 활동합니다. 기억을 교육과
          실천으로 이어가며 인권과 평화의 가치를 지역사회와 나누고
          있습니다.
        </p>
        <Link className="text-link" href="/about">
          단체에 대해 더 알아보기 <span aria-hidden="true">{"\u2192\uFE0E"}</span>
        </Link>
      </div>

      <div className="mission-work" aria-label="FCWM의 세 가지 활동 방식">
        <div className="work-area-grid">
          {workAreas.map((area) => (
            <article className="work-area-card" key={area.number}>
              <span>{area.number}</span>
              <h3>{area.title}</h3>
              <p>{area.copy}</p>
            </article>
          ))}
        </div>

      </div>

      <article className="home-achievement">
        <div className="achievement-year" aria-hidden="true">
          <span>2019</span>
          <small>멜번</small>
        </div>
        <div className="achievement-copy">
          <span className="achievement-label">우리의 주요 성과</span>
          <h3>멜번에 평화의 소녀상을 세웠습니다</h3>
          <p>
            지역사회와 함께 만든 기억의 자리는 오늘날 교육과
            인권·평화 활동으로 이어지고 있습니다.
          </p>
        </div>
      </article>

      <section className="home-activity-cta" aria-labelledby="home-activity-cta-title">
        <div className="home-activity-collage" data-photo-group aria-label="FCWM 주요 활동 사진">
          <figure className="home-activity-photo home-activity-photo-unveiling">
            <img src="https://images.fcwmelbourne.org/events/2019/peace-statue-unveiling/01-unveiling-group-photo.webp" alt="2019년 멜번 평화의 소녀상 제막식" loading="lazy" decoding="async" />
          </figure>
          <figure className="home-activity-photo home-activity-photo-school">
            <img src="https://images.fcwmelbourne.org/events/2019/suzanne-cory-high-school/01-education-and-fundraising.webp" alt="Suzanne Cory High School 교육 활동" loading="lazy" decoding="async" />
          </figure>
          <figure className="home-activity-photo home-activity-photo-festival">
            <img src="https://images.fcwmelbourne.org/events/2023/korea-festival/01-fcwm-booth.webp" alt="2023 Korea Festival FCWM 부스" loading="lazy" decoding="async" />
          </figure>
          <figure className="home-activity-photo home-activity-photo-forum">
            <img src="https://images.fcwmelbourne.org/events/2026/womens-voices-forum/01-forum-event.webp" alt="2026 국제 여성의 날 평화 포럼" loading="lazy" decoding="async" />
          </figure>
        </div>
        <div className="home-activity-cta-copy">
          <span>2016—2026</span>
          <h2 id="home-activity-cta-title">기억을 행동으로<br />이어온 시간</h2>
          <p>2016년부터 이어온 교육, 문화, 예술, 지역사회와 국제연대의 기록을 만나보세요.</p>
          <Link className="button button-primary" href="/activities">
            활동 기록 보기 <span aria-hidden="true">{"\u2192\uFE0E"}</span>
          </Link>
        </div>
      </section>
    </section>
  );
}

const workAreas = [
  {
    number: "01",
    title: "소녀상을 통한 교육",
    copy: "학생 견학과 교육자료로 소녀상이 품은 역사와 의미를 배웁니다.",
  },
  {
    number: "02",
    title: "문화로 여는 대화",
    copy: "영화 상영, 북콘서트와 도서 기증을 통해 더 많은 사람과 이야기를 나눕니다.",
  },
  {
    number: "03",
    title: "지역사회와의 연대",
    copy: "기념행사와 다문화·국제 협력을 통해 여러 공동체와 함께합니다.",
  },
];

export default function Home() {
  return (
    <main className="home-page">
      <Header overlay />
      <HeroSection />
      <HistorySection />
      <MissionSection />
      <Footer />
    </main>
  );
}
