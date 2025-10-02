import Container from '@/components/Container';
import { Section } from '@/components/Section';
import TeaserCard from '@/components/TeaserCard';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <main className="min-h-dvh bg-gradient-to-b from-white to-zinc-50">
      <Container>
        <header className="py-12 sm:py-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            Welcome to my portfolio
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-600 leading-7">
            I build accessible, responsive web apps with React and TypeScript.
            Here are three selected projects from CSS Frameworks, JavaScript
            Frameworks, and Semester Project 2 (resit).
          </p>
        </header>

        <Section title="My Projects">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <TeaserCard key={p.id} p={p} />
            ))}
          </div>
        </Section>

        <footer className="py-12 text-sm text-zinc-500">
          Find me on{' '}
          <a
            className="underline"
            href="https://github.com/entav78"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </footer>
      </Container>
    </main>
  );
}
