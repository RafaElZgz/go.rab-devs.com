// https://typescript.nuxtjs.org/es/cookbook/store
// https://typed-vuex.roe.dev/

import { actionTree, getAccessorType, mutationTree } from 'typed-vuex'
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
}

export const state = () => ({
    existingLinks: [] as ShortenedLink[],
});

type RootState = ReturnType<typeof state>;

export const getters = {
    existingLinks: (state: RootState) => state.existingLinks,
}

export const mutations = mutationTree(state, {});

export const actions = actionTree(
    { state, getters, mutations },
    {
        async nuxtServerInit({ state }, ctx: Context) {

            const apiResponse = await ctx.$axios.$get(`${ctx.$config.apiURL}/items/shortened_links`,
                {
                    headers: {
                        'Authorization': `Bearer ${ctx.$config.apiToken}`
                    },
                }
            );
            state.existingLinks = apiResponse.data;
        },
    }
);

export const accessorType = getAccessorType({
    state,
    getters,
    mutations,
    actions,
    modules: {},
});