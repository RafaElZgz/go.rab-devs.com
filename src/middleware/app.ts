import { Context } from '@nuxt/types';

interface ShortenedLink {
    user: Object,
    name: string,
    slug: string,
    url: string,
    visits: {
        count: number,
        list: [
            {
                id: string,
                browser: string,
                browserLanguage: string,
                browserVersion: string,
                city: string,
                country: string,
                ipAddress: string,
                isp: string,
                language: string,
                os: string,
                osVersion: string,
                region: string,
            }
        ],
    },
}

export default async function (ctx: Context) {

    if (ctx.route.path.startsWith('/app')) {

        ctx.redirect(ctx.app.localePath('app'));

    } else {

        const url = await ctx.app.$strapi.find(
            'shortened-links',
            {
                slug: ctx.route.params.slug,
            }
        ).catch(() => { ctx.error({ statusCode: 404 }); }) as ShortenedLink;

        ctx.redirect(url.url);
    }
}