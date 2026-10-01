"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  activities,
  activityCategories,
  type ActivityCategory,
} from "../activity-data";
import { PhotoCarousel } from "../photo-carousel";
import { ActivityVideo } from "../activity-video";
import { useSiteLanguage } from "../language-controller";

const years = ["2026", "2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016"] as const;

export function ActivityFilter() {
  const { language } = useSiteLanguage();
  const [activeCategory, setActiveCategory] = useState<ActivityCategory>("all");
  const [displayCategory, setDisplayCategory] = useState<ActivityCategory>("all");
  const [isChanging, setIsChanging] = useState(false);
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const filtered = useMemo(
    () =>
      displayCategory === "all"
        ? activities
        : activities.filter((activity) => activity.category === displayCategory),
    [displayCategory],
  );

  useEffect(
    () => () => {
      if (transitionTimer.current) clearTimeout(transitionTimer.current);
    },
    [],
  );

  const selectCategory = (category: ActivityCategory) => {
    if (category === activeCategory) return;
    if (transitionTimer.current) clearTimeout(transitionTimer.current);

    setActiveCategory(category);
    setIsChanging(true);
    transitionTimer.current = setTimeout(() => {
      setDisplayCategory(category);
      requestAnimationFrame(() => setIsChanging(false));
    }, 190);
  };

  const englishCategoryLabels: Record<ActivityCategory, string> = {
    all: "All",
    education: "Education & youth",
    culture: "Commemoration & culture",
    community: "Community",
    international: "International solidarity",
    preservation: "Statue establishment & care",
  };

  const labelFor = (category: ActivityCategory) => language === "en"
    ? englishCategoryLabels[category]
    : activityCategories.find((item) => item.id === category)?.label ?? category;

  return (
    <section className="activity-browser" id="activity-list" aria-labelledby="activity-browser-title">
      <div className="activity-toolbar">
        <div>
          <p className="activity-toolbar-kicker">활동 분야로 찾아보기</p>
          <h2 id="activity-browser-title">우리의 활동 기록</h2>
        </div>
        <p className="filter-result" aria-live="polite">
          {displayCategory === "all" ? labelFor("all") : labelFor(displayCategory)} · {filtered.length}{language === "en" ? " activities" : "개 활동"}
        </p>
      </div>

      <div className="activity-filters" role="group" aria-label="활동 분야 필터">
        {activityCategories.map((category) => (
          <button
            type="button"
            className={activeCategory === category.id ? "is-active" : ""}
            aria-pressed={activeCategory === category.id}
            onClick={() => selectCategory(category.id)}
            key={category.id}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div
        className={`activity-years${isChanging ? " is-changing" : ""}`}
        aria-busy={isChanging}
      >
        {years.map((year) => {
          const yearActivities = filtered.filter((activity) => activity.year === year);
          if (!yearActivities.length) return null;

          return (
            <section className="activity-year" key={year} aria-labelledby={`year-${year}`}>
              <header className="activity-year-heading">
                <span>{year}</span>
                <div>
                  <h3 id={`year-${year}`}>{yearActivities.length}{language === "en" ? " featured activities" : "개의 주요 활동"}</h3>
                </div>
              </header>

              <div className="activity-card-grid">
                {yearActivities.map((activity) => (
                  <article
                    className={`activity-card${activity.featured ? " activity-card-featured" : ""}${activity.supporting ? " activity-card-supporting" : ""}`}
                    key={`${activity.year}-${activity.title}`}
                  >
                    {activity.photos?.length ? (
                      <PhotoCarousel className="activity-card-media" photos={activity.photos} label={`${activity.title} 사진`} />
                    ) : (
                      <div className="activity-card-mark" aria-hidden="true">
                        <span>{activity.year}</span>
                        <img src="https://images.fcwmelbourne.org/site/graphics/butterflies/butterfly-03.png" alt="" />
                      </div>
                    )}
                    <div className="activity-card-copy">
                      <div className="activity-card-meta">
                        <span className={`category-tag category-${activity.category}`}>
                          {labelFor(activity.category)}
                        </span>
                        {activity.date ? <time>{activity.date}</time> : null}
                      </div>
                      <h4>{activity.title}</h4>
                      <p>{activity.copy}</p>
                      {activity.video ? (
                        <div className="source-link-row activity-source-links">
                          <ActivityVideo {...activity.video} title={activity.title} />
                        </div>
                      ) : null}
                      {activity.sources?.length ? (
                        <div className="source-link-row activity-source-links">
                          {activity.sources.map((source) => (
                            <a
                              href={source.href}
                              target="_blank"
                              rel="noreferrer"
                              key={source.href}
                            >
                              {source.label} <span aria-hidden="true">{"\u2197\uFE0E"}</span>
                            </a>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
