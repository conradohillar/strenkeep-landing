import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "Does StrenKeep work offline?",
    a: "Yes - all logging, timers, and calculators work fully offline. Your data syncs automatically in the background when you reconnect to the internet.",
  },
  {
    q: "Is StrenKeep available on iOS and Android?",
    a: "StrenKeep is coming soon to both iOS (App Store) and Android (Google Play). Preorder now and you'll be notified the moment it launches. Your data will sync seamlessly across all your devices.",
  },
  {
    q: "How does per-gym tracking work?",
    a: "StrenKeep uses your phone's GPS and Wi-Fi to detect which gym you're at and switches your active location automatically. You can also set or override locations manually. Each gym keeps its own workout history, PR board, and training stats - completely separate from your other locations.",
  },
  {
    q: "Can I export my workout data?",
    a: "Pro subscribers can export their complete workout history as a CSV file at any time. Free users have full in-app access to their full history, exercise list, and personal records.",
  },
  {
    q: "Can I cancel my Pro subscription anytime?",
    a: "Absolutely. Cancel anytime through your App Store or Google Play subscription settings. You'll keep Pro access until the end of your current billing period, with no additional charges.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 border-t border-border/40">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Questions? Answered.
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border/60 rounded-xl px-5 bg-card/50 data-[state=open]:border-blue-500/40 data-[state=open]:bg-card transition-all duration-200"
            >
              <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline py-5 gap-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-5 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
