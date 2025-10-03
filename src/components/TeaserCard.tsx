import { Link } from 'react-router-dom';
import type { Project } from '@/data/projects';

export default function TeaserCard({ p }: { p: Project }) {
  const titleId = `project-${p.id}-title`;

  return (
    <article className="relative rounded-2xl bg-white shadow-sm ring-1 ring-black/5 hover:shadow-md transition">
      {/* 100% clickable overlay */}
      <Link
        to={`/projects/${p.id}`}
        className="absolute inset-0 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-black/70"
        aria-labelledby={titleId}
        aria-label={`Open project: ${p.title}`}
      />

      <figure className="aspect-video overflow-hidden rounded-t-2xl">
        <img
          src={p.image}
          alt={p.alt ?? `${p.title} screenshot`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        {/* Optional teaser caption if you ever want one */}
        {/* <figcaption className="sr-only">{p.caption}</figcaption> */}
      </figure>

      <div className="p-4">
        <h3
          id={titleId}
          className="text-lg font-semibold flex items-center gap-2 flex-wrap"
        >
          {p.title}
          {p.liveDomain && (
            <span className="rounded-full px-2 py-0.5 text-xs bg-emerald-100 text-emerald-700">
              Live domain
            </span>
          )}
          {p.wip && (
            <span className="rounded-full px-2 py-0.5 text-xs bg-amber-100 text-amber-800">
              In progress
              <span className="sr-only">
                {' '}
                — this page is still under development
              </span>
            </span>
          )}
        </h3>
        <p className="mt-1 text-sm text-zinc-600 line-clamp-2">{p.teaser}</p>
        <span className="mt-3 inline-block underline">Read more</span>
      </div>
    </article>
  );
}
