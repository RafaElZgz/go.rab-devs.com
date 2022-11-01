<script lang="ts">

import Vue from 'vue';

export default Vue.extend({
    head() {
        return {
            meta: [
                {
                    hid: 'description', name: 'description',
                    content: this.$i18n.t('pages.index.meta.description').toString(),
                },
                {
                    hid: 'og:description', property: 'og:description',
                    content: this.$i18n.t('pages.index.meta.description').toString(),
                },
                {
                    hid: 'twitter:description', name: 'twitter:description',
                    content: this.$i18n.t('pages.index.meta.description').toString(),
                },
            ],
        }
    },
    layout: 'empty',
})
</script>
        
<template>
    <UtilError404 />
</template>