export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/20 py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[oklch(0.78_0.15_195/0.3)] bg-[oklch(0.78_0.15_195/0.08)]">
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-[oklch(0.78_0.15_195)]" aria-hidden="true">
              <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="currentColor" strokeWidth="1.5" />
              <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
              <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
            </svg>
          </span>
          <span className="text-sm font-medium text-foreground">React Guide</span>
        </div>

        <p className="text-xs text-muted-foreground">
          React is maintained by Meta and the open-source community. Learn more at{" "}
          <a
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[oklch(0.78_0.15_195)] underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            react.dev
          </a>
          .
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/facebook/react"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://react.dev/community"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Community
          </a>
          <a
            href="https://react.dev/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Blog
          </a>
        </div>
      </div>
    </footer>
  );
}
