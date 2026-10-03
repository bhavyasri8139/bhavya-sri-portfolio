function Certifications() {
  const certifications = [
    // ─────────────────────────
    // AWS
    // ─────────────────────────
    {
      category: "Cloud",
      organization: "AWS",
      title: "AWS Certified Cloud Practitioner",
      date: "August 2025",
      skills: ["AWS", "Cloud Computing"],
      certificate: "/certificates/aws-cloud-practitioner.pdf",
    },

    // ─────────────────────────
    // Oracle
    // ─────────────────────────
    {
      category: "Data",
      organization: "Oracle",
      title: "Data Platform Foundations",
      date: "September 2025",
      skills: ["Data", "Oracle", "Data Platforms"],
      certificate:
        "/certificates/oracle-data-platform-foundations.pdf",
    },

    // ─────────────────────────
    // HackerRank
    // ─────────────────────────
    {
      category: "Programming",
      organization: "HackerRank",
      title: "Java (Basic)",
      date: "September 2024",
      skills: ["Java"],
      certificate: "/certificates/hackerrank-java-basic.pdf",
    },

    // ─────────────────────────
    // Infosys - 1
    // ─────────────────────────
    {
      category: "Web Development",
      organization: "Infosys Springboard",
      title: "Front-End Development",
      date: "April 2025",
      skills: ["HTML", "CSS", "JavaScript"],
      certificate:
        "/certificates/infosys-frontend-development.pdf",
    },

    // ─────────────────────────
    // Infosys - 2
    // ─────────────────────────
    {
      category: "Generative AI",
      organization: "Infosys Springboard",
      title: "Prompt Engineering",
      date: "April 2026",
      skills: ["Prompt Engineering", "Generative AI"],
      certificate:
        "/certificates/infosys-prompt-engineering.pdf",
    },

    // ─────────────────────────
    // NPTEL
    // ─────────────────────────
    {
      category: "Programming",
      organization: "NPTEL",
      title: "Python for Data Science",
      date: "October 2024",
      skills: ["Python", "Data Science"],
      certificate:
        "/certificates/nptel-python-data-science.pdf",
    },

    // ─────────────────────────
    // edX - 1
    // ─────────────────────────
    {
      category: "edX",
      organization: "Rochester Institute of Technology",
      title: "Visual Presentation",
      date: "April 2024",
      skills: ["Good presentation skill"],
      certificate: "/certificates/visual presentation.pdf",
    },

    // ─────────────────────────
    // edX - 2
    // ─────────────────────────
    {
      category: "edX",
      organization: "Rochester Institute of Technology",
      title: "Public Speaking",
      date: "April 2024",
      skills: ["Good listening and Speaking with confidence"],
      certificate: "/certificates/edx public speaking.pdf",
    },

    // ─────────────────────────
    // Internship / Job Simulation
    // ─────────────────────────
    {
      category: "Internship",
      organization: "APSSDC",
      title: "Data Analyst Internship",
      date: "May 2025 – July 2025",
      skills: ["Python", "Pandas", "Machine Learning"],
      certificate:
        "/certificates/apssdc-data-analyst.pdf",
    },

    {
      category: "Job Simulation",
      organization: "Tata Group – Forage",
      title: "GenAI Powered Data Analytics Job Simulation",
      date: "August 2026",
      skills: ["GenAI", "EDA", "Logistic Regression"],
      certificate:
        "/certificates/tata-genai-data-analytics.pdf",
    },

    {
      category: "Job Simulation",
      organization: "Deloitte Technology – Forage",
      title: "Technology Job Simulation",
      date: "July 2026",
      skills: ["Python", "IIoT", "JSON"],
      certificate:
        "/certificates/deloitte-python-developer.pdf",
    },

    {
      category: "Job Simulation",
      organization: "Deloitte Australia – Forage",
      title: "Data Analytics Job Simulation",
      date: "July 28, 2026",
      skills: ["Tableau", "Excel", "Data Analysis"],
      certificate:
        "/certificates/deloitte-data-analytics.pdf",
    },
  ]

  return (
    <section
      id="certifications"
      className="bg-slate-900/40 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12">

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-violet-300">
            Certifications
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Certifications & Credentials
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            Professional certifications and credentials that
            represent my continuous learning and technical development.
          </p>

        </div>

        {/* Certification Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {certifications.map((certification) => (
            <article
              key={`${certification.organization}-${certification.title}`}
              className="group flex min-h-[300px] flex-col rounded-2xl border border-white/10 bg-slate-950/60 p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-300/30 hover:shadow-xl hover:shadow-violet-500/5"
            >

              {/* Top row */}
              <div className="flex items-start justify-between gap-2">

                <span className="rounded-full border border-violet-300/20 bg-violet-300/10 px-2.5 py-1 text-[11px] font-medium text-violet-200">
                  {certification.category}
                </span>

                <span className="text-[11px] text-gray-500">
                  {certification.date}
                </span>

              </div>

              {/* Organization */}
              <p className="mt-5 text-sm font-semibold text-violet-300">
                {certification.organization}
              </p>

              {/* Certificate title */}
              <h3 className="mt-2 text-lg font-bold leading-6 text-white">
                {certification.title}
              </h3>

              {/* Skills */}
              <div className="mt-4 flex flex-wrap gap-1.5">

                {certification.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-slate-900 px-2.5 py-1 text-[11px] text-gray-300"
                  >
                    {skill}
                  </span>
                ))}

              </div>

              {/* Certificate button */}
              <div className="mt-auto pt-6">

                <a
                  href={certification.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-violet-300/30 px-4 py-2 text-xs font-semibold text-violet-200 transition hover:border-violet-300 hover:bg-violet-300 hover:text-slate-950"
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

export default Certifications