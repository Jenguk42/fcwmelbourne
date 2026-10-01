import Link from "next/link";
import { DrivePhoto, Footer, Header, SectionEyebrow } from "../site-components";

export default function AboutPage() {
  return (
    <main className="about-page">
      <Header />
      <section className="about-hero">
        <div className="about-hero-copy">
          <SectionEyebrow>단체 소개</SectionEyebrow>
          <h1>
            기억에서 시작해
            <br />
            평화로 이어지는 연대
          </h1>
          <p>멜번 평화의 소녀상 연대</p>
        </div>
        <div className="about-emblem" aria-hidden="true">
          <img src="https://images.fcwmelbourne.org/site/headers/about-joined-hands.png" alt="" />
        </div>
      </section>

      <section className="about-introduction">
        <div className="about-intro-copy">
          <p className="about-lead">
            멜소연은 일본군 ‘위안부’ 피해자들의 명예와 존엄 회복을 지지하는 비영리단체입니다.
          </p>
          <p>
            2016년 11월 28일, 약 70명이 참석한 가운데 공식적인 첫 모임을 열고 활동을 시작했습니다.
            다문화 사회인 멜번의 여러 단체와 뜻을 모아 ‘평화의 소녀상’을 건립하기로 결의했으며,
            이를 계기로 기억과 연대의 여정을 이어오고 있습니다.
          </p>
          <p>
            우리는 과거의 잘못된 역사를 올바르게 인식하고 성찰하는 데서 출발합니다. 이를 바탕으로
            반전·평화·인권을 위한 활동을 지지하며, 역사가 왜곡되거나 같은 잘못이 되풀이되지 않도록
            노력하고 있습니다. 앞으로도 우리 사회의 정의와 평화를 지키기 위해 함께 힘을 모아
            나가겠습니다.
          </p>
        </div>
      </section>

      <section className="about-principles" aria-label="FCWM의 활동 방향">
        <article className="principle">
          <span>01</span>
          <h3>기억</h3>
          <p>피해자들의 목소리와 역사를 잊지 않고 다음 세대에 전합니다.</p>
        </article>
        <article className="principle">
          <span>02</span>
          <h3>교육</h3>
          <p>소녀상과 교육자료를 통해 인권과 평화의 가치를 함께 배웁니다.</p>
        </article>
        <article className="principle">
          <span>03</span>
          <h3>연대</h3>
          <p>지역사회와 국경을 넘어 정의와 존엄을 위한 행동을 이어 갑니다.</p>
        </article>
      </section>

      <section className="journey-section" id="our-journey">
        <div className="journey-heading">
          <SectionEyebrow>우리의 연혁과 성과</SectionEyebrow>
          <h2>멜번에<br />기억의 자리를 세우다</h2>
          <p>
            한 번의 건립으로 끝나지 않고, 기억을 교육과 연대의
            실천으로 이어 온 우리의 여정입니다.
          </p>
        </div>

        <div className="journey-timeline" aria-label="단체 연혁">
          <article className="timeline-entry timeline-entry-compact">
            <div className="timeline-year">
              <span>2016</span>
              <i aria-hidden="true" />
            </div>
            <div className="timeline-copy">
              <span className="timeline-kicker">첫 공식 모임</span>
              <h3>평화의 소녀상을 향한 여정의 시작</h3>
              <p>
                11월 28일, 약 70명이 함께한 첫 공식 모임을 열고 멜번
                지역사회와 평화의 소녀상을 건립하기 위한 뜻을
                모았습니다.
              </p>
            </div>
          </article>

          <article className="timeline-entry timeline-entry-featured">
            <div className="timeline-year">
              <span>2019</span>
              <i aria-hidden="true" />
            </div>
            <div className="timeline-copy">
              <span className="timeline-kicker">평화의 소녀상 건립</span>
              <h3>오랜 노력이 멜번의 기억으로 자리 잡다</h3>
              <p>
                2019년 11월 14일, 멜소위의 오랜 노력 끝에 멜번
                한인회관 앞에 ‘평화의 소녀상’이 세워졌습니다. 멜소위는
                건립 부지를 마련하고 현지 설치 비용을 부담하는 등 멜번
                현지의 건립 과정을 주도했으며, 화성시 평화의 소녀상
                건립추진위원회는 시민 모금과 바자회를 통해 소녀상 제작에
                힘을 보탰습니다.
              </p>
              <p>
                이날 제막식에는 일본군 ‘위안부’ 피해 생존자이자 호주의
                인권운동가였던 얀 루프 오헤른 할머니의 딸과 손녀도
                함께해, 멜번의 소녀상이 한국을 넘어 호주의 피해자
                역사와 국제적 연대를 잇는 기억의 자리임을 보여주었습니다.
              </p>
              <div className="unveiling-note">
                <span>2019. 11. 14</span>
                <p>멜번 평화의 소녀상 제막식</p>
              </div>
              <div className="unveiling-gallery" aria-label="2019년 멜번 평화의 소녀상 제막과 연대 활동 사진">
                <DrivePhoto
                  fileId="1pZrH5oqQSN-k4VR1iOI25S6Y3LjqwBHK"
                  alt="평화의 소녀상과 제막식 참석자 및 공연자"
                  caption="2019년 멜번 평화의 소녀상 제막식"
                  className="unveiling-photo-main"
                  eager
                />
                <DrivePhoto
                  fileId="1M9VZOyDZBdF39-fFhfpXmd04CAZw0vmr"
                  alt="평화의 소녀상 앞에서 뜻을 기리는 제막식 참석자들"
                  caption="소녀상 앞에서 함께한 추모의 순간"
                />
                <DrivePhoto
                  fileId="1tOvYwKweYc-cJdgSd3io-NgNfJQaipsZ"
                  alt="평화의 소녀상을 중심으로 모인 제막식 참석자 단체사진"
                  caption="제막 직후 함께한 지역사회"
                />
                <DrivePhoto
                  fileId="11CixOqDXVCHVuutE5B3LMohPl7y315Vz"
                  alt="흰 천을 걷어 평화의 소녀상을 공개하는 제막 순간"
                  caption="평화의 소녀상을 처음 공개한 순간"
                />
                <DrivePhoto
                  fileId="17ceEyG8kUv8zLiUf7HNMtlOWb-5Sk6wO"
                  alt="평화의 소녀상 제막식에서 열린 전통 문화공연"
                  caption="제막식 문화공연"
                />
                <DrivePhoto
                  fileId="1nn7zbVWDO_mrxILHEBy1uQstfknWnN6c"
                  alt="평화의 소녀상 옆 빈 의자에 앉아 연대의 뜻을 나누는 방문자"
                  caption="소녀상 방문과 연대"
                />
                <DrivePhoto
                  fileId="1AXuBaUkb5TkbrjaRD9EDsyyDkaopm1CZ"
                  alt="평화의 소녀상과 기억 캠페인 안내 팻말"
                  caption="소녀상과 함께 이어 간 기억 캠페인"
                />
              </div>
              <div className="source-panel" aria-label="평화의 소녀상 건립 관련 보도">
                <span>관련 보도</span>
                <div className="source-link-row">
                  <a
                    href="https://www.yna.co.kr/view/AKR20191113121700061"
                    target="_blank"
                    rel="noreferrer"
                  >
                    연합뉴스 건립 보도 <span aria-hidden="true">{"\u2197\uFE0E"}</span>
                  </a>
                  <a
                    href="https://www.yna.co.kr/view/AKR20191115093500061"
                    target="_blank"
                    rel="noreferrer"
                  >
                    연합뉴스 제막식 보도 <span aria-hidden="true">{"\u2197\uFE0E"}</span>
                  </a>
                  <a
                    href="https://english.hani.co.kr/arti/english_edition/e_international/917450.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    The Hankyoreh English <span aria-hidden="true">{"\u2197\uFE0E"}</span>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=kh3OWan1S3k"
                    target="_blank"
                    rel="noreferrer"
                  >
                    KTV 영상 보도 <span aria-hidden="true">{"\u2197\uFE0E"}</span>
                  </a>
                </div>
              </div>
            </div>
          </article>

          <article className="timeline-entry timeline-entry-compact">
            <div className="timeline-year">
              <span>현재</span>
              <i aria-hidden="true" />
            </div>
            <div className="timeline-copy">
              <span className="timeline-kicker">기억을 잇는 활동</span>
              <h3>차세대 교육과 지역사회 연대로</h3>
              <p>
                오늘날 멜소연은 소녀상을 관리하고, 견학·문화행사·지역사회
                협력 활동을 이어가고 있습니다.
              </p>
              <Link className="timeline-link" href="/activities">
                소녀상 건립 이후의 활동 보기 <span aria-hidden="true">{"\u2192\uFE0E"}</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="about-next">
        <p>FCWM 활동의 출발점이 된<br />평화의 소녀상을 만나보세요.</p>
        <Link className="button button-secondary" href="/statue">
          소녀상 소개 <span aria-hidden="true">›</span>
        </Link>
      </section>

      <Footer />
    </main>
  );
}
