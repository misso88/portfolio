import { projects } from "@/data/portfolio";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-card">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase text-muted mb-2">
          Projects
        </h2>
        <h3 className="text-3xl font-bold mb-12">프로젝트</h3>
        <div className="grid gap-6">
          {projects.map((project, i) => (
            <article
              key={i}
              className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Color accent bar */}
              <div className="w-10 h-1 bg-primary rounded-full mb-4" />

              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h4 className="text-lg font-semibold">{project.title}</h4>
                {project.role && (
                  <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {project.role}
                  </span>
                )}
              </div>
              <p className="text-xs text-muted font-mono mb-3">
                {project.company && <span>{project.company}</span>}
                {project.company && project.period && " · "}
                {project.period && <span>{project.period}</span>}
                {project.team && ` · ${project.team}인 팀 프로젝트`}
              </p>
              <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-card text-xs text-muted rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {(project.github || project.demo) && (
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted hover:text-foreground transition-colors flex items-center gap-1"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted hover:text-foreground transition-colors flex items-center gap-1"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Demo
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
