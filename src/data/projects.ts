export type Project = {
  id: string;
  title: string;
  teaser: string;
  image: string;
  liveUrl: string;
  repoUrl: string;
  readmeUrl: string;
  caption: string;
  content: string[];
  liveDomain?: boolean;
  wip?: boolean; //(work in progress)
};

export const projects: Project[] = [
  {
    id: 'cssfw',
    title: 'CSS Frameworks',
    teaser:
      'Responsive layout using a CSS framework with improved accessibility and image performance.',
    image: '/assets/cssfw.webp',
    liveUrl: 'https://example.com/cssfw',
    repoUrl: 'https://github.com/entav78/<repo>',
    readmeUrl: 'https://github.com/you/cssfw#readme',
    caption: 'Homepage screenshot',
    content: [
      'Short description of the goal and stack.',
      'Mention one improvement you made for Portfolio 2.',
    ],
    liveDomain: true,
    wip: false,
  },
  {
    id: 'jsfw',
    title: 'JavaScript Frameworks',
    teaser:
      'Component-based app in React with loading/error states and feature-based structure.',
    image: '/assets/jsfw.webp',
    liveUrl: 'https://example.com/jsfw',
    repoUrl: 'https://github.com/entav78/<repo>',
    readmeUrl: 'https://github.com/you/jsfw#readme',
    caption: 'List view',
    content: [
      'What it does, how it’s organized.',
      'Note a concrete improvement + commit link in README.',
    ],
    liveDomain: true,
    wip: false,
  },
  {
    id: 'sp2-resit',
    title: 'Semester Project 2 (resit)',
    teaser:
      'Updated SP2 focusing on accessibility, performance and content polish.',
    image: '/assets/sp2.webp',
    liveUrl: 'https://example.com/sp2',
    repoUrl: 'https://github.com/entav78/<repo>',
    readmeUrl: 'https://github.com/you/sp2#readme',
    caption: 'Project page',
    content: [
      'Why this is your most up-to-date SP2.',
      'Call out one a11y/perf improvement.',
    ],
    liveDomain: true,
    wip: false,
  },
  {
    id: 'ksa',
    title: 'Kristiansands Svømmeallianse (ksa.no)',
    teaser:
      'Official club website on a custom domain with accessible navigation and fast deployments.',
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
