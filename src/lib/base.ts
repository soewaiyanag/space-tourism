const raw = import.meta.env.BASE_URL;

/** The site's base path, always with exactly one trailing slash. */
export const base = raw.endsWith("/") ? raw : `${raw}/`;
