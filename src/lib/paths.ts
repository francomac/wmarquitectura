import type { Lang } from './site';

export const localePath = (lang: Lang, ...segments: string[]): string => {
  const tail = segments.filter(Boolean).join('/');
  return tail ? `/${lang}/${tail}` : `/${lang}`;
};

export const swapLocaleInPath = (path: string, target: Lang): string => {
  const cleaned = path.replace(/\/$/, '') || '/';
  const match = cleaned.match(/^\/(es|en|fr)(\/.*)?$/);
  if (match) {
    const rest = match[2] ?? '';
    return `/${target}${rest}` || `/${target}`;
  }
  return `/${target}`;
};
