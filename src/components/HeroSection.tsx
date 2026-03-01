import { profile, contacts } from "@/data/portfolio";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl animate-float" />
        <div
          className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-accent/5 blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #0f172a 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="max-w-4xl w-full text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-sm text-muted mb-8 animate-fade-in-up">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          개발자를 찾고 계신가요?
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up animation-delay-200">
          안녕하세요,
          <br />
          <span className="text-gradient">{profile.name}</span>
          입니다
        </h1>

        <p className="text-xl sm:text-2xl text-muted font-light max-w-2xl mx-auto leading-relaxed mb-4 animate-fade-in-up animation-delay-400">
          {profile.title}
        </p>
        <p className="text-base text-muted/80 max-w-xl mx-auto leading-relaxed mb-12 animate-fade-in-up animation-delay-400">
          {profile.bio}
        </p>

        <div className="flex items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
          <a
            href="#projects"
            className="px-8 py-3.5 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
          >
            프로젝트 보기
          </a>
          <a
            href={`mailto:${contacts.email}`}
            className="px-8 py-3.5 border border-border rounded-xl text-sm font-medium text-foreground hover:bg-card hover:border-primary/30 transition-all"
          >
            연락하기
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <div className="w-5 h-8 border-2 border-muted/30 rounded-full mx-auto flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-muted/40 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
