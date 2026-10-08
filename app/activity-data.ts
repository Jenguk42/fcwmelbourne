export const activityCategories = [
  { id: "all", label: "전체" },
  { id: "education", label: "교육·청소년" },
  { id: "culture", label: "기념·문화" },
  { id: "community", label: "지역사회" },
  { id: "international", label: "국제연대" },
  { id: "preservation", label: "소녀상 건립·관리" },
] as const;

export type ActivityCategory = (typeof activityCategories)[number]["id"];
export type ActivityYear =
  | "2016" | "2017" | "2018" | "2019" | "2020" | "2021"
  | "2022" | "2023" | "2024" | "2025" | "2026";

export type ActivityPhoto = { src: string; alt: string; position?: string };

export type Activity = {
  year: ActivityYear;
  date?: string;
  category: Exclude<ActivityCategory, "all">;
  title: string;
  copy: string;
  photos?: ActivityPhoto[];
  video?: { src: string; poster: string };
  messageVideo?: { src: string; poster: string };
  featured?: boolean;
  supporting?: boolean;
  sources?: { label: string; href: string }[];
};

export const activityImagePaths: Record<number, string> = {
  "4": "https://images.fcwmelbourne.org/events/2016/statue-committee/01-first-meeting.webp",
  "5": "https://images.fcwmelbourne.org/events/2017/the-apology/01-screening-poster.webp",
  "6": "https://images.fcwmelbourne.org/events/2017/peace-community-solidarity/01-universal-ancient-wisdom-poster.webp",
  "8": "https://images.fcwmelbourne.org/events/2018/international-womens-day/01-sbs-interview-record.webp",
  "9": "https://images.fcwmelbourne.org/events/2018/daily-bread/01-festival-participants.webp",
  "10": "https://images.fcwmelbourne.org/events/2018/i-can-speak/01-screening-event.webp",
  "11": "https://images.fcwmelbourne.org/events/2018/i-can-speak/02-screening-poster.webp",
  "12": "https://images.fcwmelbourne.org/events/2018/young-korean-leaders-forum/01-group-photo.webp",
  "13": "https://images.fcwmelbourne.org/events/2018/statue-site-public-hearing/01-public-hearing.webp",
  "14": "https://images.fcwmelbourne.org/events/2018/military-sexual-slavery-forum/02-forum-record.webp",
  "15": "https://images.fcwmelbourne.org/events/2018/hwaseong-delegation/01-delegation-meeting.webp",
  "16": "https://images.fcwmelbourne.org/events/2019/war-and-womens-human-rights-museum/01-museum-visit.webp",
  "17": "https://images.fcwmelbourne.org/events/2019/kim-bok-dong-memorial/01-memorial-altar.webp",
  "18": "https://images.fcwmelbourne.org/events/2019/kim-bok-dong-memorial/02-memorial-record.webp",
  "19": "https://images.fcwmelbourne.org/events/2019/alamanda-college/01-students-and-families.webp",
  "20": "https://images.fcwmelbourne.org/events/2019/suzanne-cory-high-school/01-education-and-fundraising.webp",
  "21": "https://images.fcwmelbourne.org/events/2019/girim-day/01-remembrance-event.webp",
  "22": "https://images.fcwmelbourne.org/events/2019/girim-day/02-community-participation.png",
  "23": "https://images.fcwmelbourne.org/events/2019/statue-establishment-public-hearing/01-hearing-notice.webp",
  "24": "https://images.fcwmelbourne.org/events/2019/jan-ruff-oherne-memorial/01-memorial-tribute.webp",
  "25": "https://images.fcwmelbourne.org/events/2019/young-korean-leaders-forum/01-group-photo.webp",
  "26": "https://images.fcwmelbourne.org/events/2019/statue-foundation-works/01-groundworks.webp",
  "27": "https://images.fcwmelbourne.org/events/2019/statue-foundation-works/02-foundation-construction.webp",
  "28": "https://images.fcwmelbourne.org/events/2019/local-artists-solidarity/01-exhibition-visit.webp",
  "30": "https://images.fcwmelbourne.org/events/2019/kim-bok-dong-screening/01-screening-poster.webp",
  "31": "https://images.fcwmelbourne.org/events/2019/peace-statue-unveiling/01-unveiling-group-photo.webp",
  "33": "https://images.fcwmelbourne.org/events/2020/girim-day/01-online-event-notice.webp",
  "34": "https://images.fcwmelbourne.org/events/2020/australia-comfort-women-webinar/01-webinar-record.webp",
  "35": "https://images.fcwmelbourne.org/events/2021/activism-inspiration-legacy/01-webinar-record.webp",
  "36": "https://images.fcwmelbourne.org/events/2021/unfinished-stories-writing-competition/01-competition-notice.webp",
  "37": "https://images.fcwmelbourne.org/events/2022/oceania-film-screening/01-screening-and-talk.webp",
  "38": "https://images.fcwmelbourne.org/events/2022/pachinko-library-donation/01-book-donation.webp",
  "39": "https://images.fcwmelbourne.org/events/2023/korea-festival/01-fcwm-booth.webp",
  "40": "https://images.fcwmelbourne.org/events/2023/calculated-nationalism-book-concert/01-book-concert-notice.webp",
  "41": "https://images.fcwmelbourne.org/events/2023/entwined-atrocities-book-launch/01-launch-participants.webp",
  "42": "https://images.fcwmelbourne.org/events/2023/entwined-atrocities-book-launch/02-launch-record.webp",
  "43": "https://images.fcwmelbourne.org/events/2023/systematic-silencing-book-launch/01-book-launch.webp",
  "44": "https://images.fcwmelbourne.org/events/2023/systematic-silencing-book-launch/02-launch-record.webp",
  "45": "https://images.fcwmelbourne.org/events/2023/vka-fundraising-night/01-fcwm-members.webp",
  "47": "https://images.fcwmelbourne.org/events/2024/chinese-peace-statue-launch/01-launch-event.webp",
  "49": "https://images.fcwmelbourne.org/events/2024/flowers-of-war/02-screening-notice.webp",
  "50": "https://images.fcwmelbourne.org/events/2024/global-peace-statue-public-hearing/01-hearing-notice.webp",
  "52": "https://images.fcwmelbourne.org/events/2024/fcwm-agm-bbq/01-agm-notice.webp",
  "53": "https://images.fcwmelbourne.org/events/2024/vka-fundraising-night/01-fcwm-members.webp",
  "56": "https://images.fcwmelbourne.org/events/2025/harmony-and-peace-forum/01-forum-panel.webp",
  "57": "https://images.fcwmelbourne.org/events/2025/koreatown/01-community-event.webp",
  "59": "https://images.fcwmelbourne.org/events/2025/abc-ning-pan-interview/01-interview-record.webp",
  "61": "https://images.fcwmelbourne.org/events/2025/wwii-80th-anniversary/01-commemoration-notice.webp",
  "63": "https://images.fcwmelbourne.org/events/2026/justice-for-survivors/01-event-notice.webp",
  "64": "https://images.fcwmelbourne.org/events/2026/capa-statue-visit/01-statue-visit-group.webp",
  "66": "https://images.fcwmelbourne.org/events/2026/womens-voices-forum/01-forum-event.webp",
  "65": "https://images.fcwmelbourne.org/events/2026/womens-voices-forum/02-forum-notice.webp",
  "69": "https://images.fcwmelbourne.org/events/2026/girim-day/08-event-poster.webp",
  "72": "https://images.fcwmelbourne.org/archive/undated/community-records/education-presentation.webp",
  "73": "https://images.fcwmelbourne.org/archive/undated/community-records/community-classroom-gathering.webp",
  "74": "https://images.fcwmelbourne.org/archive/undated/community-records/committee-meeting.webp",
  "75": "https://images.fcwmelbourne.org/archive/undated/community-records/online-meeting-01.webp",
  "76": "https://images.fcwmelbourne.org/archive/undated/community-records/statue-site-group-photo.webp",
  "77": "https://images.fcwmelbourne.org/archive/undated/community-records/community-table-meeting.webp",
  "78": "https://images.fcwmelbourne.org/archive/undated/community-records/kim-seo-kyung-kim-woon-sung-meeting.webp",
  "79": "https://images.fcwmelbourne.org/archive/undated/community-records/korean-council-visit.webp",
  "80": "https://images.fcwmelbourne.org/archive/undated/community-records/community-meeting-portrait.webp",
  "81": "https://images.fcwmelbourne.org/archive/undated/community-records/online-meeting-02.webp",
  "82": "https://images.fcwmelbourne.org/archive/undated/community-records/statue-site-maintenance.webp",
  "83": "https://images.fcwmelbourne.org/archive/undated/community-records/community-event-collage-01.webp",
  "84": "https://images.fcwmelbourne.org/archive/undated/community-records/community-event-collage-02.webp",
  "85": "https://images.fcwmelbourne.org/archive/undated/community-records/fundraising-stall-collage.webp",
  "86": "https://images.fcwmelbourne.org/archive/undated/community-records/community-barbecue.webp"
};

