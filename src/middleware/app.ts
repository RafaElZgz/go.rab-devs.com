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
    createdAt: Date,
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
    updated_at: Date,
}

export default async function (ctx: Context) {

    if (ctx.route.path === '/') {

        ctx.redirect(ctx.app.localePath('app'));

    } else if (!ctx.route.path.startsWith('/app')) {

        const request_slug = ctx.route.path.slice(1);

        const apiResponse = await ctx.$axios.$get(`${ctx.$config.apiURL}/items/shortened_links?slug=${request_slug}`,
            {
                headers: {
                    'Authorization': `Bearer ${ctx.$config.apiToken}`
                },
            }
        );

        const request_link = apiResponse.data[0];

        if (request_link) {

            const ip = ctx.req.headers['x-forwarded-for'] || ctx.req.socket.remoteAddress;
            const ip_data = await ctx.app.$axios.$get(`http://ip-api.com/json/${ip}`);

            const visit: Visit = {
                id: request_link.visits.count + 1,
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
                createdAt: new Date(),
            };

            const visits_list: Visit[] = request_link.visits.list;
            visits_list.push(visit);

            const new_visits_parameter = {
                count: request_link.visits.count + 1,
                list: visits_list,
            };

            await ctx.$axios.put(`${ctx.$config.apiURL}/items/shortened_links/${request_link.id}?token=${ctx.$config.apiToken}`,
                {
                    visits: new_visits_parameter,
                    updated_at: new Date(),
                },
                {
                    headers: {
                        'Authorization': `Bearer ${ctx.$config.apiToken}`
                    },
                }
            );

            ctx.redirect(request_link.url);

        } else {
            ctx.error({ statusCode: 404 });
        }
    }
}