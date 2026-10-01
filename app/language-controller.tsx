"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { englishTranslations } from "./i18n-translations";

export type SiteLanguage = "ko" | "en";

const LanguageContext = createContext<{
  language: SiteLanguage;
  setLanguage: (language: SiteLanguage) => void;
}>({ language: "ko", setLanguage: () => undefined });

const normalise = (value: string) => value.replace(/\s+/g, " ").trim();

function translateDynamic(value: string) {
  const text = normalise(value);
  const direct = englishTranslations[text];
  if (direct) return direct;

  let match = text.match(/^총 (\d+)개 외부 자료$/);
  if (match) return `${match[1]} external resources`;
  match = text.match(/^(\d+)개 활동$/);
  if (match) return `${match[1]} activities`;
  match = text.match(/^(\d+)개의 주요 활동$/);
  if (match) return `${match[1]} featured activities`;
  match = text.match(/^(\d+)번째 사진$/);
  if (match) return `Photo ${match[1]}`;
  match = text.match(/^(\d{2}) (.+)$/);
  if (match) return `${match[1]} ${englishTranslations[normalise(match[2])] ?? match[2]}`;
  match = text.match(/^(.+) 원본 사진 보기$/);
  if (match) return `View original photo: ${englishTranslations[normalise(match[1])] ?? match[1]}`;
  match = text.match(/^(.+) 자세히 보기$/);
  if (match) return `View ${englishTranslations[normalise(match[1])] ?? match[1]} in detail`;
  match = text.match(/^(.+) 사진$/);
  if (match) return `${englishTranslations[normalise(match[1])] ?? match[1]} photos`;
  return value;
}

const textOriginals = new WeakMap<Text, string>();
const attributeOriginals = new WeakMap<Element, Map<string, string>>();
const translatedAttributes = ["alt", "aria-label", "title", "placeholder"];

function applyLanguage(root: ParentNode, language: SiteLanguage) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode() as Text | null;
  while (node) {
    const parent = node.parentElement;
    if (parent && !["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) {
      const stored = textOriginals.get(node);
      if (!stored || /[가-힣]/.test(node.data)) textOriginals.set(node, stored ?? node.data);
      const original = textOriginals.get(node) ?? node.data;
      const next = language === "en" ? translateDynamic(original) : original;
      if (node.data !== next) node.data = next;
    }
    node = walker.nextNode() as Text | null;
  }

  const elements = root instanceof Element ? [root, ...root.querySelectorAll("*")] : [...root.querySelectorAll("*")];
  elements.forEach((element) => {
    let originals = attributeOriginals.get(element);
    if (!originals) {
      originals = new Map<string, string>();
      attributeOriginals.set(element, originals);
    }
    translatedAttributes.forEach((attribute) => {
      const current = element.getAttribute(attribute);
      if (current === null) return;
      if (!originals!.has(attribute) || /[가-힣]/.test(current)) originals!.set(attribute, current);
      const original = originals!.get(attribute) ?? current;
      const next = language === "en" ? translateDynamic(original) : original;
      if (current !== next) element.setAttribute(attribute, next);
    });
  });
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, updateLanguage] = useState<SiteLanguage>("ko");

  useEffect(() => {
    const saved = window.localStorage.getItem("fcwm-language");
    const initial: SiteLanguage = saved === "en" ? "en" : "ko";
    setLanguage(initial);
  }, []);

  const setLanguage = (next: SiteLanguage) => {
    updateLanguage(next);
    window.localStorage.setItem("fcwm-language", next);
    document.documentElement.lang = next === "en" ? "en-AU" : "ko";
    document.documentElement.dataset.language = next;
    applyLanguage(document.body, next);
  };

  useEffect(() => {
    applyLanguage(document.body, language);
    const observer = new MutationObserver((mutations) => {
      observer.disconnect();
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((added) => {
            if (added instanceof Text) {
              const parent = added.parentNode;
              if (parent) applyLanguage(parent, language);
            } else if (added instanceof Element) {
              applyLanguage(added, language);
            }
          });
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useSiteLanguage() {
  return useContext(LanguageContext);
}

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage } = useSiteLanguage();
  return (
    <div className={`language-switcher${compact ? " language-switcher-mobile" : ""}`} role="group" aria-label={language === "en" ? "Site language" : "사이트 언어"}>
      <button type="button" className={language === "ko" ? "is-active" : ""} aria-pressed={language === "ko"} onClick={() => setLanguage("ko")}>한국어</button>
      <span aria-hidden="true">/</span>
      <button type="button" className={language === "en" ? "is-active" : ""} aria-pressed={language === "en"} onClick={() => setLanguage("en")}>EN</button>
    </div>
  );
}
