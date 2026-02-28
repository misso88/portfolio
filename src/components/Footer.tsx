export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>&copy; 2026 김소윤. All rights reserved.</p>
        <p className="font-mono text-xs">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
