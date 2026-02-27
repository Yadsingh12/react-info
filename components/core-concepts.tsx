const concepts = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Components",
    description:
      "The building blocks of React. Every piece of UI is a self-contained component — a JavaScript function that returns markup. Components are reusable and composable, letting you build complex UIs from small, isolated pieces.",
    tag: "Core",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M12 3L3 8.5V16L12 21L21 16V8.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 3V21M3 8.5L21 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "JSX",
    description:
      "JSX is a syntax extension that lets you write HTML-like markup directly inside JavaScript. React transforms it into regular JavaScript calls, keeping your UI logic and structure in one place for clarity and developer experience.",
    tag: "Syntax",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M4 7h16M4 12h10M4 17h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="19" cy="17" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Props",
    description:
      "Props (short for properties) are how you pass data from a parent component to a child. They make components dynamic and configurable. Props are read-only — a child component cannot modify its own props.",
    tag: "Data Flow",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 12s1 2 4 2 4-2 4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 9h.01M15 9h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "State",
    description:
      "State is data that changes over time inside a component. When state updates, React automatically re-renders the component to reflect the new data. The useState hook is the most common way to add state to a function component.",
    tag: "Reactivity",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M3 12h4l3-9 4 18 3-9h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Hooks",
    description:
      "Hooks are functions that let you use state and other React features inside function components. Built-in hooks like useState, useEffect, and useContext cover most use-cases, and you can write custom hooks to share logic.",
    tag: "Functions",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 12h4M18 12h4M12 2v4M12 18v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    title: "Virtual DOM",
    description:
      "React keeps a lightweight copy of the real DOM in memory — the Virtual DOM. When state changes, React compares the new virtual DOM with the previous one (diffing), and only updates the real DOM where necessary for maximum performance.",
    tag: "Performance",
  },
];

export default function CoreConcepts() {
  return (
    <section id="concepts" className="border-b border-border py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.78_0.15_195)] mb-3">
            Core Concepts
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            The fundamental ideas behind React
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Understanding these six concepts gives you a solid mental model for building anything with React.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map((concept) => (
            <article
              key={concept.title}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-[oklch(0.78_0.15_195/0.4)] hover:bg-[oklch(0.78_0.15_195/0.04)]"
            >
              <div className="mb-4 flex items-start justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-[oklch(0.78_0.15_195)] group-hover:border-[oklch(0.78_0.15_195/0.4)]">
                  {concept.icon}
                </span>
                <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">
                  {concept.tag}
                </span>
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">{concept.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{concept.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
