
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Globe, PenTool, SearchCode, Smartphone, Wrench } from 'lucide-react';

export function ServicesSection() {
  return (
    <section className="w-full bg-secondary py-8 md:py-12" id="services">
      <div className="container px-4 md:px-6 mx-auto lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl nav-text-gradient">Our Core Services</h2>
          <p className="text-muted-foreground mt-2">Offering revolutionizing technology solutions to make your business smarter</p>
        </div>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
          <div className="group service-card bg-card shadow-lg animate-slide-in-from-left">
            <Card className="h-full w-full bg-transparent border-0">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 service-card-title text-base sm:text-lg md:text-xl lg:text-2xl">
                  <span className="nav-text-gradient flex items-center gap-2 whitespace-nowrap">
                    <Smartphone className="text-primary" /> Mobile App Development
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 font-semibold text-sm">Scalable, performant apps for Android &amp; iOS.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle className="text-primary h-4 w-4" /> Native &amp; cross-platform (Flutter, Kotlin)</li>
                  <li className="flex items-center gap-2"><CheckCircle className="text-primary h-4 w-4" /> End-to-end development (Design → Deployment)</li>
                  <li className="flex items-center gap-2"><CheckCircle className="text-primary h-4 w-4" /> Firebase, REST APIs, MongoDB integrations</li>
                  <li className="flex items-center gap-2"><CheckCircle className="text-primary h-4 w-4" /> App store publishing support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="group service-card bg-card shadow-lg animate-slide-in-from-right">
            <Card className="h-full w-full bg-transparent border-0">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 service-card-title text-base sm:text-lg md:text-xl lg:text-2xl">
                  <span className="nav-text-gradient flex items-center gap-2 whitespace-nowrap">
                    <Globe className="text-primary" /> Website Development
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 font-semibold text-sm">Custom-coded websites with speed, design &amp; SEO in mind.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle className="text-primary h-4 w-4" /> Static &amp; dynamic websites (Next.js, React)</li>
                  <li className="flex items-center gap-2"><CheckCircle className="text-primary h-4 w-4" /> CMS or Headless CMS integration (WordPress, Strapi)</li>
                  <li className="flex items-center gap-2"><CheckCircle className="text-primary h-4 w-4" /> SEO-optimized architecture</li>
                  <li className="flex items-center gap-2"><CheckCircle className="text-primary h-4 w-4" /> Deployment &amp; maintenance (Vercel, Render)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="group service-card bg-card shadow-lg animate-slide-in-from-left">
            <Card className="h-full w-full bg-transparent border-0">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 service-card-title text-base sm:text-lg md:text-xl lg:text-2xl">
                  <span className="nav-text-gradient flex items-center gap-2 whitespace-nowrap">
                    <PenTool className="text-primary" /> UI/UX &amp; Graphic Design
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 font-semibold text-sm">Designs that define your brand’s identity.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle className="text-primary h-4 w-4" /> UI/UX wireframes &amp; prototypes</li>
                  <li className="flex items-center gap-2"><CheckCircle className="text-primary h-4 w-4" /> Logo &amp; branding kits</li>
                  <li className="flex items-center gap-2"><CheckCircle className="text-primary h-4 w-4" /> Social media creatives</li>
                  <li className="flex items-center gap-2"><CheckCircle className="text-primary h-4 w-4" /> Design systems in Figma / Adobe XD</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="group service-card bg-card shadow-lg animate-slide-in-from-right">
            <Card className="h-full w-full bg-transparent border-0">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 service-card-title text-base sm:text-lg md:text-xl lg:text-2xl">
                  <span className="nav-text-gradient flex items-center gap-2 whitespace-nowrap">
                    <SearchCode className="text-primary" /> SEO &amp; Digital Presence
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 font-semibold text-sm">Improve your online visibility &amp; search rankings.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle className="text-primary h-4 w-4" /> On-page &amp; technical SEO</li>
                  <li className="flex items-center gap-2"><CheckCircle className="text-primary h-4 w-4" /> Google Search Console setup</li>
                  <li className="flex items-center gap-2"><CheckCircle className="text-primary h-4 w-4" /> Blog strategy &amp; keyword research</li>
                  <li className="flex items-center gap-2"><CheckCircle className="text-primary h-4 w-4" /> Speed, meta tags, sitemap, schema</li>
                </ul>
              </CardContent>
            </Card>
          </div>
           <div className="group service-card bg-card shadow-lg animate-slide-in-from-left">
            <Card className="h-full w-full bg-transparent border-0">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 service-card-title text-base sm:text-lg md:text-xl lg:text-2xl">
                  <span className="nav-text-gradient flex items-center gap-2 whitespace-nowrap">
                    <Wrench className="text-primary" /> Maintenance &amp; Support
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 font-semibold text-sm">Keep your app or website fast, secure &amp; error-free.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle className="text-primary h-4 w-4" /> Bug fixing and security patching</li>
                  <li className="flex items-center gap-2"><CheckCircle className="text-primary h-4 w-4" /> Version upgrades &amp; content updates</li>
                  <li className="flex items-center gap-2"><CheckCircle className="text-primary h-4 w-4" /> Monthly performance reports</li>
                  <li className="flex items-center gap-2"><CheckCircle className="text-primary h-4 w-4" /> Emergency support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
