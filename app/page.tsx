'use client';

import { useState } from "react";

import EmailForm from "@/components/EmailForm";
import type { EmailFormCopy } from "@/components/EmailForm";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const siteLogo =
  process.env.NEXT_PUBLIC_LOGO ??
  "https://res.cloudinary.com/dyv1yduua/image/upload/v1733392810/speaker_oiuezn.svg";
const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? "DeleteTweets.net";
const defaultTagline =
  process.env.NEXT_PUBLIC_SITE_TAGLINE ?? "Digital legacy manager";

type TitleSegment = { text: string; accent?: boolean };

type Translation = {
  languageName: string;
  languageCode: string;
  brandTagline: string;
  hero: {
    kicker: string;
    title: TitleSegment[];
    subtitle: string;
    supporting: string;
    bullets: { title: string; description: string }[];
    ctaHeading: string;
    ctaParagraph: string;
    limitedOffer: {
      badge: string;
      headline: string;
      description: string;
    };
  };
  form: EmailFormCopy;
  features: {
    title: string;
    description: string;
    items: { title: string; description: string }[];
  };
  journey: {
    title: string;
    description: string;
    steps: { title: string; description: string }[];
    footnote: string;
  };
};

const translations: Record<"en" | "zh", Translation> = {
  en: {
    languageName: "English",
    languageCode: "EN",
    brandTagline: defaultTagline,
    hero: {
      kicker: "A calm reset for your Twitter history",
      title: [
        { text: siteName, accent: true },
        { text: " puts you back in charge" },
        { text: " of every tweet." },
      ],
      subtitle:
        "We reshape an anxious bulk delete into a guided experience so you always understand every decision you make.",
      supporting:
        "Crafted for professionals, creators, and anyone ready to refresh their digital presence without losing control.",
      bullets: [
        {
          title: "Clarity over clutter",
          description:
            "A single, focused flow keeps the interface quiet so the next right step is always obvious.",
        },
        {
          title: "Safeguards at every turn",
          description:
            "Guided confirmations and built-in ‘speed bumps’ make irreversible mistakes a thing of the past.",
        },
        {
          title: "Transparent status",
          description:
            "Live progress indicators show scans, queues, and results so you can trust what happens behind the scenes.",
        },
      ],
      ctaHeading: "Join the early-access waitlist",
      ctaParagraph:
        "Be first in line for guided onboarding, instant scans, vault-grade backups, and powerful filters built for peace of mind.",
      limitedOffer: {
        badge: "Limited to 100",
        headline: "Free month of Premium for early supporters",
        description:
          "The first 100 subscribers receive a complimentary month of our Premium plan. Spots are already getting claimed—lock yours in before they disappear.",
      },
    },
    form: {
      nameLabel: "Full name",
      namePlaceholder: "How should we address you?",
      emailLabel: "Email address",
      emailPlaceholder: "you@example.com",
      submitLabel: "Notify me at launch",
      successMessage:
        "Thanks for joining the waitlist! We’ll be in touch with early updates soon.",
      errorMessage: "Something went wrong. Please try again.",
      finePrint:
        "We use Resend to securely manage waitlist updates. No spam, you can unsubscribe anytime, and early spots include a free month of Premium.",
    },
    features: {
      title: "What you unlock on day one",
      description:
        "Every capability balances speed with safety so you can clean house without second guessing.",
      items: [
        {
          title: "Guided onboarding",
          description:
            "Connect through a secure browser extension with clear reassurance at each step.",
        },
        {
          title: "Quick Scan",
          description:
            "Scan the latest 100 tweets in minutes, apply filters, and launch a focused clean-up immediately.",
        },
        {
          title: "Complete Mode",
          description:
            "Upload your Twitter archive for 100% precise housekeeping across your entire history.",
        },
        {
          title: "Tweets Vault & Recycle Bin",
          description:
            "Stage, protect, or restore important posts before deciding what should disappear for good.",
        },
      ],
    },
    journey: {
      title: "Your path to a refreshed timeline",
      description:
        "From the first connection to the final state, every step is scripted to keep you in control.",
      steps: [
        {
          title: "Connect with confidence",
          description:
            "Install the extension and link your account without ever sharing a password.",
        },
        {
          title: "Understand the landscape",
          description:
            "A focused dashboard surfaces account stats, credits, and active tasks at a glance.",
        },
        {
          title: "Test-drive Quick Scan",
          description:
            "Experience the workflow by tidying your latest tweets before making bigger decisions.",
        },
        {
          title: "Activate Complete Mode",
          description:
            "Upload your archive and let the system locate every tweet, no matter how far back it goes.",
        },
        {
          title: "Stage in the Tweets Vault",
          description:
            "Keep content safe while you review, search, and decide what stays or goes.",
        },
        {
          title: "Rely on the Recycle Bin",
          description:
            "Undo or protect deletions until you are ready for the final, irreversible confirmation.",
        },
      ],
      footnote:
        "Step away at any time. When you return, your progress and pending actions resume exactly where you left off.",
    },
  },
  zh: {
    languageName: "中文",
    languageCode: "中",
    brandTagline: "负责任的推文整理管家",
    hero: {
      kicker: "让整理过往成为安心体验",
      title: [
        { text: siteName, accent: true },
        { text: " 让您的推文清理重新回到掌控之中" },
      ],
      subtitle:
        "我们把令人焦虑的批量删除流程，打造成清晰、可预期的引导，让每一次操作都心中有数。",
      supporting:
        "专为创作者、职场人士以及期待焕新的每一位用户打造，帮助您重塑数字形象。",
      bullets: [
        {
          title: "清晰至上",
          description:
            "单列沉浸式流程，没有冗余干扰，聚焦当下需要做出的决定。",
        },
        {
          title: "多重保障",
          description:
            "“减速带”和“安全阀”设计让您在每一个关键节点都能确认风险，不再担心误删。",
        },
        {
          title: "状态透明",
          description:
            "扫描、任务、完成或暂停，每一个进度都有即时反馈，完全掌握系统动态。",
        },
      ],
      ctaHeading: "加入候补名单",
      ctaParagraph:
        "第一时间体验安全接入、极速扫描、保险箱与回收站等核心能力，亲手掌控推文整理节奏。",
      limitedOffer: {
        badge: "限量 100 名",
        headline: "前 100 位订阅者获赠 1 个月 Premium",
        description:
          "名额正在快速增加，抢占席位即可免费体验一个月高级功能，率先感受全流程整理体验。",
      },
    },
    form: {
      nameLabel: "称呼",
      namePlaceholder: "我们该如何称呼您？",
      emailLabel: "邮箱",
      emailPlaceholder: "you@example.com",
      submitLabel: "上线时通知我",
      successMessage: "感谢加入候补名单，我们会第一时间发送最新进展。",
      errorMessage: "提交失败，请稍后再试。",
      finePrint:
        "我们通过 Resend 安全管理候补名单，仅在有重要更新时联系，且前 100 名还将免费体验 1 个月 Premium，可随时一键退订。",
    },
    features: {
      title: "上线首日即可使用的关键能力",
      description:
        "每一个功能都在“高效”与“安全”之间找到平衡，帮助您稳步推进整理计划。",
      items: [
        {
          title: "安心引导连接",
          description:
            "通过浏览器扩展安全接入，搭配轻松易懂的说明，建立足够信任感。",
        },
        {
          title: "快速扫描清理",
          description:
            "几分钟内扫描最近 100 条推文，利用筛选条件快速启动体验。",
        },
        {
          title: "完整清理模式",
          description:
            "上传推特归档文件后，100% 精准定位每一条历史推文。",
        },
        {
          title: "推文保险箱与回收站",
          description:
            "先把重要推文放入保险箱，再决定是否彻底删除或改为保护模式。",
        },
      ],
    },
    journey: {
      title: "从连接到焕新，一条清晰路径",
      description:
        "整个旅程按照“安全、透明、可逆”的原则设计，让您始终保持掌控感。",
      steps: [
        {
          title: "安全连接账户",
          description:
            "安装浏览器扩展，即可在本地完成授权，无需分享密码。",
        },
        {
          title: "掌握整体概况",
          description:
            "仪表盘即时呈现账号信息、积分与任务状态，第一眼就看懂。",
        },
        {
          title: "体验快速扫描",
          description:
            "通过 100 条推文的快速扫描，提前熟悉整个清理流程。",
        },
        {
          title: "启动完整清理",
          description:
            "上传归档文件，精准处理全部历史推文，按需设置过滤条件。",
        },
        {
          title: "运用推文保险箱",
          description:
            "先把犹豫的内容放入保险箱，慢慢筛选、标记、再做决定。",
        },
        {
          title: "借助回收站兜底",
          description:
            "回收站保存已删除和即将删除的内容，随时恢复或改为保护。",
        },
      ],
      footnote:
        "即使中途退出或网络中断，重新登录后也会无缝恢复到当前进度。",
    },
  },
};

