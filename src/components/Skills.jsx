function Skills() {
  const skillGroups = [
    {
      title: "Programming",
      skills: ["Python", "Java", "SQL"],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        "Machine Learning",
        "Scikit-learn",
        "TensorFlow",
        "Keras",
        "NLP",
      ],
    },
    {
      title: "Data & Analytics",
      skills: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Power BI",
        "Data Visualization",
      ],
    },
    {
      title: "Cloud & Development",
      skills: [
        "AWS",
        "Flask",
        "HTML",
        "CSS",
        "JavaScript",
        "Git",
        "GitHub",
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="bg-slate-900/40 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-violet-300">
            Skills
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Technologies I work with
          </h2>
        </div>

        {/* Skills */}
        <div className="grid gap-6 md:grid-cols-2">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-violet-300/30"
            >
              <h3 className="text-xl font-semibold text-white">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">

                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-slate-950 px-4 py-2 text-sm text-gray-300 transition hover:border-violet-300/40 hover:text-violet-200"
                  >
                    {skill}
                  </span>
                ))}

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Skills