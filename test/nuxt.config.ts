import { defineNuxtConfig } from 'nuxt';
import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
  meta: {
    htmlAttrs: {
      lang: 'ru'
    },
    title: 'Symptom',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'description', content: 'Опросник симптомов для выявления рисков для здоровья' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  buildModules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    [
      '@intlify/nuxt3',
      {
        localeDir: 'locales',
        vueI18n: {
          locale: 'en'
        }
      }
    ]
  ],
  vite: {
    plugins: [
      eslintPlugin()
    ]
  },
  buildDir: 'build'
});
