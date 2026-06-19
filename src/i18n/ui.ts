import es from './es.json';
import en from './en.json';
import fr from './fr.json';
import type { Lang } from '../lib/site';
import { DEFAULT_LANG, LANGS } from '../lib/site';

const dicts = { es, en, fr } as const;

export type Dict = typeof es;

export const getDict = (lang: Lang): Dict => dicts[lang] ?? dicts[DEFAULT_LANG];

/**
 * Resolve a dot-path inside the dictionary, e.g. `t('hero.title', 'es')`.
 * Falls back to the default language and finally to the key itself.
 */
export const t = (key: string, lang: Lang): string => {
  const fromLang = lookup(dicts[lang], key);
  if (fromLang != null) return fromLang;
  const fromDefault = lookup(dicts[DEFAULT_LANG], key);
  if (fromDefault != null) return fromDefault;
  return key;
};

const lookup = (dict: unknown, key: string): string | null => {
  const parts = key.split('.');
  let cur: unknown = dict;
  for (const p of parts) {
    if (cur && typeof cur === 'object' && p in (cur as Record<string, unknown>)) {
      cur = (cur as Record<string, unknown>)[p];
    } else {
      return null;
    }
  }
  return typeof cur === 'string' ? cur : null;
};

export const isLang = (value: string | undefined): value is Lang =>
  !!value && (LANGS as readonly string[]).includes(value);
