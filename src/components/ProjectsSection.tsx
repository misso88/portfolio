"use client";

import { projects } from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const aimProjects = projects.filter((p) => p.company === "에임시스템(주)");
const oligoProjects = projects.filter((p) => p.company === "(주)올리고컴퍼니");
const ssafyProjects = projects.filter((p) => p.company === null);

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <article
      className={`reveal reveal-delay-${(index % 4) + 1} group relative bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col`}
    >
      {/* Hover accent */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex flex-wrap items-center gap-2 mb-2">
        <h4 className="text-lg font-bold">{project.title}</h4>
        {project.role && (
          <span className="px-2.5 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
            {project.role}
          </span>
        )}
      </div>

      <p className="text-xs text-muted font-mono mb-3">
        {project.period && <span>{project.period}</span>}
        {project.team && <span> · {project.team}인</span>}
      </p>

      <p className="text-sm text-muted leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 bg-surface text-xs text-muted rounded-md border border-border"
          >
            {tech}
          </span>
        ))}
      </div>

      {(project.github || project.demo) && (
        <div className="flex items-center gap-4 pt-3 border-t border-border">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-primary transition-colors flex items-center gap-1.5"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-primary transition-colors flex items-center gap-1.5"
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
              Live
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default function ProjectsSection() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-28 px-6 bg-surface">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <div className="reveal">
          <p className="text-sm font-mono text-primary mb-2">04. Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">프로젝트</h2>
          <p className="text-muted mb-12 max-w-lg">
            실무와 교육 과정에서 수행한 주요 프로젝트입니다.
          </p>
        </div>

        {/* Company Projects */}
        <div className="mb-16">
          <div className="reveal flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-lg border border-primary/20">
              에임시스템(주)
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {aimProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>

        {/* SSAFY Projects */}
        <div className="mb-16">
          <div className="reveal flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-amber-500/10 text-amber-700 text-sm font-medium rounded-lg border border-amber-200">
              삼성 청년 SW 아카데미 (SSAFY)
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {ssafyProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>

        {/* Company Projects */}
        <div>
          <div className="reveal flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-lg border border-primary/20">
              (주)올리고컴퍼니
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {oligoProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
