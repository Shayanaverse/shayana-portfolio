import { ArrowRight } from 'lucide-react'
import { FadeIn } from './fade-in'
import { GithubIcon } from './github-icon'
import { GITHUB_URL } from './site-data'

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 size-[44rem] -translate-x-[70%] rounded-full bg-brand-purple/25 blur-[140px]" />
        <div className="absolute top-20 left-1/2 size-[36rem] -translate-x-[10%] rounded-full bg-brand-blue/20 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(1_0_0/0.04)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 pt-28 pb-20">
        <FadeIn>
          <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur">
            <span className="size-2 rounded-full bg-gradient-brand" aria-hidden="true" />
            First-year B.Tech Computer Science student at VIT Chennai
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <h1
            id="hero-title"
            className="font-display text-[clamp(4.5rem,18vw,13rem)] leading-[0.9] font-bold tracking-[-0.04em]"
          >
            <span className="text-gradient">Shayana</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-foreground md:text-xl">Now on GitHub</p>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-pretty text-muted-foreground md:text-2xl">
            Exploring AI and quantum computing, one project at a time.
          </p>
        </FadeIn>

        <FadeIn delay={300} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 text-sm font-medium text-white shadow-[0_0_32px_-6px] shadow-brand-purple/60 transition-shadow hover:shadow-[0_0_44px_-4px] hover:shadow-brand-purple/80"
          >
            Get in touch
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-7 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-brand-purple/60 hover:bg-secondary"
          >
            <GithubIcon className="size-4" />
            View my GitHub
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
