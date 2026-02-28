import { profile, contacts } from "@/data/portfolio";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl w-full text-center">
        <p className="text-sm tracking-widest uppercase text-muted mb-4 animate-fade-in-up">
          {profile.title}
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up animation-delay-200">
          {profile.name}
        </h1>
        <p className="text-lg sm:text-xl text-muted max-w-xl mx-auto leading-relaxed mb-10 animate-fade-in-up animation-delay-400">
          {profile.bio}
        </p>
        <div className="flex items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
          <a
            href="#projects"
            className="px-6 py-3 bg-foreground text-white rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            프로젝트 보기
          </a>
          <a
            href={`mailto:${contacts.email}`}
            className="px-6 py-3 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-card transition-colors"
          >
            연락하기
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <div className="w-5 h-8 border-2 border-muted/40 rounded-full mx-auto flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-muted/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
