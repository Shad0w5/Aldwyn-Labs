// Original Aldwyn abstract artwork; decorative, never client or office photography.
export function brandArt(name, caption, className = '', eager = false) {
  const square = name === 'continuity';
  const sizes = className === 'home-opening-image' ? '(max-width: 620px) calc(100vw - 48px), 44vw' : '(max-width: 820px) calc(100vw - 48px), 44vw';
  return `<figure class="brand-art ${className}"><img src="/assets/brand-art/${name}.webp" srcset="/assets/brand-art/${name}-small.webp 640w, /assets/brand-art/${name}.webp 1120w" sizes="${sizes}" width="1120" height="${square ? 1120 : 1400}" alt="" loading="${eager ? 'eager' : 'lazy'}" ${eager ? 'fetchpriority="high"' : ''}><figcaption>${caption}</figcaption></figure>`;
}
