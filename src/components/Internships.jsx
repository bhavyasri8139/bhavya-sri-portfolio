function Internships() {
  const internships = [
    {
      date: "May 2025 – July 2025",
      role: "Data Analyst Intern",
      company: "APSSDC",
      organization:
        "Andhra Pradesh State Skill Development Corporation",

      description:
        "Worked on data analysis and machine learning using a Kaggle water quality dataset.",

      achievements: [
        "Analyzed a Kaggle water quality dataset using Python, Pandas, and NumPy.",
        "Performed EDA and visualized insights using Matplotlib and Seaborn.",
        "Built classification and regression models using Scikit-learn.",
      ],

      skills: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Scikit-learn",
      ],

      certificate: "/certificates/apssdc-data-analyst.pdf",
    },

    {
      date: "July 2026",
      role: "Python Developer",
      company: "Deloitte Technology",
      organization: "Technology Job Simulation – Forage",

      description:
        "Worked on industrial IoT telemetry processing and machine health monitoring.",

      achievements: [
        "Unified IIoT telemetry formats into a standardized JSON schema.",
        "Built a real-time dashboard mock-up with graphs and alerts for machine health monitoring.",
      ],

      skills: [
        "Python",
        "JSON",
        "IIoT",
        "Data Processing",
        "Dashboard",
      ],

      certificate: "/certificates/deloitte-python-developer.pdf",
    },

    {
      date: "August 2026",
      role: "AI Transformation Consultant",
      company: "Tata Group",
      organization: "GenAI Powered Data Analytics Job Simulation – Forage",

      description:
        "Applied data analytics and AI techniques to identify customer delinquency risk factors.",

      achievements: [
        "Performed exploratory data analysis to identify customer delinquency risk factors.",
        "Built an AI-powered delinquency prediction framework using Logistic Regression.",
      ],

      skills: [
        "Python",
        "EDA",
        "Data Analytics",
        "Logistic Regression",
        "GenAI",
      ],

      certificate: "/certificates/tata-genai-data-analytics.pdf",
    },
    {
    date: "July 28, 2026",
    role: "Data Analytics Job Simulation",
    company: "Deloitte Australia",
    organization: "Data Analytics Job Simulation – Forage",

    description:
      "Completed a Deloitte job simulation involving data analysis and forensic technology.",

    achievements: [
      "Completed a Deloitte job simulation involving data analysis and forensic technology.",
      "Created a data dashboard using Tableau.",
      "Used Excel to classify data and draw business conclusions.",
    ],

    skills: [
      "Data Analysis",
      "Tableau",
      "Excel",
      "Data Modeling",
      "Data Visualization",
      "Python",
    ],

    certificate: "/certificates/deloitte-data-analytics.pdf",
  },
  ]

  return (
    <section
      id="internships"
      className="bg-slate-900/40 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 text-center">

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-violet-300">
            Experience
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Internships & Experience
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            Practical experience gained through internships,
            job simulations, and hands-on technical work.
          </p>

        </div>

        {/* Internship Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">

          {internships.map((internship) => (
            <article
              key={internship.company}
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-slate-950/60 p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-300/30 hover:shadow-xl hover:shadow-violet-500/5"
            >

              {/* Date */}
              <div className="mb-5">

                <span className="inline-block rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1.5 text-xs font-medium text-violet-200">
                  {internship.date}
                </span>

              </div>

              {/* Company */}
              <p className="text-sm font-semibold text-violet-300">
                {internship.company}
              </p>

              {/* Role */}
              <h3 className="mt-2 text-2xl font-bold leading-tight text-white">
                {internship.role}
              </h3>

              {/* Organization */}
              <p className="mt-2 text-sm leading-6 text-gray-500">
                {internship.organization}
              </p>

              {/* Description */}
              <p className="mt-5 text-sm leading-7 text-gray-400">
                {internship.description}
              </p>

              {/* Achievements */}
              <ul className="mt-5 space-y-3">

                {internship.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex gap-3 text-sm leading-6 text-gray-400"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-300" />

                    <span>{achievement}</span>
                  </li>
                ))}

              </ul>

              {/* Skills */}
              <div className="mt-6 flex flex-wrap gap-2">

                {internship.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-slate-900 px-3 py-1.5 text-xs text-gray-300"
                  >
                    {skill}
                  </span>
                ))}

              </div>

              {/* Push button to bottom */}
              <div className="mt-auto pt-7">

                <a
                  href={internship.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-violet-300/30 px-5 py-2.5 text-sm font-semibold text-violet-200 transition hover:border-violet-300 hover:bg-violet-300 hover:text-slate-950"
                >
                  View Certificate
                  <span>↗</span>
                </a>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Internships