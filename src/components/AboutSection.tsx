"use client";

import { profile } from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutSection() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <div className="reveal">
          <p className="text-sm font-mono text-primary mb-2">01. About</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            저를 소개합니다
          </h2>
        </div>

        <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-start">
          {/* Main content */}
          <div className="reveal reveal-delay-1">
            <p className="text-lg text-muted leading-relaxed mb-8">
              {profile.about}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-border bg-card hover:shadow-md transition-shadow">
                <p className="text-3xl font-bold text-primary mb-1">5+</p>
                <p className="text-sm text-muted">Years Experience</p>
              </div>
              <div className="p-5 rounded-xl border border-border bg-card hover:shadow-md transition-shadow">
                <p className="text-3xl font-bold text-primary mb-1">7+</p>
                <p className="text-sm text-muted">Projects</p>
              </div>
            </div>
          </div>

          {/* Profile card */}
          <div className="reveal reveal-delay-2">
            <div className="p-6 rounded-2xl border border-border bg-card text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center text-white text-sm font-mono font-bold">
                {"<SY/>"}
              </div>
              <p className="font-semibold text-lg">{profile.name}</p>
              <p className="text-sm text-muted mb-3">{profile.title}</p>
              <div className="flex items-center justify-center gap-2 text-xs text-muted">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full" />
                구직 가능
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
