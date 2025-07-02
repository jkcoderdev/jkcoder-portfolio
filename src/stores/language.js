import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';

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
      const browserLanguage = getBrowserLanguage();
      setLanguage(browserLanguage);
    }
  };

  const language = computed(() => currentLanguage.value);
  const languageData = computed(() => languages.find((lang) => lang.code == currentLanguage.value));

  const { locale } = useI18n();
  watch(currentLanguage, (newLang) => {
    locale.value = newLang;
  }, { immediate: true });

  return {
    language,
    languageData,
    languages,
    setLanguage,
    loadLanguage
  };
});
