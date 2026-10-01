"use client";

import { useEffect, useRef, useState } from "react";
import { SectionEyebrow } from "./site-components";

const symbols = [
  {
    id: "hair",
    number: "01",
    title: "거칠게 잘린 머리카락",
    copy: "가족과 고향으로부터 강제로 단절된 피해자들의 삶을 상징합니다.",
  },
  {
    id: "face",
    number: "02",
    title: "의연한 표정",
    copy: "오랜 고통과 분노를 품고도 진실을 밝히고 문제를 해결하겠다는 굳은 의지를 나타냅니다.",
  },
  {
    id: "bird",
    number: "03",
    title: "어깨 위의 작은 새",
    copy: "자유와 평화를 상징하며, 세상을 떠난 피해자들과 오늘의 우리를 이어 줍니다.",
  },
  {
    id: "fists",
    number: "04",
    title: "꽉 쥔 두 손",
    copy: "끝내 포기하지 않고 진실과 정의를 향해 나아가는 피해자들의 용기와 결의를 담고 있습니다.",
  },
  {
    id: "feet",
    number: "05",
    title: "맨발과 들린 발꿈치",
    copy: "고향으로 돌아온 뒤에도 편히 정착하지 못했던 피해자들의 불안과 아픔을 보여 줍니다.",
  },
  {
    number: "06",
    id: "chair",
    title: "비어 있는 의자",
    copy: "세상을 떠난 피해자들을 위한 자리이자, 우리가 소녀와 나란히 앉아 그 역사를 함께 마주하도록 열어 둔 자리입니다.",
  },
];

export function StatueMeaningSection() {
  const [active, setActive] = useState<string | null>(null);
  const itemsRef = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 768px)");

    if (mobileQuery.matches) {
      return;
    }

    setActive("hair");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target instanceof HTMLElement) {
          setActive(visible.target.dataset.symbol ?? "hair");
        }
      },
      { rootMargin: "-34% 0px -44% 0px", threshold: [0.15, 0.45, 0.75] },
    );

    itemsRef.current.forEach((item) => item && observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const activeSymbol = symbols.find((symbol) => symbol.id === active);

  const showNextSymbol = () => {
    const currentIndex = symbols.findIndex((symbol) => symbol.id === active);
    const nextIndex = currentIndex < 0 ? 0 : (currentIndex + 1) % symbols.length;
    setActive(symbols[nextIndex].id);
  };

  return (
    <section
      className="statue-meaning-section"
      id="statue-meaning"
      aria-labelledby="statue-meaning-title"
    >
      <header className="meaning-heading">
        <SectionEyebrow>평화의 소녀상</SectionEyebrow>
        <h2 id="statue-meaning-title">소녀상은 무엇을 말하고 있을까요?</h2>
        <p>
          한 소녀의 모습에는 피해자들이 겪은 아픔과 지워지지 않은 기억,
          그리고 정의와 평화를 향한 의지가 담겨 있습니다.
        </p>
      </header>

      <div className="meaning-layout">
        <div className="meaning-visual" aria-label="평화의 소녀상 상징 안내">
          <div className="meaning-statue-wrap">
            <div className="meaning-shadow" aria-hidden="true" />
            <img
              className="meaning-statue"
              src="https://images.fcwmelbourne.org/site/home/peace-statue-web.png"
              alt="빈 의자와 함께 있는 평화의 소녀상"
            />
            {symbols.map((symbol) => (
              <span
                className={`symbol-point symbol-point-${symbol.id}${active === symbol.id ? " is-active" : ""}`}
                key={symbol.id}
                aria-hidden="true"
              />
            ))}
            <div className="mobile-symbol-points" aria-label="소녀상의 상징 선택">
              {symbols.map((symbol) => (
                <button
                  type="button"
                  className={`mobile-symbol-point mobile-symbol-point-${symbol.id}${active === symbol.id ? " is-active" : ""}`}
                  key={symbol.id}
                  aria-label={`${symbol.number} ${symbol.title}`}
                  aria-pressed={active === symbol.id}
                  onClick={() => setActive(symbol.id)}
                >
                  <span>{symbol.number}</span>
                </button>
              ))}
            </div>
          </div>
          <p className="meaning-caption">
            <span className="desktop-caption">소녀상에 담긴 이야기를 천천히 만나보세요.</span>
            <span className="mobile-caption">소녀상의 각 부분을 눌러 그 안에 담긴 의미를 살펴보세요.</span>
          </p>
        </div>

        <div className="meaning-steps">
          {symbols.map((symbol) => (
            <article
              className={`meaning-step${active === symbol.id ? " is-active" : ""}`}
              data-symbol={symbol.id}
              key={symbol.id}
              ref={(node) => {
                itemsRef.current[symbols.indexOf(symbol)] = node;
              }}
            >
              <span>{symbol.number}</span>
              <div>
                <h3>{symbol.title}</h3>
                <p>{symbol.copy}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mobile-meaning-card-wrap" aria-live="polite">
          {activeSymbol ? (
            <article className="mobile-meaning-card" key={activeSymbol.id}>
              <span>{activeSymbol.number}</span>
              <div>
                <h3>{activeSymbol.title}</h3>
                <p>{activeSymbol.copy}</p>
                <button type="button" onClick={showNextSymbol}>
                  다음 상징 보기 <span aria-hidden="true">{"\u2192\uFE0E"}</span>
                </button>
              </div>
            </article>
          ) : (
            <p className="mobile-meaning-prompt">
              이미지 위의 번호를 터치해 보세요.
            </p>
          )}
        </div>
      </div>

    </section>
  );
}
