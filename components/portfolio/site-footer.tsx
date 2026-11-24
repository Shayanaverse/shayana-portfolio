export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>
          {'\u00A9'} {new Date().getFullYear()} Shayana
        </p>
        <a href="#top" className="hover:text-foreground">
          Back to top
        </a>
      </div>
    </footer>
  )
}
