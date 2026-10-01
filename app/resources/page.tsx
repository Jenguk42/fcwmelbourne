import { Footer, Header, SectionEyebrow } from "../site-components";

type Resource = {
  title: string;
  publisher: string;
  description: string;
  href: string;
  type: "공식 채널" | "기사" | "영상" | "기관 자료" | "학술자료" | "팟캐스트";
  language?: string;
  event?: string;
};

type ResourceSection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  resources: Resource[];
};

const resourceSections: ResourceSection[] = [
  {
    id: "official",
    eyebrow: "FCWM 공식 기록",
    title: "공식 채널",
    description: "행사 공지, 활동 사진과 최근 소식은 FCWM의 공식 소셜 채널에서 확인할 수 있습니다.",
    resources: [
      {
        title: "FCWM Facebook 페이지",
        publisher: "Friends of ‘Comfort Women’ Melbourne",
        description: "단체 소개와 소녀상 건립, 교육·기념 활동의 공식 공개 기록입니다.",
        href: "https://www.facebook.com/fcwmaustralia/",
        type: "공식 채널",
        language: "한국어·영어",
      },
      {
        title: "FCWM Instagram",
        publisher: "@fcwm_au",
        description: "최근 행사, 사진, 영상과 참여 안내를 확인할 수 있습니다.",
        href: "https://www.instagram.com/fcwm_au/",
        type: "공식 채널",
        language: "한국어·영어",
      },
      {
        title: "FCWM Facebook 그룹",
        publisher: "FCWM Community",
        description: "커뮤니티 게시물과 평화기념사업 관련 기록을 확인할 수 있습니다.",
        href: "https://www.facebook.com/groups/fcwmelbourne/",
        type: "공식 채널",
        language: "한국어·영어",
      },
    ],
  },
  {
    id: "fcwm-event-coverage",
    eyebrow: "FCWM 행사 기록",
    title: "FCWM 행사 보도",
    description: "FCWM이 마련한 전시와 상영회 등 지역사회 행사를 다룬 언론 보도를 모았습니다.",
    resources: [
      {
        event: "Connecting Memories Through Art",
        title: "멜버른에서 만난 작품 속 얼굴 없는 여성들",
        publisher: "오마이뉴스",
        description: "수상작과 김서경 작가의 〈위대한 그녀들〉 등을 통해 일본군 ‘위안부’ 피해 여성들의 이름과 삶을 기억하고, 예술로 그 이야기를 이어가는 전시 현장을 소개합니다.",
        href: "https://omn.kr/2jwk3",
        type: "기사",
        language: "한국어",
      },
      {
        event: "Connecting Memories Through Art",
        title: "멜버른서 ‘기억을 예술로 잇다’…전쟁과 여성의 기억, 예술로 만나다",
        publisher: "아트코리아TV",
        description: "멜소연과 CAPA가 공동 주최한 전시·공모전의 수상작과 참여 작가, 중국 평화의 소녀상, 음악 공연을 소개하며 예술로 기억과 평화를 나누는 의미를 전합니다.",
        href: "https://www.artkoreatv.com/news/articleView.html?idxno=104652",
        type: "기사",
        language: "한국어",
      },
      {
        event: "《귀향》 10주년 멜번 특별상영회",
        title: "K-ART: 10년 만에 확장 재개봉 '귀향: 언니야 이제 집에 가자'...멜번 무료 상영",
        publisher: "SBS 한국어",
        description: "《귀향》 10주년 확장판과 멜번 특별상영회를 소개하는 SBS 한국어 팟캐스트입니다.",
        href: "https://www.sbs.com.au/language/korean/ko/podcast-episode/k-art-gwihyang-melbourne-aussiebrosquad/gj9xglt7i",
        type: "팟캐스트",
        language: "한국어",
      },
      {
        event: "《귀향》 10주년 멜번 특별상영회",
        title: "‘귀향: 언니야 이제 집에가자’, 호주 멜버른서 공익 상영회 연다",
        publisher: "톱스타뉴스",
        description: "《귀향》 확장판의 멜버른 무료 공익 상영회와 제작·배급진의 메시지를 소개하고, 국내 상영 기회의 제약 속에서도 이어지는 해외 시민사회의 연대를 전합니다.",
        href: "https://www.topstarnews.net/news/articleView.html?idxno=16172128",
        type: "기사",
        language: "한국어",
      },
      {
        event: "《귀향》 10주년 멜번 특별상영회",
        title: "스크린 홀대 속 이어지는 해외 상영…‘귀향: 언니야 이제 집에가자’, 호주 멜버른서 무료 상영",
        publisher: "아태경제저널",
        description: "국내 상영관 배정 논란과 대비되는 멜버른 무료 상영회를 다루며, 교민과 현지 시민들이 직접 상영 기회를 마련해 역사적 기억을 이어가는 움직임을 소개합니다.",
        href: "https://www.apej.kr/bbs/board.php?bo_table=news&wr_id=8090",
        type: "기사",
        language: "한국어",
      },
    ],
  },
  {
    id: "melbourne-statue",
    eyebrow: "2019 멜번",
    title: "평화의 소녀상 건립 보도",
    description: "2019년 11월 멜번 평화의 소녀상 건립과 제막 과정을 다룬 기사와 영상입니다.",
    resources: [
      {
        title: "호주 멜버른에 해외 10번째 평화의 소녀상 건립",
        publisher: "연합뉴스",
        description: "건립 일정, 장소와 화성시·시민단체·멜버른 건립위원회의 협력을 보도했습니다.",
        href: "https://www.yna.co.kr/view/AKR20191113121700061",
        type: "기사",
        language: "한국어",
      },
      {
        title: "화성시민이 만든 평화의 소녀상 멜버른서 제막",
        publisher: "연합뉴스",
        description: "2019년 11월 14일 제막식과 현지 건립 과정을 기록한 후속 보도입니다.",
        href: "https://www.yna.co.kr/view/AKR20191115093500061",
        type: "기사",
        language: "한국어",
      },
      {
        title: "국외 10번째 평화의 소녀상, 호주 멜버른에 들어섰다",
        publisher: "한겨레",
        description: "멜번 소녀상 건립 과정과 그 의미를 소개합니다.",
        href: "https://www.hani.co.kr/arti/area/capital/917293.html",
        type: "기사",
        language: "한국어",
      },
      {
        title: "10th overseas comfort woman statue erected in Melbourne",
        publisher: "The Hankyoreh English",
        description: "멜번 평화의 소녀상 건립을 영어로 소개한 기사입니다.",
        href: "https://english.hani.co.kr/arti/english_edition/e_international/917450.html",
        type: "기사",
        language: "English",
      },
      {
        title: "2019년 멜번 평화의 소녀상 제막식 기록",
        publisher: "시드니 평화의 소녀상 연대",
        description: "제막식 날짜, 장소와 참여 단체를 정리한 연대 기록입니다.",
        href: "https://fcws.tistory.com/12",
        type: "기관 자료",
        language: "한국어",
      },
      {
        title: "호주 멜버른에 평화의 소녀상 건립",
        publisher: "KTV 국민리포트",
        description: "멜번 평화의 소녀상 건립을 현장 영상으로 전한 보도입니다.",
        href: "https://www.youtube.com/watch?v=kh3OWan1S3k",
        type: "영상",
        language: "한국어",
      },
      {
        title: "세계 여성의 날, 성노예 종식을 위한 목소리",
        publisher: "SBS Korean",
        description: "FCWM 전신 단체의 세계 여성의 날 인권 활동을 다룬 오디오 기사입니다.",
        href: "https://www.sbs.com.au/language/korean/ko/podcast-episode/melbourne-comfort-women-memorial-task-force-calls-for-no-sexual-slavery/n5bwp552z",
        type: "기사",
        language: "한국어",
      },
    ],
  },
  {
    id: "global-peace",
    eyebrow: "다문화 지역사회 연대",
    title: "Global Peace Statue Project",
    description: "CAPA와의 협력, 지역사회 대화와 중국 평화상 프로젝트를 기록한 기관 자료와 언론 보도입니다.",
    resources: [
      {
        title: "Australia Chinese Peace Statue Project 출범식",
        publisher: "CCCAV",
        description: "2024년 1월 20일 출범식과 FCWM 관계자들의 참여를 기록했습니다.",
        href: "https://cccav.org.au/successful-launch-of-australia-chinese-peace-statue-project-in-melbourne/",
        type: "기관 자료",
        language: "English·中文",
      },
      {
        title: "Melbourne Chinese Peace Statue Project",
        publisher: "CCCAV",
        description: "중국 평화상 프로젝트의 개요와 관련 기록을 모은 프로젝트 페이지입니다.",
        href: "https://cccav.org.au/melbourne-chinese-peace-statue-project/",
        type: "기관 자료",
        language: "English·中文",
      },
      {
        title: "Seeking Community Support to Establish a Chinese Peace Statue",
        publisher: "CCCAV",
        description: "프로젝트의 배경, 목적과 지역사회 참여 취지를 설명합니다.",
        href: "https://cccav.org.au/seeking-community-support-to-establish-a-chinese-peace-statue-in-melbourne/",
        type: "기관 자료",
        language: "English",
      },
      {
        title: "Melbourne Chinese Peace Statue Donors",
        publisher: "CCCAV",
        description: "FCWM의 후원 기록과 프로젝트 관련 자료를 확인할 수 있습니다.",
        href: "https://cccav.org.au/melbourne-chinese-peace-statue-donors/",
        type: "기관 자료",
        language: "English·中文",
      },
      {
        title: "Australia’s first Chinese WWII comfort women statue searches for permanent home",
        publisher: "ABC News",
        description: "FCWM·CAPA 협력, 공청회와 평화상의 영구 부지 논의를 다룬 취재 기사입니다.",
        href: "https://www.abc.net.au/news/2025-08-31/australias-first-chinese-world-war-two-sex-slave-statue/105671016",
        type: "기사",
        language: "English",
      },
      {
        title: "‘위안부’ 동상 뒤의 이야기",
        publisher: "ABC Chinese",
        description: "한국과 중국의 평화상, 전시 성폭력 피해의 역사와 기억을 다룬 기사입니다.",
        href: "https://www.abc.net.au/chinese/2025-08-14/comfort-women-statues-reflect-sex-slavery-in-war/105620746",
        type: "기사",
        language: "中文",
      },
      {
        title: "This statue aims for peace and understanding, but can’t find a home",
        publisher: "The Age",
        description: "중국 평화상과 멜번 내 영구 부지 논의를 다룬 기사입니다. 구독이 필요할 수 있습니다.",
        href: "https://www.theage.com.au/national/victoria/this-statue-aims-for-peace-and-understanding-but-can-t-find-a-home-20250906-p5msvv.html",
        type: "기사",
        language: "English",
      },
      {
        title: "Commemorating the peace or remembering the war?",
        publisher: "Inside Story",
        description: "호주에서 평화상이 작동하는 방식과 기억정치를 분석한 글입니다.",
        href: "https://insidestory.org.au/commemorating-the-peace-or-remembering-the-war/",
        type: "기사",
        language: "English",
      },
    ],
  },
  {
    id: "international",
    eyebrow: "국제연대",
    title: "베를린·카셀 평화의 소녀상",
    description: "독일의 평화의 소녀상 건립과 존치 운동의 배경을 확인할 수 있는 자료입니다.",
    resources: [
      {
        title: "카셀대학교 평화의 소녀상 건립 활동보고",
        publisher: "정의기억연대",
        description: "2022년 카셀대학교 소녀상 제막과 학생·시민사회의 연대를 기록했습니다.",
        href: "https://womenandwar.net/activityreport/?bmode=view&idx=17214481",
        type: "기관 자료",
        language: "한국어",
      },
      {
        title: "카셀대 소녀상 후원자 명판 설치",
        publisher: "연합뉴스",
        description: "카셀대학교 소녀상 후원과 국제연대 활동을 다룬 보도입니다.",
        href: "https://www.yna.co.kr/view/AKR20220905169900004",
        type: "기사",
        language: "한국어",
      },
      {
        title: "베를린 평화의 소녀상을 지켜주세요",
        publisher: "한겨레",
        description: "베를린 소녀상 철거 반대와 존치 운동의 배경을 소개합니다.",
        href: "https://www.hani.co.kr/arti/society/society_general/1010027.html",
        type: "기사",
        language: "한국어",
      },
      {
        title: "베를린 소녀상 존치를 위한 국제청원 제출자료",
        publisher: "UN Human Rights UPR Repository",
        description: "국제 시민사회가 UN 인권검토 절차에 제출한 청원 자료입니다.",
        href: "https://uprdoc.ohchr.org/uprweb/downloadfile.aspx?file=Annexe2&filename=10684",
        type: "기관 자료",
        language: "English",
      },
    ],
  },
  {
    id: "research",
    eyebrow: "더 깊이 읽기",
    title: "학술·인권 자료",
    description: "평화상, 기억 활동과 일본군 성노예제 문제를 학술·국제인권의 관점에서 살펴보는 자료입니다.",
    resources: [
      {
        title: "Mnemonic reciprocity: Activating Sydney’s Comfort Women statue for decolonial memory",
        publisher: "Memory Studies · SAGE Journals",
        description: "호주 내 평화상과 지역사회 기억 활동을 분석하며 FCWM의 2019년 건립과 단체명 변경도 언급합니다.",
        href: "https://journals.sagepub.com/doi/10.1177/17506980241243039",
        type: "학술자료",
        language: "English",
      },
      {
        title: "The roles of South Korean cities in politics of memory towards Japan",
        publisher: "Territory, Politics, Governance · Taylor & Francis",
        description: "한국 도시들의 기억정치와 국제적 기념 활동을 분석한 Natalia Matiaszczyk의 연구입니다.",
        href: "https://www.tandfonline.com/doi/full/10.1080/21622671.2025.2516094",
        type: "학술자료",
        language: "English",
      },
      {
        title: "Report on military sexual slavery in wartime",
        publisher: "UN Commission on Human Rights · archived full text",
        description: "UN 여성폭력 특별보고관이 일본군 ‘위안부’ 제도를 군사적 성노예제로 다룬 1996년 보고서 전문입니다.",
        href: "https://hrlibrary.umn.edu/commission/country52/53-add1.htm",
        type: "기관 자료",
        language: "English",
      },
    ],
  },
];

