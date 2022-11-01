// https://i18n.nuxtjs.org/options-reference/

import data from '../data.global';

export default {
    baseUrl: `https://${data.main.domain}`,
    locales: [
        { code: 'es', iso: 'es-ES', file: 'es.js', name: 'Español' },
        { code: 'en', iso: 'en-EN', file: 'en.js', name: 'English' },
    ],
    defaultLocale: 'es',
    lazy: true,
    langDir: '@/locales'
}