type Locale = keyof typeof translations;

export default function Home() {
  const [locale, setLocale] = useState<Locale>("zh");
  const t = translations[locale];

  return (
    <div className="w-full bg-[#F8F9FA] text-slate-700">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-20 px-6 py-12 sm:px-8 lg:px-12">
        <header className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={siteLogo}
              alt={`${siteName} logo`}
              className="h-10 w-auto"
            />
            <div className="text-sm uppercase tracking-[0.32em] text-[#4A90E2]">
              {t.brandTagline}
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-[#4A90E2]/20 bg-white/50 p-1 shadow-sm">
            {(Object.keys(translations) as Locale[]).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLocale(code)}
                aria-pressed={locale === code}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition",
                  locale === code
                    ? "bg-[#4A90E2] text-white shadow"
                    : "text-slate-500 hover:text-slate-800"
                )}
              >
                {translations[code].languageName}
              </button>
            ))}
          </div>
        </header>

        <main className="flex flex-col gap-24 pb-12">
          <section className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-8">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#4A90E2]/10 px-4 py-1.5 text-sm font-medium text-[#1F2937]">
                <span className="h-2 w-2 rounded-full bg-[#50E3C2]" aria-hidden="true" />
                {t.hero.kicker}
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                {t.hero.title.map((segment, index) => (
                  <span
                    key={`${segment.text}-${index}`}
                    className={segment.accent ? "text-[#4A90E2]" : undefined}
                  >
                    {segment.text}
                  </span>
                ))}
              </h1>
              <p className="max-w-2xl text-lg text-slate-600">{t.hero.subtitle}</p>
              <p className="max-w-2xl text-base text-slate-500">{t.hero.supporting}</p>

              <ul className="grid gap-6 sm:grid-cols-2">
                {t.hero.bullets.map((item) => (
                  <li
                    key={item.title}
                    className="space-y-2 border-l-4 border-[#50E3C2]/70 pl-4"
                  >
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-slate-900">
                  {t.hero.ctaHeading}
                </h2>
                <p className="text-base text-slate-600">{t.hero.ctaParagraph}</p>
              </div>
              <div className="space-y-2 border-l-4 border-[#4A90E2] bg-[#4A90E2]/5 px-4 py-3 text-slate-700">
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4A90E2]">
                  {t.hero.limitedOffer.badge}
                </span>
                <p className="text-lg font-semibold text-slate-900">
                  {t.hero.limitedOffer.headline}
                </p>
                <p className="text-sm text-slate-600">
                  {t.hero.limitedOffer.description}
                </p>
              </div>
              <EmailForm
                includeName={false}
                copy={t.form}
                className="max-w-xl"
              />
            </div>
          </section>

          <section className="space-y-8 border-t border-slate-200 pt-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-slate-900">
                {t.features.title}
              </h2>
              <p className="max-w-3xl text-base text-slate-600">
                {t.features.description}
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {t.features.items.map((item) => (
                <div key={item.title} className="space-y-2 border-l-2 border-[#4A90E2]/40 pl-5">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-8 border-t border-slate-200 pt-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-slate-900">
                {t.journey.title}
              </h2>
              <p className="max-w-3xl text-base text-slate-600">
                {t.journey.description}
              </p>
            </div>
            <ol className="grid gap-6 md:grid-cols-2">
              {t.journey.steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#4A90E2]/15 text-sm font-semibold text-[#4A90E2]">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-sm text-slate-500">{t.journey.footnote}</p>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
