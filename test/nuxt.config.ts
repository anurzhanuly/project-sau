import { defineNuxtConfig } from 'nuxt';
import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
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
  windicss: {
    analyze: true
  },
  vite: {
    plugins: [
      eslintPlugin()
    ]
  }
});
