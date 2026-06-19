const BASE = import.meta.env.PUBLIC_ASSETS_BASE ?? '';

/**
 * Build a public URL for an asset stored in the iDrive E2 bucket.
 * Pass paths relative to the bucket root (e.g. `proyectos/casa-tropical/cover.jpg`).
 */
export const asset = (path: string): string => {
  if (!path) return '';
  if (/^https?:\/\//i.test(path)) return path;
  return `${BASE}/${path.replace(/^\/+/, '')}`;
};
