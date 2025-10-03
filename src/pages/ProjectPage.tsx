import { useParams, Link } from 'react-router-dom';
import { projects } from '@/data/projects';

export default function ProjectPage() {
  const { id } = useParams();
  const p = projects.find((x) => x.id === id);

  if (!p) {
    return (
      <main className="py-12">
        <p className="text-lg">
          Project not found.{' '}
          <Link className="underline" to="/">
            Go back
          </Link>
        </p>
      </main>
    );
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert('Link copied');
    } catch {
      // fallback
      prompt('Copy this link:', window.location.href);
    }
  };

  return (
    <main>
      {p.wip && (
        <div className="mt-4 rounded-lg border border-amber-300 bg-amber-50 text-amber-900 px-3 py-2 text-sm">
          This project is still under development. Some features and content may
          change.
        </div>
      )}

      <header className="mt-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          <h1 className="text-3xl font-bold">{p.title}</h1>
          {p.liveDomain && (
            <span className="rounded-full px-2 py-0.5 text-xs bg-emerald-100 text-emerald-800">
              Live domain
            </span>
          )}
          {p.wip && (
            <span className="rounded-full px-2 py-0.5 text-xs bg-amber-100 text-amber-800">
              In progress
            </span>
          )}
        </div>
        <button onClick={copy} className="underline">
          Copy link
        </button>
      </header>

      <figure className="mt-6">
        <img
          src={p.image}
          alt={p.alt ?? ''}
          className="w-full rounded-2xl"
          fetchPriority="high"
          width={1280}
          height={720}
        />
        {p.caption && (
          <figcaption className="mt-2 text-sm text-zinc-600">
            {p.caption}
          </figcaption>
        )}
      </figure>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={p.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 rounded-lg bg-black text-white"
        >
          Live site
        </a>

        {p.repoUrl && (
          <a
            href={p.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-lg border"
          >
            GitHub Repo
          </a>
        )}

        {p.readmeUrl && (
          <a
            href={p.readmeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-lg border"
          >
            GitHub README
          </a>
        )}

        <Link to="/" className="px-3 py-2 rounded-lg border">
          ← Back
        </Link>
      </div>

      <section className="prose mt-8 max-w-none">
        {p.contentHtml ? (
          <div dangerouslySetInnerHTML={{ __html: p.contentHtml }} />
        ) : (p.content ?? []).length ? (
          (p.content ?? []).map((para, i) => <p key={i}>{para}</p>)
        ) : null}
      </section>
    </main>
  );
}
