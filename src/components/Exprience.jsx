import React from 'react'

function Exprience() {
  const experienceList = [
    {
      company: 'Ezone Web Development',
      duration: 'May 2025 - February 2026',
      role: 'Frontend Developer Intern',
      description:
        'Worked as a Frontend Developer Intern, building responsive and modern websites using HTML, CSS, JavaScript, and GSAP. Developed visually engaging UI with smooth animations and interactive effects to enhance user experience.',
    },
    {
      company: 'Marwad Tech',
      duration: 'jun 2024 to Jul 2024',
      role: 'Software Testing',
      description:
        'Worked as a Software Testing Intern, responsible for testing web applications to ensure functionality, performance, and reliability. Prepared and executed detailed test cases, identified bugs, and reported issues with clear reproduction steps.',
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
              <p className="rounded-full border border-[#9479ff] bg-[#131831] px-3 py-1 text-sm font-medium text-[#9479ff]">
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
