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
            I care about usability and performance. This selection includes
            three framework projects and a live club site at ksa.no, where I
            implemented accessible navigation, responsive layouts, and semantic
            HTML. Built with React, TypeScript, and Tailwind.
          </p>

          {/* Tools row */}
          <p style={{ marginTop: '.25rem' }} className="text-sm text-zinc-600">
            <span className="font-semibold">Tools:</span> React · TypeScript ·
            Tailwind CSS · Bootstrap · Vite · Netlify · REST APIs
          </p>
        </header>

        <Section title="My Projects">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <TeaserCard key={p.id} p={p} />
            ))}
          </div>
        </Section>
      </Container>
    </main>
  );
}
