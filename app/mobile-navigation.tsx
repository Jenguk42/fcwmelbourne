"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSiteLanguage } from "./language-controller";

type NavItem = {
  label: string;
  href: string;
};

export function MobileNavigation({ items }: { items: NavItem[] }) {
  const { language } = useSiteLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", open);

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("mobile-menu-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <div className="mobile-navigation">
      <button
        className={`menu-toggle${open ? " is-open" : ""}`}
        type="button"
        aria-label={language === "en" ? (open ? "Close menu" : "Open menu") : (open ? "메뉴 닫기" : "메뉴 열기")}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <button
        className={`mobile-menu-scrim${open ? " is-open" : ""}`}
        type="button"
        aria-label={language === "en" ? "Close menu" : "메뉴 닫기"}
        tabIndex={open ? 0 : -1}
        onClick={() => setOpen(false)}
      />

      <nav
        id="mobile-menu"
        className={`mobile-menu-panel${open ? " is-open" : ""}`}
        aria-label={language === "en" ? "Mobile navigation" : "모바일 주요 메뉴"}
        aria-hidden={!open}
      >
        <div className="mobile-menu-heading">
          <span>MENU</span>
          <p>기억 · 존엄 · 연대</p>
        </div>
        <div className="mobile-menu-links">
          {items.map((item, index) =>
            item.href.startsWith("http") ? (
              <a
                className="cmta-mobile-nav-link"
                href={item.href}
                key={item.label}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ) : (
              <Link href={item.href} key={item.label} onClick={() => setOpen(false)}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </Link>
            ),
          )}
        </div>
      </nav>
    </div>
  );
}
