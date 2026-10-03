function Education() {
  return (
    <section
      id="education"
      className="bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-violet-300">
            Education
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Academic Background
          </h2>
        </div>

        {/* Education Card */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:border-violet-300/30">

          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

            {/* Left */}
            <div>

              <p className="text-sm font-medium text-violet-300">
                B.Tech
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                Artificial Intelligence & Data Science
              </h3>

              <p className="mt-3 text-gray-400">
                Lakireddy Bali Reddy College of Engineering
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Expected Graduation: 2027
              </p>

            </div>

            {/* Right */}
            <div className="rounded-xl border border-white/10 bg-slate-950 px-6 py-4">

              <p className="text-sm text-gray-400">
                Academic Achievement
              </p>

              <p className="mt-1 text-2xl font-bold text-white">
                949 / 1000
              </p>

              <p className="mt-1 text-xs text-gray-500">
                12th Grade
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Education