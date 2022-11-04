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
    <UtilMaintenance class="-mt-24" />
</template>