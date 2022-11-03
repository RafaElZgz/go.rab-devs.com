import apiConfig from "./config/api.config";
import axiosConfig from "./config/axios.config";
import i18nConfig from "./config/i18n.config";
import pwaConfig from "./config/pwa.config";
import themeConfig from "./config/theme.config";
import sitemapConfig from "./config/sitemap.config";

import data from './data.global';

export default {

  // https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  // https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
    '@nuxt/typescript-build',
    'nuxt-typed-vuex',
  ],


  // https://go.nuxtjs.dev/config-components
  components: true,

  // https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/scrollbar.css',
  ],

  // https://go.nuxtjs.dev/config-head
  head: {
    title: data.main.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
    ],
    script: [],
  },

  // https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/strapi',
    '@nuxtjs/toast',
    'nuxt-user-agent',
  ],

  // https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/flowbite.js', mode: 'client' },
    { src: '~/plugins/preline.js', mode: 'client' },
  ],

  // https://nuxtjs.org/tutorials/moving-from-nuxtjs-dotenv-to-runtime-config/
  privateRuntimeConfig: {
    apiToken: process.env.API_TOKEN,
  },
  publicRuntimeConfig: {
    apiURL: process.env.API_URL,
  },

  // https://nuxtjs.org/docs/configuration-glossary/configuration-server
  server: {
    port: 6583,
    host: '0.0.0.0',
  },

  // https://nuxtjs.org/docs/configuration-glossary/configuration-srcdir/
  srcDir: 'src/',

  // https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // https://nuxtjs.org/docs/configuration-glossary/configuration-target
  target: 'server',

  // https://nuxtjs.org/docs/configuration-glossary/configuration-watchers/
  watchers: {
    webpack: {
      ignored: [
        '**/.git/**',
      ]
    }
  },

  /*
   * Modules configs
  */
  axios: axiosConfig,
  colorMode: themeConfig,
  i18n: i18nConfig,
  pwa: pwaConfig,
  sitemap: sitemapConfig,
  strapi: apiConfig,
}
