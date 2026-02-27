import Header from "@/components/header";
import Hero from "@/components/hero";
import CoreConcepts from "@/components/core-concepts";
import CodeExample from "@/components/code-example";
import WhyReact from "@/components/why-react";
import Timeline from "@/components/timeline";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main>
        <Hero />
        <CoreConcepts />
        <CodeExample />
        <WhyReact />
        <Timeline />
      </main>
      <Footer />
    </div>
  );
}
