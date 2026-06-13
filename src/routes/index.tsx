import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import {
  GraduationCap,
  Cloud,
  ShieldCheck,
  Network,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Users,
  Lock,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Siida — Decentralized Student Data, Made Simple" },
      {
        name: "description",
        content:
          "Siida is the student data platform built for schools. Own your data, report grades in seconds, and access everything anywhere with hybrid-cloud resiliency.",
      },
      { property: "og:title", content: "Siida — Decentralized Student Data, Made Simple" },
      {
        property: "og:description",
        content:
          "Schools own their data. Teachers work anywhere. Siida brings resilient, decentralized student data to modern education.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background font-[var(--font-sans)] text-foreground antialiased">
      <Nav />
      <Hero />
      <LogoStrip />
      <Features />
      <Architecture />
      <Workflow />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <Logo />
          <span className="font-[var(--font-display)] text-xl font-semibold tracking-tight">
            Siida
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="hover:text-foreground">Features</a>
          <a href="#architecture" className="hover:text-foreground">Architecture</a>
          <a href="#workflow" className="hover:text-foreground">For Teachers</a>
          <a href="#pricing" className="hover:text-foreground">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden text-sm font-medium text-muted-foreground hover:text-foreground sm:inline-flex"
          >
            Sign in
          </a>
          <a
            href="#cta"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition hover:opacity-90"
          >
            Book a demo <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
      <GraduationCap className="h-4 w-4" />
    </div>
  );
}

