export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <nav className="flex items-center justify-between">
          <div className="text-lg font-semibold">Alan Liu</div>
          <div className="flex gap-6 text-sm text-slate-600">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="mt-24">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-600">
            Engineering Portfolio
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
            Alan Liu
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            College student interested in electrical engineering, computer
            engineering, robotics, software development, and PC building.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-3xl font-bold">About</h2>
          <p className="mt-6 max-w-3xl leading-8 text-slate-600">
            Alan Liu is building a portfolio across engineering, robotics,
            software, and hardware projects. This website presents selected
            work, technical interests, and project experience.
          </p>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold">FTC Robotics</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Robotics hardware design, CAD, drivetrain systems, and mechanical
              troubleshooting.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold">Portfolio Website</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Personal website built with Next.js, TypeScript, Tailwind CSS,
              GitHub, and Vercel.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold">PC Building</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Custom PC building with attention to performance, airflow, and
              clean hardware setup.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="mt-6 text-slate-600">
            Email, GitHub, LinkedIn, and resume links can be added here.
          </p>
          <div className="mt-8">
            <a
              href="mailto:contact@alanliu.cc"
              className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white"
            >
              Email
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Alan Liu. All rights reserved.
      </footer>
    </main>
  );
}
