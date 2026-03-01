"use client";

import { contacts } from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactSection() {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-2xl mx-auto text-center" ref={ref}>
        <div className="reveal">
          <p className="text-sm font-mono text-primary mb-2">05. Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">함께 일해요</h2>
          <p className="text-muted mb-12 max-w-md mx-auto leading-relaxed">
            새로운 기회나 협업에 대해 이야기하고 싶으시다면 편하게 연락주세요.
          </p>
        </div>

        <div className="reveal reveal-delay-1 p-8 rounded-2xl border border-border bg-card">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={`mailto:${contacts.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              이메일 보내기
            </a>
            <a
              href={`tel:${contacts.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-border rounded-xl text-sm font-medium text-foreground hover:bg-card-hover transition-colors"
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              전화하기
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 pt-6 border-t border-border">
            <a
              href={contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-muted hover:text-foreground hover:bg-surface transition-all"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <span className="text-border">|</span>
            <a
              href={`mailto:${contacts.email}`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-muted hover:text-foreground hover:bg-surface transition-all"
            >
              {contacts.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
