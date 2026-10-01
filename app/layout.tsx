import type { Metadata } from "next";
import "./globals.css";
import { MotionShell } from "./motion-shell";
import { ScrollToTop } from "./scroll-to-top";
import { PhotoLightbox } from "./photo-lightbox";
import { LanguageProvider, LanguageSwitcher } from "./language-controller";

const siteUrl = "https://www.fcwmelbourne.org";
const socialTitle = "Friends of ‘Comfort Women’ Melbourne | FCWM";
const socialDescription =
  "일본군 ‘위안부’ 피해자들의 존엄과 명예를 지키고, 기억을 교육과 실천으로 이어가며 인권과 평화의 가치를 나눕니다.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Friends of ‘Comfort Women’ Melbourne",
  title: {
    default: socialTitle,
    template: "%s | FCWM",
  },
  description: socialDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Friends of ‘Comfort Women’ Melbourne",
    title: socialTitle,
    description: socialDescription,
    locale: "ko_KR",
    alternateLocale: ["en_AU"],
    images: [
      {
        url: "https://images.fcwmelbourne.org/site/branding/social-preview.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Friends of ‘Comfort Women’ Melbourne — Memory. Dignity. Solidarity.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description: socialDescription,
    images: ["https://images.fcwmelbourne.org/site/branding/social-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "https://images.fcwmelbourne.org/site/branding/favicon.png", type: "image/png", sizes: "512x512" }],
    shortcut: "https://images.fcwmelbourne.org/site/branding/favicon.png",
    apple: [{ url: "https://images.fcwmelbourne.org/site/branding/favicon.png", sizes: "512x512", type: "image/png" }],
  },
  other: {
    "codex-preview": "development",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var l=localStorage.getItem('fcwm-language')==='en'?'en':'ko';document.documentElement.lang=l==='en'?'en-AU':'ko';document.documentElement.dataset.language=l;}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <LanguageProvider>
          <MotionShell>{children}</MotionShell>
          <div className="floating-language-pill">
            <LanguageSwitcher />
          </div>
          <ScrollToTop />
          <PhotoLightbox />
        </LanguageProvider>
      </body>
    </html>
  );
}
