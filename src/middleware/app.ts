import { Context } from '@nuxt/types';

interface Visit {
    id: string,
    browser: string | undefined,
    browserLanguage: string | undefined,
    browserVersion: string | undefined,
    city: string | undefined,
    country: string | undefined,
    ipAddress: string,
    isp: string | undefined,
    language: string,
    os: string | undefined,
    osVersion: string | undefined,
    region: string | undefined,
}

interface ShortenedLink {
    id: string,
    user: Object,
    name: string,
    slug: string,
    url: string,
    visits: {
        count: number,
        list: Visit[],
    },
}

export default async function (ctx: Context) {

    if (ctx.route.path === '/') {

        ctx.redirect(ctx.app.localePath('app'));

    } else {

        const url = await ctx.app.$strapi.find(
            'shortened-links',
            {
                slug: ctx.route.params.slug,
            }
        ).catch(() => { ctx.error({ statusCode: 404 }); }) as ShortenedLink;

        const visit: Visit = {
            id: '',
            browser: '',
            browserLanguage: '',
            browserVersion: '',
            city: '',
            country: '',
            ipAddress: '',
            isp: '',
            language: ctx.i18n.locale,
            os: '',
            osVersion: '',
            region: '',
        };

        const visits_list: Visit[] = url.visits.list;
        visits_list.push(visit);

        const new_visits_parameter = {
            count: url.visits.count + 1,
            list: visits_list,
        };

        await ctx.$axios.put(`${process.env.API_URL}/shortened-links/${url.id}?token=${process.env.API_TOKEN}`,
            {
                visits: new_visits_parameter
            },
        );

        ctx.redirect(url.url);
    }
}