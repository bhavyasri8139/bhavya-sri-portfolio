function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © 2026 Bhavya Sri. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-6">

          {/* GitHub */}
          <a
            href="https://github.com/bhavyasri8139"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 transition hover:text-violet-300"
          >
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/veerla-bhavya-sri-6ba9152b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 transition hover:text-violet-300"
          >
            LinkedIn
          </a>

          {/* Email */}
          <a
            href="mailto:bhavyasriveerla@gmail.com"
            className="text-sm text-gray-500 transition hover:text-violet-300"
          >
            Email
          </a>

        </div>

      </div>
    </footer>
  )
}

export default Footer