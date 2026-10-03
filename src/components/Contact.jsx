import { useState } from "react"

function Contact() {
  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    setLoading(true)
    setStatus("")

    const form = event.target
    const data = new FormData(form)

    try {
      const response = await fetch(
        "https://formspree.io/f/mrpbwdoo",
        {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
          },
        }
      )

      if (response.ok) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    }

    setLoading(false)
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-slate-950 px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-400">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Contact Me
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Feel free to reach out for opportunities, collaborations,
            internships, or any professional discussion.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-8">

            <h3 className="text-2xl font-semibold text-white">
              Let's Connect
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              I am interested in opportunities related to Cloud Engineering,
              Data Engineering, AI & Data Science.
            </p>

            <div className="mt-8 space-y-5">

              {/* Email */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=bhavyasriveerla@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-slate-950/60 p-4 transition hover:border-violet-400/40 hover:bg-slate-800"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-violet-500/10 text-xl">
                  ✉️
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Email
                  </p>

                  <p className="text-sm font-medium text-white sm:text-base">
                    bhavyasriveerla@gmail.com
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/veerla-bhavya-sri-6ba9152b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-slate-950/60 p-4 transition hover:border-violet-400/40 hover:bg-slate-800"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-violet-500/10 text-xl">
                  💼
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    LinkedIn
                  </p>

                  <p className="text-sm font-medium text-white sm:text-base">
                    Connect with me
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/bhavyasri8139"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-slate-950/60 p-4 transition hover:border-violet-400/40 hover:bg-slate-800"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-violet-500/10 text-xl">
                  💻
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    GitHub
                  </p>

                  <p className="text-sm font-medium text-white sm:text-base">
                    View my projects
                  </p>
                </div>
              </a>

            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-8">

            <h3 className="text-2xl font-semibold text-white">
              Send Me a Message
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Have a question or opportunity? Send me a message.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-5"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-violet-400"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-violet-400"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-violet-400"
                ></textarea>
              </div>

              {/* Success Message */}
              {status === "success" && (
                <div className="rounded-xl border border-green-400/20 bg-green-400/10 px-4 py-3 text-sm text-green-300">
                  ✓ Message sent successfully! Thank you for reaching out.
                </div>
              )}

              {/* Error Message */}
              {status === "error" && (
                <div className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
                  ✕ Something went wrong. Please try again.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-violet-500 px-6 py-3 font-semibold text-white transition hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact