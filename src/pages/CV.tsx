// src/pages/CV.tsx (or wherever your CV page lives)
export default function CV() {
  return (
    <main className="min-h-dvh bg-white">
      <div className="mx-auto max-w-3xl px-6 py-12 print:px-0 print:py-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight">
            Hilde Vatne
          </h1>
          <p className="mt-1 text-zinc-600">
            Front-end developer — React & TypeScript. Focus on accessibility,
            performance, and simple, reliable UI patterns.
          </p>
        </header>

        {/* Summary */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold">Summary</h2>
          <p>
            I build accessible, responsive web apps with clear APIs and small UX
            details that make apps feel fast. Comfortable shipping to Netlify,
            working with REST APIs, and keeping components tidy and testable.{' '}
            <strong>
              Recently launched the official site for Kristiansands
              Svømmeallianse (ksa.no) and continue improving it.
            </strong>
          </p>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold">Skills</h2>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <ul className="space-y-1 text-zinc-700">
              <li>
                <strong>Languages & UI:</strong> TypeScript, JavaScript, HTML,
                CSS
              </li>
              <li>
                <strong>Frameworks:</strong> React, React Router
              </li>
              <li>
                <strong>Styling:</strong> Tailwind CSS, SCSS
              </li>
            </ul>
            <ul className="space-y-1 text-zinc-700">
              <li>
                <strong>Build & Deploy:</strong> Vite, Netlify
              </li>
              <li>
                <strong>Data:</strong> REST APIs, fetch patterns
              </li>
              <li>
                <strong>Quality:</strong> a11y (WCAG), performance, testing
                (Vitest/RTL)
              </li>
              <li>
                <strong>Git:</strong> feature branches, PRs, previews
              </li>
            </ul>
          </div>
        </section>

        {/* Selected Projects */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold">Selected Projects</h2>
          <ul className="mt-3 space-y-3 text-zinc-800">
            <li>
              <strong>CSS Frameworks:</strong> responsive layout with Bootstrap
              skin; uniform cards, improved profile grid, single-post hero
              tweaks.
            </li>
            <li>
              <strong>JavaScript Frameworks (HildeShop):</strong> React + TS
              storefront; SPA routing fixed on Netlify; context split (clean
              imports & simpler tests).
            </li>
            <li>
              <strong>Semester Project 2 (resit) — TailFinder:</strong> React +
              Tailwind; a11y-first image reveal; SEO polish (meta, robots,
              sitemap); Lighthouse 99-100s.
            </li>
            <li>
              <strong>Kristiansands Svømmeallianse (ksa.no):</strong> official
              club website on a live domain. Clean layout, clear navigation, and
              mobile-friendly pages. Launched early per client request; content
              and sections are being rolled out iteratively.
            </li>
          </ul>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold">Education</h2>
          <p className="mt-2 text-zinc-700">
            Front-end Development — Noroff (2 years)
          </p>
        </section>

        {/* Links */}
        <section className="mb-2">
          <h2 className="text-lg font-semibold">Links</h2>
          <ul className="mt-2 space-y-1 text-zinc-700">
            <li>
              <a
                href="https://github.com/Entav78"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a href="/" className="underline">
                Portfolio (Home)
              </a>
            </li>
            <li>
              <a
                href="https://www.ksa.no/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                ksa.no (live)
              </a>
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="mt-10 border-t pt-4 text-sm text-zinc-500">
          © {new Date().getFullYear()} Hilde Vatne
        </footer>
      </div>
    </main>
  );
}
