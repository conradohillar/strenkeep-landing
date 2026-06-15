import { Check } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface Plan {
  id: string
  name: string
  price: string
  period: string
  description: string
  cta: string
  ctaVariant: 'default' | 'outline'
  popular: boolean
  features: string[]
}

const PLANS: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Everything you need to start tracking your lifts.',
    cta: 'Reserve Free Spot',
    ctaVariant: 'outline',
    popular: false,
    features: [
      'Unlimited workout logs',
      'Up to 2 gym locations',
      'Basic progress charts',
      'Plate calculator',
      'Rest timer',
      'Exercise library',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$7.99',
    period: 'per month',
    description: 'Unlock the full power of StrenKeep for serious athletes.',
    cta: 'Start 14-Day Free Trial',
    ctaVariant: 'default',
    popular: true,
    features: [
      'Everything in Free',
      'Unlimited gym locations',
      'Advanced analytics & charts',
      'Custom workout routines',
      'Progress photos',
      'CSV data export',
      'Priority support',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Simple, honest pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Start for free. Upgrade when you're ready to go deeper.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {PLANS.map((plan) => (
            <Card
              key={plan.id}
              className={cn(
                'relative flex flex-col border transition-all duration-300',
                plan.popular
                  ? 'border-blue-500/60 bg-card shadow-xl shadow-blue-500/10'
                  : 'border-border/60 bg-card/60',
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <Badge className="bg-blue-500 text-white hover:bg-blue-500 shadow-md px-3">
                    Most popular
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-4 pt-7">
                <CardTitle className="text-base font-bold text-foreground">
                  {plan.name}
                </CardTitle>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-4xl font-extrabold tracking-tight text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    /{plan.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1.5">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="flex flex-col flex-1 gap-6">
                <ul className="flex flex-col gap-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check className="size-4 text-blue-400 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.ctaVariant}
                  className={cn(
                    'w-full',
                    plan.ctaVariant === 'outline' &&
                      'border-zinc-700 bg-zinc-800/50 hover:bg-zinc-700/50 text-foreground',
                  )}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Cancel anytime · No hidden fees · Prices in USD
        </p>
      </div>
    </section>
  )
}
