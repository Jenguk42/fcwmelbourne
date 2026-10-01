import { Footer, Header, SectionEyebrow } from "../site-components";
import { FAQList } from "./faq-list";

const categories = [
  { label: "단체·소녀상", href: "#statue" },
  { label: "방문·교육", href: "#visit" },
  { label: "행사·협력", href: "#collaboration" },
  { label: "참여·후원", href: "#participation" },
];

export default function FAQPage() {
  return (
    <main>
      <Header />
      <section className="inner-page-hero faq-hero">
        <div className="inner-hero-copy faq-hero-copy">
          <SectionEyebrow>자주 묻는 질문</SectionEyebrow>
          <h1>기억을 이해하는<br />첫 번째 질문들</h1>
          <p>
            평화의 소녀상과 FCWM의 활동, 교육 프로그램과<br />
            참여 방법에 대해 자주 묻는 질문을 모았습니다.
          </p>
        </div>
        <div className="about-emblem" aria-hidden="true">
          <img src="https://images.fcwmelbourne.org/site/headers/faq-open-book.png" alt="" />
        </div>
      </section>

      <nav className="faq-category-nav" aria-label="질문 분류">
        <span>질문 분류</span>
        <div>
          {categories.map((category) => (
            <a href={category.href} key={category.href}>{category.label}</a>
          ))}
        </div>
      </nav>

      <section className="faq-section">
        <FAQList />
      </section>

      <section className="faq-contact" id="contact">
        <div>
          <span>답을 찾지 못하셨나요?</span>
          <h2>궁금한 점을<br />직접 알려주세요.</h2>
        </div>
        <div className="faq-contact-copy">
          <p>
            방문·교육·협력·후원과 관련한 문의를 보내주세요.<br />
            확인 후 가능한 방법을 안내해 드리겠습니다.
          </p>
          <div className="faq-contact-actions">
            <a
              className="button button-primary"
              href="mailto:melbournestatue@gmail.com?subject=FCWM%20%EB%AC%B8%EC%9D%98"
            >
              이메일로 문의하기 <span aria-hidden="true">›</span>
            </a>
            <a
              className="button button-secondary"
              href="https://www.instagram.com/fcwm_au/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram에서 소식 보기 <span aria-hidden="true">{"\u2197\uFE0E"}</span>
            </a>
          </div>
          <a className="faq-email" href="mailto:melbournestatue@gmail.com">
            melbournestatue@gmail.com
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
