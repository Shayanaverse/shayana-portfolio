import { FadeIn } from './fade-in'
import { SectionHeading } from './section-heading'

const LINES = [
  "I'm a first-year B.Tech Computer Science student at VIT Chennai.",
  "I'm learning Python and AI by building and experimenting.",
  "I'm curious about quantum computing and finance.",
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading index="01" eyebrow="About me" title="A curious mind in the making." id="about-title" />
      <ul className="flex flex-col divide-y divide-border border-y border-border">
        {LINES.map((line, i) => (
          <FadeIn as="li" key={line} delay={i * 120} className="flex items-baseline gap-6 py-8 md:gap-10">
            <span className="font-mono text-sm text-gradient font-semibold">{`0${i + 1}`}</span>
            <p className="font-display text-2xl leading-snug font-medium text-pretty md:text-4xl">{line}</p>
          </FadeIn>
        ))}
      </ul>
    </section>
  )
}
