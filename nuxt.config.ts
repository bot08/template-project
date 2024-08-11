// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  devtools: { enabled: true },

  build: {
    transpile: ['@heroicons/vue']
  },

  vite:{
    build: {
      target: 'es2022',
    },
    // esbuild: {
    //   drop: ["console"],
    // },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
  ],

  css: [
    '~/assets/css/style.css',
    '~/assets/css/inter.css'
  ],

  colorMode: {
    classSuffix: '',
    storageKey: 'theme',
    fallback: 'light',
  },

  pinia: {
    storesDirs: ['./stores/**'],
  },

  routeRules: {
    // '/': { static: true },
    // '/page2': { swr: true },
    // cache rules
    '/_nuxt/**': { headers: { 'cache-control': 's-maxage=86400' } },
    '/font/**': { headers: { 'cache-control': 's-maxage=86400' } },
    // redirects
    '/page1': { redirect: '/page2' },
  }
})
