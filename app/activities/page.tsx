import Link from "next/link";
import { ActivityFilter } from "./activity-filter";
import { Footer, Header, SectionEyebrow } from "../site-components";
import { activities, activityImagePaths } from "../activity-data";
import { PhotoCarousel } from "../photo-carousel";

const fieldCollections = [
  { title: "교육과 다음 세대", copy: "학생들이 역사와 인권의 의미를 배우고 자신의 언어로 생각을 나눈 현장입니다.", photos: [72, 73, 74].map((page) => ({ src: activityImagePaths[page], alt: "차세대 역사·인권 교육 활동 현장" })) },
  { title: "국제연대의 만남", copy: "서로 다른 지역과 배경의 사람들이 기억과 평화를 위해 연결된 순간을 모았습니다.", photos: [75, 76, 79, 81].map((page) => ({ src: activityImagePaths[page], alt: "FCWM 국제연대 활동 현장" })) },
  { title: "소녀상을 세우고 지키는 사람들", copy: "작가와의 만남부터 정기적인 관리까지, 소녀상을 지켜 온 손길의 기록입니다.", photos: [78, 82].map((page) => ({ src: activityImagePaths[page], alt: "평화의 소녀상 건립·관리 활동 기록" })) },
  { title: "지역사회와 함께", copy: "캠페인, 문화행사와 공동체 모임을 통해 시민들과 만난 다양한 현장입니다.", photos: [77, 80, 83, 84, 85, 86].map((page) => ({ src: activityImagePaths[page], alt: "FCWM 지역사회 활동 현장" })) },
];

function ActivityFieldGallery() {
  return (
    <section className="activity-field-gallery" aria-labelledby="activity-field-title">
      <header>
        <SectionEyebrow>사진으로 보는 활동의 현장</SectionEyebrow>
        <h2 id="activity-field-title">교육에서 연대와 관리까지</h2>
      </header>
      <div className="activity-field-collections">
        {fieldCollections.map((item) => (
          <article className="activity-field-collection" key={item.title}>
            <PhotoCarousel photos={item.photos} label={`${item.title} 사진`} />
            <div><h3>{item.title}</h3><p>{item.copy}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function ActivitiesPage() {
  return (
    <main>
      <Header />
      <section className="inner-page-hero activities-hero">
        <div className="inner-hero-copy">
          <SectionEyebrow>활동 기록</SectionEyebrow>
          <h1>평화의 소녀상을 향한<br />우리의 주요 활동</h1>
          <p>
            멜번 소녀상 연대는 평화와 정의, 역사적 기억이라는 공동의 가치를 바탕으로 다양한 배경과 세대의 사람들이 함께해 온 공동체입니다. 서로에 대한 존중과 돌봄으로 기쁨과 어려움을 함께 나누며, 피해자의 존엄을 지키고 기억을 다음 세대에 전하는 활동을 이어가고 있습니다.
          </p>
          <a
            className="text-link"
            href="https://www.instagram.com/fcwm_au/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram에서 최근 소식 보기 <span aria-hidden="true">{"\u2197\uFE0E"}</span>
          </a>
        </div>
        <div className="activities-hero-stats" aria-label="활동 기록 요약">
          <div><strong>2016—2026</strong><span>기록 범위</span></div>
          <div><strong>6</strong><span>기록 분류</span></div>
          <div><strong>{activities.length}</strong><span>대표 활동</span></div>
        </div>
      </section>

      <ActivityFieldGallery />
      <ActivityFilter />

      <section className="activity-closing">
        <p>현재 추진 중인 사업이 궁금하신가요?</p>
        <h2>활동 기록과 별도로,<br />목표가 분명한 장기 프로젝트를 소개합니다.</h2>
        <div>
          <Link className="button button-primary" href="/projects">
            프로젝트 보기 <span aria-hidden="true">›</span>
          </Link>
          <Link className="button button-secondary" href="/faq#contact">
            함께하기 <span aria-hidden="true">›</span>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
