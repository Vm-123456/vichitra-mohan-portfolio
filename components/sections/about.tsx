import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container max-w-4xl">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
              <p className="text-primary font-semibold">Frontend Developer | React Enthusiast</p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate frontend developer with hands-on experience in building responsive, user-friendly web applications.
                Currently working as a Frontend Developer at Innovador Infotech, where I develop interfaces for government portal modules.
              </p>

              <p>
                With a B.Tech in Computer Science (2020-2024, CGPA 7.9), I've developed strong expertise in React.js, Next.js,
                Tailwind CSS, and modern JavaScript. I'm passionate about performance optimization, component architecture,
                and creating delightful user experiences.
              </p>

              <p>
                I believe in writing clean, maintainable code and staying updated with the latest web technologies.
                When I'm not coding, you can find me exploring new frameworks or contributing to open-source projects.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border/40">
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-semibold">Kanpur, India</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Experience</p>
                <p className="font-semibold">2+ Years</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Education</p>
                <p className="font-semibold">B.Tech CSE (CGPA 7.9)</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <p className="font-semibold">Open to Opportunities</p>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Experience</h3>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Frontend Developer</CardTitle>
                <CardDescription>Innovador Infotech Pvt. Ltd. • Jun 2025 - Present</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                  <li>Developed responsive UIs for government portal modules</li>
                  <li>Optimized frontend performance and user experience</li>
                  <li>Built reusable UI components using Tailwind CSS</li>
                  <li>Integrated APIs and handled data visualization</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Frontend Developer Intern</CardTitle>
                <CardDescription>Innovador Infotech • Jan 2025 - Jun 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                  <li>Developed frontend components using React and Tailwind</li>
                  <li>Collaborated on responsive UI design implementation</li>
                  <li>Created reusable component libraries</li>
                  <li>Participated in code reviews</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Frontend Developer Intern</CardTitle>
                <CardDescription>Dcode Pathshala • Jun 2024 - Dec 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                  <li>Built modern responsive web interfaces</li>
                  <li>Enhanced frontend performance</li>
                  <li>Developed component libraries using React</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
