import { en } from './locales/en';
import i18next, { StringMap, TOptions } from 'i18next';
import { getTranslationKeys } from 'i18n-keys';

i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: en,
    },
  },
});

export const translate = (key: string, options?: TOptions<StringMap>) => i18next.t(key, options);

export const translationKeys = getTranslationKeys(en);
