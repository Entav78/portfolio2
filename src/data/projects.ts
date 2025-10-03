export type Project = {
  id: string;
  title: string;
  teaser: string;
  image: string;
  alt?: string;
  liveUrl: string;
  repoUrl: string;
  readmeUrl: string;
  caption: string;
  content?: string[];
  contentHtml?: string;
  liveDomain?: boolean;
  wip?: boolean; //(work in progress)
};

export const projects: Project[] = [
  {
    id: 'cssfw',
    title: 'CSS Frameworks',
    teaser:
      'Responsive layout using a Bootstrap skin on a Vite + vanilla JS app. Polished grids, uniform card media, off-canvas nav, and small UX touches.',
    image: '/assets/cssfw.webp',
    liveUrl: 'https://css-frameworks-portfolio2.netlify.app/',
    repoUrl: 'https://github.com/Entav78/css-frameworks-portfolio2',
    readmeUrl:
      'https://github.com/Entav78/css-frameworks-portfolio2/blob/main/README.md',
    caption: 'Homepage screenshot',
    content: [
      'A small social feed used to practice CSS frameworks. I layered Bootstrap onto a Vite + vanilla JS frontend that talks to the Noroff Social API, then shipped it to Netlify. For Portfolio 2 I focused on polish—uniform card image sizing, responsive grids on Home/Profile, a cleaner single-post hero, and subtle UX fixes like pointer cursors and a simplified nav.',
    ],
    liveDomain: true,
    wip: false,
  },
  {
    id: 'jsfw',
    title: 'JavaScript Frameworks',
    teaser:
      'Modular, framework-free (vanilla JS) app with feature-based routing, loading/error states, and API calls. Built for clarity and maintainability.',
    image: '/assets/jsfw.webp',
    liveUrl: 'https://jsfw-2025-hilde.netlify.app/',
    repoUrl: 'https://github.com/Entav78/jsfw-2025-hilde',
    readmeUrl: 'https://github.com/Entav78/jsfw-2025-hilde/blob/main/README.md',
    caption: 'List view',
    contentHtml: `
    <p><strong>What it does</strong> — HildeShop is a React + TypeScript storefront …</p>
    <p><strong>How it’s organized</strong></p>
    <ul>
      <li><strong>Tech:</strong> React, TypeScript, React Router, Tailwind CSS, Vitest/Jest-DOM, Netlify.</li>
      <li><strong>Pages:</strong> Home (search/sort), Product detail, Cart, Checkout Success, Contact.</li>
      <li><strong>State & data:</strong> Component state + localStorage persistence for cart; API utilities.</li>
      <li><strong>Testing:</strong> Header, Cart, Contact, Home (search/sort logic).</li>
      <li><strong>UX:</strong> Accessible semantics, keyboard controls, toasts, responsive layout.</li>
    </ul>
    <p><strong>One concrete improvement</strong> — <em>Type-safe refactor + cart persistence.</em> …</p>
  `,

    liveDomain: true,
    wip: false,
  },
  {
    id: 'sp2-resit',
    title: 'Semester Project 2 — TailFinder (resit)',
    teaser:
      'React + Tailwind app. Safe-by-default search results, filters, auth, and a “reveal all” admin view. Emphasis on usability and clear empty states.',
    image: '/assets/sp2.webp',
    liveUrl: 'https://tailfinder.netlify.app/',
    repoUrl: 'https://github.com/Entav78/tailfinder',
    readmeUrl: 'https://github.com/Entav78/tailfinder/blob/main/README.md',
    caption: 'TailFinder — results grid with filters and pagination',
    content: [
      'TailFinder is a pet adoption UI from SP2 (resit). It features authentication, robust state, dynamic filters and paginated lists.',
      "UX detail: the app starts with widely liked pets; use the 'Reveal all' control to include every species.",
      'For Portfolio 2 I improved a11y/perf: WebP screenshots (<200KB), clearer focus outlines, and refined ARIA on filter controls.',
    ],
    liveDomain: false,
    wip: false,
  },

  {
    id: 'ksa',
    title: 'Kristiansands Svømmeallianse (ksa.no)',
    teaser:
      'Official club website on a custom domain. A11y-first navigation, semantic structure, and mobile menu; incremental rollout.',
    image: '/assets/ksa.webp',
    liveUrl: 'https://www.ksa.no/',
    repoUrl: 'https://github.com/Entav78/ksa',
    readmeUrl: 'https://github.com/Entav78/ksa#readme',
    caption: 'Homepage screenshot of ksa.no',
    content: [
      'This is the official website for Kristiansands Svømmeallianse. I rebuilt the front end with a clean layout, responsive components and a simple content structure.',
      'Tech & workflow: React + TypeScript + Tailwind (Vite). Each page is deployed via Netlify with previews per branch to keep changes safe before publishing.',
      'Improvements for Portfolio 2: optimized screenshots to WebP under 200KB, clarified link text and focus styles for keyboard users, and ensured external links open in a new tab.',
    ],
    liveDomain: true,
    wip: true,
  },
];
