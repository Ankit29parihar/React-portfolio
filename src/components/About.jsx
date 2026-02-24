import React from "react";

function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="mb-10 grid grid-cols-2">
        <div className="">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9479ff]">
            About Me
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#d4d6ec] sm:text-4xl">
            Full Stack Journey, Strong Frontend Focus
          </h2>
          <p className="mt-4 max-w-3xl text-[18px] text-[#acb4be]">
            I’m Ankit Parihar, a BCA graduate (2025) with a strong academic
            record of 7+ CGPA and over 9 months of hands-on practical experience
            in web development.
            <span>
              I’m currently focused on mastering the MERN stack, where I enjoy
              transforming ideas into responsive, modern, and user-friendly web
              applications. My passion lies in building clean UI designs that
              not only look good but also provide a smooth user experience.
            </span>
            <br />
            <span>
              I believe in continuous learning and consistently improving my
              skills through real-world projects and experimentation. Whether
              it’s structuring scalable components or refining design details, I
              pay attention to both functionality and aesthetics.
            </span>
            <span>
              I’m actively seeking opportunities where I can contribute, grow,
              and build impactful digital experiences.
            </span>
          </p>
        </div>
        <div className="h-120 overflow-hidden relative bottom-10 ">
         <img src="./ankit2.png" className="w-full h-100px object-cover"></img>
        </div>
      </div>

      {/* <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-xl font-semibold text-cyan-300">Education</h3>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
              <p className="font-medium text-white">BCA - Completed in 2025</p>
              <p className="text-sm text-slate-400">CGPA: 7+</p>
            </li>
            <li className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
              <p className="font-medium text-white">12th (Science - Maths)</p>
              <p className="text-sm text-slate-400">
                76%
              </p>
              <p className="text-sm text-slate-400">
                Strong base in logical and analytical thinking
              </p>
            </li>
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-xl font-semibold text-cyan-300">Experience</h3>
          <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/50 p-4 text-slate-300">
            <p className="font-medium text-white">9+ Months Experience</p>
            <p className="mt-2 text-sm text-slate-400">
              Hands-on work in web development with focus on frontend UI and
              modern development workflow.
            </p>
          </div>

          <h3 className="mt-6 text-xl font-semibold text-cyan-300">
            Currently Learning
          </h3>
          <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/50 p-4 text-slate-300">
            <p className="font-medium text-white">MERN Stack (Full Stack)</p>
            <p className="mt-2 text-sm text-slate-400">
              Improving backend integration while maintaining strong frontend
              quality.
            </p>
          </div>
        </article>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <h3 className="text-xl font-semibold text-cyan-300">Skills</h3>
        <div className="mt-4 flex flex-wrap gap-3">
          {[
            'HTML',
            'CSS',
            'JavaScript',
            'Tailwind CSS',
            'Bootstrap',
            'React',
            'Git',
            'GitHub',
            'WordPress (Basic)',
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div> */}
    </section>
  );
}

export default About;
