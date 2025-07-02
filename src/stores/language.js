import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

import EnglishFlag from '@/assets/flags/gb.svg';
import PolishFlag from '@/assets/flags/pl.svg';

export const useLanguageStore = defineStore('language', () => {
  const languages = Object.freeze([
    { code: 'en', name: 'English', icon: EnglishFlag },
    { code: 'pl', name: 'Polski', icon: PolishFlag }
  ]);

  const currentLanguage = ref('en');

  const setLanguage = (lang) => {
    currentLanguage.value = lang;
    localStorage.setItem('preferred-language', lang);
  };

  const getBrowserLanguage = () => {
    const browserLang = navigator.language.toLowerCase();

    for (const language of languages) {
      if (browserLang.startsWith(language.code)) {
        return language.code;
      }
    }

    return 'en';
  };

  const loadLanguage = () => {
    const saved = localStorage.getItem('preferred-language');
    if (saved) {
      currentLanguage.value = saved;
    } else {
      currentLanguage.value = getBrowserLanguage();
    }
  };

  return {
    language: computed(() => currentLanguage.value),
    languageData: computed(() => languages.find((lang) => lang.code == currentLanguage.value)),
    languages,
    setLanguage,
    loadLanguage
  };
});
