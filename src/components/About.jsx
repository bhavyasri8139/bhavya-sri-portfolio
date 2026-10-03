function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12">

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-violet-300">
            About Me
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            A little about me
          </h2>

        </div>

        {/* About + Education */}
        <div className="grid gap-6 lg:grid-cols-2">

          {/* About Card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">

            <h3 className="text-2xl font-bold text-white">
              Who I am
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              I am an undergraduate student pursuing a B.Tech in
              Artificial Intelligence and Data Science, with a strong
              interest in Cloud Computing, Artificial Intelligence,
              Machine Learning, and Data Analytics.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              I enjoy building practical projects that combine data,
              intelligent models, and software development to solve
              real-world problems.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              I am continuously developing my technical skills through
              projects, internships, certifications, and hands-on
              learning.
            </p>

          </div>


          {/* Education Card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">

            <div className="flex items-center justify-between">

              <h3 className="text-2xl font-bold text-white">
                Education
              </h3>

              <span className="rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1.5 text-xs font-medium text-violet-200">
                2023 – 2027
              </span>

            </div>

            <div className="mt-8">

              <p className="text-sm font-medium uppercase tracking-wider text-violet-300">
                B.Tech
              </p>

              <h4 className="mt-2 text-2xl font-bold leading-tight text-white">
                Artificial Intelligence & Data Science
              </h4>

              <p className="mt-4 text-gray-400">
                Lakireddy Bali Reddy College of Engineering
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Expected Graduation: 2027
              </p>

            </div>

            {/* Academic Highlight */}
            <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="rounded-xl border border-white/10 bg-slate-950 p-5">

                <p className="text-xs text-gray-500">
                  Degree
                </p>

                <p className="mt-2 font-semibold text-white">
                  B.Tech
                </p>

              </div>

              <div className="rounded-xl border border-white/10 bg-slate-950 p-5">

                <p className="text-xs text-gray-500">
                  12th Grade
                </p>

                <p className="mt-2 font-semibold text-white">
                  949 / 1000
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Highlights */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-violet-300/30">
            <h3 className="text-lg font-semibold text-white">
              ☁️ Cloud
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              Interested in cloud infrastructure and AWS technologies.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-violet-300/30">
            <h3 className="text-lg font-semibold text-white">
              🤖 AI & ML
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              Experience building machine learning and AI projects.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-violet-300/30">
            <h3 className="text-lg font-semibold text-white">
              📊 Data
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              Interested in data analysis, visualization, and
              data-driven solutions.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-violet-300/30">
            <h3 className="text-lg font-semibold text-white">
              💻 Development
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              Building practical applications using Python,
              Flask, and modern web technologies.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About