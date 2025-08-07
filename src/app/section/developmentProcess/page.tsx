
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Palette, Rocket, Search, TestTubeDiagonal, TrendingUp } from 'lucide-react';

export function DevelopmentProcessSection() {
  return (
    <section className="w-full py-8 md:py-12 bg-secondary" id="development-process">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl nav-text-gradient">Our Development Process</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            We keep it simple, collaborative, and fast — built to deliver quality results with clarity at every step.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="group text-center p-6 animate-slide-in-from-left shadow-lg">
            <CardHeader className="p-0">
              <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-4">
                <Search className="h-8 w-8 text-primary group-hover:text-primary transition-colors" />
              </div>
              <CardTitle className="mb-2 text-xl group-hover:text-primary transition-colors">Discover & Understand</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-muted-foreground text-sm">
                We start by listening. Whether it's a new app idea or a website revamp, we dig deep into your goals, audience, and challenges.
              </p>
            </CardContent>
          </Card>
          <Card className="group text-center p-6 animate-slide-in-from-right shadow-lg">
            <CardHeader className="p-0">
              <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-4">
                <Palette className="h-8 w-8 text-primary group-hover:text-primary transition-colors" />
              </div>
              <CardTitle className="mb-2 text-xl group-hover:text-primary transition-colors">Design & Prototype</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-muted-foreground text-sm">
                Our UI/UX team builds wireframes and visual prototypes to bring your idea to life — ensuring it’s both functional and beautiful.
              </p>
            </CardContent>
          </Card>
          <Card className="group text-center p-6 animate-slide-in-from-left shadow-lg">
            <CardHeader className="p-0">
              <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-4">
                <Code className="h-8 w-8 text-primary group-hover:text-primary transition-colors" />
              </div>
              <CardTitle className="mb-2 text-xl group-hover:text-primary transition-colors">Build & Develop</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-muted-foreground text-sm">
                We write clean, scalable code using modern tech stacks — from mobile apps to web portals. You get regular updates and review links during development.
              </p>
            </CardContent>
          </Card>
          <Card className="group text-center p-6 animate-slide-in-from-right shadow-lg">
            <CardHeader className="p-0">
              <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-4">
                <TestTubeDiagonal className="h-8 w-8 text-primary group-hover:text-primary transition-colors" />
              </div>
              <CardTitle className="mb-2 text-xl group-hover:text-primary transition-colors">Test & Iterate</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-muted-foreground text-sm">
                We run through device tests, use cases, and feedback loops. We fix bugs, polish the experience, and make sure it’s production-ready.
              </p>
            </CardContent>
          </Card>
          <Card className="group text-center p-6 animate-slide-in-from-left shadow-lg">
            <CardHeader className="p-0">
              <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-4">
                <Rocket className="h-8 w-8 text-primary group-hover:text-primary transition-colors" />
              </div>
              <CardTitle className="mb-2 text-xl group-hover:text-primary transition-colors">Launch & Support</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-muted-foreground text-sm">
                We help you go live — whether it's on app stores, the web, or your own cloud infrastructure. Post-launch, we stick around for support, improvements, or scaling.
              </p>
            </CardContent>
          </Card>
          <Card className="group text-center p-6 animate-slide-in-from-right shadow-lg">
            <CardHeader className="p-0">
              <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-4">
                <TrendingUp className="h-8 w-8 text-primary group-hover:text-primary transition-colors" />
              </div>
              <CardTitle className="mb-2 text-xl group-hover:text-primary transition-colors">Maintain & Evolve</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-muted-foreground text-sm">
                We offer regular updates, feature enhancements, and technical maintenance as your product grows and your audience expands.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
export default DevelopmentProcessSection;