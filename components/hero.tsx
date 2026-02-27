export default function Hero() {
  return (
    <section id="overview" className="relative overflow-hidden border-b border-border">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.78 0.15 195) 1px, transparent 1px), linear-gradient(90deg, oklch(0.78 0.15 195) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-36">
        <div className="flex flex-col items-center text-center gap-6">
          {/* React logo */}
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[oklch(0.78_0.15_195/0.3)] bg-[oklch(0.78_0.15_195/0.08)] mb-2">
            <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10 text-[oklch(0.78_0.15_195)]" aria-hidden="true">
              <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="currentColor" strokeWidth="1.2" />
              <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="currentColor" strokeWidth="1.2" transform="rotate(60 12 12)" />
              <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="currentColor" strokeWidth="1.2" transform="rotate(120 12 12)" />
              <circle cx="12" cy="12" r="1.8" fill="currentColor" />
            </svg>
          </div>

          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[oklch(0.78_0.15_195/0.35)] bg-[oklch(0.78_0.15_195/0.08)] px-3 py-1 text-xs font-medium text-[oklch(0.78_0.15_195)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.78_0.15_195)]" aria-hidden="true" />
            Open Source · Meta · Since 2013
          </span>

          <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground md:text-7xl">
            What is <span className="text-[oklch(0.78_0.15_195)]">React?</span>
          </h1>

          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            React is a free, open-source JavaScript <strong className="text-foreground font-medium">library</strong> for building
            user interfaces — especially single-page applications — using
            reusable, composable <strong className="text-foreground font-medium">components</strong>.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href="#concepts"
              className="inline-flex items-center gap-2 rounded-md bg-[oklch(0.78_0.15_195)] px-5 py-2.5 text-sm font-semibold text-[oklch(0.1_0.01_240)] transition-opacity hover:opacity-90"
            >
              Explore Core Concepts
            </a>
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Official Docs
              <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 3h7m0 0v7m0-7L5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-8 flex flex-wrap justify-center gap-12 border-t border-border pt-8 w-full max-w-xl">
            {[
              { value: "220k+", label: "GitHub Stars" },
              { value: "20M+", label: "Weekly Downloads" },
              { value: "2013", label: "Year Created" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-bold text-[oklch(0.78_0.15_195)]">{value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
