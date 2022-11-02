// https://strapi-v0.nuxtjs.org/options

export default {
    url: process.env.API_URL,
    entities: [],
    key: 'authToken',
    expires: '30d',
    cookie: {
        path: '/',
        priority: 'high',
        sameSite: 'lax',
    },
}