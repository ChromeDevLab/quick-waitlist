'use client';

import { cn } from "@/lib/utils";

type Locale = "en" | "zh";

type Translation = {
    languageName: string;
    languageCode: string;
};

type LanguageSwitcherProps = {
    translations: Record<Locale, Translation>;
    currentLocale: Locale;
    onLocaleChange: (locale: Locale) => void;
};

export default function LanguageSwitcher({
    translations,
    currentLocale,
    onLocaleChange,
}: LanguageSwitcherProps) {
    return (
        <div className="flex items-center gap-2 rounded-full border border-[#4A90E2]/20 bg-white/50 p-1 shadow-sm">
            {(Object.keys(translations) as Locale[]).map((code) => (
                <button
                    key={code}
                    type="button"
                    onClick={() => onLocaleChange(code)}
                    aria-pressed={currentLocale === code}
                    className={cn(
                        "rounded-full px-4 py-1.5 text-sm font-medium transition",
                        currentLocale === code
                            ? "bg-[#4A90E2] text-white shadow"
                            : "text-slate-500 hover:text-slate-800"
                    )}
                >
                    {translations[code].languageName}
                </button>
            ))}
        </div>
    );
}
