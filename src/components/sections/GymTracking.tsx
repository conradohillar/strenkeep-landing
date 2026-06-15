import {
  MapPin,
  Building2,
  Trophy,
  ChevronRight,
  Dumbbell,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface Lift {
  name: string;
  weight: string;
  pr: boolean;
}

interface Gym {
  name: string;
  icon: LucideIcon;
  sessions: number;
  lifts: Lift[];
}

const GYMS: Gym[] = [
  {
    name: "Gold's Gym Downtown",
    icon: Building2,
    sessions: 47,
    lifts: [
      { name: "Bench Press", weight: "225 lbs", pr: true },
      { name: "Squat", weight: "315 lbs", pr: true },
      { name: "Overhead Press", weight: "155 lbs", pr: false },
    ],
  },
  {
    name: "Home Gym",
    icon: Dumbbell,
    sessions: 31,
    lifts: [
      { name: "Deadlift", weight: "365 lbs", pr: true },
      { name: "Pull-ups", weight: "BW + 45 lbs", pr: false },
      { name: "Barbell Row", weight: "185 lbs", pr: true },
    ],
  },
];

const BULLET_POINTS = [
  "Auto-detects gym via GPS or Wi-Fi",
  "Separate PR boards per location",
  "Per-gym volume and frequency stats",
  "Custom exercise lists per gym",
];

export default function GymTracking() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - copy */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 w-fit bg-blue-500/10 border border-blue-500/25 rounded-full px-3 py-1">
              <MapPin className="size-3.5 text-blue-400" />
              <span className="text-sm text-blue-300 font-medium">
                Per-gym tracking
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              Different gym,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600">
                different stats.
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Your home gym and your commercial gym don't have the same
              equipment. StrenKeep automatically detects your location and keeps
              separate workout logs, PRs, and volume stats for each place you
              train.
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

          {/* Right - gym cards */}
          <div className="flex flex-col gap-4">
            {GYMS.map((gym) => {
              const Icon = gym.icon;
              return (
                <div
                  key={gym.name}
                  className="rounded-2xl border border-border/60 bg-card p-5 hover:border-blue-500/30 transition-colors duration-300"
                >
                  {/* Gym header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="size-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                        <Icon className="size-4 text-blue-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-foreground">
                          {gym.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {gym.sessions} sessions logged
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-blue-400 bg-blue-500/10 rounded-full px-2.5 py-0.5">
                      <MapPin className="size-3" />
                      <span>Active</span>
                    </div>
                  </div>

                  {/* Lift rows */}
                  <div className="space-y-0">
                    {gym.lifts.map((lift, i) => (
                      <div
                        key={lift.name}
                        className={`flex items-center justify-between py-2.5 ${
                          i < gym.lifts.length - 1
                            ? "border-b border-border/40"
                            : ""
                        }`}
                      >
                        <span className="text-sm text-muted-foreground">
                          {lift.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-foreground">
                            {lift.weight}
                          </span>
                          {lift.pr && (
                            <div className="flex items-center gap-0.5 bg-amber-500/10 border border-amber-500/25 rounded-full px-1.5 py-0.5">
                              <Trophy className="size-2.5 text-amber-400" />
                              <span className="text-[9px] text-amber-400 font-bold">
                                PR
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
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
