import React from 'react'

function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9479ff]">
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Let&apos;s Work Together
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <form className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#9479ff]">
              Name
            </span>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400" required
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#9479ff]">
              Email
            </span>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400" required
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#9479ff]">
              Message
            </span>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400" required
            />
          </label>

          <button
            type="submit"
            className="rounded-xl bg-[#9479ff] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#583ebd]"
          >
            Send Message
          </button>
        </form>

        <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#9479ff]">
              Email
            </p>
            <a
              href="mailto:ankit@example.com"
              className="mt-2 inline-block text-slate-300 hover:text-white"
            >
              ankit.development2003@gmail.com
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#9479ff]">
              Phone
            </p>
            <a
              href="tel:+910000000000"
              className="mt-2 inline-block text-slate-300 hover:text-white"
            >
              +91 9636909723
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#9479ff]">
              Location
            </p>
            <p className="mt-2 text-slate-300">Ahmedabad, Paldi</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#9479ff]">
              Social Links
            </p>
            <div className="mt-2 flex gap-4">
              <a href="https://www.linkedin.com/in/ankit-parihar29?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-slate-300 hover:text-white">
                LinkedIn
              </a>
              <a href="https://github.com/Ankit29parihar" className="text-slate-300 hover:text-white">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
