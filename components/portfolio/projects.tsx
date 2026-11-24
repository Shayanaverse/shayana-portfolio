import { Atom, Layers, Sparkles, type LucideIcon } from 'lucide-react'
import { FadeIn } from './fade-in'
import { SectionHeading } from './section-heading'

const PROJECTS: { icon: LucideIcon; title: string; description: string; tag: string }[] = [
  {
    icon: Atom,
    title: 'Qiskit Hackathon',
    description: 'Part of the marketing team for a quantum computing hackathon and workshop.',
    tag: 'Quantum',
  },
  {
    icon: Layers,
    title: 'MDP Project',
    description: 'A year-long multidisciplinary project at VIT.',
    tag: 'VIT',
  },
  {
    icon: Sparkles,
    title: 'AI Projects',
    description: 'Learning by building beginner AI projects.',
    tag: 'AI',
  },
]

export function Projects() {
  return (
    <section id="work" aria-labelledby="work-title" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading index="02" eyebrow="Currently" title="What I'm working on" id="work-title" />
      <ul className="grid gap-6 md:grid-cols-3">
        {PROJECTS.map(({ icon: Icon, title, description, tag }, i) => (
          <FadeIn as="li" key={title} delay={i * 120} className="h-full">
            <article className="glow-border flex h-full flex-col p-8">
              <div className="mb-10 flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-[0_0_24px_-4px] shadow-brand-purple/60">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
                  {tag}
                </span>
              </div>
              <h3 className="font-display text-2xl font-semibold tracking-tight">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
            </article>
          </FadeIn>
        ))}
      </ul>
    </section>
  )
}
