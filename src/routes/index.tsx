import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import {
  Cloud,
  ShieldCheck,
  Network,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Users,
  Lock,
  GraduationCap,
  BookOpen,
  Building2,
  Layers,
} from "lucide-react";

import logoEdited from "@/assets/logo_edited.svg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Siida - Student Data That Belongs to Your School" },
      {
        name: "description",
        content:
          "Siida is the end-to-end learning platform built for schools. Students learn, teachers create, principals lead - all on infrastructure you own and control.",
      },
      { property: "og:title", content: "Siida - Student Data That Belongs to Your School" },
      {
        property: "og:description",
        content:
          "One platform for students, teachers, and administrators. Decentralized, modular, and fully owned by your school.",
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
      <Features />
      <Roles />
      <Architecture />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="hover:text-foreground">
            Platform
          </a>
          <a href="#roles" className="hover:text-foreground">
            For Schools
          </a>
          <a href="#architecture" className="hover:text-foreground">
            How It Works
          </a>
        </nav>
        <div className="flex items-center gap-3">
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
    <div className="flex shrink-0 items-center gap-1">
      <img src={logoEdited} alt="Siida" className="h-7 w-auto" />
      <svg
        className="h-5 w-auto text-primary"
        viewBox="0 0 2048 744"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M 780.99 76.9056 C 812.389 72.507 841.43 94.3342 845.935 125.718 C 850.439 157.101 828.711 186.216 797.343 190.827 C 765.824 195.46 736.539 173.604 732.013 142.07 C 727.487 110.536 749.441 81.3253 780.99 76.9056 z" />
        <path d="M 558.635 77.2981 C 590.034 72.3863 619.425 93.9886 624.111 125.422 C 628.796 156.856 606.983 186.091 575.516 190.55 C 544.368 194.963 515.494 173.419 510.856 142.304 C 506.218 111.189 527.554 82.1601 558.635 77.2981 z" />
        <path d="M 1393.43 0 L 1418.85 0 C 1433.44 9.88917 1450.17 16.5256 1453.41 35.8607 C 1457.11 57.971 1456.05 83.5559 1456.06 106.12 L 1456.07 209.559 L 1456.05 391.556 C 1456.03 443.334 1458.48 498.353 1448.88 549.219 C 1444.41 572.86 1425.06 612.098 1411.39 631.997 C 1379.03 678.466 1332.9 713.602 1279.5 732.451 C 1273.47 734.516 1264.15 737.905 1258.02 739.123 C 1248.78 740.961 1236.76 740.922 1227.86 744 L 1165.46 744 C 1152.95 741.005 1140.1 740.25 1127.37 736.871 C 1002.22 702.525 920.74 581.403 938.152 451.981 C 964.931 252.944 1195.11 159.72 1354.82 279.334 C 1355.85 280.11 1357.36 280.497 1358.63 280.662 C 1360.5 275.873 1359.96 243.718 1359.97 237.181 L 1359.91 102.209 C 1359.91 84.4278 1359.98 66.0366 1360 48.3015 C 1360.02 19.741 1373.01 14.7935 1393.43 0 z M 1211.6 645.485 C 1300.28 636.87 1365.35 558.248 1357.24 469.52 C 1349.12 380.793 1270.86 315.282 1182.09 322.899 C 1092.61 330.578 1026.46 409.595 1034.65 499.03 C 1042.83 588.466 1122.21 654.17 1211.6 645.485 z" />
        <path d="M 1758.36 744 C 1750.14 741.068 1736.14 740.774 1726.92 738.382 C 1478.66 673.967 1458.67 333.358 1700.23 242.112 C 1844.45 187.633 2004.03 275.481 2041.21 421.653 C 2045.86 439.92 2045.22 463.866 2048 483.093 L 2048 696.506 C 2044.69 714.942 2044.16 725.418 2027.58 736.879 C 2022.01 740.734 2017.48 741.658 2013.7 744 L 1988.2 744 C 1980.77 739.382 1977.57 741.342 1967.6 731.863 C 1952.47 717.472 1952.68 705.05 1951.53 685.768 C 1923.35 711.256 1889.22 729.267 1852.28 738.151 C 1842.34 740.576 1829.08 740.872 1819.72 743.88 L 1819.36 744 L 1758.36 744 z M 1803.52 645.526 C 1892.4 637.64 1958.15 559.326 1950.53 470.42 C 1942.9 381.514 1864.79 315.535 1775.86 322.894 C 1686.56 330.284 1620.24 408.803 1627.89 498.083 C 1635.55 587.362 1714.26 653.446 1803.52 645.526 z" />
        <path d="M 0 359.476 C 5.41197 353.244 6.06938 345.546 9.05574 338.124 C 25.7921 296.534 63.1263 265.904 104.092 249.681 C 198.137 208.313 305.046 222.29 382.211 290.875 C 398.782 305.604 418.97 321.32 421.414 345.754 C 424.006 385.84 377.158 415.305 345.014 386.527 C 338.489 380.686 333.342 374.211 326.742 368.56 C 290.082 335.017 249.551 320.15 199.471 323.269 C 169.208 325.154 130.696 338.165 108.953 360.685 C 102.297 367.579 100.819 375.361 99.3998 384.56 C 101.115 389.073 102.835 393.79 104.664 398.239 C 148.016 413.873 191.696 428.583 235.674 442.358 C 283.838 457.682 337.292 471.682 380.113 498.983 C 390.943 505.888 406.584 528.533 411.676 539.622 C 457.389 639.16 365.262 719.392 275.177 738.727 C 265.011 740.909 252.877 740.769 243.503 744 L 182.53 744 C 174.69 741.42 156.037 739.788 145.572 737.012 C 98.4324 724.555 55.7915 698.987 22.5965 663.275 C -8.30689 629.817 -1.02701 583.807 45.5865 575.581 C 77.0031 570.036 100.725 608.277 125.834 622.957 C 179.591 654.388 263.812 655.321 311.543 611.854 C 325.115 599.495 335.873 578.859 312.498 568.812 C 250.981 545.82 186.387 528.408 124.479 506.373 C 77.8934 489.791 34.5971 479.204 12.6919 429.159 C 10.1561 423.365 3.2523 402.822 0 399.408 L 0 359.476 z" />
        <path d="M 776.24 744 C 732.811 720.563 741.642 709.847 740.607 664.328 C 740.38 654.302 740.608 643.894 740.61 633.89 L 740.649 497.916 L 740.642 353.627 C 740.6 327.205 740.159 300.198 740.767 273.981 C 741.984 221.472 811.487 207.038 832.866 254.767 C 840.714 272.288 837.918 313.253 837.923 334.238 L 837.91 469.985 L 837.925 620.588 C 837.929 647.144 838.474 675.492 837.246 701.899 C 836.541 717.05 823.449 734.489 809.948 740.412 C 807.464 741.592 803.786 742.625 801.68 744 L 776.24 744 z" />
        <path d="M 555.264 744 C 540.3 737.655 528.373 729.849 522.161 714.148 C 517.355 702.001 519.867 605.401 519.87 586.703 L 519.921 399.258 L 519.815 318.582 C 519.714 286.047 512.84 243.563 550.011 228.418 C 560.679 224.072 576.81 225.134 587.072 229.884 C 595.522 233.406 613.628 251.608 614.807 260.211 C 618.616 288.025 617.068 333.208 617.074 360.498 L 617.098 514.993 L 617.088 632.278 C 617.082 653.683 617.253 675.009 616.759 696.407 C 616.202 720.539 600.584 736.289 578.818 744 L 555.264 744 z" />
      </svg>
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
            Decentralized - Modular - School-owned
          </span>
          <h1 className="mt-6 font-[var(--font-display)] text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Student data that <em className="italic text-primary">belongs</em> to your school.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Siida connects everyone in your school - students learning, teachers creating,
            principals leading - on one platform that runs on infrastructure you control. No vendor
            lock-in. No data hostage. Just education, owned end-to-end.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:translate-y-[-1px]"
            >
              Start free pilot <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#roles"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
            >
              See who it's for
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-primary/10 blur-3xl" />
          <img
            src={heroImg}
            alt="Siida learning platform connecting students, teachers, and administrators"
            width={1536}
            height={1280}
            className="relative rounded-2xl border border-border bg-card shadow-[var(--shadow-glow)]"
          />
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    {
      icon: Network,
      title: "Decentralized by design",
      body: "Each school runs its own Siida instance. No central vendor lock-in, no shared database, no surprises.",
    },
    {
      icon: Layers,
      title: "Modular architecture",
      body: "Enable only the modules you need. Start simple, add features as you grow - the core stays lightweight.",
    },
    {
      icon: ShieldCheck,
      title: "Yours, end-to-end",
      body: "Data lives on infrastructure your school controls. Export, migrate, or self-host at any time.",
    },
    {
      icon: Cloud,
      title: "Hybrid-cloud access",
      body: "Work from anywhere - Siida syncs encrypted snapshots to the cloud for resilience and accessibility.",
    },
    {
      icon: Users,
      title: "Built for collaboration",
      body: "Students, teachers, principals, and staff share a single source of truth - with role-based permissions.",
    },
    {
      icon: Lock,
      title: "Privacy-first compliance",
      body: "Granular audit logs, encryption at rest and in transit, GDPR tooling out of the box.",
    },
  ];
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">Platform</p>
        <h2 className="mt-3 font-[var(--font-display)] text-4xl font-semibold tracking-tight sm:text-5xl">
          One platform. Full ownership.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Siida replaces the tangle of disconnected tools with one coherent platform - where
          learning, teaching, and administration happen in a space your school truly owns.
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
    <section id="architecture" className="py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">How it works</p>
          <h2 className="mt-3 font-[var(--font-display)] text-4xl font-semibold tracking-tight sm:text-5xl">
            Your data at school. Your reach everywhere.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every school operates its own Siida instance - the system of record. Encrypted data
            syncs to an optional cloud layer, so everyone stays productive from anywhere, and a
            ransomware-grade incident never costs you a single record.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {[
              "School-owned primary database - on-prem or in your own tenancy",
              "All user roles connect to the same source of truth",
              "End-to-end encrypted sync to the Siida cloud relay",
              "Offline-first apps with conflict-free merging",
              "Point-in-time restore across the entire organization",
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
              {/* User roles layer */}
              <div className="grid grid-cols-4 gap-2">
                <DiagramNode label="Students" />
                <DiagramNode label="Teachers" />
                <DiagramNode label="Principals" />
                <DiagramNode label="Admins" />
              </div>
              <Connector />
              <DiagramRow label="Siida Platform" tag="Learning · Teaching · Admin" tone="primary" />
              <Connector />
              <DiagramRow label="Hybrid cloud relay" tag="Encrypted · resilient" tone="muted" />
              <Connector />
              <div className="grid grid-cols-3 gap-3">
                <DiagramNode label="School A" />
                <DiagramNode label="School B" />
                <DiagramNode label="School C" />
              </div>
              <p className="pt-2 text-center text-xs text-muted-foreground">
                Each school owns its data. All roles connect to the same source of truth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DiagramRow({
  label,
  tag,
  tone,
}: {
  label: string;
  tag: string;
  tone: "primary" | "muted";
}) {
  return (
    <div
      className={`flex items-center justify-between rounded-xl border px-4 py-3 ${
        tone === "primary" ? "border-primary/30 bg-primary/10" : "border-border bg-secondary/60"
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

function Roles() {
  const roles = [
    {
      icon: GraduationCap,
      title: "For Students",
      tagline: "Learn on your terms",
      features: [
        "Access courses, lessons, and learning materials",
        "Submit assignments and receive feedback",
        "Track your own progress and achievements",
      ],
    },
    {
      icon: BookOpen,
      title: "For Teachers",
      tagline: "Teach, don't administrate",
      features: [
        "Create and structure courses, lessons, curricula",
        "Manage classes, rosters, and attendance",
        "Grade work with a fast, keyboard-first gradebook",
      ],
    },
    {
      icon: BarChart3,
      title: "For Principals",
      tagline: "Lead with clarity",
      features: [
        "School-wide analytics and performance dashboards",
        "Oversee staff allocations and teaching loads",
        "Monitor student outcomes across departments",
      ],
    },
    {
      icon: Building2,
      title: "For Administrators",
      tagline: "Run the school, not the software",
      features: [
        "Configure organization settings and policies",
        "Manage user accounts, roles, and permissions",
        "Handle enrollments, terms, and scheduling",
      ],
    },
  ];

  return (
    <section id="roles" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">For Everyone</p>
          <h2 className="mt-3 font-[var(--font-display)] text-4xl font-semibold tracking-tight sm:text-5xl">
            Built for every role in your school.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            From the student opening their first lesson to the principal reviewing school-wide
            metrics - everyone works in the same connected system.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {roles.map((role) => (
            <div
              key={role.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition hover:border-primary/40"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary">
                <role.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-[var(--font-display)] text-xl font-semibold">
                {role.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">{role.tagline}</p>
              <ul className="mt-4 flex-1 space-y-2">
                {role.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-primary/60" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
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
              Start with a free pilot - one department, one term. We'll help you migrate from your
              current systems in days, not months. See why schools choose to own their platform.
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
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <Logo />
            <p className="text-sm text-muted-foreground">Student data your school owns.</p>
          </div>
          <div className="flex flex-wrap gap-8 text-sm">
            <a href="#" className="text-muted-foreground transition hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground transition hover:text-foreground">
              Security
            </a>
            <a href="#" className="text-muted-foreground transition hover:text-foreground">
              Status
            </a>
            <a href="#" className="text-muted-foreground transition hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-border/60 pt-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Siida. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
