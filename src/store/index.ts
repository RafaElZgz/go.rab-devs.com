// https://typescript.nuxtjs.org/es/cookbook/store

import { ActionTree } from 'vuex'
import { getAccessorType } from 'typed-vuex'

import { Context } from '@nuxt/types'

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

export const state = () => ({
    existingLinks: [] as ShortenedLink[],
});

export type RootState = ReturnType<typeof state>;

export const actions: ActionTree<RootState, RootState> = {

    async nuxtServerInit({ state }, ctx: Context) {

        state.existingLinks = await this.$strapi.find(
            'shortened-links',
            {
                token: ctx.$config.apiToken,
            }
        ).catch(() => { ctx.app.$nuxt.error({ statusCode: 404 }); }) as ShortenedLink[];

    }
};

export const accessorType = getAccessorType({
    state,
    //getters,
    //mutations,
    actions,
    modules: {},
});