export const SITE = {
  name: 'WMS',
  fullName: 'William Martínez Sandoval',
  wordmark: 'WM · ARQUITECTURA',
  tagline: 'Arquitecto',
  region: 'Pacífico Sur · Costa Rica',
  base: 'Dominical, Costa Rica',
  yearFounded: 2003,
  domain: 'wmarquitectura.com',
  contact: {
    phone: '+506 8375 2474',
    whatsappLink: 'https://wa.me/50683752474',
    instagramHandle: '@wmarquitectura',
    instagramLink: 'https://www.instagram.com/wmarquitectura',
    email: 'arquitectowilliammartinez@gmail.com',
    emailLink: 'mailto:arquitectowilliammartinez@gmail.com',
  },
} as const;

export type Lang = 'es' | 'en' | 'fr';
export const LANGS: Lang[] = ['es', 'en', 'fr'];
export const DEFAULT_LANG: Lang = 'es';

export const LANG_LABELS: Record<Lang, string> = {
  es: 'ES',
  en: 'EN',
  fr: 'FR',
};

export const LANG_NAMES: Record<Lang, string> = {
  es: 'Español',
  en: 'English',
  fr: 'Français',
};
