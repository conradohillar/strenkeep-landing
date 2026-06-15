import { Play, Smartphone, Zap, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const SETS = [
  { w: "135", r: "12", done: true },
  { w: "185", r: "8", done: true },
  { w: "205", r: "6", done: true },
];

function PhoneMockup() {
  return (
    <div className="relative flex justify-center lg:justify-end">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/20 blur-[80px] rounded-full -z-10" />

      {/* Phone frame */}
      <div className="w-[248px] rounded-[2.5rem] border-[1.5px] border-zinc-700/80 bg-zinc-900 overflow-hidden shadow-2xl shadow-blue-950/60">
        {/* Status bar */}
        <div className="flex justify-between items-center px-5 pt-4 pb-2">
          <span className="text-[10px] text-zinc-400 font-medium">9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-1.5 rounded-sm bg-zinc-600" />
            <div className="w-3.5 h-1.5 rounded-sm bg-green-500" />
          </div>
        </div>

        {/* Workout header */}
        <div className="px-4 pb-3 flex items-start justify-between">
          <div>
            <p className="text-[8px] tracking-[0.15em] text-zinc-500 font-semibold">
              PUSH DAY A
            </p>
            <p className="text-sm font-bold text-white mt-0.5">Bench Press</p>
          </div>
          <div className="flex items-center gap-1 bg-blue-500/10 border border-blue-500/25 rounded-full px-2 py-0.5 mt-1">
            <MapPin className="size-2.5 text-blue-400" />
            <span className="text-[9px] text-blue-300 font-medium">
              Gold's Gym
            </span>
          </div>
        </div>

        {/* Column headers */}
        <div className="px-4 flex gap-2 mb-1.5">
          <span className="text-[8px] text-zinc-600 font-semibold tracking-widest w-5">
            SET
          </span>
          <span className="text-[8px] text-zinc-600 font-semibold tracking-widest flex-1">
            WEIGHT
          </span>
          <span className="text-[8px] text-zinc-600 font-semibold tracking-widest w-7">
            REPS
          </span>
          <span className="w-4" />
        </div>

        {/* Sets */}
        <div className="px-4 space-y-1.5 pb-3">
          {SETS.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-zinc-800/80 rounded-lg px-3 py-2.5"
            >
              <span className="text-[10px] text-zinc-500 w-5">{i + 1}</span>
              <span className="text-[11px] text-zinc-200 flex-1 font-medium">
                {s.w} lbs
              </span>
              <span className="text-[11px] text-zinc-200 w-7 font-medium">
                {s.r}
              </span>
              <div className="size-4 rounded-full bg-green-500/15 border border-green-500/40 flex items-center justify-center">
                <div className="size-1.5 rounded-full bg-green-400" />
              </div>
            </div>
          ))}
          {/* Next set (empty) */}
          <div className="flex items-center gap-2 border border-dashed border-blue-500/30 bg-blue-500/5 rounded-lg px-3 py-2.5">
            <span className="text-[10px] text-zinc-600 w-5">4</span>
            <span className="text-[11px] text-zinc-600 flex-1">- lbs</span>
            <span className="text-[11px] text-zinc-600 w-7">-</span>
            <div className="size-4 rounded-full border border-zinc-700" />
          </div>
        </div>

        {/* Rest timer */}
        <div className="mx-4 mb-3 bg-zinc-800/60 border border-zinc-700/50 rounded-xl p-3 text-center">
          <p className="text-[8px] text-zinc-500 tracking-[0.2em] font-semibold mb-1">
            REST TIMER
          </p>
          <p className="text-2xl font-mono font-bold text-blue-400 tracking-tight">
            1:42
          </p>
          <div className="mt-2 h-0.5 bg-zinc-700 rounded-full overflow-hidden">
            <div className="h-full w-[58%] bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
          </div>
        </div>

        {/* Bottom nav tabs */}
        <div className="px-4 pb-5 flex justify-around">
          {["Log", "History", "Stats"].map((tab, i) => (
            <button
              key={tab}
              className={cn(
                "text-[9px] font-semibold px-3 py-1.5 rounded-lg",
                i === 0 ? "bg-blue-500/15 text-blue-400" : "text-zinc-600",
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-600/8 blur-[140px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - copy */}
          <div className="flex flex-col items-start gap-6">

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.05]">
              Track every lift.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600">
                At every gym.
              </span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              StrenKeep logs your workouts, tracks personal records, and keeps
              separate stats for each gym you train at.
            </p>

            <p className="text-sm text-zinc-500">
              Coming soon · No credit card required
            </p>
          </div>

          {/* Right - phone mockup */}
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
