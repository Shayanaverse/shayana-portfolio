import { Atom, Brain, Code2, Megaphone, type LucideIcon } from 'lucide-react'
import { FadeIn } from './fade-in'
import { SectionHeading } from './section-heading'

const SKILLS: { icon: LucideIcon; label: string }[] = [
  { icon: Code2, label: 'Python' },
  { icon: Brain, label: 'AI basics' },
  { icon: Atom, label: 'Quantum computing (Qiskit)' },
  { icon: Megaphone, label: 'Marketing' },
]

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading index="03" eyebrow="Toolkit" title="Skills" id="skills-title" />
      <ul className="grid gap-4 sm:grid-cols-2">
        {SKILLS.map(({ icon: Icon, label }, i) => (
          <FadeIn as="li" key={label} delay={i * 100}>
            <div className="glow-border flex items-center gap-5 px-6 py-6">
              <Icon className="size-6 shrink-0 text-brand-purple" aria-hidden="true" />
              <span className="font-display text-xl font-medium md:text-2xl">{label}</span>
            </div>
          </FadeIn>
        ))}
      </ul>
    </section>
  )
}
