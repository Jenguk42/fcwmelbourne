import Link from "next/link";
import { MobileNavigation } from "./mobile-navigation";

const navItems = [
  { label: "홈", href: "/" },
  { label: "단체 소개", href: "/about" },
  { label: "소녀상 소개", href: "/statue" },
  { label: "활동 기록", href: "/activities" },
  { label: "프로젝트", href: "/projects" },
  { label: "자료·보도", href: "/resources" },
  { label: "자주 묻는 질문", href: "/faq" },
];

export function Header({ overlay = false }: { overlay?: boolean }) {
  return (
    <header className={`site-header${overlay ? " site-header-overlay" : ""}`}>
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="FCWM 홈">
          <img src="https://images.fcwmelbourne.org/site/branding/fcwm-logo.png" alt="FCWM" />
          <span>
            Friends of
            <br />
            ‘Comfort Women’
            <br />
            Melbourne
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="주요 메뉴">
          {navItems.map((item) =>
            item.href.startsWith("http") ? (
              <a className="cmta-nav-link" href={item.href} key={item.label} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ) : (
              <Link href={item.href} key={item.label}>
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <MobileNavigation items={navItems} />
      </div>
    </header>
  );
}

export function PhotoPlaceholder({
  label = "활동 사진",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div className={`photo-placeholder ${className}`} aria-label={`${label} 추가 예정`}>
      <span aria-hidden="true">
        <svg viewBox="0 0 28 28">
          <path d="M4.5 7.5h5l1.7-2h5.6l1.7 2h5v15h-19z" />
          <circle cx="14" cy="14.5" r="4.2" />
        </svg>
      </span>
      <p>{label}</p>
      <small>사진 추가 예정</small>
    </div>
  );
}

export function DrivePhoto({
  fileId,
  alt,
  caption,
  className = "",
  eager = false,
}: {
  fileId: string;
  alt: string;
  caption: string;
  className?: string;
  eager?: boolean;
}) {
  const viewUrl = `https://drive.google.com/file/d/${fileId}/view`;
  const imageUrl = `https://lh3.googleusercontent.com/d/${fileId}=w1800`;

  return (
    <figure className={`site-photo ${className}`}>
      <a href={viewUrl} target="_blank" rel="noreferrer" aria-label={`${caption} 원본 사진 보기`}>
        <img
          src={imageUrl}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
        />
      </a>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <img src="https://images.fcwmelbourne.org/site/branding/fcwm-logo.png" alt="FCWM" />
          <p>
            멜번 평화의 소녀상 연대
            <br />
            Melbourne, Victoria
          </p>
        </div>
        <div className="footer-links" aria-label="하단 메뉴">
          <div>
            <strong>둘러보기</strong>
            <Link href="/about">단체 소개</Link>
            <Link href="/statue">소녀상 소개</Link>
            <Link href="/activities">활동 기록</Link>
            <Link href="/projects">프로젝트</Link>
            <Link href="/resources">자료·보도</Link>
          </div>
          <div>
            <strong>함께하기</strong>
            <Link href="/faq">자주 묻는 질문</Link>
            <Link href="/faq#contact">직접 문의하기</Link>
            <a href="https://www.instagram.com/fcwm_au/" target="_blank" rel="noreferrer">
              Instagram {"\u2197\uFE0E"}
            </a>
          </div>
          <div>
            <strong>연락처</strong>
            <a href="mailto:melbournestatue@gmail.com">melbournestatue@gmail.com</a>
            <span>Melbourne, Victoria</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Friends of ‘Comfort Women’ Melbourne</span>
        <span>기억 · 존엄 · 연대</span>
      </div>
    </footer>
  );
}

export function Butterfly({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 38"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M22.8 19.8C18 4.3 6.8 1.4 4.9 7.6c-2 6.7 5.9 13.4 17.9 14.3M25.2 19.8C30 4.3 41.2 1.4 43.1 7.6c2 6.7-5.9 13.4-17.9 14.3M22.2 22.1C13.9 20.8 8.1 25.2 11 30c2.9 4.9 9.3 1.4 12.7-7M25.8 22.1c8.3-1.3 14.1 3.1 11.2 7.9-2.9 4.9-9.3 1.4-12.7-7"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path d="M24 15.5v13.2" stroke="#9f751f" strokeWidth="1.4" />
    </svg>
  );
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-eyebrow">
      <span />
      <p>{children}</p>
    </div>
  );
}
