const projects = [
  {
    title: "FTC Robotics Hardware",
    description:
      "Designed and built robotics hardware systems, including mecanum drivetrain, odometry pods, linear slides, and claw mechanisms.",
    tags: ["Robotics", "CAD", "Hardware"]
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A personal website built with Next.js, TypeScript, Tailwind CSS, GitHub, and Vercel.",
    tags: ["Next.js", "TypeScript", "Vercel"]
  },
  {
    title: "PC Building",
    description:
      "Built custom desktop PCs with a focus on performance, airflow, clean cable management, and practical hardware selection.",
    tags: ["Hardware", "PC Build", "Troubleshooting"]
  }
];

const skills = [
  "Electrical Engineering",
  "Computer Engineering",
  "Robotics",
  "CAD",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Python",
  "Linux",
  "PC Hardware"
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20">
        <nav className="flex items-center justify-between">
          <div className="text-lg font-semibold tracking-tight">Alan Liu</div>
          <div className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-blue-600">
              Engineering Portfolio
            </p>
            <h1 className="text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">
              Alan Liu
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              College student interested in electrical engineering, computer
              engineering, robotics, software development, and PC building.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-white"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-950">
              Focus Areas
            </h2>
            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="font-medium">Robotics & Hardware</p>
                <p className="mt-1 text-sm text-slate-600">
                  Mechanical design, drivetrain systems, sensors, and practical
                  troubleshooting.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="font-medium">Software Development</p>
                <p className="mt-1 text-sm text-slate-600">
                  Web development, automation, and technical project building.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="font-medium">Engineering Learning</p>
                <p className="mt-1 text-sm text-slate-600">
                  Electrical and computer engineering foundations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight">About</h2>
          <p className="mt-6 max-w-3xl leading-8 text-slate-600">
            Alan Liu is building a portfolio across engineering, robotics,
            software, and hardware projects. This website is intended to
            present selected work, technical interests, and project experience
            for internships and academic opportunities.
          </p>
          <p className="mt-4 text-sm text-slate-500">
            TODO: Add school, major, resume link, GitHub link, LinkedIn link,
            and verified project details.
          </p>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
        <p className="mt-6 max-w-2xl leading-8 text-slate-600">
          This section can include Alan&apos;s email, GitHub, LinkedIn, and
          resume PDF.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:contact@alanliu.cc"
            className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Email
          </a>
          <a
            href="https://github.com/a1aN0046"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-white"
          >
            GitHub
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Alan Liu. All rights reserved.
      </footer>
    </main>
  );
}
