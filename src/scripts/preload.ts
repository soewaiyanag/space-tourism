/**
 * Warms the browser's HTTP cache for a set of image URLs so that a later
 * `img.src = url` swap (e.g. switching tabs) resolves instantly instead of
 * triggering a fresh network fetch.
 */
export function preloadImages(urls: string[]): void {
  for (const url of urls) {
    const img = new Image();
    img.src = url;
  }
}
