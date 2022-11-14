<script lang="ts">

import Vue from 'vue';

export default Vue.extend({
    head() {
        return {
            meta: [
                {
                    hid: 'description', name: 'description',
                    content: this.$i18n.t('pages.dashboard.index.meta.description').toString(),
                },
                {
                    hid: 'og:description', property: 'og:description',
                    content: this.$i18n.t('pages.dashboard.index.meta.description').toString(),
                },
                {
                    hid: 'twitter:description', name: 'twitter:description',
                    content: this.$i18n.t('pages.dashboard.index.meta.description').toString(),
                },
            ],
        }
    },
    layout: 'dashboard',
})
</script>

<template>
    <div>
        <div class="md:px-14 md:py-12">
            <h1 class="py-1 text-3xl font-semibold dark:text-gray-300">
                Bienvenido <span class="font-bold">{{ `${$strapi.user.name} ${$strapi.user.surname}` }}</span> 👋
            </h1>
            <h3 class="text-xl dark:text-white">
                Actualmente tienes <span class="font-bold">{{ $strapi.user.shortened_links.length }}</span> links acortados.
            </h3>
        </div>
    </div>
</template>