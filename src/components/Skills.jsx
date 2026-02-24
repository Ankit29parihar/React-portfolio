import React from "react";

const skills = [
  {
    name: "HTML",
    logo: "/skillsLogos/icons8-html5.svg",
    short: "H5",
    glow: "shadow-[0_10px_30px_rgba(249,115,22,0.18)]",
    badge: "bg-orange-500/15 text-orange-300",
  },
  {
    name: "CSS",
    logo: "/skillsLogos/icons8-css.svg",
    short: "CSS",
    glow: "shadow-[0_10px_30px_rgba(59,130,246,0.18)]",
    badge: "bg-blue-500/15 text-blue-300",
  },
  {
    name: "SASS",
    logo: "",
    short: "S",
    glow: "shadow-[0_10px_30px_rgba(236,72,153,0.18)]",
    badge: "bg-pink-500/15 text-pink-300",
  },
  {
    name: "JAVASCRIPT",
    logo: "/skillsLogos/icons8-javascript.svg",
    short: "JS",
    glow: "shadow-[0_10px_30px_rgba(250,204,21,0.16)]",
    badge: "bg-yellow-400/15 text-yellow-300",
  },
  {
    name: "REACT JS",
    logo: "/skillsLogos/programing.png",
    short: "R",
    glow: "shadow-[0_10px_30px_rgba(34,211,238,0.18)]",
    badge: "bg-cyan-400/15 text-cyan-300",
  },
  {
    name: "GITHUB",
    logo: "/skillsLogos/github-svgrepo-com.svg",
    short: "GH",
    glow: "shadow-[0_10px_30px_rgba(148,163,184,0.2)]",
    badge: "bg-slate-400/15 text-slate-200",
  },
  {
    name: "NODE JS",
    logo: "",
    short: "N",
    glow: "shadow-[0_10px_30px_rgba(74,222,128,0.16)]",
    badge: "bg-green-400/15 text-green-300",
  },
  {
    name: "FIREBASE",
    logo: "",
    short: "F",
    glow: "shadow-[0_10px_30px_rgba(250,204,21,0.16)]",
    badge: "bg-amber-400/15 text-amber-300",
  },
  {
    name: "MONGODB",
    logo: "",
    short: "M",
    glow: "shadow-[0_10px_30px_rgba(74,222,128,0.16)]",
    badge: "bg-emerald-400/15 text-emerald-300",
  },
  {
    name: "DOCKER",
    logo: "",
    short: "D",
    glow: "shadow-[0_10px_30px_rgba(56,189,248,0.16)]",
    badge: "bg-sky-400/15 text-sky-300",
  },
];

function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-6 py-20 text-center">
      <div className="mb-10">
        <h1 className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9479ff]">
          Skills
        </h1>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Technologies I Work With
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`group rounded-xl  bg-[#060b19] py-8 px-4  `}
            >
              <div className="flex h-16 items-center justify-center">
                {skill.logo ? (
                  <img src={skill.logo} alt={skill.name} className="h-20 w-20 object-contain" />
                ) : (
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-full text-sm font-bold tracking-wide ${skill.badge}`}
                  >
                    {skill.short}
                  </div>
                )}
              </div>

              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-slate-200 sm:text-sm">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
