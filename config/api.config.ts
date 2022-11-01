// https://strapi-v0.nuxtjs.org/options

import data from '../data.global';

export default {
    url: data.api.url,
    entities: [],
    key: 'authToken',
    expires: '30d',
    cookie: {
        path: '/',
        priority: 'high',
        sameSite: 'lax',
    },
}