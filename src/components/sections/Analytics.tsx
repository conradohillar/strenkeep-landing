import { TrendingUp, BarChart3, ChevronRight } from "lucide-react";

const CHART_DATA = [
  { week: "W1", value: 62 },
  { week: "W2", value: 70 },
  { week: "W3", value: 68 },
  { week: "W4", value: 78 },
  { week: "W5", value: 75 },
  { week: "W6", value: 85 },
  { week: "W7", value: 88 },
  { week: "W8", value: 95 },
];

const PR_STATS = [
  { lift: "Squat", weight: "315 lbs", delta: "+20 lbs" },
  { lift: "Bench", weight: "225 lbs", delta: "+15 lbs" },
  { lift: "Deadlift", weight: "365 lbs", delta: "+25 lbs" },
];

const BULLET_POINTS = [
  "Weekly volume & frequency trends",
  "Per-exercise strength curves",
  "Automatic PR detection & history",
  "One-rep max estimator",
];

const MAX_VAL = Math.max(...CHART_DATA.map((d) => d.value));

function ProgressChart() {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-6">
      {/* Chart header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-[10px] text-muted-foreground tracking-widest uppercase font-semibold">
            Weekly Volume
          </p>
          <p className="text-2xl font-bold text-foreground mt-1">12,480 lbs</p>
        </div>
        <div className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/25 rounded-full px-2.5 py-1">
          <TrendingUp className="size-3 text-green-400" />
          <span className="text-xs text-green-400 font-semibold">+14.2%</span>
        </div>
      </div>

      {/* Bar chart */}
      <div className="flex items-end gap-2" style={{ height: "130px" }}>
        {CHART_DATA.map((d, i) => {
          const isLast = i === CHART_DATA.length - 1;
          const heightPct = (d.value / MAX_VAL) * 100;
          return (
            <div
              key={d.week}
              className="flex-1 flex flex-col items-center gap-2 h-full"
            >
              <div className="w-full flex items-end flex-1">
                <div
                  className={`w-full rounded-t-md ${
                    isLast
                      ? "bg-gradient-to-t from-blue-600 to-blue-400"
                      : "bg-zinc-700/70 hover:bg-zinc-600/70 transition-colors"
                  }`}
                  style={{ height: `${heightPct}%` }}
                />
              </div>
              <span className="text-[9px] text-zinc-500 font-medium">
                {d.week}
              </span>
            </div>
          );
        })}
      </div>

      {/* PR mini-stats */}
      <div className="mt-6 pt-5 border-t border-border/40 grid grid-cols-3 gap-4">
        {PR_STATS.map((pr) => (
          <div key={pr.lift}>
            <p className="text-[10px] text-muted-foreground font-semibold tracking-widest uppercase">
              {pr.lift}
            </p>
            <p className="text-sm font-bold text-foreground mt-0.5">
              {pr.weight}
            </p>
            <p className="text-[10px] text-green-400 font-semibold mt-0.5">
              {pr.delta}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Analytics() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - visual */}
          <div className="relative">
            <div className="absolute -inset-8 bg-blue-500/5 blur-3xl rounded-full -z-10" />
            <ProgressChart />
          </div>

          {/* Right - copy */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 w-fit bg-blue-500/10 border border-blue-500/25 rounded-full px-3 py-1">
              <BarChart3 className="size-3.5 text-blue-400" />
              <span className="text-sm text-blue-300 font-medium">
                Analytics
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              See your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600">
                strength grow.
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              StrenKeep turns your raw workout logs into meaningful insights.
              Track weekly volume, monitor fatigue trends, and celebrate every
              personal record with clean, detailed progress charts.
            </p>

            <ul className="flex flex-col gap-3">
              {BULLET_POINTS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground"
                >
                  <ChevronRight className="size-4 text-blue-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
