import { FadeIn } from './fade-in'

export function SectionHeading({ index, eyebrow, title, id }: { index: string; eyebrow: string; title: string; id: string }) {
  return (
    <FadeIn className="mb-12 md:mb-16">
      <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span className="text-gradient font-semibold">{index}</span>
        <span className="h-px w-8 bg-gradient-brand" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className="font-display text-4xl font-semibold tracking-tight text-balance md:text-6xl">
        {title}
      </h2>
    </FadeIn>
  )
}
