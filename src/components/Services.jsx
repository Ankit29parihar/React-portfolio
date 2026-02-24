import React from 'react'

function Services() {
  const services = [
    {
      title: 'Full Stack Web Development',
      description:
        'Complete web app development from frontend UI to backend logic and database integration.',
    },
    {
      title: 'Responsive Website Design',
      description:
        'Mobile-first and fully responsive websites that work smoothly across all devices.',
    },
    {
      title: 'REST API Development',
      description:
        'Structured and scalable REST APIs for modern web applications and integrations.',
    },
    {
      title: 'Modern UI with Animations',
      description:
        'Clean, modern interfaces with smooth animations to improve user experience.',
    },
    {
      title: 'Portfolio Website Creation',
      description:
        'Professional personal portfolio websites to showcase skills, projects, and experience.',
    },
  ]

  return (
    <section id="services" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-400">
          Services
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          What I Offer
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
          >
            <h3 className="text-xl font-semibold text-cyan-300">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