function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-20 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:pt-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Decentralized · Hybrid-cloud · Built for schools
          </span>
          <h1 className="mt-6 font-[var(--font-display)] text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Student data that <em className="italic text-primary">belongs</em> to your school.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Siida lets teachers report grades, track progress, and collaborate across classrooms —
            while every school keeps full ownership of its data. Resilient by design, accessible
            anywhere.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:translate-y-[-1px]"
            >
              Start free pilot <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#architecture"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
            >
              See how it works
            </a>
          </div>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {[
              { k: "120+", v: "Schools" },
              { k: "99.99%", v: "Uptime" },
              { k: "100%", v: "Data owned" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-[var(--font-display)] text-2xl font-semibold text-foreground">
                  {s.k}
                </dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-primary/10 blur-3xl" />
          <img
            src={heroImg}
            alt="Decentralized student data network illustration"
            width={1536}
            height={1280}
            className="relative rounded-2xl border border-border bg-card shadow-[var(--shadow-glow)]"
          />
        </div>
      </div>
    </section>
  );
}

function LogoStrip() {
  const names = ["Northfield Academy", "Riverside ISD", "Oak Hill School", "Crescent College", "Bridgeport Charter"];
  return (
    <section className="border-y border-border/60 bg-card/40">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-6 py-8 text-sm text-muted-foreground">
        <span className="text-xs uppercase tracking-widest">Trusted by educators at</span>
        {names.map((n) => (
          <span key={n} className="font-[var(--font-display)] text-base text-foreground/70">
            {n}
          </span>
        ))}
      </div>
    </section>
  );
}

function Features() {
  const items = [
    {
      icon: Network,
      title: "Decentralized by design",
      body: "Each school runs its own Siida node. No central vendor lock-in, no shared database, no surprises.",
    },
    {
      icon: Cloud,
      title: "Hybrid-cloud access",
      body: "Teachers reach their gradebook from anywhere — Siida syncs encrypted snapshots to the cloud for resilience.",
    },
    {
      icon: ShieldCheck,
      title: "Yours, end-to-end",
      body: "Data lives on infrastructure your school controls. Export, migrate, or self-host at any time.",
    },
    {
      icon: BarChart3,
      title: "Grades in seconds",
      body: "A keyboard-first gradebook with rubrics, bulk import, and instant standards-based analytics.",
    },
    {
      icon: Users,
      title: "Built for collaboration",
      body: "Co-teachers, counselors, and admins share a single source of truth — with role-based permissions.",
    },
    {
      icon: Lock,
      title: "FERPA & GDPR ready",
      body: "Granular audit logs, encryption at rest and in transit, and compliance tooling out of the box.",
    },
  ];
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">Platform</p>
        <h2 className="mt-3 font-[var(--font-display)] text-4xl font-semibold tracking-tight sm:text-5xl">
          Everything a modern school needs.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Siida replaces the tangle of spreadsheets, SIS exports, and clunky portals with one
          calm, dependable platform.
        </p>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition hover:border-primary/40"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-[var(--font-display)] text-xl font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section id="architecture" className="bg-secondary/40 py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Hybrid architecture
          </p>
          <h2 className="mt-3 font-[var(--font-display)] text-4xl font-semibold tracking-tight sm:text-5xl">
            Your data at school. Your reach in the cloud.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every school operates its own Siida node — the system of record. Encrypted deltas are
            mirrored to a hybrid cloud layer, so teachers stay productive even off-campus, and a
            ransomware-grade incident never costs you a single grade.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {[
              "School-owned primary database — on-prem or in your own tenancy",
              "End-to-end encrypted sync to the Siida cloud relay",
              "Offline-first teacher apps with conflict-free merging",
              "Point-in-time restore across the entire district",
            ].map((l) => (
              <li key={l} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary" />
                <span className="text-foreground/80">{l}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <div className="space-y-4">
              <DiagramRow label="Teacher apps" tag="Anywhere" tone="primary" />
              <Connector />
              <DiagramRow label="Hybrid cloud relay" tag="Encrypted · resilient" tone="muted" />
              <Connector />
              <div className="grid grid-cols-3 gap-3">
                <DiagramNode label="School A" />
                <DiagramNode label="School B" />
                <DiagramNode label="School C" />
              </div>
              <p className="pt-2 text-center text-xs text-muted-foreground">
                Each node owns its data. The relay never stores it in the clear.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DiagramRow({ label, tag, tone }: { label: string; tag: string; tone: "primary" | "muted" }) {
  return (
    <div
      className={`flex items-center justify-between rounded-xl border px-4 py-3 ${
        tone === "primary"
          ? "border-primary/30 bg-primary/10"
          : "border-border bg-secondary/60"
      }`}
    >
      <span className="font-medium">{label}</span>
      <span className="text-xs text-muted-foreground">{tag}</span>
    </div>
  );
}

function DiagramNode({ label }: { label: string }) {
  return (
    <div className="rounded-xl border border-border bg-background px-3 py-4 text-center text-sm font-medium shadow-[var(--shadow-soft)]">
      {label}
    </div>
  );
}

function Connector() {
  return <div className="mx-auto h-6 w-px bg-border" />;
}

function Workflow() {
  const steps = [
    { n: "01", t: "Open your class", d: "Siida picks up where you left off — even on a new device." },
    { n: "02", t: "Enter grades fast", d: "Keyboard shortcuts, rubrics, and bulk paste keep flow uninterrupted." },
    { n: "03", t: "Share with confidence", d: "Reports route to parents, admins, and your SIS automatically." },
  ];
  return (
    <section id="workflow" className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">For teachers</p>
          <h2 className="mt-3 font-[var(--font-display)] text-4xl font-semibold tracking-tight sm:text-5xl">
            Less admin. More teaching.
          </h2>
        </div>
        <p className="max-w-md text-muted-foreground">
          Siida is shaped around the way teachers actually work — fast input, gentle defaults, and
          tools that respect your time.
        </p>
      </div>
      <ol className="mt-14 grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <li
            key={s.n}
            className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]"
          >
            <div className="font-[var(--font-display)] text-sm text-primary">{s.n}</div>
            <h3 className="mt-3 font-[var(--font-display)] text-2xl font-semibold">{s.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="bg-secondary/40 py-24">
      <figure className="mx-auto max-w-4xl px-6 text-center">
        <blockquote className="font-[var(--font-display)] text-3xl font-medium leading-snug tracking-tight text-foreground sm:text-4xl">
          “Siida gave us back control of our records — and gave teachers a tool they actually
          want to open on a Monday morning.”
        </blockquote>
        <figcaption className="mt-6 text-sm text-muted-foreground">
          Dr. Lena Park · Head of School, Northfield Academy
        </figcaption>
      </figure>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-7xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-[var(--shadow-soft)] sm:p-16">
        <div
          className="absolute inset-0 -z-10 opacity-80"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        />
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h2 className="font-[var(--font-display)] text-4xl font-semibold tracking-tight sm:text-5xl">
              Bring Siida to your school.
            </h2>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Pilot Siida with a single department, free for one term. We'll help you migrate
              from your current SIS in days, not months.
            </p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <input
              type="email"
              required
              placeholder="you@school.edu"
              className="w-full rounded-full border border-border bg-background px-5 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:translate-y-[-1px]"
            >
              Request a demo <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <Logo />
          <span className="font-[var(--font-display)] text-base font-semibold text-foreground">
            Siida
          </span>
          <span className="ml-2">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex flex-wrap gap-6">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Security</a>
          <a href="#" className="hover:text-foreground">Status</a>
          <a href="#" className="hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  );
}
