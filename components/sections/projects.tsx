import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react'
import Image from 'next/image'

const PROJECTS = [
  {
    id: 1,
    title: 'UP MSME 1Connect Portal',
    description: 'Developed responsive UI and interactive dashboards for government portal. Implemented real-time data visualization and seamless API integration.',
    technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'API Integration'],
    image: '/images/upmsme_images/main.png',
    images: ['/images/upmsme_images/info.png', '/images/upmsme_images/SCHEME-ANALYTICS.png'],
    category: 'Government Portal',
    features: ['Responsive UI', 'Dashboard', 'Real-time Data', 'API Integration'],
  },
  {
    id: 2,
    title: 'Assam RAMP',
    description: 'Built interactive dashboards with advanced filtering capabilities. Optimized UI performance and enhanced user interaction with modern frontend practices.',
    technologies: ['React.js', 'Tailwind CSS', 'Bootstrap', 'JavaScript'],
    image: '/images/assam_images/main.png',
    images: ['/images/assam_images/about.png', '/images/assam_images/workshop.png'],
    category: 'Interactive Dashboard',
    features: ['Interactive Dashboard', 'Advanced Filters', 'Performance Optimization', 'Responsive Design'],
  },
  {
    id: 3,
    title: 'Goa RAMP',
    description: 'Developed frontend components with charts and data tables. Implemented performance optimizations and improved overall usability and responsiveness.',
    technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'Data Visualization'],
    image: '/images/goa_images/main.png',
    images: ['/images/goa_images/about.png', '/images/goa_images/scheme.png'],
    category: 'Data Management',
    features: ['Charts & Tables', 'Data Visualization', 'Performance Tuning', 'Component Architecture'],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 overflow-hidden bg-muted/30">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-primary" />
              Selected work across government portals and dashboards
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A curated collection of responsive, data-heavy frontend experiences. Each project focuses on clarity, usability, and strong visual hierarchy.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6">
          {PROJECTS.map((project) => (
            <Card key={project.id} className="group overflow-hidden border-border/60 bg-card/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
              <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                {/* Image collage */}
                <div className="relative min-h-[28rem] overflow-hidden bg-slate-950">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/35 via-transparent to-black/40" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.14),transparent_32%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.08),transparent_28%)]" />

                  <div className="absolute left-5 top-5 z-10 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur-md">
                    {project.category}
                  </div>

                  <div className="absolute left-5 right-5 top-14 bottom-5 grid gap-3 lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-2xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="grid gap-3">
                      <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/5 shadow-lg">
                        <Image
                          src={project.images[0]}
                          alt={`${project.title} secondary view 1`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/5 shadow-lg">
                        <Image
                          src={project.images[1]}
                          alt={`${project.title} secondary view 2`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {project.features.slice(0, 3).map((feature) => (
                      <div
                        key={feature}
                        className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-white/90 backdrop-blur-md"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                  <CardHeader className="px-0 pt-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="outline">{project.category}</Badge>
                      <Badge variant="secondary">Case Study</Badge>
                    </div>
                    <CardTitle className="mt-2 text-2xl sm:text-3xl tracking-tight">{project.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed pt-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 px-0 pb-0 pt-6 space-y-6">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-3">Key Features</p>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-3">Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="default" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <Button size="sm" asChild>
                        <a href="#contact" className="flex items-center gap-1.5">
                          Let's Talk
                          <ArrowRight size={16} />
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href="#home" className="flex items-center gap-1.5">
                          <ExternalLink size={16} />
                          View Profile
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
