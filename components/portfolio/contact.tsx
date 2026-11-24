import { ArrowUpRight, Mail } from 'lucide-react'
import { FadeIn } from './fade-in'
import { GithubIcon } from './github-icon'
import { EMAIL, GITHUB_HANDLE, GITHUB_URL } from './site-data'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <FadeIn>
        <div className="glow-border relative isolate overflow-hidden px-6 py-16 text-center md:px-16 md:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 left-1/2 -z-10 size-[32rem] -translate-x-1/2 rounded-full bg-brand-purple/20 blur-[120px]"
          />
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="text-gradient font-semibold">04</span> &middot; Contact
          </p>
          <h2 id="contact-title" className="font-display text-4xl font-semibold tracking-tight text-balance md:text-7xl">
            {"Let's "}
            <span className="text-gradient">connect.</span>
          </h2>

          <div className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-center gap-4 rounded-xl border border-border bg-background/60 p-5 text-left transition-colors hover:border-brand-purple/60"
            >
              <Mail className="size-5 shrink-0 text-brand-purple" aria-hidden="true" />
              <span className="min-w-0 flex-1">
                <span className="block text-xs text-muted-foreground">Email</span>
                <span className="block truncate text-sm font-medium">{EMAIL}</span>
              </span>
              <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-border bg-background/60 p-5 text-left transition-colors hover:border-brand-blue/60"
            >
              <GithubIcon className="size-5 shrink-0 text-brand-blue" />
              <span className="min-w-0 flex-1">
                <span className="block text-xs text-muted-foreground">GitHub</span>
                <span className="block truncate text-sm font-medium">{GITHUB_HANDLE}</span>
              </span>
              <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