export default function ResourcesPage() {
  const resourceCount = resourceSections.reduce(
    (total, section) => total + section.resources.length,
    0,
  );

  return (
    <main>
      <Header />
      <section className="inner-page-hero resources-hero">
        <div className="inner-hero-copy">
          <SectionEyebrow>자료·보도</SectionEyebrow>
          <h1>기사와 기록으로<br />더 깊이 살펴보기</h1>
          <p>
            FCWM의 활동과 평화의 소녀상, 국제연대를 이해하는 데 도움이
            되는 공식 기록·언론 보도·학술자료를 모았습니다.
          </p>
        </div>
        <div className="resources-hero-count" aria-label={`총 ${resourceCount}개 외부 자료`}>
          <strong>{resourceCount}</strong>
          <span>공개 자료</span>
        </div>
      </section>

      <nav className="resource-section-nav" aria-label="자료 분야 바로가기">
        {resourceSections.map((section) => (
          <a href={`#${section.id}`} key={section.id}>
            {section.title}
          </a>
        ))}
      </nav>

      <aside className="resource-note">
        <strong>출처 활용 안내</strong>
        <p>
          2020–2025년 활동 기록은 FCWM 내부 활동 보고서를 기준으로
          작성했으며, 아래 공개자료는 확인 가능한 활동과 역사적 배경을
          보강합니다. 모든 링크는 외부 사이트에서 열립니다.
        </p>
      </aside>

      <div className="resource-sections">
        {resourceSections.map((section) => (
          <section className="resource-section" id={section.id} key={section.id}>
            <header className="resource-section-heading">
              <span>{section.eyebrow}</span>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </header>
            {[...new Set(section.resources.map((resource) => resource.event ?? ""))].map((event) => (
              <div className={event ? "resource-event-group" : undefined} key={event || section.id}>
                {event ? <h3 className="resource-event-title">{event}</h3> : null}
                <div className="resource-card-grid">
              {section.resources.filter((resource) => (resource.event ?? "") === event).map((resource) => (
                <a
                  className="resource-card"
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer"
                  key={`${section.id}-${resource.title}`}
                >
                  <div className="resource-card-meta">
                    <span>{resource.type}</span>
                    {resource.language ? <small>{resource.language}</small> : null}
                  </div>
                  {event ? <h4>{resource.title}</h4> : <h3>{resource.title}</h3>}
                  <strong>{resource.publisher}</strong>
                  <p>{resource.description}</p>
                  <span className="resource-card-link">
                    원문 보기 <b aria-hidden="true">{"\u2197\uFE0E"}</b>
                  </span>
                </a>
              ))}
                </div>
              </div>
            ))}
          </section>
        ))}
      </div>
      <Footer />
    </main>
  );
}
