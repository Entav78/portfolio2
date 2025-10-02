import { Link, NavLink, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-white to-zinc-50">
      <header className="border-b">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-lg font-semibold">
            Hilde Vatne — Portfolio
          </Link>
          <nav className="flex gap-4 text-sm">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? 'underline' : 'hover:underline'
              }
            >
              Work
            </NavLink>
            <NavLink
              to="/cv"
              className={({ isActive }) =>
                isActive ? 'underline' : 'hover:underline'
              }
            >
              CV
            </NavLink>
            <a
              href="https://github.com/entav78"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-8">
        <Outlet /> {/* pages render here */}
      </main>

      <footer className="mx-auto max-w-5xl px-6 py-10 text-sm text-zinc-500">
        © {new Date().getFullYear()} Hilde Vatne ·{' '}
        <a
          className="underline"
          href="https://github.com/entav78"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}
