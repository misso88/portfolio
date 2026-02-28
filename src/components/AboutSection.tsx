import { profile } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase text-muted mb-2">
          About
        </h2>
        <h3 className="text-3xl font-bold mb-8">저를 소개합니다</h3>
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
          {/* Profile card */}
          <div className="bg-card rounded-2xl p-6 text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-light mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
              {profile.name.charAt(0)}
            </div>
            <p className="font-semibold text-lg">{profile.name}</p>
            <p className="text-sm text-muted">{profile.title}</p>
            <div className="mt-4 flex items-center justify-center gap-1 text-sm text-muted">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full" />
              4년차 개발자
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-muted leading-relaxed text-base">
              {profile.about}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-card rounded-xl p-4">
                <p className="text-2xl font-bold text-foreground">4+</p>
                <p className="text-sm text-muted">Years Experience</p>
              </div>
              <div className="bg-card rounded-xl p-4">
                <p className="text-2xl font-bold text-foreground">10+</p>
                <p className="text-sm text-muted">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
