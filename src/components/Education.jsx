import React from 'react'

function Education() {
  const educationList = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      college: 'Jai Narain Vyas University, Jodhpure ',
      year: '2025',
      Cgpa: '7+'
    },
    {
      degree: '12th - Science (Maths)',
      college: 'GOVT Sen Sec School Sheoganj',
      year: '2022',
      Cgpa: '76%'
    },
  ]

  return (
    <section id="education" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9479ff]">
          Education
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Academic Background
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {educationList.map((item) => (
          <article
            key={`${item.degree}-${item.year}-${item.Cgpa}`}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-[#7c7b7d]">
              Degree
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white">
              {item.degree}
            </h3>

            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-[#7c7b7d]">
              College Name
            </p>
            <p className="mt-2 text-white">{item.college}</p>

            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-[#7c7b7d]">
              Year
            </p>
            <p className="mt-2 text-white">{item.year}</p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-[#7c7b7d]">
              Cgpa:
            </p>
            <p className="mt-2 text-white">{item.Cgpa}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Education
