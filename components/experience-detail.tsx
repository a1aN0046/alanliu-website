"use client";

import Link from "next/link";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useLanguage } from "@/components/language-provider";
import type { Experience } from "@/data/experiences";
import { translations } from "@/data/translations";

interface ExperienceDetailProps {
  experience: Experience;
}

export function ExperienceDetail({ experience }: ExperienceDetailProps) {
  const { language } = useLanguage();
  const text = translations[language];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 transition-colors dark:bg-slate-950 dark:text-slate-50">
      <div className="mx-auto max-w-4xl px-6 py-8 sm:py-10">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/#experience" className="inline-flex items-center text-sm font-semibold text-slate-600 transition hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-300">
            <span aria-hidden="true" className="mr-2">←</span> {text.detail.backHome}
          </Link>
          <div className="flex flex-wrap items-center gap-2">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </header>

        <article className="py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">{experience.company}</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{experience.role[language]}</h1>
          <dl className="mt-8 grid gap-4 border-y border-slate-200 py-6 sm:grid-cols-2 dark:border-slate-800">
            <div>
              <dt className="text-sm font-semibold text-slate-500 dark:text-slate-400">{text.detail.location}</dt>
              <dd className="mt-1 font-medium">{experience.location[language]}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-slate-500 dark:text-slate-400">{text.detail.date}</dt>
              <dd className="mt-1 font-medium">{experience.date[language]}</dd>
            </div>
          </dl>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight">{text.detail.overview}</h2>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">{experience.overview[language]}</p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight">{text.detail.responsibilities}</h2>
            <ul className="mt-5 space-y-3 text-slate-600 dark:text-slate-300">
              {experience.responsibilities[language].map((item) => (
                <li key={item} className="flex gap-3 leading-7">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight">{text.detail.technicalSkills}</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {experience.tools[language].map((tool) => (
                <span key={tool} className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-950/60 dark:text-blue-200">{tool}</span>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight">{text.detail.learned}</h2>
            <ul className="mt-5 space-y-3 text-slate-600 dark:text-slate-300">
              {experience.learned[language].map((item) => (
                <li key={item} className="flex gap-3 leading-7">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-12 border-t border-slate-200 pt-8 dark:border-slate-800">
            <Link href="/#experience" className="inline-flex items-center text-sm font-semibold text-slate-600 transition hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-300">
              <span aria-hidden="true" className="mr-2">←</span> {text.detail.backHome}
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
