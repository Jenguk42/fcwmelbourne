"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelectors = [
  ".history-heading",
  ".history-layout",
  ".mission-content",
  ".home-achievement",
  ".home-work-heading",
  ".work-area-card",
  ".about-introduction > *",
  ".about-principles",
  ".journey-heading",
  ".timeline-entry",
  ".future-grid",
  ".about-next",
  ".statue-introduction-lead > *",
  ".statue-education-section > *",
  ".inner-hero-copy",
  ".activities-hero-stats",
  ".activity-toolbar",
  ".activity-filters",
  ".activity-year",
  ".activity-closing",
  ".project-row",
  ".global-project-heading",
  ".global-project-body",
  ".projects-cta",
  ".faq-category-nav",
  ".faq-group",
  ".faq-contact",
  ".resource-section-nav",
  ".resource-note",
  ".resource-section",
].join(",");

export function MotionShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelectors),
    );

    elements.forEach((element, index) => {
      element.classList.add("scroll-reveal");
      const isCard = element.matches(".work-area-card");
      if (isCard) {
        element.style.setProperty("--reveal-delay", `${(index % 3) * 75}ms`);
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div className="site-page-transition" key={pathname}>
      {children}
    </div>
  );
}
