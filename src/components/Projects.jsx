function Projects() {
  const projects = [
    {
      title: "Heart Disease Prediction Using Mchine Learning Techniques",
      description:
        "A machine learning system for predicting heart disease using multiple classification algorithms such as Logistic Regression ,Random Forest  and ensemble learning techniques such as Voting Classifier. and Developed a web interface using Flask framework.",
      technologies: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "Machine Learning",
        "Ensemble Learning",
        "Flask"
      ],
      type: "AI / Machine Learning",
      github: "#",
      //demo: "#",
    },

    {
      title: "Edutract - Student Management System",
      description:
        "A web-based student management application for managing student records, academic information, and  Fee related details.",
      technologies: [
        "Python",
        "Flask",
        "SQLite",
        "SQLAlchemy",
        "HTML",
        "CSS",
      ],
      type: "Web Application",
      github: "#",
      //demo: "#",
    },

    {
      title: "Email Spam Detection",
      description:
        "A machine learning project that classifies Email as spam or ham by using the Naive Bayes algorithm  along with  using natural language processing techniques.",
      technologies: [
        "Python",
        "NLP",
        "Scikit-learn",
        "Pandas",
      ],
      type: "Machine Learning",
      github: "#",
      //demo: "#",
    },

    {
      title: "Online Product Review Visualization using R language",
      description:
        "An interactive data visualization project exploring the mostly high rated review products and characteristics with their relationship with popularity from eccomerce platform amazon",
      technologies: [
        "R",
        "ggplot2",
        "dplyr",
        "Data Visualization",
      ],
      type: "Data Visualization",
      github: "#",
      //demo: "#",
    },
  ]

  return (
    <section
      id="projects"
      className="bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-violet-300">
            Projects
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Things I've built
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            A selection of projects where I have applied programming,
            artificial intelligence, machine learning, data analysis,
            and web development.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid gap-6 md:grid-cols-2">

          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-300/30 hover:bg-white/[0.05]"
            >

              {/* Project type */}
              <p className="text-sm font-medium text-violet-300">
                {project.type}
              </p>

              {/* Project title */}
              <h3 className="mt-3 text-2xl font-bold text-white">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-4 leading-7 text-gray-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-slate-900 px-3 py-1.5 text-xs text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-7 flex gap-6">

                <a
                  href={project.github}
                  className="font-medium text-white transition hover:text-violet-300"
                >
                  GitHub →
                </a>

                <a
                  href={project.demo}
                  className="font-medium text-gray-400 transition hover:text-violet-300"
                >
                  Live Demo →
                </a>

              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Projects