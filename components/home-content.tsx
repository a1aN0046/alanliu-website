"use client";

import Link from "next/link";
import { BrandLink } from "@/components/brand-link";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { VisitCounter } from "@/components/visit-counter";
import { useLanguage } from "@/components/language-provider";
import { experiences } from "@/data/experiences";
import { interestTranslations, translations } from "@/data/translations";

const contacts = [
  {
    key: "email" as const,
    value: "alantech2026@gmail.com",
    href: "mailto:alantech2026@gmail.com"
  },
  {
    key: "linkedin" as const,
    value: "alan-liu-944044421",
    href: "https://www.linkedin.com/in/alan-liu-944044421/"
  },
  {
    key: "github" as const,
    value: "a1aN0046",
    href: "https://github.com/a1aN0046"
  }
];

export function HomeContent() {
  const { language } = useLanguage();
  const text = translations[language];
  const interests = interestTranslations[language];
  const education = [
    {
      school: "University of California, Los Angeles (UCLA)",
      detail: text.education.uclaDetail,
      meta: text.education.uclaMeta
    },
    {
      school: "Contra Costa Christian School",
      detail: text.education.highSchoolDetail,
      meta: text.education.highSchoolMeta
    }
  ];
  const projects = [
    {
      title: text.projects.roboticsTitle,
      description: text.projects.roboticsBody
    },
    {
      title: text.projects.portfolioTitle,
      description: text.projects.portfolioBody
    },
    {
      title: text.projects.pcTitle,
      description: text.projects.pcBody
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 transition-colors dark:bg-slate-950 dark:text-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-8 sm:py-10">
        <nav className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between" aria-label="Primary navigation">
          <BrandLink />
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-slate-600 dark:text-slate-300">
              <a className="hover:text-blue-600 dark:hover:text-blue-400" href="#about">{text.nav.about}</a>
              <a className="hover:text-blue-600 dark:hover:text-blue-400" href="#education">{text.nav.education}</a>
              <a className="hover:text-blue-600 dark:hover:text-blue-400" href="#experience">{text.nav.experience}</a>
              <a className="hover:text-blue-600 dark:hover:text-blue-400" href="#projects">{text.nav.projects}</a>
              <a className="hover:text-blue-600 dark:hover:text-blue-400" href="#skills">{text.nav.skills}</a>
              <a className="hover:text-blue-600 dark:hover:text-blue-400" href="#resume">{text.nav.resume}</a>
              <a className="hover:text-blue-600 dark:hover:text-blue-400" href="#contact">{text.nav.contact}</a>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <LanguageSwitcher />
              <ThemeSwitcher />
            </div>
          </div>
        </nav>

        <div id="home" className="grid gap-12 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-24">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              {text.hero.eyebrow}
            </p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">Alan Liu</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {text.hero.bio}
            </p>
            <p className="mt-4 max-w-3xl leading-8 text-slate-600 dark:text-slate-300">
              {text.hero.interests}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#experience" className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                {text.hero.viewInternships}
              </a>
              <a href="#contact" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-blue-500 dark:hover:text-blue-300">
                {text.nav.contact}
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              {text.hero.focusAreas}
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span key={interest} className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-950/60 dark:text-blue-200">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">{text.nav.about}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">{text.about.heading}</h2>
          <p className="mt-6 max-w-3xl leading-8 text-slate-600 dark:text-slate-300">{text.about.body}</p>
        </div>
      </section>

      <section id="education" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">{text.nav.education}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">{text.education.heading}</h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {education.map((item) => (
            <article key={item.school} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-xl font-semibold">{item.school}</h3>
              <p className="mt-3 font-medium text-slate-700 dark:text-slate-200">{item.detail}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.meta}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">{text.nav.experience}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">{text.experience.heading}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {experiences.map((experience) => (
              <Link
                key={experience.slug}
                href={`/experience/${experience.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-blue-300 hover:shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:hover:border-blue-500"
              >
                <h3 className="text-xl font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-300">{experience.company}</h3>
                <p className="mt-2 font-medium text-slate-700 dark:text-slate-200">{experience.role[language]}</p>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  {experience.location[language]} | {experience.date[language]}
                </p>
                <p className="mt-4 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{experience.summary[language]}</p>
                <span className="mt-5 inline-flex items-center text-sm font-semibold text-blue-700 dark:text-blue-300">
                  {text.experience.viewDetails} <span aria-hidden="true" className="ml-2">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">{text.nav.projects}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">{text.projects.heading}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">{text.nav.skills}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">{text.skills.heading}</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {interests.map((interest) => (
              <span key={interest} className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="resume" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">{text.nav.resume}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">{text.resume.heading}</h2>
        <p className="mt-6 max-w-2xl leading-8 text-slate-600 dark:text-slate-300">{text.resume.available}</p>
        {/* TODO: Upload Alan's actual resume PDF into the public folder and update this href, for example to /resume.pdf. */}
        <a href="#" className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-100">
          {text.resume.download}
        </a>
      </section>

      <section id="contact" className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">{text.nav.contact}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">{text.contact.heading}</h2>
          <p className="mt-6 max-w-3xl leading-8 text-slate-600 dark:text-slate-300">{text.contact.intro}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {contacts.map((contact) => (
              <a key={contact.key} href={contact.href} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-blue-500 dark:hover:text-blue-300">
                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{text.contact[contact.key]}</span>
                <span className="mt-3 block break-words text-sm font-medium">{contact.value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-slate-500 dark:text-slate-400">
        <div className="mx-auto flex min-h-12 max-w-6xl flex-col items-center justify-center gap-1 px-6">
          <p>(c) {new Date().getFullYear()} Alan Liu. {text.footer}</p>
          <VisitCounter label={text.visits} locale={language} />
        </div>
      </footer>
    </main>
  );
}
