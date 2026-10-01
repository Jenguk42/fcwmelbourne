"use client";

import { useState } from "react";

const groups = [
  {
    id: "statue",
    eyebrow: "01",
    title: "단체·소녀상",
    questions: [
      {
        question: "평화의 소녀상은 무엇을 의미하나요?",
        answer: "평화의 소녀상은 일본군 ‘위안부’ 피해자들의 고통과 용기, 그리고 아직 완전히 회복되지 못한 정의를 기억하는 상징입니다. 동시에 전쟁과 성폭력이 다시 반복되지 않기를 바라는 평화의 메시지를 담고 있습니다.",
        href: "/statue#statue-meaning",
        linkLabel: "소녀상의 상징 자세히 보기",
      },
      {
        question: "멜번 평화의 소녀상은 언제 세워졌나요?",
        answer: "멜번 평화의 소녀상은 2019년 11월 14일 빅토리아주 한인회관 앞에 건립되었습니다. 지역사회가 함께 세운 기억의 공간이자 인권과 평화를 배우는 교육의 장소입니다.",
      },
      {
        question: "FCWM은 어떤 활동을 하나요?",
        answer: "소녀상 관리와 교육, 문화행사, 지역·국제 협력 활동을 진행합니다. 개별 행사와 연도별 기록은 활동 기록 페이지에서 확인할 수 있습니다.",
        href: "/activities",
        linkLabel: "활동 기록 보기",
      },
      {
        question: "왜 이 역사를 지금도 기억해야 하나요?",
        answer: "이 역사는 전쟁과 폭력 속에서 인간의 존엄이 어떻게 훼손될 수 있는지를 보여주는 중요한 인권의 역사입니다. 기억은 피해자들의 존엄을 지키는 일이자 같은 폭력이 반복되지 않도록 하는 우리의 사회적 책임입니다.",
      },
    ],
  },
  {
    id: "visit",
    eyebrow: "02",
    title: "방문·교육",
    questions: [
      {
        question: "평화의 소녀상은 자유롭게 방문할 수 있나요?",
        answer: "멜번 평화의 소녀상은 빅토리아주 한인회관 앞에 있습니다. 단체 방문이나 교육 안내가 필요한 경우에는 방문 목적, 인원과 희망 일정을 이메일로 알려주세요.",
      },
      {
        question: "학교·단체 견학이나 교육 프로그램을 신청할 수 있나요?",
        answer: "네. 학교, 한글학교, 청소년 단체와 지역 커뮤니티의 교육 협력을 환영합니다. 소녀상 견학, 역사교육, 인권과 평화 관련 프로그램에 관심이 있다면 페이지 하단의 이메일을 통해 연락해 주세요.",
        href: "#contact",
        linkLabel: "견학·교육 문의하기",
      },
      {
        question: "행사 사진이나 교육자료를 사용할 수 있나요?",
        answer: "사용하려는 사진이나 자료, 사용 목적과 공개 범위를 이메일로 보내주세요. 자료별 저작권과 이용 조건을 확인한 뒤 안내해 드립니다.",
        href: "#contact",
        linkLabel: "자료 사용 문의하기",
      },
    ],
  },
  {
    id: "collaboration",
    eyebrow: "03",
    title: "행사·협력",
    questions: [
      {
        question: "FCWM과 공동행사나 프로젝트를 진행하려면 어떻게 하나요?",
        answer: "행사 또는 프로젝트의 목적, 대상, 예상 일정과 FCWM에 제안하고 싶은 역할을 간단히 정리해 이메일로 보내주세요. 교육, 문화예술, 연구와 지역사회 협력 제안을 검토합니다.",
        href: "#contact",
        linkLabel: "협력 제안 보내기",
      },
      {
        question: "언론 인터뷰나 연구자료를 요청할 수 있나요?",
        answer: "네. 매체 또는 소속기관, 취재·연구 주제, 필요한 자료와 희망 일정을 포함해 이메일로 문의해 주세요. 공개 가능한 기록과 담당자 연결 여부를 확인해 안내합니다.",
        href: "/resources",
        linkLabel: "공개 자료·보도 먼저 보기",
      },
      {
        question: "행사와 최근 활동 소식은 어디에서 확인하나요?",
        answer: "웹사이트의 활동 기록에서 주요 활동을 연도별로 볼 수 있고, 최근 공지와 현장 소식은 FCWM 공식 Instagram에서 확인할 수 있습니다.",
        href: "/activities",
        linkLabel: "활동 기록 보기",
      },
    ],
  },
  {
    id: "participation",
    eyebrow: "04",
    title: "참여·후원",
    questions: [
      {
        question: "자원봉사자로 참여할 수 있나요?",
        answer: "네. 행사 지원, 번역, 교육자료 제작, 홍보, 기록 정리와 커뮤니티 연결 등 다양한 방식으로 함께하실 수 있습니다. 관심 분야와 가능한 시기를 이메일로 알려주세요.",
        href: "#contact",
        linkLabel: "참여 문의하기",
      },
      {
        question: "후원금이나 물품을 기부할 수 있나요?",
        answer: "후원 목적과 방법은 진행 중인 활동에 따라 달라질 수 있습니다. 후원을 원하시면 페이지 하단의 이메일로 먼저 문의해 주세요. 현재 필요한 지원과 가능한 절차를 안내해 드립니다.",
        href: "#contact",
        linkLabel: "후원 문의하기",
      },
    ],
  },
];

export function FAQList() {
  const [openQuestion, setOpenQuestion] = useState("statue-0");

  return (
    <div className="faq-list">
      {groups.map((group, groupIndex) => (
        <section className="faq-group" id={group.id} key={group.id}>
          <div className="faq-group-heading">
            <span>{group.eyebrow}</span>
            <h2>{group.title}</h2>
          </div>
          <div className="faq-group-questions">
            {group.questions.map((item, index) => {
              const key = `${group.id}-${index}`;
              const isOpen = openQuestion === key;
              const questionNumber = groups
                .slice(0, groupIndex)
                .reduce((total, previousGroup) => total + previousGroup.questions.length, index + 1);
              return (
                <article className={`faq-item${isOpen ? " is-open" : ""}`} key={item.question}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${key}`}
                      onClick={() => setOpenQuestion(isOpen ? "" : key)}
                    >
                      <span className="faq-number">{String(questionNumber).padStart(2, "0")}</span>
                      <span>{item.question}</span>
                      <i aria-hidden="true">{isOpen ? "−" : "+"}</i>
                    </button>
                  </h3>
                  <div className="faq-answer" id={`faq-answer-${key}`} aria-hidden={!isOpen}>
                    <div className="faq-answer-inner">
                      <div className="faq-answer-content">
                        <p>{item.answer}</p>
                        {item.href && (
                          <a href={item.href}>
                            {item.linkLabel} <span aria-hidden="true">{"\u2192\uFE0E"}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
