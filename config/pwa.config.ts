// PWA module configuration: https://go.nuxtjs.dev/pwa

import data from "../data.global";

export default {
    icon: {},
    meta: {
        name: data.main.name,
        author: data.main.name,
        description: data.main.description, // TODO: i18n
        theme_color: data.main.color,
        lang: 'es', // TODO: i18n

        /* Open Graph */
        ogType: 'website',
        ogSiteName: data.main.name,
        ogTitle: data.main.name, // TODO: i18n
        ogDescription: data.main.description, // TODO: i18n
        ogHost: `https://${data.main.domain}`, // TODO: i18n
        ogImage: {
            path: '/icon.png',
        },
        ogUrl: `https://${data.main.domain}`, // TODO: i18n

        /* Twitter Card */
        twitterCard: 'summary',
        twitterSite: 'https://twitter.com/rab_devs',
        twitterCreator: 'https://twitter.com/rab_devs',
    },
    manifest: {
        name: data.main.name,
        short_name: data.main.name,
        description: data.main.description, // TODO: i18n
        background_color: data.main.color,
        lang: 'es', // TODO: i18n
    },
}