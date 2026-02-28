import { skills } from "@/data/portfolio";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-card">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase text-muted mb-2">
          Skills
        </h2>
        <h3 className="text-3xl font-bold mb-12">기술 스택</h3>
        <div className="grid sm:grid-cols-2 gap-8">
          {skills.map((group) => (
            <div key={group.category}>
              <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white border border-border rounded-lg text-sm text-foreground hover:border-primary/40 hover:shadow-sm transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
