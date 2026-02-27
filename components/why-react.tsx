const benefits = [
  {
    title: "Declarative",
    description:
      "You describe what the UI should look like for a given state, and React handles the updates. No manual DOM manipulation needed — React figures out the minimal set of changes required.",
    icon: "✦",
  },
  {
    title: "Component-Based",
    description:
      "Build encapsulated components that manage their own state, then compose them to make complex UIs. Because component logic is written in JavaScript, you can pass rich data around your app without touching the DOM.",
    icon: "⬡",
  },
  {
    title: "Learn Once, Write Anywhere",
    description:
      "React doesn't assume anything about the rest of your stack, so you can develop new features in React without rewriting existing code. React can also render on the server (Next.js) or mobile apps (React Native).",
    icon: "◎",
  },
  {
    title: "Massive Ecosystem",
    description:
      "Thousands of libraries built for React — routing (React Router, Next.js), state management (Redux, Zustand, Jotai), styling (Tailwind CSS, styled-components, CSS Modules), testing, animations, and more.",
    icon: "❋",
  },
];

const companies = ["Meta", "Netflix", "Airbnb", "Atlassian", "Shopify", "GitHub", "Vercel", "Discord"];

export default function WhyReact() {
  return (
    <section id="why" className="border-b border-border py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.78_0.15_195)] mb-3">
            Why React
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Why do developers choose React?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            React has become the world&apos;s most popular UI library for good reasons.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid gap-6 sm:grid-cols-2 mb-16">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="flex gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-[oklch(0.78_0.15_195/0.4)]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary text-lg text-[oklch(0.78_0.15_195)] font-bold">
                {b.icon}
              </div>
              <div>
                <h3 className="mb-1.5 font-semibold text-foreground">{b.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{b.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Companies */}
        <div className="rounded-xl border border-border bg-card p-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
            Trusted by engineering teams at
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {companies.map((c) => (
              <span
                key={c}
                className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-foreground"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
