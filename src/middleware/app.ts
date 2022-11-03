import { Context } from '@nuxt/types';

interface Visit {
    id: number,
    browser: string | undefined,
    browserLanguage: string | undefined,
    browserVersion: string | undefined,
    city: string | undefined,
    country: string | undefined,
    deviceType: string | undefined,
    ipAddress: string | undefined,
    isp: string | undefined,
    i18nLanguage: string,
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

    } else if (!ctx.route.path.startsWith('/app')) {

        const url = await ctx.app.$strapi.find(
            'shortened-links',
            {
                token: ctx.$config.apiToken,
                slug: ctx.route.params.slug,
            }
        ).catch(() => { ctx.error({ statusCode: 404 }); }) as ShortenedLink;

        if (!Array.isArray(url)) {

            const ip_data = await ctx.app.$axios.$get('http://ip-api.com/json/');

            const visit: Visit = {
                id: url.visits.count + 1,
                browser: ctx.app.$ua.browser(),
                browserLanguage: ctx.app.i18n.getBrowserLocale(),
                browserVersion: ctx.app.$ua.browserVersion(),
                city: ip_data.city,
                country: ip_data.country,
                deviceType: ctx.app.$ua.deviceType(),
                ipAddress: ip_data.query,
                isp: ip_data.isp,
                i18nLanguage: ctx.i18n.locale,
                os: ctx.app.$ua.os(),
                osVersion: ctx.app.$ua.osVersion(),
                region: ip_data.regionName,
            };

            const visits_list: Visit[] = url.visits.list;
            visits_list.push(visit);

            const new_visits_parameter = {
                count: url.visits.count + 1,
                list: visits_list,
            };

            await ctx.$axios.put(`${ctx.$config.apiURL}/shortened-links/${url.id}?token=${ctx.$config.apiToken}`,
                {
                    visits: new_visits_parameter
                },
            );

            ctx.redirect(url.url);

        } else {
            ctx.error({ statusCode: 404 });
        }
    }
}