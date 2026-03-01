import { experiences, education, certifications, awards } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase text-muted mb-2">
          Experience
        </h2>
        <h3 className="text-3xl font-bold mb-12">경력</h3>
        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8 pb-12 last:pb-0 group">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-2 bottom-0 w-px bg-border group-last:hidden" />
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-primary bg-white" />

              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                  <h4 className="text-lg font-semibold">{exp.company}</h4>
                  <span className="text-sm text-muted">
                    {exp.role}
                    {exp.position && ` · ${exp.position}`}
                  </span>
                </div>
                <p className="text-xs text-muted mb-3 font-mono">
                  {exp.period}
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
                        <span className="text-primary mt-1 shrink-0">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <h3 className="text-3xl font-bold mt-20 mb-12">학력</h3>
        <div className="space-y-4">
          {education.map((edu, i) => (
            <div key={i} className="bg-card rounded-xl p-5">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                <h4 className="text-lg font-semibold">{edu.school}</h4>
                <span className="text-sm text-muted">{edu.major}</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 text-xs text-muted font-mono">
                <span>{edu.period}</span>
                <span>GPA {edu.gpa}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Awards */}
        <div className="grid sm:grid-cols-2 gap-8 mt-20">
          <div>
            <h3 className="text-xl font-bold mb-6">자격증</h3>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <div key={i} className="bg-card rounded-xl p-4">
                  <p className="font-semibold text-sm">{cert.name}</p>
                  <p className="text-xs text-muted mt-1">
                    {cert.date} · {cert.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">수상</h3>
            <div className="space-y-3">
              {awards.map((award, i) => (
                <div key={i} className="bg-card rounded-xl p-4">
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
