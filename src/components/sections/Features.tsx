import {
  ClipboardList,
  LineChart,
  Timer,
  Calculator,
  ListChecks,
  Ruler,
  type LucideIcon,
} from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: ClipboardList,
    title: "Log workouts in seconds",
    description:
      "Fast set logging with auto-fill from previous sessions. Focus on lifting, not typing.",
  },
  {
    icon: LineChart,
    title: "Progress charts & PRs",
    description:
      "Visualize strength gains over time. Every new personal record is automatically flagged.",
  },
  {
    icon: Timer,
    title: "Smart rest timer",
    description:
      "Customizable rest intervals with haptic feedback. Resume right where you left off.",
  },
  {
    icon: Calculator,
    title: "Plate calculator",
    description:
      "Instantly know which plates to load. Supports barbells, dumbbells, and kettlebells.",
  },
  {
    icon: ListChecks,
    title: "Routines & templates",
    description:
      "Build reusable workout templates. Follow classic programs or design your own.",
  },
  {
    icon: Ruler,
    title: "Body measurements",
    description:
      "Track weight, body fat, and custom measurements alongside your lifting progress.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-3">
            Features
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Everything a serious lifter needs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            A complete toolkit built around your training - nothing bloated,
            nothing missing.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group relative rounded-2xl border border-border/60 bg-card p-6 hover:border-blue-500/40 transition-all duration-300"
              >
                {/* Subtle inner glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative">
                  <div className="mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <Icon className="size-5 text-blue-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
