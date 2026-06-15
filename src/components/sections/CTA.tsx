

export default function CTA() {
  return (
    <section id="preorder" className="py-24 border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600/15 via-blue-900/20 to-transparent border border-blue-500/20 p-12 md:p-20 text-center">
          {/* Top glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-40 bg-blue-500/25 blur-[80px] pointer-events-none" />
          {/* Corner glows */}
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-600/10 blur-[60px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600/10 blur-[60px] rounded-full pointer-events-none" />

          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
              Ready to hit your PRs?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              StrenKeep is coming soon. Reserve your spot now and be the first
              to track every lift, at every gym.
            </p>
            <p className="mt-6 text-sm text-zinc-500">
              Coming soon to iOS & Android · No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
