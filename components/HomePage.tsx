'use client';

import { useState } from "react";
import EmailForm from "@/components/EmailForm";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";

type Locale = "en" | "zh";

type HomePageProps = {
    initialLocale: Locale;
    translations: any;
    switcherTranslations: any;
};

const siteLogo = process.env.NEXT_PUBLIC_LOGO ?? "https://res.cloudinary.com/dyv1yduua/image/upload/v1733392810/speaker_oiuezn.svg";
const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? "DeleteTweets.net";

export default function HomePage({
    initialLocale,
    translations,
    switcherTranslations,
}: HomePageProps) {
    const [locale, setLocale] = useState<Locale>(initialLocale);
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
                    <LanguageSwitcher
                        translations={switcherTranslations}
                        currentLocale={locale}
                        onLocaleChange={setLocale}
                    />
                </header>

                <main className="flex flex-col gap-24 pb-12">
                    <section className="flex flex-col gap-12">
                        <div className="space-y-8">
                            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#4A90E2]/10 px-4 py-1.5 text-sm font-medium text-[#1F2937]">
                                <span className="h-2 w-2 rounded-full bg-[#50E3C2]" aria-hidden="true" />
                                {t.hero.kicker}
                            </span>
                            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                                {t.hero.title.map((segment: any, index: number) => (
                                    <span
                                        key={`${segment.text}-${index}`}
                                        className={segment.accent ? "text-[#4A90E2]" : undefined}
                                    >
                                        {segment.text}
                                    </span>
                                ))}
                            </h1>
                            <p className="text-lg text-slate-600">{t.hero.subtitle}</p>

                            <div className="flex justify-center py-8">
                                <div className="w-full max-w-xl p-8 bg-white rounded-2xl shadow-lg border border-slate-100">
                                    <EmailForm
                                        includeName={false}
                                        copy={t.form}
                                        className="w-full"
                                    />
                                </div>
                            </div>

                            <p className="max-w-2xl text-base text-slate-500">{t.hero.supporting}</p>
                            <ul className="grid gap-6 sm:grid-cols-3">
                                {t.hero.bullets.map((item: any) => (
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
                            {t.features.items.map((item: any) => (
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
                            {t.journey.steps.map((step: any, index: number) => (
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

                <Footer copy={t.footer} />
            </div>
        </div>
    );
}
