import { experiences } from "@/data/portfolio";

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
                  <span className="text-sm text-muted">{exp.role}</span>
                </div>
                <p className="text-xs text-muted mb-3 font-mono">
                  {exp.period}
                </p>
                <p className="text-sm text-muted leading-relaxed mb-3">
                  {exp.description}
                </p>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
