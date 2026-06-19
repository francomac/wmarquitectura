export const SITE = {
  name: 'WMS',
  fullName: 'William Martínez Sandoval',
  wordmark: 'WM · ARQUITECTURA',
  tagline: 'Arquitecto',
  region: 'Pacífico Sur · Costa Rica',
  base: 'Dominical, Costa Rica',
  coords: '9°15′ N · 83°51′ W',
  yearFounded: 2003,
  domain: 'wmarquitectura.com',
  contact: {
    phone: '+506 8375 2474',
    whatsappLink: 'https://wa.me/50683752474',
    instagramHandle: '@williammartinezarquitectos',
    instagramLink: 'https://instagram.com/williammartinezarquitectos',
    facebookName: 'Arq William Martinez Sandoval',
    facebookLink: 'https://facebook.com/Arq.William.Martinez.Sandoval',
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
