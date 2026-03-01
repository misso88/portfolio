"use client";

import { skills } from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const categoryIcons: Record<string, string> = {
  Frontend: "{}",
  Backend: ">>",
  Database: "[]",
  "DevOps & Tools": "$_",
};

const categoryColors: Record<string, string> = {
  Frontend: "from-blue-500 to-cyan-500",
  Backend: "from-emerald-500 to-teal-500",
  Database: "from-amber-500 to-orange-500",
  "DevOps & Tools": "from-violet-500 to-purple-500",
};

export default function SkillsSection() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-28 px-6 bg-surface">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <div className="reveal">
          <p className="text-sm font-mono text-primary mb-2">02. Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">기술 스택</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className={`reveal reveal-delay-${i + 1} p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${categoryColors[group.category]} flex items-center justify-center text-white text-xs font-mono font-bold`}
                >
                  {categoryIcons[group.category]}
                </div>
                <h3 className="font-semibold text-lg">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-surface border border-border rounded-lg text-sm text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
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
