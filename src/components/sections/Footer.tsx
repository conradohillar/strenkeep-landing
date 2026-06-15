import { Dumbbell, Twitter, Instagram, Github } from "lucide-react";
import { type LucideIcon } from "lucide-react";

const LINK_GROUPS: Record<string, string[]> = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press"],
  Legal: ["Privacy", "Terms", "Cookies"],
};

const SOCIAL_ICONS: LucideIcon[] = [Twitter, Instagram, Github];

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="flex items-center gap-2 font-bold text-lg text-foreground mb-3"
            >
              <Dumbbell className="size-5 text-primary" />
              StrenKeep
            </a>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              The strength tracking app for lifters who train hard - at every
              gym, every session.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5 mt-5">
              {SOCIAL_ICONS.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="size-8 rounded-lg border border-border/60 bg-card/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-200"
                  aria-label="Social link"
                >
                  <Icon className="size-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINK_GROUPS).map(([category, items]) => (
            <div key={category}>
              <p className="text-xs font-semibold text-foreground tracking-widest uppercase mb-4">
                {category}
              </p>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} StrenKeep. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built for lifters, by lifters 🏋️
          </p>
        </div>
      </div>
    </footer>
  );
}
