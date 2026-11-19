// Portfolio source. Add a new object only when its content and public use are approved.
// Keep status explicit: for example, In progress, Concept or Live.
// Every project needs a unique URL-safe slug. Case-study pages are generated automatically.
// Leave out confidential names, unverified results and external links without permission.
// For another project, add preview: {src: '/assets/projects/file.webp', alt: '...', caption: '...'}.
// Only use an approved image of that project. Without one, a neutral preview panel is shown.
export const projects = [
  {
    slug: 'aldwyn-labs',
    title: 'Aldwyn Labs',
    category: 'Studio website',
    type: 'Self-initiated project',
    status: 'In progress',
    artwork: 'aldwyn',
    summary: 'A considered home for an independent digital studio. Built around a distinctive identity, clear services and room for work to grow.',
    disciplines: ['Website design', 'Front-end development', 'Portfolio structure'],
    brief: 'Create a website for Aldwyn Labs that makes the offer easy to understand: business websites, with optional website care. Give the studio a clear visual voice and a dedicated place to share projects as they develop.',
    decisions: [
      {
        title: 'An identity that holds together.',
        text: 'The chosen interlocking AL monogram stays consistent across the site. Dark aubergine and plum provide the foundation; iris is reserved for emphasis, selected artwork and important actions.'
      },
      {
        title: 'A page for each useful question.',
        text: 'Services explain the website offer. Website Care describes the boundaries of ongoing support. The Studio introduces the approach, while the Portfolio gives individual projects space for their story.'
      },
      {
        title: 'A quieter way to show the work.',
        text: 'Project status and context are visible beside the design. This entry documents the studio’s own website while it is being developed, including the choices that guide its structure and visual direction.'
      }
    ],
    scope: [
      'A shared visual system across the main website pages',
      'A portfolio with individual project stories',
      'Layouts designed to adapt to desktop and mobile',
      'A local brief-preparation tool for the project-start page'
    ],
    progress: 'The multi-page website is being developed and reviewed. Typography and interface details remain open to refinement. The site is not published, and the brief tool does not send an enquiry.'
  }
];
