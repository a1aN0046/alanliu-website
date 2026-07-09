import { ThemeSwitcher } from "@/components/theme-switcher";

const interests = [
  "Electrical engineering",
  "Computer engineering",
  "Robotics",
  "Software development",
  "Hardware systems",
  "PC building"
];

const education = [
  {
    school: "University of California, Los Angeles (UCLA)",
    detail: "Incoming Bachelor of Science in Electrical Engineering",
    meta: "Beginning September 2026 | Expected Graduation: June 2030"
  },
  {
    school: "Contra Costa Christian School",
    detail: "Graduated June 2026 | GPA: 4.0",
    meta: "AP courses include AP Calculus AB, AP Physics 1, AP Macroeconomics, AP English Language & Composition, and AP Literature & Composition"
  }
];

const experience = [
  "JUUL Labs, Inc. - Manufacturing Intern",
  "Meta - Electrical Engineer Assistant Intern",
  "FranklinWH Energy Storage Inc. - Electrical Engineer Assistant Intern"
];

const volunteer = [
  "Community Emergency Response Training",
  "BobTutor Online Tutoring"
];

const projects = [
  {
    title: "FTC Robotics",
    description:
      "Robotics hardware design, CAD, drivetrain systems, and mechanical troubleshooting."
  },
  {
    title: "Portfolio Website",
    description:
      "Personal website built with Next.js, TypeScript, Tailwind CSS, GitHub, and Vercel."
  },
  {
    title: "PC Building",
    description:
      "Custom PC building with attention to performance, airflow, cable management, and reliable hardware setup."
  }
];

const contacts = [
  {
    label: "Email",
    value: "alantech2026@gmail.com",
    href: "mailto:alantech2026@gmail.com"
  },
  {
    label: "Phone",
    value: "Available upon request",
    href: "#contact"
  },
  {
    label: "LinkedIn",
    value: "alan-liu-944044421",
    href: "https://www.linkedin.com/in/alan-liu-944044421/"
  },
  {
    label: "GitHub",
    value: "a1aN0046",
    href: "https://github.com/a1aN0046"
  },
  {
    label: "Instagram",
    value: "Available upon request",
    href: "#contact"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 transition-colors dark:bg-slate-950 dark:text-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-8 sm:py-10">
        <nav className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <a href="#home" className="text-lg font-semibold">
            Alan Liu
          </a>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-600 dark:text-slate-300">
              <a className="hover:text-blue-600 dark:hover:text-blue-400" href="#about">
                About
              </a>
              <a className="hover:text-blue-600 dark:hover:text-blue-400" href="#education">
                Education
              </a>
              <a className="hover:text-blue-600 dark:hover:text-blue-400" href="#experience">
                Experience
              </a>
              <a className="hover:text-blue-600 dark:hover:text-blue-400" href="#projects">
                Projects
              </a>
              <a className="hover:text-blue-600 dark:hover:text-blue-400" href="#resume">
                Resume
              </a>
              <a className="hover:text-blue-600 dark:hover:text-blue-400" href="#contact">
                Contact
              </a>
            </div>
            <ThemeSwitcher />
          </div>
        </nav>

        <div id="home" className="grid gap-12 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-24">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              Electrical Engineering Portfolio
            </p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
              Alan Liu
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Incoming UCLA student at the UCLA Henry Samueli School of
              Engineering and Applied Science, studying Electrical Engineering.
            </p>
            <p className="mt-4 max-w-3xl leading-8 text-slate-600 dark:text-slate-300">
              Alan is interested in electrical engineering, computer
              engineering, robotics, software development, hardware systems, and
              PC building.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-blue-500 dark:hover:text-blue-300"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Focus Areas
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-950/60 dark:text-blue-200"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            About
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            Engineering student building across circuits, systems, and software.
          </h2>
          <p className="mt-6 max-w-3xl leading-8 text-slate-600 dark:text-slate-300">
            Alan is preparing to study Electrical Engineering at UCLA and is
            developing a portfolio around technical problem solving, hardware
            systems, robotics, software tools, and practical PC building.
          </p>
        </div>
      </section>

      <section id="education" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          Education
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">Education</h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {education.map((item) => (
            <article
              key={item.school}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-xl font-semibold">{item.school}</h3>
              <p className="mt-3 font-medium text-slate-700 dark:text-slate-200">
                {item.detail}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {item.meta}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Experience
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Internship Experience
            </h2>
            <div className="mt-8 grid gap-4">
              {experience.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950"
                >
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Volunteer
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Community Involvement
            </h2>
            <div className="mt-8 grid gap-4">
              {volunteer.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950"
                >
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          Projects
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">Projects</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="resume"
        className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Resume
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">Resume</h2>
          <p className="mt-6 max-w-2xl leading-8 text-slate-600 dark:text-slate-300">
            Resume available upon request.
          </p>
          {/* TODO: Upload Alan's actual resume PDF into the public folder later and update this href, for example to /resume.pdf. */}
          <a
            href="#"
            className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-100"
          >
            Download Resume
          </a>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Contact Alan
        </h2>
        <p className="mt-6 max-w-3xl leading-8 text-slate-600 dark:text-slate-300">
          For internships, engineering opportunities, technical projects, or
          portfolio questions, use the links below.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500 dark:hover:text-blue-300"
            >
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                {contact.label}
              </span>
              <span className="mt-3 block break-words text-sm font-medium">
                {contact.value}
              </span>
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        (c) {new Date().getFullYear()} Alan Liu. All rights reserved.
      </footer>
    </main>
  );
}
