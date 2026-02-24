import React from 'react'

function Testimonials() {
  const testimonials = [
    {
      name: 'Client Name 1',
      role: 'Startup Founder',
      feedback:
        'Ankit delivered a clean and responsive website on time. Communication and UI quality were excellent.',
    },
    {
      name: 'Client Name 2',
      role: 'Business Owner',
      feedback:
        'Very good frontend work and smooth API integration. The final product matched my expectations.',
    },
  ]

  return (
    <section id="testimonials" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-400">
          Testimonials
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Client Feedback
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
          >
            <p className="text-base leading-relaxed text-slate-300">
              "{item.feedback}"
            </p>
            <p className="mt-4 font-semibold text-cyan-300">{item.name}</p>
            <p className="text-sm text-slate-400">{item.role}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
