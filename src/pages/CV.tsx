export default function CV() {
  return (
    <article className="prose">
      <h1>Curriculum Vitae</h1>
      <p>
        Front-end developer focusing on React, TypeScript, accessibility and
        secure UI patterns. I enjoy clear APIs, clean components, and small UX
        details that make apps feel fast.
      </p>

      <h2>Skills</h2>
      <ul>
        <li>React, TypeScript, Vite, React Router</li>
        <li>Tailwind CSS, SCSS, responsive design, accessibility (WCAG)</li>
        <li>REST APIs, fetch/React Query patterns, error/loading states</li>
        <li>Git/GitHub: feature branches, PR reviews, previews (Netlify)</li>
      </ul>

      <h2>Selected Projects</h2>
      <ul>
        <li>
          <strong>CSS Frameworks:</strong> responsive layout + a11y
          improvements.
        </li>
        <li>
          <strong>JavaScript Frameworks:</strong> componentized app;
          loading/error handling.
        </li>
        <li>
          <strong>Semester Project 2 (resit):</strong> a11y + performance
          polish.
        </li>
      </ul>

      <h2>Education</h2>
      <p>Front-end Development — Noroff (2 years)</p>

      <h2>Links</h2>
      <ul>
        <li>
          <a
            href="https://github.com/entav78"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        {/* Add LinkedIn or portfolio link when ready */}
      </ul>
    </article>
  );
}
