"use client";

import {
  experiences,
  education,
  certifications,
  awards,
} from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ExperienceSection() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <div className="reveal">
          <p className="text-sm font-mono text-primary mb-2">03. Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">경력</h2>
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} relative pl-10 pb-12 last:pb-0 group`}
            >
              {/* Timeline line */}
              <div className="absolute left-[11px] top-3 bottom-0 w-px bg-border group-last:hidden" />
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full border-[3px] border-primary bg-background ring-4 ring-primary/10" />

              <div className="flex items-center gap-3 mb-2">
                <span
                  className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${
                    exp.role === "교육생"
                      ? "bg-amber-500/10 text-amber-700 border border-amber-200"
                      : "bg-primary/10 text-primary border border-primary/20"
                  }`}
                >
                  {exp.role === "교육생" ? "교육" : "재직"}
                </span>
                <span className="text-xs text-muted font-mono">
                  {exp.period}
                </span>
              </div>

              <h4 className="text-xl font-bold mb-1">{exp.company}</h4>
              <p className="text-sm text-muted mb-3">
                {exp.role}
                {exp.position && ` · ${exp.position}`}
              </p>
              <p className="text-sm text-muted leading-relaxed mb-3">
                {exp.description}
              </p>
              {exp.highlights.length > 0 && (
                <ul className="space-y-1.5">
                  {exp.highlights.map((item, j) => (
                    <li
                      key={j}
                      className="text-sm text-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-0.5 shrink-0">
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
                            d="M9 12l2 2 4-4"
                          />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Education, Certifications, Awards */}
        <div className="grid sm:grid-cols-3 gap-6 mt-20">
          <div className="reveal reveal-delay-1">
            <h3 className="text-lg font-bold mb-4">학력</h3>
            {education.map((edu, i) => (
              <div key={i} className="p-4 rounded-xl border border-border bg-card">
                <p className="font-semibold text-sm">{edu.school}</p>
                <p className="text-xs text-muted mt-1">{edu.major}</p>
                <div className="flex flex-wrap gap-x-3 text-xs text-muted font-mono mt-2">
                  <span>{edu.period}</span>
                  <span>GPA {edu.gpa}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal reveal-delay-2">
            <h3 className="text-lg font-bold mb-4">자격증</h3>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-border bg-card"
                >
                  <p className="font-semibold text-sm">{cert.name}</p>
                  <p className="text-xs text-muted mt-1">
                    {cert.date} · {cert.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-3">
            <h3 className="text-lg font-bold mb-4">수상</h3>
            <div className="space-y-3">
              {awards.map((award, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-border bg-card"
                >
                  <p className="font-semibold text-sm">{award.title}</p>
                  <p className="text-xs text-muted mt-1">
                    {award.date} · {award.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
