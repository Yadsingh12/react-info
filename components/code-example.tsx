"use client";
import { useState } from "react";

const tabs = [
  {
    label: "Component",
    filename: "Button.jsx",
    code: `import { useState } from 'react';

// A simple React component
function Button({ label, color }) {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      onClick={() => setClicked(!clicked)}
      style={{ background: color }}
    >
      {clicked ? "Clicked!" : label}
    </button>
  );
}

// Use it anywhere, with any props
export default function App() {
  return (
    <div>
      <Button label="Click me" color="#61dafb" />
      <Button label="Submit" color="#20232a" />
    </div>
  );
}`,
  },
  {
    label: "useState",
    filename: "Counter.jsx",
    code: `import { useState } from 'react';

function Counter() {
  // Declare a state variable "count"
  // React re-renders when count changes
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}`,
  },
  {
    label: "useEffect",
    filename: "DataFetch.jsx",
    code: `import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser]     = useState(null);
  const [loading, setLoading] = useState(true);

  // Runs after every render where userId changes
  useEffect(() => {
    setLoading(true);

    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });

    // Cleanup if userId changes before fetch completes
    return () => { /* abort controller here */ };
  }, [userId]); // dependency array

  if (loading) return <p>Loading...</p>;
  return <h1>Hello, {user.name}!</h1>;
}`,
  },
];

// Minimal syntax highlighting via token classes
function highlight(code: string) {
  // Order matters: longer patterns first
  return code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    // JSX tags
    .replace(/(&lt;\/?)([\w.]+)/g, '<span class="text-[oklch(0.78_0.15_195)]">$1$2</span>')
    // strings
    .replace(/(["'`])([^"'`\n]*?)\1/g, '<span class="text-[oklch(0.75_0.15_140)]">$1$2$1</span>')
    // keywords
    .replace(/\b(import|export|default|from|return|const|let|var|function|if|else|new)\b/g, '<span class="text-[oklch(0.7_0.15_310)]">$1</span>')
    // hooks / builtins
    .replace(/\b(useState|useEffect|useRef|useContext|fetch)\b/g, '<span class="text-[oklch(0.78_0.18_55)]">$1</span>')
    // comments
    .replace(/(\/\/[^\n]*)/g, '<span class="text-muted-foreground italic">$1</span>')
    // numbers
    .replace(/\b(\d+)\b/g, '<span class="text-[oklch(0.78_0.15_195)]">$1</span>');
}

export default function CodeExample() {
  const [active, setActive] = useState(0);

  return (
    <section id="example" className="border-b border-border py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.78_0.15_195)] mb-3">
            Code Examples
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            See React in action
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Real, working code snippets that illustrate the most common React patterns.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card overflow-hidden">
          {/* Tab bar */}
          <div className="flex items-center gap-1 border-b border-border bg-secondary/50 px-4 pt-3">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActive(i)}
                className={`px-4 py-2 text-sm font-medium rounded-t-md transition-colors ${
                  active === i
                    ? "bg-card text-foreground border border-b-0 border-border"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Filename bar */}
          <div className="flex items-center gap-2 border-b border-border px-4 py-2 bg-secondary/30">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.65_0.22_27)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.75_0.18_85)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.65_0.18_145)]" />
            </span>
            <span className="text-xs text-muted-foreground font-mono">{tabs[active].filename}</span>
          </div>

          {/* Code block */}
          <pre className="overflow-x-auto p-6 font-mono text-sm leading-relaxed">
            <code
              // biome-ignore lint/security/noDangerouslySetInnerHtml: controlled highlight
              dangerouslySetInnerHTML={{ __html: highlight(tabs[active].code) }}
            />
          </pre>
        </div>
      </div>
    </section>
  );
}
