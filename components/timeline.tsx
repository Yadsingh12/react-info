const milestones = [
  {
    year: "2011",
    title: "Born at Meta (Facebook)",
    description: "Jordan Walke created FaxJS, an early React prototype, to solve Facebook's complex UI update problems on their News Feed.",
  },
  {
    year: "2013",
    title: "Open Sourced at JSConf",
    description: "React was open-sourced at JSConf US in May 2013. The community was initially skeptical of JSX, but its productivity quickly won developers over.",
  },
  {
    year: "2015",
    title: "React Native & Flux",
    description: "React Native brought React's component model to mobile development. The Flux architecture pattern also gained popularity for state management.",
  },
  {
    year: "2016",
    title: "React 15 — Stable DOM",
    description: "React 15 brought significant improvements to the DOM output, addressing many SVG rendering issues and standardizing event handling across browsers.",
  },
  {
    year: "2017",
    title: "React 16 — Fiber Rewrite",
    description: "The Fiber architecture completely rewrote React's reconciler, enabling incremental rendering, better error boundaries, and the groundwork for concurrent features.",
  },
  {
    year: "2019",
    title: "React 16.8 — Hooks",
    description: "Hooks revolutionized how React components are written, allowing state and effects in function components. useState, useEffect, and custom hooks changed everything.",
  },
  {
    year: "2022",
    title: "React 18 — Concurrent React",
    description: "React 18 introduced concurrent rendering, automatic batching, Suspense improvements, and new hooks like useTransition and useDeferredValue for smooth UIs.",
  },
  {
    year: "2024+",
    title: "React 19 — Server Components",
    description: "React 19 stabilized Server Components and Server Actions, deeply integrated into Next.js App Router, blurring the line between client and server rendering.",
  },
];

export default function Timeline() {
  return (
    <section id="history" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.78_0.15_195)] mb-3">
            History
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            React&apos;s evolution over time
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            From an internal Facebook tool to the world&apos;s most-used UI library — over a decade of innovation.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 h-full w-px bg-border md:left-1/2" aria-hidden="true" />

          <div className="space-y-10">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={m.year}
                  className={`relative flex items-start gap-6 md:items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-1/2">
                    <div className="h-3 w-3 rounded-full border-2 border-[oklch(0.78_0.15_195)] bg-background" />
                  </div>

                  {/* Spacer for desktop alternating layout */}
                  <div className="hidden md:block md:w-1/2" aria-hidden="true" />

                  {/* Card */}
                  <div
                    className={`ml-10 w-full rounded-xl border border-border bg-card p-5 transition-colors hover:border-[oklch(0.78_0.15_195/0.4)] md:ml-0 md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <div className="mb-1 flex items-center gap-2">
                      <span className="rounded-md bg-[oklch(0.78_0.15_195/0.12)] px-2 py-0.5 text-xs font-bold text-[oklch(0.78_0.15_195)]">
                        {m.year}
                      </span>
                    </div>
                    <h3 className="mb-1.5 font-semibold text-foreground">{m.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{m.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