const photo = (page: number, alt: string, position?: string): ActivityPhoto => ({
  src: activityImagePaths[page], alt, position,
});

export const activities: Activity[] = [
  { year: "2016", date: "28 Nov 2016", category: "preservation", featured: true, title: "멜번 평화의 소녀상 건립 조직위원회 첫 모임", copy: "멜번 평화의 소녀상 건립을 위한 첫 조직위원회 모임. 소녀상 건립 운동의 출발점이 되었습니다.", photos: [photo(4, "멜번 평화의 소녀상 건립을 위한 첫 조직위원회 모임")] },
  { year: "2017", date: "Jan 2017", category: "community", supporting: true, title: "첫 집행위원회 구성", copy: "첫 집행위원회를 구성하고 본격적인 활동 기반을 마련했습니다." },
  { year: "2017", date: "29 Jul 2017", category: "culture", title: "《The Apology》 상영과 모금의 밤", copy: "Mount Waverley의 침례교회에서 첫 영화 상영·모금 행사를 개최했습니다. 다큐멘터리 《The Apology》를 함께 관람하며 일본군 ‘위안부’ 피해자들의 이야기를 나누고, 평화의 소녀상 건립과 피해자 기억 활동을 위한 기금을 마련했습니다.", photos: [photo(5, "다큐멘터리 The Apology 상영과 모금의 밤 포스터")] },
  { year: "2017", date: "23 Nov 2017", category: "community", supporting: true, title: "Universal Ancient Wisdom: Bringing New Horizons", copy: "국제 합기도·선도 연맹의 40주년을 기념하는 《Universal Ancient Wisdom: Bringing New Horizons》 행사에 참석했습니다. 세계 평화운동을 기념하는 자리에서 지역사회와 교류하며 연대의 폭을 넓혔습니다.", photos: [photo(6, "Universal Ancient Wisdom 지역사회 행사 포스터")] },
  { year: "2017", date: "2 Dec 2017", category: "community", title: "2017년 정기총회", copy: "정기총회를 열어 회원들과 활동을 돌아보고, 향후 활동 방향과 계획을 논의했습니다.", photos: [
    { src: "https://images.fcwmelbourne.org/events/2017/2017-agm/01-agm.webp", alt: "2017년 정기총회 활동 현장" },
    { src: "https://images.fcwmelbourne.org/events/2017/2017-agm/03-agm.webp", alt: "2017년 정기총회 활동 현장" },
    { src: "https://images.fcwmelbourne.org/events/2017/2017-agm/04-agm.webp", alt: "2017년 정기총회 활동 현장" },
    { src: "https://images.fcwmelbourne.org/events/2017/2017-agm/05-agm.webp", alt: "2017년 정기총회 활동 현장" },
    { src: "https://images.fcwmelbourne.org/events/2017/2017-agm/06-agm.webp", alt: "2017년 정기총회 활동 현장" },
  ] },
  { year: "2017", category: "community", title: "FCWM 홍보 및 기금 마련을 위한 정기 바자회", copy: "평화의 소녀상 건립 기금을 마련하기 위해 수제 나비 브로치, FCWM 에코백과 머그컵 등의 기념품을 판매했습니다.", photos: [
    { src: "https://images.fcwmelbourne.org/events/2017/bazaar-stalls/01-brotches.webp", alt: "바자회에서 판매한 수제 나비 브로치" },
    { src: "https://images.fcwmelbourne.org/events/2017/bazaar-stalls/02-mugs.webp", alt: "바자회에서 판매한 FCWM 머그컵" },
    { src: "https://images.fcwmelbourne.org/events/2017/bazaar-stalls/03-tote-bags.webp", alt: "바자회에서 판매한 FCWM 에코백" },
  ] },
  { year: "2018", date: "8 Mar 2018", category: "community", featured: true, title: "세계 여성의 날 행진과 SBS 인터뷰", copy: "세계 여성의 날 행진에 앞서 QV에서 SBS 인터뷰를 진행했습니다. 이후 행진에 참여해 일본군 ‘위안부’ 피해자들의 역사를 알리고, 참가자들과 함께 여성 인권에 대한 관심과 지지를 촉구했습니다.", photos: [
    photo(8, "세계 여성의 날 행진과 SBS Korean 인터뷰 보도"),
    { src: "https://images.fcwmelbourne.org/events/2018/international-womens-day/02-participants-picture.webp", alt: "세계 여성의 날 행진 참가자들" },
    { src: "https://images.fcwmelbourne.org/events/2018/international-womens-day/03-participants-picture.webp", alt: "세계 여성의 날 행진 참가자들" },
    { src: "https://images.fcwmelbourne.org/events/2018/international-womens-day/04-participants-picture.webp", alt: "세계 여성의 날 행진 참가자들" },
  ], sources: [
    { label: "Melbourne Comfort Women Memorial Task Force calls for “no sexual slavery” | SBS Korean", href: "https://www.sbs.com.au/language/korean/en/podcast-episode/melbourne-comfort-women-memorial-task-force-calls-for-no-sexual-slavery/kr8ibb9t2" },
  ] },
  {"year": "2018", "date": "Apr 2018", "category": "community", "title": "세월호 참사 진상규명과 정의를 위한 연대", "copy": "세월호 참사의 진상규명과 정의를 요구하는 활동에 참여했습니다. 희생자들을 기억하고 유가족과 연대하며, 생명과 안전의 가치를 함께 나눴습니다.", "photos": [{"src": "https://images.fcwmelbourne.org/events/2018/sewol-solidarity/01-group-photo.webp", "alt": "세월호 참사 진상규명과 정의를 위한 연대 — 단체사진"}]},
  { year: "2018", date: "19 May 2018", category: "international", title: "St Kilda Film Festival — 《Daily Bread》", copy: "얀 러프 오헤른의 손녀를 응원하며 St Kilda Film Festival의 《Daily Bread》 상영에 참석했습니다. 영화는 제2차 세계대전 당시 인도네시아의 수용소를 배경으로, 학대와 질병, 굶주림 속에서 하루하루를 버티는 Jeanne과 네덜란드 여성·어린이들의 이야기를 다룹니다.", photos: [
    photo(9, "Daily Bread 상영에 함께한 FCWM 관계자와 Ruby Challenger"),
    { src: "https://images.fcwmelbourne.org/events/2018/daily-bread/02-event-venue.webp", alt: "Daily Bread 상영 행사장" },
  ] },
  { year: "2018", date: "27 Jul 2018", category: "international", title: "화성시 관계자들과의 만남", copy: "화성시 관계자들과 만나 멜번 평화의 소녀상 건립과 연대 방안을 논의했습니다.", photos: [photo(15, "화성시 관계자들을 맞이한 FCWM 회원들")] },
  { year: "2018", date: "28 Jul 2018", category: "culture", featured: true, title: "《아이 캔 스피크》 상영과 모금 행사", copy: "영화 《아이 캔 스피크》 상영과 모금 행사를 개최하고, 상영 후 참석자들과 저녁 식사를 함께했습니다. 화성시 관계자 Hwang Dang-yeon, Park Kyung-ja, Kim Sun-young, Park Geun-seo를 비롯해 멜번대학교 Kate McGregor 교수, 모나시대학교 Mohita Roman 교수와 상담사 MT Pang Tsoi 등 지역사회·학계 인사들이 참석했습니다.", photos: [photo(10, "영화 아이 캔 스피크 상영과 모금 행사 현장"), photo(11, "영화 아이 캔 스피크 상영 포스터")] },
  { year: "2018", date: "11–12 Aug 2018", category: "education", title: "차세대 한인 리더 포럼", copy: "회원이 캔버라에서 열린 차세대 한인 리더 포럼에 참석했습니다. 한인 청년들과 교류하며 일본군 ‘위안부’ 피해자들의 역사와 경험을 알리고, 다음 세대와의 연대를 넓혔습니다.", photos: [photo(12, "2018 차세대 한인 리더 포럼 단체사진")] },
  { year: "2018", date: "12 Nov 2018", category: "education", featured: true, title: "일본군 성노예제 포럼 발표", copy: "캔버라 포럼에 발표자로 참여해 전쟁과 여성 인권, 일본군 성노예제 문제를 공론화했습니다.", photos: [{ src: "https://images.fcwmelbourne.org/events/2018/military-sexual-slavery-forum/01-forum-event.webp", alt: "캔버라 일본군 성노예제 포럼 현장" }, photo(14, "캔버라 포럼 관련 기록")] },
  { year: "2018", date: "1 Dec 2018", category: "preservation", supporting: true, title: "2018 멜소위 총회 및 소녀상 부지선정 공청회", copy: "소녀상 부지 선정에 관한 공청회를 열어 회원과 지역사회의 의견을 모았습니다.", photos: [
    { src: "https://images.fcwmelbourne.org/events/2018/statue-site-public-hearing/02-group-discussion.webp", alt: "2018 멜소위 총회 및 소녀상 부지선정 공청회 토론 현장" },
    photo(13, "2018년 멜번 평화의 소녀상 부지 선정 공청회"),
    { src: "https://images.fcwmelbourne.org/events/2018/statue-site-public-hearing/03-group-discussion.webp", alt: "2018 멜소위 총회 및 소녀상 부지선정 공청회 토론 현장" },
    { src: "https://images.fcwmelbourne.org/events/2018/statue-site-public-hearing/04-group-discussion.webp", alt: "2018 멜소위 총회 및 소녀상 부지선정 공청회 토론 현장" },
  ] },
  {"year": "2018", "date": "1 Dec 2018", "category": "international", "title": "전쟁과여성인권박물관 연대 방문", "copy": "전쟁과여성인권박물관을 찾아 피해자 기억과 국제 연대의 의미를 함께했습니다.", "photos": [{"src": "https://images.fcwmelbourne.org/events/2018/museum-solidarity-visit/01-photo-wall.webp", "alt": "2018년 전쟁과여성인권박물관 연대 방문 — 사진 전시 벽"}]},
  { year: "2019", date: "2–3 Feb 2019", category: "culture", featured: true, title: "김복동 할머니 추모 분향소", copy: "평화·인권운동가 김복동 할머니를 추모하기 위해 멜번에 분향소를 마련했습니다.", photos: [
    photo(17, "멜번에 마련한 김복동 할머니 추모 분향소"),
    photo(18, "김복동 할머니 추모 활동 기록"),
    { src: "https://images.fcwmelbourne.org/events/2019/kim-bok-dong-memorial/03-memorial-visitor.webp", alt: "김복동 할머니 추모 활동 기록" },
    { src: "https://images.fcwmelbourne.org/events/2019/kim-bok-dong-memorial/04-memorial-visitor.webp", alt: "김복동 할머니 추모 활동 기록" },
    { src: "https://images.fcwmelbourne.org/events/2019/kim-bok-dong-memorial/05-memorial-visitor.webp", alt: "김복동 할머니 추모 활동 기록" },
  ] },
  { year: "2019", date: "6 Apr 2019", category: "education", featured: true, title: "Alamanda K–9 College 학생·가족 교육", copy: "일본군 ‘위안부’ 문제에 관심을 가진 지역 학생들과 교육 간담회를 열었습니다. 학생들의 부모와 형제자매를 포함해 총 8명이 참석해 피해자들의 역사와 경험을 함께 나눴습니다. 한 학생이 자신이 다니는 Suzanne Cory High School에서 모금 행사를 열자고 제안하면서, 학교 교육과 지역사회 연계 활동의 중요한 첫걸음이 되었습니다.", photos: [photo(19, "Alamanda K–9 College 학생과 가족이 함께한 역사 교육 간담회")] },
  { year: "2019", date: "3–6 Jun 2019", category: "education", featured: true, title: "Suzanne Cory High School 교육·모금 활동", copy: "Suzanne Cory High School 학생들을 대상으로 교육 발표를 진행한 뒤 모금 행사를 열었습니다. 호주 학교를 대상으로 한 첫 교육 방문이자 첫 학교 기반 모금 활동으로, 학교 교육과 연계한 활동의 중요한 전환점이 되었습니다.", photos: [photo(20, "Suzanne Cory High School 교육 발표와 학생 모금 활동")] },
  { year: "2019", date: "15 Aug 2019", category: "culture", title: "세계 일본군 ‘위안부’ 기림일", copy: "김학순 할머니의 증언을 기리는 행사에서 김명희 작가가 그린 김학순 할머니의 초상화를 행사장 뒤편에 전시하고, 그림 앞 탁자에 꽃을 놓았습니다. 행사 후에는 참가자들이 초상화 앞 의자에 차례로 앉아 기념사진을 촬영하며 기억과 연대의 의미를 나눴습니다.", photos: [photo(21, "세계 일본군 위안부 기림일 행사 현장"), photo(22, "기림일 시민 참여 프로그램")] },
  { year: "2019", date: "31 Aug 2019", category: "preservation", featured: true, title: "평화의 소녀상 건립 공청회", copy: "한인회관 부지에 평화의 소녀상을 세우기 위한 공청회를 열고 지역사회의 지지를 확인했습니다.", photos: [photo(23, "2019년 멜번 평화의 소녀상 건립 공청회 안내")] },
  { year: "2019", date: "27 Aug 2019", category: "international", title: "Jan Ruff-O’Herne 장례식 참석", copy: "얀 러프 오헤른의 별세 후 Ruby Challenger와 연락을 취했으며, 여수정 회원이 당일 오전 항공편으로 애들레이드에 이동해 단체를 대표하여 조의를 표했습니다. 교회에서 열린 장례식에 참석하고 묘지까지 이어진 장례 행렬에 동행하며 고인을 추모했습니다.", photos: [photo(24, "Jan Ruff-O’Herne 장례에 전한 추모의 뜻")] },
  { year: "2019", date: "7 Sep 2019", category: "education", title: "차세대 리더 포럼 2019", copy: "회원이 시드니에서 열린 차세대 리더 포럼에 참석했습니다. 한인 청년들과 교류하며 일본군 ‘위안부’ 피해자들의 역사와 경험을 알리고, 다음 세대와의 연대를 넓혔습니다.", photos: [photo(25, "2019 차세대 리더 포럼 단체사진")] },
  { year: "2019", date: "Sep–Oct 2019", category: "preservation", featured: true, title: "평화의 소녀상 설치 기반공사", copy: "평화의 소녀상 설치를 위해 실내·외 기반 공사를 직접 준비하고 진행했습니다.", photos: [photo(26, "평화의 소녀상 설치를 위한 바닥 기반공사"), photo(27, "평화의 소녀상 설치 기반을 만드는 현장")] },
  { year: "2019", date: "25 Sep 2019", category: "culture", supporting: true, title: "13차 KAAM 전시회 참관", copy: "MCWM 회원들은 KAAM(멜번한인미술협회) 전시회에 참여한 회원이자 예술가를 응원했습니다.", photos: [
    photo(28, "13차 KAAM 전시회에서 회원 예술가를 응원한 MCWM 회원들"),
    { src: "https://images.fcwmelbourne.org/events/2019/local-artists-solidarity/02-poster.webp", alt: "13차 KAAM 전시회 포스터" },
  ] },
  { year: "2019", date: "11 Oct 2019", category: "culture", title: "다큐멘터리 《김복동》 상영", copy: "다큐멘터리 《김복동》 상영을 통해 피해자 증언과 인권운동의 의미를 지역사회와 나눴습니다.", photos: [photo(30, "다큐멘터리 김복동 상영 포스터")] },
  { year: "2019", date: "14 Nov 2019", category: "preservation", featured: true, title: "멜번 평화의 소녀상 제막식", copy: "지역사회와 연대 단체들이 함께한 가운데 멜번 평화의 소녀상 제막식을 열었습니다.", photos: [photo(31, "2019년 11월 14일 멜번 평화의 소녀상 제막식 단체사진")], sources: [{ label: "제막식 관련 보도", href: "https://www.yna.co.kr/view/AKR20191115093500061" }] },
  { year: "2020", date: "15 Aug 2020", category: "international", title: "세계 일본군 ‘위안부’ 기림일 국제연대", copy: "세계 일본군 ‘위안부’ 기림일 온라인 행사에 참여하며 국제 연대를 이어갔습니다.", photos: [photo(33, "세계 일본군 위안부 기림일 온라인 행사 안내")] },
  {"year": "2020", "date": "15 Aug 2020", "category": "culture", "title": "얀 러프 오헤른 1주기 추모행사 공동 주최", "copy": "호주 내 인권·정의 관련 단체들과 함께 일본군 ‘위안부’ 피해 생존자 얀 러프 오헤른의 1주기 추모행사를 공동 주최했습니다. 고인의 삶과 용기를 기억하고, 피해자들의 존엄과 정의를 위한 활동의 의미를 되새겼습니다.", "photos": [{"src": "https://images.fcwmelbourne.org/events/2020/jan-ruff-oherne-1st-memorial/01-poster.webp", "alt": "얀 러프 오헤른 1주기 추모행사 공동 주최 — 행사 포스터"}]},
  {"year": "2020", "date": "30 Oct 2020", "category": "education", "title": "평화의 소녀상 건립 1주년 기념 인권 말하기 대회", "copy": "평화의 소녀상 건립 1주년을 기념해 인권 말하기 대회를 개최했습니다. 참가자들이 인권의 의미를 돌아보고 자신의 생각을 나누는 자리를 마련했습니다.", "photos": [{"src": "https://images.fcwmelbourne.org/events/2020/statue-1st-anniversary-speech-contest/01-poster.webp", "alt": "평화의 소녀상 건립 1주년 기념 인권 말하기 대회 — 행사 포스터"}]},
  { year: "2020", date: "6 Dec 2020", category: "education", featured: true, title: "호주와 일본군 ‘위안부’ 문제 웨비나", copy: "호주와 일본군 ‘위안부’ 문제를 주제로 한 웨비나를 공동 주최해 역사적 책임과 지역적 맥락을 논의했습니다.", photos: [photo(34, "호주와 일본군 위안부 문제를 다룬 공동 웨비나")] },
  { year: "2021", date: "19 Jun 2021", category: "education", title: "사회운동, 연대와 유산: 일본군 ‘위안부’ 사례를 중심으로 웨비나", copy: "‘위안부’ 운동의 활동과 유산을 주제로 한 웨비나를 공동 주최했습니다.", photos: [photo(35, "Activism, Inspiration and Legacy 공동 웨비나")] },
  { year: "2021", date: "25 Oct 2021", category: "education", featured: true, title: "멜번 평화의 소녀상 건립 2주년 기념 인권 글쓰기 대회", copy: "청소년·학생들이 역사와 인권을 스스로 성찰할 수 있도록 ‘끝나지 않은 이야기’를 주제로 글쓰기 대회를 열었습니다.", photos: [photo(36, "끝나지 않은 이야기를 주제로 한 학생 글쓰기 대회")] },
  {"year": "2021", "date": "13 Nov 2021", "category": "community", "title": "평화의 소녀상 건립 2주년 기념행사 및 2021년 정기총회", "copy": "평화의 소녀상 건립 2주년 기념행사와 정기총회를 열어 그동안의 활동을 돌아봤습니다. 회원들과 함께 기억과 연대의 의미를 나누고 향후 활동 방향을 논의했습니다.", "photos": [{"src": "https://images.fcwmelbourne.org/events/2021/statue-2nd-anniversary-agm/01-poster.webp", "alt": "평화의 소녀상 건립 2주년 기념행사 및 2021년 정기총회 — 행사 포스터"}]},
  {"year": "2021", "date": "10 Dec 2021", "category": "international", "title": "평화비 건립 10주년 국제심포지엄 발표", "copy": "평화비 건립 10주년 국제심포지엄에서 발표하며, 일본군 ‘위안부’ 피해자들의 기억과 평화의 소녀상을 통한 연대의 의미를 나눴습니다.", "photos": [{"src": "https://images.fcwmelbourne.org/events/2021/peace-monument-10th-anniversary-symposium/01-zoom-screenshot.webp", "alt": "평화비 건립 10주년 국제심포지엄 발표 — 온라인 발표 화면 1"}, {"src": "https://images.fcwmelbourne.org/events/2021/peace-monument-10th-anniversary-symposium/02-zoom-screenshot.webp", "alt": "평화비 건립 10주년 국제심포지엄 발표 — 온라인 발표 화면 2"}, {"src": "https://images.fcwmelbourne.org/events/2021/peace-monument-10th-anniversary-symposium/03-poster-eng.webp", "alt": "평화비 건립 10주년 국제심포지엄 발표 — 영문 포스터"}, {"src": "https://images.fcwmelbourne.org/events/2021/peace-monument-10th-anniversary-symposium/03-poster-kr.webp", "alt": "평화비 건립 10주년 국제심포지엄 발표 — 한국어 포스터"}]},
  { year: "2022", date: "7 Mar 2022", category: "international", title: "낮은 목소리 오세아니아 온라인 GV 상영회", copy: "오세아니아 온라인 영화 상영과 게스트 토크에 참여하고 한·영 통역을 지원했습니다.", photos: [photo(37, "오세아니아 온라인 영화 상영과 게스트 토크")] },
  { year: "2022", category: "education", featured: true, title: "지역 도서관에 《Pachinko》 기증", copy: "지역 도서관에 《Pachinko》를 기증해 역사와 기억에 대한 접근성을 넓혔습니다.", photos: [photo(38, "지역 도서관에 기증한 Pachinko 도서")] },
  {"year": "2022", "date": "Nov 2022", "category": "education", "title": "Anna Song의 학교 방문 및 역사·인권 교육", "copy": "Anna Song이 학교를 방문해 학생들을 대상으로 일본군 ‘위안부’ 역사와 인권에 관한 교육 발표를 진행했습니다. 피해자들의 이야기를 전하고, 역사적 기억을 다음 세대와 나눴습니다.", "photos": [{"src": "https://images.fcwmelbourne.org/events/2022/anna-song-school-visit/01-anna-song-lecture.webp", "alt": "학교에서 역사·인권 교육 발표를 진행하는 Anna Song"}, {"src": "https://images.fcwmelbourne.org/events/2022/anna-song-school-visit/02-anna-song-group-photo.webp", "alt": "Anna Song의 학교 방문 교육 단체사진"}]},
  { year: "2023", date: "13 May 2023", category: "community", featured: true, title: "Korea Festival 홍보 부스", copy: "Korea Festival에서 FCWM 부스를 운영하며 평화의 소녀상과 일본군 ‘위안부’ 역사를 알렸습니다.", photos: [photo(39, "2023 Korea Festival의 FCWM 홍보 부스")] },
  { year: "2023", date: "19 Aug 2023", category: "education", supporting: true, title: "《Calculated Nationalism in Contemporary South Korea》 북콘서트", copy: "FCWM의 일원이자 오랫동안 활동해 온 한길수 박사의 저서 출간을 기념하는 북 콘서트를 개최했습니다. 이 책은 한국의 민주화 과정에서 정치·경제적 변화와 민족주의가 어떻게 맞물려 작동해 왔는지를 살펴보고, 통일과 세계주의를 둘러싼 오늘날 한국 사회의 현실과 과제를 분석합니다.", photos: [{ src: "https://images.fcwmelbourne.org/events/2023/calculated-nationalism-book-concert/02-group-photo.webp", alt: "Calculated Nationalism in Contemporary South Korea 북콘서트 단체사진" }, photo(40, "Calculated Nationalism in Contemporary South Korea 북콘서트 안내")] },
  { year: "2023", date: "22 Oct 2023", category: "education", title: "《Entwined Atrocities: New Insights into the U.S.–Japan Alliance》 연구서 출간 행사 참여", copy: "FCWM과 오랫동안 연대해 온 Yuki Tanaka의 연구서 출간 행사에 참여했습니다. 이 연구는 미·일 동맹의 역사적 맥락 속에서 전쟁범죄와 책임의 문제가 어떻게 얽혀 있는지를 살펴보고, 기존의 역사 인식과 국제관계에 새로운 관점을 제시합니다.", photos: [photo(41, "Entwined Atrocities 연구서 출간 행사 참석자들"), photo(42, "Entwined Atrocities 연구서 출간 행사 추가 기록")] },
  { year: "2023", date: "22 Nov 2023", category: "international", featured: true, title: "《Systematic Silencing, Activism, Memory and Sexual Violence in Indonesia》 연구서 출간 행사 참여", copy: "FCWM과 오랫동안 연대해 온 Kate McGregor의 연구서 출간 행사에 참여했습니다. 이 연구는 인도네시아의 전시·정치적 성폭력의 역사와 피해 경험이 어떻게 침묵되어 왔는지를 살펴보고, 이를 기억하고 알리기 위한 활동과 사회적 기억이 형성되어 온 과정을 다룹니다.", photos: [photo(43, "Kate McGregor의 연구서 출간 행사"), photo(44, "Systematic Silencing 연구서 출간 행사 추가 기록")] },
  {"year": "2023", "date": "25 Nov 2023", "category": "community", "title": "2023년 정기총회", "copy": "회원들과 함께 한 해의 활동을 돌아보고 다음 해의 사업을 계획하는 자리를 마련했습니다. 2024년 중국 커뮤니티와의 연대를 위한 협력 방향도 모색했습니다.", "photos": [{"src": "https://images.fcwmelbourne.org/events/2023/2023-agm/02-agm.webp", "alt": "2023년 정기총회 활동 기록 1"}, {"src": "https://images.fcwmelbourne.org/events/2023/2023-agm/01-agm.webp", "alt": "2023년 정기총회 활동 기록 2"}]},
  { year: "2023", category: "community", title: "2023 한인회 후원의 밤 참여", copy: "한인회 주최 모금 행사에 참여하며 지역사회와의 연대를 이어갔습니다.", photos: [
    photo(45, "2023 한인회 후원의 밤에 함께한 FCWM 회원들"),
    { src: "https://images.fcwmelbourne.org/events/2023/vka-fundraising-night/02-celebration-performance.webp", alt: "2023 한인회 후원의 밤 축하 공연" },
  ] },
  {"year": "2023", "date": "Nov 2023", "category": "education", "title": "학생들의 평화의 소녀상 방문과 만들기 활동", "copy": "학생들이 멜번 평화의 소녀상을 방문하고 만들기 활동에 참여했습니다. 소녀상에 담긴 역사와 의미를 접하고, 기억과 평화의 가치를 함께 생각해 보는 시간을 가졌습니다.", "photos": [{"src": "https://images.fcwmelbourne.org/events/2023/student-statue-visit/01-students-group-discussion.webp", "alt": "평화의 소녀상 방문 활동에서 함께 이야기를 나누는 학생들"}, {"src": "https://images.fcwmelbourne.org/events/2023/student-statue-visit/02-students-group-photo.webp", "alt": "평화의 소녀상을 방문한 학생들의 단체사진"}]},
  { year: "2024", date: "20 Jan 2024", category: "international", featured: true, title: "Melbourne Chinese Peace Statue Project 출범", copy: "중국인 피해자 기억까지 함께 조명하기 위한 프로젝트를 공식적으로 알리고 국제연대를 확대했습니다.", photos: [photo(47, "Melbourne Chinese Peace Statue Project 출범 행사"), { src: "https://images.fcwmelbourne.org/events/2024/chinese-peace-statue-launch/02-group-photo.webp", alt: "출범 행사 참석자 단체사진" }], sources: [{ label: "출범 기록", href: "https://cccav.org.au/successful-launch-of-australia-chinese-peace-statue-project-in-melbourne/" }] },
  { year: "2024", date: "26 Jun 2024", category: "culture", featured: true, title: "《The Flowers of War》 공동 상영", copy: "난징대학살과 전시 성폭력의 역사를 다룬 영화 상영을 통해 한중 공동 기억의 장을 마련했습니다.", photos: [
    { src: "https://images.fcwmelbourne.org/events/2024/flowers-of-war/01-group-photo.webp", alt: "The Flowers of War 공동 상영회 참석자 단체사진" },
    photo(49, "The Flowers of War 공동 상영회 안내"),
  ] },
  { year: "2024", date: "24 Aug 2024", category: "international", supporting: true, title: "Global Peace Statue Project 의견 수렴 공청회", copy: "글로벌 평화의 소녀상 프로젝트에 대한 설명과 지역사회 의견 수렴을 진행했습니다.", photos: [photo(50, "Global Peace Statue Project 의견 수렴 공청회 안내")] },
  { year: "2024", date: "31 Aug 2024", category: "preservation", title: "글로벌 평화의 소녀상 건립 프로젝트 임시총회", copy: "이 날은 글로벌 평화의 소녀상 건립 프로젝트를 위한 임시총회가 열렸습니다.", photos: [
    { src: "https://images.fcwmelbourne.org/events/2024/global-peace-statue-egm/01-egm-poster.webp", alt: "2024년 8월 31일 글로벌 평화의 소녀상 건립 프로젝트 임시총회 안내" },
  ] },
  {"year": "2024", "date": "26 Oct 2024", "category": "international", "title": "멜번과 베를린을 잇는 평화의 소녀상 — 여성의 존엄과 권리를 위한 연대", "copy": "일본 히로시마 지역사회 구성원들을 대상으로 온라인 발표를 진행했습니다. 멜번과 베를린의 평화의 소녀상을 통해 여성의 존엄과 권리를 위한 국제연대의 의미를 나눴습니다.", "photos": [{"src": "https://images.fcwmelbourne.org/events/2024/hiroshima-melbourne-berlin-presentation/01-poster.webp", "alt": "멜번과 베를린을 잇는 평화의 소녀상 — 여성의 존엄과 권리를 위한 연대 — 행사 포스터"}]},
  { year: "2024", date: "16 Nov 2024", category: "community", title: "2024년 정기 총회 & BBQ 파티", copy: "회원들과 활동을 돌아보고 향후 계획을 나누는 공동체 행사를 열었습니다.", photos: [photo(52, "2024 FCWM 정기 총회와 BBQ 파티 안내")] },
  { year: "2024", category: "community", title: "2024 한인회 후원의 밤 참여", copy: "한인회 주최 모금 행사에 참여하며 지역사회와의 연대를 이어갔습니다.", photos: [photo(53, "2024 한인회 후원의 밤에 함께한 FCWM 회원들")] },
  { year: "2025", date: "15 Mar 2025", category: "international", featured: true, title: "Celebration of Harmony, Promotion of Peace", copy: "CAPA와 함께 평화와 조화를 주제로 한 지역사회 포럼에 참여하며 다문화 연대를 확대했습니다.", photos: [
    photo(56, "평화와 조화를 주제로 열린 지역사회 포럼 패널"),
    { src: "https://images.fcwmelbourne.org/events/2025/harmony-and-peace-forum/02-event-poster.webp", alt: "Celebration of Harmony, Promotion of Peace 지역사회 포럼 포스터" },
  ] },
  {"year": "2025", "date": "19 Mar 2025", "category": "international", "title": "일본군 ‘위안부’ 문제 해결 운동 — 오늘날 풀뿌리 사회의 문제의식과 대응", "copy": "한길수 교수가 FCWM 대표로 이탈리아 대학생들을 대상으로 발표했습니다. 일본군 ‘위안부’ 문제 해결 운동을 주제로, 오늘날 풀뿌리 사회의 문제의식과 대응을 다뤘습니다.", "photos": [{"src": "https://images.fcwmelbourne.org/events/2025/italy-presentation/01-presentation-poster.webp", "alt": "한길수 교수의 이탈리아 대학생 대상 발표 포스터"}]},
  { year: "2025", date: "18 May 2025", category: "community", supporting: true, title: "Koreatown 지역사회 참여", copy: "멜번 한인사회의 문화와 공동체 활동에 참여하며 지역사회와의 연결을 이어갔습니다.", photos: [photo(57, "Koreatown 지역사회 행사에 참여한 FCWM 활동 기록")] },
  { year: "2025", date: "22 Jul 2025", category: "international", featured: true, title: "ABC 인터뷰 — Ning Pan", copy: "ABC와의 인터뷰를 통해 중국인 ‘위안부’ 피해자 기억과 평화의 소녀상 프로젝트를 호주 사회에 알렸습니다.", photos: [{ src: "https://images.fcwmelbourne.org/events/2025/abc-ning-pan-interview/01-christine.webp", alt: "중국인 위안부 피해자 기억을 다룬 ABC 인터뷰" }], sources: [{ label: "ABC News 보도", href: "https://www.abc.net.au/news/2025-08-31/australias-first-chinese-world-war-two-sex-slave-statue/105671016" }] },
  { year: "2025", date: "6 Sep 2025", category: "culture", featured: true, title: "제2차 세계대전 종전 80주년 기림", copy: "CAPA가 주최한 제2차 세계대전 종전 80주년 기림행사에 참여했습니다. 전쟁 피해자들을 기억하고, 역사적 기억을 이어가는 일과 평화의 의미를 함께 되새겼습니다.", photos: [photo(61, "제2차 세계대전 종전 80주년 기림 행사 안내"), { src: "https://images.fcwmelbourne.org/events/2025/wwii-80th-anniversary/02-event-programme.webp", alt: "CAPA 제2차 세계대전 종전 80주년 기림행사 프로그램" }] },
  {"year": "2025", "date": "14 Sep 2025", "category": "international", "title": "CAPA·FCWM 공동 연대체 ‘Alliance for Peace and Memory’ 결성", "copy": "CAPA와 FCWM이 공동 연대체 ‘Alliance for Peace and Memory’를 결성했습니다. 정기적으로 소통하며 중국 평화의 소녀상이 자리할 장소를 찾기 위한 협력을 이어가고 있습니다.", "photos": [{"src": "https://images.fcwmelbourne.org/events/2025/alliance-for-peace-and-memory/01-group-photo.webp", "alt": "CAPA·FCWM 공동 연대체 ‘Alliance for Peace and Memory’ 결성 — 단체사진"}]},
  { year: "2025", date: "23 Nov 2025", category: "community", supporting: true, title: "2025년 정기 총회 & BBQ 파티", copy: "정기총회와 공동체 행사를 통해 회원들과 활동을 공유하고 다음 해 계획을 논의했습니다.", photos: [{ src: "https://images.fcwmelbourne.org/events/2025/fcwm-agm-bbq/01-agm-poster.png", alt: "2025년 FCWM 정기 총회와 BBQ 파티 안내 포스터" }] },
  { year: "2026", date: "17 Jan 2026", category: "culture", featured: true, title: "생존자를 위한 정의의 목소리", copy: "생존자들의 정의와 존엄을 위한 목소리를 지역사회와 함께 나누고 기억의 책임을 다시 확인했습니다.", photos: [photo(63, "생존자를 위한 정의의 목소리 행사 안내")] },
  { year: "2026", date: "1 Mar 2026", category: "international", title: "CAPA와 지역 연대 관계자 소녀상 방문", copy: "CAPA 관계자들과 Back to Banka의 작가 Georgina Banks, Australian Nurses Memorial Centre 회장 Arlene Bennett가 멜번 평화의 소녀상을 방문했습니다. 피해자들의 기억을 이어가고 평화를 위한 연대를 넓혀 나갈 방향을 함께 나눴습니다.", photos: [photo(64, "평화의 소녀상 앞에 모인 CAPA와 FCWM 관계자들"), { src: "https://images.fcwmelbourne.org/events/2026/capa-statue-visit/02-statue-visit-discussion.webp", alt: "CAPA와 지역 연대 관계자들의 소녀상 방문 및 대화" }] },
  { year: "2026", date: "7 Mar 2026", category: "international", featured: true, title: "Women’s Voices: War, Memory and the Pursuit of Peace", copy: "국제 여성의 날을 맞아 CAPA, RMIT 연구진 등과 함께 전쟁·기억·평화를 주제로 공동 포럼을 개최했습니다.", photos: [
    photo(66, "전쟁·기억·평화를 주제로 열린 국제 여성의 날 포럼"),
    { src: "https://images.fcwmelbourne.org/events/2026/womens-voices-forum/03-group-picture.webp", alt: "Women’s Voices 포럼 단체사진" },
    photo(65, "Women’s Voices 국제 여성의 날 포럼 안내"),
  ] },
  { year: "2026", date: "8 Aug 2026", category: "international", title: "시드니 평화의 소녀상 10주년 연대", copy: "시드니 평화의 소녀상 연대(FCWS)가 주최한 건립 10주년 기념행사에 참석하고 축하·연대 영상을 전달했습니다. 지난 10년의 활동을 함께 기념하며, 호주 내 평화의 소녀상 운동의 연대를 이어갔습니다.", video: { src: "https://images.fcwmelbourne.org/events/2026/sydney-statue-10th-anniversary/03-congratulations-video.mp4", poster: "https://images.fcwmelbourne.org/events/2026/sydney-statue-10th-anniversary/02-congratulations-video-thumbnail.png" }, photos: [
    { src: "https://images.fcwmelbourne.org/events/2026/sydney-statue-10th-anniversary/01-anniversary-poster.webp", alt: "시드니 평화의 소녀상 건립 10주년 기념행사 포스터" },
    { src: "https://images.fcwmelbourne.org/events/2026/sydney-statue-10th-anniversary/06-sydney-group-photo.webp", alt: "시드니 평화의 소녀상 건립 10주년 기념행사 단체사진" },
    { src: "https://images.fcwmelbourne.org/events/2026/sydney-statue-10th-anniversary/04-poster.webp", alt: "시드니 평화의 소녀상 건립 10주년 관련 포스터" },
    { src: "https://images.fcwmelbourne.org/events/2026/sydney-statue-10th-anniversary/05-sydney-statue.webp", alt: "시드니 평화의 소녀상 모습" },
  ] },
  { year: "2026", date: "15 Aug 2026", category: "culture", featured: true, title: "광복절과 일본군 ‘위안부’ 피해자 기림의 날", copy: "광복절과 일본군 ‘위안부’ 피해자 기림의 날을 함께 기억하는 행사를 진행했습니다.", photos: [
    { src: "https://images.fcwmelbourne.org/events/2026/girim-day/05-kim-seo-kyung-speech.webp", alt: "2026년 광복절과 일본군 위안부 피해자 기림의 날 행사에서 김서경 작가가 강연하는 모습" },
    { src: "https://images.fcwmelbourne.org/events/2026/girim-day/02-commemorative-address.webp", alt: "2026년 광복절과 일본군 위안부 피해자 기림의 날 기념사" },
    { src: "https://images.fcwmelbourne.org/events/2026/girim-day/03-youth-performance.webp", alt: "2026년 광복절과 일본군 위안부 피해자 기림의 날 청소년 공연" },
    { src: "https://images.fcwmelbourne.org/events/2026/girim-day/04-stage-reading.webp", alt: "2026년 광복절과 일본군 위안부 피해자 기림의 날 무대 낭독" },
    photo(69, "2026년 광복절과 일본군 위안부 피해자 기림 행사 안내 포스터"),
  ] },
  { year: "2026", date: "12 Sep 2026", category: "culture", featured: true, title: "《귀향》 10주년 멜번 특별상영회", messageVideo: { src: "https://images.fcwmelbourne.org/events/2026/spirits-homecoming/07-solidarity-video-messages.mp4", poster: "https://images.fcwmelbourne.org/events/2026/spirits-homecoming/05-event-poster-ko.webp" }, copy: "영화 《귀향》 개봉 10주년을 맞아 특별상영회를 열고, 일본군 ‘위안부’ 피해자들의 이야기와 기억의 의미를 지역사회와 나눴습니다.", photos: [
    { src: "https://images.fcwmelbourne.org/events/2026/spirits-homecoming/03-paper-planes.jpg", alt: "귀향 상영회 종이비행기" },
    { src: "https://images.fcwmelbourne.org/events/2026/spirits-homecoming/01-audience.jpg", alt: "귀향 상영회 관객" },
    { src: "https://images.fcwmelbourne.org/events/2026/spirits-homecoming/02-welcome-desk.jpg", alt: "귀향 상영회 안내 데스크" },
    { src: "https://images.fcwmelbourne.org/events/2026/spirits-homecoming/04-photo-zone.jpg", alt: "귀향 상영회 포토존" },
    { src: "https://images.fcwmelbourne.org/events/2026/spirits-homecoming/05-event-poster-ko.webp", alt: "귀향 10주년 멜번 특별상영회 포스터" }], sources: [
      { label: "SBS 한국어 보도", href: "https://www.sbs.com.au/language/korean/ko/podcast-episode/k-art-gwihyang-melbourne-aussiebrosquad/gj9xglt7i" },
      { label: "톱스타뉴스 보도", href: "https://www.topstarnews.net/news/articleView.html?idxno=16172128" },
      { label: "아태경제저널 보도", href: "https://www.apej.kr/bbs/board.php?bo_table=news&wr_id=8090" },
    ] },
  { year: "2026", date: "19 Sep 2026", category: "culture", featured: true, title: "Connecting Memories Through Art", copy: "다양한 배경의 예술가와 시민이 함께한 전시를 통해 전쟁과 여성의 기억을 나누고, 평화와 존엄의 가치를 되새겼습니다.", photos: [
    { src: "https://images.fcwmelbourne.org/events/2026/cmta/03-audience.jpg", alt: "CMTA 전시 관객" },
    { src: "https://images.fcwmelbourne.org/events/2026/cmta/01-award-presentation.jpg", alt: "CMTA 시상식" },
    { src: "https://images.fcwmelbourne.org/events/2026/cmta/02-artist-presentation.jpg", alt: "CMTA 작가 발표" },
    { src: "https://images.fcwmelbourne.org/events/2026/cmta/07-audience-2.jpg", alt: "CMTA 전시 관객 모습" },
    { src: "https://images.fcwmelbourne.org/events/2026/cmta/08-chinese-statue.jpg", alt: "CMTA 전시의 중국 소녀상" },
    { src: "https://images.fcwmelbourne.org/events/2026/cmta/04-main-poster.png", alt: "Connecting Memories Through Art 전시 포스터" }], sources: [
      { label: "전시 웹사이트", href: "https://connectingmemory.org/" },
      { label: "오마이뉴스 보도", href: "https://omn.kr/2jwk3" },
      { label: "아트코리아TV 보도", href: "https://www.artkoreatv.com/news/articleView.html?idxno=104652" },
    ] },
];
