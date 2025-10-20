
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { plans } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export function PlansSection() {
  return (
    <section id="plans" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Planes para Todos</h2>
          <p className="text-muted-foreground md:text-lg">
            Elige el plan que mejor se adapte a tus necesidades y comienza a ahorrar en tu salud hoy mismo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className={cn('flex flex-col', plan.popular && 'border-primary ring-2 ring-primary relative')}>
                {plan.popular && (
                    <Badge variant="destructive" className="absolute -top-3 right-4 hover:bg-destructive/90">Popular</Badge>
                )}
              <CardHeader className="items-center text-center">
                <plan.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.priceDetails}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3 text-sm">
                  {plan.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={cn("w-full", plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-accent hover:bg-accent/90 text-accent-foreground')} size="lg">{plan.cta}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
