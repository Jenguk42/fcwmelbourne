import Link from "next/link";
import { Footer, Header, SectionEyebrow } from "../site-components";
import { StatueMeaningSection } from "../statue-meaning";

export default function StatuePage() {
  return (
    <main className="statue-page">
      <Header />

      <section className="about-hero statue-page-hero">
        <div className="about-hero-copy">
          <SectionEyebrow>소녀상 소개</SectionEyebrow>
          <h1>
            한 소녀의 모습에 담긴
            <br />
            끝나지 않은 이야기
          </h1>
          <Link className="text-link statue-journey-link" href="/about#our-journey">
            건립 과정과 FCWM의 여정 보기 <span aria-hidden="true">{"\u2192\uFE0E"}</span>
          </Link>
        </div>
        <div className="about-emblem" aria-hidden="true">
          <img src="https://images.fcwmelbourne.org/site/headers/statue-butterfly-line.png" alt="" />
        </div>
      </section>

      <section className="statue-introduction">
        <div className="statue-introduction-lead">
          <div className="statue-intro-copy">
            <p className="statue-intro-lead">
              평화의 소녀상은 일본군 ‘위안부’ 피해자들의 아픔과 용기,
              그리고 정의로운 해결을 향한 염원을 기억하는 공공기념물입니다.
            </p>
            <p>
              소녀상은 과거의 피해를 기억하는 데 머물지 않습니다. 전쟁과
              폭력으로 인간의 존엄이 훼손되는 일이 되풀이되지 않도록 오늘의
              우리에게 질문을 건네고, 인권과 평화를 위한 연대를 이어 줍니다.
            </p>
            <p className="statue-intro-history">
              2019년 11월 14일, 멜번 한인회관 앞에 평화의 소녀상이
              세워졌습니다. 멜번 소녀상 건립위원회와 지역사회가 함께 만든
              이 자리는 한국을 넘어 호주의 피해자 역사와 국제적 연대를
              잇는 기억의 공간입니다.
            </p>
          </div>
        </div>
      </section>

      <StatueMeaningSection />

      <section className="statue-education-section">
        <div>
          <SectionEyebrow>기억에서 교육으로</SectionEyebrow>
          <h2>소녀상 앞에서 시작되는<br />다음 세대의 대화</h2>
        </div>
        <div>
          <p>
            FCWM은 소녀상 견학, 교육자료, 기념행사와 문화 프로그램을 통해
            역사적 기억을 오늘의 인권·평화 교육으로 이어 갑니다.
          </p>
          <Link className="button button-primary" href="/activities">
            관련 활동 보기 <span aria-hidden="true">›</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
