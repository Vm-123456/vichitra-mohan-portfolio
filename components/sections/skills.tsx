import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const SKILLS = [
  {
    category: 'Frontend Languages',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'jQuery'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['React.js', 'Next.js', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'VS Code', 'Chrome DevTools', 'Figma', 'npm/yarn'],
  },
  {
    category: 'Specializations',
    skills: ['Responsive Design', 'Component Architecture', 'API Integration', 'Performance Optimization'],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A comprehensive set of technical skills developed through hands-on experience with modern web technologies and best practices.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {SKILLS.map((skillGroup) => (
            <Card key={skillGroup.category}>
              <CardHeader>
                <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
