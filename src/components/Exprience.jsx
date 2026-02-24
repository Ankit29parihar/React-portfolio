import React from 'react'

function Exprience() {
  const experienceList = [
    {
      company: 'Ezone Web Development',
      duration: 'May 2025 - February 2026',
      role: 'Frontend Developer Intern',
      description:
        'Developed responsive and reusable UI components using React and Tailwind CSS, integrated REST APIs, fixed frontend bugs, and optimized page performance to improve user experience.',
    },
    {
      company: 'Marwad Tech',
      duration: '1 Month',
      role: 'Software Testing',
      description:
        'Prepared and executed test cases for web applications, identified and reported bugs with clear reproduction steps, performed regression and cross-browser testing, and collaborated with developers to ensure stable releases.',
    },
  ]

  return (
    <section id="experience" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9479ff]">
          Experience
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Internship and Freelance Work
        </h2>
      </div>

      <div className="space-y-6">
        {experienceList.map((item) => (
          <article
            key={`${item.company}-${item.role}`}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="text-xl font-semibold text-[#7c7b7d]">
                {item.company}
              </h3>
              <p className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-200">
                {item.duration}
              </p>
            </div>

            <p className="mt-3 text-sm font-semibold text-white">{item.role}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Exprience
