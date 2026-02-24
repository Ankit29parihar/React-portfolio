import React from "react";

function Projects() {
  const projects = [
    {
      name: "Hotel Website",
      description:
        "A responsive weather application using OpenWeather REST API with city-based forecast search.",
      tech: ["React", "API Integration", "CSS"],
      liveLink: "https://hotelbhagyalaxmiabu.com/",
      githubLink: "https://github.com/Ankit29parihar/Hotel-bhagyalaxmi",
      screenshot:"./Projects/bhagyalaxmi.png",
    },
    {
      name: "Gallery Project",
      description:
        "A full-stack MERN application with authentication, product management, and admin panel features.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      liveLink: "https://gallery-application-roan.vercel.app/",
      githubLink: "https://github.com/Ankit29parihar/gallery-application",
      screenshot: "./Projects/gallery.png",
    },
    {
      name: "Portfolio Website",
      description:
        "A personal portfolio website to showcase my profile, skills, and projects with a clean UI.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      liveLink: "https://snapnotes-phi.vercel.app/",
      githubLink: "https://github.com/Ankit29parihar/React-notepad",
      screenshot:
        "./Projects/notes.png",
    },
  ];

  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9479ff]">
          Projects
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Featured Work
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60"
          >
            <img
              src={project.screenshot}
              alt={`${project.name} screenshot`}
              className="h-44 w-full object-cover"
            />

            <div className="space-y-4 p-5">
              <h3 className="text-xl font-semibold text-[#7c7b7d]">
                {project.name}
              </h3>

              <p className="text-sm leading-relaxed text-slate-300">
                {project.description}
              </p>

              <p className="text-sm text-white">
                <span className="font-semibold text-white">Tech:</span>{" "}
                {project.tech.join(", ")}
              </p>

              <div className="flex items-center gap-4 pt-2 text-sm font-semibold">
                <a
                  href={project.liveLink}
                  className="group relative inline-block pb-1 text-[#9479ff] transition hover:text-white" target="blank"
                >
                  Live Link
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#9479ff] duration-300 group-hover:w-full"></span>
                </a>

                <a
                  href={project.githubLink}
                  className="group relative inline-block pb-1 text-[#9479ff] transition hover:text-white" target="blank"
                >
                  Github Link
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#9479ff] duration-300 group-hover:w-full"></span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;

