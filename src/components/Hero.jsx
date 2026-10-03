function Hero() {
  return (
    <section
      id="home"
      className="animated-background scroll-mt-24 min-h-screen bg-slate-950 px-6 pt-32 pb-20"
    >
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl items-center">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="text-center lg:text-left">

            <p className="animate-fade-up text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Hello, I'm
            </p>

            <h1 className="animate-fade-up delay-100 mt-4 text-5xl font-bold leading-tight sm:text-6xl">
              <span className="gradient-text">
                Bhavya Sri Veerla 
              </span>
            </h1>

            <h2 className="animate-fade-up delay-200 mt-4 text-2xl font-semibold text-white sm:text-3xl">
              AI & Data Science Student
            </h2>

            <p className="animate-fade-up delay-300 mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 lg:mx-0">
              Passionate about Artificial Intelligence, Data Science,
              Cloud Computing and Data Engineering. I enjoy building
              practical solutions using data and modern technologies.
            </p>

            <div className="animate-fade-up delay-400 mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">

              <a
                href="#projects"
                className="animated-button rounded-xl bg-violet-500 px-6 py-3 font-semibold text-white"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="animated-button rounded-xl border border-white/10 bg-slate-900/60 px-6 py-3 font-semibold text-white hover:bg-slate-800"
              >
                View Resume
              </a>

            </div>

            <div className="animate-fade-up delay-500 mt-8 flex justify-center gap-6 lg:justify-start">

              <a
                href="https://github.com/bhavyasri8139"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link text-sm font-medium text-slate-400"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/veerla-bhavya-sri-6ba9152b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link text-sm font-medium text-slate-400"
              >
                LinkedIn
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=bhavyasriveerla@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link text-sm font-medium text-slate-400"
              >
                Email
              </a>

            </div>
          </div>


          {/* RIGHT SIDE - PROFILE */}
          <div className="flex justify-center lg:justify-end">

            <div className="profile-wrapper">

              {/* Glow */}
              <div className="profile-glow"></div>

              {/* Rotating ring */}
              <div className="profile-ring"></div>

              {/* Actual image */}
              <div className="profile-photo">
                <img
                  src="/profile.png"
                  alt="Bhavya Sri Veerla"
                />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero