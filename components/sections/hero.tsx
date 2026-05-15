import { ArrowRight, Download, Sparkles, Layers3, Gauge } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden min-h-screen pt-28 pb-20 flex items-center justify-center"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_hsl(var(--primary)/0.12),transparent_28%),radial-gradient(circle_at_top_right,_hsl(var(--accent)/0.12),transparent_24%),linear-gradient(to_bottom,_transparent,_hsl(var(--muted)/0.25))]" />
      <div className="absolute left-1/2 top-0 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="container max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
          {/* Content */}
          <div className="animate-fade-in space-y-8">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="gap-1.5 px-3 py-1.5 text-xs font-medium">
                <Sparkles className="h-3.5 w-3.5" />
                Frontend Developer
              </Badge>
              <Badge variant="outline" className="px-3 py-1.5 text-xs font-medium">
                React.js
              </Badge>
              <Badge variant="outline" className="px-3 py-1.5 text-xs font-medium">
                Next.js
              </Badge>
              <Badge variant="outline" className="px-3 py-1.5 text-xs font-medium">
                Tailwind CSS
              </Badge>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]">
                Vichitra
                <span className="block text-primary">Mohan</span>
              </h1>
              <p className="max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
                I design and build responsive, high-performance web interfaces that feel polished,
                fast, and easy to use. My focus is clean component architecture, strong visuals,
                and production-ready frontend experiences.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-2xl border border-border/60 bg-card/70 p-4 shadow-sm backdrop-blur">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
                  <Layers3 className="h-4 w-4 text-primary" />
                  Product UI
                </div>
                <p className="text-sm text-muted-foreground">
                  Scalable layouts and reusable components for real-world apps.
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/70 p-4 shadow-sm backdrop-blur">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
                  <Gauge className="h-4 w-4 text-primary" />
                  Performance
                </div>
                <p className="text-sm text-muted-foreground">
                  Fast, responsive interfaces with careful optimization.
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/70 p-4 shadow-sm backdrop-blur sm:col-span-2 xl:col-span-1">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Visual Polish
                </div>
                <p className="text-sm text-muted-foreground">
                  Beautiful gradients, spacing, and motion that feel intentional.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#projects">
                <Button size="lg">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg">Get In Touch</Button>
              </a>
              <a href="/resume.pdf" target="_blank">
                <Button variant="ghost">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border/40">
              <div>
                <p className="text-2xl sm:text-3xl font-bold">2+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold">3+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold">∞</p>
                <p className="text-sm text-muted-foreground">Always Learning</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute -right-4 bottom-8 h-24 w-24 rounded-full bg-accent/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-card/80 p-3 shadow-2xl shadow-primary/10 backdrop-blur">
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-primary/15 to-transparent" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/images/user_image/vichitra-mohan.jpg"
                  alt="Vichitra Mohan"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="absolute left-4 top-4 rounded-2xl border border-white/15 bg-black/35 px-4 py-3 text-white shadow-lg backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">Available for</p>
                <p className="text-sm font-semibold">Frontend Projects</p>
              </div>

              <div className="absolute -bottom-5 left-6 grid grid-cols-2 gap-3 rounded-2xl border border-border/70 bg-background/95 p-3 shadow-xl shadow-black/10 backdrop-blur-md">
                <div className="min-w-[94px] rounded-xl bg-muted/60 px-3 py-2">
                  <p className="text-xs text-muted-foreground">Focus</p>
                  <p className="text-sm font-semibold">UI Quality</p>
                </div>
                <div className="min-w-[94px] rounded-xl bg-muted/60 px-3 py-2">
                  <p className="text-xs text-muted-foreground">Stack</p>
                  <p className="text-sm font-semibold">React + TS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
